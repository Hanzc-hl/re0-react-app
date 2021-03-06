import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";
import type { MenuProps } from "antd/lib/Menu";

import styles from "./Nav.less";

const items: MenuProps["items"] = [
  {
    label: <Link to="/">Home</Link>,
    key: "/",
  },
  {
    label: <Link to="/blog">Blog</Link>,
    key: "/blog",
  },
];

const Nav: React.FC = () => {
  const [currentKey, setCurrentKey] = useState<string>("Home");
  const location = useLocation();

  useEffect(() => {
    setCurrentKey(location.pathname);
  }, [location]);

  const handleClick: MenuProps["onClick"] = (e) => {
    setCurrentKey(e.key);
  };

  return (
    <Menu
      mode="horizontal"
      items={items}
      selectedKeys={[currentKey]}
      onClick={handleClick}
      className={styles.nav}
    />
  );
};

export default Nav;
