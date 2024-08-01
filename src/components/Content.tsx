import { FunctionComponent, useCallback } from "react";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  const onFrameContainerClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/john-irungu-k2009/");
  }, []);

  const onLinkedinContainerClick = useCallback(() => {
    window.open("github.com/john-kelsey");
  }, []);

  return (
    <div
      className={`w-[1359px] h-[243px] relative max-w-full text-left text-54xl text-white font-inter mq1050:h-auto mq1050:min-h-[243] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-[1339px] flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap">
        <b className="w-[730px] relative inline-block shrink-0 opacity-[0.8] max-w-full z-[1] mq450:text-lgi mq1050:text-7xl">
          <p className="m-0">Hey, I’m John Kelsey</p>
          <p className="m-0 text-13xl leading-[53px] text-lightgray">
            ASPIRING FULLSTACK DEVELOPER
          </p>
        </b>
        <div className="flex flex-col items-start justify-start pt-7 px-0 pb-0">
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="flex flex-row items-start justify-start py-0 px-2.5">
              <img
                className="h-[47px] w-[47px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div
              className="h-[47px] flex flex-col items-start justify-start p-2.5 box-border cursor-pointer z-[1]"
              onClick={onFrameContainerClick}
            >
              <img
                className="w-[47px] h-[47px] relative"
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[184px] left-[1272px] w-[67px] h-[59px] overflow-hidden flex flex-col items-start justify-start py-0.5 px-0 box-border cursor-pointer z-[1]"
        onClick={onLinkedinContainerClick}
      >
        <img
          className="self-stretch h-[57px] relative max-w-full overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/vector-2.svg"
        />
      </div>
    </div>
  );
};

export default Content;
