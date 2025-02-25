import {useState} from "react";


export default function Orderform () {

    const [formState, setFormState] = useState({
        firstName: '',
        surName: '',
        age: '',
        zipCode: '',
        weeklyDeliveryFreq: '3pw',
        timeOfDayDelivery: false,
        remarks: '',
        terms: false

    })

    function changeHandler (event) {
        const {name, type, checked, value} = event.target;
        const newValue = type === "checkbox" ? checked : value;

        setFormState({...formState, [name]: newValue})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        alert('verstuurd!')
    }

    return (
        <div className="container mt-5">
            <h1>Fruitmand Bestelformulier</h1>
            <form onSubmit={submitHandler}>
                <fieldset className="border p-4 rounded">
                    <legend className="w-auto px-2">Gegevens: </legend>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="formFirstName" className="form-label">Voornaam: </label>
                            <input
                                type="text"
                                className="form-control"
                                id="formFirstName"
                                name="firstName"
                                value={formState.firstName}
                                onChange={changeHandler}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="formSurName" className="form-label">Achternaam: </label>
                            <input
                                type="text"
                                className="form-control"
                                id="formSurName"
                                name="surName"
                                value={formState.surName}
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                        <div className="row mb-3">
                            <div className="col-md-4">
                            <label htmlFor="formAge" className="form-label">Leeftijd: </label>
                            <input
                                type="number"
                                className="form-control"
                                id="formAge"
                                name="age"
                                placeholder="Only 18+"
                                value={formState.age}
                                onChange={changeHandler}
                            />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="formZipCode" className="form-label">Postcode: </label>
                            <input
                                type="text"
                                className="form-control"
                                pattern= "^(?:NL-)?[1-9]\d{3}\s?[A-EGHJ-NPRTVWXZ]{2}|S[BCEGHJ-NPRTVWXZ]$"
                                id="formZipCode"
                                name="zipCode"
                                placeholder="1234AA"
                                value={formState.zipCode}
                                onChange={changeHandler}
                            />
                            </div>
                            <div className="col-md-4">
                            <label htmlFor="formWeeklyDeliveryFreq" className="form-label">Bezorgfrequentie: </label>
                            <select name="weeklyDeliveryFreq"
                                    className="form-control"
                                    id="formWeeklyDeliveryFreq"
                                    value={formState.weeklyDeliveryFreq}
                                    onChange={changeHandler}
                                    >
                            <option value="1pw">1 x per week</option>
                            <option value="2pw">2 x per week</option>
                            <option value="3pw">3 x per week</option>
                            <option value="4pw">4 x per week</option>
                            <option value="5pw">5 x per week</option>
                        </select>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label d-block">Bezorgtijd: </label>
                            <div className="form-check form-check-inline">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id="timeOfDayDeliveryMorning"
                                    name="timeOfDayDelivery"
                                    value="'s ochtends"
                                    checked={formState.timeOfDayDelivery === "'s ochtends"}
                                    onChange={changeHandler}
                                />
                                <label className="form-check-label" htmlFor="timeOfDayDeliveryMorning">
                                    's ochtends
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id="timeOfDayDeliveryEvening"
                                    name="timeOfDayDelivery"
                                    value="'s avonds"
                                    checked={formState.timeOfDayDelivery === "'s avonds"}
                                    onChange={changeHandler}
                                />
                                <label className="form-check-label" htmlFor="timeOfDayDeliveryEvening">
                                    's avonds
                                </label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="formRemarks" className="form-label">Opmerkingen: </label>
                            <textarea
                                className="form-control"
                                id="formRemarks"
                                name="remarks"
                                rows="4"
                                value={formState.remarks}
                                onChange={changeHandler}
                            />
                        </div>

                    <div className="mb-3 form-check d-flex align-items-center gap-4">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="formTerms"
                                name="terms"
                                checked={formState.terms}
                                onChange={changeHandler}
                            />
                        <label className="form-check-label" htmlFor="formTerms">
                            Akkoord met de voorwaarden?
                        </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                </fieldset>
            </form>
        </div>
    )
}
