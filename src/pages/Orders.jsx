import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
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
            <AccordionDetails>Details</AccordionDetails>
          </Accordion>
        );
      })}
    </Layout>
  );
};

export default Orders;
