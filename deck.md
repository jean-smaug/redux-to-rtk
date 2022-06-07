---
marp: true
theme: uncover
---

# Migration progressive vers Redux Toolkit (RTK)

---

## Redux, c'est quoi ?

---

## Une librairie JS

- Créée par **Dan Abramov** et **Andrew Clark**.
- Maintenue par **Mark Erikson** et **Tim Dorr**.
- Gestionnaire d'état global
- Inspirée par **Flux**, **Elm**, **Immutable**...

---

## Métaphore

![](./images/centre-tri-postal.jpeg)

---

## Une lettre

```js
//
//
//

const action = {
  // Une action doit avoir un type
  type: "posts/fetchSuccess",
};
```
