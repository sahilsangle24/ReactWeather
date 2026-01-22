import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import CardActionArea from '@mui/material/CardActionArea';
import './cards.css';

export default function Cards() {
  return (
    <div className="cards-container">
      
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
          />
          
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
          />
          
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://plus.unsplash.com/premium_photo-1675827055668-2dae1b8ac181?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
          />
          
        </CardActionArea>
      </Card>

       <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
          />
          
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
          />
          
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1530908295418-a12e326966ba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNreXxlbnwwfHwwfHx8MA%3D%3D"
          />
          
        </CardActionArea>
      </Card>

    </div>
  );
}
