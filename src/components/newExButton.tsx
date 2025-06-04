import type { JSX } from "react";
import { useState } from "react";

type ButtonProps = {
    title:string;
    onClick: () => void;
    disabled?: boolean;
    onChange?: (id: number) =>void;
    objArr?: objArr[];
    setState?: React.Dispatch<React.SetStateAction<string>>
};

interface objArr {
    id: string;
    title: string;
}

export function Button({title, onClick, disabled, setState }: ButtonProps): JSX.Element{
    const[counter, setCounter] = useState<number>(0);
    const validtitle = disabled ? "disabled" : title + "number of click:" + counter;
    function handleClick(){
    onClick();
    setCounter(counter + 1);
    if(setState){
    setState("")
    }
}

  return <button disabled={disabled} onClick={handleClick}>{validtitle}</button>;
  
}

// export default Button
