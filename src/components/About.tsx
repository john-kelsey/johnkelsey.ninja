import { FunctionComponent } from "react";

const About: FunctionComponent<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-center bg-gray-900 ${className}`}
    >
      <style>
        {`
          @keyframes wave {
            0% {
              transform: translateY(100%);
            }
            50% {
              transform: translateY(-10%);
            }
            100% {
              transform: translateY(0);
            }
          }

          .wave-block {
            width: 100%;
            height: 100%;
            background-color: turquoise;
            animation: wave 2s ease-in-out forwards;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }

          .content {
            opacity: 0;
            animation: fadeIn 2s ease-in-out 2s forwards;
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}
      </style>
      <div className="wave-block">
        <div className="content">
          <h1 className="text-5xl font-bold text-white mb-4">About me</h1>
          <p className="text-xl text-white">
            Hey there! I'm John Kelsey, a high school student and developer on a quest to explore the wild world of code. Python is my current go-to language, but I'm also diving into HTML, CSS, and JavaScript. I recently downloaded PostgreSQL, though it's just chilling on my desktop for now. I've decided to learn C# too, because why not?
          </p>
          <p className="text-xl text-white mt-4">
            In addition to coding, I'm delving into Ethical Hacking and...
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;