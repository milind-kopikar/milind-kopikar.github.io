const features = [
  {
    title: 'Notes-Based Practice',
    description: 'Upload your class notes and get quizzes tailored to what your teacher covered—aligned with the AP Statistics curriculum.',
  },
  {
    title: 'Adaptive Quizzing',
    description: 'Practice with auto-generated multiple choice and free response. Get instant grading and step-by-step explanations.',
  },
  {
    title: 'Global Tutors',
    description: 'See how you compare to other students preparing for the same exam and get suggestions on what to review next.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="border-t border-gray-100 bg-slate-50 px-4 py-16 sm:py-20" aria-labelledby="features-heading">
      <div className="mx-auto max-w-6xl">
        <h2 id="features-heading" className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          Features
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
