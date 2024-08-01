import { useCallback, useEffect, useRef, useState } from "react";
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
	const passwordRef = useRef(null);

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

	const checkPasswordTypeAndGeneratePassword = useCallback(() => {
		let passwordType = PasswordType.Alphabetical;
		if (isNumeric && isSpecial) passwordType = PasswordType.All;
		else if (isNumeric) passwordType = PasswordType.AlphaNumeric;
		else if (isSpecial) passwordType = PasswordType.AlphaSpecial;
		generatePassword(passwordType);
	}, [isNumeric, isSpecial, length, setPassword]);

	const copyPasswordtoClipboard = useCallback(() => {
		passwordRef.current?.select();
		navigator.clipboard.writeText(password)
	}, [password]);

	useEffect(() => {
		checkPasswordTypeAndGeneratePassword();
	}, [isNumeric, isSpecial, length]);

	return (
		<div className="bg-black w-full h-screen flex justify-center items-center">
			<div className="bg-gray-500 min-w-[800px] min-h-[400px] rounded-3xl shadow-lg shadow-gray-600 flex flex-col justify-center items-center">
				<div className="flex min-w-[500px]">
					<input
						type="text"
						ref={passwordRef}
						className="bg-white h-full px-4 py-1 min-h-[40px] rounded-l-3xl flex-1"
						value={password}
						readOnly
					/>
					<button
						className="outline-none bg-blue-400 px-3 py-1 hover:bg-blue-600 hover:text-white "
						// Copies state to clipboard
						onClick={copyPasswordtoClipboard}
					>
						Copy
					</button>
					<button
						className="outline-none bg-red-400 px-3 py-1 rounded-r-3xl hover:bg-red-600 hover:text-white"
						onClick={checkPasswordTypeAndGeneratePassword}
					>
						Regenerate
					</button>
				</div>
				<div className="bg-green-500 min-w-[500px] min-h-[40px] flex justify-evenly items-center mt-5 rounded-full">
					<div className="flex items-baseline">
						<input
							type="checkbox"
							className="cursor-pointer"
							checked={isNumeric}
							onChange={(event) => setIsNumeric(event.target.checked)}
						/>
						<span
							className="mx-1 cursor-pointer"
							onClick={() => setIsNumeric((prev) => !prev)}
						>
							Numeric
						</span>
					</div>
					<div className="flex items-baseline">
						<input
							type="checkbox"
							className="cursor-pointer"
							checked={isSpecial}
							onChange={(event) => setIsSpecial(event.target.checked)}
						/>
						<span
							className="mx-1 cursor-pointer"
							onClick={() => setIsSpecial((prev) => !prev)}
						>
							Special
						</span>
					</div>
					<div className="flex items-center">
						<input
							type="range"
							className="cursor-pointer"
							value={length}
							min={5}
							max={20}
							onChange={(event) => setLength(parseInt(event.target.value))}
						/>
						<span className="px-2 min-w-[100px]">{`Length (${length})`}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

// Can play on character codes.
// can keep them as strings too. -- simpler
