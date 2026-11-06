import { PRODUCT_NAME } from "../content";

export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <img
      className="brand-logo"
      src={tone === "light" ? "/firebid-logo-on-dark.png" : "/firebid-logo.png"}
      alt={PRODUCT_NAME}
    />
  );
}

export function NorthOpsByline({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className={tone === "light" ? "byline byline-light" : "byline"}>
      by <img src="/northops-mark.png" alt="NorthOps" />
    </span>
  );
}
