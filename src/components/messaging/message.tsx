import { MessageType } from "@/types/types";

type MessageProps = Omit<MessageType, "messageID" | "userID">;
// new Date().toISOString().slice(0, 19).replace("T", " ");

export default function Message({
  userName,
  message,
  image,
  timeSent,
  ...props
}: MessageProps) {
  const time = new Date(timeSent);
  time.setHours(time.getHours() - 8);
  const displayTime = time.toLocaleTimeString().replace(/(.*)\D\d+/, "$1");
  return (
    <div className="p-2 hover:bg-slate-100" {...props}>
      <div className="flex justify-between">
        <div className="">
          <span className="text-gray-400 text-lg">{userName}: </span>
          <span>{message}</span>
        </div>
        <div className="text-gray-400 text-sm">{displayTime}</div>
      </div>
      {image ? <img src={image} /> : null}
    </div>
  );
}
