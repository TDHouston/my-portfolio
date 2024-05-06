import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import HomePage from "./HomePage/HomePage";

export default function Home() {
  return (
    <main>
      <HomePage />
      {/* <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard/> */}
    </main>
  );
}
