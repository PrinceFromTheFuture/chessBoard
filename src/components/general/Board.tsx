import { useEffect, useState } from "react";
import { SquareComponent } from "./SquareComponent";
import { Square } from "@/interfaces/Types";
import { setStartingPostion } from "@/lib/setStartingPostion";

export const Board = () => {
  const [board, setBoard] = useState<Square[]>([]);
  let isBasicPosition = true;

  const BoardInitilazation = (): void => {
    let emptyBoard: Square[] = [];
    for (let row = 1; row < 9; row++) {
      for (let line = 1; line < 9; line++) {
        emptyBoard = [...emptyBoard, { Line: line, Row: row }];
      }
    }

    if (isBasicPosition == true) {
      let basicBoardPostion = setStartingPostion(emptyBoard);
      setBoard(basicBoardPostion);
    } else {
      setBoard(emptyBoard);
    }
  };

  useEffect(() => {
    BoardInitilazation();
  }, []);

  const [selectedPiece, setSelectedPiece] = useState<Square | null>(null);
  const [piecePosition, setPiecePosition] = useState({ x: 0, y: 0 });

  const onPieceClick = (square: Square) => {
    if (selectedPiece !== null) {
      setSelectedPiece(null);

      let OverideOldPiece: Square[] = board.map((oldSquare) => {
        if (oldSquare === square) {
          return {
            Line: square.Line,
            Row: square.Row,
            Piece: selectedPiece.Piece,
          };
        } else {
          return oldSquare;
        }
      });

      let removeOldPiece = OverideOldPiece.map((oldSquare) => {
        return oldSquare !== selectedPiece
          ? oldSquare
          : { Line: selectedPiece.Line, Row: selectedPiece.Row };
      });
      console.log(removeOldPiece);

      setBoard(removeOldPiece);
      setPiecePosition({ x: 5000, y: 5000 });
    } else {
      setSelectedPiece(square);
    }
  };

  const onPieceDrag = (event: any) => {
    if (selectedPiece !== null) {
      setPiecePosition({ x: event.clientX, y: event.clientY });
    }
  };

  return (
    <div
      className="flex justify-center items-center  w-[512px] flex-wrap"
      onMouseMove={onPieceDrag}
    >
      {board.map((square, index) => {
        return (
          <SquareComponent
            key={index}
            square={square}
            background={
              square.Row % 2 === 0
                ? square.Line % 2 === 1
                  ? "7A985A"
                  : "E9EDCE"
                : square.Line % 2 === 0
                ? "7A985A"
                : "E9EDCE"
            }
            piecePosition={piecePosition}
            selectedPiece={selectedPiece}
            onPieceClick={onPieceClick}
          />
        );
      })}
    </div>
  );
};
