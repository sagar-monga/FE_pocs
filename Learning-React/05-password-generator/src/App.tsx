import { useEffect, useState } from "react";
import {
	alphabets,
	numbers,
	PasswordType,
	special_characters,
} from "./data/constants";

function App() {
	const [password, setPassword] = useState("");
	const [length, setLength] = useState(8);
	const [isNumeric, setIsNumeric] = useState(false);
	const [isSpecial, setIsSpecial] = useState(false);

	const generatePassword = (type: PasswordType) => {
		const characterArray = [];
		switch (type) {
			case PasswordType.Alphabetical:
				characterArray.push(...alphabets);
				break;
			case PasswordType.AlphaNumeric:
				characterArray.push(...alphabets, ...numbers);
				break;
			case PasswordType.AlphaSpecial:
				characterArray.push(...alphabets, ...special_characters);
				break;
			case PasswordType.All:
				characterArray.push(...alphabets, ...numbers, ...special_characters);
				break;
			default:
				characterArray.push(...alphabets);
				break;
		}

		let generatedPass = "";
		for (let i = 0; i < length; i++) {
			const character =
				characterArray[Math.floor(Math.random() * characterArray.length)];
			generatedPass = generatedPass + character;
		}

		setPassword(generatedPass);
	};

	const checkPasswordTypeAndGeneratePassword = () => {
		let passwordType = PasswordType.Alphabetical;
		if (isNumeric && isSpecial) passwordType = PasswordType.All;
		else if (isNumeric) passwordType = PasswordType.AlphaNumeric;
		else if (isSpecial) passwordType = PasswordType.AlphaSpecial;
		generatePassword(passwordType);
	};

	useEffect(() => {
		checkPasswordTypeAndGeneratePassword();
	}, [isNumeric, isSpecial, length]);

	return (
		<div className="bg-black w-full h-screen flex justify-center items-center">
			<div className="bg-gray-500 min-w-[800px] min-h-[400px] rounded-3xl shadow-lg shadow-gray-600 flex flex-col justify-center items-center">
				<div className="flex min-w-[450px]">
					<input
						type="text"
						className="bg-white h-full px-4 py-1 min-h-[40px] rounded-l-3xl flex-1"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
					<button
						className="outline-none bg-blue-400 px-3 py-1"
						// Copies state to clipboard
						onClick={() => navigator.clipboard.writeText(password)}
					>
						Copy
					</button>
					<button
						className="outline-none bg-red-400 px-3 py-1 rounded-r-3xl"
						onClick={checkPasswordTypeAndGeneratePassword}
					>
						Regenerate
					</button>
				</div>
				<div className="bg-green-500 min-w-[450px] min-h-[40px] flex justify-evenly items-center mt-5 rounded-full">
					<div className="flex items-baseline">
						<input
							type="checkbox"
							checked={isNumeric}
							onChange={(event) => setIsNumeric(event.target.checked)}
						/>
						<span className="mx-1">Numeric</span>
					</div>
					<div className="flex items-baseline">
						<input
							type="checkbox"
							checked={isSpecial}
							onChange={(event) => setIsSpecial(event.target.checked)}
						/>
						<span className="mx-1">Special</span>
					</div>
					<div className="flex items-center">
						<input
							type="range"
							value={length}
							min={5}
							max={20}
							onChange={(event) => setLength(parseInt(event.target.value))}
						/>
						<span className="px-2">{`Length (${length})`}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

// Can play on character codes.
// can keep them as strings too. -- simpler
