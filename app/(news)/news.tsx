import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function New() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Link href={"/(drawer)"}>Abrir Drawable</Link>
		</View>
	);
}
