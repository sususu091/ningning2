import { Like } from "./Like";

const List = (props) => {
    const d = new Date(props.created_at);
    const dateString = d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 " + d.getHours() + "시 " + d.getMinutes() + "분 " ;

    return (
        <div>
            <div className="flex flex-col mb-5 mx-5">
                <span className="text-xl font-bold mb-2 mt-5">{props.title}</span>
                <div className="flex flex-row items-center justify-between">
                    <div className="text-xl text-gray-700">{dateString}</div>
                    <Like id={props.id} className="text-xl text-red-700" />
                </div>
                <span className="text-2xl mt-2">{props.content}</span>
            </div>
        </div>
    )
}

export default List;