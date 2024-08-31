import styles from '@/app/styles/home/components/PrimaryColor.module.scss';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export function PrimaryColor() {
    const t = useTranslations('PrimaryColor');
    const locale = useLocale();

    return (
        <div className={styles.container}>
            <span className={styles.circle}></span>
            <p>
                {locale === 'en' ? (
                    <>
                        #745399<span></span>
                        <span>:</span>
                        <span>{t('en')}</span>
                        <span>:</span>
                        <span className={styles.ja}>{t('漢字')}</span>
                    </>
                ) : (
                    <>
                        #745399<span></span>
                        <span>:</span>
                        <span className={styles.ja}>{t('漢字')}</span>
                        <span>:</span>
                        <span className={styles.ja}>{t('ひらがな')}</span>
                    </>
                )}
            </p>
        </div>
    );
}
