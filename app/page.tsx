import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="h-[2000px]">
        <Hero></Hero>
        <h1>test</h1>
      </div>

    </>
  );
}
