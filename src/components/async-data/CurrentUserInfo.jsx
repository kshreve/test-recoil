import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';

import { currentUserNameQuery } from 'appState/async-data/userState';

function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameQuery);

  return (
    <Suspense fallback={<div>Loading Current User Info...</div>}>
      <div>
        <div>{userName}</div>
      </div>
    </Suspense>
  );
}

export default CurrentUserInfo;
