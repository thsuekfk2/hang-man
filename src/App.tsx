import { GameOverPage } from 'pages/game/gameOver/GameOverPage';
import { GamePage } from 'pages/game/GamePage';
import { GameSuccessPage } from 'pages/game/gameSuccess/GameSuccessPage';
import { HomePage } from 'pages/home/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/gameover" element={<GameOverPage />} />
        <Route path="/gamesuccess" element={<GameSuccessPage />} />
      </Routes>
    </Router>
  );
}
