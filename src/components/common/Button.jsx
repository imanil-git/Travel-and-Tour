import { Link } from "react-router-dom";

export const Button = ({
  type = "button",
  children,
  variant = "primary",
  className = "",
  to,
  ...props
}) => {
  const styles = {
    primary: "bg-[#28364c] border-[#28364c] text-white p-3 hover:bg-slate-700",
    secondary: "bg-white border-white text-slate-900 p-3 hover:bg-slate-100",
    tertiary: "text-white border-white/60 p-2.5 hover:bg-white/10",
  };
  const classes = `inline-flex items-center justify-center border text-center rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed ${styles[variant] || styles.primary} ${className}`;
  return to ? (
    <Link to={to} className={classes} {...props}>
      {children}
    </Link>
  ) : (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
};
