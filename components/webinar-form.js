import React, { useState, useReducer, Fragment } from 'react'
import PropTypes from 'prop-types'

import { initialState, reducer } from '../hooks/use-reducer'

import MarketoForm from './marketo-form'


const WebinarForm = ({ formId }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [postcode, setPostcode] = useState('')
  const [position, setPosition] = useState('')
  const [terms, setTerms] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch({
      type: 'isSubmitting'
    })
    
    window.MktoForms2.getForm(formId)
      .vals({ 
        FirstName: firstName,
        LastName: lastName, 
        Company: company, 
        Email: email, 
        Phone: phone, 
        Postcode__c: postcode, 
        companyPosition: position,
        termsConditions: terms
      })
      .onSuccess(() => {
        console.log('firedSuccess')
        dispatch({
          type: 'success'
        })
        setFirstName('')
        setLastName('')
        setCompany('')
        setEmail('')
        setPhone('')
        setPostcode('')
        setPosition('')
        setTerms(false)
        return false
      })
      .submit()
  }

  return (
    <Fragment>
      <div className="bg-grey p-8 sm:px-16 pt-16">
        <h3 className="m-0 font-bold text-brand-deep-purple">Register to this webinar</h3>
        <small className="block mb-8 text-brand-gray">* Required fields</small>
        <form onSubmit={handleSubmit} className="form gap-8">
          <label className="form--label">
            <span className="form--label-text">
              Frist Name<span className="form--label-required">*</span>
            </span>
            <input
              className="form--input"
              type="text"
              required
              placeholder="John"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
          </label>
          <label className="form--label">
            <span className="form--label-text">
              Last Name<span className="form--label-required">*</span>
            </span>
            <input
              className="form--input"
              type="text"
              required
              placeholder="Doe"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
          </label>
          <label className="form--label">
            <span className="form--label-text">
              Email<span className="form--label-required">*</span>
            </span>
            <input
              className="form--input"
              type="email"
              required
              placeholder="you@example.xyz"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </label>
          <label className="form--label">
            <span className="form--label-text">
              Phone<span className="form--label-required">*</span>
            </span>
            <input
              className="form--input"
              type="tel"
              required
              placeholder="0404 040 404"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value)
              }}
            />
          </label>
          <label className="form--label">
            <span className="form--label-text">
              Company<span className="form--label-required">*</span>
            </span>
            <input
              className="form--input"
              type="text"
              required
              placeholder="XYZ Company"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value)
              }}
            />
          </label>
          <label className="form--label">
            <span className="form--label-text">
              Company Position<span className="form--label-required">*</span>
            </span>
            <select
              className="form--input"
              required
              placeholder="Company Position"
              value={position}
              onChange={(e) => {
                setPosition(e.target.value)
              }}
            >
                <option>Please Select*</option>
                <option value="Employer">Employer</option>
                <option value="Manager">Manager</option>
            </select>
          </label>
          <label className="form--label">
            <span className="form--label-text">
              Postcode<span className="form--label-required">*</span>
            </span>
            <input
              className="form--input"
              type="text"
              required
              placeholder="0000"
              value={postcode}
              onChange={(e) => {
                setPostcode(e.target.value)
              }}
            />
          </label>
          <label className="flex items-start">
            <input
              className="form--checkbox"
              type="checkbox"
              required
              value={terms}
              onChange={(e) => {
                setTerms(e.target.checked)
              }}
            />
            <span className="form--terms-text">By submitting contact details, I acknowledge that I have read and agree to the Terms of Use and the Privacy Policy and I consent to you contacting me about Employsure services. I consent to you using sensitive personal information that you may collect for the purposes of providing your products and services.</span>
          </label>
          <span className="form--announce-container">
            {state.isSubmitting ? <span className="form--announce-submitting">Submitting...</span> : null}
            {state.success ? (
              <span className="form--announce-success">Thank you for registering to this Event. You will recieve a confirmation email soon.</span>
            ) : null}
          </span>
          <button type="submit" className="trainsition-all form--button-submit" disabled={state.isSubmitting}>
            {state.isSubmitting ? 'Please wait...' : 'Submit'}
          </button>
        </form>
        
        <MarketoForm debug={false} formId={formId} />
      </div>
    </Fragment>
  )
}

WebinarForm.propTypes = {
  /** The Marketo Form Id */
  formId: PropTypes.string.isRequired
}

export default WebinarForm
