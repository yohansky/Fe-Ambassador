import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from "@mui/material";

const Links = (props) => {
  const [links, setLinks] = useState([]);
  //pagination
  const [page, setPage] = useState(0);
  const perPage = 10;

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/admin/users/${props.id}/Links`);

      setLinks(data);
      console.log(props);
    })();
  }, []);

  return (
    <Layout>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell scope="col">#</TableCell>
            <TableCell scope="col">Code</TableCell>
            <TableCell scope="col">Count</TableCell>
            <TableCell scope="col">Revenue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {links.slice(page * perPage, (page + 1) * perPage).map((link) => {
            return (
              <TableRow key={link.id}>
                <TableCell>{link.id}</TableCell>
                <TableCell>{link.code}</TableCell>
                <TableCell>{link.orders.length}</TableCell>
                <TableCell>{link.orders.reduce((s, o) => s + o.total, 0)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TablePagination count={links.length} page={page} onPageChange={(e, newPage) => setPage(newPage)} rowsPerPage={perPage} rowsPerPageOptions={[]} />
        </TableFooter>
      </Table>
    </Layout>
  );
};

export default Links;
