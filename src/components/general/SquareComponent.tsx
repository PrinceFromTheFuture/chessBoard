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
        className={` w-[32px] h-[32px] lg:w-[128px] lg:h-[128px]  flex justify-center items-center `}
        onClick={(event) => onPieceClick(event, square)}
        style={{ backgroundColor: `#${background}` }}
      >
        {selectedPiece === square && square.Piece !== undefined && (
          <div
            className="absolute pointer-events-none transition-all ease  "
            style={{
              top: `${piecePosition.y}px`,
              left: `${piecePosition.x}px`,
              transition: "ease 0.01s",
            }}
          >
            <img
              src={`${square.Piece}.png`}
              alt=""
              className=" select-none drag-none  w-14 lg:w-52 "
              draggable={false}
            />
          </div>
        )}
        {selectedPiece !== square && square.Piece !== undefined && (
          <div>
            <img
              src={`${square.Piece}.png`}
              alt=""
              className=" select-none drag-none "
              draggable={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};
