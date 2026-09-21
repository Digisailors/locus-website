import type { GetStaticPaths, GetStaticProps } from 'next'
import InfoPage from '../../components/InfoPage'
import { resources, findInfo } from '../../data/info'

export default function ResourcePage({ slug }: { slug: string }) {
  const page = findInfo('resource', slug)
  if (!page) return null
  const current = resources.find((r) => r.slug === slug)
  const siblings = resources.filter((r) => r.column === current?.column)
  return <InfoPage page={page} siblings={siblings} sectionLabel={current?.column ?? 'Resources'} sectionHref="/resources" />
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: resources.map((r) => ({ params: { slug: r.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async ({ params }) => ({ props: { slug: params?.slug as string } })
