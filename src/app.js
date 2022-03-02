export default class ScoreList {
  constructor() {
    this.list = [];
  }

  addScore() {
    const obj = {};
    obj.name = document.getElementById('name').value;
    obj.score = document.getElementById('score').value;
    if (obj.name !== '' && obj.value !== '') {
      this.list.push(obj);
      console.log(this.list);
    }
    this.populateHTML();
    document.getElementById('name').value = null;
    document.getElementById('score').value = null;
  }

  populateHTML() {
    const ScoresDiv = document.getElementById('scores');
    ScoresDiv.innerHTML = '';
    this.list.forEach((obj) => {
      const scoreDiv = document.createElement('div');
      scoreDiv.className = 'even';
      scoreDiv.innerText = `${obj.name}: ${obj.score}`;
      ScoresDiv.appendChild(scoreDiv);
    });
  }
}
