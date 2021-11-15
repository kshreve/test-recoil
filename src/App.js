import React from 'react';
import { RecoilRoot } from 'recoil';

import TutorialSwitcher from 'components/TutorialSwitcher';
import ErrorBoundary from 'components/ErrorBoundary';

const App = () => (
  <RecoilRoot>
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading App...</div>}>
        <TutorialSwitcher />
      </React.Suspense>
    </ErrorBoundary>
  </RecoilRoot>
);

export default App;
