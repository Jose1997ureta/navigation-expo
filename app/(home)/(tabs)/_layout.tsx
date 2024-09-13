import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Home2Layout() {
	return (
		<Tabs
			initialRouteName="config"
			// screenOptions={{
			// 	tabBarIcon: ({}) => <FontAwesome name="home" />,
			// }}
		>
			<Tabs.Screen
				name="config"
				options={{
					title: "Config",
					tabBarIcon: ({ focused, size }) =>
						focused ? (
							<FontAwesome name="home" color={"blue"} size={size} />
						) : (
							<FontAwesome name="home" color={"black"} size={size} />
						),
				}}
			/>
			<Tabs.Screen
				name="perfil"
				options={{
					title: "Perfil",

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
