import React from 'react';
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset
} from "@iconscout/react-unicons";

const TemperatureAndDetails = ({ newdata }) => {

    let sunRiseTime = newdata.sys.sunrise;
    let sunSetTime = newdata.sys.sunset;

    let riseDateObj = new Date(sunRiseTime * 1000);
    let setDateObj = new Date(sunSetTime * 1000);

    let riseHours = riseDateObj.getHours();
    let riseMinutes = riseDateObj.getMinutes();

    let setHours = setDateObj.getHours();
    let setMinutes = setDateObj.getMinutes();

    return (
        <div>

            <div className=" flex items-center justify-center py-6 text-xl text-cyan-300 cursor-default">
                {newdata.weather[0].main}
            </div>

            <div className="flex flex-row items-center justify-between text-white py-3 cursor-default">
                <img src={`http://openweathermap.org/img/wn/${newdata.weather[0].icon}@2x.png`} alt="loading" />
                <p className="text-5xl">{((newdata.main.temp - 32) * 5 / 9).toFixed(0)}°C</p>

                <div className="flex flex-col space-y-2">
                    <div className=" flex font-light text-sm items-center justify-center cursor-default">
                        <UilTemperature size={18} className="mr-1" />Feels like :
                        <span className="font-medium ml-1">{((newdata.main.feels_like - 32) * 5 / 9).toFixed(0)}°C</span>
                    </div>
                    <div className=" flex font-light text-sm items-center justify-center cursor-default">
                        <UilTear size={18} className="mr-1" /> Humidity:
                        <span className="font-medium ml-1"> {newdata.main.humidity}%</span>
                    </div>
                    <div className=" flex font-light text-sm items-center justify-center cursor-default">
                        <UilWind size={18} className="mr-1" /> Wind
                        <span className="font-medium ml-1">{newdata.wind.speed.toFixed()} km/h</span>
                    </div>
                </div>

            </div>

            <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3 cursor-default'>
                <UilSun />
                <p className='font-light'>Rise:
                    <span className='font-medium ml-1'>{riseHours}:{riseMinutes}</span>
                </p>
                <p className="font-light">|</p>

                <UilSunset />
                <p className='font-light'>Set:
                    <span className='font-medium ml-1'>{setHours}:{setMinutes}</span>
                </p>
                <p className="font-light">|</p>

                <UilSun />
                <p className='font-light'> High:
                    <span className='font-medium ml-1'> {((newdata.main.temp_max - 32) * 5 / 9).toFixed(0)}°C</span>
                </p>
                <p className="font-light">|</p>
                <UilSun />
                <p className='font-light'> Low :
                    <span className='font-medium ml-1'>{((newdata.main.temp_min - 32) * 5 / 9).toFixed(0)}°C</span>
                </p>
            </div>

        </div>
    )
}

export default TemperatureAndDetails
