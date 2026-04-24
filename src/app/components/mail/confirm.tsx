import { devInfos } from '@/app/constants/data';
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    pixelBasedPreset,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';

interface EmailProps {
    name: string;
}

export const Email = ({ name }: EmailProps) => {
    const date = new Date().getHours();

    return (
        <Html>
            <Head />
            <Tailwind
                config={{
                    presets: [pixelBasedPreset],
                    theme: {
                        extend: {
                            colors: {
                                brand: '#2250f4',
                                offwhite: '#fafbfb',
                            },
                            spacing: {
                                0: '0px',
                                20: '20px',
                                45: '45px',
                            },
                        },
                    },
                }}
            >
                <Preview>Youms&rsquo;s portfolio</Preview>
                <Body className="bg-offwhite font-sans text-base">
                    <Img
                        src={String(process.env.NEXT_PUBLIC_LOGO_URL!)}
                        width="100"
                        height="100"
                        alt="Youms's Logo"
                        className="mx-auto my-20"
                    />
                    <Container className="bg-white p-45">
                        <Heading className="mb-5 text-center leading-8">
                            Message received
                        </Heading>

                        <Section>
                            <Row>
                                <Text className="text-base">
                                    {
                                        date < 12 && "Bien le bonjour "
                                        ||
                                        date >= 16 && "Bien le bonsoir "
                                        ||
                                        date > 11 && date < 16 && "Bon après-midi "
                                    }{name}
                                </Text>
                                <Text className="text-base">
                                    Your message has been successfully sent to Youmbi Le-duc. He will get back to you shortly.
                                </Text>

                                <Text className="text-base">If you can't hear from him, you can contact him on : </Text>
                                <Text className="text-base">
                                    Phone :
                                    <Link href='tel:+237690552385' className='font-bold ml-20'>+ 237 6 90 55 23 85</Link>
                                </Text>
                                <Text className="text-base">
                                    Whatsapp :
                                    <Link href={`https://wa.me/+237690552385?text=${date >= 16 ? "Good evening " : "Good morning "}Le-duc I just visited your portfolio and I would like to chat with you`} className='font-bold ml-20'>+ 237 6 90 55 23 85</Link>
                                </Text>
                            </Row>
                        </Section>
                    </Container>

                    <Container className="mt-20">
                        <Text className="text-center text-gray-400">
                            Copyright &copy; {devInfos().email}
                        </Text>
                        <Text className="text-center text-gray-400">
                            Youms&rsquo;s portfolio {new Date().getFullYear()}
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default Email;
