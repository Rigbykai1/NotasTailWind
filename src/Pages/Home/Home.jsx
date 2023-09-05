import NoteSide from "../Notes/Note.side";
import Hero from "./Home.hero";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-row w-full max-w-full shrink lg:shrink-0 lg:flex-col lg:max-w-4xl">
        <Hero />
      </div>
      <div className="flex-row px-4 w-full lg:flex-col">
        <NoteSide />
      </div>
    </div>
  );
};

export default Home;
