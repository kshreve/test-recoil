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
