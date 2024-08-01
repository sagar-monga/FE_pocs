type BgButtonProps = {
	myColor: { color: string; name: string };
	index: number;
	changeBackgroundColor: (newColor: string) => void;
};

export default function BgButton({
	myColor,
	index,
	changeBackgroundColor,
}: BgButtonProps) {
	return (
		<button
			key={myColor.color}
			className={`${myColor.color} min-w-20 px-[20px] py-[10px] rounded-full`}
			onClick={() => {
				changeBackgroundColor(myColor.color);
			}}
		>
			<span className="text-white mix-blend-exclusion">{`${myColor.name}`}</span>
		</button>
	);
}
