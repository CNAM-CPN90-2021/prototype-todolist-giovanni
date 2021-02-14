import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonSegment, IonSegmentButton, IonFooter, IonInput, IonButtons, IonButton, IonList, IonContent } from "@ionic/react";
import Objet from '../components/Objet';
import './Accueil.css';



export default () => {

    const [todoPage, setTodoPage] = useState('todo'); //variable réactive
    const handleChange = (e) => { //détecte la vue de mes pages
        setTodoPage(e.detail.value);
        console.log(e); //affiche le détail du chemin
    }

    const [textInput, setTextInput] = useState('');
    const handleInput = (e) => {
        setTextInput(e.detail.value);
        console.log(textInput);
    }

    


 return (
     <IonPage>
         <IonHeader>
             <IonToolbar>
                 <IonSegment value={todoPage} onIonChange={handleChange}>
                 <IonSegmentButton value='todo'>A faire</IonSegmentButton>
                 <IonSegmentButton value='all'>Tous</IonSegmentButton>
                 </IonSegment>
             </IonToolbar>
         </IonHeader>
         <IonContent fullscreen>
            <Objet />
         </IonContent>
         <IonFooter>
             <IonToolbar>
                <IonInput placeholder="Qu'as tu en tête ?" className='input' value={textInput} onIonChange={handleInput}>
                </IonInput>
                <IonButton slot='end' disabled={textInput.length == 0}>Créer</IonButton>
            </IonToolbar>
         </IonFooter>
     </IonPage>
 )
} 