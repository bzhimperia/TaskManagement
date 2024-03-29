import { useState } from "react";
import { useListContext } from "../../context/listContext";

function AddItem() {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');
  const [{ categories }, dispatch] = useListContext();

  const handleChange = (e) => setValue(e.target.value);

  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== '' && category.trim() !== '') {
      dispatch({
        type: 'add_item',
        payload: {
          text: value.trim(),
          category: category.trim()
        }
      });
      setValue('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} placeholder="Nom de la tâche" />
      <select value={category} onChange={handleCategoryChange}>
        <option value="">Sélectionner une catégorie</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddItem;