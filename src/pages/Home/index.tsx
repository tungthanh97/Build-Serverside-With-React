import useSpotify from "../../hooks/useSpotify";

const Home = () => {
  useSpotify();

  return (
    <main>
      <a href="/play">Play Track</a>
    </main>
  );
};

export default Home;
