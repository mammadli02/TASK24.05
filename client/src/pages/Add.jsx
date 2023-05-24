import React from "react";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import { SchemaValidation } from "../validation/Shema"
import { Post } from "../api/request";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const handleSubmit = async(values, actions) => {
    await Post(values);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${values.title} posted successfully!`,
      showConfirmButton: false,
      timer: 1500
    })
    actions.resetForm();
    navigate('/home');
  };
  const formik = useFormik({
    initialValues: {
      title:"",
      contry:"",
      paragraph:"",
      imageUrl: "",
    },
    validationSchema: SchemaValidation,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <Helmet>
        <title>Add </title>
      </Helmet>
      <form onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          placeholder="enter title"
          type="text"
          name="title"
        />
        {formik.errors.title && formik.touched.title && (
          <span>{formik.errors.title}</span>
        )}
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.contry}
          placeholder="enter contry"
          type="text"
          name="contry"
        />
        {formik.errors.contry && formik.touched.contry && (
          <span>{formik.errors.contry}</span>
        )}
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.paragraph}
          placeholder="enter paragraph"
          type="text"
          name="paragraph"
        />
        {formik.errors.paragraph && formik.touched.paragraph && (
          <span>{formik.errors.paragraph}</span>
        )}
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imageUrl}
          placeholder="enter image"
          type="url"
          name="imageUrl"
        />
        {formik.errors.imageUrl && formik.touched.imageUrl && (
          <span>{formik.errors.imageUrl}</span>
        )}
        <button
          disabled={Object.keys(formik.errors).length !== 0 ? true : false}
          type="submit"
        >
          Add 
        </button>
      </form>
    </>
  );
};

export default Add;

