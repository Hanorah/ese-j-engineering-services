import { ImageResponse } from "next/og";
import { JIB_PATH } from "@/components/LogoMark";

export const alt = "ESE-J Engineering Ltd: engineering & construction in Nigeria since 2009";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "radial-gradient(circle at 80% 10%, #1d51a9 0%, #0b1b2a 60%)", color: "#fff", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
          <svg width="150" height="150" viewBox="0 0 64 64">
            <path d="M11.25 4.5 58 13" fill="none" stroke="#ffd124" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M7 13.5 11.25 3l4.25 10.5z" fill="#ffd124" />
            <rect x="7" y="13" width="8.5" height="44" rx="1.4" fill="#ffd124" />
            <path d={JIB_PATH} fillRule="evenodd" fill="#ffd124" />
            <rect x="7" y="31.5" width="18" height="7" rx="1.4" fill="#ffd124" />
            <rect x="7" y="50" width="24" height="7" rx="1.4" fill="#ffd124" />
            <rect x="45.5" y="20" width="7" height="2.6" rx="0.8" fill="#ffd124" />
            <path d="M49 22.6V31" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M49 31v11a6.6 6.6 0 0 1-13.2 0v-2.6" stroke="#fff" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 108, fontWeight: 700, letterSpacing: -6, lineHeight: 1 }}>
              ese<span style={{ color: "#ffd124" }}>.</span>j
            </div>
            <div style={{ fontSize: 22, letterSpacing: 6, opacity: 0.7, marginTop: 8 }}>ENGINEERING LTD · SINCE 2009</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 58, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05, maxWidth: 980 }}>
            The No.1 place for all engineering needs in Nigeria
          </div>
          <div style={{ fontSize: 26, opacity: 0.75 }}>
            Project management · Mechanical works · Welding & fabrication · Plumbing · Procurement · Construction
          </div>
        </div>
      </div>
    ),
    size
  );
}
