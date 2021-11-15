import { atom, selectorFamily, selector, waitForNone } from 'recoil';

export const currentUserIDState = atom({
  key: 'CurrentUserID',
  default: 1,
});

const tableOfUsers = [
  { id: 1, name: 'Kevin', friendList: [2, 3] },
  { id: 2, name: 'Wesley', friendList: [1, 3] },
  { id: 3, name: 'Madison', friendList: [1, 2] },
];

const fakeDelay = () => new Promise((resolve) => setTimeout(resolve, 5000));

const myDBQuery = async ({ userId }) => {
  await fakeDelay();

  return tableOfUsers.find((user) => user.id === userId);
};

const userInfoQuery = selectorFamily({
  key: 'UserInfoQuery',
  get: (userId) => async () => {
    console.log(userId);
    const response = await myDBQuery({ userId });

    if (response.error) {
      throw response.error;
    }

    return response;
  },
});

export const currentUserInfoQuery = selector({
  key: 'CurrentUserInfoQuery',
  get: ({ get }) => get(userInfoQuery(get(currentUserIDState))),
});

export const friendsInfoQuery = selector({
  key: 'FriendsInfoQuery',
  get: ({ get }) => {
    const { friendList } = get(currentUserInfoQuery);

    const friendLoadables = get(waitForNone(friendList.map((friendID) => userInfoQuery(friendID))));

    return friendLoadables
      .filter(({ state }) => state === 'hasValue')
      .map(({ contents }) => contents);
  },
});
