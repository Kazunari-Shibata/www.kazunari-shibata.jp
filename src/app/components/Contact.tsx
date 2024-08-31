'use client';
import styles from '@/app/styles/home/components/Contact.module.scss';
import { Message } from '@/app/components/Message';
import { useTranslations, useLocale } from 'next-intl';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { RadarIcon } from './RadarIcon';

type FormInputs = {
    first_name: string;
    last_name: string;
    email: string;
    message: string;
};

export function Contact() {
    const t = useTranslations('Contact');
    const locale = useLocale();

    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });
        formData.append('lang', locale);

        const response = await fetch('/api/send', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        // console.log(result);

        setStatus(result.status);
        setMessage(result.message);
        setShowMessage(true);

        if (result.status === 'success') {
            reset();
        }
    };

    const handleCloseMessage = () => {
        setShowMessage(false);
        setStatus('');
        setMessage('');
    };

    return (
        <div className={styles.container} id="contact">
            <section className={styles.section}>
                <div className={styles.title}>
                    <h2>{t('CONTACT ME')}</h2>
                    <div className={styles.inner}>
                        <RadarIcon />
                        <p>{t('disc')}</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inner}>
                        <div className={styles.wrapper}>
                            <label htmlFor="first_name">
                                {t('First Name')}
                            </label>
                            <input
                                {...register('first_name', { required: true })}
                                placeholder={t('First Name_placeholder')}
                                id="first_name"
                                autoComplete={
                                    locale === 'ja'
                                        ? 'family-name'
                                        : 'given-name'
                                }
                            />
                        </div>
                        <div className={styles.wrapper}>
                            <label htmlFor="last_name">{t('Last Name')}</label>
                            <input
                                {...register('last_name', { required: true })}
                                placeholder={t('Last Name_placeholder')}
                                id="last_name"
                                autoComplete={
                                    locale === 'ja'
                                        ? 'given-name'
                                        : 'family-name'
                                }
                            />
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <label htmlFor="email">{t('E-mail')}</label>
                        <input
                            {...register('email', {
                                required: true,
                                pattern: /^\S+@\S+$/i,
                            })}
                            placeholder="sample@kazunari-shibata.jp"
                            id="email"
                            autoComplete="email"
                        />
                    </div>
                    <div className={styles.wrapper}>
                        <label htmlFor="message">{t('Message')}</label>
                        <textarea
                            {...register('message', { required: true })}
                            rows={4}
                            placeholder={t('Message_placeholder')}
                            id="message"
                            autoComplete="off"
                        />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? t('Submitting') : t('Submit')}
                    </button>
                </form>
                {/* <div className={`${styles.circle} ${styles.a}`}></div>
                <div className={`${styles.circle} ${styles.b}`}></div>
                <div className={`${styles.circle} ${styles.c}`}></div>
                <div className={`${styles.circle} ${styles.d}`}></div> */}
            </section>
            {showMessage && (
                <Message
                    status={status}
                    message={message}
                    onClose={handleCloseMessage}
                />
            )}
            {/* <Message
                status="success"
                message="Ok"
                onClose={handleCloseMessage}
            /> */}
        </div>
    );
}
