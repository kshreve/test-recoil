import { atom } from 'recoil';

const tutorialState = atom({
  key: 'tutorialState',
  default: 3,
});

export default tutorialState;
