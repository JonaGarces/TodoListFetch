import React from "react";

function DefaultMessage({status}) {
  return (
    <header>
      <div className={status}>Sin tareas añadidas</div>
    </header>
  );
}

export default DefaultMessage;
