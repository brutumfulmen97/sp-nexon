import { useDroppable } from "@dnd-kit/core";

export default function Dropabble(props: {
    id: string;
    children: React.ReactNode;
    className: string;
}) {
    const { isOver, setNodeRef } = useDroppable({
        id: props.id,
    });
    const style = {
        color: isOver ? "green" : undefined,
    };

    return (
        <div ref={setNodeRef} style={style} className={props.className}>
            {props.children}
        </div>
    );
}
