'use client';

import dynamic from 'next/dynamic';

const App = dynamic(() => import('./AppShell'), {
  ssr: false,
});

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return <App />;
}
