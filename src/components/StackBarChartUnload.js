// src/components/BarChart.js
import React from "react";
import ReactApexChart from "react-apexcharts";
import dayjs from "dayjs";

const BarChartUnloading = () => {
  const dates = Array.from({ length: 7 }, (_, i) =>
    dayjs()
      .subtract(6 - i, "day")
      .format("MM/DD/YYYY")
  );

  const options = {
    series: [
      {
        name: "อิฐดี",
        data: [44, 26, 35, 41, 52, 43, 30],
      },
      {
        name: "อิฐเสีย",
        data: [13, 14, 10, 8, 13, 21, 12],
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
    colors: ["#29CBA9", "#FF2020"],
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
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
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
      text: "Quantity - Unloading",
      align: "center",
      offsetX: 0,
    },
    xaxis: {
      type: "datetime",
      categories: dates,
    },
    yaxis: {
      title: {
        text: "Quantity (Ton)",
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

export default BarChartUnloading;
