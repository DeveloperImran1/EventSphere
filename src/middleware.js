import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const middleware = async(request) => {
    // const token = cookies(request).get("__Secure-next-auth.session-token")   // vercel a deploy korar somoi ai line comentout kore dibo.
    const token = cookies(request).get("next-auth.session-token")

    const pathname = request.nextUrl.pathname;
    if(pathname.includes('api')){   // aikhane dsashboard er pore all jekono route private ase. But jodi need hoi,, dashboard er moddhe kono route k private korbona, tahole upore condition dia return korte pari,, tahole middleware kajj korbena. aikhane api er poriborte oi route name hobe.
        return NextResponse.next()
    }
    if(!token){
        return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/SeatBookingWidget", "/dashboard/:path*"]
}
