import { FunctionComponent } from "react";
import PersonalSiteBanner from "../components/PersonalSiteBanner";
import About from "../components/About";

const Desktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray overflow-hidden flex flex-col items-start justify-start pt-[5px] px-0 pb-[264px] box-border gap-[540px] leading-[normal] tracking-[normal] gap-[270px] gap-[135px]">
      <section className="self-stretch flex flex-col items-end justify-start gap-[101px] max-w-full gap-[50px] gap-[25px]">
        <PersonalSiteBanner />
        <About />
      </section>
      <section className="self-stretch flex flex-col items-start justify-start gap-[159px] max-w-full text-left text-[20px] text-white font-inter gap-[79px] gap-10">
        <div className="self-stretch h-px relative border-white border-t-[1px] border-solid box-border" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[23px] pr-5 box-border max-w-full">
          <div className="w-[707px] relative inline-block shrink-0 max-w-full mq450:text-[16px]">
            © 2024 John Kelsey.<a href="/humans.txt"> Crafted by yours truly</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop;
