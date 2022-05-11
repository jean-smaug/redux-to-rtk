# Notes

Pour montrer l'intérêt du "Immutability check middleware"

```js
// App.js
const state = useSelector((state) => state);

useEffect(() => {
  state.posts = "smaug";
  console.log(state);
}, []);
```

Expliquer que le principe est identique pour le "Serializability check middleware"
