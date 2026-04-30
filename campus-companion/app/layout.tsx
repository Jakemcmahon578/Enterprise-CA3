import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Campus Companion",
  description: "A fictional accessible campus companion app for students."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Skip link for accessibility */}
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
              <Link href="/lost-found">Lost &amp; Found</Link>
              <Link href="/recommendations">Recommendations</Link>
              <Link href="/settings">Settings</Link>
            </div>
          </nav>
        </header>

        <main id="main-content">
          {children}
        </main>

        <footer className="siteFooter">
          <p>Campus Companion (Fictional Project)</p>
          <p>Support: support@campuscompanion-demo.com</p>
          <p>Phone: 0800 123 456</p>
        </footer>
      </body>
    </html>
  );
}