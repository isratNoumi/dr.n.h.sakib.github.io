export default function Contact() {
  return (
    <>
      {/* Header */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
            Contact
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Get in touch for academic collaboration, research consultancy, or speaking invitations.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Position</p>
                  <p className="text-sm text-gray-700">Professor and Chair</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Department</p>
                  <p className="text-sm text-gray-700">Department of Government and Politics</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Institution</p>
                  <p className="text-sm text-gray-700">Jahangirnagar University, Savar, Dhaka-1342, Bangladesh</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Phone</p>
                  <p className="text-sm text-gray-700">+8801889733737</p>
                </div>
              </div>
            </div>

            {/* Online Profiles */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
                Online Profiles
              </h2>
              <div className="space-y-4">
                <a
                  href="https://www.researchgate.net/profile/Nurul_Sakib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-100 rounded-sm hover:border-[#c0392b] transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#c0392b]/10 transition-colors">
                    <span className="text-xs font-bold text-gray-500 group-hover:text-[#c0392b]">RG</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1a1a2e]">ResearchGate</p>
                    <p className="text-xs text-gray-500">View research profile & papers</p>
                  </div>
                </a>

                <a
                  href="https://egap.org/member/nurul-huda-sakib/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-100 rounded-sm hover:border-[#c0392b] transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#c0392b]/10 transition-colors">
                    <span className="text-xs font-bold text-gray-500 group-hover:text-[#c0392b]">EG</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1a1a2e]">EGAP</p>
                    <p className="text-xs text-gray-500">Evidence in Governance and Politics</p>
                  </div>
                </a>

                <a
                  href="https://ecpr.eu/profile/NurulHudaSakib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-100 rounded-sm hover:border-[#c0392b] transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#c0392b]/10 transition-colors">
                    <span className="text-xs font-bold text-gray-500 group-hover:text-[#c0392b]">EC</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1a1a2e]">ECPR</p>
                    <p className="text-xs text-gray-500">European Consortium for Political Research</p>
                  </div>
                </a>

                <a
                  href="https://www.meridian.org/profile/nurul-huda-sakib/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-100 rounded-sm hover:border-[#c0392b] transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#c0392b]/10 transition-colors">
                    <span className="text-xs font-bold text-gray-500 group-hover:text-[#c0392b]">MI</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1a1a2e]">Meridian International</p>
                    <p className="text-xs text-gray-500">IVLP Alumni Profile</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1a1a2e] mb-8">
            References
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-[#1a1a2e]">Professor Rodney Smith</p>
              <p className="text-sm text-gray-600">School of Social and Political Science</p>
              <p className="text-sm text-gray-600">The University of Sydney, Australia</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-[#1a1a2e]">Professor Shamsul Alam</p>
              <p className="text-sm text-gray-600">Acting Dean, Faculty of Social Sciences</p>
              <p className="text-sm text-gray-600">Jahangirnagar University, Bangladesh</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-[#1a1a2e]">Dr. Al Masud Hasanuzzaman</p>
              <p className="text-sm text-gray-600">Professor, Dept. of Government and Politics</p>
              <p className="text-sm text-gray-600">Jahangirnagar University, Bangladesh</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
