# 227. Setting Up a Google API Key 🔑

Para mag-geocode (address -> coordinates), kailangan ng Google API key.

## Quick flow

- create/select Google Cloud project
- enable needed APIs (Geocoding + Maps JS)
- setup billing (may free tier)
- copy API key

## Example usage in code

```ts
const GOOGLE_API_KEY = 'YOUR_KEY_HERE';
```

## Important security reminder

- huwag i-hardcode ang real key sa public repo
- i-restrict ang key sa allowed domains/APIs

## Para sa non-developer 👇

Parang access pass ang API key para payagan kang gumamit ng map services.
