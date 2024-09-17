import { Stack, useSegments } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const unstable_settings = {
	// Ensure any route can link back to /
	initialRouteName: "/(home)",
};

export default function App() {
	const inset = useSafeAreaInsets();

	/* Esto se coloca por cada pantalla no deberia envolver a un stack */
	return (
		<View
			style={{ flex: 1, paddingTop: inset.top, paddingBottom: inset.bottom }}
		>
			<Stack
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName="(home)"
			>
				<Stack.Screen name="(home)" />
				<Stack.Screen name="(news)" />
				<Stack.Screen name="+not-found" />
			</Stack>
		</View>
	);
}
