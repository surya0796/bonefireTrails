import "./navbar.scss";

const DEFAULTCLS = "navbar";

const NavBar = () => {
  return (
    <div className={DEFAULTCLS}>
      <div className={`${DEFAULTCLS}__items`}>
        <div className={`${DEFAULTCLS}__item`}>Create Trip</div>
      </div>
      <div className="logo" style={{ height: "40px" }}>
        LOGO
      </div>
      <div className={`${DEFAULTCLS}__account-items`}>
        <div className={`${DEFAULTCLS}__account-links`}>Log in</div>
        <div className={`${DEFAULTCLS}__account-links`}>Sign up</div>
      </div>
    </div>
  );
};

export default NavBar;
