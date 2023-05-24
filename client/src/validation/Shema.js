import * as yup from "yup";

export const SchemaValidation = yup.object().shape({
  title: yup.string().required("name is required"),
  paragraph: yup.string().required("paragraph is required"),
  contry: yup.string().required("country is required"),
 
  imageURL: yup
    .string()
    .required("image is required"),
});