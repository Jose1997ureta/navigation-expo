import { Stack } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function App() {
	const inset = useSafeAreaInsets();

	return (
		<View
			style={{ flex: 1, paddingTop: inset.top, paddingBottom: inset.bottom }}
		>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="(home)" />
				<Stack.Screen name="(news)" />
				<Stack.Screen name="+not-found" />
			</Stack>
		</View>
	);
}
