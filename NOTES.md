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

~110 ligne vers ~75 ligne --> 30% de lignes en moins

Pensez que je n'ai montré que la base.

RTK ne solutionnera pas tout vos problèmes, mais c'est le meilleur moyen d'y parvenir.
Redux est et restera qq chose de complèxe, RTK abstrait certaines notions --> On évite des erreurs mais on comprends moins de choses.

## Déroulé

- Présenter Redux en 2-2 (action, reducer, dispatcher)
- Présenter l'app en 2-2 (action type, action creator, reducer, l'implem de la fonction `fetchPosts`)
- `createStore` &rarr; `configureStore`
- Virer les actions creator et actions type au profit de `createAction`
- Migrer le thunk avec `createAsyncThunk`
- Migrer le reducer avec `createReducer`
