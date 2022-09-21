import React, { useEffect, useState } from "react";

type Props = {};

const Splash: React.FC<Props> = () => {
  return (
    <div
      className={`h-40 min-w-full bg-slate-500 flex justify-center items-center`}
    >
      <h1 className="text-4xl font-bold">悩み事あったら、愚痴ってみません？</h1>
    </div>
  );
};

export default Splash;
