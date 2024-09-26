import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Button, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow, ToggleButtonGroup } from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const perPage = 10;

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/products");

      setProducts(data);
    })();
  }, []);

  const del = async (id) => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`/product/${id}`);

      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <Layout>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Button href={"/products/create"} variant="contained" color="primary">
          Add
        </Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell scope="col">#</TableCell>
            <TableCell scope="col">Image</TableCell>
            <TableCell scope="col">Title</TableCell>
            <TableCell scope="col">Description</TableCell>
            <TableCell scope="col">Price</TableCell>
            <TableCell scope="col">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.slice(page * perPage, (page + 1) * perPage).map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>
                  <img src={product.image} width={50} />{" "}
                </TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <ToggleButtonGroup>
                    <Button variant="contained" color="warning" href={`/products/${product.id}/edit`}>
                      Edit
                    </Button>
                    <Button variant="contained" color="error" onClick={() => del(product.id)}>
                      Delete
                    </Button>
                  </ToggleButtonGroup>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TablePagination count={products.length} page={page} onPageChange={(e, newPage) => setPage(newPage)} rowsPerPage={perPage} rowsPerPageOptions={[]} />
        </TableFooter>
      </Table>
    </Layout>
  );
};

export default Products;
