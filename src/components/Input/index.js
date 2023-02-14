import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillGray903: "bg-gray_903",
  OutlineBlue200: "bg-indigo_50 border-2 border-blue_200 border-solid",
  FillIndigo50: "bg-indigo_50",
};
const shapes = {
  CircleBorder20: "rounded-radius20",
  RoundedBorder10: "rounded-radius10",
  RoundedBorder15: "rounded-radius15",
};
const sizes = {
  sm: "pb-[13px] pt-[9px] px-[9px]",
  md: "p-[11px]",
  lg: "pb-[8px] pt-[14px] px-[8px]",
  xl: "px-[12px] py-[16px]",
  "2xl": "px-[12px] py-[26px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "CircleBorder20",
    "RoundedBorder10",
    "RoundedBorder15",
  ]),
  variant: PropTypes.oneOf(["FillGray903", "OutlineBlue200", "FillIndigo50"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "CircleBorder20",
  variant: "FillGray903",
  size: "md",
};

export { Input };
