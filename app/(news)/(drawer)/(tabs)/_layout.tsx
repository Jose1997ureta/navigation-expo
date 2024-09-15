import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabNewLayout() {
	return (
		<Tabs initialRouteName="news1" screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name="news1"
				options={{
					title: "News 1",
					tabBarIcon: ({ focused, size }) =>
						focused ? (
							<FontAwesome name="home" color={"blue"} size={size} />
						) : (
							<FontAwesome name="home" color={"black"} size={size} />
						),
				}}
			/>
			<Tabs.Screen
				name="news2"
				options={{
					title: "News 2",

					tabBarIcon: ({ focused, size }) =>
						focused ? (
							<FontAwesome name="user" color={"blue"} size={size} />
						) : (
							<FontAwesome name="user" color={"black"} size={size} />
						),
				}}
			/>
		</Tabs>
	);
}
