import { data } from 'autoprefixer'
import React from 'react'

const TimeAndLocation = ({ newdata }) => {

  const dt = newdata.dt;
  let day = new Date(dt * 1000);

  return (
    <div>

      <div className=" flex items-center justify-center my-6 cursor-default">
        <p className="text-white text-2xl font-semibold  py-2">{day.toDateString()}</p>
      </div>

      <div className="flex items-center justify-center my-3 cursor-default">
        <p className="text-white text-3xl font-medium">{newdata.name}, {newdata.sys.country}</p>
      </div>
    </div>
  )
}

export default TimeAndLocation
