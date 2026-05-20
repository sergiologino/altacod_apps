import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

type BrandLogoProps = {
  showWordmark?: boolean;
  className?: string;
  link?: boolean;
};

export function BrandLogo({
  showWordmark = true,
  className = "",
  link = true,
}: BrandLogoProps) {
  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/brand/logo-mark.svg"
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 shrink-0"
        priority
      />
      {showWordmark && (
        <span className="text-lg font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
          {SITE_NAME}
        </span>
      )}
    </span>
  );

  if (!link) return content;

  return (
    <Link href="/" className="group">
      {content}
    </Link>
  );
}
