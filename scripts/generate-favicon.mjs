import { copyFileSync, readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicRoot = join(__dirname, "..", "public");
const appRoot = join(__dirname, "..", "src", "app");
const brandMark = join(publicRoot, "brand", "logo-mark.svg");

copyFileSync(brandMark, join(publicRoot, "favicon.svg"));

try {
  const sharp = (await import("sharp")).default;
  const png16 = await sharp(readFileSync(brandMark)).resize(16, 16).png().toBuffer();
  const png32 = await sharp(readFileSync(brandMark)).resize(32, 32).png().toBuffer();
  const { default: pngToIco } = await import("png-to-ico");
  const ico = await pngToIco([png16, png32]);
  writeFileSync(join(publicRoot, "favicon.ico"), ico);
  writeFileSync(join(appRoot, "favicon.ico"), ico);
  await sharp(readFileSync(brandMark))
    .resize(180, 180)
    .png()
    .toFile(join(publicRoot, "apple-touch-icon.png"));
  console.log("Favicon: src/app/favicon.ico, public/favicon.ico, apple-touch-icon.png");
} catch (error) {
  copyFileSync(brandMark, join(publicRoot, "apple-touch-icon.svg"));
  console.warn("Favicon: sharp/png-to-ico unavailable.", error?.message);
  process.exitCode = 1;
}
