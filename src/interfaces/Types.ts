export type Piece = "wp" | "wk" | "wr" | "wq" | "wn" | "wb"| "bb" |"bp" | "bk" | "br" | "bq" | "bn" | "bb" 

export interface Square{
    Line: number;
    Row: number;
    Piece?: Piece
  };


  
    