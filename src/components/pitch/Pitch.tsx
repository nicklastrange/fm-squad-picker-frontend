import {FC, ReactElement, useCallback, useState} from "react";
import './Pitch.css';
import Player from "../Player";

const initialPlayerList = [
    //forwards
    {id: 0, isActive: false},
    {id: 1, isActive: true},
    {id: 2, isActive: false},
    {id: 3, isActive: true},
    {id: 4, isActive: false},
    //attacking midfielders
    {id: 5, isActive: false},
    {id: 6, isActive: false},
    {id: 7, isActive: false},
    {id: 8, isActive: false},
    {id: 9, isActive: false},
    //midfielders
    {id: 10, isActive: true},
    {id: 11, isActive: true},
    {id: 12, isActive: false},
    {id: 13, isActive: true},
    {id: 14, isActive: true},
    //defensive midfielders
    {id: 15, isActive: false},
    {id: 16, isActive: false},
    {id: 17, isActive: false},
    {id: 18, isActive: false},
    {id: 19, isActive: false},
    //defenders
    {id: 20, isActive: true},
    {id: 21, isActive: true},
    {id: 22, isActive: false},
    {id: 23, isActive: true},
    {id: 24, isActive: true},
    //goalkeeper
    {id: 25, isActive: false},
    {id: 26, isActive: false},
    {id: 27, isActive: true},
    {id: 28, isActive: false},
    {id: 29, isActive: false},
];

interface PitchProps {
    width: number;
    height: number;
}

const Pitch: FC<PitchProps> = (props): ReactElement => {

    const [playerList, setPlayerList] = useState(initialPlayerList);

    const swapItems = (dragged: number, droppedOn: number) => {
        if (dragged === droppedOn) return;
        let draggedIndex = playerList.findIndex(item => item.id === dragged);
        let droppedOnIndex = playerList.findIndex(item => item.id === droppedOn);
        let tmp = playerList[draggedIndex];
        playerList[draggedIndex] = playerList[droppedOnIndex];
        playerList[droppedOnIndex] = tmp;
        setPlayerList([...playerList]);
    };

    const pitchStyles = {
        height: `${props.height}px`,
        width: `${props.width}px`,
    };

    return <div className="pitch" style={pitchStyles}>
        {playerList.map(item => <Player key={item.id} id={item.id} isActive={item.isActive} swapItems={swapItems}/>)}
    </div>
}

export default Pitch;