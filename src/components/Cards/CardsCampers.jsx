import React from "react";

const CardComponent = () => {
  // Масив з даними карточок
  const cards = [
    { id: 1, title: "Карточка 1", content: "Вміст карточки 1" },
    { id: 2, title: "Карточка 2", content: "Вміст карточки 2" },
    { id: 3, title: "Карточка 3", content: "Вміст карточки 3" },
    { id: 4, title: "Карточка 4", content: "Вміст карточки 4" },
  ];

  return (
    <section>
      <h2>Карточки</h2>
      <div>
        {cards.map((card) => (
          <ul>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default CardComponent;
