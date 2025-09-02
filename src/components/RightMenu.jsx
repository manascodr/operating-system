import React from "react";
import "../utils/css/RightMenu.css";
const RightMenu = ({ x, y }) => {
  return (
    <div className="right-menu" style={{ top: y, left: x }}>
      <div className="cont">
        <div className="menu-item">
            <div className="img-cont">
          <img src="/assets/icons/view.png" alt="" />
            </div>
            <ul>
            <li>View</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
