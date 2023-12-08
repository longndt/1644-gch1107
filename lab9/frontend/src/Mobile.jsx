import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:3001";

const Mobile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(baseURL);
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <center>
        <div>
          <table className="striped">
            <thead>
              <tr>
                <th colSpan={5}>
                  <h3>MOBILE LIST</h3>
                </th>
              </tr>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              {data.map((mobile) => (
                <tr key={mobile.id}>
                  <td>{mobile.name}</td>
                  <td>{mobile.price}</td>
                  <td>{mobile.color}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
};

export default Mobile;
