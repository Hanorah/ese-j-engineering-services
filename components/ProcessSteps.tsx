import { steps } from "@/lib/content";

export default function ProcessSteps() {
  return (
    <div className="steps">
      {steps.map((s, i) => (
        <article className="step reveal" key={s.title}>
          <div className="step__top">
            <span className="step__n">{String(i + 1).padStart(2, "0")}</span>
            <span className="step__line" />
          </div>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </article>
      ))}
    </div>
  );
}
