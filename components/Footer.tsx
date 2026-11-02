import Link from "next/link";
import Brand from "./Brand";
import Icon from "./Icon";
import { company, fullAddress, maps, services } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__news">
          <div>
            <h3>Have a project in mind?</h3>
            <p>Talk to our engineers today. Consultation and site assessment to get you started.</p>
          </div>
          <div className="footer__news-actions">
            <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener" className="btn btn--accent">
              Chat on WhatsApp <span className="btn__icon"><Icon name="arrowUpRight" size={16} /></span>
            </a>
            <a href={company.profilePdf} target="_blank" rel="noopener" className="btn btn--glass">
              <Icon name="download" size={18} /> Company profile
            </a>
          </div>
        </div>

        <div className="footer__top">
          <div className="footer__brand">
            <Brand light />
            <p>The No.1 place for all engineering needs. Engineering &amp; construction across Nigeria since 2009.</p>
            <p className="footer__legal">
              {company.legalName} is a private company limited by shares, registered with the Corporate Affairs
              Commission. RC {company.rcNumber} · TIN {company.tin}
            </p>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <Link href="/about">About us</Link>
            <Link href="/about#leadership">Leadership</Link>
            <Link href="/about#process">Our process</Link>
            <Link href="/certifications">Certifications &amp; HSE</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/engineering-company-benin-city">Engineering in Benin City</Link>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>
            ))}
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <a href={company.phoneHref}><Icon name="phone" size={16} /> {company.phone}</a>
            <a href={`mailto:${company.email}`}><Icon name="mail" size={16} /> {company.email}</a>
            <a href={maps.mapUrl} target="_blank" rel="noopener"><Icon name="pin" size={16} /> {fullAddress}</a>
            <a href={`https://${company.website}`}><Icon name="globe" size={16} /> {company.website}</a>
          </div>
        </div>

        <div className="footer__big" aria-hidden="true">ESE-J ENGINEERING</div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {company.legalName}. RC {company.rcNumber}. All rights reserved.</span>
          <span className="footer__links"><a href="/sitemap.xml">Sitemap</a><Link href="/credits">Photo credits</Link><a href="#top">Back to top ↑</a></span>
        </div>
      </div>
    </footer>
  );
}
