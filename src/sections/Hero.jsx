import ComingSoon from "./ComingSoon";

function Hero() {
  return (
    <section className="hero-section">
      {/* <div className="size-full max-wrapper">
        <img
          src="/public/images/hero-bg.webp"
          className="scale-out"
          alt="hero-background"
        />
        <img
          src="/public/images/hero-text.webp"
          alt="hero-logo"
          className="title-logo fade-out"
        />
        <img
          src="/public/images/watch-trailer.png"
          alt="trailer"
          className="trailer-logo fade-out"
        />
        <div className="play-img fade-out">
          <img src="/public/images/play.png" alt="play" className="w-7 ml-1" />
        </div>
        <div>
          <img
            src="/public/images/big-hero-text.svg"
            alt="logo"
            className="size-full object-cover mask-logo"
          />
        </div>
        <div className="fake-logo-wrapper">
          <img
            src="/public/images/big-hero-text.svg"
            alt="logo"
            className="overlay-logo"
          />
        </div>
      </div> */}

      <ComingSoon />
    </section>
  );
}

export default Hero;
