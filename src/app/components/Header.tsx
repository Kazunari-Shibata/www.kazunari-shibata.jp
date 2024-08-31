'use client';
import styles from '@/app/styles/home/components/Header.module.scss';
import { useTranslations } from 'next-intl';
import { Switcher } from '@/app/components/Switcher';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Header() {
    const t = useTranslations('Header');
    const [isSwitcherVisible, setIsSwitcherVisible] = useState(false);
    const [isBodyHidden, setIsBodyHidden] = useState(false);

    const toggleSwitcher = () => {
        setIsSwitcherVisible(!isSwitcherVisible);
        setIsBodyHidden(!isBodyHidden);
    };

    const closeSwitcher = () => {
        setIsSwitcherVisible(false);
        setIsBodyHidden(false);
    };

    useEffect(() => {
        document.body.classList.toggle('overflow_hidden', isBodyHidden);
    }, [isBodyHidden]);

    return (
        <>
            <header className={styles.container}>
                <h1>
                    <Image
                        src="/Header_logo.svg"
                        alt="KAZUNARI SHIBATA logo"
                        width={1254}
                        height={100}
                        priority
                    />
                </h1>
                <button className={styles.button} onClick={toggleSwitcher}>
                    <Image
                        src="/Header_icon_lang.svg"
                        alt={t('alt')}
                        width={35}
                        height={35}
                        priority
                    />
                </button>
            </header>
            <Switcher
                isSwitcherVisible={isSwitcherVisible}
                closeSwitcher={closeSwitcher}
            />
        </>
    );
}
