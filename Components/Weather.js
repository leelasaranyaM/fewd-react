import React, { useEffect, useState } from 'react';

function Weather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const city = 'Hyderabad'; // ✅ Correct spelling
    const apiKey = 'e353085dab3b4f3a0e235c8b19e8689d';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading weather...</p>;
  }

  if (!data || data.cod !== 200) {
    return <p>Failed to load weather data.</p>;
  }

  return (
    <div style={{ border: '1px solid gray', padding: '20px', maxWidth: '300px' }}>
      <h2>Weather in {data.name}</h2>
      <p>Temperature: {data.main.temp} °C</p>
      <p>Condition: {data.weather[0].main}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
}

export default Weather;
