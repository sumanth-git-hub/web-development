import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BackgroundSection from "./Components/BackgroundSection/BackgroundSection";
import NavigationSection from "./Components/NavigationSection/NavigationSection";
import HeroSection from "./Components/HeroSection/heroSection";

function App() {
  let heroData = [
    { text1: "Dive Into", text2: "What you Love" },
    { text1: "Indulge", text2: "Your Passions" },
    { text1: "Live in", text2: "Your Life" },
  ];

  console.log(heroData)

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <BackgroundSection playStatus={playStatus} heroCount={heroCount} />
      <NavigationSection />
      <HeroSection
        setPlayStatus={setPlayStatus}
        playStatus={playStatus}
        heroData={heroData[heroCount]}
        setHeroCount={setHeroCount}
        heroCount={heroCount}
      />
    </div>
  );
}

export default App;
