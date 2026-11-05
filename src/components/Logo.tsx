export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <img
      className="bidfire-logo"
      src={tone === "light" ? "/bidfire-logo-on-dark.png" : "/bidfire-logo.png"}
      alt="BidFire"
    />
  );
}

export function NorthOpsLogo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className={`byline byline-${tone}`}>
      <span className="byline-word">by</span>
      <img className="northops-mark" src="/northops-mark.png" alt="NorthOps" />
    </span>
  );
}
