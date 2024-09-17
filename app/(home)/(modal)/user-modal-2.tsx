import { Button } from "@/components/button";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function UserModelScreen() {
	const router = useRouter();

	return (
		<View style={style.container}>
			<Button text="Regresar" onPress={() => router.back()} />
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 16,
	},
});
