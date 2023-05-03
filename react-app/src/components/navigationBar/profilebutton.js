import React, { useState, useEffect } from "react";
import LogoutButton from "../auth/LogoutButton";
import "./profilebutton.css";
import { CgProfile} from "react-icons/cg";
function ProfileButton({ user }) {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <>
      <button className="buttn"   onClick={openMenu}>
        <CgProfile className="userButton" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>User Id {user.id}</li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
