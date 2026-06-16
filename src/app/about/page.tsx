export default function About() {
  return (
    <>
      {/* Header */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
            About
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Academic background, professional journey, and scholarly mission.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-6">
              Biography
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Dr. Nurul Huda Sakib earned his PhD from the University of Sydney in 2018 and has over
                17 years of teaching, research, and consultancy experience. He lectured at the University
                of Sydney, served as adjunct faculty at Bangladesh University of Professionals and North
                South University, and supervised research at the Bangladesh Public Administration Training Centre.
              </p>
              <p>
                With over 35 publications in esteemed journals and presentations worldwide, Dr. Sakib has
                been awarded the International Visitor Leadership Program (IVLP) on Transparency and
                Accountability in Government Exchange Program by the US Government in 2021. He also works
                as a Country Expert for the Varieties of Democracy Project, Department of Political Science,
                University of Gothenburg, Sweden.
              </p>
              <p>
                In 2022, Dr. Sakib received the IVLP Impact Award by the US Government on Whistleblowing.
                His project on whistleblowing also won the Small Grant Competition funded by EMK Centre in
                Bangladesh. Additionally, Dr. Sakib serves as Senior Research Fellow at the Bangladesh
                Center for Indo-Pacific Affairs (BCIPA). In September 2025, he was appointed as Chair of
                the Department of Government and Politics, Jahangirnagar University.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
            Education
          </h2>
          <div className="space-y-8">
            <div className="border-l-2 border-[#c0392b] pl-6">
              <h3 className="font-semibold text-[#1a1a2e]">PhD in Political Science</h3>
              <p className="text-sm text-gray-600 mt-1">
                Department of Government and International Relations
              </p>
              <p className="text-sm text-gray-600">
                Faculty of Arts and Social Sciences, The University of Sydney, Australia
              </p>
              <p className="text-sm text-gray-400 mt-2">December 2018</p>
            </div>
            <div className="border-l-2 border-gray-200 pl-6">
              <h3 className="font-semibold text-[#1a1a2e]">Master of Social Science</h3>
              <p className="text-sm text-gray-600 mt-1">
                Department of Government and Politics
              </p>
              <p className="text-sm text-gray-600">
                Jahangirnagar University, Savar, Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Leadership */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
            Professional Leadership
          </h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <span className="text-sm font-mono text-gray-400 min-w-[100px]">2025–Present</span>
              <div>
                <p className="text-sm font-medium text-[#1a1a2e]">
                  Chair, Department of Government and Politics
                </p>
                <p className="text-sm text-gray-500">Jahangirnagar University</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-sm font-mono text-gray-400 min-w-[100px]">2022–2024</span>
              <div>
                <p className="text-sm font-medium text-[#1a1a2e]">
                  Coordinator, Professional Masters on Governance and Development
                </p>
                <p className="text-sm text-gray-500">Jahangirnagar University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
            Professional Affiliations
          </h2>
          <ul className="space-y-3">
            {[
              "International Visitor Leadership Program (IVLP) Alumni, US Government",
              "Country Expert, Varieties of Democracy Project, University of Gothenburg, Sweden",
              "Community Roster, Evidence in Governance and Politics (EGAP)",
              "Senior Research Fellow, Bangladesh Centre for Indo-Pacific Affairs (BCIPA)",
              "Associate Member, European Consortium for Political Research (ECPR)",
              "General Member, South Asian Network for Public Administration (SANPA)",
              "Member, Eastern Regional Organization for Public Administration (EROPA)",
              "Japan Network of Anti-Corruption Researchers",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full flex-shrink-0 mt-2" />
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
