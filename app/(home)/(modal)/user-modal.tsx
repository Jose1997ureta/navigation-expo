import { Button } from "@/components/button";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function UserModelScreen() {
	const router = useRouter();
	return (
		<View style={style.container}>
			<View style={style.modal}>
				<Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 6 }}>
					Modo de Uso{" "}
				</Text>
				<Text style={{ marginBottom: 6 }}>
					Es se utiliza para mostrar pantallas temporales que se requierar
					varias pantallas anidadas como:{" "}
				</Text>
				<Text style={{ fontSize: 14, marginBottom: 6 }}>
					- Formulario de varios pasos{" "}
				</Text>

				<Button
					text="User 2"
					onPress={() => router.navigate("/user-modal-2")}
				/>
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
