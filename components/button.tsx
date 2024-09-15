import {
	GestureResponderEvent,
	Pressable,
	StyleProp,
	StyleSheet,
	Text,
	ViewStyle,
} from "react-native";

interface Props {
	text: string;
	onPress: (event: GestureResponderEvent) => void;
	style?: StyleProp<ViewStyle>;
}

export const Button = ({ onPress, text, style }: Props) => {
	return (
		<Pressable onPress={onPress} style={[styled.button, style]}>
			<Text style={styled.text}>{text}</Text>
		</Pressable>
	);
};

const styled = StyleSheet.create({
	button: {
		backgroundColor: "tomato",
		paddingHorizontal: 12,
		paddingVertical: 8,
		borderRadius: 6,
	},
	text: {
		color: "white",
	},
});
