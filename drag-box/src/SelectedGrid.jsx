import React, { useEffect, useState } from "react";

const SelectedGrid = () => {
  const [grid, setGrid] = useState([]);
  const [startPos, setStartPos] = useState([]);
  const [endPos, setEndPos] = useState([]);
  const [selectedBox, setSelectedBox] = useState([]);

  const createMatrix = () => {
    let matrix = [];
    for (let i = 0; i <= 9; i++) {
      //row
      for (let j = 0; j <= 9; j++) {
        //cols
        matrix.push({ pos: [i, j] });
      }
    }

    setGrid(matrix);
  };
  const handleDrag = (startPoint) => {
    console.log(startPoint);
    
    setStartPos(startPoint);
  };
  const handleDragOver = (endPoint) => {
    setEndPos(endPoint);
  };
  const selectedGrids = () => {
    let [startRow, startCols] = startPos;
    let [endRow, endCols] = endPos;

    let selecteds = [];
    for (let i = startRow; i <= endRow; i++) {
      for (let j = startCols; j <= endCols; j++) {
        selecteds.push({ pos: [i, j].join('') });
      }
    }
    console.log(selecteds);

    setSelectedBox(selecteds);
  };
  useEffect(() => {
    if (startPos && endPos) {
      selectedGrids();
    }
  }, [startPos, endPos]);
  useEffect(() => {
    createMatrix();
  }, []);
  const clearAll = () =>{
    setSelectedBox([])
  }
  return (
    <div>
      <div className="grid-container">
        <div className="grid">
          {grid.map((curItem, index) => {
            let isSelected = selectedBox.some((curVal)=>{
                return curItem.pos.join('') === curVal.pos
            })
            return (
              <div
                key={index}
                draggable
                onDrag={() => handleDrag(curItem.pos)}
                onDragOver={() => handleDragOver(curItem.pos)}
                className={isSelected ? "selected-box":"box"}
              >
                {curItem.pos}
              </div>
            );
          })}
        </div>
      </div>
      <div className="clear">
        <button onClick={clearAll}>Clear All</button>
      </div>
    </div>
  );
};

export default SelectedGrid;
