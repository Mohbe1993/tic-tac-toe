import { Dispatch, SetStateAction } from "react";

type CellProps = {
    id: number;
    go: string;
    setGo: Dispatch<SetStateAction<string>>;
    cells: string[];
    setCells: Dispatch<SetStateAction<string[]>>;
    cell: string;
    wenningMsg: string;

}


const Cell = ({ go, setGo, id, cells, setCells, cell, wenningMsg }: CellProps) => {


    const handleClick = () => {

        if (wenningMsg) {
            return;

        }
        const notTaken = !cells[id];

        if (notTaken) {
            if (go === 'circle') {

                handleCellChange('circle');
                setGo('cross');
            } else if (go === 'cross') {
                handleCellChange('cross');

                setGo('circle');

            }
        }
    }


    const handleCellChange = (cellToChange: string) => {

        const copyCells = [...cells];
        copyCells[id] = cellToChange;
        setCells(copyCells);
    }


    return <div className="square w-[100px] h-[100px] border-2 border-black box-border flex justify-center items-center " onClick={handleClick}>
        <div className={cell}>{cell ? (cell === "circle" ? 'O' : 'X') : ''}</div>

    </div>

}

export default Cell