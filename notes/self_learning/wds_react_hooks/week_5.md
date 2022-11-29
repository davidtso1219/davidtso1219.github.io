---
title: Web Dev Simplified React Hooks
layout: note_template
---

# useContext

## Description

- A hook for creating a global state that can be accessed across a component and all its childrend components without using props.
- The following list shows the steps for creating a context

	- In `SampleContext.js`

		1. Use `React.createContext` to create a context, and initialize states with default values
		2. Create a component function that returns a Context.Provider with `props.children`
		3. In the component function, create the states and put the states in the value attribute of the Provider element and don't forget the setters

	- In any component that you want to have access to the context, say `App.js`,

		4. Wrap the return component with the provider element you just created
		5. And you can now have the access to the context by using `useContext` hook in all components, including the current component.

## Usage

```js
// App.js
const App = () => {
	const ctx = useContext(ItemsContext);

	return (
		<ItemsProvider>
			{ctx.items.map((item) => (
				<Item name={item.name} price={item.price} />
			))}
		</ItemsProvider>
	);
};

// in ItemsContext.js
const ItemsContext = React.createContext(DEFAULT_CONTEXT); // dummy values

const ItemsProvider = (props) => {
	const [items, setItems] = useState(DEFAULT_ITEMS); // real initial values

	return (
		<ItemsContext.Provider
			value={{ items: items, addItems: addItems, removeItems: removeItems }}
		>
			{props.children}
		</ItemsContext.Provider>
	);
};
```
