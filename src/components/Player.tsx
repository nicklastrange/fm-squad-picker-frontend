import {FC, memo, ReactElement} from "react";
import {useDrag, useDrop} from "react-dnd";

interface PlayerProps {
    id: number,
    isActive: boolean,
    swapItems: (dragged: number, droppedOn: number) => void
}

const Player: FC<PlayerProps> = (props): ReactElement => {


    const [{isDragging}, drag] = useDrag(() => ({
        type: 'player',
        item: { props },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult<PlayerProps>();
            if (item && dropResult) {
                props.swapItems(item.props.id, dropResult.id)
                // console.log(`Dragged item id: ${item.props.id}`)
                // console.log(`Dropped item id: ${dropResult.id}`)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }));

    const [{isOver}, drop] = useDrop(() => ({
        accept: 'player',
        drop: () => ({id: props.id}),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }));

    const playerStyles = {
        backgroundColor: 'black',
        opacity: props.isActive ? '100%' : '0%',
        width: '20%',
        height: '16%',
        display: 'inline-block',
        borderRadius: '50%',
        color: 'white',
    }

    const attachDragAndDropRef = (obj: HTMLDivElement) => {
        drag(obj);
        drop(obj);
    }

    return <div ref={attachDragAndDropRef} style={playerStyles}><p>{props.id}</p></div>
}
export default Player;