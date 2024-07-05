import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


export default function SignIn() {
  return (
    <div>
      <SignedIn>
        {/* <UserButton /> */}
      </SignedIn>
    </div>
  )
}
