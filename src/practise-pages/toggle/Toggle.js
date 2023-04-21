import { useState } from "react";
import "../toggle/toggle.css";
export default function Toggle() {
  const [action, setAction] = useState(false);
  const style = {
    width: "60%",
    height: "400px",
    backgroundColor: "red",
  };

  const setValue = () => {
    setAction((current) => !current);
  };
  return (
    <>
      <button onClick={setValue}>Click Me</button>
      <div className={action === false ? "hide" : "show"} style={style}></div>
    </>
  );
}
