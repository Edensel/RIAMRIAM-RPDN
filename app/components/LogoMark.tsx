import Image from "next/image";

export default function LogoMark({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-ink/10 bg-paper shadow-sm ${className}`}
    >
      <Image
        src="/riamriam-logo.png"
        width={453}
        height={400}
        alt="RPDN logo"
        priority={priority}
        className="h-[95%] w-[95%] object-contain mix-blend-multiply"
      />
    </span>
  );
}
