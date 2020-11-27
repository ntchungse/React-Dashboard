import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Order.css";
function Order() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      await axios
        .get("http://3.25.210.151/api/admin/AdminOrder", {
          params: {
            limit: 10,
          },
        })
        .then((res) => setOrder(res.data.orders));
    };
    getOrder();
  }, []);
  return (
    <div className="order">
      <h2>Orders</h2>
      <table className="order__table">
        <thead>
          <th>ID</th>
          <th>Biling name</th>
          <th>Total</th>
          <th>Date</th>
          <th>Status</th>
          <th>Action</th>
        </thead>
        <tbody>
          {order.map((order, index) => {
            let { id, name, price, createdDate, status } = order;
            createdDate = createdDate.split("T").shift();
            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{createdDate}</td>
                <td>{status}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Order;
