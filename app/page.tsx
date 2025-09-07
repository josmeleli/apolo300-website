"use client"

import Hero from './components/Hero'
import Services from './components/Services'
import PageLayout from './components/PageLayout'

export default function Home() {
  return (
    <PageLayout>
      <main>
        <Hero />
        <Services />
      </main>
    </PageLayout>
  );
}
