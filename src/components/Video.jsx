export default function VideoBackground({ children }) {
  return (
    <div className="relative w-full h-screen">
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/media/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Foreground (Logo + Navbar + Hero) */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
