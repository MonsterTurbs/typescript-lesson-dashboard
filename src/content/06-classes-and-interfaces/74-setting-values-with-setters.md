# 74. Setting Values with Setters 🧪

## Section 6: Classes & Interfaces

Setters allow validation bago tanggapin at i-store ang value.

## Example

```ts
class User {
  private _firstName = "";
  private _lastName = "";

  set firstName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid first name.");
    }
    this._firstName = name;
  }

  set lastName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid last name.");
    }
    this._lastName = name;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}
```

Usage:

```ts
const user = new User();
user.firstName = "Max";
// user.lastName = ""; // throws error
```

## Para sa non-developer 👇

Parang form validation:
- bago i-save sa database
- chine-check muna kung valid

Setter = gatekeeper ng data quality. 🚦

## Interactive warm-up 🎯

1. Ilang parameter ang dapat meron ang setter?  
2. Ano benefit ng setter compared sa direct public assignment?  
3. Paano nagti-trigger ang setter?

Tamang sagot:
- exactly one
- may validation/control
- kapag nag-assign ka ng value sa property

## Recap 🚀

- Setters intercept assignments
- Great for validation and normalization
- Works nicely with private backing fields (`_firstName`)
