import "../HeroSection/HeroStyle.css";
const HeroSection = ({
  playStatus,
  setPlayStatus,
  heroCount,
  setHeroCount,
  heroData,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the Features</p>
        <i className="fa-regular fa-circle-right"></i>
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="hero-play">
          <span onClick={() => setPlayStatus(!playStatus)} className={`fa-regular ${playStatus ? 'fa-circle-pause' : 'fa-circle-play'}`}></span>
          <p>{playStatus ? 'Pause the Video': 'Play the Video'}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
