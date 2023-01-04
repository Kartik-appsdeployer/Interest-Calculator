import Result from "./Result";
import { React, useState } from "react";

const MyContext = (props) => {
    const [si, setSi] = useState("");

    return (
        <Result.Provider value={{ si, setSi }}>
            {props.children}
        </Result.Provider>
    )
}

export default MyContext;