export default function GridPattern() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full grid-pattern">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 animate-grid-flow"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(153, 27, 27, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(153, 27, 27, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
     
      {/* Glowing dots at intersections */}
      <div
        className="absolute inset-0 animate-dots-glow"
        style={{
          backgroundImage: `radial-gradient(circle at 0 0, rgba(185, 28, 28, 0.6) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
     
      {/* Secondary offset grid for depth */}
      <div
        className="absolute inset-0 animate-grid-pulse"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(127, 29, 29, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(127, 29, 29, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          backgroundPosition: "20px 20px",
        }}
      />
    </div>
  );
}