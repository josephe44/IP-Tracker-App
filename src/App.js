import { useState } from "react";
import { ReactComponent as Arrow } from "./assets/images/icon-arrow.svg";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Spinner from "./components/Spinner";

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState("Brrooklyn, NY 10001");
  const [country, setCountry] = useState("United States");
  const [timezone, setTimezone] = useState("UTC-05:00");
  const [isp, setIsp] = useState("SpaceX Starlink");
  const [lat, setLat] = useState("51.505");
  const [lng, setLng] = useState("-0.09");
  const [loading, setLoading] = useState(false);

  const getIpAddress = async (e) => {
    e.preventDefault();

    setLoading(true);
    let url = "https://geo.ipify.org/api/v1";
    let ip = ipAddress;
    let api_key = process.env.REACT_APP_API_KEY;

    let response = await fetch(`${url}?apiKey=${api_key}&ipAddress=${ip}`);
    let data = await response.json();
    console.log(data);

    setLocation(data.location.city);
    setCountry(data.location.country);
    setTimezone(data.location.timezone);
    setIsp(data.isp);
    setLat(data.location.lat);
    setLng(data.location.lng);
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      {/* HEADER */}
      <div className="header-img">
        <h1>IP Address Tracker</h1>
        <form onSubmit={getIpAddress}>
          <div className="form-group">
            <input
              type="text"
              name={ipAddress}
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
              placeholder="Search for any IP address or domain"
            />
          </div>
          <button className="btn" type="sumit">
            <Arrow />
          </button>
        </form>
      </div>
      {/* CARD */}
      <div className="card-section">
        <div className="card">
          <div className="card-item">
            <p>IP ADDRESS</p>
            <h2>{ipAddress ? ipAddress : "192.212.174.101"}</h2>
          </div>
          <div className="card-item">
            <p>LOCATION</p>
            <h2>
              {country} {location}
            </h2>
          </div>
          <div className="card-item">
            <p>TIMEZONE</p>
            <h2>UTC {timezone}</h2>
          </div>
          <div className="card-item">
            <p>ISP</p>
            <h2>{isp}</h2>
          </div>
        </div>
      </div>
      {/* MAP */}
      <div className="leafletContainer">
        <MapContainer
          style={{ height: "100%", width: "100%" }}
          center={[lat, lng]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lng]}>
            <Popup>{location}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
