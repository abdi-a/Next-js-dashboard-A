import Link from 'next/link'
import { ArrowRight, BookOpen, GraduationCap, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900 text-white font-serif font-bold">
              U
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Uni<span className="text-blue-900">Portal</span></span>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/sign-in" 
              className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors"
            >
              Staff Portal
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 font-medium mb-6">
                 Academic Year 2026-2027
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl font-serif">
                University Administration <br/><span className="text-blue-900">Simplified</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Securely manage student records, faculty data, and departmental resources in one unified system. Designed for the modern academic institution.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link 
                  href="/sign-in" 
                  className="flex w-full items-center justify-center rounded-lg bg-blue-900 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-blue-800 hover:shadow-lg sm:w-auto"
                >
                  Access Admin Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-3">
              <FeatureCard 
                icon={<GraduationCap className="h-6 w-6 text-blue-900" />}
                title="Student Management"
                description="Track enrollment, attendance, and academic performance with precision and ease."
              />
              <FeatureCard 
                icon={<BookOpen className="h-6 w-6 text-blue-900" />}
                title="Course Administration"
                description="Manage curriculum, course schedules, and facility allocations efficiently."
              />
              <FeatureCard 
                icon={<Users className="h-6 w-6 text-blue-900" />}
                title="Faculty Portal"
                description="Streamline communication and resource sharing between administration and staff."
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-8">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-sm text-gray-500">
          <p>© 2026 University Administration System. Secure & Confidential.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md hover:border-blue-100">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
