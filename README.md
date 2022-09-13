# IP-Tracker-App

## create a .env.local file in your root directory and add your api key from your IP Tracker site
#### Remember to name it like this .env.local or .env and follow this steps if you don't know how to create one

### write this inside your .env.local or .env

1. REACT_APP_API_KEY = 'your_api_key'
2. Then bring it into your app like this

```
process.env.REACT_APP_API_KEY
```
3. where ever you want to use it. you will see where i used it inside the APP.js
### The Link to the IP tracker site: https://geo.ipify.org/
![Screenshot (12)](https://user-images.githubusercontent.com/58944221/189890695-c3e49853-2a63-4381-a11c-bc6245727fdf.jpg)

### For the Map - use react-leaflet  https://leafletjs.com/
#### Add this CDN to your public folder inside the index.html in your react project
```
<!-- leaflet CSS CDN -->
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
      integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
      crossorigin=""
    />
```

### Remember
```
npm install
```
```
npm start
```
