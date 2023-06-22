import { useState, useEffect } from 'react'

const useMarketo = ({ formId, callback }) => {
  const [scriptAdded, setScriptAdded] = useState(false)
  const [formLoaded, setFormLoaded] = useState(false)

  useEffect(() => {
    if (scriptAdded) {
      if (!formLoaded) {
        MktoForms2.loadForm(
          `//${'mk.employsure.com.au'}`,
          '146-AHK-965',
          formId,
          callback
        )
        MktoForms2.whenRendered((form) => {
          const formElement = form.getFormElem()[0]
          const formElementId = form.getFormElem()[0].id.split('_')[1]

          /** Remove the style attribute and make for, and id attributes unique */
          Array.from(formElement.querySelectorAll('[style]'))
            .concat(formElement)
            .forEach((element) => {
              element.removeAttribute('style')
              if (element.hasAttribute('id') && element.tagName !== 'FORM') {
                element.setAttribute('id', `${element.getAttribute('id')}_${formElementId}`)
              }

              if (element.tagName === 'LABEL') {
                element.setAttribute('for', `${element.getAttribute('for')}_${formElementId}`)
              }
            })

          /** Remove <span /> from DOM */
          Array.from(formElement.querySelectorAll('.mktoInstruction')).forEach((element) => {
            element.remove()
          })

          /** Remove <style /> from DOM */
          Array.from(formElement.children).forEach((element) => {
            if (element.type && element.type === 'text/css') {
              element.remove()
            }
          })
        })
        setFormLoaded(true)
      }
    } else {
      if (window.MktoForms2) {
        setScriptAdded(true)
      } else {
        const script = document.createElement('script')
        script.defer = true
        script.onload = () => (window?.MktoForms2 ? setScriptAdded(true) : null)
        script.src = `//${'mk.employsure.com.au'}/js/forms2/js/forms2.min.js`
        document.head.appendChild(script)
      }
    }
  }, [scriptAdded])
}

export default useMarketo
