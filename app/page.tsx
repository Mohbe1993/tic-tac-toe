'use client';


import Cell from "./components/Cell";
import { useEffect, useState } from "react";

const winning = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


export default function Home() {

  const [cells, setcells] = useState(['', '', '', '', '', '', '', '', '']);

  const [go, setGo] = useState('circle');

  const [wenningMsg, setWenningMsg] = useState('');

  useEffect(() => {

    winning.forEach((combo) => {
      const circlewins = combo.every((cell) => cells[cell] === 'circle');
      const crosswins = combo.every((cell) => cells[cell] === 'cross');

      if (circlewins) {
        setWenningMsg('circle wins');
      } else if (crosswins) {
        setWenningMsg('cross wins');

      }
    })
  }, [cells, wenningMsg]);

  useEffect(() => {

    if (cells.every((cell) => cell !== '' && !wenningMsg)) {
      setWenningMsg('draw !');
    }
  }, [cells, wenningMsg]);

  return (
    <main className="flex justify-center items-center h-lvh flex-col gap-5">
      <div className="gameboard w-[304px] h-[300px] border-2 border-black  flex flex-wrap ">

        {cells.map((cell, index) => (

          <Cell id={index} go={go} setGo={setGo} key={index} cells={cells} setCells={setcells} cell={cell} wenningMsg={wenningMsg} />

        ))}
      </div>

      <div className="text-[40px]">{wenningMsg}</div>

      {!wenningMsg && <div className="text-[40px]">{`it's now ${go} turn!`}</div>
      }
    </main>
  );
}
