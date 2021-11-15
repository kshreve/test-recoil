import React from 'react';
import { RecoilRoot } from 'recoil';

import TutorialSwitcher from 'components/TutorialSwitcher';

const App = () => (
  <RecoilRoot>
    <React.Suspense fallback={<div>Loading App...</div>}>
      <TutorialSwitcher />
    </React.Suspense>
  </RecoilRoot>
);

export default App;
