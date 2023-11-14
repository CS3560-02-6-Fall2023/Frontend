const channels = [
  { id: 1, name: "#general" },
  { id: 2, name: "#homework" },
  { id: 3, name: "#project" },
  { id: 4, name: "#quiz" },
  // Add more channels as needed
];

export default function SideBar() {
  return (
    <div className="h-screen w-64 p-4 border">
      <h1 className="text-2xl font-bold mb-4 border-b">CS3560.02</h1>
      <ul>
        {channels.map((channel) => (
          <li
            key={channel.id}
            className="mb-2 hover:text-green-600 hover:underline px-2 py-1 rounded"
          >
            {channel.name}
          </li>
        ))}
      </ul>
      <div className="border-t border-gray-700 pt-4 mb-5 bottom-0 absolute">
        <p className="mb-2">User</p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          User Settings
        </button>
      </div>
    </div>
  );
}
