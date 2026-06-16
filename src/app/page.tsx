import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-widest text-[#c0392b] mb-4 font-medium">
                Professor &amp; Chair
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-[#1a1a2e] leading-tight mb-6">
                Dr. Nurul Huda Sakib
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Department of Government and Politics
                <br />
                Jahangirnagar University, Bangladesh
              </p>
            <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-2xl">
              PhD from the University of Sydney with 17+ years of teaching, research,
              and consultancy experience in governance, anti-corruption, and political science.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/publications"
                className="inline-flex items-center px-6 py-3 bg-[#1a1a2e] text-white text-sm font-medium rounded-sm hover:bg-[#0f3460] transition-colors"
              >
                View Publications
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-sm font-medium rounded-sm hover:border-[#c0392b] hover:text-[#c0392b] transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>

            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm">
                <Image
                  src="/nurul.jpg"
                  alt="Dr. Nurul Huda Sakib"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
            Featured
          </h2>
          {/* YouTube Video */}
          <div className="max-w-2xl border border-gray-100 rounded-sm overflow-hidden">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/57Sfdh2-8aM"
                title="Why Bangladesh's election will decide power, governance and alliances | World Order with Maria"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="p-4">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Media Appearance</p>
              <h3 className="text-sm font-semibold text-[#1a1a2e]">
                Why Bangladesh&apos;s Election Will Decide Power, Governance and Alliances
              </h3>
              <p className="text-xs text-gray-500 mt-1">World Order with Maria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
            Research Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Corruption & Anti-Corruption",
              "Bottom-Up Governance Approaches",
              "Water Politics & Governance",
              "Rohingya Refugee Governance",
              "Belt and Road Initiatives",
              "Regional Cooperation",
              "Environmental Governance",
              "Community Activism & Engagement",
              "Political Communication & New Media",
              "Local Government",
            ].map((interest) => (
              <div
                key={interest}
                className="flex items-center gap-3 p-3 rounded-sm"
              >
                <span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full flex-shrink-0" />
                <span className="text-sm text-gray-700">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
            Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-[#c0392b]">35+</p>
              <p className="text-sm text-gray-600">Publications in peer-reviewed journals</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-[#c0392b]">17+</p>
              <p className="text-sm text-gray-600">Years of teaching & research experience</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-[#c0392b]">IVLP</p>
              <p className="text-sm text-gray-600">
                US Government International Visitor Leadership Program Awardee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Quick Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
            Selected Awards &amp; Fellowships
          </h2>
          <div className="space-y-6">
            {[
              {
                year: "2023",
                title: "EMK Centre Small Grant on Whistleblowing at the Public Sectors in Bangladesh",
              },
              {
                year: "2022",
                title: "IVLP Impact Award on University Students Awareness on Whistleblowing (US Government)",
              },
              {
                year: "2021",
                title: "International Visitor Leadership Program (IVLP) - Transparency and Accountability in Government",
              },
              {
                year: "2014–2018",
                title: "University of Sydney International Postgraduate Award (UIPA)",
              },
            ].map((award) => (
              <div key={award.title} className="flex gap-6 items-start">
                <span className="text-sm font-mono text-gray-400 min-w-[80px]">
                  {award.year}
                </span>
                <p className="text-sm text-gray-700">{award.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
