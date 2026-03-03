# 26. Working with Enums 🎛️

## Section 2: TypeScript Basics & Basic Types

Kapag may set ka ng fixed options (hal. roles, status, priority),
sobrang helpful gamitin ang **enum** sa TypeScript. 🚀

Enum helps you avoid random strings at typo-prone values sa code.

## Ano ang enum? 🤔

Enum = named group ng allowed constants.

```ts
enum UserRole {
  Admin,
  Editor,
  Viewer,
}
```

Ngayon puwede ka nang gumamit ng clear values tulad ng `UserRole.Admin`.

## Interactive warm-up 🔥

Quick check:

1. Para saan useful ang enum?  
2. Mas safe ba ito kaysa hardcoded random strings?  
3. Puwede ba gamitin sa conditions?

Tamang sagot: yes, yes, yes. ✅

## Code snippet: Enum in action

```ts
enum UserRole {
  Admin,
  Editor,
  Viewer,
}

let currentRole: UserRole = UserRole.Editor;

if (currentRole === UserRole.Admin) {
  console.log('Full access granted');
} else {
  console.log('Limited access');
}
```

## String enum example

```ts
enum OrderStatus {
  Pending = 'PENDING',
  Shipped = 'SHIPPED',
  Delivered = 'DELIVERED',
}

const status: OrderStatus = OrderStatus.Pending;
```

Ito mas readable sa logs/API payloads dahil explicit ang string values.

## Paliwanag para sa non-developer 👇

Isipin mo ang enum na parang official menu:

- may fixed choices lang
- hindi puwedeng mag-imbento ng option habang runtime

Kaya mas organized at less error ang app behavior,
lalo na kapag maraming teammates ang nagco-code. 🛡️

## Why enums matter 💡

- Clear allowed values
- Better autocomplete sa editor
- Less typo bugs
- Easier maintenance sa large projects

## Mini mission 💬

1. Gumawa ng enum `Priority` (`Low`, `Medium`, `High`)  
2. Gumawa ng variable na `taskPriority: Priority`  
3. Subukang mag-assign ng invalid value at observe TypeScript error

Kapag gets mo ang enums, mas magiging consistent ang value handling mo sa buong app. 🔥
