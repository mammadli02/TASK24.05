import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Put, GETBYID } from "../api/request";
import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";

const EditPages = () => {
  const[imigrants,setImigrants] = useState();
  console.log('imigrants context: ',imigrants);
  const { id } = useParams();
  const navigate = useNavigate();
  const [imigrant, setImigrant] = useState({});
  const[loading,setLoading] = useState(true);
  useEffect(() => {
    GETBYID(id).then((res) => {
      setImigrant(res);
      formik.values.title = res.title;
      formik.values.contry = res.contry;
      formik.values.paragraph=res.paragraph;
      formik.values.imageUrl = res.imageUrl;
      setLoading(false);
    });
  }, [id]);
  const handleEdit = async(values, actions) => {
    // artist.find((x)=>x._id===id)
    setImigrants(values);
    await Put(id,values);
    navigate('/home');
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      title: imigrant.title,
      contry: imigrant.contry,
      paragraph: imigrant.paragraph,
      imageUrl: imigrant.imageUrl,
    },
    onSubmit: handleEdit,
  });
  return (
    <>
      <Typography
        style={{ textAlign: "center", marginTop: "40px", fontSize: "30px" }}
      >
        {imigrant.name} Edit
      </Typography>
      { loading ? <div>loading...</div> : <form style={{width:'60%',margin:'0 auto'}} onSubmit={formik.handleSubmit}>
        <div style={{display:'flex',justifyContent:'center'}}>
        <TextField
          type="text"
          placeholder=" title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
         <TextField
          type="text"
          placeholder="people contry"
          name="contry"
          value={formik.values.contry}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          type="text"
          placeholder="people paragraph"
          name="paragraph"
          value={formik.values.paragraph}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
         <TextField
          type="text"
          placeholder="people image"
          name="imageUrl"
          value={formik.values.imageUrl}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        </div>
        <Button style={{margin:'0 auto',display:'block',marginTop:'20px'}} variant="contained" color="primary" type="submit">Edit</Button>
      </form> }
    </>
  );
};

export default EditPages;