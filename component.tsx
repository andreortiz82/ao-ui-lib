import React, { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "small" | "medium" | "large";
type IconPosition = "before" | "after";
type LoaderPosition = "before" | "after";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: React.ElementType;
  children?: ReactNode;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  loader?: ReactNode;
  loaderPosition?: LoaderPosition;
}

const useButton = (props: ButtonProps) => {
  // Custom hook logic here
  // ...
  return props;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    as: Component = "button",
    variant,
    size,
    children,
    icon,
    iconPosition,
    loader,
    loaderPosition,
    ...otherProps
  } = useButton(props);

  return (
    <Component ref={ref} className={`btn ${variant} ${size}`} {...otherProps}>
      {loader && loaderPosition === "before" && (
        <span className="loader">{loader}</span>
      )}
      {icon && iconPosition === "before" && (
        <span className="icon">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "after" && <span className="icon">{icon}</span>}
      {loader && loaderPosition === "after" && (
        <span className="loader">{loader}</span>
      )}
    </Component>
  );
});

export default Button;
