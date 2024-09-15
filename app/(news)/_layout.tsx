import { Stack } from "expo-router";

export default function NewsLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="(drawer)" />
		</Stack>
	);
}
