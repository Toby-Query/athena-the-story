import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export default function Page() {
  return (
    <div className="min-h-[calc(100vh-var(--header-height)-100px)] flex flex-col items-center justify-center text-center p-8 bg-background">
      <div className="max-w-2xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight text-foreground">
            Athena <br/>
            <span className="text-4xl md:text-6xl font-light italic text-muted-foreground block mt-2">The Story</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-serif italic">
            Robert Nystrom/User
          </p>
        </div>

        <div className="h-px w-24 bg-border mx-auto" />

        <div className="space-y-6">
          <p className="text-foreground/80 font-serif leading-relaxed text-lg max-w-lg mx-auto">
            A handbook for writing interpreters. A guide to the dark arts of language implementation. A love letter to code.
          </p>

          <div className="pt-8">
            <Link
              href="/posts"
              className="inline-block px-12 py-4 bg-primary text-primary-foreground font-sans font-bold text-lg rounded-full hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            >
              Start Reading
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Athena - The Story',
    description: 'A handbook for writing interpreters.',
  }
}
