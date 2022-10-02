import React from "react";

export default function HistoryOrderTable(props) {
  return (
    <div className="history-order-table">
      <table className="table">
        <tr className="table-header">
          <th>Id</th>
          <th>
            Image
          </th>
          <th>name</th>
          <th>price</th>
          <th>quantity</th>
          <th>total</th>
        </tr>
        {props.orderDetail.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index}</td>
              <td>
                <img src={item.image} alt="img" />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity} $</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
