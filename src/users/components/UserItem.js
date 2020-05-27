import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UI-Elements/Avatar";
import Card from "../../shared/components/UI-Elements/Card";

import "./UserItem.css";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/payments`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.paymentsCount === 1
                ? "Paga en efectivo"
                : props.paymentsCount + " Métodos de Pago"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
