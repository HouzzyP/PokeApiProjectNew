import React from "react";
import { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Navbar = (props) => {
  const { favoritePokemons } = useContext(FavoriteContext);
  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  const { setBtnFav, btnFav } = props;

  const seeFav = () => {
    if (btnFav) {
      setBtnFav(false);
    } else {
      setBtnFav(true);
    }
  };

  return (
    <nav>
      <div />
      <div>
        <img src={imgUrl} alt="pokeapiImage" className="navbar-image" />
      </div>
      <div>
        <a onClick={seeFav} className="heart" href="#">
          {" "}
          &#10084;&#65039;
        </a>{" "}
        {favoritePokemons.length}
      </div>
    </nav>
  );
};

export default Navbar;
