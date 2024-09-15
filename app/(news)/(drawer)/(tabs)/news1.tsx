import { Button } from "@/components/button";
import { Href, useRouter, useSegments } from "expo-router";
import { Dimensions, StyleSheet, View } from "react-native";

const Router = [
	{
		id: "home",
		name: "Ir a Home",
		pathName: "..",
	},
] as { id: string; name: string; pathName: Href<string | object> }[];

const { width } = Dimensions.get("window");
const numColumns = 2;
const itemWidth = (width - 42) / numColumns;

export default function News1() {
	const router = useRouter();
	const segments = useSegments();
	console.log("segments", segments);
	const handleNavigate = (href: any) => {
		router.replace({
			pathname: href,
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
							onPress={() => handleNavigate(el.pathName)}
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
