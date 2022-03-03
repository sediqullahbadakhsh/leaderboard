import * as api from './gameapi.js';

const addToLeaderboard = (data) => {
  const formtxt = document.querySelector('form > p');
  if (data.score === '' || data.name === '') {
    formtxt.innerHTML = 'Fill all the empty fields';
    formtxt.style.color = 'red';
    return;
  }
  api.setData(data.user, data.score).then((recieved) => {
    formtxt.innerHTML = recieved.result;
    formtxt.style.color = 'green';
  });
};

const displayLeaderboard = () => {
  const scoreListSection = document.querySelector('.scores');
  scoreListSection.innerHTML = '';
  api.getData().then((dataList) => {
    if (!dataList) {
      return;
    }
    const arrangedList = dataList.result.sort((a, b) => b.score - a.score);
    arrangedList.forEach((data) => {
      const li = document.createElement('li');
      li.innerHTML = `${data.user}:  ${data.score}`;
      scoreListSection.appendChild(li);
    });
  });
};

export { addToLeaderboard, displayLeaderboard };
