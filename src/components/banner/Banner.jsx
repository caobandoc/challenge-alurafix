import "./Banner.css";

export default function Banner() {
  return (
    <section className="background">
      <div className="banner">
        <div className="banner-texto">
          <h1>Front End</h1>

          <div className="banner-desc">
            <h2>Challenge React</h2>
            <p>
              Este challenge es una forma de aprendizaje. Es un mecanismo donde
              podrás comprometerte en la resolución de un problema para poder
              aplicar todos los conocimientos adquiridos en la formación React
            </p>
          </div>
        </div>

        <div className="banner-video">
          <a href="https://www.youtube.com/watch?v=ov7vA5HFe6w" target="_blank" rel="noopener noreferrer">
            <img src="/video-banner.jpg" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
