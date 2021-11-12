import React from 'react';
import { RecoilRoot } from 'recoil';

import TutorialSwitcher from 'components/TutorialSwitcher'

const App = () => {
  return (
    <RecoilRoot>
      <TutorialSwitcher/>
    </RecoilRoot>
  );
}

export default App;
