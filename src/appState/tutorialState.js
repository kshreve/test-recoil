import { atom } from 'recoil'

const tutorialState = atom({
  key: 'tutorialState',
  default: 1,
});

export default tutorialState;
