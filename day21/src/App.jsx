import './App.css';
import React, { useState } from 'react';
function AppForm({ addItems }) {

  const [food, setFood] = useState('');
  const [cal, setCal] = useState('');

  const addHandler = (event) => {
    event.preventDefault();
    addItems({ food, cal });
    setFood('');
    setCal('');
  }
  return (
    <div className="AppMain">
      <form onSubmit={e => addHandler(e)}>
      
        <label>
          Enter Food:
          <input type="text" placeholder="Item" required value={food}  onChange={e => setFood(e.target.value)} />

        </label>
        <label>
          Enter Calories:
          <input type="number" placeholder="Calorie Amount" required value={cal}  onChange={e => setCal(e.target.value)} />
        </label>
        <button>Add Item</button>
        
      </form>
    </div>
  );
}
function RenderItem({ item, index, updateItems, deleteItems }) {
  const [isEditing, setEditing] = useState(false);
  return (
    <div>
      <div className="FoodCal">
        {
          isEditing ?
            (
              <input type="text" id="food" name="food" required value={item.food} onChange={e => updateItems(index, { food: e.target.value })} />
            ):
            (
              <h3>{item.food}</h3>
            )
        }

        {
          isEditing ?
            (
              <input type="number" id="cal" name="cal" required value={item.cal} onChange={e=> updateItems(index,{cal: e.target.value })} />
            ):
            (
              <p>You have consumed {item.cal} calories</p>
            )
        }

        <button onClick={() => deleteItems(index)}>Delete</button>
        <button onClick={()=>setEditing(!isEditing)}>
          {isEditing ? 'Done' : 'Edit' }
        </button>
      </div>
    </div>
  );
}
export default function App() {
  const [items, setItems] = useState([]);

  const addItems = (item) => {
    setItems([...items, item]);
  }
  const deleteItems = (index) => {
    setItems(items.filter((item, i) => i !== index));
  }
  const updateItems = (index, newItem) => {
    setItems(items.map((item, i) =>(i === index) ? { ...item, ...newItem } : item))
  }

  return (
    <div className="render">
      <AppForm addItems={addItems} />
      {items.length === 0 ? (
        <h2>Start Adding</h2>
      ) :
        (
          items.map((item, index) => (
            <RenderItem item={item} index={index} key={index} updateItems={updateItems} deleteItems={deleteItems} />
          )
          )
        )
      }
    </div>
  );
}
