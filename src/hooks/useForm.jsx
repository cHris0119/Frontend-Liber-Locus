import { useEffect, useMemo, useState } from 'react'

export const useForm = ({ initialForm = {}, formValidations = {} }) => {
  const [formState, setFormState] = useState(initialForm)
  const [formValidation, setFormValidation] = useState({})

  //! VALIDACIONES
  useEffect(() => {
    createValidators()
  }, [formState])

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false
    }

    return true
  }, [formValidation])

  const createValidators = () => {
    const formCheckedValues = {}

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField]

      formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage
    }

    setFormValidation(formCheckedValues)
  }

  //! VALIDACIONES

  // ? MANEJO DE FORMULARIO

  const handleInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleCheckboxChange = ({ target }) => {
    const { name, checked } = target
    setFormState({
      ...formState,
      [name]: checked
    })
  }

  const handleFileChange = ({ target }) => {
    const { name, files } = target
    const selectedFile = files[0]
    if (selectedFile) {
      const reader = new FileReader()
      reader.readAsDataURL(selectedFile)
      reader.onload = () => {
        const base64 = reader.result
        setFormState({
          ...formState,
          [name]: base64
        })
      }
    }

    console.log('file', selectedFile)
  }

  const handleResetForm = () => {
    setFormState(initialForm)
  }

  // ? MANEJO DE FORMULARIO

  return {
    ...formState,
    formState,
    handleInputChange,
    handleCheckboxChange,
    handleResetForm,
    handleFileChange,

    ...formValidation,
    isFormValid
  }
}
