import { useState, useEffect } from "react";
import "../styles/Footer.css";
// import Cart from "./Cart";

function Footer({ cart }) {
  const [inputValue, setInputValue] = useState("");

  // dans ce cas à chaque à chaque saisie l'alert s'affiche car footer est re_render
  // useEffect(() => {
  //   console.log("cette alert s'affiche à chaque rendu");
  // });

  //l'alert s'affiche au premier rendu du footer et une seule fois
  // useEffect(() => {
  //   console.log("cette alert s'affiche à chaque rendu");
  // }, []);

  //l'alert s'affiche au premier rendu du footer et dans le cas de mise à jour de Cart
  // useEffect(() => {
  //   console.log("cette alert s'affiche à chaque rendu");
  // }, [cart]);

  //cet effet est util dans le cas de nétoiyage, typiquement dans le cas de setInterval dans useEfect,
  //on doit lancer la fonction clearInterval dans la fonction déclaré dans useEfect, sinon j'aurai des fuites de mémoire.
  useEffect(() => {
    return () =>
      console.log("cette alert s'affiche quand footer est retiré du DOM");
  });

  function handleInput(e) {
    return setInputValue(e.target.value);
  }

  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert(
        "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥"
      );
    } else {
      alert("c'est ok");
    }
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <input
        placeholder="Entrez votre mail"
        onChange={handleInput}
        value={inputValue}
        // defaultValue={inputValue}
        onBlur={handleBlur}
      />
    </footer>
  );
}

export default Footer;
