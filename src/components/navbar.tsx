export default function Navbar() {
  return (
    <div className="text-white p-4">
      <div className="flex items-center justify-center bg-green-600 w-24 h-24 rounded-full border-[6px] border-yellow-500 ">
        <span className="text-white text-lg font-semibold">AB</span>
      </div>
      {Array.from({ length: 5 }, (_, idx) => (
        <div
          key={idx}
          className="mt-5 flex items-center justify-center bg-green-600 w-24 h-24 rounded-full overflow-hidden"
        >
          <span className="text-white text-lg font-semibold">serverName</span>
        </div>
      ))}
    </div>
  );
}
