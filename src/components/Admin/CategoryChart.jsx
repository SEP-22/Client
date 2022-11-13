import React from "react";
import { Chart } from "react-google-charts";
// export const data = [
//   ["Category", "Total number of Foods"],
//   ["Vegetables", 11],
//   ["Fruits", 12],
//   ["Dairy Products", 8],
//   ["Proteins", 15],
//   ["Fat", 7],
// ];
export const options = {
  chartArea:{left:20,top:40,width:'100%',height:'75%'},
  fontName:"Roboto",
  colors:['#ba68c8','#ef5350', "#4fc3f7", "#9ccc65","#ffc107" ,],
};

const CategoryChart = ({data}) => {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"300px"}
    />
  );
};

export default CategoryChart;
