import { Button } from "@/components/button";
import { Href, useNavigation, useRouter } from "expo-router";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");
const numColumns = 2;
const itemWidth = (width - 42) / numColumns;

const Rutas = [
	{
		id: "1",
		name: "Abrir Otros",
		pathName: "/home2",
	},

	{
		id: "2",
		name: "Abrir Tab",
		pathName: "/(home)/(tabs)/config",
	},
	{
		id: "3",
		name: "Abrir Drawer",
		pathName: "/(home)/(drawer)/home",
	},
	{
		id: "4",
		name: "Abrir Drawer y Tab",
		pathName: "/(news)/(drawer)/news1",
	},
	{
		id: "5",
		name: "Pasar Parametros Navigation",
		pathName: "/JoseAntonio",
	},
	{
		id: "6",
		name: "Abrir Modal Screen",
		pathName: "/(modal)/user-modal",
	},
] as { id: string; name: string; pathName: Href<string | object> }[];

export default function Home() {
	const router = useRouter();
	const navigation = useNavigation();

	const handleNavigation = (href: any) => {
		router.navigate({
			pathname: href,
			params: {
				name: "Antonio",
			},
		});
	};

	return (
		<View style={style.container}>
			<Text style={style.title}>Rutas</Text>

			<View style={style.router}>
				{Rutas.map((el, i) => {
					const isLastRow =
						Math.ceil((i + 1) / numColumns) ===
						Math.ceil(Rutas.length / numColumns);
					return (
						<Button
							key={el.id}
							style={[
								{ width: itemWidth },
								!isLastRow ? { marginBottom: 10 } : undefined,
							]}
							onPress={() => handleNavigation(el.pathName)}
							text={el.name}
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
});
