import SectionHead from "./SectionHead";
import BeforeAfter from "./BeforeAfter";
import { beforeAfter, beforeAfterSample } from "@/lib/content";

/** Hidden on the live site until real pairs are added; shows a labelled sample in development. */
export default function BeforeAfterSection({ white }: { white?: boolean }) {
  const sample = beforeAfter.length === 0;
  if (sample && process.env.NODE_ENV === "production") return null;
  const pairs = sample ? [beforeAfterSample] : beforeAfter;

  return (
    <section className={`section${white ? " section--white" : ""}`}>
      <div className="container">
        <SectionHead
          label="Before & after"
          strong="From bare land"
          light="to finished homes"
          text="Drag the handle to see how our sites looked on day one and on handover day."
        />
        <div className="ba-grid">
          {pairs.map((p) => (
            <BeforeAfter key={p.after} pair={p} sample={sample} />
          ))}
        </div>
      </div>
    </section>
  );
}
