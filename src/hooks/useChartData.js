import { useState, useEffect } from "react";
import axiosInstance from "@services/axiosInstance";

const useChartData = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("get/data/data");
      if (response) {
        setSeries(response.data);
      }
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { series, loading, error };
};

export default useChartData;
