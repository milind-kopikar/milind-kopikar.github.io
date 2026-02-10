const steps = [
  'Student takes notes in class',
  'Upload image of notes to app',
  'Notes consolidated with others & AP curriculum',
  'Interact with Chatbot, take tests, get answers',
  'See progress on Dashboard',
];

export default function HowItWorksSection() {
  return (
    <section className="border-t border-gray-100 bg-white px-4 py-16 sm:py-20" aria-labelledby="how-it-works-heading">
      <div className="mx-auto max-w-3xl">
        <h2 id="how-it-works-heading" className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          How It Works
        </h2>
        <ol className="mt-10 space-y-6">
          {steps.map((step, i) => (
            <li key={step} className="flex items-start gap-4">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span className="pt-0.5 text-gray-700">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
