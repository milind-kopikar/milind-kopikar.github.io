import Link from 'next/link';

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'X (Twitter)', href: '#' },
  { name: 'Pinterest', href: '#' },
  { name: 'LinkedIn', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-primary-600 transition-colors text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-600" aria-label="Footer">
            <a href="#" className="hover:text-primary-600 transition-colors">
              Social
            </a>
            <Link href="/contact" className="hover:text-primary-600 transition-colors">
              Contact Us
            </Link>
            <a href="#" className="hover:text-primary-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary-600 transition-colors">
              Footer
            </a>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} TutorFlow AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

