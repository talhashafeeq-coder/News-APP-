import React from 'react';
import { useUser, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Link, redirect } from 'react-router-dom';

export default function Navbar() {
  const { user } = useUser();
  console.log(user);

  if(!useUser){
    redirect('/signin');
  }

  return (
    <div>
      <nav className="navbar mt-3 navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <SignedIn>
              <span className="nav-link active d-flex align-items-center">
                <span style={{ color: 'white' }}><b> Welcome! 🎉🎉</b></span>
                <UserButton />
              </span>
            </SignedIn>
            <SignedOut>
              <span className="nav-link active">Loading...</span>
            </SignedOut>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/topheadline">
                  Top Headline
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link disabled"
                  to="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  OtherNews
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link disabled"
                  to="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  3Top_Pages
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link disabled"
                  to="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
