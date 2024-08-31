// 'use client';
import { Roboto_Condensed, Noto_Sans_JP } from 'next/font/google';
import { Header } from '@/app/components/Header';
import { Works } from '@/app/components/Works';
import { Contact } from '@/app/components/Contact';
// import { PrimaryColor } from '@/app/components/PrimaryColor';
import { Footer } from '@/app/components/Footer';
import '@/app/styles/home/Globals.scss';

const roboto_c = Roboto_Condensed({
    subsets: ['latin'],
    variable: '--font-roboto_c',
});
const noto_jp = Noto_Sans_JP({
    subsets: ['latin'],
    variable: '--font-noto_jp',
});

export default function Home() {
    return (
        <main className={`${roboto_c.variable} ${noto_jp.variable}`}>
            <Header />
            <div id="inner">
                <Works />
                <Contact />
                {/* <PrimaryColor /> */}
            </div>
            <Footer />
        </main>
    );
}
