import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';

import { currentUserNameQuery } from 'appState/async-data/userState';

function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameQuery);

  return (
    <div>
      <div>{userName}</div>
    </div>
  );
}

const Wrapper = () => (
  <Suspense fallback={<div>Loading Current User Info...</div>}>
    <CurrentUserInfo />
  </Suspense>
);

export default Wrapper;
