"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Brand from "./Brand";
import Icon from "./Icon";
import { company, nav } from "@/lib/content";

type Menu = "services" | "company" | null;

export default function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<Menu>(null);
  const [drawer, setDrawer] = useState(false);
  const [mobileSection, setMobileSection] = useState<Menu>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenu(null);
    setDrawer(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(null);
        setDrawer(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawer]);

  const open = (m: Menu) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(m);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMenu(null), 160);
  };

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}${menu ? " has-menu" : ""}`} onMouseLeave={scheduleClose}>
      <div className="header__bar">
        <Brand light />

        <nav className="header__nav" aria-label="Main">
          <Link href="/" className={isActive("/") ? "is-active" : ""}>Home</Link>
          <button
            className={`header__trigger${menu === "company" ? " is-open" : ""}${isActive("/about") || isActive("/certifications") ? " is-active" : ""}`}
            aria-expanded={menu === "company"}
            onMouseEnter={() => open("company")}
            onClick={() => setMenu(menu === "company" ? null : "company")}
          >
            Company <span className="chev" />
          </button>
          <button
            className={`header__trigger${menu === "services" ? " is-open" : ""}${isActive("/services") ? " is-active" : ""}`}
            aria-expanded={menu === "services"}
            onMouseEnter={() => open("services")}
            onClick={() => setMenu(menu === "services" ? null : "services")}
          >
            Services <span className="chev" />
          </button>
          <Link href="/gallery" className={isActive("/gallery") ? "is-active" : ""} onMouseEnter={scheduleClose}>Gallery</Link>
          <Link href="/contact" className={isActive("/contact") ? "is-active" : ""} onMouseEnter={scheduleClose}>Contact</Link>
        </nav>

        <div className="header__actions">
          <a href={company.phoneHref} className="header__phone">
            <Icon name="phone" size={16} /> {company.phone}
          </a>
          <Link href="/contact" className="btn btn--accent btn--sm">
            Get in touch <span className="btn__icon"><Icon name="arrowUpRight" size={16} /></span>
          </Link>
          <button className={`burger${drawer ? " is-open" : ""}`} aria-label={drawer ? "Close menu" : "Open menu"} aria-expanded={drawer} onClick={() => setDrawer((d) => !d)}>
            <span /><span />
          </button>
        </div>
      </div>

      {/* ---------- Mega menu (desktop) ---------- */}
      <div className={`mega${menu ? " is-open" : ""}`} onMouseEnter={() => menu && open(menu)}>
        <div className="mega__panel">
          {menu === "services" && (
            <div className="mega__grid mega__grid--services">
              <div>
                <p className="mega__label">Our services</p>
                <div className="mega__links mega__links--2">
                  {nav.services.map((s) => (
                    <Link key={s.href} href={s.href} className="mega__link">
                      <span className="mega__icon"><Icon name={s.icon} /></span>
                      <span>
                        <strong>{s.title}</strong>
                        <small>{s.text}</small>
                      </span>
                    </Link>
                  ))}
                </div>
                <Link href="/services" className="mega__all">View all services <Icon name="arrow" size={16} /></Link>
              </div>
              <Link href="/contact" className="mega__feature">
                <Image src="/img/ng/bricklayers-kwara.jpg" alt="" fill sizes="340px" />
                <span className="mega__feature-body">
                  <small>Have a project in mind?</small>
                  <strong>Request a free consultation</strong>
                  <span className="mega__feature-cta">Get a quote <Icon name="arrowUpRight" size={16} /></span>
                </span>
              </Link>
            </div>
          )}

          {menu === "company" && (
            <div className="mega__grid mega__grid--company">
              <div>
                <p className="mega__label">Company</p>
                <div className="mega__links mega__links--2">
                  {nav.company.map((s) => (
                    <Link key={s.href} href={s.href} className="mega__link">
                      <span className="mega__icon"><Icon name={s.icon} /></span>
                      <span>
                        <strong>{s.title}</strong>
                        <small>{s.text}</small>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mega__stats">
                <p className="mega__label">At a glance</p>
                <div><strong>2009</strong><span>Founded</span></div>
                <div><strong>30+</strong><span>Projects completed</span></div>
                <div><strong>10+</strong><span>Professionals</span></div>
              </div>
              <a href={company.profilePdf} className="mega__feature mega__feature--dark" target="_blank" rel="noopener">
                <Image src="/img/team-crew.jpg" alt="" fill sizes="300px" />
                <span className="mega__feature-body">
                  <small>Company profile</small>
                  <strong>Download our profile (PDF)</strong>
                  <span className="mega__feature-cta">Download <Icon name="download" size={16} /></span>
                </span>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* ---------- Mobile drawer ---------- */}
      <div className={`drawer${drawer ? " is-open" : ""}`}>
        <nav className="drawer__nav" aria-label="Mobile">
          <Link href="/">Home</Link>
          {(["company", "services"] as const).map((sec) => (
            <div key={sec} className={`drawer__group${mobileSection === sec ? " is-open" : ""}`}>
              <button onClick={() => setMobileSection(mobileSection === sec ? null : sec)} aria-expanded={mobileSection === sec}>
                {sec === "company" ? "Company" : "Services"} <Icon name="plus" size={20} />
              </button>
              <div className="drawer__sub">
                {(sec === "company" ? nav.company : nav.services).map((l) => (
                  <Link key={l.href} href={l.href} onClick={() => setDrawer(false)}>
                    <Icon name={l.icon} size={18} /> {l.title}
                  </Link>
                ))}
                {sec === "services" && <Link href="/services" onClick={() => setDrawer(false)}><Icon name="arrow" size={18} /> All services</Link>}
              </div>
            </div>
          ))}
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="drawer__foot">
          <a href={company.phoneHref}><Icon name="phone" size={18} /> {company.phone}</a>
          <a href={`mailto:${company.email}`}><Icon name="mail" size={18} /> {company.email}</a>
          <Link href="/contact" className="btn btn--accent">Get in touch <span className="btn__icon"><Icon name="arrowUpRight" size={16} /></span></Link>
        </div>
      </div>
    </header>
  );
}
