# 150. Adding Multiple Decorators 🔢

## Section 12: Experimental Decorators

Yes, puwedeng maraming decorators sa iisang class/member.

```ts
@Logger("Logger Factory")
@WithTemplate("<h1>Template</h1>", "app")
class Person {}
```

## Execution order reminder

- factory calls: top-down
- resulting decorator execution: bottom-up

## Para sa non-developer 👇

Parang stacked processing pipeline:
- may setup order
- may apply order
- both matter sa final behavior

## Recap ✅

- Multiple decorators are valid
- Know order rules to avoid confusion/bugs
