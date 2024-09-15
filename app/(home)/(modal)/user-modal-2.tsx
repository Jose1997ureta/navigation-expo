import { Button } from "@/components/button";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function UserModelScreen() {
	const router = useRouter();

	return (
		<View style={style.container}>
			<View style={style.modal}>
				<Button text="Regresar" onPress={() => router.back()} />
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "rgba(0,0,0,0.5)",
		paddingHorizontal: 16,
		paddingVertical: 16,
	},
	modal: {
		backgroundColor: "white",
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 16,
		borderRadius: 6,
	},
});
