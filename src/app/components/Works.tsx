import { Article } from '@/app/components/Article';
import { useTranslations } from 'next-intl';
import styles from '@/app/styles/home/components/Works.module.scss';

export function Works() {
    const t = useTranslations('Works');
    return (
        <section id="section_works" className={styles.container}>
            <Article
                title={t.raw('GASHAPON_OFFICIAL_SITE.title')}
                h2={t.raw('GASHAPON_OFFICIAL_SITE.h2')}
                description={t.raw('GASHAPON_OFFICIAL_SITE.description')}
                url="https://gashapon.jp/"
                image_src="/Works_official-site.webp"
                image_width={820}
                image_height={820}
                image_priority={true}
                copyright={t.raw('GASHAPON_OFFICIAL_SITE.copyright')}
            />
            <Article
                title={t('HOBBY_SITE.title')}
                h2={t('HOBBY_SITE.h2')}
                description={t('HOBBY_SITE.description')}
                image_src="/Works_hobbysite.webp"
                url="https://bandai-hobby.net/"
                image_width={820}
                image_height={820}
                image_priority={false}
                copyright={t('HOBBY_SITE.copyright', {
                    YYYY: new Date().getFullYear(),
                })}
            />
            <Article
                title={t.raw('McDonalds_Tray_Mat.title')}
                h2={t.raw('McDonalds_Tray_Mat.h2')}
                description={t.raw('McDonalds_Tray_Mat.description')}
                image_src="/Works_mc.webp"
                url="https://prtimes.jp/main/html/rd/p/000000050.000011137.html"
                image_width={820}
                image_height={820}
                image_priority={false}
                copyright={t('McDonalds_Tray_Mat.copyright', {
                    YYYY: new Date().getFullYear(),
                })}
            />
        </section>
    );
}
