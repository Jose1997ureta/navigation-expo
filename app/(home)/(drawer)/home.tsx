import { Button } from "@/components/button";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useRouter /* useNavigation */ } from "expo-router";
import { View } from "react-native";

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

	const hanbleOpenDrawer = () => {
		navigation.dispatch(DrawerActions.openDrawer());
	};

	return (
		<View style={{ flex: 1, padding: 16 }}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Button
					text="Ir al Detalle"
					onPress={goToProfile}
					style={{ width: "49%" }}
				/>

				<Button
					text="Abrir el drawer"
					onPress={hanbleOpenDrawer}
					style={{ width: "49%" }}
				/>
			</View>
		</View>
	);
}
