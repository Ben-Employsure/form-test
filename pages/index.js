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
        <fullForm formId={process.env.NEXT_PUBLIC_WEBINAR_FORM_ID} />
      </div>
    </section>
  )
}

export default Page
