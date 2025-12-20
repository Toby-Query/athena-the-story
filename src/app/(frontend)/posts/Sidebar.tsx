'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/utilities/ui'
import { usePathname } from 'next/navigation'
import { Post } from '@/payload-types'

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m6 9 6 6 6-6"/>
  </svg>
)

const MenuIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
)

export function PostsSidebar({ posts }: { posts: Pick<Post, 'title' | 'slug'>[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when path changes (user navigated)
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      {/* Mobile Header / Toggle */}
      <button 
        className="lg:hidden w-full border-b border-border bg-background p-4 sticky top-[var(--header-height)] z-10 flex items-center justify-between cursor-pointer text-left" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Table of Contents"
      >
        <span className="font-serif font-bold text-lg">Table of Contents</span>
        <span className="p-1">
            {isOpen ? <ChevronDownIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </span>
      </button>

      {/* Sidebar Content */}
      <aside 
        className={cn(
          "border-r border-border/50 bg-background/50 backdrop-blur shrink-0", // Base styles
          "lg:w-80 lg:sticky lg:top-0 lg:h-screen lg:block lg:overflow-y-auto lg:pt-8 lg:pb-12 lg:px-6", // Desktop styles
          isOpen ? "block w-full border-b border-border" : "hidden", // Mobile state
        )}
      >
        <nav className="flex flex-col gap-4 p-6 lg:p-0">
          <div className="font-serif font-bold text-xl mb-4 px-2 hidden lg:block">Table of Contents</div>
          <ul className="flex flex-col gap-1">
            {posts.map((post, index) => {
              const isActive = pathname === `/posts/${post.slug}`
              return (
                <li key={post.slug}>
                  <Link
                    href={`/posts/${post.slug}`}
                    className={cn(
                      'block px-2 py-1.5 transition-colors rounded-md',
                      isActive 
                        ? 'bg-primary/5 text-primary font-medium' 
                        : 'hover:text-foreground/80 text-muted-foreground'
                    )}
                  >
                   <span className={cn(
                     "block text-xs font-mono uppercase tracking-wider mb-1 opacity-70",
                     isActive ? "text-primary" : "text-muted-foreground"
                   )}>
                      Chapter {index + 1}
                    </span>
                    <span className="block text-sm font-medium">
                      {post.title}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
    </>
  )
}
