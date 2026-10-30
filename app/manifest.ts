import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ESE J Engineering Ltd",
    short_name: "ESE J",
    description: "Engineering & construction across Nigeria since 2009.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1b2a",
    theme_color: "#0b1b2a",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
