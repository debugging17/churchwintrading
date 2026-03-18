import { redirect } from "next/navigation";

/**
 * Root page — immediately redirects to the deck.
 * This replaces the default Next.js boilerplate page to eliminate
 * external links and framework fingerprinting.
 */
export default function Home() {
  redirect("/deck");
}
