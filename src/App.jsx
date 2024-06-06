import { useState } from 'react';
import useFetchedData from './hooks/useFetchedData.js';
import Card from './component/Cards/Card.jsx';
import BACK from "./Images/BACK.jpeg"
import Form from './component/Form.jsx';
import Clock from './component/Clock.jsx';
import MoreInfo from './component/Cards/MoreInfo.jsx';

function App() {
  const [city, setCity] = useState("")
  const [formData, setFormData] = useState({});
  const {data, fetchError} = useFetchedData(formData.city)

  const handleChange = (event) => {
    setCity(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      city: city
    })
    console.log('Form data submitted:', formData);
    console.log(data)
  };

  return (

    <div className='flex flex-wrap items-start justify-center w-full h-screen bg-fixed md:bg-cover md:overflow-hidden md:items-center -z-1'
      style={{ backgroundImage: `url(${BACK})` }}
    >
      <div className='flex items-center justify-center w-full text-white shadow-lg md:border-2 md:border-black md:w-2/3 felx-wrap backdrop-blur-xs rounded-xl'>
        <div className='flex flex-wrap items-center justify-center w-full p-2 space-y-6 shadow-xl md:p-6 rounded-xl'>
          <div className='flex flex-wrap items-center justify-center w-full px-4 py-3 shadow-xl md:px-8 rounded-xl backdrop-blur-3xl backfrop-blur-lg gap-y-2'>
            <div className='flex flex-wrap items-center justify-center w-full md:w-1/2'>
              <Form
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                value={city}
              />
            </div>
            <div className='w-full md:w-1/2'>
              <Clock />
            </div>
          </div>
          {fetchError && (<h1 className='px-2 font-bold bg-black text-rose-600 rounded-3xl '>"{fetchError}" is not a valid city Name</h1>)}
          {data && (
            <Card
              src={`https://openweathermap.org/img/wn/${data && data.weather && data.weather[0].icon}@2x.png`}
              description={data && data.weather && data.weather[0].description}
              temp={data && data.main && data.main.temp}
              feelLike={data && data.main && data.main.feels_like}
              place={data && data.name}
            />
          )
          }
          {data && (
            <MoreInfo
              pressure={data && data.name && data.main.pressure}
              visibility={data && data.visibility}
              wind={data && data.wind && data.wind.speed}
              clouds={data && data.clouds && data.clouds.all}
              sunRise={data && data.sys && data.sys.sunrise}
              sunSet={data && data.sys && data.sys.sunset}
              humidity={data && data.name && data.main.humidity}
            />
          )}
        </div>
      </div>

    </div>

  )
}

export default App