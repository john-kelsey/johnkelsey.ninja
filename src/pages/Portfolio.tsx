import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./Portfolio.module.css";

const Portfolio: FunctionComponent = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolioInner}>
        <div className={styles.imASoftwareEngineerParent}>
          <h2 className={styles.imASoftware}>I'm a Software Engineer.</h2>
          <div className={styles.imASoftwareEngineerWrapper}>
            <h2 className={styles.imASoftware1}>I'm a Software Engineer.</h2>
          </div>
        </div>
      </div>
      <main className={styles.portfolioChild}>
        <footer className={styles.frameParent}>
          <div className={styles.linkedinBehanceDribbblWrapper}>
            <h3 className={styles.linkedinBehanceContainer}>
              <span className={styles.linkedinBehanceContainer1}>
                <p className={styles.linkedin}>LinkedIn</p>
                <p className={styles.p}>{`>>`}</p>
                <p className={styles.behance}>Behance</p>
                <p className={styles.p1}>{`>>`}</p>
                <p className={styles.dribbble}>Dribbble</p>
                <p className={styles.p2}>{`>>`}</p>
                <p className={styles.instagram}>Instagram</p>
                <p className={styles.p3}>{`>>`}</p>
                <p className={styles.logo}>logo</p>
              </span>
            </h3>
          </div>
          <div className={styles.developedWebhrLanding}>
            Developed web.hr landing page which is utilized in 25,000+
            companies.
          </div>
        </footer>
      </main>
      <div className={styles.webhrLogoVectorized} />
      <div className={styles.header} />
      <div className={styles.portfolioItem} />
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <FrameComponent />
          <FrameComponent1 />
          <div className={styles.frameWrapper}>
            <div className={styles.frameDiv}>
              <div className={styles.aboutMeWrapper}>
                <h2
                  className={styles.aboutMe}
                  data-scroll-to="aboutMeText"
                >{`About me `}</h2>
              </div>
              <div className={styles.imJohnKelseyAHighSchoolWrapper}>
                <div className={styles.imJohnKelseyContainer}>
                  <p className={styles.imJohnKelsey}>
                    I'm John Kelsey, a high school student and developer on a
                    quest to explore the wild world of code. Python is my
                    current go-to language, but I'm also diving into HTML, CSS,
                    and JavaScript. I recently downloaded PostgreSQL, though
                    it's just chilling on my desktop for now. I've decided to
                    learn C# too, because why not?
                  </p>
                  <p className={styles.inAdditionTo}>
                    In addition to coding, I'm delving into Ethical Hacking and
                    Microsoft Azure. When I'm not immersed in tech, you'll find
                    me passionate about wildlife, and just animals in general,
                    science, philosophy, and religion. Welcome to my corner of
                    the internet!
                  </p>
                </div>
              </div>
              <img
                className={styles.image1Icon}
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.johnKelseyCraftedByYoursWrapper}>
            <div className={styles.johnKelseyCrafted}>
              © 2024 John Kelsey. Crafted by yours truly
            </div>
          </div>
        </div>
        <div className={styles.profile2Parent}>
          <img className={styles.profile2Icon} alt="" src="/profile-2@2x.png" />
          <div className={styles.johnKelseyCrafted1}>
            © 2024 John Kelsey. Crafted by yours truly
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
