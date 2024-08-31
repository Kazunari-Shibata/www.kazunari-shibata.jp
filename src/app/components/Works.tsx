import { Article } from '@/app/components/Article';
import { useTranslations } from 'next-intl';
import styles from '@/app/styles/home/components/Works.module.scss';

export function Works() {
    const t = useTranslations('Works');
    return (
        <section id="section_works" className={styles.container}>
            <Article
                title={t.raw('GASHAPON_OFFICIAL_SITE.title')}
                description={t.raw('GASHAPON_OFFICIAL_SITE.description')}
                url="https://gashapon.jp/"
                image_src="/Works_official-site.webp"
                image_width={820}
                image_height={820}
                image_priority={true}
                copyright="&copy; BANDAI"
            />
            <Article
                title={t('HOBBY_SITE.title')}
                description={t('HOBBY_SITE.description')}
                image_src="/Works_hobbysite.webp"
                url="https://bandai-hobby.net/"
                image_width={820}
                image_height={820}
                image_priority={false}
                copyright={`&copy; SOTSU・SUNRISE<br>&copy; BANDAI SPIRITS 1971-${new Date().getFullYear()}`}
            />
            {/* <Article
                title={t.raw('GASHAPON_ONLINE.title')}
                // description={`Kazunari Shibata worked on the direction of Bandai&apos;s official Gashapon online shopping site, &quot;Gashapon Online.&quot;<br /><br />&quot;Gashapon Online&quot; is a service that allows you to purchase Gashapon products anytime, 24/7, from your PC or smartphone. You can turn the Gashapon machine and open the capsule to see what you get on the spot. You can also enjoy exclusive online lottery screens and sound effects.`}
                description={t.raw('GASHAPON_ONLINE.description')}
                image_src="/images/Works_online.webp"
                url="https://parks2.bandainamco-am.co.jp/gashapon.html"
                image_width={820}
                image_height={820}
                image_priority={false}
                copyright="&copy; BANDAI"
            /> */}
            <Article
                title={t.raw('McDonalds_Tray_Mat.title')}
                description={t.raw('McDonalds_Tray_Mat.description')}
                image_src="/Works_mc.webp"
                url="https://prtimes.jp/main/html/rd/p/000000050.000011137.html"
                image_width={820}
                image_height={820}
                image_priority={false}
                copyright={`&copy; Aichi Prefectural Police Department. All rights reserved.<br>&copy; ${new Date().getFullYear()} McDONALD’S. All Rights Reserved.`}
            />
        </section>
    );
}
