import React from "react";
import dayjs from "dayjs";

const DateComponent = () => {
  const today = dayjs().format("D MMM YYYY");

  return (
    <div class="bg-gray-100 mr-2 ml-2">
      <p class="font-medium">{today}</p>
    </div>
  );
};

export default DateComponent;
