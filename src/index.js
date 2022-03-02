import './style.css';
import ScoreList from './app.js';

const leaderboard = new ScoreList();

window.onload = () => {
  document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    leaderboard.addScore();
  });
};
