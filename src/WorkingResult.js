import Result from "./Result";
import { React, useState } from "react";

const MyContext = (props) => {
    const [results, setResults] = useState([]);

    return (
        <Result.Provider value={{ results, setResults }}>
            {props.children}
        </Result.Provider>
    )
}

export default MyContext;