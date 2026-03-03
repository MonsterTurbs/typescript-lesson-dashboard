# 226. Getting User Input ⌨️

Kunin natin ang value ng address kapag sinubmit ang form.

```ts
const form = document.querySelector('form')!;

form.addEventListener('submit', searchAddressHandler);

function searchAddressHandler(event: Event) {
  event.preventDefault();

  const addressInput = document.getElementById('address') as HTMLInputElement;
  const enteredAddress = addressInput.value;
  console.log(enteredAddress);
}
```

## Key points

- `preventDefault()` para hindi mag-reload ang page
- type cast to `HTMLInputElement` para ma-access ang `.value`

## Para sa non-developer 👇

Parang receptionist na kinukuha muna ang eksaktong address bago maghanap ng location.
