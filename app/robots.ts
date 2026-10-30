import type { MetadataRoute } from "next";
import { abs } from "@/lib/seo";

// Search engines and AI assistants are all welcome: being cited by ChatGPT, Claude,
// Perplexity and Gemini depends on their crawlers being allowed in.
const aiCrawlers = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot", "Applebot-Extended", "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: abs("/sitemap.xml"),
    host: abs("/"),
  };
}
