# 228. Using Axios to Fetch Coordinates for an Entered Address 🌐

Gagamit tayo ng `axios` para mag-send ng HTTP request sa geocoding endpoint.

```bash
npm install axios
```

```ts
import axios from 'axios';

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: 'OK' | 'ZERO_RESULTS';
};

axios
  .get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`)
  .then((response) => {
    if (response.data.status !== 'OK') {
      throw new Error('Could not fetch location.');
    }
    const coordinates = response.data.results[0].geometry.location;
    console.log(coordinates);
  })
  .catch((err: Error) => {
    alert(err.message);
  });
```

## Why generic type is helpful

Para may autocomplete at type safety sa `response.data` structure.

## Para sa non-developer 👇

Parang nagtanong ka sa online directory, tapos binalik nito ang exact latitude/longitude.
