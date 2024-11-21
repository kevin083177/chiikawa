import React, { useState, useEffect } from 'react';

interface PuzzlePiece {
  index: number;
  currentPosition: number;
}

interface PieceStyle extends React.CSSProperties {
  backgroundImage: string;
  backgroundPosition: string;
  left: string;
  top: string;
}

interface Props {
  imageUrl: string;
  pieceSize?: number;
  gridSize?: number;
}

export const Test: React.FC<Props> = ({
  imageUrl = 123,
  pieceSize = 147,
  gridSize = 4
}) => {
  const [pieces, setPieces] = useState<PuzzlePiece[]>([]);
  const [draggedPiece, setDraggedPiece] = useState<number | null>(null);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const initializePuzzle = () => {
    // 創建初始位置數組
    const positions = Array.from({ length: gridSize * gridSize }, (_, i) => i);
    // 打亂位置數組
    const shuffledPositions = shuffleArray(positions);
    
    // 創建打亂的拼圖片段
    const initialPieces = Array.from(
      { length: gridSize * gridSize },
      (_, i) => ({
        index: i, // 原始位置
        currentPosition: shuffledPositions[i] // 打亂後的位置
      })
    );
    
    setPieces(initialPieces);
  };

  useEffect(() => {
    initializePuzzle();
  }, []);

  const getPieceStyle = (piece: PuzzlePiece): PieceStyle => {
    const row = Math.floor(piece.index / gridSize);
    const col = piece.index % gridSize;
    const currentRow = Math.floor(piece.currentPosition / gridSize);
    const currentCol = piece.currentPosition % gridSize;

    return {
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: `-${col * pieceSize}px -${row * pieceSize}px`,
      left: `${currentCol * pieceSize}px`,
      top: `${currentRow * pieceSize}px`,
      width: `${pieceSize}px`,
      height: `${pieceSize}px`,
      position: 'absolute',
      border: '1px solid white',
      cursor: 'move',
      transition: 'all 0.3s ease',
      backgroundSize: `${pieceSize * gridSize}px ${pieceSize * gridSize}px`
    };
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    setDraggedPiece(position);
    e.currentTarget.classList.add('dragging');
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropPosition: number) => {
    e.preventDefault();
    
    if (draggedPiece === null) return;
    
    const newPieces = [...pieces];
    const draggedIndex = newPieces.findIndex(p => p.currentPosition === draggedPiece);
    const dropIndex = newPieces.findIndex(p => p.currentPosition === dropPosition);
    
    // 交換位置
    const temp = newPieces[draggedIndex].currentPosition;
    newPieces[draggedIndex].currentPosition = newPieces[dropIndex].currentPosition;
    newPieces[dropIndex].currentPosition = temp;
    
    setPieces(newPieces);
    setDraggedPiece(null);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('dragging');
    setDraggedPiece(null);
  };

  // 檢查是否完成拼圖
  const checkCompletion = () => {
    return pieces.every(piece => piece.index === piece.currentPosition);
  };

  return (
    <div
      className="relative mx-auto"
      style={{
        width: `${pieceSize * gridSize}px`,
        height: `${pieceSize * gridSize}px`,
      }}
    >
      {pieces.map((piece) => (
        <div
          key={piece.index}
          draggable
          style={getPieceStyle(piece)}
          onDragStart={(e) => handleDragStart(e, piece.currentPosition)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, piece.currentPosition)}
          onDragEnd={handleDragEnd}
          className="puzzle-piece"
        />
      ))}
    </div>
  );
};

export default PuzzleGame;