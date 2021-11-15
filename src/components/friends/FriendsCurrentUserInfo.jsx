import { Suspense } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import {
  currentUserIDState,
  currentUserInfoQuery,
  friendsInfoQuery,
} from 'appState/friends/friends';

function FriendsCurrentUserInfo() {
  const currentUser = useRecoilValue(currentUserInfoQuery);
  const friends = useRecoilValue(friendsInfoQuery);
  const setCurrentUserID = useSetRecoilState(currentUserIDState);

  return (
    <div>
      <h1>{currentUser.name}</h1>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id} onClick={() => setCurrentUserID(friend.id)}>
            {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const Wrapper = () => (
  <>
    <Suspense fallback={<div>Loading Current User Info...</div>}>
      <FriendsCurrentUserInfo />
    </Suspense>
  </>
);

export default Wrapper;
