---
marp: true
theme: uncover
---

# Migration progressive vers Redux Toolkit

---

## Whoami

- Maxime Blanc
- Tech lead dans les équipes TVJS
- **@jean-smaug**
- https://maximeblanc.fr

---

## Redux, c'est quoi ?

- Une librairie JS
- Créée par **Dan Abramov** et **Andrew Clark**.
- Maintenue par **Mark Erikson** et **Tim Dorr**.
- Inspirée par **Flux**, **Elm**, **Immutable**...
- Gestionnaire d'état global

Source : Wikipedia

---

## Notions Redux

- Action
- Action Creator
- Dispatcher
- Reducer

---

## Action

Un objet avec un `type`

```js
const monAction = {
  type: "users/FETCH_SUCCESS",
};
```

---

## Convention pour les actions

```js
const monAction = {
  type: "users/FETCH_SUCCESS",
  payload: [{ name: "Jeansmaug", age: 25 }],
};
```

```js
const monAction = {
  type: "users/FETCH_SUCCESS",
  error: { name: "Erreur", message: "Nimporte quoi" },
};
```

---

## Action creator

Une fonction qui retourne une action

```js
const actionCreator = () => {
  return {
    type: "users/FETCH_PENDING",
  };
};
```

---

## Dispatcher

La seule façon de mettre à jour le store Redux et de dispatcher une action

```js
import { createStore } from "redux";

const store = createStore();

store.dispatch({
  type: "foo/BAR",
});
store.dispatch(actionCreator());
```

---

## Reducer

Fonction pure qui à partir d'un état initial retourne un nouvel état

```js
const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "users/FETCH_SUCCESS":
      return { ...state, users: action.payload };

    default:
      return state;
  }
};
```

---

## Synthèse

![h:550](./images/c90d2a4a-c5d4-48f7-a96f-e8352a638722_redux%20workflow2.png)

---

## Redux Toolkit (RTK)

RTK = Redux + Stéroïdes

---

## C'est l'heure de la démo

---

## REX perso sur RTK

- RTK facilite l'**usage** de Redux
- N'est pas un **outil** miracle
- Abstrait la complexité
- Mieux architecturer son store
- Suivre les bonnes pratiques

---

## Des questions ?

(si je n'ai pas dépassé le temps imparti)
