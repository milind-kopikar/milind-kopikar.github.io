import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-bold text-primary-600 sm:text-2xl">
          TutorFlow AI
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-700" aria-label="Main">
          <Link href="/" className="hover:text-primary-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary-600 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-primary-600 transition-colors">
            Contact Us
          </Link>
          <Link
            href="/#signup"
            className="rounded-lg bg-primary-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}

