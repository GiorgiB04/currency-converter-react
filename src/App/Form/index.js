import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";


export const Form = ({ calculateResult, result }) => {
	const [currency, setCurrency] = useState(currencies[0].short);
	const [amount, setAmount] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();
		calculateResult(currency, amount);
	}

return (
	<>
	<form className="form__style" onSubmit={onSubmit}>
		<h1 className="form__header">
			Przelicznik walut
		</h1>
		<p>
			<lebel>
				<span className="form__labelText">
					Kwota PLN*
				</span>
				<input
					value={amount}
					onChange={({ target }) => setAmount(target.value)}
					placeholder="Wpisz kwote w zł"
					className="form__field"
					type="number"
					required
					step="0.01"
				/>
			</lebel>
		</p>
		<p>
			<label>
				<span className="form__labelText">
					Waluta:
				</span>
				<select
					className="form__field"
					value={currency}
					onChange={({ target }) => setCurrency(target.value)}
				>
				{currencies.map((currency => (
					<option
						key={currency.short}
						value={currency.short}
					>
						{currency.name}
					</option>
				)))}
				</select>
			</label>
		</p>
			<p>
				<button className="form__button">
					Przelic!
				</button>
			</p>
	</form>
	<div className="result__text">
				<p className="form__info">
					Wartość
				</p>
				<Result result={result}></Result>
			</div>
			</>
	);
};