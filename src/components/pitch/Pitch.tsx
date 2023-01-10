import {FC, ReactElement, useState} from "react";
import './Pitch.css';
import Player from "../Player";
import {Position} from "../../model/Position";

const initialPlayerList = [
    //forwards
    {id: 0, isActive: false, position: Position.ST},
    {id: 1, isActive: true, position: Position.ST},
    {id: 2, isActive: false, position: Position.ST},
    {id: 3, isActive: true, position: Position.ST},
    {id: 4, isActive: false, position: Position.ST},
    //attacking midfielders
    {id: 5, isActive: false, position: Position.AMF},
    {id: 6, isActive: false, position: Position.AMF},
    {id: 7, isActive: false, position: Position.AMF},
    {id: 8, isActive: false, position: Position.AMF},
    {id: 9, isActive: false, position: Position.AMF},
    //midfielders
    {id: 10, isActive: true, position: Position.MF},
    {id: 11, isActive: true, position: Position.MF},
    {id: 12, isActive: false, position: Position.MF},
    {id: 13, isActive: true, position: Position.MF},
    {id: 14, isActive: true, position: Position.MF},
    //defensive midfielders
    {id: 15, isActive: false, position: Position.DMF},
    {id: 16, isActive: false, position: Position.DMF},
    {id: 17, isActive: false, position: Position.DMF},
    {id: 18, isActive: false, position: Position.DMF},
    {id: 19, isActive: false, position: Position.DMF},
    //defenders
    {id: 20, isActive: true, position: Position.DEF},
    {id: 21, isActive: true, position: Position.DEF},
    {id: 22, isActive: false, position: Position.DEF},
    {id: 23, isActive: true, position: Position.DEF},
    {id: 24, isActive: true, position: Position.DEF},
    //goalkeeper
    {id: 25, isActive: false, position: Position.DEF},
    {id: 26, isActive: false, position: Position.DEF},
    {id: 27, isActive: true, position: Position.DEF},
    {id: 28, isActive: false, position: Position.DEF},
    {id: 29, isActive: false, position: Position.DEF}
];

interface PitchProps {
    width: number;
    height: number;
}

const Pitch: FC<PitchProps> = (props): ReactElement => {

    const [playerList, setPlayerList] = useState(initialPlayerList);

    const swapPlayers = (dragged: number, droppedOn: number) => {
        if (dragged === droppedOn) return;

        let draggedIndex = playerList.findIndex(item => item.id === dragged);
        let droppedOnIndex = playerList.findIndex(item => item.id === droppedOn);
        let draggedPlayer = playerList[draggedIndex];
        let draggedPlayerPosition = draggedPlayer.position;
        let droppedOnPlayer = playerList[droppedOnIndex];

        draggedPlayer["position"] = droppedOnPlayer.position;
        droppedOnPlayer["position"] = draggedPlayerPosition;

        playerList[draggedIndex] = droppedOnPlayer;
        playerList[droppedOnIndex] = draggedPlayer;

        setPlayerList([...playerList]);
    };

    const pitchStyles = {
        height: `${props.height}px`,
        width: `${props.width}px`,
    };

    return <div className="pitch" style={pitchStyles}>
        {playerList.map(item => <Player key={item.id} id={item.id} isActive={item.isActive} position={item.position} swapPlayers={swapPlayers}/>)}
    </div>
}

export default Pitch;