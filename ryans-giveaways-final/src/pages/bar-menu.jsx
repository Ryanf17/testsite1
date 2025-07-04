import React, { useEffect, useState } from 'react';
export default function BarMenu() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('/data/barMenu.json').then(res => res.json()).then(setMenu);
  }, []);
  return (
    <div>
      <h1>Bar Menu</h1>
      {menu.map((item, i) => (
        <div key={i}><h3>{item.name}</h3><p>{item.description}</p></div>
      ))}
    </div>
  );
}
