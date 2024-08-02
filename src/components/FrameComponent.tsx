import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const onAboutTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutMeText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBlogTextClick = useCallback(() => {
    window.open("johnkelsey.hashnode.dev");
  }, []);

  const onContactTextClick = useCallback(() => {
    window.open("https://matrix.to/#/@john-kelsey:matrix.org");
  }, []);

  return (
    <header className={[styles.profile1Parent, className].join(" ")}>
      <img
        className={styles.profile1Icon}
        loading="lazy"
        alt=""
        src="/profile-1@2x.png"
      />
      <nav className={styles.aboutContactContainer}>
        <a className={styles.about} onClick={onAboutTextClick}>
          .about()
        </a>
        <div className={styles.blogWrapper}>
          <a className={styles.blog} onClick={onBlogTextClick}>
            .blog()
          </a>
        </div>
        <a className={styles.contact} onClick={onContactTextClick}>
          .contact()
        </a>
      </nav>
    </header>
  );
};

export default FrameComponent;
