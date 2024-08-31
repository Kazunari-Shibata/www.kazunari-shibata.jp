import styles from '@/app/styles/home/components/Swicher.module.scss';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { RadarIcon } from './RadarIcon';

interface SwicherProps {
    isSwitcherVisible: boolean;
    closeSwitcher: () => void;
}

export function Switcher({ isSwitcherVisible, closeSwitcher }: SwicherProps) {
    const t = useTranslations('Switcher');
    const locale = useLocale();

    return (
        <div id={styles.container}>
            {isSwitcherVisible && (
                <div className={styles.switcher} onClick={closeSwitcher}>
                    <div
                        id={styles.wrapper}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.head}>
                            <h4>{t('Switching languages')}</h4>
                            <button onClick={closeSwitcher}>
                                <Image
                                    src="/Switcher_icon.svg"
                                    alt="Close icon"
                                    width={28}
                                    height={28}
                                    priority
                                />
                            </button>
                        </div>
                        <div className={styles.body}>
                            <Link href="/en/home">
                                <div className={styles.wrapper}>
                                    {locale === 'en' ? (
                                        <RadarIcon />
                                    ) : (
                                        <span className={styles.dummy}></span>
                                    )}
                                    <div className={styles.inner}>English</div>
                                    <span className={styles.flag}>🇨🇦</span>
                                </div>
                            </Link>
                            <Link href="/ja/home">
                                <div className={styles.wrapper}>
                                    {locale === 'ja' ? (
                                        <RadarIcon />
                                    ) : (
                                        <span className={styles.dummy}></span>
                                    )}
                                    <div
                                        className={`${styles.inner} ${styles.ja}`}
                                    >
                                        日本語
                                    </div>
                                    <span className={styles.flag}>🇯🇵</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
