const { useState } = React;

function CounterApp() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return React.createElement("div", { style: { textAlign: "center", marginTop: "50px" } }, React.createElement("h1", null, "Counter: ", count), React.createElement("button", { onClick: decrement, style: { marginRight: "10px" } }, "-"), React.createElement("button", { onClick: increment }, "+"));
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(React.createElement(CounterApp));
