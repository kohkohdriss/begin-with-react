import { useState } from "react";
import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import "../styles/ShoppingList.css";

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);

    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );

      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price, category }) => {
          if (!activeCategory) {
            // Si activeCategory est vide, afficher tous les éléments
            return (
              <div key={id}>
                <PlantItem
                  cover={cover}
                  name={name}
                  water={water}
                  light={light}
                  price={price}
                />
                <button onClick={() => addToCart(name, price)}>Ajouter</button>
              </div>
            );
          } else if (activeCategory === category) {
            // Si activeCategory est égale à la catégorie de l'élément
            // Afficher l'élément
            return (
              <div key={id}>
                <PlantItem
                  cover={cover}
                  name={name}
                  water={water}
                  light={light}
                  price={price}
                />
                <button onClick={() => addToCart(name, price)}>Ajouter</button>
              </div>
            );
          } else {
            // Si activeCategory a une valeur mais ne correspond pas à la catégorie de l'élément
            // Ne pas afficher l'élément
            return null;
          }
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
