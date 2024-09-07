import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const perPage = 10;

  useEffect(() => {
    (async () => {
      const { data } = await axios("/admin/products");

      setProducts(data);
    })();
  }, []);

  return (
    <Layout>
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
            return <TableRow></TableRow>;
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
