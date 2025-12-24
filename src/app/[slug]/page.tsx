import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPageData, generateMetadata as generatePageMetadata } from '@/lib/programmatic-seo/utils'
import ProblemSolutionTemplate from '@/components/templates/ProblemSolutionTemplate'

// Generate static params for all programmatic pages
export async function generateStaticParams() {
  const { getAllPageSlugs } = await import('@/lib/programmatic-seo/data')
  const pages = getAllPageSlugs()
  
  return pages.map((page) => ({
    slug: page.slug,
  }))
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const pageData = getPageData(params.slug)
  
  if (!pageData) {
    return {
      title: 'Page Not Found',
    }
  }
  
  return generatePageMetadata(pageData)
}

// Main page component
export default function ProgrammaticPage({ params }: { params: { slug: string } }) {
  const pageData = getPageData(params.slug)
  
  if (!pageData) {
    notFound()
  }
  
  // For now, we'll use ProblemSolutionTemplate for all pages
  // In the future, we can add logic to select the right template
  return <ProblemSolutionTemplate data={pageData} />
}

