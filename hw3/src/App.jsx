import React from "react";
import Rating from "./Rating";
import List from "./List";

const App = () => {
  return (
    <div>
      <h1>Приложение для выбора рейтинга</h1>
      <Rating />
      <h1>Приложение со списком приглашенных</h1>
      <List />
    </div>
  );
};

export default App;
