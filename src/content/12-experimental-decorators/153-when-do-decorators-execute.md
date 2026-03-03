# 153. When Do Decorators Execute? ⏱️

## Section 12: Experimental Decorators

Critical concept: decorators execute on class/member definition time.

## Not this:

- they are not normal runtime listeners for every property access by default

## Yes this:

- they run while class is being set up
- then they can configure/replace behavior used later at runtime

## Para sa non-developer 👇

Parang installation/setup step muna bago gamitin ang app feature.

## Recap 🚀

- Understand lifecycle timing para tama ang expectations sa decorator effects
