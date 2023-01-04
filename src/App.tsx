import { useEffect, useState } from "react";
import "./App.css";
import { Content } from "./components/Content";
import { NavBar } from "./components/NavBar";
import { Slogan } from "./components/Slogan";

function App() {
  const [windowSize, setWindowSize] = useState<any>({
    width: undefined,
    height: undefined,
  });

  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize]);

  return (
    <div
      className="md:px-8 font-sora overflow-y-auto overflow-x-hidden text-white h-screen px-4 py-8 
    bg-gradient-to-b dark:from-purple-900 dark:to-purple-500 dark:text-white from-white text-black to-pink-500 "
    >
      <NavBar isMobile={isMobile} />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
