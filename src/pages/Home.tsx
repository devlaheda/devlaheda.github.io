import type { FC } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ScrollToHashHandler from "../components/ScrollToHashHandler";

const Home: FC = () => {
  return (
    <>
      <ScrollToHashHandler />
      <Hero />
      <About />
    </>
  );
};

export default Home;
