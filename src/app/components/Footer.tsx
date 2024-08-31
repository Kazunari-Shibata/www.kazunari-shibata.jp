import styles from '@/app/styles/home/components/Footer.module.scss';
import DOMPurify from 'isomorphic-dompurify';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    const t = useTranslations('Footer');
    const locale = useLocale();
    return (
        <footer className={styles.container}>
            <div className={styles.wrapper}>
                <span>
                    &copy; Aichi Prefectural Police Department. All rights
                    reserved
                    <br />
                    &copy; {new Date().getFullYear()} McDONALD’S. All Rights
                    Reserved.
                    <br />
                    &copy;{' '}
                    <span className={locale === 'ja' ? styles.ja : ''}>
                        {t('SOTSU・SUNRISE')}
                    </span>
                    <br />
                    &copy; BANDAI SPIRITS 1971-{new Date().getFullYear()}
                    <br />
                    &copy; BANDAI
                    <br />
                    &copy; 1996 Kazunari Shibata
                    <br />
                </span>
                <ul>
                    <li className={styles.eight}>
                        <Link
                            href="https://8card.net/virtual_cards/9YZs4e0u2wfrsymVCHRTsQ"
                            target="_blank"
                        >
                            <Image
                                src="/Footer_links_eight.webp"
                                alt="Eight profile code"
                                width={268}
                                height={268}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.instagram.com/kazunari_shibata_/"
                            target="_blank"
                        >
                            <Image
                                src="/Footer_links_ig.webp"
                                alt="Instagram logo"
                                width={100}
                                height={100}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://github.com/Kazunari-Shibata"
                            target="_blank"
                        >
                            <Image
                                src="/Footer_links_github.svg"
                                alt="GitHub logo"
                                width={100}
                                height={100}
                            />
                        </Link>
                    </li>
                    <li className={styles.linkedin}>
                        <Link
                            href="https://www.linkedin.com/in/kazunari-shibata-0890172bb/"
                            target="_blank"
                        >
                            <Image
                                src="/Footer_links_in.webp"
                                alt="Linkedin logo"
                                width={100}
                                height={85}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.foot}>
                <p
                    className={locale === 'ja' ? styles.ja : ''}
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(t('gashapon_note')),
                    }}
                />
                <p>Made in Japan 🇯🇵</p>
            </div>
            <div className={styles.gradation}></div>
        </footer>
    );
}
