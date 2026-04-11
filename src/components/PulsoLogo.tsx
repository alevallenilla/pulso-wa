const PulsoLogo = ({ size = "default" }: { size?: "default" | "large" }) => {
  const textClass = size === "large" ? "text-2xl" : "text-xl";
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative w-8 h-8 rounded-lg bg-secondary flex items-center justify-center border-thin border-border overflow-hidden">
        <svg viewBox="0 0 32 10" className="w-5 h-3" fill="none">
          <polyline
            points="0,5 6,5 8,2 10,8 12,3 14,7 16,5 32,5"
            stroke="hsl(213 93% 68%)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className={`${textClass} font-bold tracking-tight`}>
        Puls<span className="text-primary">o</span>
      </span>
    </div>
  );
};

export default PulsoLogo;
