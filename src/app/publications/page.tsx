export default function Publications() {
  return (
    <>
      {/* Header */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
            Publications
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Selected peer-reviewed journal articles, book chapters, and research blogs.
          </p>
        </div>
      </section>

      {/* International Journal Articles */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
            International Peer-Reviewed Journal Articles
          </h2>
          <div className="space-y-6">
            {internationalArticles.map((article, i) => (
              <article key={i} className="border-b border-gray-100 pb-6 last:border-0">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {article.citation}
                </p>
                {article.doi && (
                  <a
                    href={article.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs text-[#c0392b] hover:underline"
                  >
                    {article.doi}
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Book Chapters */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
            Book Chapters &amp; Reference Chapters
          </h2>
          <div className="space-y-6">
            {bookChapters.map((chapter, i) => (
              <article key={i} className="border-b border-gray-100 pb-6 last:border-0">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {chapter.citation}
                </p>
                {chapter.doi && (
                  <a
                    href={chapter.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs text-[#c0392b] hover:underline"
                  >
                    {chapter.doi}
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* National Articles */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
            National Peer-Reviewed Journal Articles
          </h2>
          <div className="space-y-6">
            {nationalArticles.map((article, i) => (
              <article key={i} className="border-b border-gray-100 pb-6 last:border-0">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {article.citation}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Research Blogs */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
            Research Blog Writing
          </h2>
          <div className="space-y-6">
            {researchBlogs.map((blog, i) => (
              <article key={i} className="border-b border-gray-100 pb-6 last:border-0">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {blog.citation}
                </p>
                {blog.url && (
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs text-[#c0392b] hover:underline break-all"
                  >
                    Read Article →
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const internationalArticles = [
  {
    citation:
      "Sakib, N. H. (2025) Who to Blame for Blurred National Integrity Strategy to Prevent Corruption in Bangladesh: Structure or Agency? Regional Studies, 43(1), 3-33.",
    doi: null,
  },
  {
    citation:
      "Sakib, N.H., Mahmood, N. & Islam, T.U. (2025). Patron-client relationship in the Rohingya camps: recent trends and impact on refugee governance. Int J Humanitarian Action 10, 5.",
    doi: "https://doi.org/10.1186/s41018-025-00167-y",
  },
  {
    citation:
      "Sakib, N. H., Ridi, A. A., & Mahmood, N. (2025). Female Labour Migration in the Middle East from Bangladesh: Remittance Warrior or Modern-Day Slave? Journal of Developing Societies.",
    doi: "https://doi.org/10.1177/0169796X251321879",
  },
  {
    citation:
      "Shishir, F. J., & Sakib, N. H. (2025). Analyzing the Nexus Between Meritocracy and Sectoral Approach in the Civil Service Recruitment in Bangladesh. International Journal of Public Administration, 1–14.",
    doi: "https://doi.org/10.1080/01900692.2025.2451402",
  },
  {
    citation:
      "Sakib, N. H., Shishir, F. J., & Rahman, M. S. (2024). Changing Dynamics of Political Party Communication: The Case of New Media in Bangladesh. Bandung: Journal of the Global South, 1–35.",
    doi: "https://doi.org/10.1163/21983534-11030001",
  },
  {
    citation:
      "Sajedur Rahman, M., Huda Sakib, N., Jasmin. (2024). Volunteerism and Civic Engagement during COVID-19 Pandemic in Bangladesh. International Journal of Non-Profit Sector Empowerment, 3(1).",
    doi: "https://doi.org/10.12681/npse.35837",
  },
  {
    citation:
      "Jasmin, Sakib, N. H., & Shishir, M. F. J. (2023). Chinese Soft Power in Bangladesh: Debt Trap or Shared Interests? Journal of Indian and Asian Studies, 4(1).",
    doi: "https://doi.org/10.1142/S2717541323500043",
  },
  {
    citation:
      "Shishir, M., Sakib, N.H. (2022) How Interests and Ideas of a Dominant Actor Make a Big Difference: Analyzing India's Role in SAARC and BIMSTEC. Chinese Political Science Review.",
    doi: "https://doi.org/10.1007/s41111-022-00230-8",
  },
  {
    citation:
      "Sakib, N. H., & Ahmed, F. (2022). Combating Corruption during Covid-19 in Bangladesh: The Role of Community-Based Organizations. International Journal of Non-Profit Sector Empowerment, 1(1).",
    doi: "https://doi.org/10.12681/npse.31116",
  },
  {
    citation:
      "Sakib, N.H., Islam, M. & Shishir, M.F.J. (2022) National integrity strategy implementation in land administration to prevent corruption in Bangladesh. SN Social Sciences 2, 43.",
    doi: "https://doi.org/10.1007/s43545-022-00352-5",
  },
  {
    citation:
      "Rahman, M.S., Sakib, N.H. (2021). Statelessness forced migration and the security dilemma along borders. SN Social Sciences 1, 160.",
    doi: "https://doi.org/10.1007/s43545-021-00173-y",
  },
  {
    citation:
      "Sakib, N. H. (2020) Community organizing in anti-corruption initiatives through spontaneous participation: Bangladesh perspective. Community Development Journal, Oxford University Press.",
    doi: "https://doi.org/10.1093/cdj/bsaa027",
  },
  {
    citation:
      "Sakib, N. H. (2020) Institutional Isomorphism of Anti-Corruption Agency: The Case of Anti-Corruption Commission in Bangladesh. Chinese Political Science Review, Springer.",
    doi: "https://doi.org/10.1007/s41111-020-00143-4",
  },
  {
    citation:
      "Sakib, N. H. (2019) One size does not fit all: an analysis of the corruption preventative approach of the ACC in Bangladesh. Asian Journal of Political Science, 27(2), 211-234.",
    doi: null,
  },
  {
    citation:
      "Sakib, N. H. & Islam, M. T. (2014). State of water governance in Dhaka Metropolitan City of Bangladesh. International Journal of Interdisciplinary and Multidisciplinary Studies, 1(2), 19-38.",
    doi: null,
  },
];

const bookChapters = [
  {
    citation:
      "Sakib, N. H., Mahmud, S., & Amundsen, I. (2025). Civil society in an adverse environment: Transparency International Bangladesh. In Anti-corruption in a discordant world. Routledge.",
    doi: "https://doi.org/10.4324/9781003412440",
  },
  {
    citation:
      "Sakib, N.H., Howlader, M.S. (2024). Bangladesh at 50: Bangladesh-China Bilateral Relations in the 21st Century. In Bangladesh–China Connectivity. Springer.",
    doi: "https://doi.org/10.1007/978-981-97-4848-8_2",
  },
  {
    citation:
      "Sakib, N. H. and Ashraf, B (2022) The Rohingya during COVID-19: Belief System, Governance, and Future Policy. In Rohingya Crisis and the Two-Faced God of Janus. Lexington Books.",
    doi: null,
  },
  {
    citation:
      "Sakib, N. H. (2020) Bottom-Up Anti-Corruption Approach. In Global Encyclopedia of Public Administration, Public Policy, and Governance. Springer.",
    doi: "https://doi.org/10.1007/978-3-319-31816-5_3931-1",
  },
  {
    citation:
      "Sakib, N. H. (2020) Horizontal Accountability to Prevent Corruption. In Global Encyclopedia of Public Administration, Public Policy, and Governance. Springer.",
    doi: "https://doi.org/10.1007/978-3-319-31816-5_3930-1",
  },
  {
    citation:
      "Sakib, N. H. (2020) Role of Community-Based Organisation to Combat Corruption. In Global Encyclopedia of Public Administration. Springer.",
    doi: "https://doi.org/10.1007/978-3-319-31816-5_3933-1",
  },
  {
    citation:
      "Sakib, N. H. (2020) Anti-Corruption Agencies. In Global Encyclopedia of Public Administration, Public Policy, and Governance. Springer.",
    doi: "https://doi.org/10.1007/978-3-319-31816-5_3929-1",
  },
];

const nationalArticles = [
  {
    citation:
      "Sakib, N. H. (2024) Corruption and Food Security in Bangladesh. AmCham Journal, 16(2), 28-31.",
  },
  {
    citation:
      "Shishir, M. F. J., Sakib, N. H., Rahman, M.S. (2023) Dilemma of Weberian Model and Recent Quota Ban in the Civil Service Recruitment in Bangladesh. Journal of Politics and Administration, 7(1-2), 118-132.",
  },
  {
    citation:
      "Ahmed, F. and Sakib, N. H. (2023) The Multiplicity of Institutions in Rohingya Camps and Its Impacts on Host Communities in Bangladesh. Social Science Review, BSMRSTU.",
  },
  {
    citation:
      "Sakib, N. H. (2021). Corruption Prevention through Community Organizing. Bangladesh Journal of Public Administration, 29(1), 1-25.",
  },
  {
    citation:
      "Sakib, N. H. & Islam, M. T. (2020). Conflict in Water Management: Study on Dhaka Slum Dwellers. The Jahangirnagar Review, XLI(1), 365-379.",
  },
];

const researchBlogs = [
  {
    citation:
      "Sakib, N. H. & Rahman, S. (2021) Bangladesh balances its relations with major powers: Why the repatriation of Rohingya refugees is unlikely. Asia Global Institute, University of Hong Kong.",
    url: null,
  },
  {
    citation:
      "Sakib, N. H. and Habib, A. (2021). Risk and opportunity: Bangladesh ponders China and the Belt and Road Initiative. Asia Global Institute, University of Hong Kong.",
    url: "https://www.asiaglobalonline.hku.hk/risk-and-opportunity-bangladesh-ponders-china-and-belt-and-road-initiative",
  },
  {
    citation:
      "Helen, D. & Sakib, N. H. (2021). Few rights and little progress: The Rohingya in Bangladesh. Center for Global Development, USA.",
    url: "https://www.cgdev.org/blog/few-rights-and-little-progress-rohingya-bangladesh",
  },
  {
    citation:
      "Sakib, N. H. (2020). The Interplay Between Corruption and Development: Bangladesh's LDC Graduation. Asia Global Institute, University of Hong Kong.",
    url: "https://www.asiaglobalonline.hku.hk/interplay-between-corruption-and-development-bangladeshs-ldc-graduation",
  },
  {
    citation:
      "Sakib, N. H. & Rahman, S. (2020) Local Solutions for Local COVID-19 Problems: Community Activism in Bangladesh. South Asia Centre, London School of Economics.",
    url: "https://blogs.lse.ac.uk/southasia/2020/05/20/local-solutions-for-local-covid-19-problems-community-activism-in-bangladesh/",
  },
  {
    citation:
      "Sakib, N. H. (2019) Why have anti-corruption efforts failed in Bangladesh? South Asia Centre, London School of Economics.",
    url: "https://blogs.lse.ac.uk/southasia/2019/10/03/why-have-anti-corruption-efforts-failed-in-bangladesh/",
  },
];
