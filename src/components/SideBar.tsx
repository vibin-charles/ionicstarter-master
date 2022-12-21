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
			<IonContent>
				<IonCard>
					<IonGrid>
						<IonRow style={{ height: "50px", padding: "20px" }}>
							<IonCol>
								<IonIcon icon={shieldCheckmarkOutline}></IonIcon> QC Edit
							</IonCol>
							<IonCol>
								<IonIcon icon={menuOutline}></IonIcon> QC Punchlist
							</IonCol>
						</IonRow>
						<IonRow>
							<IonLabel className="ion-margin-top">
								Acceptance criteria
							</IonLabel>
						</IonRow>
						<IonRow>
							<IonInput
								placeholder="Within 
                                +/- 45mm"
								style={{ border: "1px solid white" }}
								className="ion-margin"
							/>
						</IonRow>
						<IonRow>
							<IonLabel className="ion-margin-top">Inspection Time</IonLabel>
						</IonRow>
						<IonRow>
							<IonInput
								placeholder="Visual"
								style={{ border: "1px solid white" }}
								className="ion-margin"
							/>
						</IonRow>
						<IonRow>
							<IonLabel className="ion-margin-top">Status</IonLabel>
						</IonRow>
						<IonRow>
							<IonGrid>
								<IonRow>
									<IonCol size="4">
										<IonButton
											fill="outline"
											style={{
												width: "80px",
												fontSize: "10px",
											}}
											color="dark"
										>
											Not Started
										</IonButton>
									</IonCol>
									<IonCol size="4">
										<IonButton
											style={{ fontSize: "10px" }}
											fill="outline"
											color="dark"
										>
											Pass
										</IonButton>
									</IonCol>
									<IonCol size="4">
										<IonButton
											style={{ fontSize: "10px" }}
											fill="outline"
											color="dark"
										>
											Failed
										</IonButton>
									</IonCol>
								</IonRow>
							</IonGrid>
						</IonRow>
						<IonRow>
							<IonLabel>Comment</IonLabel>
						</IonRow>
						<IonRow>
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
