import "./App.css";
import Header from "./component/Header";
import Weather from "./component/Weather";
import Forms from "./component/Forms";
import { useState } from "react";

// dt * 1000 untuk convertnya

function App() {
  const [Location, setLocation] = useState("");
  const [Info, setInfo] = useState("");

  const getInfo = async (input) => {
    // Fetch API from openweather API
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d44552c54bc9e85447b8b979b11a77d9`;
    let data = await fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((responseJson) => {
        return responseJson;
      })
      .catch(() => {
        setLocation("Location not found");
        return "Location not found";
      });
    console.log(data);

    // Set Location Format : City, ID of Country
    if (data !== "") {
      let city = data.name;
      let country = data.sys.country;

      let thisLocation = city + ", " + country;
      console.log(thisLocation);

      setLocation(thisLocation);
    }

    setInfo(data);
  };

  return (
    <div className="App">
      <Header></Header>
      <Forms getInfo={getInfo}></Forms>
      <Weather Location={Location} Info={Info}></Weather>
    </div>
  );
}

export default App;
