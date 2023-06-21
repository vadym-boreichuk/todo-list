import css from "./Button.module.css";

export const Button = ({ type = "button", children, ...otherProps }) => {
  return (
    <button className={css.btn} type={type}>
      {children}
    </button>
  );
};
