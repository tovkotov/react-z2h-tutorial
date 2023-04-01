import {useState} from "react";

function StateWithInput() {
    const [myName, setMyName] = useState("");

    function handleOnChange(text) {
        setMyName(text);
    }

    return (
        <div>
            <input type="text" on onChange={(e) => handleOnChange(e.target.value)}/>
            <p>Hello, {myName}!</p>
        </div>
    );
}

export default StateWithInput;