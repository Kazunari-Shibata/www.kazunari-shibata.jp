import styles from '@/app/styles/home/components/Article.module.scss';
import { useTranslations } from 'next-intl';
import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image';
import Link from 'next/link';

type ArticleTypes = {
    title: string;
    description: string;
    url: string;
    image_src: string;
    image_width: number;
    image_height: number;
    image_priority: boolean;
    copyright: string;
};

export function Article(data: ArticleTypes) {
    const t = useTranslations('Article');

    return (
        <article className={styles.container}>
            <div className={styles.image}>
                <Image
                    src={data.image_src}
                    alt={data.title}
                    width={data.image_width}
                    height={data.image_height}
                    priority={data.image_priority}
                />
                <span
                    className={styles.copyright}
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(data.copyright),
                    }}
                />
            </div>
            <div className={styles.texts}>
                <h3
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(data.title),
                    }}
                />
                <p
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(data.description),
                    }}
                />
                <div className={styles.gradation}></div>
            </div>
            <div className={styles.button}>
                <Link href={data.url} target="_blank">
                    <span>{t('See more')}</span>
                </Link>
                <div className={styles.gradation}></div>
            </div>
        </article>
    );
}
