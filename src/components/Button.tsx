import type { JSX } from "react";


const Button: () => JSX.Element = () => {
    
    const ButtonTitle: () => JSX.Element = () => {
        const availableMoney:number = 1000;
        const text: string = availableMoney > 1000 ? "More than 1000" : "less or equal to than 1000";
        return <h3>{text}</h3>;
    }
  return (
    // <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    
     <button onClick={() => alert("You have clicked!")}>
        <ButtonTitle />
        </button>
  )
}

export default Button
