import React from "react";
import "./ImagesGallery.scss";

const data = [
  {
    id: 1,
    name: "1",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847806/MatiRios/1_gm1swi.jpg",
  },
  {
    id: 2,
    name: "2",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/2_q7bkiy.jpg",
  },
  {
    id: 3,
    name: "3",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/3_ttbhp6.jpg",
  },
  {
    id: 4,
    name: "4",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847796/MatiRios/4_p5raty.jpg",
  },
  {
    id: 5,
    name: "5",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/5_qxf8k3.jpg",
  },
  {
    id: 6,
    name: "6",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847794/MatiRios/6_tg6mpp.jpg",
  },
  {
    id: 7,
    name: "7",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/7_fwuazp.jpg",
  },
  {
    id: 8,
    name: "8",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/8_kqh4ni.jpg",
  },
  {
    id: 9,
    name: "9",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/9_xdopnf.jpg",
  },
];

function ImagesGallery() {
  return <Tiles data={data} />;
}

class Tiles extends React.Component {
  render() {
    // Create tile for each item in data array
    // Pass data to each tile and assign a key
    return (
      <div className="tiles">
        {this.props.data.map((data) => {
          return <Tile data={data} key={data.id} />;
        })}
      </div>
    );
  }
}

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mouseOver: false,
    };
    // Bind properties to class instance
    this._clickHandler = this._clickHandler.bind(this);
    this._mouseEnter = this._mouseEnter.bind(this);
    this._mouseLeave = this._mouseLeave.bind(this);
  }
  // Event handlers to modify state values
  _mouseEnter(e) {
    e.preventDefault();
    if (this.state.mouseOver === false) {
      this.setState({
        mouseOver: true,
      });
    }
  }
  _mouseLeave(e) {
    e.preventDefault();
    if (this.state.mouseOver === true) {
      this.setState({
        mouseOver: false,
      });
    }
  }
  _clickHandler(e) {
    e.preventDefault();
    if (this.state.open === false) {
      this.setState({
        open: true,
      });
    } else {
      this.setState({
        open: false,
      });
    }
  }

  render() {
    // Modify styles based on state values
    let tileStyle = {};
    let headerStyle = {};
    let zoom = {};
    // When tile clicked
    if (this.state.open) {
      tileStyle = {
        width: "62vw",
        height: "62vw",
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: "0",
        marginTop: "-31vw",
        marginLeft: "-31vw",
        boxShadow: "0 0 40px 5px rgba(0, 0, 0, 0.3)",
        transform: "none",
      };
    } else {
      tileStyle = {
        width: "18vw",
        height: "18vw",
      };
    }

    return (
      <div className="tile">
        <img
          onMouseEnter={this._mouseEnter}
          onMouseLeave={this._mouseLeave}
          onClick={this._clickHandler}
          src={this.props.data.image}
          alt={this.props.data.name}
          style={tileStyle}
        />
      </div>
    );
  }
}

export default ImagesGallery;
