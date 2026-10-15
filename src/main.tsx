import { render } from "preact";
import { Signal, useSignal } from "@preact/signals";
import type { ComponentChildren } from "preact";
import "./index.css";

interface CounterProps {
  count: Signal<number>;
}

interface ButtonProps {
  id?: string;
  onClick?: () => void;
  children?: ComponentChildren;
  disabled?: boolean;
}

function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      class="px-2 py-1 border-gray-500 border-2 rounded-sm bg-white hover:bg-gray-200 transition-colors"
    />
  );
}

function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6 items-center">
      <Button id="decrement" onClick={() => (props.count.value -= 1)}>-1</Button>
      <p class="text-3xl tabular-nums">{props.count}</p>
      <Button id="increment" onClick={() => (props.count.value += 1)}>+1</Button>
    </div>
  );
}

export function App() {
  const count = useSignal(3);
  return (
    <div class="fresh-gradient min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div class="max-w-screen-md mx-auto flex flex-col items-center text-center">
        <h1 class="text-4xl font-bold mb-4">Welcome to native deno + vite + preact + tailwind</h1>
        <p class="my-4 text-gray-700">
          Try updating this message in the code and refresh.
        </p>
        <Counter count={count} />
      </div>
    </div>
  );
}

render(<App />, document.getElementById("app")!);
