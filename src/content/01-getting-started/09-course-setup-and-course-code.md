# 9. Course Setup & Course Code 🧩

## Section 1: Getting Started

Ready ka na para sa mas smooth na learning flow? 🔥  
Sa lesson na ito, ise-set natin ang basic tools at resources na kailangan mo habang sumusunod sa course.

## Important resources links 🔗

- Course code snapshots (GitHub): `https://github.com/mschwarzmueller/understanding-typescript-resources`
- Node.js download page: `https://nodejs.org/en`

Tip: I-bookmark mo ang dalawang links na ito para mabilis balikan anytime. ✅

## Setup checklist (quick win) 🚀

1. Install Node.js sa system mo  
2. Pili ng code editor (VS Code or JetBrains IDE)  
3. Open ang project/code snapshots habang nag-aaral  
4. Test sa terminal kung ready na ang Node environment

## Editor options mo 💻

### Option A: VS Code (free at recommended)

- Free gamitin
- Extensible
- Works on all major operating systems
- Good TypeScript support

### Option B: JetBrains IDEs (optional)

Popular din ito, especially **WebStorm** for web development.

As a student, may deal ka:
- one JetBrains IDE free for 6 months
- coupon code: `ACAD_JETBRAINS`

Note:
- Optional lang ang JetBrains
- Pwede ka pa ring pure VS Code setup
- Kailangan mag-enter ng email sa checkout process kung kukunin mo ang deal

## Interactive mission 🎯

Gawin mo ito now:

1. Buksan ang GitHub course resources link
2. Confirm mo na installed ang Node.js
3. Pili ka ng editor na pinaka-comfortable ka
4. I-note mo sa sarili mo: "Ito ang setup ko for the course"

Small preparation, malaking productivity boost. 🙌

## Code snippet: Setup checker

```ts
type SetupStatus = {
  hasNode: boolean;
  hasEditor: boolean;
  openedCourseRepo: boolean;
};

function getSetupMessage(status: SetupStatus) {
  if (status.hasNode && status.hasEditor && status.openedCourseRepo) {
    return 'Setup complete! Ready ka na for TypeScript deep dive 🚀';
  }

  return 'May kulang pa sa setup, tapusin muna natin bago sumabak 💡';
}

console.log(
  getSetupMessage({
    hasNode: true,
    hasEditor: true,
    openedCourseRepo: true,
  })
);
```

## Paliwanag para sa non-developer 👇

Parang travel checklist ito bago bumiyahe:

- May ticket ka ba? (`hasNode`)
- May bag ka ba? (`hasEditor`)
- May map ka ba? (`openedCourseRepo`)

Kapag kompleto lahat, smooth ang biyahe.
Ganun din sa coding setup: less friction, more focus sa learning. 🌟

## Final reminder 💬

Hindi mo kailangan ng “perfect” setup agad.
Ang mahalaga: mayroon kang working setup na ready for practice.

Then tuloy-tuloy na tayo sa TypeScript lessons with confidence! 🔥
