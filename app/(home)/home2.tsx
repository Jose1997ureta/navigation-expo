import { Button } from "@/components/button";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Modal, StyleSheet, Text, View } from "react-native";

export default function Home2() {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isOpenCenter, setIsOpenCenter] = useState<boolean>(false);

	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleOpenCenter = () => {
		setIsOpenCenter(true);
	};

	return (
		<View style={styled.container}>
			<Text style={styled.title}>Mostrar el Modal PopOver</Text>
			<Button
				text="Abrir Modal - Full"
				onPress={handleOpen}
				style={{ marginBottom: 6 }}
			/>
			<Button text="Abrir Modal - Center" onPress={handleOpenCenter} />

			{/* FullScreen */}

			<Modal
				visible={isOpen}
				transparent={true}
				animationType="slide"
				onRequestClose={() => setIsOpen(false)}
			>
				<View style={styled.modal}>
					<Button text="Cerrar Modal" onPress={() => setIsOpen(false)} />
				</View>
			</Modal>

			{/*  Center */}

			<Modal
				visible={isOpenCenter}
				transparent={true}
				animationType="fade"
				onRequestClose={() => setIsOpenCenter(false)}
			>
				<View style={styled.modalContainerCenter}>
					<View style={styled.modalCenter}>
						<Button
							text="Cerrar Modal"
							onPress={() => setIsOpenCenter(false)}
						/>
					</View>
				</View>
			</Modal>
		</View>
	);
}

const styled = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 16,
	},
	title: {
		fontSize: 18,
		marginBottom: 6,
	},
	modal: {
		backgroundColor: "white",
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 16,
	},
	modalContainerCenter: {
		flex: 1,
		backgroundColor: "rgba(0,0,0,0.5)",
		justifyContent: "center",
		alignItems: "center",
	},
	modalCenter: {
		backgroundColor: "white",
		height: "40%",
		width: "90%",
		paddingHorizontal: 16,
		paddingVertical: 16,
		borderRadius: 10,
	},
});
