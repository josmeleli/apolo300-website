"use client"

import Hero from './components/Hero'
import Services from './components/Services'
import PageLayout from './components/PageLayout'

export default function Home() {
  return (
    <PageLayout>
      <main className="pt-24 sm:pt-28 md:pt-32">
        <Hero />
        <Services />
      </main>
    </PageLayout>
  );
}
