import { useRecoilValue } from 'recoil';
import charCountState from 'appState/intro/charCountState'

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

export default CharacterCount;
