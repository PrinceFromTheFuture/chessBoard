import { Square } from "@/interfaces/Types";

interface Props {
  background: string;
  square: Square;
  onPieceClick: any;
  selectedPiece: Square | null;
  piecePosition: { x: number; y: number };
}

export const SquareComponent = ({
  background,
  square,
  onPieceClick,
  selectedPiece,
  piecePosition,
}: Props) => {
  return (
    <div>
      <div
        className={`bg-[#${background}] w-[64px] h-[64px] flex justify-center items-center `}
        onClick={() => onPieceClick(square)}
      >
        {selectedPiece === square && (
          <div
            className="absolute pointer-events-none"
            style={{
              top: `${piecePosition.y - 40}px`,
              left: `${piecePosition.x - 40}px`,
              transition: "ease 0.01s",
            }}
          >
            <img
              src={`${square.Piece}.png`}
              alt=""
              className=" select-none drag-none  w-20"
              draggable={false}
            />
          </div>
        )}
        {selectedPiece !== square && (
          <div>
            <img
              src={`${square.Piece}.png`}
              alt=""
              className=" select-none drag-none  w-20"
              draggable={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};
