import { atom, selector, selectorFamily } from 'recoil';

const tableOfUsers = [{ name: 'Kevin' }, { name: 'Wesley' }, { name: 'Madison' }];

export const currentUserIDState = atom({
  key: 'CurrentUserID',
  default: 1,
});

export const currentUserNameState = selector({
  key: 'CurrentUserName',
  get: ({ get }) => {
    return tableOfUsers[get(currentUserIDState)].name;
  },
});

const fakeDelay = () => new Promise((resolve) => setTimeout(resolve, 2500));

const getUserDelayed = async ({ userId }) => {
  await fakeDelay();

  return tableOfUsers[userId];
};

export const currentUserNameQuery = selector({
  key: 'currentUserNameQuery',
  get: async ({ get }) => {
    const l = await getUserDelayed({
      userId: get(currentUserIDState),
    });

    return l.name;
  },
});

export const userNameQuery = selectorFamily({
  key: 'UserName',
  get: (userId) => async () => {
    const response = await getUserDelayed({ userId });

    if (response.error) {
      throw response.error;
    }

    return response.name;
  },
});
