import { HomePageClient } from "@/components/HomePageClient";
import { getApps } from "@/data/get-apps";

export default function HomePage() {
  return <HomePageClient apps={getApps()} />;
}
