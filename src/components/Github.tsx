import { FunctionComponent } from "react";

export type GithubType = {
  className?: string;
};

const Github: FunctionComponent<GithubType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[100px] h-[100px] overflow-hidden leading-[normal] tracking-[normal] ${className}`}
    />
  );
};

export default Github;
