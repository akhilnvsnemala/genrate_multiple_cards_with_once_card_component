import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avathar_img" />
      <p>{props.email}</p>
      <p>{props.phone}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My contacts</h1>
    <Card
      name="akhil"
      img="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"
      email="anemla@wagepoint.com"
      phone="9553290193"
    />
    <Card
      name="Hero"
      img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
      email="hero@wagepoint.com"
      phone="9553290192"
    />
  </div>,
  document.getElementById("root")
);
