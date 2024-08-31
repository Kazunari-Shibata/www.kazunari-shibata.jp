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
        {first_name}様<br />
        <br />
        ご連絡ありがとうございます。
        <br />
        下記の内容でメッセージを受信しました。
        <br />
        <br />
        ## お名前
        <br />
        {first_name} {last_name}
        <br />
        <br />
        ## メールアドレス
        <br />
        {email}
        <br />
        <br />
        ## メッセージ
        <br />
        {message.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ))}
        <br />
        以上です。柴田 和成
        <br />
        ※このメールアドレスは送信専用です。
        <br />
    </div>
);
