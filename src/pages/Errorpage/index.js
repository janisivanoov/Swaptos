import React from "react";

import { Img, Text, Button } from "components";

const ErrorpagePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-end mx-[auto] w-[100%]">
        <header className="flex items-center justify-center w-[100%]">
          <div className="bg-white_A700 flex flex-1 flex-col items-center justify-center w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row gap-[213px] md:gap-[40px] sm:gap-[40px] items-center justify-center p-[31px] sm:px-[20px] w-[100%]">
              <div className="flex md:flex-1 sm:flex-1 md:flex-col flex-row font-poppins md:gap-[40px] sm:gap-[40px] gap-[70px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[42px] md:w-[100%] sm:w-[100%] w-[63%]">
                <div className="flex flex-col items-center justify-end p-[12px] rounded-radius7 md:w-[100%] w-[17%]">
                  <div className="flex flex-row gap-[14px] items-end justify-start rotate-[90deg] md:w-[100%] sm:w-[100%] w-[91%]">
                    <Img
                      src="images/img_union.png"
                      className="h-[24px] md:h-[auto] sm:h-[auto] object-cover w-[auto]"
                      alt="Union"
                    />
                    <Text
                      className="bg-clip-text bg-gradient2  font-bold mt-[6px] rotate-[-90deg] text-left text-transparent w-[auto]"
                      variant="body12"
                    >
                      Swapos
                    </Text>
                  </div>
                </div>
                <ul className="flex sm:flex-col flex-row gap-[30px] sm:hidden items-center justify-start w-[auto] common-row-list">
                  <li className="sm:w-[100%] sm:my-[10px] w-[7%]">
                    <div className="flex flex-col items-center justify-center">
                      <a
                        className="cursor-pointer font-medium hover:h-[undefinedpx] text-[16px] text-gray_900 text-left w-[auto] hover:w-[undefinedpx]"
                        href="#"
                      >
                        Main
                      </a>
                    </div>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[12%]">
                    <div className="flex flex-row gap-[5px] items-center justify-center">
                      <a
                        className="cursor-pointer font-medium hover:h-[undefinedpx] text-[16px] text-gray_900 text-left w-[auto] hover:w-[undefinedpx]"
                        href="#"
                      >
                        Trade
                      </a>
                      <Img
                        src="images/img_arrowup_gray_900_16x16.svg"
                        className="h-[16px] w-[16px]"
                        alt="arrowup"
                      />
                    </div>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[10%]">
                    <div className="flex flex-row gap-[5px] items-center justify-center">
                      <a
                        className="cursor-pointer font-medium hover:h-[undefinedpx] text-[16px] text-gray_900 text-left w-[auto] hover:w-[undefinedpx]"
                        href="#"
                      >
                        Earn
                      </a>
                      <Img
                        src="images/img_arrowup_gray_900_16x16.svg"
                        className="h-[16px] w-[16px]"
                        alt="arrowup One"
                      />
                    </div>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[13%]">
                    <div className="flex flex-col items-center justify-center">
                      <a
                        className="cursor-pointer font-medium hover:h-[undefinedpx] text-[16px] text-gray_900 text-left w-[auto] hover:w-[undefinedpx]"
                        href="#"
                      >
                        Extra APR
                      </a>
                    </div>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[24%]">
                    <div className="flex flex-col items-center justify-center">
                      <a
                        className="cursor-pointer font-medium hover:h-[undefinedpx] text-[16px] text-gray_900 text-left w-[auto] hover:w-[undefinedpx]"
                        href="#"
                      >
                        Referral program
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <Button
                className="cursor-pointer font-bold font-inter leading-[normal] min-w-[175px] mr-[42px] text-[16px] text-center text-white_A700 w-[auto]"
                shape="RoundedBorder23"
                size="6xl"
                variant="GradientBlueA200DeeppurpleA700"
              >
                Connect wallet
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start mt-[147px] md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[42%]">
          <Text
            className="font-poppins text-gray_900 text-left w-[auto]"
            variant="body20"
          >
            Oops!
          </Text>
          <Text
            className="font-medium font-poppins mt-[10px] text-gray_900 text-left w-[auto]"
            variant="body4"
          >
            There is an error occured.  Please refresh the page or contact
            support.
          </Text>
          <Button
            className="cursor-pointer font-bold font-inter leading-[normal] min-w-[175px] mt-[30px] text-[16px] text-center text-white_A700 w-[auto]"
            shape="RoundedBorder23"
            size="6xl"
            variant="GradientBlueA200DeeppurpleA700"
          >
            Contact us
          </Button>
        </div>
        <Img
          src="images/img_05freepools.svg"
          className="h-[822px] mt-[2534px] w-[auto]"
          alt="05Freepools"
        />
      </div>
    </>
  );
};

export default ErrorpagePage;
