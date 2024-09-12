import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Accordion, AccordionDetails, AccordionSummary, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/admin/orders`);

      setOrders(data);
      console.log(data);
    })();
  }, []);

  return (
    <Layout>
      {orders.map((order) => {
        return (
          <Accordion key={order.id}>
            <AccordionSummary>
              {order.name} ${order.total}
            </AccordionSummary>
            <AccordionDetails>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Product Title</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.order_items.map((item) => {
                    return (
                      <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.product_title}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Layout>
  );
};

export default Orders;
