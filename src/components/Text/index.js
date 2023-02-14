import React from "react";
const variantClasses = {
  h1: "font-bold md:text-[48px] sm:text-[48px] text-[80px]",
  h2: "font-bold md:text-[48px] sm:text-[48px] text-[70px]",
  h3: "font-bold md:text-[48px] sm:text-[48px] text-[60px]",
  h4: "font-bold sm:text-[35px] md:text-[41px] text-[45px]",
  h5: "font-bold sm:text-[36px] md:text-[38px] text-[40px]",
  h6: "font-bold sm:text-[34px] md:text-[36px] text-[38px]",
  body1: "sm:text-[26px] md:text-[28px] text-[30px]",
  body2: "font-bold sm:text-[24.25px] md:text-[26.25px] text-[28.25px]",
  body3: "font-bold sm:text-[21.46px] md:text-[23.46px] text-[25.46px]",
  body4: "sm:text-[21px] md:text-[23px] text-[25px]",
  body5: "sm:text-[20px] md:text-[22px] text-[24px]",
  body6: "font-bold sm:text-[17px] md:text-[19px] text-[21px]",
  body7: "text-[20px]",
  body8: "font-bold text-[18.2px]",
  body9: "text-[18px]",
  body10: "font-medium text-[17.27px]",
  body11: "font-medium text-[17px]",
  body12: "text-[16px]",
  body13: "font-bold text-[15.47px]",
  body14: "text-[14px]",
  body15: "font-bold text-[12.99px]",
  body16: "font-bold text-[12.8px]",
  body17: "text-[12px]",
  body18: "font-medium text-[11.05px]",
  body19: "font-normal text-[11px]",
  body20: "font-bold text-[100px] md:text-[48px] sm:text-[48px]",
  body21: "font-medium text-[10.27px]",
  body22: "font-medium text-[10px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
