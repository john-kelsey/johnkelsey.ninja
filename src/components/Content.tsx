import { FunctionComponent, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Content: FunctionComponent = () => {
  useEffect(() => {
    const content = document.querySelector(".content");
    if (content) {
      content.classList.add("animate-wave");
    }
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 relative">
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

          .animate-wave {
            animation: wave 2s ease-in-out forwards;
          }

          .social-icons {
            display: flex;
            gap: 10px;
            position: absolute;
            bottom: 20px;
            right: 20px;
          }

          .social-icons a {
            color: white;
            font-size: 24px;
            transition: transform 0.3s;
          }

          .social-icons a:hover {
            transform: scale(1.1);
          }

          @media (max-width: 768px) {
            .social-icons {
              bottom: 10px;
              right: 10px;
            }

            .social-icons a {
              font-size: 20px;
            }
          }
        `}
      </style>
      <div className="content text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Page</h1>
        <p className="text-xl">This is a sample content with wave-like animation.</p>
      </div>
      <div className="social-icons">
        <a href="https://github.com/john-kelsey" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/john-kelsey" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/john-kelsey" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Content;