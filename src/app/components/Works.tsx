import { Article } from '@/app/components/Article';
import { useTranslations } from 'next-intl';
import styles from '@/app/styles/home/components/Works.module.scss';

export function Works() {
    const t = useTranslations('Works');
    return (
        <section id="section_works" className={styles.container}>
            <Article
                title={t('GASHAPON_OFFICIAL_SITE.title')}
                h2={t.raw('GASHAPON_OFFICIAL_SITE.h2')}
                description={t.raw('GASHAPON_OFFICIAL_SITE.description')}
                url="https://gashapon.jp/"
                imageSrc="/Works_official-site.webp"
                imageWidth={820}
                imageHeight={820}
                imagePriority={true}
                copyright={t('GASHAPON_OFFICIAL_SITE.copyright')}
            />
            <Article
                title={t('HOBBY_SITE.title')}
                h2={t.raw('HOBBY_SITE.h2')}
                description={t.raw('HOBBY_SITE.description')}
                imageSrc="/Works_hobbysite.webp"
                url="https://bandai-hobby.net/"
                imageWidth={820}
                imageHeight={820}
                imagePriority={false}
                copyright={`
                    ${t('HOBBY_SITE.copyright.SOTSU・SUNRISE')}
                    <br />
                    ${t('HOBBY_SITE.copyright.BANDAI SPIRITS', {
                        YYYY: new Date().getFullYear(),
                    })}
                `}
            />
            <Article
                title={t('McDonalds_Tray_Mat.title')}
                h2={t.raw('McDonalds_Tray_Mat.h2')}
                description={t.raw('McDonalds_Tray_Mat.description')}
                imageSrc="/Works_mc.webp"
                url="https://prtimes.jp/main/html/rd/p/000000050.000011137.html"
                imageWidth={820}
                imageHeight={820}
                imagePriority={false}
                copyright={`
                    ${t('McDonalds_Tray_Mat.copyright.Aichi Police')}
                    <br />
                    ${t('McDonalds_Tray_Mat.copyright.McDONALD’S', {
                        YYYY: new Date().getFullYear(),
                    })}
                `}
            />
        </section>
    );
}
