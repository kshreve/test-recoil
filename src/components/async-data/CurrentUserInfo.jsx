import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';

import { userNameQuery } from 'appState/async-data/userState';

function CurrentUserInfo({ userId }) {
  const userName = useRecoilValue(userNameQuery(userId));

  return (
    <div>
      <div>{userName}</div>
    </div>
  );
}

const Wrapper = () => (
  <>
    <Suspense fallback={<div>Loading Current User Info...</div>}>
      <CurrentUserInfo userId={1} />
    </Suspense>
    <Suspense fallback={<div>Loading Current User Info...</div>}>
      <CurrentUserInfo userId={2} />
    </Suspense>
  </>
);

export default Wrapper;
