import { HeroList } from "../hero/HeroList";
import "./marvel.css";

export const MarvelScreen = () => {
  return (
    <div className="marvel-div">
      <div className="marvel-screen">
        <h1>Marvel</h1>
        <hr />
        <HeroList publisher="Marvel Comics" />
      </div>
    </div>
  );
};
