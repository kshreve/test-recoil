import React from 'react';
import { RecoilRoot } from 'recoil';

import TutorialSwitcher from 'components/TutorialSwitcher';

const App = () => (
  <RecoilRoot>
    <TutorialSwitcher />
  </RecoilRoot>
);

export default App;
