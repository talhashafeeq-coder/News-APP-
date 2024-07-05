import React from 'react'
import Home from './pages/Home'
import SigIn from './pages/SignIn'
// import Top from './pages/Top'
import SinglePage from './pages/SinglePage'
import { Routes, Route } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import TopHeadline from './pages/TopHeadline'
export default function App() {
  return (
    <>   
    <div>
     <header>
     
      <SignedOut>
      <SignInButton />
      </SignedOut>
      <SignedIn>
        {/* <UserButton /> */}
      </SignedIn>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SigIn />} />
        {/* <Route path='/top' element={<Top />} /> */}
        <Route path='/SingelPage' element={<SinglePage/>} />
        <Route path='/topheadline' element={<TopHeadline/>} />

      </Routes>
    </header>
    </div>
    </>
  )
}
