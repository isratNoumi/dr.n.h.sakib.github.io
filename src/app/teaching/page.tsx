export default function Teaching() {
  return (
    <>
      {/* Header */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
            Teaching
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Academic teaching experience spanning 17+ years across national and international institutions.
          </p>
        </div>
      </section>

      {/* Teaching Interests */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
            Courses Taught
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {courses.map((course) => (
              <div key={course} className="flex items-center gap-3 p-3">
                <span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full flex-shrink-0" />
                <span className="text-sm text-gray-700">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Positions */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
            Academic Positions
          </h2>
          <div className="space-y-10">
            {positions.map((pos, i) => (
              <div key={i} className="border-l-2 border-gray-200 pl-6 hover:border-[#c0392b] transition-colors">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-mono px-2 py-1 bg-gray-100 text-gray-500 rounded">
                    {pos.period}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#1a1a2e] mb-1">
                  {pos.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{pos.institution}</p>
                <p className="text-sm text-gray-500">{pos.courses}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Teaching */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
            International &amp; Guest Teaching
          </h2>
          <div className="space-y-8">
            {internationalTeaching.map((item, i) => (
              <div key={i} className="border-l-2 border-gray-200 pl-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-mono px-2 py-1 bg-gray-100 text-gray-500 rounded">
                    {item.period}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-[#1a1a2e] mb-1">
                  {item.role}
                </h3>
                <p className="text-sm text-gray-600">{item.institution}</p>
                <p className="text-sm text-gray-500 mt-1">{item.course}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const courses = [
  "Public Sector Ethics and Corruption",
  "Power, Politics and Governance",
  "Governance: Issues and Dynamics",
  "Introduction to Public Administration",
  "Public Policy Analysis",
  "Public Administration in Bangladesh",
  "Political Theories for Developing Countries",
  "Bangladesh Politics and Global Politics",
  "Introduction to Political Science",
  "Conflict Studies",
  "Fundamentals of International Politics",
  "State, Society and Politics",
  "Comparative Politics",
  "Development Communication",
];

const positions = [
  {
    title: "Professor",
    institution: "Department of Government and Politics, Jahangirnagar University",
    period: "June 2023 – Present",
    courses: "Governance: Issues and Dynamics, State Society and Politics, International Politics, Global Politics, Conflict Studies, Comparative Politics",
  },
  {
    title: "Associate Professor",
    institution: "Department of Government and Politics, Jahangirnagar University",
    period: "April 2019 – June 2023",
    courses: "Public Sector Ethics and Corruption, Governance: Issues and Dynamics, State Society and Politics, International Politics, Development Communication",
  },
  {
    title: "Assistant Professor",
    institution: "Department of Government and Politics, Jahangirnagar University",
    period: "November 2010 – April 2019",
    courses: "Introduction to Public Administration, Introduction to Political Science, Public Policy Analysis, Contemporary International Politics, Politics of South Asia",
  },
  {
    title: "Lecturer",
    institution: "Department of Government and Politics, Jahangirnagar University",
    period: "September 2007 – November 2010",
    courses: "Introduction to Public Administration, Public Administration in Bangladesh, Contemporary International Politics, Politics of South Asia",
  },
];

const internationalTeaching = [
  {
    role: "Casual Lecturer",
    institution: "Department of Government and International Relations, The University of Sydney",
    period: "July 2018 – December 2018",
    course: "Public Sector Ethics and Corruption (GOVT6301)",
  },
  {
    role: "Guest Lecturer",
    institution: "Department of Government and International Relations, The University of Sydney",
    period: "July 2016 – December 2017",
    course: "Public Sector Ethics and Corruption (GOVT6301)",
  },
  {
    role: "Adjunct Faculty",
    institution: "North South University, Dhaka, Bangladesh",
    period: "November 2020 – Present",
    course: "Introduction to Political Science",
  },
  {
    role: "Adjunct Faculty",
    institution: "Bangladesh University of Professionals, Dhaka",
    period: "January 2019 – Present",
    course: "Political Theories of Third World Countries, Governance Power and Politics, Development Communication",
  },
  {
    role: "Guest Faculty",
    institution: "Bangladesh Youth Leadership Program (USAID / NYU Research Initiative)",
    period: "October 2019 – April 2020",
    course: "Tolerance and Youth Development through Leadership",
  },
  {
    role: "Guest Faculty & Research Guide",
    institution: "Bangladesh Public Service Training Centre (BPATC)",
    period: "April 2019 – December 2019",
    course: "Research Methodology",
  },
];
