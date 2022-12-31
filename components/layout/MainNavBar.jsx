import React from "react";
import classes from "./MainNavBar.module.css";
import Logo from "./Logo";
import Link from "next/link";
import { useSession, signOut } from "next-auth/client";
import router, { useRouter } from "next/router";

function mainNavBar() {
  const [session, loading] = useSession();
  const router = useRouter();
  const logoutHandler = () => {
    signOut();
    router.replace("/auth");
  };
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          {session && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}

          {!session && !loading && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default mainNavBar;
