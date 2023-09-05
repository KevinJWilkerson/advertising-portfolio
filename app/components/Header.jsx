import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Kevin Wilkerson</Link>
        </div>
        <div className="nav">
          <Link href="/about">About</Link>
          <Link href="/about">Work</Link>
          <Link href="/about">Contact</Link>
        </div>
      </div>
    </header>
  );
}
