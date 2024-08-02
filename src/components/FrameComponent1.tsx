import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  const onGithubContainerClick = useCallback(() => {
    window.open("linkedin.com/in/john-irungu-k2009/");
  }, []);

  const onGithubIconClick = useCallback(() => {
    window.open("github.com/john-kelsey");
  }, []);

  const onTwitterIconClick = useCallback(() => {
    window.open("twitter.com/john_k_irungu");
  }, []);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.githubContainerParent}>
        <img
          className={styles.githubContainerIcon}
          alt=""
          src="/github-container.svg"
          onClick={onGithubContainerClick}
        />
        <img
          className={styles.githubIcon}
          loading="lazy"
          alt=""
          src="/github.svg"
          onClick={onGithubIconClick}
        />
      </div>
      <div className={styles.gradientParent}>
        <div className={styles.gradient} />
        <img
          className={styles.africanFuturisticSamurai1}
          loading="lazy"
          alt=""
          src="/african-futuristic-samurai-1@2x.png"
        />
      </div>
      <b className={styles.heyImJohnContainer}>
        <p className={styles.heyImJohn}>Hey, I’m John Kelsey</p>
        <p className={styles.aspiringFullstackDeveloper}>
          ASPIRING FULLSTACK DEVELOPER
        </p>
      </b>
      <img
        className={styles.twitterIcon}
        loading="lazy"
        alt=""
        src="/twitter.svg"
        onClick={onTwitterIconClick}
      />
    </div>
  );
};

export default FrameComponent1;
