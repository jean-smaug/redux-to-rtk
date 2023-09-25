---
marp: true
theme: uncover
---

# Redux Toolkit : the step by step migration

---

## Whoami

- Maxime Blanc
- Tech lead at **@Bedrock_Stream**
- Building **@\_progressively**
- **@jean-smaug**
- https://maximeblanc.fr

---

## Redux, c'est quoi ?

- A JS library
- Global state manager
- Created by **Dan Abramov** and **Andrew Clark**.
- Maintained by **Mark Erikson** and **Tim Dorr**.
- Inspired by **Flux**, **Elm**, **Immutable**...

Source : Wikipedia

---

## Redux's concepts

- Action
- Action Creator
- Dispatcher
- Reducer

---

## Action

An objet with a `type` key

```js
const myAction = {
  type: "users/FETCH_SUCCESS",
};
```

---

## Convention for actions

```js
const myActionWithPayload = {
  type: "users/FETCH_SUCCESS",
  payload: [{ name: "Jeansmaug", age: 27 }],
};
```

```js
const myActionWithError = {
  type: "users/FETCH_SUCCESS",
  error: { name: "Error", message: "Couldn't reach the API" },
};
```

---

## Action creator

A function that returns an action

```js
const actionCreator = () => {
  return {
    type: "users/FETCH_SUCCESS",
  };
};
```

---

## Dispatcher

A method which is **the only way** to update the store.

```js
import { createStore } from "redux";

const store = createStore();

store.dispatch({
  type: "users/FETCH_SUCCESS",
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

## Synthesis

![h:550](./images/c90d2a4a-c5d4-48f7-a96f-e8352a638722_redux%20workflow2.png)

---

## Redux Toolkit (RTK)

RTK = Redux + Stéroïdes

---

## It's demo time!

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
