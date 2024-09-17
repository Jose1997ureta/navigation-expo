import { Stack } from "expo-router";

export default function HomeLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="home" />
			<Stack.Screen name="home2" />
			<Stack.Screen name="[id]" />
			<Stack.Screen
				name="(modal)/user-modal"
				options={{ presentation: "modal" }}
			/>
			<Stack.Screen
				name="(modal)/user-modal-2"
				options={{ presentation: "modal" }}
			/>
		</Stack>
	);
}
