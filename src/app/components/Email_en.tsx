import * as React from 'react';

interface EmailTemplateProps {
    first_name: string;
    last_name: string;
    email: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    first_name,
    last_name,
    email,
    message,
}) => (
    <div>
        Hi, {first_name}.<br />
        <br />
        Thank you for reaching out.
        <br />
        I have received your inquiry with the following details.
        <br />
        <br />
        ## Your Name
        <br />
        {first_name} {last_name}
        <br />
        <br />
        ## Your E-mail
        <br />
        {email}
        <br />
        <br />
        ## Your message
        <br />
        {message.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ))}
        <br />
        Thanks, Kazunari
        <br />
        * This email is for sending purposes only.
        <br />
    </div>
);
