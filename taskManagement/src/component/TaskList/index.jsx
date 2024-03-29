import { useState } from "react";
import Item from "../Item";
import { useListContext } from "../../context/listContext";

function TaskList() {
  const [{ list, categories }] = useListContext();
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <h2>Liste de tâches</h2>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">Toutes les catégories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <ul>
        {list.filter(item => !selectedCategory || item.category === selectedCategory).map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;