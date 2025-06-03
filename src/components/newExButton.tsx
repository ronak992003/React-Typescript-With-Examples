import type { JSX } from "react";


export function Button({title}: {title:string}): JSX.Element{
    console.log(title);
    
  return <button>{title}</button>;
  
}

// export default Button
