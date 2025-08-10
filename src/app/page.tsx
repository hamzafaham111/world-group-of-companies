import Hero from '@/components/Hero'
import Companies from '@/components/Companies'
import ManagingDirector from '@/components/ManagingDirector'
import BoardOfDirectors from '@/components/BoardOfDirectors'
import ContactOffices from '@/components/ContactOffices'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Companies />
      <ManagingDirector />
      <BoardOfDirectors />
      <ContactOffices />
      <Footer />
    </main>
  )
}
