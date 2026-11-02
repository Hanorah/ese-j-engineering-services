import Image from "next/image";
import Icon from "./Icon";
import { company, fullAddress } from "@/lib/content";

/** Registration details exactly as on the CAC certificate: visible text that search engines can match to the registry. */
export default function CompanyFacts() {
  const facts = [
    ["Registered name", company.legalName],
    ["RC number", `RC ${company.rcNumber}`],
    ["Company type", company.companyType],
    ["Incorporated", `${company.incorporatedLabel}, under the ${company.act}`],
    ["Registrar", company.registrar],
    ["Tax ID (TIN)", company.tin],
    ["Registered office", fullAddress],
    ["Operating since", String(company.founded)],
  ];

  return (
    <div className="facts reveal">
      <button type="button" className="facts__cert" data-full="/img/cert-cac.jpg" aria-label="View the CAC Certificate of Incorporation">
        <Image src="/img/cert-cac.jpg" alt={`CAC Certificate of Incorporation for ${company.legalName}, RC ${company.rcNumber}`} fill sizes="(max-width: 900px) 70vw, 300px" />
        <span className="cert__zoom"><Icon name="plus" size={18} /></span>
      </button>
      <div className="facts__body">
        <span className="facts__badge"><Icon name="shield" size={16} /> Verified CAC registration</span>
        <h3>A registered limited company, accountable by law</h3>
        <dl>
          {facts.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <a href="https://search.cac.gov.ng" target="_blank" rel="noopener" className="facts__verify">
          Verify on the CAC public search <Icon name="arrowUpRight" size={16} />
        </a>
      </div>
    </div>
  );
}
