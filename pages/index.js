import React from 'react'
//import NewsletterForm from '../components/newsletter-form'
import FullForm from '../components/full-form'
//import WebinarForm from '../components/webinar-form'

const Page = () => {
  return (
    <section className="mx-auto max-w-4xl grid">
      <div>

      </div>
      <div>
        <FullForm formId={process.env.NEXT_PUBLIC_FULL_FORM_ID} />
        <FullForm formId={process.env.NEXT_PUBLIC_CONTACT_FORM_ID} />
        <FullForm formId={process.env.NEXT_PUBLIC_PRICING_FORM_ID} />
        <FullForm formId={process.env.NEXT_PUBLIC_CALLBACK_FORM_ID} />
        <FullForm formId={process.env.NEXT_PUBLIC_REFERRAL_FORM_ID} />
      </div>
    </section>
  )
}

export default Page
