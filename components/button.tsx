import {
	GestureResponderEvent,
	Pressable,
	StyleSheet,
	Text,
} from "react-native";

interface Props {
	text: string;
	onPress: (event: GestureResponderEvent) => void;
}

export const Button = ({ onPress, text }: Props) => {
	return (
		<Pressable onPress={onPress} style={style.button}>
			<Text style={style.text}>{text}</Text>
		</Pressable>
	);
};

const style = StyleSheet.create({
	button: {
		backgroundColor: "skyblue",
		paddingHorizontal: 12,
		paddingVertical: 8,
		borderRadius: 6,
	},
	text: {
		color: "white",
	},
});
