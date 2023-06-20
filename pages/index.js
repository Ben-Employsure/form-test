import React from 'react'

import NewsletterForm from '../components/newsletter-form'
import FullForm from '../components/full-form'

const Page = () => {
  return (
    <section className="mx-auto max-w-4xl grid gap-24">
      <div>
        <h1 className="font-extra-bold text-center text-5xl sm:text-7xl !leading-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-iridescent-blue to-brand-electric-purple">
          Custom Marketo Forms With React
        </h1>
      </div>
      <div>
        <NewsletterForm formId={process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ID} />
      </div>
      <div>
        <FullForm formId={process.env.NEXT_PUBLIC_FULL_FORM_ID} />
      </div>
    </section>
  )
}

export default Page
