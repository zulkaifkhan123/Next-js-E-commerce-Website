import React from 'react'
import '@/components/components.css'
import { useSession, signIn, signOut } from "next-auth/react";


function AuthButton() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                {session.user.email.slice(0, 10) + '...'}
                <br />
                <button className='signOut' onClick={() => signOut()}>Sign out</button>
            </>
        );
    }
    return (
        <div>
            <button className='signIn' onClick={() => signIn()}>Sign in</button>
        </div>
    )
}

export default AuthButton