import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Dr. Nurul Huda Sakib. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="https://www.researchgate.net/profile/Nurul_Sakib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-[#c0392b] transition-colors"
            >
              ResearchGate
            </Link>
            <Link
              href="https://egap.org/member/nurul-huda-sakib/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-[#c0392b] transition-colors"
            >
              EGAP
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-500 hover:text-[#c0392b] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
