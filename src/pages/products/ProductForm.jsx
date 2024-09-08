import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";

const ProductForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [redirect, setRedirect] = useState(false);
  //   console.log(id);

  useEffect(() => {
    if (id) {
      (async () => {
        const { data } = await axios.get(`/admin/product/${id}`);

        setTitle(data.title);
        setDesc(data.description);
        setImage(data.image);
        setPrice(data.price);
      })();
    }
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      image,
      price: parseFloat(price),
    };

    if (id) {
      await axios.put(`/admin/product/${id}`, data);
    } else {
      await axios.post("/admin/products", data);
    }

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={"/products"} />;
  }
  return (
    <Layout>
      <form onSubmit={submit}>
        <div className="mb-3 mt-3">
          <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <TextField label="Description" value={description} rows={4} multiline onChange={(e) => setDesc(e.target.value)} />
        </div>
        <div className="mb-3">
          <TextField label="Image" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <div className="mb-3">
          <TextField label="Price" value={price} type="number" inputMode="decimal" onChange={(e) => setPrice(parseFloat(e.target.value))} />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Layout>
  );
};

export default ProductForm;
