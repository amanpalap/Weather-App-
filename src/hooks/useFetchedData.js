import axios from "axios";
import { useEffect, useState } from "react";

function useFetchedData(city) {
  const [data, setData] = useState(null);
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      if (city!==undefined) {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=94c88ebcc8091f7b4eee6e3d5cfa1904`
          );
          const temp = await response.data;
          setData(temp);
          setFetchError(null)
          console.log("data fetched successfully");
        } catch (error) {
          console.log("Failed to fetch Data")
          setFetchError(city);
        }
      }
      else{
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition( async(position) => {
            try {
              const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=94c88ebcc8091f7b4eee6e3d5cfa1904`
              );
              const hold = res.data;
              setData(hold)
              console.log("data fetched successfully");
            } catch (error) {
          console.log("Failed to fetch Data");
              
            }

          })
        }
      }
    };
    fetchData();
  }, [city]);

  return {data, fetchError};
}

export default useFetchedData;
