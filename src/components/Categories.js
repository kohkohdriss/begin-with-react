import "../styles/Categories.css";

function Categories({ setActiveCategory, categories, activeCategory }) {
  return (
    <div className="lmj-categories">
      {/* ici où on change l'état de categorie */}
      <select
        value={activeCategory}
        onChange={(e) => {
          setActiveCategory(e.target.value);
          console.log("e event category", e.target.value);
          console.log("activeCategory", activeCategory);
        }}
        className="lmj-categories-select"
      >
        {/* option 1 */}
        <option value="">---</option>
        {/* option 2 */}
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory("")}>Réinitialiser</button>
    </div>
  );
}

export default Categories;
