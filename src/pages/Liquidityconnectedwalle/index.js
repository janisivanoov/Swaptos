import React from "react";

import { Img, Text, Button, Switch, List, Line } from "components";

const LiquidityconnectedwallePage = () => {
  function handleNavigate20() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate29() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="h-[1036px] md:h-[1090px] sm:h-[1452px] relative w-[100%]">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
            <div className="flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
              <Img
                src="images/img_vector_purple_304.png"
                className="md:flex-1 sm:flex-1 h-[527px] sm:h-[auto] mb-[153px] object-cover md:w-[100%] sm:w-[100%] w-[auto]"
                alt="Vector"
              />
              <Img
                src="images/img_vector_purple_305.png"
                className="md:flex-1 sm:flex-1 h-[520px] sm:h-[auto] sm:mt-[0] mt-[160px] object-cover md:w-[100%] sm:w-[100%] w-[auto]"
                alt="Vector One"
              />
            </div>
          </div>
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] shadow-bs2 top-[13%] w-[15%]">
            <div className="bg-white_A700 flex flex-col h-[48px] md:h-[auto] sm:h-[auto] items-start justify-start pl-[20px] pr-[3px] py-[3px] rounded-radius16 w-[195px]">
              <div className="flex flex-row gap-[18px] items-center justify-start ml-[auto] w-[auto]">
                <Text
                  className="text-gray_900 text-left w-[auto]"
                  variant="body11"
                >
                  Swap
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[106px] text-[17px] text-center text-white_A700 w-[auto]"
                  shape="RoundedBorder13"
                  size="4xl"
                  variant="GradientDeeppurple400Purple300"
                >
                  Liquidity
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-[auto] w-[66%]">
            <div className="bg-white_A700 flex flex-col items-center justify-start p-[26px] sm:px-[20px] rounded-radius30 shadow-bs2 w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start mb-[201px] w-[100%]">
                <div className="flex flex-col gap-[39px] items-center justify-start w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-end justify-between w-[100%]">
                    <Text
                      className="font-medium sm:mt-[0] mt-[9px] text-gray_900 text-left w-[auto]"
                      variant="body4"
                    >
                      Liquidity
                    </Text>
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-[15px] items-center justify-between sm:w-[100%] w-[auto]">
                      <div className="flex flex-row font-poppins gap-[10px] items-center justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body14"
                        >
                          Show closed positions
                        </Text>
                        <Switch value={true} className="w-[23%]" />
                      </div>
                      <Button
                        className="flex items-center justify-center min-w-[198px] text-center w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_plus.svg"
                            className="mr-[10px] text-center"
                            alt="plus"
                          />
                        }
                        shape="RoundedBorder13"
                        size="2xl"
                        variant="GradientBlueA200DeeppurpleA700"
                      >
                        <div className="bg-transparent cursor-pointer font-bold font-inter leading-[normal] text-[16px] text-left text-white_A700">
                          Add new position{" "}
                        </div>
                      </Button>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col items-center justify-start rounded-radius15 shadow-bs9 w-[100%]">
                      <div className="bg-gradient4  p-[1px] rounded-radius15 w-[100%] ">
                        <div className="bg-white_A700 border-solid flex flex-col items-start justify-end p-[27px] sm:px-[20px] rounded-radius15">
                          <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[3px] mt-[3px] md:w-[100%] sm:w-[100%] w-[91%]">
                            <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                              <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                                <Img
                                  src="images/img_bluetooth.svg"
                                  className="h-[26px] my-[auto] w-[26px]"
                                  alt="bluetooth"
                                />
                                <Img
                                  src="images/img_floatingicon.svg"
                                  className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                                  alt="floatingicon"
                                />
                              </div>
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                BTC - USDT
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-start mt-[34px] md:w-[100%] sm:w-[100%] w-[88%]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                Commission rate:
                              </Text>
                              <Text
                                className="bg-blue_A200_33 font-medium justify-center ml-[3px] p-[4px] rounded-radius3 text-blue_A201 text-left w-[auto]"
                                variant="body17"
                              >
                                0.3%
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[14px] items-start justify-between mt-[7px] w-[100%]">
                              <Text
                                className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                Unclaimed fees:
                              </Text>
                              <Text
                                className="bg-blue_A200_33 font-medium justify-center p-[4px] rounded-radius3 text-blue_A201 text-left w-[auto]"
                                variant="body17"
                              >
                                $1326,57
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] min-w-[175px] md:ml-[0] sm:ml-[0] ml-[13px] mt-[18px] text-[16px] text-center text-white_A700 w-[auto]"
                              shape="RoundedBorder23"
                              size="7xl"
                              variant="GradientBlueA200DeeppurpleA700"
                            >
                              Collect fees
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start rounded-radius15 shadow-bs9 w-[100%]">
                      <div className="bg-gradient4  p-[1px] rounded-radius15 w-[100%] ">
                        <div className="bg-white_A700 border-solid flex flex-col items-start justify-end p-[27px] sm:px-[20px] rounded-radius15">
                          <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[3px] mt-[3px] md:w-[100%] sm:w-[100%] w-[91%]">
                            <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                              <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                                <Img
                                  src="images/img_bluetooth.svg"
                                  className="h-[26px] my-[auto] w-[26px]"
                                  alt="bluetooth One"
                                />
                                <Img
                                  src="images/img_floatingicon.svg"
                                  className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                                  alt="floatingicon One"
                                />
                              </div>
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                BTC - USDT
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-start mt-[34px] md:w-[100%] sm:w-[100%] w-[88%]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                Commission rate:
                              </Text>
                              <Text
                                className="bg-blue_A200_33 font-medium justify-center ml-[3px] p-[4px] rounded-radius3 text-blue_A201 text-left w-[auto]"
                                variant="body17"
                              >
                                0.3%
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[14px] items-start justify-between mt-[7px] w-[100%]">
                              <Text
                                className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                Unclaimed fees:
                              </Text>
                              <Text
                                className="bg-blue_A200_33 font-medium justify-center p-[4px] rounded-radius3 text-blue_A201 text-left w-[auto]"
                                variant="body17"
                              >
                                $1326,57
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] min-w-[175px] md:ml-[0] sm:ml-[0] ml-[13px] mt-[18px] text-[16px] text-center text-white_A700 w-[auto]"
                              shape="RoundedBorder23"
                              size="7xl"
                              variant="GradientBlueA200DeeppurpleA700"
                            >
                              Collect fees
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start rounded-radius15 shadow-bs9 w-[100%]">
                      <div className="bg-gradient4  p-[1px] rounded-radius15 w-[100%] ">
                        <div className="bg-white_A700 border-solid flex flex-col items-start justify-end p-[27px] sm:px-[20px] rounded-radius15">
                          <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[3px] mt-[3px] md:w-[100%] sm:w-[100%] w-[91%]">
                            <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                              <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                                <Img
                                  src="images/img_bluetooth.svg"
                                  className="h-[26px] my-[auto] w-[26px]"
                                  alt="bluetooth Two"
                                />
                                <Img
                                  src="images/img_floatingicon.svg"
                                  className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                                  alt="floatingicon Two"
                                />
                              </div>
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                BTC - USDT
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-start mt-[34px] md:w-[100%] sm:w-[100%] w-[88%]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                Commission rate:
                              </Text>
                              <Text
                                className="bg-blue_A200_33 font-medium justify-center ml-[3px] p-[4px] rounded-radius3 text-blue_A201 text-left w-[auto]"
                                variant="body17"
                              >
                                0.3%
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[14px] items-start justify-between mt-[7px] w-[100%]">
                              <Text
                                className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                Unclaimed fees:
                              </Text>
                              <Text
                                className="bg-blue_A200_33 font-medium justify-center p-[4px] rounded-radius3 text-blue_A201 text-left w-[auto]"
                                variant="body17"
                              >
                                $1326,57
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] min-w-[175px] md:ml-[0] sm:ml-[0] ml-[13px] mt-[18px] text-[16px] text-center text-white_A700 w-[auto]"
                              shape="RoundedBorder23"
                              size="7xl"
                              variant="GradientBlueA200DeeppurpleA700"
                            >
                              Collect fees
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="flex flex-col items-center justify-start rounded-radius15 shadow-bs9 md:w-[100%] sm:w-[100%] w-[33%]">
                  <div className="bg-gradient4  p-[1px] rounded-radius15 w-[100%] ">
                    <div className="bg-white_A700 border-solid flex flex-col items-start justify-end p-[27px] sm:px-[20px] rounded-radius15">
                      <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[3px] mt-[3px] md:w-[100%] sm:w-[100%] w-[91%]">
                        <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                          <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                            <Img
                              src="images/img_bluetooth.svg"
                              className="h-[26px] my-[auto] w-[26px]"
                              alt="bluetooth Three"
                            />
                            <Img
                              src="images/img_floatingicon.svg"
                              className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                              alt="floatingicon Three"
                            />
                          </div>
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body12"
                          >
                            BTC - USDT
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-[34px] md:w-[100%] sm:w-[100%] w-[88%]">
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            Commission rate:
                          </Text>
                          <Text
                            className="bg-blue_A200_33 font-medium justify-center ml-[3px] p-[4px] rounded-radius3 text-blue_A201 text-left w-[auto]"
                            variant="body17"
                          >
                            0.3%
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[14px] items-start justify-between mt-[7px] w-[100%]">
                          <Text
                            className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            Unclaimed fees:
                          </Text>
                          <Text
                            className="bg-blue_A200_33 font-medium justify-center p-[4px] rounded-radius3 text-blue_A201 text-left w-[auto]"
                            variant="body17"
                          >
                            $1326,57
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[175px] md:ml-[0] sm:ml-[0] ml-[13px] mt-[18px] text-[16px] text-center text-white_A700 w-[auto]"
                          shape="RoundedBorder23"
                          size="7xl"
                          variant="GradientBlueA200DeeppurpleA700"
                        >
                          Collect fees
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
            <div className="bg-white_A700 flex flex-col items-center justify-end p-[28px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col items-center justify-start mt-[3px] md:w-[100%] sm:w-[100%] w-[93%]">
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex md:flex-1 sm:flex-1 flex-col font-poppins items-center justify-end mb-[3px] p-[12px] rounded-radius7 md:w-[100%] sm:w-[100%] w-[12%]">
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
                  <div className="flex md:flex-1 sm:flex-1 flex-col font-poppins gap-[8px] justify-start md:ml-[0] sm:ml-[0] ml-[70px] md:mt-[0] sm:mt-[0] mt-[12px] md:w-[100%] sm:w-[100%] w-[51%]">
                    <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start sm:w-[100%] w-[auto]">
                      <div className="flex flex-col items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Main
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Trade
                        </Text>
                        <Img
                          src="images/img_arrowup_gray_900_16x16.svg"
                          className="h-[16px] w-[16px]"
                          alt="arrowup"
                        />
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Earn
                        </Text>
                        <Img
                          src="images/img_arrowup_gray_900_16x16.svg"
                          className="h-[16px] w-[16px]"
                          alt="arrowup One"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Extra APR
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Referral program
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gradient2  h-[8px] md:ml-[0] sm:ml-[0] ml-[89px] rounded-radius50 w-[8px]"></div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold font-inter leading-[normal] min-w-[175px] md:ml-[0] sm:ml-[0] ml-[213px] md:mt-[0] sm:mt-[0] mt-[2px] text-[16px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder23"
                    size="6xl"
                    variant="GradientBlueA200DeeppurpleA700"
                  >
                    Connect wallet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[600px] h-[768px] sm:h-[885px] max-w-[1180px] mt-[20px] mx-[auto] md:px-[20px] sm:px-[20px] relative w-[100%]">
          <div className="absolute bg-white_A700 bottom-[0] flex flex-col items-center justify-start left-[0] rounded-radius20 shadow-bs2 w-[50%]">
            <div className="flex flex-col gap-[10px] items-start justify-start sm:w-[100%] w-[auto]">
              <div className="bg-white_A700 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[26px] sm:px-[20px] rounded-radius20 w-[100%]">
                <div className="flex flex-row gap-[10px] items-center justify-start sm:ml-[0] ml-[12px] w-[auto]">
                  <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                    <Img
                      src="images/img_bluetooth.svg"
                      className="h-[26px] my-[auto] w-[26px]"
                      alt="bluetooth Four"
                    />
                    <Img
                      src="images/img_floatingicon.svg"
                      className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                      alt="floatingicon Four"
                    />
                  </div>
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    BTC - USDT
                  </Text>
                </div>
                <div className="flex flex-row gap-[20px] items-start justify-start sm:ml-[0] ml-[28px] w-[auto]">
                  <div className="md:h-[23px] sm:h-[23px] h-[37px] relative w-[37px]">
                    <div className="absolute flex flex-col gap-[-5px] h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[0] w-[auto]">
                      <Text
                        className="font-bold text-gray_600 text-left w-[auto]"
                        variant="body17"
                      >
                        APR%
                      </Text>
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        19%
                      </Text>
                    </div>
                    <Line className="absolute bg-gray_900 bottom-[22%] h-[2px] left-[0] w-[95%]" />
                  </div>
                  <div className="flex flex-col gap-[-5px] items-start justify-start w-[auto]">
                    <Text
                      className="bg-clip-text bg-gradient8  font-bold text-left text-transparent w-[auto]"
                      variant="body17"
                    >
                      Boosted APR%
                    </Text>
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      87%
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_menu.svg"
                  className="h-[40px] sm:ml-[0] ml-[27px] w-[40px]"
                  alt="menu"
                />
                <div className="flex sm:flex-1 flex-col items-center justify-start sm:ml-[0] ml-[20px] sm:w-[100%] w-[18%]">
                  <div className="bg-gray_900 flex flex-col items-start justify-start sm:px-[20px] px-[24px] py-[12px] rounded-radius10 w-[auto]">
                    <Text
                      className="bg-clip-text bg-gradient5  font-bold text-left text-transparent w-[auto]"
                      variant="body12"
                    >
                      Farm
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex h-[327px] md:h-[auto] sm:h-[auto] justify-end relative w-[100%]">
                <div className="absolute bg-white_A700 flex sm:flex-col flex-row sm:gap-[20px] inset-x-[0] items-center justify-start mx-[auto] p-[26px] sm:px-[20px] rounded-radius20 top-[0] w-[100%]">
                  <div className="flex flex-row gap-[10px] items-center justify-start sm:ml-[0] ml-[12px] w-[auto]">
                    <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                      <Img
                        src="images/img_bluetooth.svg"
                        className="h-[26px] my-[auto] w-[26px]"
                        alt="bluetooth Five"
                      />
                      <Img
                        src="images/img_floatingicon.svg"
                        className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                        alt="floatingicon Five"
                      />
                    </div>
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      BTC - USDT
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[20px] items-start justify-start sm:ml-[0] ml-[28px] w-[auto]">
                    <div className="md:h-[23px] sm:h-[23px] h-[37px] relative w-[37px]">
                      <div className="absolute flex flex-col gap-[-5px] h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[0] w-[auto]">
                        <Text
                          className="font-bold text-gray_600 text-left w-[auto]"
                          variant="body17"
                        >
                          APR%
                        </Text>
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          19%
                        </Text>
                      </div>
                      <Line className="absolute bg-gray_900 bottom-[22%] h-[2px] left-[0] w-[95%]" />
                    </div>
                    <div className="flex flex-col gap-[-5px] items-start justify-start w-[auto]">
                      <Text
                        className="bg-clip-text bg-gradient8  font-bold text-left text-transparent w-[auto]"
                        variant="body17"
                      >
                        Boosted APR%
                      </Text>
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        87%
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_menu.svg"
                    className="h-[40px] sm:ml-[0] ml-[27px] w-[40px]"
                    alt="menu One"
                  />
                  <div className="flex sm:flex-1 flex-col items-center justify-start sm:ml-[0] ml-[20px] sm:w-[100%] w-[18%]">
                    <div className="bg-gray_900 flex flex-col items-start justify-start sm:px-[20px] px-[24px] py-[12px] rounded-radius10 w-[auto]">
                      <Text
                        className="bg-clip-text bg-gradient5  font-bold text-left text-transparent w-[auto]"
                        variant="body12"
                      >
                        Farm
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white_A700 flex sm:flex-col flex-row sm:gap-[20px] h-[max-content] inset-[0] items-center justify-center m-[auto] p-[26px] sm:px-[20px] rounded-radius20 w-[100%]">
                  <div className="flex flex-row gap-[10px] items-center justify-start sm:ml-[0] ml-[12px] w-[auto]">
                    <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                      <Img
                        src="images/img_bluetooth.svg"
                        className="h-[26px] my-[auto] w-[26px]"
                        alt="bluetooth Six"
                      />
                      <Img
                        src="images/img_floatingicon.svg"
                        className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                        alt="floatingicon Six"
                      />
                    </div>
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      BTC - USDT
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[20px] items-start justify-start sm:ml-[0] ml-[28px] w-[auto]">
                    <div className="md:h-[23px] sm:h-[23px] h-[37px] relative w-[37px]">
                      <div className="absolute flex flex-col gap-[-5px] h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[0] w-[auto]">
                        <Text
                          className="font-bold text-gray_600 text-left w-[auto]"
                          variant="body17"
                        >
                          APR%
                        </Text>
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          19%
                        </Text>
                      </div>
                      <Line className="absolute bg-gray_900 bottom-[22%] h-[2px] left-[0] w-[95%]" />
                    </div>
                    <div className="flex flex-col gap-[-5px] items-start justify-start w-[auto]">
                      <Text
                        className="bg-clip-text bg-gradient8  font-bold text-left text-transparent w-[auto]"
                        variant="body17"
                      >
                        Boosted APR%
                      </Text>
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        87%
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_menu.svg"
                    className="h-[40px] sm:ml-[0] ml-[27px] w-[40px]"
                    alt="menu Two"
                  />
                  <div className="flex sm:flex-1 flex-col items-center justify-start sm:ml-[0] ml-[20px] sm:w-[100%] w-[18%]">
                    <div className="bg-gray_900 flex flex-col items-start justify-start sm:px-[20px] px-[24px] py-[12px] rounded-radius10 w-[auto]">
                      <Text
                        className="bg-clip-text bg-gradient5  font-bold text-left text-transparent w-[auto]"
                        variant="body12"
                      >
                        Farm
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex sm:flex-col flex-row sm:gap-[20px] h-[100%] items-center justify-start mb-[7px] mt-[auto] mx-[auto] p-[26px] sm:px-[20px] rounded-radius20 w-[100%]">
                  <div className="flex flex-row gap-[10px] items-center justify-start sm:ml-[0] ml-[12px] w-[auto]">
                    <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                      <Img
                        src="images/img_bluetooth.svg"
                        className="h-[26px] my-[auto] w-[26px]"
                        alt="bluetooth Seven"
                      />
                      <Img
                        src="images/img_floatingicon.svg"
                        className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                        alt="floatingicon Seven"
                      />
                    </div>
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      BTC - USDT
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[20px] items-start justify-start sm:ml-[0] ml-[28px] w-[auto]">
                    <div className="md:h-[23px] sm:h-[23px] h-[37px] relative w-[37px]">
                      <div className="absolute flex flex-col gap-[-5px] h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[0] w-[auto]">
                        <Text
                          className="font-bold text-gray_600 text-left w-[auto]"
                          variant="body17"
                        >
                          APR%
                        </Text>
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          19%
                        </Text>
                      </div>
                      <Line className="absolute bg-gray_900 bottom-[22%] h-[2px] left-[0] w-[95%]" />
                    </div>
                    <div className="flex flex-col gap-[-5px] items-start justify-start w-[auto]">
                      <Text
                        className="bg-clip-text bg-gradient8  font-bold text-left text-transparent w-[auto]"
                        variant="body17"
                      >
                        Boosted APR%
                      </Text>
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        87%
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_menu.svg"
                    className="h-[40px] sm:ml-[0] ml-[27px] w-[40px]"
                    alt="menu Three"
                  />
                  <div className="flex sm:flex-1 flex-col items-center justify-start sm:ml-[0] ml-[20px] sm:w-[100%] w-[18%]">
                    <div className="bg-gray_900 flex flex-col items-start justify-start sm:px-[20px] px-[24px] py-[12px] rounded-radius10 w-[auto]">
                      <Text
                        className="bg-clip-text bg-gradient5  font-bold text-left text-transparent w-[auto]"
                        variant="body12"
                      >
                        Farm
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_frame98_gray_601.svg"
                  className="absolute h-[327px] inset-[0] justify-center m-[auto] w-[auto]"
                  alt="FrameNinetyEight"
                />
              </div>
              <div className="bg-white_A700 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[26px] sm:px-[20px] rounded-radius20 w-[100%]">
                <div className="flex flex-row gap-[10px] items-center justify-start sm:ml-[0] ml-[12px] w-[auto]">
                  <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                    <Img
                      src="images/img_bluetooth.svg"
                      className="h-[26px] my-[auto] w-[26px]"
                      alt="bluetooth Eight"
                    />
                    <Img
                      src="images/img_floatingicon.svg"
                      className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                      alt="floatingicon Eight"
                    />
                  </div>
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    BTC - USDT
                  </Text>
                </div>
                <div className="flex flex-row gap-[20px] items-start justify-start sm:ml-[0] ml-[28px] w-[auto]">
                  <div className="md:h-[23px] sm:h-[23px] h-[37px] relative w-[37px]">
                    <div className="absolute flex flex-col gap-[-5px] h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[0] w-[auto]">
                      <Text
                        className="font-bold text-gray_600 text-left w-[auto]"
                        variant="body17"
                      >
                        APR%
                      </Text>
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        19%
                      </Text>
                    </div>
                    <Line className="absolute bg-gray_900 bottom-[22%] h-[2px] left-[0] w-[95%]" />
                  </div>
                  <div className="flex flex-col gap-[-5px] items-start justify-start w-[auto]">
                    <Text
                      className="bg-clip-text bg-gradient8  font-bold text-left text-transparent w-[auto]"
                      variant="body17"
                    >
                      Boosted APR%
                    </Text>
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      87%
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_menu.svg"
                  className="h-[40px] sm:ml-[0] ml-[27px] w-[40px]"
                  alt="menu Four"
                />
                <div className="flex sm:flex-1 flex-col items-center justify-start sm:ml-[0] ml-[20px] sm:w-[100%] w-[18%]">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[92px] text-[16px] text-center text-deep_purple_A202 w-[auto]"
                    shape="RoundedBorder10"
                    size="7xl"
                    variant="FillGray900"
                  >
                    Farm
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] pt-[158px] top-[0] w-[100%]">
            <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-end justify-between w-[100%]">
                <Text
                  className="font-bold text-gray_900 text-left w-[auto]"
                  variant="body7"
                >
                  Liquidity Pools
                </Text>
                <Text
                  className="font-bold sm:mt-[0] mt-[11px] text-gray_600 text-left w-[auto]"
                  variant="body12"
                >
                  Deposit token into the pools. Farm liquidity.
                </Text>
              </div>
              <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start pb-[212px] md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="flex flex-col items-start justify-start sm:w-[100%] w-[auto]">
                    <div className="bg-white_A700 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[26px] sm:px-[20px] rounded-radius20 w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start sm:ml-[0] ml-[12px] w-[auto]">
                        <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                          <Img
                            src="images/img_bluetooth.svg"
                            className="h-[26px] my-[auto] w-[26px]"
                            alt="bluetooth Nine"
                          />
                          <Img
                            src="images/img_floatingicon.svg"
                            className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                            alt="floatingicon Nine"
                          />
                        </div>
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          BTC - USDT
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[20px] items-start justify-start sm:ml-[0] ml-[28px] w-[auto]">
                        <div className="md:h-[23px] sm:h-[23px] h-[37px] relative w-[37px]">
                          <div className="absolute flex flex-col gap-[-5px] h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[0] w-[auto]">
                            <Text
                              className="font-bold text-gray_600 text-left w-[auto]"
                              variant="body17"
                            >
                              APR%
                            </Text>
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              19%
                            </Text>
                          </div>
                          <Line className="absolute bg-gray_900 bottom-[22%] h-[2px] left-[0] w-[95%]" />
                        </div>
                        <div className="flex flex-col gap-[-5px] items-start justify-start w-[auto]">
                          <Text
                            className="bg-clip-text bg-gradient8  font-bold text-left text-transparent w-[auto]"
                            variant="body17"
                          >
                            Boosted APR%
                          </Text>
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body12"
                          >
                            87%
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_menu.svg"
                        className="h-[40px] sm:ml-[0] ml-[27px] w-[40px]"
                        alt="menu Five"
                      />
                      <div className="flex sm:flex-1 flex-col items-center justify-start sm:ml-[0] ml-[20px] sm:w-[100%] w-[18%]">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[92px] text-[16px] text-center text-deep_purple_A202 w-[auto]"
                          shape="RoundedBorder10"
                          size="7xl"
                          variant="FillGray900"
                        >
                          Farm
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 sm:flex-1 flex-col gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <List
                    className="flex-col gap-[20px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start my-[0] p-[35px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                        <Button
                          className="flex h-[39px] items-center justify-center w-[39px]"
                          shape="icbRoundedBorder19"
                          size="lgIcn"
                          variant="icbFillPink4006c"
                        >
                          <Img
                            src="images/img_menu_pink_400.svg"
                            className=""
                            alt="menu Six"
                          />
                        </Button>
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          BEOM
                        </Text>
                      </div>
                      <div className="h-[37px] md:h-[auto] sm:h-[auto] sm:ml-[0] ml-[46px] relative sm:w-[100%] w-[34%]">
                        <div className="absolute flex flex-row gap-[30px] h-[max-content] inset-[0] items-center justify-between m-[auto] w-[auto]">
                          <div className="flex flex-col gap-[-5px] items-start justify-start w-[auto]">
                            <Text
                              className="font-bold text-gray_600 text-left w-[auto]"
                              variant="body17"
                            >
                              APR%
                            </Text>
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              410%
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[-5px] items-start justify-start w-[auto]">
                            <Text
                              className="bg-clip-text bg-gradient8  font-bold text-left text-transparent w-[auto]"
                              variant="body17"
                            >
                              Boosted APR%
                            </Text>
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              1300%
                            </Text>
                          </div>
                        </div>
                        <Line className="absolute bg-gray_900 bottom-[22%] h-[2px] left-[0] w-[28%]" />
                      </div>
                      <Img
                        src="images/img_menu.svg"
                        className="h-[40px] sm:ml-[0] ml-[46px] w-[40px]"
                        alt="menu One"
                      />
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[92px] sm:ml-[0] ml-[20px] text-[16px] text-center text-deep_purple_A202 w-[auto]"
                        shape="RoundedBorder10"
                        size="7xl"
                        variant="FillGray900"
                      >
                        Farm
                      </Button>
                    </div>
                    <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start my-[0] p-[35px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                        <Button
                          className="flex h-[39px] items-center justify-center w-[39px]"
                          shape="icbRoundedBorder19"
                          size="lgIcn"
                          variant="icbFillPink4006c"
                        >
                          <Img
                            src="images/img_menu_pink_400.svg"
                            className=""
                            alt="menu Seven"
                          />
                        </Button>
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          BEOM
                        </Text>
                      </div>
                      <div className="h-[37px] md:h-[auto] sm:h-[auto] sm:ml-[0] ml-[46px] relative sm:w-[100%] w-[34%]">
                        <div className="absolute flex flex-row gap-[30px] h-[max-content] inset-[0] items-center justify-between m-[auto] w-[auto]">
                          <div className="flex flex-col gap-[-5px] items-start justify-start w-[auto]">
                            <Text
                              className="font-bold text-gray_600 text-left w-[auto]"
                              variant="body17"
                            >
                              APR%
                            </Text>
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              410%
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[-5px] items-start justify-start w-[auto]">
                            <Text
                              className="bg-clip-text bg-gradient8  font-bold text-left text-transparent w-[auto]"
                              variant="body17"
                            >
                              Boosted APR%
                            </Text>
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              1300%
                            </Text>
                          </div>
                        </div>
                        <Line className="absolute bg-gray_900 bottom-[22%] h-[2px] left-[0] w-[28%]" />
                      </div>
                      <Img
                        src="images/img_menu.svg"
                        className="h-[40px] sm:ml-[0] ml-[46px] w-[40px]"
                        alt="menu One One"
                      />
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[92px] sm:ml-[0] ml-[20px] text-[16px] text-center text-deep_purple_A202 w-[auto]"
                        shape="RoundedBorder10"
                        size="7xl"
                        variant="FillGray900"
                      >
                        Farm
                      </Button>
                    </div>
                  </List>
                  <List
                    className="flex-col gap-[108px] md:gap-[40px] sm:gap-[40px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="bg-white_A700 flex flex-1 flex-col justify-end pt-[35px] sm:px-[20px] px-[35px] rounded-radius16 shadow-bs2 w-[100%]">
                      <Text
                        className="bg-clip-text bg-gradient5  bg-gray_900 font-bold justify-center md:ml-[0] sm:ml-[0] ml-[418px] sm:px-[20px] px-[24px] py-[12px] text-left text-transparent w-[auto]"
                        variant="body12"
                      >
                        Farm
                      </Text>
                      <Img
                        src="images/img_group224.svg"
                        className="h-[1px] md:ml-[0] sm:ml-[0] ml-[358px] mr-[112px] mt-[8px] w-[auto]"
                        alt="Group224"
                      />
                      <div className="flex flex-row gap-[10px] items-center justify-start mr-[auto] mt-[8px] w-[auto]">
                        <div className="flex flex-col gap-[9px] items-center justify-start w-[41%]">
                          <div className="bg-pink_400_6c h-[1px] rounded-radius19 w-[100%]"></div>
                          <Img
                            src="images/img_shape.svg"
                            className="h-[1px] w-[auto]"
                            alt="Shape"
                          />
                        </div>
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          BEOM
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[26px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[142px] mr-[198px] mt-[9px] md:w-[100%] sm:w-[100%] w-[34%]">
                        <div className="flex flex-row gap-[30px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] w-[auto]">
                          <div className="flex flex-col gap-[-5px] items-start justify-start w-[auto]">
                            <Text
                              className="font-bold text-gray_600 text-left w-[auto]"
                              variant="body17"
                            >
                              APR%
                            </Text>
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              410%
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[-5px] items-start justify-start w-[auto]">
                            <Text
                              className="bg-clip-text bg-gradient8  font-bold text-left text-transparent w-[auto]"
                              variant="body17"
                            >
                              Boosted APR%
                            </Text>
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              1300%
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-gray_900 h-[2px] w-[28%]" />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col justify-end pt-[35px] sm:px-[20px] px-[35px] shadow-bs2 w-[100%]">
                      <Text
                        className="bg-clip-text bg-gradient5  bg-gray_900 font-bold justify-center md:ml-[0] sm:ml-[0] ml-[418px] sm:px-[20px] px-[24px] py-[12px] text-left text-transparent w-[auto]"
                        variant="body12"
                      >
                        Farm
                      </Text>
                      <Img
                        src="images/img_group224.svg"
                        className="h-[1px] md:ml-[0] sm:ml-[0] ml-[358px] mr-[112px] mt-[148px] w-[auto]"
                        alt="Group224 One"
                      />
                      <div className="flex flex-row gap-[10px] items-center justify-start mr-[auto] mt-[148px] w-[auto]">
                        <div className="flex flex-col gap-[9px] items-center justify-start w-[41%]">
                          <div className="bg-pink_400_6c h-[1px] rounded-radius19 w-[100%]"></div>
                          <Img
                            src="images/img_shape.svg"
                            className="h-[1px] w-[auto]"
                            alt="Shape One"
                          />
                        </div>
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          BEOM
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[26px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[142px] mr-[198px] mt-[149px] md:w-[100%] sm:w-[100%] w-[34%]">
                        <div className="flex flex-row gap-[30px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] w-[auto]">
                          <div className="flex flex-col gap-[-5px] items-start justify-start w-[auto]">
                            <Text
                              className="font-bold text-gray_600 text-left w-[auto]"
                              variant="body17"
                            >
                              APR%
                            </Text>
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              410%
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[-5px] items-start justify-start w-[auto]">
                            <Text
                              className="bg-clip-text bg-gradient8  font-bold text-left text-transparent w-[auto]"
                              variant="body17"
                            >
                              Boosted APR%
                            </Text>
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              1300%
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-gray_900 h-[2px] w-[28%]" />
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-gray_900 flex items-center justify-center mt-[110px] w-[100%]">
          <div className="flex flex-col items-center justify-center mb-[43px] mt-[46px] mx-[auto] w-[89%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-center w-[100%]">
              <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[22%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="bg-gray_902 flex flex-col gap-[23px] items-center justify-start p-[20px] rounded-radius15 w-[100%]">
                    <div className="flex flex-row gap-[19px] items-center justify-start w-[auto]">
                      <div className="flex flex-row gap-[7px] items-center justify-center w-[auto]">
                        <Button
                          className="flex h-[40px] items-center justify-center w-[40px]"
                          shape="icbRoundedBorder19"
                          size="mdIcn"
                          variant="icbFillLightblue4007e"
                        >
                          <Img
                            src="images/img_fire.svg"
                            className=""
                            alt="fire"
                          />
                        </Button>
                        <div className="flex flex-col gap-[-5px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-gray_600 text-left w-[auto]"
                            variant="body17"
                          >
                            SODT
                          </Text>
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body17"
                          >
                            $0.62
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[99px] text-[12px] text-center text-white_A700 w-[auto]"
                        shape="CircleBorder19"
                        size="4xl"
                        variant="GradientDeeppurple400Purple300"
                      >
                        Buy SODT
                      </Button>
                    </div>
                    <div className="flex flex-col font-inter items-center justify-start md:w-[100%] sm:w-[100%] w-[90%]">
                      <div className="flex flex-row gap-[10px] items-start justify-start w-[196px]">
                        <ul className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] sm:w-[100%] w-[58%] common-column-list">
                          <li className="w-[auto]">
                            <Text
                              className="cursor-pointer font-bold text-gray_600 text-left"
                              variant="body17"
                            >
                              Max supply:
                            </Text>
                          </li>
                          <li className="mt-[10px] w-[auto]">
                            <a
                              className="cursor-pointer font-bold text-[12px] text-gray_600 text-left"
                              href="#"
                            >
                              Total supply:
                            </a>
                          </li>
                          <li className="mt-[10px] w-[auto]">
                            <a
                              className="cursor-pointer font-bold text-[12px] text-gray_600 text-left"
                              href="#"
                            >
                              Circulating supply:
                            </a>
                          </li>
                          <li className="mt-[10px] w-[auto]">
                            <a
                              className="cursor-pointer font-bold text-[12px] text-gray_600 text-left"
                              href="#"
                            >
                              Total burned:
                            </a>
                          </li>
                          <li className="mt-[10px] w-[auto]">
                            <a
                              className="cursor-pointer font-bold text-[12px] text-gray_600 text-left"
                              href="#"
                            >
                              Market cap:
                            </a>
                          </li>
                        </ul>
                        <ul className="flex flex-col font-poppins items-start justify-start pr-[2px] py-[2px] md:w-[100%] sm:w-[100%] w-[40%] common-column-list">
                          <li className="w-[auto]">
                            <Text
                              className="cursor-pointer font-bold text-left text-white_A700"
                              variant="body17"
                            >
                              15 000 000
                            </Text>
                          </li>
                          <li className="mt-[13px] w-[auto]">
                            <a
                              className="cursor-pointer font-bold text-[12px] text-left text-white_A700"
                              href="#"
                            >
                              9 073 652
                            </a>
                          </li>
                          <li className="mt-[13px] w-[auto]">
                            <a
                              className="cursor-pointer font-bold text-[12px] text-left text-white_A700"
                              href="#"
                            >
                              7 654 228
                            </a>
                          </li>
                          <li className="mt-[12px] w-[auto]">
                            <a
                              className="cursor-pointer font-bold text-[12px] text-left text-white_A700"
                              href="#"
                            >
                              1 276 445
                            </a>
                          </li>
                          <li className="mt-[10px] mb-[1px] w-[auto]">
                            <a
                              className="cursor-pointer font-bold text-[12px] text-left text-white_A700"
                              href="#"
                            >
                              $37 654 213
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[93px] md:w-[100%] sm:w-[100%] w-[37%]">
                <div className="flex flex-col gap-[47px] items-start justify-start w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[60px] items-start justify-start sm:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[15px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-bluegray_101 text-left w-[auto]"
                        variant="body12"
                      >
                        About us
                      </Text>
                      <ul className="flex flex-col gap-[5px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto] common-column-list">
                        <li className="w-[auto]">
                          <Text
                            className="cursor-pointer font-normal not-italic text-bluegray_101 text-left"
                            variant="body14"
                          >
                            Blog
                          </Text>
                        </li>
                        <li className="w-[auto]">
                          <a
                            className="cursor-pointer font-normal not-italic text-[14px] text-bluegray_101 text-left"
                            href="#"
                          >
                            Docs
                          </a>
                        </li>
                        <li className="w-[auto]">
                          <a
                            className="cursor-pointer font-normal not-italic text-[14px] text-bluegray_101 text-left"
                            href="#"
                          >
                            White Paper
                          </a>
                        </li>
                        <li className="w-[auto]">
                          <a
                            className="cursor-pointer font-normal not-italic text-[14px] text-bluegray_101 text-left"
                            href="#"
                          >
                            Github
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-[15px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-bluegray_101 text-left w-[auto]"
                        variant="body12"
                      >
                        Sitemap
                      </Text>
                      <ul className="flex flex-col gap-[5px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto] common-column-list">
                        <li className="w-[auto]">
                          <Text
                            className="cursor-pointer font-normal not-italic text-bluegray_101 text-left"
                            variant="body14"
                          >
                            Main
                          </Text>
                        </li>
                        <li className="w-[auto]">
                          <a
                            className="cursor-pointer font-normal not-italic text-[14px] text-bluegray_101 text-left"
                            href="#"
                          >
                            Trade
                          </a>
                        </li>
                        <li className="w-[auto]">
                          <a
                            className="cursor-pointer font-normal not-italic text-[14px] text-bluegray_101 text-left"
                            href="#"
                          >
                            Earn
                          </a>
                        </li>
                        <li className="w-[auto]">
                          <a
                            className="cursor-pointer font-normal not-italic text-[14px] text-bluegray_101 text-left"
                            href="#"
                          >
                            Extra APR
                          </a>
                        </li>
                        <li className="w-[auto]">
                          <a
                            className="cursor-pointer font-normal not-italic text-[14px] text-bluegray_101 text-left"
                            href="#"
                          >
                            Referal program
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-[15px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-bluegray_101 text-left w-[auto]"
                        variant="body12"
                      >
                        Products
                      </Text>
                      <ul className="flex flex-col gap-[5px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto] common-column-list">
                        <li className="w-[auto]">
                          <Text
                            className="cursor-pointer font-normal not-italic text-bluegray_101 text-left"
                            variant="body14"
                          >
                            Free pool
                          </Text>
                        </li>
                        <li className="w-[auto]">
                          <a
                            className="cursor-pointer font-normal not-italic text-[14px] text-bluegray_101 text-left"
                            href="#"
                          >
                            Mystery pool
                          </a>
                        </li>
                        <li className="w-[auto]">
                          <a
                            className="cursor-pointer font-normal not-italic text-[14px] text-bluegray_101 text-left"
                            href="#"
                          >
                            V3 Pools
                          </a>
                        </li>
                        <li className="w-[auto]">
                          <a
                            className="cursor-pointer font-normal not-italic text-[14px] text-bluegray_101 text-left"
                            href="#"
                          >
                            Farm
                          </a>
                        </li>
                        <li className="w-[auto]">
                          <a
                            className="cursor-pointer font-normal not-italic text-[14px] text-bluegray_101 text-left"
                            href="#"
                          >
                            Extra APR
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Text
                    className="not-italic text-gray_600 text-left w-[auto]"
                    variant="body19"
                  >
                    © 2022 “Swaptos”. We use cookies.{" "}
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[22px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[60px] md:w-[100%] sm:w-[100%] w-[29%]">
                <Text
                  className="font-bold text-bluegray_101 text-left w-[auto]"
                  variant="body12"
                >
                  Follow us:
                </Text>
                <div className="flex flex-row gap-[10px] items-start justify-start w-[auto]">
                  <Button
                    className="flex h-[40px] items-center justify-center w-[40px]"
                    shape="icbRoundedBorder19"
                    size="lgIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img src="images/img_send.svg" className="" alt="send" />
                  </Button>
                  <Button
                    className="common-pointer flex h-[40px] items-center justify-center w-[40px]"
                    onClick={handleNavigate29}
                    shape="icbRoundedBorder19"
                    size="lgIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_twitter.svg"
                      className=""
                      alt="twitter"
                    />
                  </Button>
                  <Button
                    className="flex h-[40px] items-center justify-center w-[40px]"
                    shape="icbRoundedBorder19"
                    size="lgIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_vector_gray_900.svg"
                      className=""
                      alt="Vector Two"
                    />
                  </Button>
                  <Button
                    className="flex h-[40px] items-center justify-center w-[40px]"
                    shape="icbRoundedBorder19"
                    size="lgIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_socials.svg"
                      className=""
                      alt="socials"
                    />
                  </Button>
                  <Button
                    className="flex h-[40px] items-center justify-center w-[40px]"
                    shape="icbRoundedBorder19"
                    size="lgIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_camera.svg"
                      className="h-[20px]"
                      alt="camera"
                    />
                  </Button>
                  <Button
                    className="flex h-[40px] items-center justify-center w-[40px]"
                    shape="icbRoundedBorder19"
                    size="lgIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img src="images/img_eye.svg" className="" alt="eye" />
                  </Button>
                  <Button
                    className="common-pointer flex h-[40px] items-center justify-center w-[40px]"
                    onClick={handleNavigate20}
                    shape="icbRoundedBorder19"
                    size="lgIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_facebook.svg"
                      className=""
                      alt="facebook"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LiquidityconnectedwallePage;
