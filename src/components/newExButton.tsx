import type { JSX } from "react";
import { useState } from "react";

type ButtonProps = {
    title:string;
    onClick: () => void;
};

export function Button({title, onClick }: ButtonProps): JSX.Element{
    const[counter, setCounter] = useState<number>(0);
function handleClick(){
    onClick();
    setCounter(counter + 1);
}

  return <button onClick={handleClick}>{title} <br /><br /> number of click: {counter}</button>;
  
}

// export default Button
