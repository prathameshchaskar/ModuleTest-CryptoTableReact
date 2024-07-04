import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import Table from "../Table/Table";
import SortButtons from "../SortButtons/SortButtons";
import "./CryptoTable.css";

const CryptoTable = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "market_cap",
    direction: "ascending",
  });

  // Fetch data using async/await
  const fetchDataAsync = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchDataAsync();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const filteredData = sortedData.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="crypto-table">
      <h1 className="header">Crypto Table</h1>
      <div className="search-sort-container">
        <Search searchTerm={searchTerm} handleSearch={handleSearch} />
        <SortButtons handleSort={handleSort} />
      </div>
      <Table data={filteredData} />
    </div>
  );
};

export default CryptoTable;
