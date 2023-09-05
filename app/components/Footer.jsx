import Link from "next/link";

export default function Footer() {
  return (
    <header className="footer">
      <div className="container">
        <div className="footer-nav">
          <Link href="/about">About</Link>
          <Link href="/about">Work</Link>
          <Link href="/about">Contact</Link>
        </div>
      </div>
    </header>
  );
}
