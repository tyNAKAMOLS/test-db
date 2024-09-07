import React from "react";
import Chart from "react-apexcharts";
import dayjs from "dayjs";

const StackBarChartKiln = () => {
  const dates = Array.from({ length: 7 }, (_, i) =>
    dayjs()
      .subtract(6 - i, "day")
      .format("MM/DD/YYYY")
  );
  const options = {
    series: [
      {
        name: "Production",
        type: "column",
        data: [44, 55, 41, 67, 22, 43, 30],
      },
      {
        name: "Temp",
        type: "line",
        data: [1000, 1200, 1500, 1600, 1400, 1600, 1320],
      },
    ],
    chart: {
      height: 250,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
        tools: {
          download: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1, 4, 4],
    },
    title: {
      text: "Production - Temperature",
      align: "center",
      offsetX: 0,
    },
    xaxis: {
      type: "datetime",
      categories: dates,
    },
    yaxis: [
      {
        seriesName: "Production",
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#008FFB",
        },
        labels: {
          style: {
            colors: "#008FFB",
          },
        },
        title: {
          text: "Production ( Ton )",
          style: {
            color: "#008FFB",
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      {
        seriesName: "Temperature",
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#FEB019",
        },
        labels: {
          style: {
            colors: "#FEB019",
          },
        },
        title: {
          text: "Temperature (°C )",
          style: {
            color: "#FEB019",
          },
        },
      },
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60,
      },
    },
    legend: {
      show: false, 
    },
    grid: {
      show: false, 
    },
    markers: {
      show: false, 
    },
    colors: ["#008FFB", "#FEB019"],
  };

  return (
    <div id="chart">
      <Chart
        options={options}
        series={options.series}
        type="line"
        height={250}
      />
    </div>
  );
};

export default StackBarChartKiln;
