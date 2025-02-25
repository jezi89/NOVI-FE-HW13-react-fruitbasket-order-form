import { useState } from "react";
import "./App.scss";
import Fruitcard from "./components/Fruitcard.jsx";
import Resetbutton from "./components/Resetbutton.jsx";
import Orderform from "./components/Orderform.jsx";
import StrawberryIcon from "./components/StrawberryIcon.jsx";
import BananaIcon from "./components/BananaIcon.jsx";
import AppleIcon from "./components/AppleIcon.jsx";
import KiwiIcon from "./components/KiwiIcon.jsx";

function App() {
    const fruits = ["Aardbeien", "Bananen", "Appels", "Kiwi's"];
    const fruitIcons = {
        "Aardbeien": <StrawberryIcon size={24} />,
        "Bananen": <BananaIcon size={24} />,
        "Appels": <AppleIcon size={24} />,
        "Kiwi's": <KiwiIcon size={24} />,
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
                    {fruitIcons[fruit]} {fruit}{" "}
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
            <footer>
                <section className="formSection">
                    < Orderform />
                </section>
            </footer>
        </>
    );
}

export default App;
