// src/components/BarChart.js
import React from "react";
import ReactApexChart from "react-apexcharts";
import dayjs from "dayjs";
// import axios from "axios";

const BarChart = () => {
  const dates = Array.from({ length: 7 }, (_, i) =>
    dayjs()
      .subtract(6 - i, "day")
      .format("MM/DD/YYYY")
  );

  const options = {
    series: [
      {
        name: "BP 1",
        data: [44, 55, 41, 67, 22, 43, 30],
      },
      {
        name: "BP 2",
        data: [13, 23, 20, 8, 13, 27, 54],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 8,
        borderRadiusApplication: "end", // 'around', 'end'
        borderRadiusWhenStacked: "last", // 'all', 'last'
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    title: {
      text: "Production (BP1 - BP2)",
      align: "center",
      offsetX: 0,
    },
    xaxis: {
      type: "datetime",
      categories: dates,
    },
    yaxis: {
      title: {
        text: "Production (Ton)",
      },
      labels: {
        formatter: function (value) {
          return value + " Ton";
        },
      },
    },
    legend: {
      position: "bottom",
      offsetY: 5,
    },
    fill: {
      opacity: 1,
    },
  };

  //   axios
  //     .get("http://172.18.9.107/SISApps/api/v1/material/get_FISystem")
  //     .then(function (response) {
  //       console.log(response.data);
  //       console.log(response.status);
  //       console.log(response.statusText);
  //       console.log(response.headers);
  //       console.log(response.config);
  //     });

  return (
    <div>
      <ReactApexChart
        options={options}
        series={options.series}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default BarChart;
