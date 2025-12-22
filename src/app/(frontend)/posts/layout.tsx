import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { PostsSidebar } from './Sidebar'

export default async function PostsLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    sort: 'chapter',
    select: {
      chapter: true,
      title: true,
      slug: true,
    },
  })

  return (
    <div className="flex flex-col lg:flex-row min-h-screen items-start">
      <PostsSidebar posts={posts.docs} />

      {/* Main Content */}
      <main className="flex-1 min-w-0 w-full">
        <div className="container py-8 lg:py-16 max-w-3xl mx-auto px-6">
          {children}
        </div>
      </main>
    </div>
  )
}
