"use client";

export default function VideosCards({ videos = [] }) {
  return (
    <div className="w-full max-w-7xl mx-auto py-10">
      <div className="flex justify-between">
      <h2 className="text-xl font-bold mb-6 text-gray-800 bg-yellow-400 p-3">Photos</h2>
      <h2 className="text-xl font-bold mb-6 text-gray-800 bg-yellow-400 p-3">Donload PDF 1</h2>
      <h2 className="text-xl font-bold mb-6 text-gray-800 bg-yellow-400 p-3">Donload PDF 2</h2>

      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            {/* video */}
            <video
              className="w-full h-48 object-cover"
              muted
              controls
              playsInline
            >
              <source src={item.video} type="video/mp4" />
            </video>

            {/* title */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
