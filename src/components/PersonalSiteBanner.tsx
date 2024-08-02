import { FunctionComponent } from "react";
import Content from "./Content";

export type PersonalSiteBannerType = {
  className?: string;
};

const PersonalSiteBanner: FunctionComponent<PersonalSiteBannerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[232px] box-border relative gap-[413px] max-w-full cursor-pointer text-left text-54xl text-white font-inter gap-[206px] gap-[103px] mq750:pb-[98px] mq750:box-border gap-[52px] mq1050:pb-[151px] mq1050:box-border ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
      />
    </div>
  );
};

export default PersonalSiteBanner;