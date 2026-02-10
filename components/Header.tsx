import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-bold text-primary-600 sm:text-2xl">
          TutorFlow AI
        </Link>
        <nav className="flex items-center gap-6" aria-label="Main">
          <Link
            href="/"
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about/"
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact/"
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/#signup"
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}
