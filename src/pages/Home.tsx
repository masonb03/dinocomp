import Hero from "./Hero";

const Home = () => {
  return (
    <div className="relative h-full overflow-hidden">

      {/* Mud Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/.jpg')"
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_300px_rgba(0,0,0,0.98)]" />

      {/* Hero Content */}
      <div className="relative z-10">
        <Hero />
      </div>

    </div>
  );
};

export default Home;