import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import HomePage from "./HomePage/HomePage";

export default function Home() {
  return (
    <main >
      <HomePage />
      {/* <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard/> */}
    </main>
  );
}


// className="main-container flex w-[1728px] flex-col gap-[50px] items-center flex-nowrap bg-[#fff] relative overflow-hidden mx-auto my-0 md:gap-[10px]"