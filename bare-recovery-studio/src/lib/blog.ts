import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export interface BlogPost {
  slug: string
  title: string
  subject: string
  date: string
  author: string
  image?: string
  excerpt: string
  readTime: string
  content: string
}

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true })
  }
}

export function getAllPosts(): BlogPost[] {
  ensureBlogDir()
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md') && f.toLowerCase() !== 'readme.md')

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const filePath = path.join(BLOG_DIR, filename)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)
    const rt = readingTime(content)
    const excerpt = content.replace(/#{1,6}\s+/g, '').split('\n').find((l) => l.trim().length > 60) ?? ''

    return {
      slug,
      title: data.title ?? 'Untitled',
      subject: data.subject ?? 'General',
      date: data.date ?? new Date().toISOString().split('T')[0],
      author: data.author ?? 'Team Bare',
      image: data.image,
      excerpt: excerpt.trim().slice(0, 160),
      readTime: rt.text,
      content,
    } satisfies BlogPost
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  ensureBlogDir()
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return undefined

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const rt = readingTime(content)
  const excerpt = content.replace(/#{1,6}\s+/g, '').split('\n').find((l) => l.trim().length > 60) ?? ''

  return {
    slug,
    title: data.title ?? 'Untitled',
    subject: data.subject ?? 'General',
    date: data.date ?? new Date().toISOString().split('T')[0],
    author: data.author ?? 'Team Bare',
    image: data.image,
    excerpt: excerpt.trim().slice(0, 160),
    readTime: rt.text,
    content,
  }
}

export function getAllSlugs(): string[] {
  ensureBlogDir()
  return fs.readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md') && f.toLowerCase() !== 'readme.md')
    .map((f) => f.replace('.md', ''))
}
