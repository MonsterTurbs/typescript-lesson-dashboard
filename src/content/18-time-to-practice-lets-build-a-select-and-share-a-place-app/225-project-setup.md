# 225. Project Setup 🧱

Start tayo sa simple UI: map container + form input.

## Basic HTML

```html
<div id="map">
  <p>Please enter an address.</p>
</div>

<form>
  <input id="address" type="text" />
  <button type="submit">SEARCH ADDRESS</button>
</form>
```

## Basic CSS idea

```css
#map {
  width: 90%;
  height: 20rem;
  margin: 2rem auto;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## UX note

Habang wala pang result, visible ang placeholder message sa map box.

## Para sa non-developer 👇

Parang naghahanda muna ng stage bago magsimula ang show:
container, input, at action button.
