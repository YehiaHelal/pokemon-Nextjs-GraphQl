// "use client";

import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata = {
  title: "Home Page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className={styles.nav}>
          <a href="/" className={styles.navHome}>
            Home
          </a>
          <a href="/">Pokedex</a>
          <a href="/">Trading Card Game</a>
          <a href="/">Pokemon TV</a>
          <a href="/">Play! Pokemon Events</a>
          <a href="/">News</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
