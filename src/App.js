import { useState, useEffect } from 'react';
import './App.css'
import { HoveredList } from './components/HoveredList';
import { Select } from './components/Select';
import { SquareList } from './components/SquareList';
import { getAllModes } from './services/api';

function App() {
  const [currentMode, setCurrentMode] = useState(null);
  const [allModes, seAllModes] = useState([])
  const [squares, setSquares] = useState([]);
  const [hoveredSquares, setHoveredSquares] = useState([]);

  const handleSquareHover = (id, rowIndex, colIndex) => {
    const isHovered = hoveredSquares?.some((hovered) => hovered?.id === id)
    if (isHovered) {
      setHoveredSquares(prev => (prev.filter((hovered) => hovered.id !== id)));
      setSquares(prev => {
        const newSquares = [...prev];
        newSquares[rowIndex][colIndex].color = 'white';
        return newSquares;
      });
    }
    else {
      setHoveredSquares(prev => ([...prev, { id, rowIndex, colIndex }]));
      setSquares(prev => {
        const newSquares = [...prev];
        newSquares[rowIndex][colIndex].color = 'skyblue';
        return newSquares;
      });
    }
  };

  const handleModeSelect = (mode) => {
    setCurrentMode(mode);
    setSquares([]);
    setHoveredSquares([]);
  };

  const generateSquares = () => {
    if (currentMode) {
      const newSquares = [];
      let id = 1
      for (let i = 0; i < currentMode; i++) {
        newSquares[i] = [];
        for (let j = 0; j < currentMode; j++) {
          newSquares[i][j] = { id, color: 'white', rowIndex: i, colIndex: j }
          id++
        }
      }
      setSquares(newSquares);
      setHoveredSquares([]);
    }
  }

  useEffect(() => {
    getAllModes()
      .then(response => seAllModes(response))
      .catch(error => console.error('Error fetching app mode', error));
  }, []);

  return (
    <main>
      <div className='squares-container'>
        <div>
          <h2>Select App Mode</h2>
          <div className='select-container'>
            {allModes && <>
              <Select
                allModes={allModes}
                handleModeSelect={handleModeSelect}
              />
              <button className='btn' onClick={generateSquares}>Start</button> </>}
          </div>

          <SquareList
            squares={squares}
            handleSquareHover={handleSquareHover}
            currentMode={currentMode}
          />
        </div>

        <div>
          <h2>Hovered Squares</h2>
          <HoveredList
            hoveredSquares={hoveredSquares}
          />
        </div>
      </div>
    </main>
  )
}

export default App