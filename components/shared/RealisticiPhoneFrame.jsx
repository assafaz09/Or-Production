"use client";

const RealisticiPhoneFrame = ({
  children,
  width = "260px",
  height = "520px",
  className = "",
}) => {
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* iPhone Frame - Ultra Realistic */}
      <div className="relative w-full h-full transform hover:rotate-0 transition-all duration-500 hover:scale-105">
        {/* Main Phone Body */}
        <div className="relative bg-gradient-to-b from-slate-800 via-slate-900 to-black rounded-[3.5rem] p-[3px] shadow-2xl border border-slate-700/50 w-full h-full">
          {/* Inner Frame */}
          <div className="relative bg-gradient-to-b from-slate-900 to-black rounded-[3.3rem] p-[2px] w-full h-full shadow-inner">
            {/* Screen Bezel */}
            <div className="relative bg-black rounded-[3.1rem] p-[6px] w-full h-full">
              {/* Actual Screen */}
              <div className="relative bg-black rounded-[2.8rem] overflow-hidden w-full h-full shadow-inner">
                {/* Content goes here */}
                {children}

                {/* Screen Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Dynamic Island (Top Notch) */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-black rounded-full shadow-lg border border-slate-800">
            <div className="absolute inset-[1px] bg-gradient-to-b from-slate-900 to-black rounded-full">
              {/* Front Camera */}
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-slate-800 rounded-full border border-slate-700"></div>
              {/* Speaker */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-slate-800 rounded-full border border-slate-700"></div>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full shadow-sm"></div>

          {/* Side Buttons */}
          {/* Volume Buttons */}
          <div className="absolute top-24 -left-[2px] w-[3px] h-8 bg-gradient-to-r from-slate-600 to-slate-700 rounded-r-sm shadow-sm"></div>
          <div className="absolute top-36 -left-[2px] w-[3px] h-8 bg-gradient-to-r from-slate-600 to-slate-700 rounded-r-sm shadow-sm"></div>

          {/* Power Button */}
          <div className="absolute top-28 -right-[2px] w-[3px] h-12 bg-gradient-to-l from-slate-600 to-slate-700 rounded-l-sm shadow-sm"></div>

          {/* Lightning Port */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-slate-800 rounded-sm shadow-inner border border-slate-700"></div>

          {/* Speaker Holes */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -ml-8 flex space-x-1">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-[2px] h-[2px] bg-slate-700 rounded-full"
              ></div>
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 ml-8 flex space-x-1">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-[2px] h-[2px] bg-slate-700 rounded-full"
              ></div>
            ))}
          </div>
        </div>

        {/* Realistic Phone Shadow */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black/40 rounded-full blur-lg"></div>
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-3 bg-black/20 rounded-full blur-md"></div>

        {/* Ambient Light Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/5 to-blue-500/10 rounded-[3.5rem] pointer-events-none"></div>

        {/* Edge Highlight */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-[3.5rem] pointer-events-none"></div>
      </div>
    </div>
  );
};

export default RealisticiPhoneFrame;
