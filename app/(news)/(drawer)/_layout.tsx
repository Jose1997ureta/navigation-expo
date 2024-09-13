import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer>
				<Drawer.Screen
					name="index"
					options={{
						title: "Listado de News",
						drawerLabel: "Home",
					}}
				/>
				<Drawer.Screen
					name="detail"
					options={{
						title: "Detalle",
						drawerLabel: "Detail",
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
}
