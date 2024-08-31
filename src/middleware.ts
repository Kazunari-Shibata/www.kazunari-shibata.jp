import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const defaultLocale = 'en';

const intlMiddleware = createMiddleware({
    locales: ['en', 'ja'],
    defaultLocale: defaultLocale,
});

export default function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    // /app で始まるパスの場合は、そのまま通す
    if (pathname.startsWith('/app')) {
        return NextResponse.next();
    }

    // ルートパスの場合は /en/home にリダイレクト
    if (pathname === '/') {
        return NextResponse.redirect(
            new URL(`/${defaultLocale}/home`, req.url)
        );
    }

    // その他のパスには next-intl のミドルウェアを適用
    return intlMiddleware(req);
}

export const config = {
    // /app/* を除外するマッチャーを設定
    matcher: ['/((?!api|_next|app|.*\\..*).*)*'],
};
