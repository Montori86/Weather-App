import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form className="d-flex"
      onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        
        type="text"
        className="form-control me-2"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Buscar" className="btn btn-outline-warning" />
    </form>
  );
}
