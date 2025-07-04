import React, { useState, useEffect } from 'react';
export default function BarMenuEdit() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('/data/barMenu.json').then(res => res.json()).then(setMenu);
  }, []);
  const update = () => {
    // placeholder for save logic
    alert("Changes saved (not really)");
  };
  return (
    <div>
      <h1>Edit Bar Menu</h1>
      {menu.map((item, i) => (
        <div key={i}>
          <input value={item.name} onChange={e => {
            const newMenu = [...menu];
            newMenu[i].name = e.target.value;
            setMenu(newMenu);
          }} />
          <textarea value={item.description} onChange={e => {
            const newMenu = [...menu];
            newMenu[i].description = e.target.value;
            setMenu(newMenu);
          }} />
        </div>
      ))}
      <button onClick={update}>Save Changes</button>
    </div>
  );
}
