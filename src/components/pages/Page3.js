const Page3 = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
        {["1", "2", "3", "4"].map((n) => (
          <div
            key={n}
            className="
          aspect-square
          rounded-2xl
          overflow-hidden
          shadow-lg
          ring-2 ring-pink-300/40
          transition-transform duration-300
          hover:scale-105
        "
          >
            <img
              src={`/images/foto${n}.jpeg`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page3;