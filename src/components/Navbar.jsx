import { Badge } from "@material-ui/core";
import {ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import logoto from './images/logo2.png';


const Navbar = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Wrapper}>
        <div className={classes.Left}>
          <img src="https://i.imgur.com/GVg3KIo.png" alt="" style={{ height: "10px" }}  />
          <span className={classes.Language}>МКД</span>
        
        </div>
        <div className={classes.Center}>
          <Link to="/" className={classes.Logo}>
          <img src={logoto} alt="Euforija" style={{ height: "100px" }} />
          </Link>
        </div>
        <div className={classes.Right}>
          <Link to="/register " className={classes.Logo}>
            <div className={classes.MenuItem}>Регистрирај се</div>
          </Link>

          <Link to="/login" className={classes.Logo}>
            <div className={classes.MenuItem}>Најави се</div>
          </Link>

          <div className={classes.MenuItem}>
            {" "}
            <Link to="/cart" className={classes.Logo}>
              <Badge color="primary" badgeContent={2}>
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
