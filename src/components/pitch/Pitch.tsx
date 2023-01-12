import {FC, ReactElement, useState} from "react";
import './Pitch.css';
import Player from "../Player";
import {Position} from "../../model/Position";
import {getRolesForPosition} from "../../model/Role";

const initialPlayerList = [
    //forwards
    {id: 0, isActive: false, position: Position.STCL,},
    {id: 1, isActive: true, position: Position.STCL,},
    {id: 2, isActive: false, position: Position.STC,},
    {id: 3, isActive: true, position: Position.STCR,},
    {id: 4, isActive: false, position: Position.STCR,},
    //attacking midfielders
    {id: 5, isActive: false, position: Position.AML,},
    {id: 6, isActive: false, position: Position.AMCL,},
    {id: 7, isActive: false, position: Position.AMC,},
    {id: 8, isActive: false, position: Position.AMCR,},
    {id: 9, isActive: false, position: Position.AMR},
    //midfielders
    {id: 10, isActive: true, position: Position.ML},
    {id: 11, isActive: true, position: Position.MCL},
    {id: 12, isActive: false, position: Position.MC},
    {id: 13, isActive: true, position: Position.MCR},
    {id: 14, isActive: true, position: Position.MR},
    //defensive midfielders
    {id: 15, isActive: false, position: Position.WBL},
    {id: 16, isActive: false, position: Position.DMCL},
    {id: 17, isActive: false, position: Position.DMC},
    {id: 18, isActive: false, position: Position.DMCR},
    {id: 19, isActive: false, position: Position.WBR},
    //defenders
    {id: 20, isActive: true, position: Position.DL},
    {id: 21, isActive: true, position: Position.DCL},
    {id: 22, isActive: false, position: Position.DC},
    {id: 23, isActive: true, position: Position.DCR},
    {id: 24, isActive: true, position: Position.DR},
    //goalkeeper
    {id: 25, isActive: false, position: Position.GK},
    {id: 26, isActive: false, position: Position.GK},
    {id: 27, isActive: true, position: Position.GK},
    {id: 28, isActive: false, position: Position.GK},
    {id: 29, isActive: false, position: Position.GK}
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
        {playerList.map(item =>
            <Player
                key={item.id}
                id={item.id}
                isActive={item.isActive}
                position={item.position}
                currentRole={getRolesForPosition(item.position)[0]}
                swapPlayers={swapPlayers}
            />
        )}
    </div>
}

export default Pitch;