export default function Research() {
  return (
    <>
      {/* Header */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
            Research
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Funded research projects, consultancy work, and international collaborations.
          </p>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
            Major Research Projects
          </h2>
          <div className="space-y-8">
            {researchProjects.map((project, i) => (
              <div key={i} className="border-l-2 border-gray-200 pl-6 hover:border-[#c0392b] transition-colors">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-mono px-2 py-1 bg-gray-100 text-gray-500 rounded">
                    {project.period}
                  </span>
                  <span className="text-xs text-[#c0392b] font-medium">
                    {project.role}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-[#1a1a2e] mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500">
                  Funded by: {project.funder}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
            Research Consultancy
          </h2>
          <div className="space-y-6">
            {consultancy.map((item, i) => (
              <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
                <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conferences */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
            Selected Conference Presentations &amp; Invited Lectures
          </h2>
          <div className="space-y-6">
            {conferences.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border-b border-gray-100 pb-4 last:border-0">
                <span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full flex-shrink-0 mt-2" />
                <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thesis Supervision */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
            Research Supervision
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Currently supervising 3 PhD, 2 MPhil, and 3 Master&apos;s students.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-[#1a1a2e] mb-4">PhD Supervision</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">• Strengthening National Integrity Strategy through Educational Institutions</li>
                <li className="text-sm text-gray-600">• Digital Services in Union Parishad: Prospects and Challenges</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1a1a2e] mb-4">Selected Master&apos;s Theses</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">• COVID-19 Mass Vaccination Governance in Bangladesh</li>
                <li className="text-sm text-gray-600">• Female Labor Migration in the Middle East from Bangladesh</li>
                <li className="text-sm text-gray-600">• Environmental Challenges of &apos;Amar Gram, Amar Shohor&apos; Mega Project</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const researchProjects = [
  {
    title: "Scenario-Based Political Economy Analysis of Governance in Bangladesh (GO4IMPact 2024–2027)",
    role: "Researcher",
    funder: "Water Aid and Swiss Contact",
    period: "2025",
  },
  {
    title: "State of Internal Political Party Democracy in Bangladesh",
    role: "Team Leader",
    funder: "International Republican Institute, USA",
    period: "2024–2025",
  },
  {
    title: "Cost of Politics in Bangladesh",
    role: "Lead Researcher",
    funder: "Westminster Foundation of Democracy (WFD), UK",
    period: "2024–2025",
  },
  {
    title: "Regional Research on the Analysis of South Asian Human Rights Mechanism",
    role: "Team Leader",
    funder: "Plan International",
    period: "2023–2024",
  },
  {
    title: "Youth Perception on the State Democracy & the Efficacy of Political Participation in Bangladesh",
    role: "Team Leader",
    funder: "International Republican Institute, USA",
    period: "2023–2024",
  },
  {
    title: "University Students Awareness on Whistleblowing at the Public Sectors in Bangladesh",
    role: "Project Director",
    funder: "EMK Centre, US Department of States",
    period: "2023",
  },
  {
    title: "Patron-Client Relationship in Rohingya Camps: Recent Trend and Impact on Refugee Governance",
    role: "Project Director",
    funder: "University Grants Commission of Bangladesh",
    period: "2021–2022",
  },
  {
    title: "Field Administration Challenges to Implement the National Integrity Strategy of Bangladesh",
    role: "Project Director",
    funder: "Bangladesh Civil Service Administration Academy",
    period: "2020",
  },
  {
    title: "Ethnographic Studies of Muslim Society in South Asia",
    role: "Researcher",
    funder: "ILCAA, Tokyo University of Foreign Studies, Japan",
    period: "2019–Present",
  },
];

const consultancy = [
  "Research on the analysis of South Asian Human Rights Mechanism for Human Rights Defenders, Plan International (2023-2024)",
  "Translation of Drugs and Crime, Maritime, Port Authority Laws for UNODC Bangladesh",
  "Socio-Economic Impact of Cross Border Energy Trade at the South Asian Sub-Regional Level, Bangladesh Enterprise Institute, Funded by USAID (2022)",
  "Impact Assessment of Paurashava Related Training, National Institute of Local Government (NILG) (2021-2022)",
  "Development of MP Induction Core Content and Capacity Building, UNDP Parliamentary Development Project (2014)",
  "The End of Term Report of the 9th Parliament, Bangladesh – UNDP (2013)",
];

const conferences = [
  "Invited Lecture on 'Designing Theoretical Framework and Conceptual Framework in Social Science Research' at BIISS, Dhaka (March 2025)",
  "Keynote on 'Ensuring citizens' participation and agency in local government functions' – Citizens Platform for SDGs, UNDP Bangladesh (December 2024)",
  "Panel Talk on 'Rohingya Crisis: Towards Regional and Global Approach' at SANPA Conference (October 2024)",
  "Panel Talk at Open Government Partnership (OGP) Global Summit, Seoul, Republic of Korea (December 2021)",
  "25th World Congress of Political Science, IPSA, Brisbane, Australia (July 2018)",
  "Lien International Conference on Good Governance, Nanyang Technological University, Singapore (October 2017)",
  "Australian Political Studies Association Annual Conference, Monash University (September 2017)",
  "Global Forum on Political Parties and Good Governance, Fudan University, China (May 2019)",
];
