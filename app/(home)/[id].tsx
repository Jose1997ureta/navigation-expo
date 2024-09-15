import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function HomeId() {
	const local = useLocalSearchParams();

	return (
		<View style={{ flex: 1 }}>
			<Text>Homa {JSON.stringify(local)}</Text>
		</View>
	);
}
