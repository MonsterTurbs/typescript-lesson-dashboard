# 94. Function Overloads 📚

## Section 7: Advanced Types

Function overloads let you define multiple call signatures for one function implementation.

## Problem setup

```ts
function getLength(val: string | any[]) {
  if (typeof val === "string") {
    const numberOfWords = val.split(" ").length;
    return `${numberOfWords} words`;
  }

  return val.length;
}
```

Without overloads, return type is `string | number`, even in places where you know one specific case.

## Para sa non-developer 👇

Parang iisang service counter:
- iba-ibang request type puwedeng tanggapin
- pero iba rin ang specific expected result per request

Need natin i-document iyon clearly sa type system.

## Interactive warm-up 🎯

1. Ano main issue kapag union lang ang return type dito?  
2. Niche pero useful ba ang overloads?  
3. Kailan maganda gamitin overloads?

Tamang sagot:
- kulang sa precision per call case
- oo
- kapag iba ang result type depende sa input signature

## Recap ✅

- Overloads solve call-specific return type precision issues
- Good for APIs with distinct input-output pairs
