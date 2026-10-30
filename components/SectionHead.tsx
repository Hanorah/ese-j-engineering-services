/** Screenshot-style heading: small label on the left, two-tone title on the right. */
export default function SectionHead({
  label,
  strong,
  light,
  text,
  dark = false,
  center = false,
}: {
  label: string;
  strong: string;
  light: string;
  text?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`shead${dark ? " shead--dark" : ""}${center ? " shead--center" : ""}`}>
      <span className="shead__label reveal">{label}</span>
      <div className="shead__main">
        <h2 className="reveal">
          <span>{strong}</span> {light}
        </h2>
        {text && <p className="reveal">{text}</p>}
      </div>
    </div>
  );
}
