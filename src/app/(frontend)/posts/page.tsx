import React from 'react'
import { Metadata } from 'next'

export const dynamic = 'force-static'
export const revalidate = 600

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
      <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground">
        Tales of Lethu
      </h1>
      <div className="max-w-md mx-auto">
        <p className="text-xl text-muted-foreground font-serif italic leading-relaxed">
          "I am in two places, here and where you are."
        </p>
        <p className="mt-4 text-sm font-sans font-bold text-muted-foreground/60 uppercase tracking-widest">
          — Margaret Atwood
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
    title: `Tales of Lethu`,
  }
}
