import Link from 'next/link';

const flowSteps = [
  { label: 'Student takes notes', icon: '📓' },
  { label: 'Upload to app', icon: '📱' },
  { label: 'Consolidated notes & curriculum', icon: '☁️' },
  { label: 'Chatbot, tests, answers', icon: '💬' },
  { label: 'Progress dashboard', icon: '📈' },
];

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {flowSteps.map((step, index) => (
            <div key={step.label} className="flex items-center gap-2 sm:gap-4">
              <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white px-3 py-4 shadow-sm sm:px-4 sm:py-5">
                <span className="text-2xl sm:text-3xl" aria-hidden="true">
                  {step.icon}
                </span>
                <span className="mt-1 max-w-[110px] text-center text-xs font-medium text-gray-600 sm:max-w-[140px] sm:text-sm">
                  {step.label}
                </span>
              </div>
              {index < flowSteps.length - 1 && (
                <span className="hidden text-gray-300 sm:inline" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <h1 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Unlock AP Stat Potential with AI
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-gray-600">
          Upload your classroom notes, get curriculum-aligned practice, chat with an AI tutor, and track your
          progress all in one place.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/#signup"
            id="signup"
            className="inline-flex items-center rounded-lg bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-primary-700 transition-colors"
          >
            Start Your Free Trial
          </Link>
        </div>
      </div>
    </section>
  );
}

