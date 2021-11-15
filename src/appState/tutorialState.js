import { atom } from 'recoil';

const tutorialState = atom({
  key: 'tutorialState',
  default: 0,
});

export default tutorialState;
