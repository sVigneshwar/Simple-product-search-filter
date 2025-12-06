**Simple Product Filter**

- **Description**: A small React demo that demonstrates a debounced product search using a custom `useDebouncing` hook and a `useFetchData` hook that queries the DummyJSON products API. It shows instant input feedback while performing network requests only after the user stops typing for a short delay.

**Features**
- **Debounced Search**: Input is debounced to avoid excessive API requests.
- **Custom Hooks**: `useDebouncing` and `useFetchData` are implemented as reusable hooks.
- **Responsive UI**: Simple product cards with responsive grid layout and hover effects.
- **No external state library**: Uses React built-in state and effects.

**Tech Stack**
- **Framework**: `React` (v19)
- **Bundler**: `Vite`
- **Styling**: Plain CSS (component-level stylesheet)

**Project Structure (key files)**
- `index.html` — App entry HTML
- `package.json` — Scripts and dependencies
- `vite.config.js` — Vite configuration
- `src/main.jsx` — React entry point
- `src/App.jsx` — App shell
- `src/components/Search.jsx` — Main search & product list component
- `src/hooks/useDebouncing.jsx` — Debouncing hook
- `src/hooks/useFetchData.jsx` — Hook wrapping product fetch logic
- `src/styles/Search.css` — Component styles

**Getting Started**
- **Install dependencies**:

```
cd f:\Github\simple-product-filter
npm install
```

- **Run (development)**:

```
npm run dev
```

- **Build**:

```
npm run build
```

- **Preview production build**:

```
npm run preview
```

**How it Works**
- The `Search` component keeps an instant `search` state bound to the input.
- `useDebouncing(search, 600)` returns a debounced value that updates only after 600ms of inactivity.
- `useFetchData(debouncedValue)` triggers a fetch to `https://dummyjson.com/products/search?q={query}` whenever the debounced value changes.
- The component renders a responsive grid of product cards from the `products` array returned by the API, and shows friendly empty / loading / error states.

**Hooks Overview**
- **`useDebouncing(input, delay)`**: Returns the latest input value after the given delay. Use this to postpone expensive operations until the user pauses typing.
  - Usage: `const debounced = useDebouncing(search, 600)`

- **`useFetchData(query)`**: Accepts a `query` string and returns an object with `{ queryData }` (component uses `queryData.products`). The hook performs the fetch inside a `useEffect` and updates state when results arrive.
  - Usage: `const { queryData } = useFetchData(debouncedQuery)`

**Styling**
- The UI uses `src/styles/Search.css` which contains the layout, input styling, responsive grid, product card styles and empty states. You can customize colors and spacing there.

**Customization Tips**
- To change debounce timing, adjust the second argument passed to `useDebouncing`.
- To support pagination or larger result sets, update `useFetchData` to accept `limit`/`skip` arguments and expose controls in the UI.
- Replace the DummyJSON API with your own backend by updating the fetch URL inside `useFetchData`.

**Troubleshooting**
- If you see `fetch` warnings in Node-based tests, either provide a `global.fetch` polyfill in your test setup or mock the network calls.
- If results don't appear, check the browser network tab for the request to `https://dummyjson.com/products/search?q=...` and confirm the response contains a `products` array.

**License**
- MIT (feel free to reuse and adapt this demo for learning and prototyping)

---

If you'd like, I can:
- Add a short demo GIF or screenshots to the README.
- Add instructions for running this inside Codesandbox or a static host.
- Extend the hooks with loading / error return values and update component usage accordingly.
