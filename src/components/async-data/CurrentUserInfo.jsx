import { useRecoilValue } from 'recoil';

import { currentUserNameState } from 'appState/async-data/userState';

function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameState);

  return <div>{userName}</div>;
}

export default CurrentUserInfo;
