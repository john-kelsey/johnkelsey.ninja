import { FunctionComponent, useCallback } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const onBlogLinkContainerClick = useCallback(() => {
    window.open("https://johnkelsey.hashnode.dev");
  }, []);

  const onAboutLinkContainerClick = useCallback(() => {
    document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header
      className={`w-full h-[136px] flex flex-row items-center justify-between py-0 px-5 box-border fixed top-0 left-0 bg-gray-900 z-50 ${className}`}
    >
      <style>
        {`
          .nav-link {
            position: relative;
            cursor: pointer;
            padding: 10px 15px;
            color: white;
            text-decoration: none;
          }
          .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: turquoise;
            transition: width 0.3s;
          }
          .nav-link:hover::after {
            width: 100%;
          }
        `}
      </style>
      <div className="flex flex-row items-center justify-start p-2.5 box-border z-[1]">
        <img
          className="h-[92px] w-24 relative object-cover"
          loading="lazy"
          alt="Logo"
        />
      </div>
      <nav className="flex flex-row items-center gap-5">
        <div className="nav-link" onClick={onBlogLinkContainerClick}>
          Blog
        </div>
        <div className="nav-link" onClick={onAboutLinkContainerClick}>
          About
        </div>
        <div className="nav-link">
          Contact
        </div>
      </nav>
    </header>
  );
};

export default FrameComponent;