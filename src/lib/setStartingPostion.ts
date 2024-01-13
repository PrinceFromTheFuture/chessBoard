import { Square } from "@/interfaces/Types";

export const setStartingPostion = (emptyBoard :Square[]):Square[] =>{

    let startingPostion:Square[] = emptyBoard

    startingPostion[0] = {...emptyBoard[0], Piece: 'br'}
    startingPostion[1] = {...emptyBoard[1], Piece: 'bn'}
    startingPostion[2] = {...emptyBoard[2], Piece: 'bb'}
    startingPostion[3] = {...emptyBoard[3], Piece: 'bq'}
    startingPostion[4] = {...emptyBoard[4], Piece: 'bk'}
    startingPostion[5] = {...emptyBoard[5], Piece: 'bb'}
    startingPostion[6] = {...emptyBoard[6], Piece: 'bn'}
    startingPostion[7] = {...emptyBoard[7], Piece: 'br'}

    startingPostion[8] = {...emptyBoard[8], Piece: 'bp'}
    startingPostion[9] = {...emptyBoard[9], Piece: 'bp'}
    startingPostion[10] = {...emptyBoard[10], Piece: 'bp'}
    startingPostion[11] = {...emptyBoard[11], Piece: 'bp'}
    startingPostion[12] = {...emptyBoard[12], Piece: 'bp'}
    startingPostion[13] = {...emptyBoard[13], Piece: 'bp'}
    startingPostion[14] = {...emptyBoard[14], Piece: 'bp'}
    startingPostion[15] = {...emptyBoard[15], Piece: 'bp'}

    startingPostion[48] = {...emptyBoard[48], Piece: 'wp'}
    startingPostion[49] = {...emptyBoard[49], Piece: 'wp'}
    startingPostion[50] = {...emptyBoard[50], Piece: 'wp'}
    startingPostion[51] = {...emptyBoard[51], Piece: 'wp'}
    startingPostion[52] = {...emptyBoard[52], Piece: 'wp'}
    startingPostion[53] = {...emptyBoard[53], Piece: 'wp'}
    startingPostion[54] = {...emptyBoard[54], Piece: 'wp'}
    startingPostion[55] = {...emptyBoard[55], Piece: 'wp'}

    startingPostion[56] = {...emptyBoard[56], Piece: 'wr'}
    startingPostion[57] = {...emptyBoard[57], Piece: 'wn'}
    startingPostion[58] = {...emptyBoard[58], Piece: 'wb'}
    startingPostion[59] = {...emptyBoard[59], Piece: 'wq'}
    startingPostion[60] = {...emptyBoard[60], Piece: 'wk'}
    startingPostion[61] = {...emptyBoard[61], Piece: 'wb'}
    startingPostion[62] = {...emptyBoard[62], Piece: 'wn'}
    startingPostion[63] = {...emptyBoard[63], Piece: 'wr'}

    return startingPostion

}