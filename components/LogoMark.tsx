/**
 * ESE J mark: a tower crane drawn as the letters E and J. The mast and three beams
 * form the E; the top beam runs on as a lattice jib (tied back to the mast peak),
 * and the J is the crane hook hanging from its trolley.
 * Steel uses --mark-a, cable + hook use --mark-b. Part classes drive the preloader build.
 */
export const JIB_PATH =
  "M7 13h52v7H7zM19.8 18.2h5.6L22.6 14.8zM23.8 14.8h5.6L26.6 18.2zM27.8 18.2h5.6L30.6 14.8zM31.8 14.8h5.6L34.6 18.2zM35.8 18.2h5.6L38.6 14.8zM39.8 14.8h5.6L42.6 18.2zM43.8 18.2h5.6L46.6 14.8zM47.8 14.8h5.6L50.6 18.2z";

export default function LogoMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" role={title ? "img" : undefined} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <path className="lm-tie" d="M11.25 4.5 58 13" fill="none" stroke="var(--mark-a, currentColor)" strokeWidth="1.4" strokeLinecap="round" />
      <g fill="var(--mark-a, currentColor)">
        <path className="lm-peak" d="M7 13.5 11.25 3l4.25 10.5z" />
        <rect className="lm-stem" x="7" y="13" width="8.5" height="44" rx="1.4" />
        <path className="lm-jib" d={JIB_PATH} fillRule="evenodd" />
        <rect className="lm-bar2" x="7" y="31.5" width="18" height="7" rx="1.4" />
        <rect className="lm-bar3" x="7" y="50" width="24" height="7" rx="1.4" />
        <rect className="lm-trolley" x="45.5" y="20" width="7" height="2.6" rx="0.8" />
      </g>
      <g className="lm-hang" fill="none" stroke="var(--mark-b, currentColor)" strokeLinecap="round" strokeLinejoin="round">
        <path className="lm-cable" d="M49 22.6V31" strokeWidth="2" />
        <path className="lm-hook" d="M49 31v11a6.6 6.6 0 0 1-13.2 0v-2.6" strokeWidth="5.2" />
      </g>
    </svg>
  );
}
