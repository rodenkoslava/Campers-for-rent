import React, { useState } from "react";

const FilterComponent = () => {
  // Створюємо стан для зберігання вибраних фільтрів
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Масив доступних фільтрів
  const filters = [
    "Filter 1",
    "Filter 2",
    "Filter 3",
    "Filter 4",
    "Filter 5",
    "Filter 6",
    "Filter 7",
    "Filter 8",
  ];

  // Функція для додавання або видалення фільтра
  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  return (
    <div>
      <h2>Фільтри</h2>
      <div>
        {/* Відображення кнопок фільтрів */}
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => toggleFilter(filter)}
            style={{
              marginRight: "10px",
              background: selectedFilters.includes(filter) ? "blue" : "gray",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            {filter}
          </button>
        ))}
      </div>
      <div>
        {/* Відображення вибраних фільтрів */}
        <h3>Вибрані фільтри:</h3>
        {selectedFilters.map((filter) => (
          <div key={filter}>{filter}</div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
