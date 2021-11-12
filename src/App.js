
import React from 'react';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './components/CharacterCounter'

function Container() {
  return (
    <RecoilRoot>
      <CharacterCounter/>
    </RecoilRoot>
  );
}

export default Container;
