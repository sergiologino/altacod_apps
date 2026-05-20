import Image from "next/image";

type AppImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function AppImage({
  src,
  alt,
  priority,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: AppImageProps) {
  return (
    <div className={`relative overflow-hidden bg-image-bg ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain p-2"
      />
    </div>
  );
}
