import { Href, Link } from "expo-router";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");
const numColumns = 2;
const itemWidth = (width - 42) / numColumns;

const Rutas = [
	{
		id: "1",
		name: "Abrir Home 2",
		pathName: "/home2",
	},
	{
		id: "2",
		name: "Abrir News",
		pathName: "/news",
	},
	{
		id: "3",
		name: "Abrir Tab",
		pathName: "/(tabs)",
	},
	{
		id: "4",
		name: "Abrir Drawer",
		pathName: "/(drawer)",
	},
] as { id: string; name: string; pathName: Href<string | object> }[];

export default function Home() {
	return (
		<View style={style.container}>
			<Text style={style.title}>Rutas</Text>

			<View style={style.router}>
				{Rutas.map((el, i) => {
					const isLastRow =
						Math.ceil((i + 1) / numColumns) ===
						Math.ceil(Rutas.length / numColumns);
					return (
						<Link
							key={el.id}
							style={[
								style.link,
								{ width: itemWidth },
								!isLastRow ? { marginBottom: 10 } : undefined,
							]}
							href={el.pathName}
						>
							{el.name}
						</Link>
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
	title: {
		fontSize: 20,
		textDecorationLine: "underline",
		fontWeight: "700",
		marginBottom: 16,
	},
	router: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	link: {
		color: "white",
		backgroundColor: "tomato",
		padding: 8,
		borderRadius: 6,
		fontSize: 12,
		fontWeight: "500",
	},
});
