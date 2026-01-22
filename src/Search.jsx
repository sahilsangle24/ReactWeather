import { useState } from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

export default function Search({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "608cdbbbd1243360e65f3c59a7139d46";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();

    // Handle invalid city
    if (jsonResponse.cod !== 200) {
      throw new Error("City not found");
    }

    return {
      city: jsonResponse.name,
      temp: jsonResponse.main.temp,
      tempmin: jsonResponse.main.temp_min,
      tempmax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelslike: jsonResponse.main.feels_like,
      weatherType: jsonResponse.weather[0].main,
    };
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setError(false);
      setCity("");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />

        <hr />

        <Button
          variant="contained"
          type="submit"
          size="small"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>

      {error && (
        <p style={{ color: "red" }}>
          NO SUCH PLACE EXIST !
        </p>
      )}
    </div>
  );
}
