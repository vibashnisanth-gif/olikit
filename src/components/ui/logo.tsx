import Image from "next/image";

type Props = {
  href: string;
  showTagline?: boolean;
  className?: string;
};

export function Logo({href, showTagline, className = ""}: Props) {
  return (
    <a
      href={href}
      className={`flex items-center gap-2 font-bold text-lg text-text-primary shrink-0 ${className}`}
    >
      <span className="grid h-8 w-8 place-items-center rounded-md bg-zinc-950 text-sm font-bold text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 10 L16 6 L24 10 L24 22 L16 26 L8 22Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path d="M12 14 L16 12 L20 14 L20 20 L16 22 L12 20Z" fill="white" opacity="0.3" />
        </svg>
      </span>
      <span>Olikit</span>
      {showTagline && (
        <span className="hidden sm:inline text-xs font-normal text-text-muted ml-1.5 pl-2.5 border-l border-border-light">
          Global Salary Intelligence
        </span>
      )}
    </a>
  );
}
