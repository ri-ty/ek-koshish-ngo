import { LOGO } from "@/lib/siteImages";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showName?: boolean;
  className?: string;
}

const sizes = {
  sm: "h-9 w-9",
  md: "h-10 w-10",
  lg: "h-14 w-14",
};

export default function Logo({ size = "md", showName = true, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGO}
        alt="Ek Koshish Aisi Bhi logo"
        className={`${sizes[size]} shrink-0 rounded-full border-2 border-gold/50 object-cover shadow-sm`}
      />
      {showName && (
        <span className="text-sm font-semibold sm:text-base">
          Ek Koshish Aisi Bhi
        </span>
      )}
    </div>
  );
}
