# 11. Using Node.js to Run JavaScript Code 🟢

## Section 2: TypeScript Basics & Basic Types

Sa lesson na ito, pag-uusapan natin kung bakit madalas gamitin si **Node.js**
para patakbuhin ang compiled JavaScript code habang nag-aaral ka ng TypeScript.

Simple idea:
- imbes na gumawa agad ng demo website
- puwede mong i-run ang `.js` file direkta sa terminal
- mas mabilis ang testing at feedback loop mo 🚀

## Bakit useful ito sa course? 🤔

Sa course na ito, may mga moments na gusto lang nating i-check ang output ng code.
Hindi na kailangan gumawa ng buong webpage para doon.

Node.js ang practical shortcut:
- run agad
- inspect output agad
- proceed agad sa next concept ✅

## Install Node.js ⚙️

Download link:
`https://nodejs.org/en`

Available ito sa Windows, macOS, at Linux.

## Interactive warm-up 🔥

Quick check:

1. Kailangan ba ng browser lagi para ma-run ang JavaScript?  
2. Ano ang command para i-run ang JS file via Node.js?  
3. Bakit useful ito sa learning workflow?

Kung sagot mo ay `hindi`, `node <filename>.js`, at `mas mabilis na testing`,
tama ka. 💯

## Basic terminal command

```bash
node app.js
```

Kapag nakita mong nag-run ang instructor ng `node app.js`,
ibig sabihin gumagamit siya ng Node.js runtime para i-execute ang JavaScript code.

## Mini code snippet example 👀

```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('TypeScript Learner'));
```

```bash
node app.js
```

Expected output:

```txt
Hello, TypeScript Learner!
```

## Paliwanag para sa non-developer 👇

Isipin mo si Node.js bilang mini player para sa JavaScript files.

- Ang `.js` file mo ang “video file”
- Ang `node` command ang “play button”
- Hindi mo na kailangan ng website para lang mapanood ang output

Kaya sa learning setup, mas mabilis ka makaka-try ng ideas at makaka-debug ng errors.

## Quick recap 🧠

1. Node.js is a runtime for JavaScript outside the browser
2. Helpful ito para mabilis mag-run ng compiled code from TypeScript
3. Kapag nakikita mo ang `node app.js`, Node.js execution iyon
4. Mas less setup, mas focus ka sa core concepts

Continue lang, step by step, at magiging natural din ito sa dev workflow mo. 🎉
