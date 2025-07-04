import React, { useState } from 'react';
export default function GiveawayCode() {
  const [code, setCode] = useState("7F93-LD24");
  const [date, setDate] = useState("2025-07-11");
  const save = () => {
    // placeholder for save logic
    alert("Access code saved (not really)");
  };
  return (
    <div>
      <h1>Edit Giveaway Access Code</h1>
      <input value={code} onChange={e => setCode(e.target.value)} />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <button onClick={save}>Save</button>
    </div>
  );
}
