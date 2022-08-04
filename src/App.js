import React from "react";
import axios from "axios";
import { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";

let num;

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  let threshold = 0;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_KEY}`;
  const fetchWeather = (e) => {
    e.preventDefault();
    axios.get(url).then((res) => {
      setWeather(res.data);
      let threshold = ((res.data.main.temp - 32) * 5) / 9;
      formatBackground(threshold);
      console.log(res.data);
    })
      .catch((err) => {
        console.log(err);
      });
    setCity("");
  };

  const handleClick = (e) => {
    e.preventDefault();
    fetchWeather(e);
  };

  const formatBackground = (n) => {
    if (n) {
      num = n; // In div we are calling with 0, so num will not get updated. It gets updated only after we pass threshold value.
    }

    if (num > 28) {
      return "from-yellow-700 to-orange-700";
    } else {
      return "from-cyan-700 to-blue-700";
    }
  };

  return (
    <div className="App">
      <div
        className={`mx-auto max-w-screen-md mt-8 rounded-md py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground(0)}`}>
        <div className="flex flex-row justify-center my-6">
          <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
            <form className="w-[100%]" onSubmit={(e) => fetchWeather(e)}>
              <input
                type="text"
                className="text-xl font-light rounded-2xl p-2 w-full shadow-xl focus: outline-none capitalize placeholder:lowercase"
                placeholder="Search for city"
                onChange={(e) => setCity(e.target.value)}
              />
            </form>
            <UilSearch
              size={25}
              className=" text-white cursor-pointer transition ease-out hover:scale-125"
              onClick={(e) => handleClick(e)}
            />
          </div>
        </div>
        {weather.main && <TimeAndLocation newdata={weather} />}
        {weather.main && <TemperatureAndDetails newdata={weather} />}
      </div>
    </div>
  );
}

export default App;
