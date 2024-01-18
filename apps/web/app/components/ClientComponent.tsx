"use client";

import { useEffect, useState } from "react";

const ClientComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("http://localhost:4001/api/data");
        const response = await fetch(
          "https://recruit-tree-server-production.up.railway.app/"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from NestJS API Endpoint</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default ClientComponent;
