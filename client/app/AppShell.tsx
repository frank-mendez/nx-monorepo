'use client';

import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import dynamic from 'next/dynamic';
import { Route } from 'react-router-dom';
import Dashboard from './dashboard/page';

const Login = dynamic(() => import('./login/page'), { ssr: false });

const AppShell = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/login" render={() => <Login />} />
          <Route path="/" render={() => <Dashboard />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
