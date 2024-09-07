import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartData from "@hooks/useChartData";
import { generateDates } from "@utils/formatDate";

const StackBarChart = () => {
  const { series } = useChartData();
  const date = generateDates();

  const options = {
    series,
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
      text: "Production (BP1 - BP2)",
      align: "center",
      offsetX: 0,
    },
    xaxis: {
      type: "datetime",
      categories: date,
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

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default StackBarChart;
