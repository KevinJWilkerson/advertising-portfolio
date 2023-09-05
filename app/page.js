import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to my site</h1>
      <ul>
        <li>
          <Link href="/about">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
