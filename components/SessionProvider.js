'use client'
import { SessionProvider } from "next-auth/react"
import React from 'react'

function SessionProviders({children}) {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default SessionProviders