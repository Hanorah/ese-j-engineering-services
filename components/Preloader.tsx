import LogoMark from "./LogoMark";

const LETTERS = ["e", "s", "e", ".", "j"];

/**
 * ZOD-style opening curtain, built on the ESE J mark: the column rises, beams slide
 * out floor by floor, the jib reaches across, the cable drops and the hook swings in,
 * while the wordmark letters drop into place. Then the curtain lifts.
 * Pure CSS so it plays before hydration; the inline script in the layout skips it
 * after the first view in a session and removes it once finished.
 */
export default function Preloader() {
  return (
    <div className="pre" aria-hidden="true">
      <div className="pre__grid" />
      <div className="pre__lockup">
        <LogoMark className="pre__mark" />
        <div className="pre__word">
          <span className="pre__letters">
            {LETTERS.map((l, i) => (
              <span key={i} className={`pre__l${l === "." ? " pre__l--dot" : ""}`} style={{ animationDelay: `${0.95 + i * 0.07}s` }}>
                {l}
              </span>
            ))}
          </span>
          <span className="pre__sub">Engineering Ltd · Since 2009</span>
        </div>
      </div>
      <div className="pre__foot">
        <span>Plan · Engineer · Fabricate · Build · Deliver</span>
        <span className="pre__count" />
      </div>
      <div className="pre__progress"><i /></div>
    </div>
  );
}
