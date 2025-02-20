
import './App.css'
import Button from "./components/Button.jsx";

function App() {

    const fruits =["Aardbeien", "Bananen", "Appels", "Kiwi's" ]
    const fruitEmojis = {
        "Aardbeien": "🍓",
        "Bananen": "🍌",
        "Appels": "🍏",
        "Kiwi's": "🥝"
    }
  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        {fruits.map((fruit, index) => (
            <div key={index} >
                {fruitEmojis[fruit]} {fruit}< Button />
            </div>
        ))}

    </>
  )
}

export default App
