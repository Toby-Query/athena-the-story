import React from 'react'
import { Metadata } from 'next'

export const dynamic = 'force-static'
export const revalidate = 600

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
      <span className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
        Part II
      </span>
      <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground">
        The Story
      </h1>
      <div className="max-w-md mx-auto">
        <p className="text-xl text-muted-foreground font-serif italic leading-relaxed">
          "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."
        </p>
        <p className="mt-4 text-sm font-sans font-bold text-muted-foreground/60 uppercase tracking-widest">
          — Patrick McKenzie
        </p>
      </div>

      <div className="pt-12">
        <p className="text-sm text-muted-foreground">
          Select a chapter from the menu to begin.
        </p>
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Part II - The Story`,
  }
}
