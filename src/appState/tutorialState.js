import { atom } from 'recoil';

const tutorialState = atom({
  key: 'tutorialState',
  default: 2,
});

export default tutorialState;
