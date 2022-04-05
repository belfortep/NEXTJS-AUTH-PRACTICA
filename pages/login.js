import React from 'react'
import { signIn, useSession, getProviders } from 'next-auth/react'
import { useRouter } from 'next/router'
export default function login() {

    const { data: session, status } = useSession()
    const router = useRouter()

    if (status !== 'loading' && status === 'authenticated') {
        router.push('/')
    }

    return (
        <div>
            <button onClick={() => signIn('github')}>Sign in with github</button>
        </div>
    )
}
