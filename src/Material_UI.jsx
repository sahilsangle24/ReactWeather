import "./App.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import AlarmIcon from '@mui/icons-material/Alarm';
import IconButton from '@mui/material/IconButton';


function App() {
  let handleClick = () => {
    alert("button was clicked ,please subscribe");
    console.log("button clicked");
  };

  return (
    <>
      <h2>Material UI Demo</h2>
      <Button variant="contained" onClick={handleClick} size="large">
        Contained
      </Button>
      <br />
      <hr />
      <Button variant="contained" disabled color="error">
        Disabled
      </Button>
      <hr />
      <Button
        variant="outlined"
        href="https://sahil-sangale-portfolio.netlify.app/"
        color="error"
        size="small"
      >
        Link
      </Button>
      <hr />
      <Button variant="contained"  href="https://sahil-sangale-portfolio.netlify.app/" endIcon={<SendIcon />}>
        Send
      </Button>
      <hr />
        <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <hr />
        
       
    </>
  );
}

export default App;
