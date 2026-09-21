import Head from 'next/head'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { resources, findInfo } from '../../data/info'
import { Experience } from '../../components/DiscoverPages'
import { Blogs, Ebooks, Events, Stories, Webinars } from '../../components/ResourceListings'
import { DevHub, Docs, Estimator, Faqs, MapGen, Module, Roi, Studio, Tour } from '../../components/ResourceTools'

function View({ slug }: { slug: string }) {
  switch (slug) {
    case 'stories-from-locus': return <Stories />
    case 'blogs': return <Blogs />
    case 'e-book': return <Ebooks />
    case 'value-study': return <Roi study />
    case 'roi-with-locus': return <Roi />
    case 'locus-studio': return <Studio />
    case 'ai-map-generator': return <MapGen />
    case 'product-tour': return <Tour />
    case 'experience-center': return <div className="dp"><Experience /></div>
    case 'energy-saving-estimator': return <Estimator />
    case 'setup-guide': return <Docs kind="setup" />
    case 'runbooks': return <Docs kind="runbooks" />
    case 'design-deployment-module': return <Module />
    case 'faqs': return <Faqs />
    case 'developer-hub': return <DevHub />
    case 'webinars': return <Webinars />
    case 'events-calendar': return <Events />
    default: return null
  }
}

export default function ResourcePage({ slug }: { slug: string }) {
  const page = findInfo('resource', slug)
  if (!page) return null
  return (
    <>
      <Head>
        <title>{`${page.title} | Locus`}</title>
        <meta name="description" content={page.description} />
      </Head>
      <div className="rp"><View slug={slug} /></div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: resources.map((r) => ({ params: { slug: r.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async ({ params }) => ({ props: { slug: params?.slug as string } })
