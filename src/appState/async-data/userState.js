import { atom, selector } from 'recoil';

const tableOfUsers = [{ name: 'kevin' }, { name: 'wesley' }];

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

const fakeDelay = () => new Promise((resolve) => setTimeout(resolve, 5000));

const getUserNameDelayed = async ({ userId }) => {
  await fakeDelay();

  return tableOfUsers[userId].name;
};

export const currentUserNameQuery = selector({
  key: 'currentUserNameQuery',
  get: async ({ get }) =>
    getUserNameDelayed({
      userId: get(currentUserIDState),
    }),
});
