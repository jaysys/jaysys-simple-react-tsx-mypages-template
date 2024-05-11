import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ChartPage: React.FC = () => {
  // Function to generate random data
  const generateRandomData = (numPoints: number) => {
    const data = [];
    for (let i = 0; i < numPoints; i++) {
      data.push({
        name: `${i + 1}`,
        value: Math.floor(Math.random() * 1000), // Random value between 0 and 100
      });
    }
    return data;
  };

  // Generate random data
  const data = generateRandomData(40); // N points for each day of the week
  // console.log(data);
  return (
    <div>
      <center>
        <h2>LineChart Page#4</h2>
        <div style={{ height: "400px", width: "700px" }}>
          <LineChart width={700} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="rgb(75, 192, 192)" />
          </LineChart>
        </div>
      </center>
    </div>
  );
};

export default ChartPage;
