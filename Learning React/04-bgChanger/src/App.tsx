import "./App.css";
import BgButton from "./components/BgButton";
import { ColorsWithNames } from "./data/Colors";
import { useBackgroundColor } from "./hooks/useBackgroundColor";

function App() {
	const { backgroundColor, changeBackgroundColor } = useBackgroundColor();

	return (
		<div className={`${backgroundColor} h-full w-full flex-1`}>
			<div className="absolute bottom-6 w-full flex">
				<div className="bg-amber-500 flex-1 flex mx-10 py-3 justify-evenly rounded-full">
					{ColorsWithNames.map((item, index) => {
						return (
							// <BgButton key={item.color} myColor={item} index={index}/>
							// Cleaner way
							<BgButton
								key={item.color}
								{...{ myColor: item, index, changeBackgroundColor }}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
