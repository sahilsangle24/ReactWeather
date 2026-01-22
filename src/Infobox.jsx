import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/Sunny";

import "./Infobox.css";

export default function Infobox({ info }) {
  const Init_Image =
    "https://images.unsplash.com/photo-1632298683700-43ce0ebac870?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVzdHklMjBjbG91ZHN8ZW58MHx8MHx8fDA%3D";

  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1687879794744-99e2898cab0d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHJhaW55fGVufDB8fDB8fHww";
  const HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
  const RAINY_URL =
    "https://images.unsplash.com/photo-1640538212466-fd7e9ac47f8b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHJhaW55fGVufDB8fDB8fHww";

  return (
    <div className="Infobox">
      <h2>INFORMATION BOX </h2>
      <div className="cardcontainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAINY_URL
                : info.temp > 27
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} &nbsp;
              {info.humidity > 80 ? (
                <hunderstormIcon />
              ) : info.temp > 27 ? (
                <SunnyIcon/>
              ) : (
                <AcUnitIcon/>
              )}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Temperature: {info.temp}°C <br />
              (Min: {info.tempmin}°C, Max: {info.tempmax}°C)
              <br />
              Feels Like: {info.feelslike}°C
              <br />
              Humidity: {info.humidity}%
              <br />
              The weather can be described as <b>{info.weatherType} </b> and
              feels like
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
