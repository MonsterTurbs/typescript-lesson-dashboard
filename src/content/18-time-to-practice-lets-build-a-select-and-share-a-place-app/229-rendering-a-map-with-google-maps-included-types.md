# 229. Rendering a Map with Google Maps (included Types!) 🗺️

Pag may coordinates na, i-render na natin sa map.

## Script sa HTML

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY" defer></script>
```

## Type support for Google Maps

```bash
npm install --save-dev @types/google.maps
```

## Render map + marker

```ts
const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
  center: coordinates,
  zoom: 16,
});

new google.maps.Marker({
  position: coordinates,
  map,
});
```

## Why this matters

- may compile-time checks na (iwas typo errors)
- mas reliable kaysa `declare var google: any`

## Para sa non-developer 👇

Parang pin mo sa digital map ang exact location na hinanap mo.
