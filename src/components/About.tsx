import { FunctionComponent } from "react";

export type AboutType = {
  className?: string;
};

const About: FunctionComponent<AboutType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1418px] flex flex-row items-start justify-end py-0 px-2.5 box-border max-w-full text-left text-59xl text-white font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-2.5 max-w-full lg:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[55px] min-w-[454px] max-w-full lg:flex-1 gap-[27px] mq750:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-2.5 box-border max-w-full">
            <h1 className="m-0 h-[107px] flex-1 relative text-inherit font-bold font-[inherit] inline-block [text-shadow:0px_1px_4px_rgba(12,_12,_13,_0.05)] max-w-full mq450:text-28xl mq1050:text-43xl">
              About me
            </h1>
          </div>
          <div className="self-stretch h-[792px] relative text-9xl font-poppins inline-block shrink-0 mq450:text-3xl">
            <p className="m-0">
              Hey there! I'm John Kelsey, a high school student and developer on
              a quest to explore the wild world of code. Python is my current
              go-to language, but I'm also diving into HTML, CSS, and
              JavaScript. I recently downloaded PostgreSQL, though it's just
              chilling on my desktop for now. I've decided to learn C# too,
              because why not?
            </p>
            <p className="m-0">
              In addition to coding, I'm delving into Ethical Hacking and
              Microsoft Azure. When I'm not immersed in tech, you'll find me
              passionate about wildlife, and just animals in general, science,
              philosophy, and religion. Welcome to my corner of the internet!
            </p>
          </div>
        </div>
        <div className="flex-[0.6203] flex flex-col items-end justify-start pt-[72.7px] px-[131px] pb-[379.9px] box-border relative gap-[101px] bg-[url('/public/warrior-1@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[448px] max-w-full lg:flex-1 mq750:pt-[47px] mq750:pb-[247px] mq750:box-border mq750:min-w-full gap-[50px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <img
            className="w-[690px] h-[756px] relative object-cover hidden max-w-full z-[0]"
            alt=""
            src="/warrior-1@2x.png"
          />
          <img
            className="w-[26px] h-[151px] absolute !m-[0] top-[76px] right-[132px] object-contain z-[1]"
            alt=""
            src="/skill-divider-one.svg"
          />
          <div className="w-[36.5px] h-[198px] absolute !m-[0] top-[84px] right-[120.5px]">
            <img
              className="absolute top-[29px] left-[4px] w-4 h-[141px] object-contain z-[2]"
              alt=""
              src="/skill-divider-two.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full z-[3]"
              alt=""
              src="/skill-icon-one.svg"
            />
          </div>
          <div className="w-[22px] h-[153px] absolute !m-[0] top-[113px] right-[141px]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full z-[6]"
              alt=""
              src="/skill-icon-two.svg"
            />
            <img
              className="absolute top-[97px] left-[20px] w-0.5 h-14 object-contain z-[7]"
              alt=""
              src="/skill-divider-three.svg"
            />
            <img
              className="absolute top-[119.6px] left-[20.1px] w-px h-[6.6px] z-[8]"
              loading="lazy"
              alt=""
              src="/vector-9.svg"
            />
            <img
              className="absolute top-[146.8px] left-[20.1px] w-px h-[6.8px] z-[10]"
              loading="lazy"
              alt=""
              src="/vector-15.svg"
            />
          </div>
          <div className="w-[10.2px] h-[51.1px] relative">
            <div className="absolute top-[3px] left-[0.6px] w-[9.6px] h-[48.1px]">
              <img
                className="absolute top-[4.4px] left-[2.3px] w-[6.9px] h-[30.9px] z-[4]"
                alt=""
                src="/skill-icon-three.svg"
              />
              <img
                className="absolute top-[0px] left-[0px] w-full h-full z-[5]"
                alt=""
                src="/skill-icon-four.svg"
              />
              <img
                className="absolute top-[8.8px] left-[2.6px] w-[4.4px] h-[21.5px] z-[6]"
                loading="lazy"
                alt=""
                src="/vector-7.svg"
              />
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[6.6px] h-[39.7px] z-[7]"
              alt=""
              src="/skill-icon-six.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-end py-0 px-2.5">
            <div className="flex flex-col items-start justify-start gap-[0.1px]">
              <div className="w-[20.8px] h-[135.7px] relative">
                <div className="absolute top-[0px] left-[0px] w-[20.8px] h-[70px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full z-[4]"
                    alt=""
                    src="/skill-icon-seven.svg"
                  />
                  <img
                    className="absolute top-[7.7px] left-[3.2px] w-[15.2px] h-[54.6px] z-[7]"
                    alt=""
                    src="/skill-icon-eight.svg"
                  />
                  <img
                    className="absolute top-[26.3px] left-[5.2px] w-[1.9px] h-[41.5px] z-[8]"
                    alt=""
                    src="/skill-icon-nine.svg"
                  />
                </div>
                <div className="absolute top-[38.8px] left-[5.2px] w-[14.5px] h-[96.9px]">
                  <img
                    className="absolute top-[0px] left-[10.2px] w-[2.4px] h-[16.4px] z-[8]"
                    loading="lazy"
                    alt=""
                    src="/vector-10.svg"
                  />
                  <img
                    className="absolute top-[1px] left-[0px] w-full h-full z-[9]"
                    alt=""
                    src="/skill-icon-eleven.svg"
                  />
                  <img
                    className="absolute top-[7.8px] left-[4.8px] w-[4.8px] h-[61.8px] z-[10]"
                    loading="lazy"
                    alt=""
                    src="/vector-13.svg"
                  />
                </div>
              </div>
              <img
                className="w-[4.9px] h-[15.5px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/vector-12.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
