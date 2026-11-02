import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";

export default function NotFound() {
  return (
    <PageHero
      image="/img/ng/frame-street-2.jpg"
      eyebrow="404"
      title={<>This page is still <em>under construction</em></>}
      text="The page you're looking for doesn't exist or has moved."
      crumbs={[{ label: "Not found" }]}
    >
      <Link href="/" className="btn btn--accent">
        Back to home <span className="btn__icon"><Icon name="arrowUpRight" size={16} /></span>
      </Link>
    </PageHero>
  );
}
