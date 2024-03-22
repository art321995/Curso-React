import { useRef } from "react";

const InputText = () => {
  return <input type="text" />;
};

const ExampleRef = () => {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // `current` apunta al elemento de entrada de texto montado
    inputEl.current.focus();
  };

  return (
    <>
      <InputText ref={inputEl} />
      <button onClick={onButtonClick}>Focus the</button>
    </>
  );
};

export default ExampleRef;