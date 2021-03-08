import * as yup from 'yup'

export const sendSugestionSchema = yup.object().shape({
  email: yup.string().email().required(),
  message: yup.string(),
})
