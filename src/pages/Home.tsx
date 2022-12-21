import {
	IonContent,
	IonCol,
	IonGrid,
	IonHeader,
	IonIcon,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
	IonItem,
} from "@ionic/react";
import { menuOutline, arrowBackOutline, locateOutline } from "ionicons/icons";
import Sidebar from "../components/SideBar";
import "./Home.css";

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar className="navbar-container">
					<IonTitle>
						<IonIcon icon={menuOutline} /> Western Downs Solar Farm - 460 MW
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonGrid className="toolbarIon" color="bg-dark">
					<IonRow>
						<IonCol className="toolbarIon" size="8">
							<IonToolbar>
								<IonGrid>
									<IonRow>
										<IonCol size="2">
											<IonIcon
												className="ion-padding-right"
												icon={arrowBackOutline}
											></IonIcon>
											Block 1
										</IonCol>
										<IonCol size="3" color="dark">
											{" "}
											Activity piling
										</IonCol>
										<IonCol size="5" style={{ color: "orange" }}>
											80%
										</IonCol>
									</IonRow>
								</IonGrid>
							</IonToolbar>
						</IonCol>
						<IonCol className="toolbarIon" size="4" style={{ height: "100vh" }}>
							<Sidebar />
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
			<IonItem
				style={{
					transform: " rotate(90deg)",
					padding: "0px",
					width: "100px",

					position: "absolute",
					bottom: "50%",
					left: "-4vh",
				}}
			>
				Section1
			</IonItem>
			<div
				style={{
					display: "block",
					backgroundColor: "#05A0FF",
					borderRadius: "50%",
				}}
			>
				<IonIcon
					icon={locateOutline}
					className="ion-margin"
					color="dark"
					style={{
						border: "1px solid 	white",
						backgroundColor: "#05A0FF",
						padding: "6px",
						borderRadius: "50%",
					}}
				/>
			</div>
		</IonPage>
	);
};

export default Home;
