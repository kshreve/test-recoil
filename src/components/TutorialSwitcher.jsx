import { useRecoilState } from 'recoil';

import tutorialState from 'appState/tutorialState';
import CharacterCounter from 'components/intro/CharacterCounter';
import TodoList from 'components/todo-list/TodoList';
import CurrentUserInfo from 'components/async-data/CurrentUserInfo';
import FriendsCurrentUserInfo from 'components/friends/FriendsCurrentUserInfo';

const TutorialSwitcher = () => {
  const tutorials = [
    <CharacterCounter />,
    <TodoList />,
    <CurrentUserInfo />,
    <FriendsCurrentUserInfo />,
  ];

  const [pageState, setPageState] = useRecoilState(tutorialState);

  return (
    <>
      <h2>Current Tutorial Page {Number(pageState) + 1}</h2>
      <div>{tutorials[pageState]}</div>

      <br />
      <div>
        <hr />
        <label htmlFor="pageState">Choose a Tutorial:</label>
        <select
          name="pageState"
          id="pageState"
          defaultValue={pageState}
          onChange={(event) => setPageState(event.target.value)}
        >
          {tutorials.map((tut, index) => (
            <option key={index} value={index}>
              {index + 1}
            </option>
          ))}
        </select>
        <hr />
      </div>
      <br />

      {tutorials
        .map((tutorial, index) => (
          <div key={index}>
            <h2>Tutorial {index + 1}</h2>
            {tutorial}

            <br />
            <hr />
          </div>
        ))
        .reverse()}
    </>
  );
};

export default TutorialSwitcher;
