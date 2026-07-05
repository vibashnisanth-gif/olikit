import type {Metadata} from "next";
import {SITE_URL} from "@/lib/seo/constants";

export const metadata: Metadata = {
  title: "Press & Media — Olikit",
  description: "Press kit, brand assets, and media resources for journalists covering Olikit.",
  alternates: {canonical: `${SITE_URL}/press`},
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Press & Media",
  url: `${SITE_URL}/press`,
  isPartOf: {"@type": "WebSite", name: "Olikit", url: SITE_URL},
};

export default function PressPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        <section>
          <h1 className="text-4xl font-bold mb-4">Press & Media</h1>
          <p className="text-lg text-zinc-600">
            Resources for journalists, researchers, and media covering Olikit and global salary
            intelligence.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Company Description</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                25 Words
              </p>
              <p className="text-zinc-700">
                Olikit is a free online platform comparing salaries, taxes, and cost of living
                across 7 countries using government-sourced data.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                50 Words
              </p>
              <p className="text-zinc-700">
                Olikit helps professionals make informed career and relocation decisions by
                providing free calculators and comparisons for salaries, taxes, and cost of living
                across 7 countries. Data is sourced from government agencies including the IRS,
                HMRC, ATO, and CRA.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                100 Words
              </p>
              <p className="text-zinc-700">
                Olikit is a free online financial tools platform that helps professionals compare
                salaries, taxes, compensation, and living costs across 7 countries (US, UK,
                Australia, Canada, New Zealand, India, and Singapore). The platform uses
                government-sourced data from agencies including the IRS, HMRC, ATO, CRA, IRD, IRAS,
                and CBDT to provide transparent, verifiable calculations. Olikit offers 12+
                interactive calculators, 21 profession-specific salary analyses, and 35 city-level
                cost of living comparisons. All calculations run client-side, ensuring user
                financial data never leaves their browser.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Key Statistics</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {stat: "7", label: "Countries Covered"},
              {stat: "21", label: "Professions Analyzed"},
              {stat: "35", label: "Cities Compared"},
              {stat: "12+", label: "Interactive Calculators"},
              {stat: "2,340+", label: "Pages of Data"},
              {stat: "5", label: "Proprietary Scoring Systems"},
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm"
              >
                <p className="text-3xl font-bold text-blue-600">{item.stat}</p>
                <p className="text-sm text-zinc-600">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Data Sources</h2>
          <p className="text-zinc-700 leading-relaxed mb-3">
            All data is sourced from official government publications:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-zinc-700">
            <li>IRS (United States)</li>
            <li>HMRC (United Kingdom)</li>
            <li>ATO (Australia)</li>
            <li>CRA (Canada)</li>
            <li>IRD (New Zealand)</li>
            <li>IRAS (Singapore)</li>
            <li>CBDT (India)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Founder</h2>
          <p className="text-zinc-700 leading-relaxed">
            <strong>Vibash</strong> — Independent developer based in Sydney, Australia. Built Olikit
            to make salary and tax comparison tools freely accessible across major global economies.
            Solo-operated: all calculators, data pipelines, content, and infrastructure are built
            and maintained by the founder.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Brand Assets</h2>
          <p className="text-zinc-700 leading-relaxed mb-3">
            For logo files and brand guidelines, contact{" "}
            <a href="mailto:press@olikit.com" className="text-blue-600 hover:underline">
              press@olikit.com
            </a>
            .
          </p>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-sm text-zinc-600">
              <strong>Primary Color:</strong> #2563eb (Blue)
              <br />
              <strong>Font:</strong> Geist Sans
              <br />
              <strong>Tone:</strong> Authoritative, accessible, data-driven
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm space-y-2">
            <p className="text-zinc-700">
              <strong>Press inquiries:</strong>{" "}
              <a href="mailto:press@olikit.com" className="text-blue-600 hover:underline">
                press@olikit.com
              </a>
            </p>
            <p className="text-zinc-700">
              <strong>General support:</strong>{" "}
              <a href="mailto:support@olikit.com" className="text-blue-600 hover:underline">
                support@olikit.com
              </a>
            </p>
            <p className="text-zinc-700">
              <strong>Location:</strong> Sydney, NSW, Australia
            </p>
          </div>
        </section>

        <section className="border-t pt-8">
          <p className="text-zinc-600">
            Learn more:{" "}
            <a href="/about" className="text-blue-600 hover:underline">
              About Olikit
            </a>{" "}
            ·{" "}
            <a href="/methodology" className="text-blue-600 hover:underline">
              Methodology
            </a>{" "}
            ·{" "}
            <a href="/data-sources" className="text-blue-600 hover:underline">
              Data Sources
            </a>
          </p>
        </section>
      </div>
    </>
  );
}
