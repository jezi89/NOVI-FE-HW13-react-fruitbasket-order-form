import { useState } from "react";
import "./App.css";
import Fruitcard from "./components/Fruitcard.jsx";
import Resetbutton from "./components/Resetbutton.jsx";

function App() {
    const fruits = ["Aardbeien", "Bananen", "Appels", "Kiwi's"];
    const fruitEmojis = {
        "Aardbeien": "🍓",
        "Bananen": "🍌",
        "Appels": "🍏",
        "Kiwi's": "🥝"
    };


    const initialCounts = fruits.reduce((acc, fruit) => {
        acc[fruit] = 0;
        return acc;
    }, {});
    const [fruitCounts, setFruitCounts] = useState(initialCounts);

    const updateCount = (fruit, delta) => {
        setFruitCounts(prev => ({
            ...prev,
            [fruit]: Math.max(0, prev[fruit] + delta)
        }));
    };

    function handleReset() {
        setFruitCounts(initialCounts);
    }

    return (
        <>
            <header>
            <h1>Fruitmand bezorgservice</h1>
            </header>
            <main>
                <section className="fruitlist">
            {fruits.map((fruit, index) => (
                <article className="fruittype" key={index}>
                    {fruitEmojis[fruit]} {fruit}{" "}
                    <div className="counters">
                    <Fruitcard             count={fruitCounts[fruit]}
                                           onIncrement={() => updateCount(fruit, 1)}
                                           onDecrement={() => updateCount(fruit, -1)}
                                           />
                    </div>
               </article>
            ))}
            <Resetbutton onReset={handleReset} />
                </section>
            </main>
        </>
    );
}

export default App;
