import { useRoute } from "@react-navigation/native";
import { useNavigation, useRouter } from "expo-router";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

export default function Detail() {
	// const navigate = useNavigation("/");

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Detail</Text>

			{/* <Link href={"/(home)"}>Regresar al Inicio</Link> */}
		</View>
	);
}
