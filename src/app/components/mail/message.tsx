import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    pixelBasedPreset,
    Row,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';

interface MessageProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const Message = ({ name = "Youms", email, subject = "Tu as reçu un mail", message = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium laboriosam assumenda voluptatum reiciendis! Impedit autem labore mollitia temporibus. Excepturi, ea est quia velit quibusdam laborum debitis. Architecto totam impedit rem." }: MessageProps) => {

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
                        <Heading className="mb-5 leading-8">
                            Mail de {name}
                        </Heading>

                        <Section>
                            <Row>
                                <Text className="text-lg font-bold">
                                    Email : {email}
                                </Text>
                            </Row>
                        </Section>

                        <Section>
                            <Row>
                                <Text className="text-lg font-bold">
                                    Sujet : {subject}
                                </Text>
                            </Row>
                        </Section>

                        <Section>
                            <Row>
                                <Text className="text-base">
                                    {message}
                                </Text>
                            </Row>
                        </Section>
                    </Container>

                    <Container className="mt-20">
                        <Text className="text-center text-gray-400">
                            Copyright &copy; youmsc.co@gmail.com
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

export default Message;
