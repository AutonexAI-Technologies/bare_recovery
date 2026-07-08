import { getAllPosts } from '@/lib/blog'
import type { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Blog | Bare Recovery Studio',
  description: 'Recovery science, performance insights, and wellness wisdom from Bare Recovery Studio, Kompally.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  return <BlogClient posts={posts} />
}
