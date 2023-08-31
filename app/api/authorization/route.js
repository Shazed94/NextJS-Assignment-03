import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(req, res) {
    const headerlist = headers()
    const token = headerlist.get('token')

    return NextResponse.next({
        request: {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        },
    })
}
