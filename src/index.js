import './style.css';
import * as util from './modules/app.js';

const name = document.getElementById('name');
const score = document.getElementById('score');
const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  util.addToLeaderboard({ user: name.value, score: score.value });
  score.value = '';
  name.value = '';
  setTimeout(() => {
    refresh.click();
  }, 1500);
});

refresh.addEventListener('click', () => {
  util.displayLeaderboard();
});

window.addEventListener('load', () => {
  util.displayLeaderboard();
});
