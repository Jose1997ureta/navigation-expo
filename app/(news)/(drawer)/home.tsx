import { Button } from "@/components/button";
import {
	DrawerActions,
	useNavigation,
	useRoute,
} from "@react-navigation/native";
import { useRouter /* useNavigation */ } from "expo-router";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
	const router = useRouter();
	const navigation = useNavigation();

	const goToProfile = () => {
		// navigation.navigate({
		// 	pathname: "/(news)/(drawer)/detail",
		// 	params: {},
		// });

		// navigation.navigate("/(news)/(drawer)/detail");
		router.navigate("/detail");
	};

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Home News</Text>
			<Button text="Ir al Detalle" onPress={goToProfile} />

			<Button
				text="Ir al inicio"
				onPress={() => router.replace("/(news)/news")}
			/>
		</View>
	);
}
