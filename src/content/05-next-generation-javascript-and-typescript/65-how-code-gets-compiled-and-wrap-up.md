# 65. How Code Gets Compiled & Wrap Up 🛠️

## Section 5: Next-generation JavaScript & TypeScript

Wrap-up time! 🎉  
Key takeaway: TypeScript does not just check types, it also **compiles** your code based on `target`.

## ES6 target vs ES5 target

Kung `target` mo ay `ES6`, maraming modern syntax ang mananatili sa output:
- `const` / `let`
- destructuring
- at iba pa

Kapag `target` ay `ES5`, iko-convert ni TypeScript ang modern code sa older-compatible JavaScript.

## Sample `tsconfig` idea

```json
{
  "compilerOptions": {
    "target": "ES6",
    "strict": true
  }
}
```

Try mo palitan to:

```json
{
  "compilerOptions": {
    "target": "ES5",
    "strict": true
  }
}
```

Makikita mong mas mahaba at transformed ang generated JS output.

## Para sa non-developer 👇

Parang translator si TypeScript:
- input mo = modern coding style
- output niya = version na bagay sa target environment/browser

Kaya kahit old browser target mo, puwede ka pa ring magsulat gamit modern syntax (within limits). ✅

## Interactive warm-up 🧠

1. Ano mangyayari sa output kapag `target: "ES5"`?  
2. Ano role ng TypeScript bukod sa type checking?  
3. Bakit mahalaga ang `target` sa `tsconfig`?

Tamang sagot:
- mas transformed at older-compatible JS ang lalabas
- compiler din siya (hindi checker lang)
- dahil dito naka-base kung anong JS version ang output

## Recap 🎯

- Modern JS features are great, pero dependent sa runtime support
- TypeScript helps bridge modern syntax and older environments
- `target` setting controls how your final JavaScript looks
