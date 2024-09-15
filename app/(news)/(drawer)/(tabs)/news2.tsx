import { Button } from "@/components/button";
import { Href, useNavigation, useRouter } from "expo-router";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const Router = [
	{
		id: "news1",
		name: "Ir a News1",
	},
] as { id: string; name: string }[];

const { width } = Dimensions.get("window");
const numColumns = 2;
const itemWidth = (width - 42) / numColumns;

export default function News2() {
	const router = useRouter();

	const handleNavigate = () => {
		router.navigate({
			pathname: "/news1",
		});
	};

	return (
		<View style={style.container}>
			<View style={style.router}>
				{Router.map((el, i) => {
					const isLastRow =
						Math.ceil((i + 1) / numColumns) ===
						Math.ceil(Router.length / numColumns);

					return (
						<Button
							style={[
								{ width: itemWidth },
								!isLastRow ? { marginBottom: 10 } : undefined,
							]}
							key={el.id}
							text={el.name}
							onPress={handleNavigate}
						/>
					);
				})}
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 20,
	},
	router: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
});
