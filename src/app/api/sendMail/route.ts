import Email from "@/app/components/mail/confirm";
import Message from "@/app/components/mail/message";
import { devInfos } from "@/app/constants/data";
import { EMAIL_REGEX, NAME_REGEX } from "@/app/constants/regex";
import { checkLength, checkPattern, Error } from "@/app/utils/tools";
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!checkPattern(NAME_REGEX, name)) {
            return Error("Invalid name", "warning", 400);
        }
        else if (!checkLength(name, [3, 30])) {
            return Error("Name must be between 3 and 30 characters", "warning", 400);
        }

        else if (!checkPattern(EMAIL_REGEX, email)) {
            return Error("Invalid email", "warning", 400);
        }
        else if (!checkLength(email, [10, 100])) {
            return Error("Email must be between 10 and 100 characters", "warning", 400);
        }

        const nameFormatted = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        const emailFormatted = email.toLowerCase();
        const subjectFormatted = subject.charAt(0).toUpperCase() + subject.slice(1).toLowerCase();
        const messageFormatted = message.charAt(0).toUpperCase() + message.slice(1);
        const messageHtml = await render(Message({ name: nameFormatted, email: emailFormatted, subject: subjectFormatted, message: messageFormatted }));
        const emailHtml = await render(Email({ name: nameFormatted }));

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_PASSWORD
            }
        });

        // To me 
        await transporter.sendMail({
            from: `"${nameFormatted}" <${emailFormatted}>`,
            to: String(process.env.MY_EMAIL),
            subject: subjectFormatted,
            html: messageHtml
        });

        // Confirm to user  
        await transporter.sendMail({
            from: `"${devInfos().name}" <${process.env.MY_EMAIL}>`,
            to: String(emailFormatted),
            subject: "Receipt confirmation",
            html: emailHtml
        });

        return new Response(JSON.stringify({
            res: emailFormatted
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    }
    catch (error) {
        return Error();
    }
}