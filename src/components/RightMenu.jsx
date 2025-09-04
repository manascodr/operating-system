import React from "react";
import "../utils/css/RightMenu.css";
const RightMenu = ({ x, y }) => {
  return (
    <div className="right-menu" style={{ top: y, left: x }}>
      <div className="cont">
        <div className="menu-item">
          <div className="left-cont">
            <div className="img-cont">
              <img src="/assets/icons/view.svg" alt="" />
            </div>
            <p>View</p>
          </div>
          <div className="right-cont">
            <img src="/assets/icons/right.svg" alt="" />
          </div>
        </div>
        <div className="menu-item">
          <div className="left-cont">
            <div className="img-cont">
              <img src="/assets/icons/ui/sort.png" alt="" />
            </div>
            <p>Sort by</p>
          </div>
          <div className="right-cont">
            <img src="/assets/icons/right.svg" alt="" />
          </div>
        </div>
        <div className="menu-item">
          <div className="left-cont">
            <div className="img-cont">
              <img src="/assets/icons/ui/sort.png" alt="" />
            </div>
            <p>Refresh</p>
          </div>
          <div className="right-cont">
            <img src="/assets/icons/right.svg" alt="" />
          </div>
        </div>
        <div className="hr"></div>
        <div className="menu-item">
          <div className="left-cont">
            <div className="img-cont">
              <img src="/assets/icons/ui/new.png" alt="" />
            </div>
            <p>New</p>
          </div>
          <div className="right-cont">
            <img src="/assets/icons/right.svg" alt="" />
          </div>
        </div>
        <div className="hr"></div>
        <div className="menu-item">
          <div className="left-cont">
            <div className="img-cont">
              <img src="/assets/icons/ui/display.png" alt="" />
            </div>
            <p>Display</p>
          </div>
          <div className="right-cont">
            <img src="/assets/icons/right.svg" alt="" />
          </div>
        </div>
        <div className="menu-item">
          <div className="left-cont">
            <div className="img-cont">
              <img src="/assets/icons/ui/personalize.png" alt="" />
            </div>
            <p>Personalize</p>
          </div>
          <div className="right-cont">
            <img src="/assets/icons/right.svg" alt="" />
          </div>
        </div>
        <div className="hr"></div>
        <div className="menu-item">
          <div className="left-cont">
            <div className="img-cont">
              <img src="/assets/icons/ui/more.png" alt="" />
            </div>
            <p>Show More Options</p>
          </div>
          <div className="right-cont">
            <img src="/assets/icons/right.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
