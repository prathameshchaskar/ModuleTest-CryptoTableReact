import React from "react";
import "./Table.css";

const Table = ({ data }) => {
  return (
    <table className="crypto-table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>ID</th>
          <th>Symbol</th>
          <th>Current Price</th>
          <th>Total Volume</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin) => (
          <tr key={coin.id}>
            <td>
              <img src={coin.image} alt={coin.name} width="20" height="20" />
            </td>
            <td>{coin.name}</td>
            <td>{coin.id}</td>
            <td>{coin.symbol}</td>
            <td>{coin.current_price}</td>
            <td>{coin.total_volume}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
