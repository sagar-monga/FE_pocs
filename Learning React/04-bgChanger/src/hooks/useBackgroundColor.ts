import { useState } from "react";

export const useBackgroundColor = () => {
    const [backgroundColor, setBackgroundColor] = useState("bg-gray-500");

	const changeBackgroundColor = (newColor: string) => {
		if (newColor == backgroundColor) return;

		console.log(`Changing color to ${newColor}`);
		setBackgroundColor(newColor);
	};

    return {backgroundColor, changeBackgroundColor};
} 