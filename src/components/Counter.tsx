import { createSignal, type Component, type JSX } from 'solid-js';

type Props = {
  initValue: number;
  children?: JSX.Element;
};

export const Counter: Component<Props> = (props) => {
  const [counter, setCounter] = createSignal(props.initValue);

  return (
    <>
      {props.children ? props.children : <h1 class="text-5xl">Counter</h1>}
      <h3 class="text-xl">Value: {counter()}</h3>

      <button
        onClick={() => setCounter((prev) => (prev > 0 ? --prev : prev))}
        class="bg-blue-500 p-2 mr-2 rounded"
      >
        -1
      </button>
      <button
        onClick={() => setCounter((prev) => ++prev)}
        class="bg-blue-500 p-2 mr-2 rounded"
      >
        +1
      </button>
    </>
  );
};
