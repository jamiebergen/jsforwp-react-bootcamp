import React from "react";
import calicoImage from "./images/calico.jpg";

const Content = () => {
  return (
    <main>
      <article>
        <h2>About Calico</h2>
        <img src={calicoImage} width="400" alt="Calico" />
        <p>
          Calico is a golden/lab mix who recently turned five! We originally
          raised her to be a guide dog for{" "}
          <a href="https://www.guidedogs.com/">Guide Dogs for the Blind</a>, but
          she dropped out because she was too friendly with strangers.
        </p>
      </article>
      <aside>
        <h2>Calico's Redeeming Qualities</h2>
        <ul>
          <li key="itemOne">Good at sleeping</li>
          <li key="itemTwo">Keeps my feet warm</li>
          <li key="itemThree">Soft</li>
        </ul>
      </aside>
    </main>
  );
};
export default Content;
