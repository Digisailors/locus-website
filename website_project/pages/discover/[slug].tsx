import Head from 'next/head'
import type { GetStaticPaths, GetStaticProps } from 'next'
import DiscoverPage from '../../components/DiscoverPages'
import { discover, findInfo } from '../../data/info'

export default function Discover({ slug }: { slug: string }) {
  const page = findInfo('discover', slug)
  if (!page) return null
  return (
    <>
      <Head>
        <title>{`${page.title} | Locus`}</title>
        <meta name="description" content={page.description} />
      </Head>
      <DiscoverPage slug={slug} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: discover.map((d) => ({ params: { slug: d.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async ({ params }) => ({ props: { slug: params?.slug as string } })
