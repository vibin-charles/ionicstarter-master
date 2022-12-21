import {
	IonContent,
	IonCol,
	IonGrid,
	IonIcon,
	IonPage,
	IonRow,
	IonCard,
	IonLabel,
	IonInput,
	IonButton,
	IonTextarea,
} from "@ionic/react";
import { shieldCheckmarkOutline, menuOutline } from "ionicons/icons";

const Sidebar: React.FC = () => {
	return (
		<IonPage>
			<IonContent color={"dark"}>
				<IonCard>
					<IonGrid style={{ backgroundColor: "white", padding: "0px" }}>
						<IonRow
							style={{
								height: "50px",
								padding: "0px",
								fontSize: "20px",
								fontWeight: "600",
							}}
						>
							<IonCol style={{ backgroundColor: "orange", color: "white" }}>
								<IonIcon icon={shieldCheckmarkOutline}></IonIcon> QC Edit
							</IonCol>
							<IonCol>
								<IonIcon icon={menuOutline}></IonIcon> QC Punchlist
							</IonCol>
						</IonRow>
						<IonRow style={{ padding: "10px" }}>
							<IonLabel className="ion-margin-top">
								Acceptance criteria
							</IonLabel>
						</IonRow>
						<IonRow style={{ padding: "10px" }}>
							<IonInput
								placeholder="Within 
                                +/- 45mm"
								style={{ border: "1px solid black" }}
								className="ion-margin"
							/>
						</IonRow>
						<IonRow style={{ padding: "10px" }}>
							<IonLabel className="ion-margin-top">Inspection Time</IonLabel>
						</IonRow>
						<IonRow style={{ padding: "10px" }}>
							<IonInput
								placeholder="Visual"
								style={{ border: "1px solid black" }}
								className="ion-margin"
							/>
						</IonRow>
						<IonRow style={{ padding: "10px" }}>
							<IonLabel className="ion-margin-top">Status</IonLabel>
						</IonRow>
						<IonRow style={{ padding: "10px" }}>
							<IonGrid>
								<IonRow>
									<IonCol size="4">
										<IonButton
											fill="outline"
											style={{
												width: "80px",
												fontSize: "10px",
											}}
											color="light"
										>
											Not Started
										</IonButton>
									</IonCol>
									<IonCol size="4">
										<IonButton
											style={{ fontSize: "10px" }}
											fill="outline"
											color="light"
										>
											Pass
										</IonButton>
									</IonCol>
									<IonCol size="4">
										<IonButton
											style={{ fontSize: "10px" }}
											fill="outline"
											color="light"
										>
											Failed
										</IonButton>
									</IonCol>
								</IonRow>
							</IonGrid>
						</IonRow>
						<IonRow style={{ padding: "10px" }}>
							<IonLabel>Comment</IonLabel>
						</IonRow>
						<IonRow style={{ padding: "10px" }}>
							<IonTextarea
								style={{ border: "1px solid white" }}
								rows={5}
								placeholder="BHA pin on Pier G not centered"
								className="ion-margin"
							/>
						</IonRow>
						<IonRow style={{ justifyContent: "center" }}>
							<IonButton color={"danger"}>APPLY TO SELECTED TRACKERS</IonButton>
						</IonRow>
					</IonGrid>
				</IonCard>
			</IonContent>
		</IonPage>
	);
};

export default Sidebar;
