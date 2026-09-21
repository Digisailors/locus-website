import type { GetStaticPaths, GetStaticProps } from 'next'
import InfoPage from '../../components/InfoPage'
import { discover, findInfo } from '../../data/info'

export default function DiscoverPage({ slug }: { slug: string }) {
  const page = findInfo('discover', slug)
  if (!page) return null
  return <InfoPage page={page} siblings={discover} sectionLabel="Discover Spaces" sectionHref="/discover" />
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: discover.map((d) => ({ params: { slug: d.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async ({ params }) => ({ props: { slug: params?.slug as string } })
