import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const isLoggedIn = true;
    if (isLoggedIn) {
        return NextResponse.next();
    }
    else {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}