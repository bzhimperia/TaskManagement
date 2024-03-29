import { useState } from "react";
import { useListContext } from "../../context/listContext";

function AddCategory() {
  const [categoryName, setCategoryName] = useState('');
  const [{ categories }, dispatch] = useListContext();

  const handleAddCategory = () => {
    if (categoryName.trim() !== '') {
      dispatch({
        type: 'add_category',
        payload: categoryName.trim()
      });
      setCategoryName('');
    }
  };

  return (
    <div>
      <input type="text" value={categoryName} onChange={e => setCategoryName(e.target.value)} placeholder="Nom de la catégorie" />
      <button onClick={handleAddCategory}>Ajouter une catégorie</button>
    </div>
  );
}

export default AddCategory;