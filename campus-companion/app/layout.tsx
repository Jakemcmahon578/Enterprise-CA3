import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Campus Companion",
  description: "A fictional accessible campus companion app for first-year students."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skipLink" href="#main-content">
          Skip to main content
        </a>

        <header className="siteHeader">
          <nav className="nav" aria-label="Main navigation">
            <Link href="/" className="logo">
              Campus Companion
            </Link>

            <div className="navLinks">
              <Link href="/search">Search</Link>
              <Link href="/notifications">Notifications</Link>
              <Link href="/events">Events</Link>
              <Link href="/timetable">Timetable</Link>
              <Link href="/canteen">Canteen</Link>
              <Link href="/map">Campus Map</Link>
              <Link href="/lost&found">lost&found</Link>
              <Link href="/accessibility">Accessibility</Link>
              <Link href="/settings">Settings</Link>
            </div>
          </nav>
        </header>

        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}