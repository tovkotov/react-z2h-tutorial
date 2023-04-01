import {useState} from "react";

function Clicker() {
    // let number = 0;
    const [number, setNumber] = useState(0);

    function increment() {
        setNumber(number + 1)
    }

    return (
        <div>
            <p>{number}</p>
            <button onClick={increment}>Click-clack</button>
        </div>
    )
}

export default Clicker;