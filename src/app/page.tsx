'use client'

import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { SignOutButton } from '@clerk/nextjs'
import React from 'react'

const HomePage = () => {
  return <div>HomePage
    <SignedOut>
      <SignedIn />
    </SignedOut>
    <SignedIn>
      <SignOutButton />
    </SignedIn>

  </div>


}

export default HomePage
