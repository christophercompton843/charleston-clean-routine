import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Charleston Clean Routine",
    short_name: "Clean Routine",
    description: "Modern home and vacation-rental cleaning for Charleston.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f7f5",
    theme_color: "#062c2a",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
