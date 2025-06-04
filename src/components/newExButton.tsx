import type { JSX } from "react";
import { useState } from "react";

type ButtonProps = {
    title:string;
    onClick: () => void;
    disabled?: boolean;
};

export function Button({title, onClick, disabled }: ButtonProps): JSX.Element{
    const[counter, setCounter] = useState<number>(0);
    const validtitle = disabled ? "disabled" : title + "number of click:" + counter;
    function handleClick(){
    onClick();
    setCounter(counter + 1);
}

  return <button disabled={disabled} onClick={handleClick}>{validtitle}</button>;
  
}

// export default Button
