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

  return (
    <header
      className={`w-[1324px] h-[136px] flex flex-row items-end justify-between py-0 pl-0 pr-5 box-border gap-5 max-w-full ${className}`}
    >
      <div className="self-stretch w-[194px] flex flex-row items-center justify-start p-2.5 box-border z-[1]">
        <img
          className="h-[92px] w-24 relative object-cover"
          loading="lazy"
          alt=""
          src="/profile-1@2x.png"
        />
      </div>
      <nav className="m-0 w-[391px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border max-w-full">
        <nav className="m-0 self-stretch flex flex-row items-start justify-start text-left text-7xl text-white font-inter">
          <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 overflow-y-auto flex flex-row items-start justify-start p-2.5 z-[1]">
                <a className="[text-decoration:none] flex-1 relative font-bold text-[inherit]">
                  .about()
                </a>
              </div>
              <div
                className="flex flex-row items-start justify-start p-2.5 cursor-pointer z-[2] ml-[-35px]"
                onClick={onBlogLinkContainerClick}
              >
                <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[86px]">
                  .blog()
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-[22px] px-2.5 z-[1]">
            <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[127px]">
              .contact()
            </a>
          </div>
        </nav>
      </nav>
    </header>
  );
};

export default FrameComponent;
