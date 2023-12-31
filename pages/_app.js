import { Fragment } from 'react'
import Head from 'next/head'
import GitHubLogo from '../components/github-logo'

import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  const cdnUrl = 'https://employsure.com.au'
  const seoTitle = 'Custom Marketo Forms React Test'
  const seoDescription =
    'Create custom Marketo forms that still submit data straight to the main lead database!'
  const seoImage = 'open-graph-image.jpg'

  return (
    <Fragment>
      <Head>
        <title>{seoTitle}</title>
        <link rel="canonical" href={cdnUrl} />
        <meta name="robots" content="max-snippet:-1" />

        {/* Primary Meta Tags */}
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <meta name="image" content={`${cdnUrl}/${seoImage}`} />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={cdnUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={`${cdnUrl}/${seoImage}`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={cdnUrl} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`${cdnUrl}/${seoImage}`} />

        {/* favicon */}
        <link rel="icon" type="image/png" sizes="16x16" href={`${cdnUrl}/favicon-16x16.png`} data-react-helmet="true" />
        <link rel="icon" type="image/png" sizes="32x32" href={`${cdnUrl}/favicon-32x32.png`} data-react-helmet="true" />

      </Head>
      <header className="fixed bg-white w-full p-4 shadow-lg z-50">
        <nav className="mx-auto max-w-7xl flex items-center justify-between">
            <a href="https://github.com/PaulieScanlon/cockroachdb-marketo-test-forms/" target="_blank" rel="noreferrer">
            <GitHubLogo />
          </a>
        </nav>
      </header>
      <main className="prose px-4 pt-16 pb-16 sm:pt-48 sm:pb-24 max-w-full min-h-screen">
        <Component {...pageProps} />
      </main>
      <footer className="bg-black">
        <ul className="mx-auto max-w-7xl flex items-center justify-between p-4 text-sm font-bold text-white">
          <li>
            <span>Form Testing Environment</span>
          </li>
        </ul>
      </footer>
    </Fragment>
  )
}

export default App
