import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Menu from "../components/Menu";
import Layout from "../components/Layout";
import axios from "axios";
import { Button, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from "@mui/material";

const Users = () => {
  const [users, setUsers] = useState([]);
  //pagination
  const [page, setPage] = useState(0);
  const perPage = 10;

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/ambassador");

      setUsers(data);
    })();
  }, []);

  return (
    <Layout>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell scope="col">#</TableCell>
            <TableCell scope="col">Name</TableCell>
            <TableCell scope="col">Email</TableCell>
            <TableCell scope="col">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.slice(page * perPage, (page + 1) * perPage).map((user) => {
            return (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>
                  {user.first_name} {user.last_name}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" href={`users/${user.id}/Links`}>
                    View
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TablePagination count={users.length} page={page} onPageChange={(e, newPage) => setPage(newPage)} rowsPerPage={perPage} rowsPerPageOptions={[]} />
        </TableFooter>
      </Table>
    </Layout>
  );
};

export default Users;
