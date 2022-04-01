import './gameRule.css';

export default function GameRule() {
  return (
    <div className="App">
    <h1 className="title">Welcome to the Wordle Game</h1>
    <div className="box">
      <p>
        Wordle, the once-a-day game, was created by a New York software
        engineer who made a prototype several years ago and dusted it off
        during the pandemic. Wordle is at its heart a very simple game.
      </p>
    </div>
    <div className="rules">
      <p>Wordle is such a simple game that there are hardly any rules:</p>
      <p>💪 Select one of 3 difficulties for this game</p>
      <p>💪 You have to guess the Wordle</p>
      <p>💪 Every word you enter must be in the word list</p>
      <p>💪 A correct letter turns green</p>
      <p>💪 A correct letter in the wrong place turns yellow</p>
      <p>💪 An incorrect letter turns gray</p>
      <p>💪 Letters can be used more than once</p>
    </div>
  </div>
  )
}
