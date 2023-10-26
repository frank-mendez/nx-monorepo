'use client';

import { IonContent, IonInput, IonPage } from '@ionic/react';
import styles from './page.module.scss';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonInput
          label="Outline input"
          labelPlacement="floating"
          fill="outline"
          placeholder="Enter text"
        ></IonInput>
      </IonContent>
    </IonPage>
  );
}

export default Login;
