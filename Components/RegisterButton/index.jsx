import styles from "./registerButton.module.css";

const RegisterButton = ({ onClick, name, id, className, children }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type="button"
      name={name}
      id={id}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RegisterButton;
