# 186. A Problem with Namespace Imports ⚠️

## Section 14: Modules & Namespaces

Namespace references can hide missing dependency issues.

## The risk

Minsan app compiles but runtime breaks kapag:
- one file relied on another file’s reference side-effect
- then that “bridge file” changed or na-remove

## Why dangerous?

Dependency chain becomes implicit, not explicit.

## Para sa non-developer 👇

Parang may hidden helper na siya lang may key.  
Pag nawala siya, biglang hindi na ma-open ang system.

## Recap ✅

- Hidden dependencies are fragile; explicit imports are safer
