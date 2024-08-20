
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
    async function middleware(req) {
        const { pathname } = req.nextUrl;
        const protectedPaths = ['/dashboard'];

        if (protectedPaths.includes(pathname)) {
            if (!req.nextauth.token) {
                const url = new URL('/api/auth/signin', req.url);
                url.searchParams.set('callbackUrl', req.url);
                return NextResponse.redirect(url);
            }
        }

        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);


export const config = {
    matcher: ['/dashboard/:path*'],
};
