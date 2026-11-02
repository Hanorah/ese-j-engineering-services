import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { company } from "@/lib/content";

export default function CtaBanner() {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="cta reveal">
          <div className="cta__img">
            <Image src="/img/ng/abuja-frame.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="cta__body">
            <h2>
              Let&apos;s build the future <em>together</em>
            </h2>
            <p>Tell us about your project. We&apos;ll respond with a plan, a timeline and a clear quote.</p>
            <div className="cta__actions">
              <Link href="/contact" className="btn btn--accent">
                Start a project <span className="btn__icon"><Icon name="arrowUpRight" size={16} /></span>
              </Link>
              <a href={company.phoneHref} className="cta__phone">
                <span><Icon name="phone" size={18} /></span>
                <span>
                  <small>Call us anytime</small>
                  {company.phone}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
