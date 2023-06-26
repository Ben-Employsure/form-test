import React from 'react'
//import NewsletterForm from '../components/newsletter-form'
import FullForm from '../components/full-form'

const Page = () => {
  return (
    <section className="mx-auto max-w-4xl grid gap-24">
      <div>

      </div>
      <div>
        <FullForm formId={process.env.NEXT_PUBLIC_FULL_FORM_ID} />
      </div>
    </section>
  )
}

export default Page
