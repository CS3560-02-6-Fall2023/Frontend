interface MessageProps {
    user: string;
    content: string;
    image?: string;
    timestamp: string;
}
new Date().toISOString().slice(0, 19).replace("T", " ");
export default function Message({
    user,
    content,
    image,
    timestamp,
    ...props
}: MessageProps) {
    const time = new Date(timestamp);
    time.setHours(time.getHours() - 8);
    const displayTime = time.toLocaleTimeString().replace(/(.*)\D\d+/, "$1");
    return (
        <div className="p-2 hover:bg-slate-100" {...props}>
            <div className="flex justify-between">
                <div className="">
                    <span className="text-gray-400 text-lg">{user}: </span>
                    <span>{content}</span>
                </div>
                {/* <div className="text-gray-400 text-sm">{displayTime}</div> */}
            </div>
            {image ? <img src={image} /> : null}
        </div>
    );
}
