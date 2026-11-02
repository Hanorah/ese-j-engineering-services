import Link from "next/link";
import LogoMark from "./LogoMark";

export default function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`brand${light ? " brand--light" : ""}`} aria-label="ESE-J Engineering home">
      <LogoMark className="brand__mark" />
      <span className="brand__text">
        <span className="brand__word">
          ese<i>-</i>j
        </span>
        <small>Engineering Ltd</small>
      </span>
    </Link>
  );
}
