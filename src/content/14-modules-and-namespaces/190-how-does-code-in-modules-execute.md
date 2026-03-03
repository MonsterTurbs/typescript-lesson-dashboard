# 190. How Does Code In Modules Execute? ⏱️

## Section 14: Modules & Namespaces

Important behavior: module top-level code runs once when first imported.

## Example idea

If `project-state.ts` is imported in multiple files:
- its initialization code executes once
- later imports reuse cached module result

## Why important?

Helps avoid incorrect assumptions about repeated setup side effects.

## Para sa non-developer 👇

Parang app startup service:
- one-time initialize
- then shared instance ginagamit ng iba

## Recap ✅

- Module execution caching is fundamental for app architecture
