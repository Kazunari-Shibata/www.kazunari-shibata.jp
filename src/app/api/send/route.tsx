import { NextRequest } from 'next/server';
import { EmailTemplate as EmailTemplate_en } from '@/app/components/Email_en';
import { EmailTemplate as EmailTemplate_jp } from '@/app/components/Email_jp';
import { Resend } from 'resend';
import * as React from 'react';
import DOMPurify from 'isomorphic-dompurify';

const resend = new Resend(process.env.RESEND_API_KEY);
interface SendProps {
    success_msg: string;
    error_msg: string;
}

export async function POST(
    request: NextRequest,
    { success_msg, error_msg }: SendProps
) {
    const formData = await request.formData();
    const { first_name, last_name, email, message, lang } = Object.fromEntries(
        Array.from(formData.entries()).map(([key, value]) => [
            key,
            DOMPurify.sanitize(value as string),
        ])
    );
    if (lang === 'en') {
        success_msg = 'Message sent successfully.';
        error_msg = 'Sorry, Unable to send the message.';
    } else {
        success_msg = 'データの送信に成功しました。';
        error_msg = 'おっと、データの送信に失敗しました。';
    }
    try {
        const emailConfig = {
            ja: {
                from: '柴田 和成 <noreply@kazunari-shibata.jp>',
                subject: `メッセージを受信しました。 #${Math.floor(
                    1000 + Math.random() * 9000
                )}`,
                template: EmailTemplate_jp,
            },
            en: {
                from: 'Kazunari Shibata <noreply@kazunari-shibata.jp>',
                subject: `I have received your message. #${Math.floor(
                    1000 + Math.random() * 9000
                )}`,
                template: EmailTemplate_en,
            },
        };

        const config =
            emailConfig[lang as keyof typeof emailConfig] || emailConfig.en;

        const { data, error } = await resend.emails.send({
            from: config.from,
            to: email,
            bcc: ['admin@kazunari-shibata.jp'],
            subject: config.subject,
            react: config.template({
                first_name: first_name,
                last_name: last_name,
                email: email,
                message: message,
            }) as React.ReactElement,
        });

        if (error) {
            return Response.json(
                {
                    error,
                    message: error_msg,
                    status: 'error',
                },
                { status: 500 }
            );
        }

        return Response.json({
            data,
            message: success_msg,
            status: 'success',
        });
    } catch (error) {
        return Response.json(
            {
                error,
                message: error_msg,
                status: 'error',
            },
            { status: 500 }
        );
    }
}
