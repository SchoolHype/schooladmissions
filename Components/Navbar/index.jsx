import Image from "next/image";
import React from "react";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.imageWrapper}>
          <Image
            src={"/6.jpg"}
            layout={"fill"}
            objectFit={"contain"}
            alt={"logo"}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
