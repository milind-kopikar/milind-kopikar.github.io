export const metadata = {
  title: 'About Us – TutorFlow AI',
  description: 'Learn about TutorFlow AI and our mission to help students master AP Statistics.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
      <p className="mt-6 text-gray-600">
        TutorFlow AI is an AI-powered AP Statistics tutor designed for high school students.
        We help you capture your notes, consolidate them with the AP curriculum, practice with
        adaptive quizzes, and track your progress—so you can unlock your full potential on exam day.
      </p>
    </div>
  );
}
