interface MessageProps {
  user: string;
  content: string;
  image?: string;
}
export default function Message({
  user,
  content,
  image,
  ...props
}: MessageProps) {
  return (
    <div className="p-2 hover:bg-slate-100" {...props}>
      <span className="text-gray-400 text-lg">{user}: </span>
      <span>{content}</span>
      {image ? <img src={image} /> : null}
    </div>
  );
}
