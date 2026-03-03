# 51. Using Node.js to Run Compiled JS Code 🟢

## Section 4: TypeScript Essentials Demo Project

Sa section na ito (at sa ibang sections din), madalas natin irurun ang compiled JavaScript code gamit ang Node.js.

Bakit?  
Para hindi na tayo gumawa agad ng demo website para lang ma-execute ang code. Mas mabilis ang workflow. 🚀

## Ano ang Node.js? 🤔

Ang Node.js ay runtime na nagpapahintulot na mag-run ng JavaScript code diretso sa system mo
gamit ang terminal/command line.

Install source:
- https://nodejs.org/en

Available ito sa major operating systems (Windows, macOS, Linux).

## Basic usage

Pagkatapos mong i-compile ang TypeScript to JavaScript, puwede mo nang i-run ang output file:

```bash
node app.js
```

Kapag may `dist` folder ang compiled output mo:

```bash
node dist/app.js
```

## Typical flow sa TypeScript project

1. Compile:

```bash
tsc
```

2. Run compiled JS with Node:

```bash
node dist/app.js
```

## Paliwanag para sa non-developer 👇

Isipin mo na:
- TypeScript = blueprint language
- JavaScript = final executable instructions
- Node.js = machine na nagpapatakbo ng final instructions

Kaya process natin:
TypeScript -> compile -> JavaScript -> run via Node.js ✅

## Interactive warm-up 🔥

1. Kailangan ba ng browser para mapatakbo ang compiled JS sa lesson na ito?  
2. Anong command ang ginagamit para i-run ang JS file sa terminal?  
3. Ano muna ang dapat gawin bago `node dist/app.js` sa TypeScript project?

Tamang sagot:
- hindi
- `node <filename>.js`
- i-compile muna gamit `tsc`

## Recap 🎯

- Node.js lets you run JavaScript directly on your machine
- Useful ito para sa mabilis na demo/testing workflow
- Common command: `node app.js` or `node dist/app.js`
- Compile TypeScript first, then run the compiled JS
