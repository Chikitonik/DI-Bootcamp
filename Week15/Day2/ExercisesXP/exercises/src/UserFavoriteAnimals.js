import React from "react";
// class UserFavoriteColors extends React.Component {
//   render(props) {
//     return <p>Colors {props.colors}</p>;
//   }
// }

const UserFavoriteAnimals = (props) => {
  return (
    <p>
      Animals:{" "}
      {props.colors.map((item, index) => (
        <ul key={index}>
          <li>{item}</li>
        </ul>
      ))}
    </p>
  );
};

export default UserFavoriteAnimals;
