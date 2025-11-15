import logo from "./logo.svg";
import "./App.css";
import AxiosPost from "./AxiosPost";
import { createContext, useState } from "react";
import ChildA from "./ChildA";
const fName = createContext();
const lName = createContext();

function App() {
  const [datas, setDatas] = useState("HELLO");
  const getData = (data) => {
    console.log("child data", data);
  };
  return (
    // <AxiosPost data={datas} onSubmit={getData}/>
    <fName.Provider value={"SUFYAN"}>
      <lName.Provider value={"SHAIKH"}>
        <ChildA />
      </lName.Provider>
    </fName.Provider>
  );
}

export default App;
export { fName,lName };
