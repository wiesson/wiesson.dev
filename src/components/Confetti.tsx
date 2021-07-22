import { FunctionComponent } from "preact";

const Confetti: FunctionComponent = () => {
  async function onClick() {
    const { default: confetti } = await import(
      "https://cdn.skypack.dev/canvas-confetti"
    );
    confetti();
  }

  return <button onClick={onClick}>Tada 🎉</button>;
};

export default Confetti;
