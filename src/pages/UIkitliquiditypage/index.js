import React from "react";

import { List, Text, Img, Button, Switch, Input, Line } from "components";

const UIkitliquiditypagePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-end mx-[auto] sm:pl-[20px] pl-[37px] pt-[37px] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start max-w-[4915px] mt-[72px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex md:flex-1 sm:flex-1 flex-col md:gap-[40px] sm:gap-[40px] gap-[77px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
            <List
              className="flex-col md:gap-[40px] sm:gap-[40px] gap-[77px] grid items-center w-[100%]"
              orientation="vertical"
            >
              <div className="bg-white_A700 flex flex-1 md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[93px] items-end justify-start p-[26px] sm:px-[20px] rounded-radius30 shadow-bs2 w-[100%]">
                <Text
                  className="font-medium font-poppins mb-[367px] md:ml-[0] sm:ml-[0] ml-[4px] md:mt-[0] sm:mt-[0] mt-[9px] text-gray_900 text-left w-[auto]"
                  variant="body4"
                >
                  Liquidity
                </Text>
                <div className="flex md:flex-1 sm:flex-1 flex-col font-poppins gap-[12px] items-center justify-start mb-[167px] md:mt-[0] sm:mt-[0] mt-[156px] md:w-[100%] sm:w-[100%] w-[51%]">
                  <Img
                    src="images/img_trash.svg"
                    className="h-[50px] w-[50px]"
                    alt="trash"
                  />
                  <Text
                    className="font-medium text-gray_400 text-left w-[auto]"
                    variant="body9"
                  >
                    Your active liquidity positions will appear here
                  </Text>
                </div>
                <Button
                  className="flex items-center justify-center mb-[366px] min-w-[198px] text-center w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_plus.svg"
                      className="mr-[10px] text-center"
                      alt="plus"
                    />
                  }
                  shape="RoundedBorder13"
                  size="2xl"
                  variant="FillGray400"
                >
                  <div className="bg-transparent cursor-pointer font-bold font-inter leading-[normal] text-[16px] text-left text-white_A700">
                    Add new position{" "}
                  </div>
                </Button>
              </div>
              <div className="bg-white_A700 flex flex-1 md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-end justify-start p-[26px] sm:px-[20px] rounded-radius30 shadow-bs2 w-[100%]">
                <Text
                  className="font-medium font-poppins mb-[367px] md:ml-[0] sm:ml-[0] ml-[4px] md:mt-[0] sm:mt-[0] mt-[9px] text-gray_900 text-left w-[auto]"
                  variant="body4"
                >
                  Liquidity
                </Text>
                <div className="flex md:flex-1 sm:flex-1 flex-col font-poppins gap-[12px] items-center justify-start mb-[167px] md:ml-[0] sm:ml-[0] ml-[118px] md:mt-[0] sm:mt-[0] mt-[156px] md:w-[100%] sm:w-[100%] w-[45%]">
                  <Img
                    src="images/img_warning_gray_400.svg"
                    className="h-[50px] w-[50px]"
                    alt="warning"
                  />
                  <Text
                    className="font-medium text-gray_400 text-left w-[auto]"
                    variant="body9"
                  >
                    Your connected network is unsupported.
                  </Text>
                </div>
                <Button
                  className="flex items-center justify-center mb-[366px] md:ml-[0] min-w-[198px] ml-[25px] sm:ml-[0] text-center w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_plus.svg"
                      className="mr-[10px] text-center"
                      alt="plus"
                    />
                  }
                  shape="RoundedBorder13"
                  size="2xl"
                  variant="FillGray400"
                >
                  <div className="bg-transparent cursor-pointer font-bold font-inter leading-[normal] text-[16px] text-left text-white_A700">
                    Add new position{" "}
                  </div>
                </Button>
              </div>
              <div className="bg-white_A700 flex flex-1 md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-end justify-start p-[26px] sm:px-[20px] rounded-radius30 shadow-bs2 w-[100%]">
                <Text
                  className="font-medium font-poppins mb-[367px] md:ml-[0] sm:ml-[0] ml-[4px] md:mt-[0] sm:mt-[0] mt-[9px] text-gray_900 text-left w-[auto]"
                  variant="body4"
                >
                  Liquidity
                </Text>
                <div className="flex md:flex-1 sm:flex-1 flex-col font-poppins gap-[12px] items-center justify-start mb-[167px] md:ml-[0] sm:ml-[0] ml-[134px] md:mt-[0] sm:mt-[0] mt-[156px] md:w-[100%] sm:w-[100%] w-[41%]">
                  <Img
                    src="images/img_trash.svg"
                    className="h-[50px] w-[50px]"
                    alt="trash One"
                  />
                  <Text
                    className="font-medium text-gray_400 text-left w-[auto]"
                    variant="body9"
                  >
                    Your active liquidity will appear here.
                  </Text>
                </div>
                <Button
                  className="flex items-center justify-center mb-[366px] md:ml-[0] min-w-[198px] ml-[42px] sm:ml-[0] text-center w-[auto]"
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
            </List>
            <div className="bg-white_A700 flex flex-col items-center justify-start p-[26px] sm:px-[20px] rounded-radius30 shadow-bs2 w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start mb-[201px] md:w-[100%] sm:w-[100%] w-[99%]">
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
            <Switch value={true} className="w-[6%]" />
            <Switch value={false} className="w-[6%]" />
            <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] sm:w-[100%] w-[17%]">
              <Text
                className="font-medium text-gray_600 text-left w-[auto]"
                variant="body12"
              >
                BTC
              </Text>
              <Switch value={true} className="w-[34%]" />
              <Text
                className="font-medium text-gray_600 text-left w-[auto]"
                variant="body12"
              >
                USDT
              </Text>
            </div>
            <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] sm:w-[100%] w-[17%]">
              <Text
                className="font-medium text-gray_600 text-left w-[auto]"
                variant="body12"
              >
                BTC
              </Text>
              <Switch value={false} className="w-[34%]" />
              <Text
                className="font-medium text-gray_600 text-left w-[auto]"
                variant="body12"
              >
                USDT
              </Text>
            </div>
            <List
              className="flex-col md:gap-[40px] sm:gap-[40px] gap-[77px] grid items-center w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                    <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-end p-[13px] rounded-radius20 shadow-bs2 w-[100%]">
                      <div className="md:h-[38px] sm:h-[38px] h-[52px] md:mt-[0] sm:mt-[0] mt-[14px] relative md:w-[100%] sm:w-[100%] w-[30%]">
                        <Img
                          src="images/img_cursor_white_a701.svg"
                          className="absolute bottom-[0] h-[20px] left-[6%] w-[auto]"
                          alt="cursor"
                        />
                        <div className="absolute flex flex-row gap-[20px] inset-x-[0] items-center justify-between mx-[auto] top-[0] w-[100%]">
                          <Button
                            className="flex h-[32px] items-center justify-center my-[3px] w-[32px]"
                            shape="icbCircleBorder15"
                            size="mdIcn"
                            variant="icbFillGray5004c"
                          >
                            <Img
                              src="images/img_arrowleft.svg"
                              className="h-[15px]"
                              alt="arrowleft"
                            />
                          </Button>
                          <div className="flex flex-row gap-[12px] items-center justify-center w-[auto]">
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
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body4"
                            >
                              BTC - USDT
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="bg-blue_A200_4c font-medium justify-center md:ml-[0] sm:ml-[0] ml-[10px] md:mt-[0] sm:mt-[0] my-[22px] px-[4px] py-[2px] rounded-radius3 text-blue_A201 text-left w-[36px]"
                        variant="body17"
                      >
                        0,3%
                      </Text>
                      <Text
                        className="bg-gray_500_33 font-medium justify-center md:ml-[0] sm:ml-[0] ml-[198px] md:mt-[0] sm:mt-[0] my-[21px] px-[14px] py-[3px] rounded-radius12 text-gray_600 text-left w-[132px]"
                        variant="body17"
                      >
                        Add liquidity
                      </Text>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[167px] md:ml-[0] sm:ml-[0] ml-[15px] mr-[19px] text-[16px] text-center text-white_A700 w-[auto]"
                        shape="RoundedBorder13"
                        size="4xl"
                        variant="GradientBlueA200DeeppurpleA700"
                      >
                        Remove liquidity
                      </Button>
                    </div>
                    <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-start justify-between w-[100%]">
                      <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <div className="bg-gray_903 flex flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
                          <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[20px] rounded-radius15 w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group70.png')",
                              }}
                            >
                              <div className="flex flex-col gap-[55px] justify-start my-[2px] w-[100%]">
                                <div className="flex flex-col items-end justify-start md:ml-[0] sm:ml-[0] ml-[65px] md:w-[100%] sm:w-[100%] w-[73%]">
                                  <Text
                                    className="font-medium text-gray_50 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    <span className="text-white_A700 text-[12px] font-poppins font-bold">
                                      WETC
                                    </span>
                                    <span className="text-white_A700 text-[12px] font-poppins">
                                      {" "}
                                      0xc02aaa39b223fe8d
                                    </span>
                                  </Text>
                                  <Text
                                    className="font-bold mt-[11px] text-gray_50 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    <span className="text-white_A700 text-[12px] font-poppins">
                                      ID:{" "}
                                    </span>
                                    <span className="text-white_A700 text-[12px] font-poppins font-medium">
                                      346271
                                    </span>
                                  </Text>
                                  <Text
                                    className="font-bold mt-[8px] text-gray_50 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    <span className="text-white_A700 text-[12px] font-poppins">
                                      Min tick:{" "}
                                    </span>
                                    <span className="text-white_A700 text-[12px] font-poppins font-medium">
                                      281712
                                    </span>
                                  </Text>
                                  <Text
                                    className="font-bold mt-[8px] text-gray_50 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    <span className="text-white_A700 text-[12px] font-poppins">
                                      Max tick:{" "}
                                    </span>
                                    <span className="text-white_A700 text-[12px] font-poppins font-medium">
                                      292413
                                    </span>
                                  </Text>
                                  <Img
                                    src="images/img_vector53stroke_white_a701.png"
                                    className="h-[319px] md:h-[auto] sm:h-[auto] mt-[63px] object-cover sm:w-[100%] w-[auto]"
                                    alt="Vector53Stroke"
                                  />
                                </div>
                                <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[72%]">
                                  <Text
                                    className="font-bold text-left text-white_A700 w-[auto]"
                                    variant="body1"
                                  >
                                    weth/wbtc
                                  </Text>
                                  <Text
                                    className="mt-[4px] text-left text-white_A700 w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    0.3%
                                  </Text>
                                  <Text
                                    className="font-medium mt-[13px] text-gray_50 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    <span className="text-white_A700 text-[12px] font-poppins font-bold">
                                      WBTC
                                    </span>
                                    <span className="text-white_A700 text-[12px] font-poppins">
                                      {" "}
                                      0xc02aaa39b223fe8d
                                    </span>
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-start justify-end mb-[466px] p-[26px] sm:px-[20px] rounded-radius15 shadow-bs2 md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[4px] mt-[6px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Liquidity
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[4px] mt-[11px] text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          $5000.47
                        </Text>
                        <div className="bg-gradient12  md:ml-[0] md:w-[100%] ml-[4px] mt-[19px] p-[1px] rounded-radius10 sm:ml-[0] sm:w-[100%] w-[97%] ">
                          <div className="bg-white_A700 border-solid flex flex-col items-center justify-start p-[8px] rounded-radius10">
                            <div className="flex flex-col gap-[8px] items-center justify-start my-[2px] w-[100%]">
                              <div className="flex flex-row items-start justify-start w-[100%]">
                                <Img
                                  src="images/img_bluetooth.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="bluetooth One"
                                />
                                <Text
                                  className="font-medium ml-[5px] mt-[5px] text-gray_601 text-left w-[auto]"
                                  variant="body14"
                                >
                                  BTC
                                </Text>
                                <Text
                                  className="font-medium ml-[38px] mt-[5px] text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  0.003596
                                </Text>
                                <Button
                                  className="cursor-pointer font-medium leading-[normal] ml-[5px] my-[2px] text-[12px] text-blue_A201 text-center w-[36px]"
                                  shape="RoundedBorder5"
                                  size="sm"
                                  variant="FillBlueA2004c"
                                >
                                  38%
                                </Button>
                              </div>
                              <div className="flex flex-row items-start justify-start w-[100%]">
                                <Img
                                  src="images/img_floatingicon.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="floatingicon One"
                                />
                                <Text
                                  className="font-medium ml-[5px] mt-[5px] text-gray_601 text-left w-[auto]"
                                  variant="body14"
                                >
                                  USDT
                                </Text>
                                <Text
                                  className="font-medium ml-[39px] mt-[5px] text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  3400.58
                                </Text>
                                <Button
                                  className="cursor-pointer font-medium leading-[normal] ml-[5px] my-[2px] text-[12px] text-blue_A201 text-center w-[36px]"
                                  shape="RoundedBorder5"
                                  size="sm"
                                  variant="FillBlueA2004c"
                                >
                                  62%
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-start justify-end mb-[466px] p-[26px] sm:px-[20px] rounded-radius15 shadow-bs2 md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[4px] mt-[4px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Unclaimed fees
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[4px] mt-[15px] text-green_A700 text-left w-[auto]"
                          variant="body4"
                        >
                          $578.76
                        </Text>
                        <div className="bg-gradient4  md:ml-[0] md:w-[100%] ml-[4px] mt-[19px] p-[1px] rounded-radius10 sm:ml-[0] sm:w-[100%] w-[97%] ">
                          <div className="bg-white_A700 border-solid flex flex-col items-center justify-start p-[8px] rounded-radius10">
                            <div className="flex flex-col gap-[8px] items-center justify-start my-[2px] w-[100%]">
                              <div className="flex flex-row items-center justify-start w-[100%]">
                                <Img
                                  src="images/img_bluetooth.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="bluetooth Two"
                                />
                                <Text
                                  className="font-medium ml-[5px] text-gray_601 text-left w-[auto]"
                                  variant="body14"
                                >
                                  BTC
                                </Text>
                                <Text
                                  className="font-medium ml-[78px] text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  0.000596
                                </Text>
                              </div>
                              <div className="flex flex-row items-center justify-start w-[100%]">
                                <Img
                                  src="images/img_floatingicon.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="floatingicon Two"
                                />
                                <Text
                                  className="font-medium ml-[5px] text-gray_601 text-left w-[auto]"
                                  variant="body14"
                                >
                                  USDT
                                </Text>
                                <Text
                                  className="font-medium ml-[90px] text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  320.58
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                    <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-end p-[13px] rounded-radius20 shadow-bs2 w-[100%]">
                      <div className="md:h-[38px] sm:h-[38px] h-[52px] md:mt-[0] sm:mt-[0] mt-[14px] relative md:w-[100%] sm:w-[100%] w-[30%]">
                        <Img
                          src="images/img_cursor_white_a701.svg"
                          className="absolute bottom-[0] h-[20px] left-[6%] w-[auto]"
                          alt="cursor One"
                        />
                        <div className="absolute flex flex-row gap-[20px] inset-x-[0] items-center justify-between mx-[auto] top-[0] w-[100%]">
                          <Button
                            className="flex h-[32px] items-center justify-center my-[3px] w-[32px]"
                            shape="icbCircleBorder15"
                            size="mdIcn"
                            variant="icbFillGray5004c"
                          >
                            <Img
                              src="images/img_arrowleft.svg"
                              className="h-[15px]"
                              alt="arrowleft One"
                            />
                          </Button>
                          <div className="flex flex-row gap-[12px] items-center justify-center w-[auto]">
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
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body4"
                            >
                              BTC - USDT
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="bg-blue_A200_4c font-medium justify-center md:ml-[0] sm:ml-[0] ml-[10px] md:mt-[0] sm:mt-[0] my-[22px] px-[4px] py-[2px] rounded-radius3 text-blue_A201 text-left w-[36px]"
                        variant="body17"
                      >
                        0,3%
                      </Text>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] md:ml-[0] sm:ml-[0] ml-[345px] mr-[19px] text-[16px] text-center text-white_A700 w-[167px]"
                        shape="RoundedBorder13"
                        size="4xl"
                        variant="GradientBlueA200DeeppurpleA700"
                      >
                        Connect wallet
                      </Button>
                    </div>
                    <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-start justify-between w-[100%]">
                      <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <div className="bg-gray_903 flex flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[20px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group148.png')",
                            }}
                          >
                            <div className="flex flex-col gap-[55px] justify-start my-[2px] w-[100%]">
                              <div className="flex flex-col items-end justify-start md:ml-[0] sm:ml-[0] ml-[65px] md:w-[100%] sm:w-[100%] w-[73%]">
                                <Text
                                  className="font-medium text-gray_50 text-left w-[auto]"
                                  variant="body17"
                                >
                                  <span className="text-white_A700 text-[12px] font-poppins font-bold">
                                    WETC
                                  </span>
                                  <span className="text-white_A700 text-[12px] font-poppins">
                                    {" "}
                                    0xc02aaa39b223fe8d
                                  </span>
                                </Text>
                                <Text
                                  className="font-bold mt-[11px] text-gray_50 text-left w-[auto]"
                                  variant="body17"
                                >
                                  <span className="text-white_A700 text-[12px] font-poppins">
                                    ID:{" "}
                                  </span>
                                  <span className="text-white_A700 text-[12px] font-poppins font-medium">
                                    346271
                                  </span>
                                </Text>
                                <Text
                                  className="font-bold mt-[8px] text-gray_50 text-left w-[auto]"
                                  variant="body17"
                                >
                                  <span className="text-white_A700 text-[12px] font-poppins">
                                    Min tick:{" "}
                                  </span>
                                  <span className="text-white_A700 text-[12px] font-poppins font-medium">
                                    281712
                                  </span>
                                </Text>
                                <Text
                                  className="font-bold mt-[8px] text-gray_50 text-left w-[auto]"
                                  variant="body17"
                                >
                                  <span className="text-white_A700 text-[12px] font-poppins">
                                    Max tick:{" "}
                                  </span>
                                  <span className="text-white_A700 text-[12px] font-poppins font-medium">
                                    292413
                                  </span>
                                </Text>
                                <Img
                                  src="images/img_vector53stroke_white_a701.png"
                                  className="h-[319px] md:h-[auto] sm:h-[auto] mt-[63px] object-cover sm:w-[100%] w-[auto]"
                                  alt="Vector53Stroke One"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[72%]">
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body1"
                                >
                                  weth/wbtc
                                </Text>
                                <Text
                                  className="mt-[4px] text-left text-white_A700 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  0.3%
                                </Text>
                                <Text
                                  className="font-medium mt-[13px] text-gray_50 text-left w-[auto]"
                                  variant="body17"
                                >
                                  <span className="text-white_A700 text-[12px] font-poppins font-bold">
                                    WBTC
                                  </span>
                                  <span className="text-white_A700 text-[12px] font-poppins">
                                    {" "}
                                    0xc02aaa39b223fe8d
                                  </span>
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-start justify-end mb-[466px] p-[26px] sm:px-[20px] rounded-radius15 shadow-bs2 md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[4px] mt-[6px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Liquidity
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[4px] mt-[11px] text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          $5000.47
                        </Text>
                        <div className="bg-gradient4  md:ml-[0] md:w-[100%] ml-[4px] mt-[19px] p-[1px] rounded-radius10 sm:ml-[0] sm:w-[100%] w-[97%] ">
                          <div className="bg-white_A700 border-solid flex flex-col items-center justify-start p-[8px] rounded-radius10">
                            <div className="flex flex-col gap-[8px] items-center justify-start my-[2px] w-[100%]">
                              <div className="flex flex-row items-start justify-start w-[100%]">
                                <Img
                                  src="images/img_bluetooth.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="bluetooth One One"
                                />
                                <Text
                                  className="font-medium ml-[5px] mt-[5px] text-gray_601 text-left w-[auto]"
                                  variant="body14"
                                >
                                  BTC
                                </Text>
                                <Text
                                  className="font-medium ml-[38px] mt-[5px] text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  0.003596
                                </Text>
                                <Button
                                  className="cursor-pointer font-medium leading-[normal] ml-[5px] my-[2px] text-[12px] text-blue_A201 text-center w-[36px]"
                                  shape="RoundedBorder5"
                                  size="sm"
                                  variant="FillBlueA2004c"
                                >
                                  38%
                                </Button>
                              </div>
                              <div className="flex flex-row items-start justify-start w-[100%]">
                                <Img
                                  src="images/img_floatingicon.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="floatingicon One One"
                                />
                                <Text
                                  className="font-medium ml-[5px] mt-[5px] text-gray_601 text-left w-[auto]"
                                  variant="body14"
                                >
                                  USDT
                                </Text>
                                <Text
                                  className="font-medium ml-[39px] mt-[5px] text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  3400.58
                                </Text>
                                <Button
                                  className="cursor-pointer font-medium leading-[normal] ml-[5px] my-[2px] text-[12px] text-blue_A201 text-center w-[36px]"
                                  shape="RoundedBorder5"
                                  size="sm"
                                  variant="FillBlueA2004c"
                                >
                                  62%
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-start justify-end mb-[466px] p-[26px] sm:px-[20px] rounded-radius15 shadow-bs2 md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[4px] mt-[4px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Unclaimed fees
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[4px] mt-[15px] text-green_A700 text-left w-[auto]"
                          variant="body4"
                        >
                          $578.76
                        </Text>
                        <div className="bg-gradient4  md:ml-[0] md:w-[100%] ml-[4px] mt-[19px] p-[1px] rounded-radius10 sm:ml-[0] sm:w-[100%] w-[97%] ">
                          <div className="bg-white_A700 border-solid flex flex-col items-center justify-start p-[8px] rounded-radius10">
                            <div className="flex flex-col gap-[8px] items-center justify-start my-[2px] w-[100%]">
                              <div className="flex flex-row items-center justify-start w-[100%]">
                                <Img
                                  src="images/img_bluetooth.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="bluetooth Two One"
                                />
                                <Text
                                  className="font-medium ml-[5px] text-gray_601 text-left w-[auto]"
                                  variant="body14"
                                >
                                  BTC
                                </Text>
                                <Text
                                  className="font-medium ml-[78px] text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  0.000596
                                </Text>
                              </div>
                              <div className="flex flex-row items-center justify-start w-[100%]">
                                <Img
                                  src="images/img_floatingicon.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="floatingicon Two One"
                                />
                                <Text
                                  className="font-medium ml-[5px] text-gray_601 text-left w-[auto]"
                                  variant="body14"
                                >
                                  USDT
                                </Text>
                                <Text
                                  className="font-medium ml-[90px] text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  320.58
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                    <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-end p-[13px] rounded-radius20 shadow-bs2 w-[100%]">
                      <div className="md:h-[38px] sm:h-[38px] h-[52px] md:mt-[0] sm:mt-[0] mt-[14px] relative md:w-[100%] sm:w-[100%] w-[30%]">
                        <Img
                          src="images/img_cursor_white_a701.svg"
                          className="absolute bottom-[0] h-[20px] left-[6%] w-[auto]"
                          alt="cursor Two"
                        />
                        <div className="absolute flex flex-row gap-[20px] inset-x-[0] items-center justify-between mx-[auto] top-[0] w-[100%]">
                          <Button
                            className="flex h-[32px] items-center justify-center my-[3px] w-[32px]"
                            shape="icbCircleBorder15"
                            size="mdIcn"
                            variant="icbFillGray5004c"
                          >
                            <Img
                              src="images/img_arrowleft.svg"
                              className="h-[15px]"
                              alt="arrowleft Two"
                            />
                          </Button>
                          <div className="flex flex-row gap-[12px] items-center justify-center w-[auto]">
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
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body4"
                            >
                              BTC - USDT
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="bg-blue_A200_4c font-medium justify-center md:ml-[0] sm:ml-[0] ml-[10px] md:mt-[0] sm:mt-[0] my-[22px] px-[4px] py-[2px] rounded-radius3 text-blue_A201 text-left w-[36px]"
                        variant="body17"
                      >
                        0.3%
                      </Text>
                      <Text
                        className="bg-blue_A200_4c font-medium justify-center md:ml-[0] sm:ml-[0] ml-[5px] md:mt-[0] sm:mt-[0] my-[22px] px-[4px] py-[2px] rounded-radius3 text-blue_A201 text-left w-[auto]"
                        variant="body17"
                      >
                        Closed
                      </Text>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] md:ml-[0] sm:ml-[0] ml-[289px] mr-[19px] md:mt-[0] sm:mt-[0] my-[13px] text-[16px] text-center text-gray_400 w-[167px]"
                        shape="RoundedBorder13"
                        size="3xl"
                        variant="FillGray903"
                      >
                        Removed liquidity
                      </Button>
                    </div>
                    <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-start justify-between w-[100%]">
                      <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <div className="bg-gray_903 flex flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[20px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group148.png')",
                            }}
                          >
                            <div className="flex flex-col gap-[55px] justify-start my-[2px] w-[100%]">
                              <div className="flex flex-col items-end justify-start md:ml-[0] sm:ml-[0] ml-[65px] md:w-[100%] sm:w-[100%] w-[73%]">
                                <Text
                                  className="font-medium text-gray_50 text-left w-[auto]"
                                  variant="body17"
                                >
                                  <span className="text-white_A700 text-[12px] font-poppins font-bold">
                                    WETC
                                  </span>
                                  <span className="text-white_A700 text-[12px] font-poppins">
                                    {" "}
                                    0xc02aaa39b223fe8d
                                  </span>
                                </Text>
                                <Text
                                  className="font-bold mt-[11px] text-gray_50 text-left w-[auto]"
                                  variant="body17"
                                >
                                  <span className="text-white_A700 text-[12px] font-poppins">
                                    ID:{" "}
                                  </span>
                                  <span className="text-white_A700 text-[12px] font-poppins font-medium">
                                    346271
                                  </span>
                                </Text>
                                <Text
                                  className="font-bold mt-[8px] text-gray_50 text-left w-[auto]"
                                  variant="body17"
                                >
                                  <span className="text-white_A700 text-[12px] font-poppins">
                                    Min tick:{" "}
                                  </span>
                                  <span className="text-white_A700 text-[12px] font-poppins font-medium">
                                    281712
                                  </span>
                                </Text>
                                <Text
                                  className="font-bold mt-[8px] text-gray_50 text-left w-[auto]"
                                  variant="body17"
                                >
                                  <span className="text-white_A700 text-[12px] font-poppins">
                                    Max tick:{" "}
                                  </span>
                                  <span className="text-white_A700 text-[12px] font-poppins font-medium">
                                    292413
                                  </span>
                                </Text>
                                <Img
                                  src="images/img_vector53stroke_white_a701.png"
                                  className="h-[319px] md:h-[auto] sm:h-[auto] mt-[63px] object-cover sm:w-[100%] w-[auto]"
                                  alt="Vector53Stroke Two"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[72%]">
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body1"
                                >
                                  weth/wbtc
                                </Text>
                                <Text
                                  className="mt-[4px] text-left text-white_A700 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  0.3%
                                </Text>
                                <Text
                                  className="font-medium mt-[13px] text-gray_50 text-left w-[auto]"
                                  variant="body17"
                                >
                                  <span className="text-white_A700 text-[12px] font-poppins font-bold">
                                    WBTC
                                  </span>
                                  <span className="text-white_A700 text-[12px] font-poppins">
                                    {" "}
                                    0xc02aaa39b223fe8d
                                  </span>
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-start justify-end mb-[466px] p-[26px] sm:px-[20px] rounded-radius15 shadow-bs2 md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[4px] mt-[6px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Liquidity
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[4px] mt-[11px] text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          $-
                        </Text>
                        <div className="bg-gradient4  md:ml-[0] md:w-[100%] ml-[4px] mt-[19px] p-[1px] rounded-radius10 sm:ml-[0] sm:w-[100%] w-[97%] ">
                          <div className="bg-white_A700 border-solid flex flex-col items-center justify-start p-[8px] rounded-radius10">
                            <div className="flex flex-col gap-[8px] items-center justify-start my-[2px] w-[100%]">
                              <div className="flex flex-row items-center justify-start w-[100%]">
                                <Img
                                  src="images/img_bluetooth.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="bluetooth One Two"
                                />
                                <Text
                                  className="font-medium ml-[5px] text-gray_601 text-left w-[auto]"
                                  variant="body14"
                                >
                                  BTC
                                </Text>
                                <Text
                                  className="font-medium ml-[114px] text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  0.00
                                </Text>
                              </div>
                              <div className="flex flex-row items-center justify-start w-[100%]">
                                <Img
                                  src="images/img_floatingicon.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="floatingicon One Two"
                                />
                                <Text
                                  className="font-medium ml-[5px] text-gray_601 text-left w-[auto]"
                                  variant="body14"
                                >
                                  USDT
                                </Text>
                                <Text
                                  className="font-medium ml-[106px] text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  0.00
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-start justify-end mb-[466px] p-[26px] sm:px-[20px] rounded-radius15 shadow-bs2 md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[4px] mt-[4px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Unclaimed fees
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[4px] mt-[15px] text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          $-
                        </Text>
                        <div className="bg-gradient4  md:ml-[0] md:w-[100%] ml-[4px] mt-[19px] p-[1px] rounded-radius10 sm:ml-[0] sm:w-[100%] w-[97%] ">
                          <div className="bg-white_A700 border-solid flex flex-col items-center justify-start p-[8px] rounded-radius10">
                            <div className="flex flex-col gap-[8px] items-center justify-start my-[2px] w-[100%]">
                              <div className="flex flex-row items-center justify-start w-[100%]">
                                <Img
                                  src="images/img_bluetooth.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="bluetooth Two Two"
                                />
                                <Text
                                  className="font-medium ml-[5px] text-gray_601 text-left w-[auto]"
                                  variant="body14"
                                >
                                  BTC
                                </Text>
                                <Text
                                  className="font-medium ml-[114px] text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  0.00
                                </Text>
                              </div>
                              <div className="flex flex-row items-center justify-start w-[100%]">
                                <Img
                                  src="images/img_floatingicon.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="floatingicon Two Two"
                                />
                                <Text
                                  className="font-medium ml-[5px] text-gray_601 text-left w-[auto]"
                                  variant="body14"
                                >
                                  USDT
                                </Text>
                                <Text
                                  className="font-medium ml-[106px] text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  0.00
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex sm:flex-1 flex-col gap-[100px] md:gap-[40px] sm:gap-[40px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[735px] md:mt-[0] sm:mt-[0] mt-[68px] sm:w-[100%] w-[auto]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[15px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="md:h-[166px] sm:h-[166px] h-[235px] mt-[19px] relative md:w-[100%] sm:w-[100%] w-[93%]">
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      variant="body4"
                    >
                      Add liquidity
                    </Text>
                    <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                      <div className="flex flex-col gap-[17px] items-end justify-start w-[100%]">
                        <Img
                          src="images/img_close_gray_900.svg"
                          className="h-[24px] w-[24px]"
                          alt="close"
                        />
                        <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[12px] h-[38px] md:h-[auto] sm:h-[auto] items-center justify-center w-[200px]">
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
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body4"
                            >
                              BTC - USDT
                            </Text>
                          </div>
                          <List
                            className="flex-col gap-[10px] grid items-center w-[100%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-row items-center justify-between pr-[5px] w-[100%]">
                              <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_bluetooth.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="bluetooth Eight"
                                />
                                <div className="flex flex-col gap-[-3px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    BTC
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_600 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    Bitcoin
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body7"
                              >
                                0.0056 BTC
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row items-center justify-between pr-[5px] w-[100%]">
                              <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_floatingicon.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="floatingicon Eight"
                                />
                                <div className="flex flex-col gap-[-3px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    USDT
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_600 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    Tether
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body7"
                              >
                                675.00 USDT
                              </Text>
                            </div>
                          </List>
                          <div className="flex flex-row items-end justify-between md:w-[100%] sm:w-[100%] w-[99%]">
                            <Text
                              className="font-medium mb-[2px] mt-[7px] text-gray_903 text-left w-[auto]"
                              variant="body12"
                            >
                              Swapping fee
                            </Text>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] min-w-[67px] text-[16px] text-center text-gray_900 w-[auto]"
                              shape="RoundedBorder13"
                              size="sm"
                              variant="OutlineGray900bf"
                            >
                              0.3%
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-medium mt-[45px] text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Add more liquidity
                  </Text>
                  <div className="flex flex-col gap-[31px] items-center justify-start mb-[25px] mt-[29px] w-[100%]">
                    <div className="h-[200px] md:h-[50px] sm:h-[50px] relative w-[100%]">
                      <div className="flex flex-col h-[100%] items-center justify-start m-[auto] w-[100%]">
                        <List
                          className="flex-col gap-[10px] grid items-center w-[100%]"
                          orientation="vertical"
                        >
                          <div className="bg-indigo_50 flex flex-1 flex-col items-center justify-start my-[0] p-[10px] rounded-radius20 w-[100%]">
                            <div className="flex flex-col gap-[12px] justify-start mb-[2px] md:w-[100%] sm:w-[100%] w-[97%]">
                              <div className="bg-white_A700 flex flex-col items-start justify-start mr-[308px] px-[6px] py-[3px] rounded-radius18 shadow-bs w-[auto]">
                                <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                  <Img
                                    src="images/img_bluetooth.svg"
                                    className="h-[26px] w-[26px]"
                                    alt="bluetooth Nine"
                                  />
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body7"
                                  >
                                    BTC
                                  </Text>
                                  <Img
                                    src="images/img_arrowup_gray_900_16x16.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="arrowup"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-row items-end justify-between md:ml-[0] sm:ml-[0] ml-[10px] md:w-[100%] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-medium text-gray_600 text-left w-[auto]"
                                  variant="body5"
                                >
                                  0.00
                                </Text>
                                <Text
                                  className="font-medium mt-[10px] text-gray_600 text-left w-[auto]"
                                  variant="body17"
                                >
                                  Balance: 0
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-indigo_50 flex flex-1 flex-col items-center justify-start my-[0] p-[10px] rounded-radius20 w-[100%]">
                            <div className="flex flex-col gap-[10px] justify-start mb-[2px] md:w-[100%] sm:w-[100%] w-[97%]">
                              <div className="bg-white_A700 flex flex-col items-start justify-start mr-[290px] px-[6px] py-[3px] rounded-radius19 shadow-bs w-[auto]">
                                <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                  <div
                                    className="bg-cover bg-no-repeat flex flex-col h-[32px] items-start justify-start p-[2px] w-[32px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group155.svg')",
                                    }}
                                  >
                                    <Img
                                      src="images/img_floatingicon.svg"
                                      className="h-[26px] w-[26px]"
                                      alt="floatingicon Nine"
                                    />
                                  </div>
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body7"
                                  >
                                    USDT
                                  </Text>
                                  <Img
                                    src="images/img_arrowup_gray_900_16x16.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="arrowup One"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-row items-end justify-between md:ml-[0] sm:ml-[0] ml-[10px] md:w-[100%] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-medium text-gray_600 text-left w-[auto]"
                                  variant="body5"
                                >
                                  0.00
                                </Text>
                                <Text
                                  className="font-medium mt-[10px] text-gray_600 text-left w-[auto]"
                                  variant="body17"
                                >
                                  Balance: 0
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                      <Button
                        className="absolute flex h-[50px] inset-[0] items-center justify-center m-[auto] rounded-radius50 w-[50px]"
                        size="xlIcn"
                        variant="icbOutlineIndigo50"
                      >
                        <Img
                          src="images/img_arrowdown_gray_900.svg"
                          className="h-[24px]"
                          alt="arrowdown"
                        />
                      </Button>
                    </div>
                    <Input
                      className="font-bold leading-[normal] p-[0] text-[16px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                      wrapClassName="md:h-[auto] md:w-[100%] sm:h-[auto] sm:w-[100%] w-[450px]"
                      name="Frame103"
                      placeholder="Enter an amount"
                      shape="RoundedBorder15"
                      size="2xl"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[15px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="md:h-[166px] sm:h-[166px] h-[235px] mt-[19px] relative md:w-[100%] sm:w-[100%] w-[93%]">
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      variant="body4"
                    >
                      Add liquidity
                    </Text>
                    <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                      <div className="flex flex-col gap-[17px] items-end justify-start w-[100%]">
                        <Img
                          src="images/img_close_gray_900.svg"
                          className="h-[24px] w-[24px]"
                          alt="close One"
                        />
                        <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[12px] h-[38px] md:h-[auto] sm:h-[auto] items-center justify-center w-[200px]">
                            <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                              <Img
                                src="images/img_bluetooth.svg"
                                className="h-[26px] my-[auto] w-[26px]"
                                alt="bluetooth Ten"
                              />
                              <Img
                                src="images/img_floatingicon.svg"
                                className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                                alt="floatingicon Ten"
                              />
                            </div>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body4"
                            >
                              BTC - USDT
                            </Text>
                          </div>
                          <List
                            className="flex-col gap-[10px] grid items-center w-[100%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-row items-center justify-between pr-[5px] w-[100%]">
                              <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_bluetooth.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="bluetooth Eleven"
                                />
                                <div className="flex flex-col gap-[-3px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    BTC
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_600 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    Bitcoin
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body7"
                              >
                                0.0056 BTC
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row items-center justify-between pr-[5px] w-[100%]">
                              <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_floatingicon.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="floatingicon Eleven"
                                />
                                <div className="flex flex-col gap-[-3px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    USDT
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_600 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    Tether
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body7"
                              >
                                675.00 USDT
                              </Text>
                            </div>
                          </List>
                          <div className="flex flex-row items-end justify-between md:w-[100%] sm:w-[100%] w-[99%]">
                            <Text
                              className="font-medium mb-[2px] mt-[7px] text-gray_903 text-left w-[auto]"
                              variant="body12"
                            >
                              Swapping fee
                            </Text>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] min-w-[67px] text-[16px] text-center text-gray_900 w-[auto]"
                              shape="RoundedBorder13"
                              size="sm"
                              variant="OutlineGray900bf"
                            >
                              0.3%
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-medium mt-[45px] text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Add more liquidity
                  </Text>
                  <div className="flex flex-col gap-[31px] items-center justify-start mb-[25px] mt-[29px] w-[100%]">
                    <div className="h-[200px] md:h-[50px] sm:h-[50px] relative w-[100%]">
                      <div className="flex flex-col h-[100%] items-center justify-start m-[auto] w-[100%]">
                        <List
                          className="flex-col gap-[10px] grid items-center w-[100%]"
                          orientation="vertical"
                        >
                          <div className="bg-indigo_50 flex flex-1 flex-col items-center justify-start my-[0] p-[10px] rounded-radius20 w-[100%]">
                            <div className="flex flex-col gap-[12px] justify-start mb-[2px] md:w-[100%] sm:w-[100%] w-[97%]">
                              <div className="bg-white_A700 flex flex-col items-start justify-start mr-[308px] px-[6px] py-[3px] rounded-radius18 shadow-bs w-[auto]">
                                <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                  <Img
                                    src="images/img_bluetooth.svg"
                                    className="h-[26px] w-[26px]"
                                    alt="bluetooth Twelve"
                                  />
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body7"
                                  >
                                    BTC
                                  </Text>
                                  <Img
                                    src="images/img_arrowup_gray_900_16x16.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="arrowup Two"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-row items-end justify-between md:ml-[0] sm:ml-[0] ml-[10px] md:w-[100%] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-medium text-gray_600 text-left w-[auto]"
                                  variant="body5"
                                >
                                  0.00
                                </Text>
                                <Text
                                  className="font-medium mt-[10px] text-gray_600 text-left w-[auto]"
                                  variant="body17"
                                >
                                  Balance: 0
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-indigo_50 flex flex-1 flex-col items-center justify-start my-[0] p-[10px] rounded-radius20 w-[100%]">
                            <div className="flex flex-col gap-[10px] justify-start mb-[2px] md:w-[100%] sm:w-[100%] w-[97%]">
                              <div className="bg-white_A700 flex flex-col items-start justify-start mr-[290px] px-[6px] py-[3px] rounded-radius19 shadow-bs w-[auto]">
                                <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                  <div
                                    className="bg-cover bg-no-repeat flex flex-col h-[32px] items-start justify-start p-[2px] w-[32px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group155.svg')",
                                    }}
                                  >
                                    <Img
                                      src="images/img_floatingicon.svg"
                                      className="h-[26px] w-[26px]"
                                      alt="floatingicon Twelve"
                                    />
                                  </div>
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body7"
                                  >
                                    USDT
                                  </Text>
                                  <Img
                                    src="images/img_arrowup_gray_900_16x16.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="arrowup Three"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-row items-end justify-between md:ml-[0] sm:ml-[0] ml-[10px] md:w-[100%] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-medium text-gray_600 text-left w-[auto]"
                                  variant="body5"
                                >
                                  0.00
                                </Text>
                                <Text
                                  className="font-medium mt-[10px] text-gray_600 text-left w-[auto]"
                                  variant="body17"
                                >
                                  Balance: 0
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                      <Button
                        className="absolute flex h-[50px] inset-[0] items-center justify-center m-[auto] rounded-radius50 w-[50px]"
                        size="xlIcn"
                        variant="icbOutlineIndigo50"
                      >
                        <Img
                          src="images/img_arrowdown_gray_900.svg"
                          className="h-[24px]"
                          alt="arrowdown One"
                        />
                      </Button>
                    </div>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-gray_400 w-[450px]"
                      shape="RoundedBorder13"
                      size="9xl"
                      variant="FillGray903"
                    >
                      Insufficient balance
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[15px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="md:h-[166px] sm:h-[166px] h-[235px] mt-[19px] relative md:w-[100%] sm:w-[100%] w-[93%]">
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      variant="body4"
                    >
                      Add liquidity
                    </Text>
                    <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                      <div className="flex flex-col gap-[17px] items-end justify-start w-[100%]">
                        <Img
                          src="images/img_close_gray_900.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Two"
                        />
                        <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[12px] h-[38px] md:h-[auto] sm:h-[auto] items-center justify-center w-[200px]">
                            <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                              <Img
                                src="images/img_bluetooth.svg"
                                className="h-[26px] my-[auto] w-[26px]"
                                alt="bluetooth Thirteen"
                              />
                              <Img
                                src="images/img_floatingicon.svg"
                                className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                                alt="floatingicon Thirteen"
                              />
                            </div>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body4"
                            >
                              BTC - USDT
                            </Text>
                          </div>
                          <List
                            className="flex-col gap-[10px] grid items-center w-[100%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-row items-center justify-between pr-[5px] w-[100%]">
                              <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_bluetooth.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="bluetooth Fourteen"
                                />
                                <div className="flex flex-col gap-[-3px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    BTC
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_600 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    Bitcoin
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body7"
                              >
                                0.0056 BTC
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row items-center justify-between pr-[5px] w-[100%]">
                              <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_floatingicon.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="floatingicon Fourteen"
                                />
                                <div className="flex flex-col gap-[-3px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    USDT
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_600 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    Tether
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body7"
                              >
                                675.00 USDT
                              </Text>
                            </div>
                          </List>
                          <div className="flex flex-row items-end justify-between md:w-[100%] sm:w-[100%] w-[99%]">
                            <Text
                              className="font-medium mb-[2px] mt-[7px] text-gray_903 text-left w-[auto]"
                              variant="body12"
                            >
                              Swapping fee
                            </Text>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] min-w-[67px] text-[16px] text-center text-gray_900 w-[auto]"
                              shape="RoundedBorder13"
                              size="sm"
                              variant="OutlineGray900bf"
                            >
                              0.3%
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-medium mt-[45px] text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Add more liquidity
                  </Text>
                  <div className="flex flex-col gap-[31px] items-center justify-start mb-[25px] mt-[29px] w-[100%]">
                    <div className="md:h-[198px] h-[200px] sm:h-[264px] relative w-[100%]">
                      <div className="flex flex-col h-[100%] items-center justify-start m-[auto] w-[100%]">
                        <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                          <div className="bg-indigo_50 flex flex-col items-center justify-start p-[10px] rounded-radius20 w-[100%]">
                            <div className="flex flex-row items-end justify-between mb-[2px] md:w-[100%] sm:w-[100%] w-[97%]">
                              <div className="flex flex-col gap-[12px] justify-start w-[auto]">
                                <div className="bg-white_A700 flex flex-col items-start justify-start mr-[18px] px-[6px] py-[3px] rounded-radius18 shadow-bs w-[auto]">
                                  <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                    <Img
                                      src="images/img_bluetooth.svg"
                                      className="h-[26px] w-[26px]"
                                      alt="bluetooth Fifteen"
                                    />
                                    <Text
                                      className="font-medium text-gray_900 text-left w-[auto]"
                                      variant="body7"
                                    >
                                      BTC
                                    </Text>
                                    <Img
                                      src="images/img_arrowup_gray_900_16x16.svg"
                                      className="h-[16px] w-[16px]"
                                      alt="arrowup Four"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-row items-end justify-evenly ml-[auto] md:w-[100%] sm:w-[100%] w-[92%]">
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body5"
                                  >
                                    0.005
                                  </Text>
                                  <Text
                                    className="font-medium mt-[7px] text-gray_600 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    $137.35
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[5px] items-end justify-start mt-[40px] w-[auto]">
                                <a
                                  className="font-medium text-[12px] text-gray_600 text-left underline w-[auto]"
                                  href="#"
                                >
                                  Max
                                </a>
                                <Text
                                  className="font-medium text-gray_600 text-left w-[auto]"
                                  variant="body17"
                                >
                                  Balance: 0.005
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-indigo_50 flex flex-col items-center justify-start p-[10px] rounded-radius20 w-[100%]">
                            <div className="flex flex-col gap-[10px] justify-start mb-[2px] md:w-[100%] sm:w-[100%] w-[97%]">
                              <div className="bg-white_A700 flex flex-col items-start justify-start mr-[290px] px-[6px] py-[3px] rounded-radius19 shadow-bs w-[auto]">
                                <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                  <div
                                    className="bg-cover bg-no-repeat flex flex-col h-[32px] items-start justify-start p-[2px] w-[32px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group155.svg')",
                                    }}
                                  >
                                    <Img
                                      src="images/img_floatingicon.svg"
                                      className="h-[26px] w-[26px]"
                                      alt="floatingicon Fifteen"
                                    />
                                  </div>
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body7"
                                  >
                                    USDT
                                  </Text>
                                  <Img
                                    src="images/img_arrowup_gray_900_16x16.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="arrowup Five"
                                  />
                                </div>
                              </div>
                              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-end justify-start md:ml-[0] sm:ml-[0] ml-[10px] md:w-[100%] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-medium text-gray_900 text-left w-[auto]"
                                  variant="body5"
                                >
                                  137.61
                                </Text>
                                <Text
                                  className="font-medium sm:ml-[0] ml-[3px] sm:mt-[0] mt-[7px] text-gray_600 text-left w-[auto]"
                                  variant="body17"
                                >
                                  $137.35
                                </Text>
                                <Text
                                  className="font-medium sm:ml-[0] ml-[227px] sm:mt-[0] mt-[10px] text-gray_600 text-left w-[auto]"
                                  variant="body17"
                                >
                                  Balance: 0
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="absolute flex h-[50px] inset-[0] items-center justify-center m-[auto] rounded-radius50 w-[50px]"
                        size="xlIcn"
                        variant="icbOutlineIndigo50"
                      >
                        <Img
                          src="images/img_arrowdown_gray_900.svg"
                          className="h-[24px]"
                          alt="arrowdown Two"
                        />
                      </Button>
                    </div>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[450px]"
                      shape="RoundedBorder13"
                      size="9xl"
                      variant="GradientDeeppurple400Purple300"
                    >
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col gap-[40px] items-center justify-start p-[29px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="md:h-[152px] sm:h-[152px] h-[235px] mt-[5px] relative w-[100%]">
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      variant="body4"
                    >
                      Add liquidity
                    </Text>
                    <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                      <div className="flex flex-col gap-[17px] items-end justify-start w-[100%]">
                        <Img
                          src="images/img_close_gray_900.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Three"
                        />
                        <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[12px] h-[38px] md:h-[auto] sm:h-[auto] items-center justify-center w-[200px]">
                            <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                              <Img
                                src="images/img_bluetooth.svg"
                                className="h-[26px] my-[auto] w-[26px]"
                                alt="bluetooth Sixteen"
                              />
                              <Img
                                src="images/img_floatingicon.svg"
                                className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                                alt="floatingicon Sixteen"
                              />
                            </div>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body4"
                            >
                              BTC - USDT
                            </Text>
                          </div>
                          <List
                            className="flex-col gap-[10px] grid items-center w-[100%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-row items-center justify-between pr-[5px] w-[100%]">
                              <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_bluetooth.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="bluetooth Seventeen"
                                />
                                <div className="flex flex-col gap-[-3px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    BTC
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_600 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    Bitcoin
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body7"
                              >
                                0.0056 BTC
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row items-center justify-between pr-[5px] w-[100%]">
                              <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_floatingicon.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="floatingicon Seventeen"
                                />
                                <div className="flex flex-col gap-[-3px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    USDT
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_600 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    Tether
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body7"
                              >
                                675.00 USDT
                              </Text>
                            </div>
                          </List>
                          <div className="flex flex-row items-end justify-between md:w-[100%] sm:w-[100%] w-[99%]">
                            <Text
                              className="font-medium mb-[2px] mt-[7px] text-gray_903 text-left w-[auto]"
                              variant="body12"
                            >
                              Swapping fee
                            </Text>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] min-w-[67px] text-[16px] text-center text-gray_900 w-[auto]"
                              shape="RoundedBorder13"
                              size="sm"
                              variant="OutlineGray900bf"
                            >
                              0.3%
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] mb-[11px] text-[16px] text-center text-white_A700 w-[389px]"
                    shape="RoundedBorder13"
                    size="9xl"
                    variant="GradientDeeppurple400Purple300"
                  >
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[407px] md:mt-[0] sm:mt-[0] mt-[64px] md:w-[100%] sm:w-[100%] w-[16%]">
            <div
              className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[14px] md:w-[100%] sm:w-[100%] w-[63%]"
              style={{ backgroundImage: "url('images/img_extraprogram.svg')" }}
            >
              <div className="flex flex-col justify-start mb-[28px] md:w-[100%] sm:w-[100%] w-[95%]">
                <div className="flex flex-row items-end justify-between w-[100%]">
                  <Text
                    className="font-bold mt-[5px] text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Confirm adding liquidity
                  </Text>
                  <Img
                    src="images/img_close_gray_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="close Four"
                  />
                </div>
                <div className="bg-gray_903 h-[140px] mt-[45px] mx-[auto] rounded-radius50 w-[140px]"></div>
                <Text
                  className="font-bold md:ml-[0] sm:ml-[0] ml-[51px] mt-[37px] text-gray_900 text-left w-[auto]"
                  variant="body4"
                >
                  Waiting for confirmation
                </Text>
                <Text
                  className="font-bold md:ml-[0] sm:ml-[0] ml-[69px] mt-[15px] text-gray_900 text-left w-[auto]"
                  variant="body12"
                >
                  Supplying 0.0056 BTC to 675.00 USDT
                </Text>
                <Text
                  className="font-bold md:ml-[0] sm:ml-[0] ml-[86px] mt-[56px] text-gray_600 text-left w-[auto]"
                  variant="body14"
                >
                  Confirm transaction in your wallet
                </Text>
              </div>
            </div>
            <div className="h-[444px] md:h-[518px] sm:h-[518px] mt-[77px] relative md:w-[100%] sm:w-[100%] w-[63%]">
              <div className="bg-white_A700 flex flex-col h-[100%] items-center justify-start m-[auto] p-[113px] sm:px-[20px] md:px-[40px] rounded-radius20 shadow-bs2 w-[100%]">
                <div className="bg-gray_903 flex flex-col h-[80px] items-center justify-start mb-[138px] p-[4px] w-[80px]">
                  <Img
                    src="images/img_checkmark_green_a700.svg"
                    className="h-[69px] w-[70px]"
                    alt="checkmark"
                  />
                </div>
              </div>
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[3%] w-[89%]">
                <div className="flex flex-row items-end justify-between w-[100%]">
                  <Text
                    className="font-bold mt-[5px] text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Confirm swap
                  </Text>
                  <Img
                    src="images/img_close_gray_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="close Five"
                  />
                </div>
                <Text
                  className="font-bold mt-[222px] text-gray_900 text-left w-[auto]"
                  variant="body4"
                >
                  Transaction sent successfully
                </Text>
                <Text
                  className="font-bold mt-[12px] text-blue_A201 text-left w-[auto]"
                  variant="body14"
                >
                  View in explorer
                </Text>
                <Text
                  className="font-bold mt-[61px] text-gray_600 text-left w-[auto]"
                  variant="body14"
                >
                  Add USDT to your wallet
                </Text>
              </div>
            </div>
            <div className="h-[444px] md:h-[521px] sm:h-[521px] mt-[77px] relative md:w-[100%] sm:w-[100%] w-[63%]">
              <div className="bg-white_A700 flex flex-col h-[100%] items-center justify-start m-[auto] p-[122px] sm:px-[20px] md:px-[40px] rounded-radius20 shadow-bs2 w-[100%]">
                <Img
                  src="images/img_warning_red_700.svg"
                  className="h-[100px] mb-[100px] w-[100px]"
                  alt="warning One"
                />
              </div>
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[3%] w-[89%]">
                <div className="flex flex-row items-end justify-between w-[100%]">
                  <Text
                    className="font-bold mt-[5px] text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Confirm swap
                  </Text>
                  <Img
                    src="images/img_close_gray_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="close Six"
                  />
                </div>
                <Text
                  className="font-bold mt-[220px] text-gray_900 text-left w-[auto]"
                  variant="body4"
                >
                  Transaction error occured
                </Text>
                <Text
                  className="font-bold mt-[19px] text-blue_A201 text-left w-[auto]"
                  variant="body14"
                >
                  View in explorer
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col items-center justify-start mt-[77px] p-[14px] md:w-[100%] sm:w-[100%] w-[63%]"
              style={{ backgroundImage: "url('images/img_extraprogram.svg')" }}
            >
              <div className="flex flex-col items-center justify-start mb-[28px] md:w-[100%] sm:w-[100%] w-[95%]">
                <div className="flex flex-row items-end justify-between w-[100%]">
                  <Text
                    className="font-bold mt-[5px] text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Confirm remowing liquidity
                  </Text>
                  <Img
                    src="images/img_close_gray_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="close Seven"
                  />
                </div>
                <div className="bg-gray_903 h-[140px] mt-[45px] rounded-radius50 w-[140px]"></div>
                <Text
                  className="font-bold mt-[37px] text-gray_900 text-left w-[auto]"
                  variant="body4"
                >
                  Waiting for confirmation
                </Text>
                <Text
                  className="font-bold mt-[15px] text-gray_900 text-left w-[auto]"
                  variant="body12"
                >
                  Remowing 675.00 USDT and 3.76 BNB{" "}
                </Text>
                <Text
                  className="font-bold mt-[56px] text-gray_600 text-left w-[auto]"
                  variant="body14"
                >
                  Confirm transaction in your wallet
                </Text>
              </div>
            </div>
            <div className="bg-white_A700 h-[515px] md:h-[522px] sm:h-[522px] mt-[77px] p-[23px] sm:px-[20px] relative rounded-radius20 shadow-bs2 md:w-[100%] sm:w-[100%] w-[63%]">
              <div className="flex flex-row gap-[12px] h-[100%] items-center justify-center ml-[3px] mt-[38px] w-[auto]">
                <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                  <Img
                    src="images/img_bluetooth.svg"
                    className="h-[26px] my-[auto] w-[26px]"
                    alt="bluetooth Eighteen"
                  />
                  <Img
                    src="images/img_floatingicon.svg"
                    className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                    alt="floatingicon Eighteen"
                  />
                </div>
                <Text
                  className="font-medium text-gray_900 text-left w-[auto]"
                  variant="body4"
                >
                  BTC - USDT
                </Text>
              </div>
              <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[90%]">
                <div className="flex flex-col gap-[57px] items-end justify-start w-[100%]">
                  <div className="flex flex-row items-end justify-between ml-[auto] md:w-[100%] sm:w-[100%] w-[66%]">
                    <Text
                      className="font-bold mt-[5px] text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      Remove liquidity
                    </Text>
                    <Img
                      src="images/img_close_gray_900.svg"
                      className="h-[24px] w-[24px]"
                      alt="close Eight"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="bg-indigo_50 flex flex-col items-center justify-start p-[11px] rounded-radius10 w-[100%]">
                      <div className="flex flex-col items-start justify-start my-[7px] w-[100%]">
                        <Text
                          className="font-medium text-gray_601 text-left w-[auto]"
                          variant="body17"
                        >
                          Amount
                        </Text>
                        <div className="flex flex-row items-end justify-start mt-[3px] md:w-[100%] sm:w-[100%] w-[84%]">
                          <Text
                            className="font-medium mb-[2px] mt-[5px] text-gray_600 text-left w-[auto]"
                            variant="body5"
                          >
                            0%
                          </Text>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] ml-[74px] text-[16px] text-blue_A201 text-center w-[49px]"
                            shape="RoundedBorder5"
                            size="md"
                            variant="FillBlueA2004c"
                          >
                            25%
                          </Button>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] ml-[10px] text-[16px] text-blue_A201 text-center w-[49px]"
                            shape="RoundedBorder5"
                            size="md"
                            variant="FillBlueA2004c"
                          >
                            50%
                          </Button>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] ml-[10px] text-[16px] text-blue_A201 text-center w-[49px]"
                            shape="RoundedBorder5"
                            size="md"
                            variant="FillBlueA2004c"
                          >
                            75%
                          </Button>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] ml-[10px] text-[16px] text-blue_A201 text-center w-[49px]"
                            shape="RoundedBorder5"
                            size="md"
                            variant="FillBlueA2004c"
                          >
                            MAX
                          </Button>
                        </div>
                        <div className="flex h-[25px] md:h-[36px] sm:h-[36px] mt-[11px] relative w-[100%]">
                          <div className="bg-blue_A201 h-[25px] my-[auto] rounded-radius12 w-[25px]"></div>
                          <Line className="bg-blue_A201 h-[4px] mb-[7px] ml-[-1px] mt-[auto] w-[95%] z-[1]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[20px] w-[100%]">
                      <div className="bg-orange_50 border-2 border-amber_500_b3 border-solid flex flex-col items-center justify-center p-[11px] rounded-radius10 w-[100%]">
                        <div className="flex flex-row gap-[279px] items-start justify-start mt-[8px] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            Pooled BTC
                          </Text>
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body17"
                          >
                            0.7 BTC
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[283px] items-start justify-between sm:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            Pooled ETH
                          </Text>
                          <Text
                            className="font-bold text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            3.76 ETH
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[236px] items-start justify-start mt-[10px] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            BTC Fees earned
                          </Text>
                          <Text
                            className="font-bold text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            0.007 BTC
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[236px] items-start justify-start mb-[9px] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            ETH Fees earned
                          </Text>
                          <Text
                            className="font-bold text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            0.021 ETH
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[20px] w-[100%]">
                      <Text
                        className="font-medium text-gray_903 text-left w-[auto]"
                        variant="body17"
                      >
                        Collect as WETH{" "}
                      </Text>
                      <Switch value={true} className="w-[auto]" />
                    </div>
                    <Input
                      className="font-medium leading-[normal] p-[0] text-[16px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                      wrapClassName="md:w-[100%] mt-[20px] sm:w-[100%] w-[auto]"
                      name="Frame233"
                      placeholder="Enter a percent"
                      size="lg"
                    ></Input>
                    <Text
                      className="font-medium mt-[10px] text-gray_600 text-left w-[auto]"
                      variant="body17"
                    >
                      Cancel
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 h-[515px] md:h-[541px] sm:h-[541px] mt-[77px] p-[23px] sm:px-[20px] relative rounded-radius20 shadow-bs2 md:w-[100%] sm:w-[100%] w-[63%]">
              <div className="flex flex-row gap-[12px] h-[100%] items-center justify-center ml-[3px] mt-[38px] w-[auto]">
                <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                  <Img
                    src="images/img_bluetooth.svg"
                    className="h-[26px] my-[auto] w-[26px]"
                    alt="bluetooth Nineteen"
                  />
                  <Img
                    src="images/img_floatingicon.svg"
                    className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                    alt="floatingicon Nineteen"
                  />
                </div>
                <Text
                  className="font-medium text-gray_900 text-left w-[auto]"
                  variant="body4"
                >
                  BTC - USDT
                </Text>
              </div>
              <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[90%]">
                <div className="flex flex-col gap-[57px] items-end justify-start w-[100%]">
                  <div className="flex flex-row items-end justify-between ml-[auto] md:w-[100%] sm:w-[100%] w-[66%]">
                    <Text
                      className="font-bold mt-[5px] text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      Remove liquidity
                    </Text>
                    <Img
                      src="images/img_close_gray_900.svg"
                      className="h-[24px] w-[24px]"
                      alt="close Nine"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="bg-indigo_50 flex flex-col items-center justify-start p-[11px] rounded-radius10 w-[100%]">
                      <div className="flex flex-col items-start justify-start my-[7px] w-[100%]">
                        <Text
                          className="font-medium text-gray_601 text-left w-[auto]"
                          variant="body17"
                        >
                          Amount
                        </Text>
                        <div className="flex flex-row items-end justify-start mt-[3px] md:w-[100%] sm:w-[100%] w-[84%]">
                          <Text
                            className="font-medium mb-[2px] mt-[5px] text-gray_900 text-left w-[auto]"
                            variant="body5"
                          >
                            50%
                          </Text>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] ml-[59px] text-[16px] text-blue_A201 text-center w-[49px]"
                            shape="RoundedBorder5"
                            size="md"
                            variant="FillBlueA2004c"
                          >
                            25%
                          </Button>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] ml-[10px] text-[16px] text-blue_A201 text-center w-[49px]"
                            shape="RoundedBorder5"
                            size="md"
                            variant="FillBlueA2004c"
                          >
                            50%
                          </Button>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] ml-[10px] text-[16px] text-blue_A201 text-center w-[49px]"
                            shape="RoundedBorder5"
                            size="md"
                            variant="FillBlueA2004c"
                          >
                            75%
                          </Button>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] ml-[10px] text-[16px] text-blue_A201 text-center w-[49px]"
                            shape="RoundedBorder5"
                            size="md"
                            variant="FillBlueA2004c"
                          >
                            MAX
                          </Button>
                        </div>
                        <div className="flex h-[25px] md:h-[36px] sm:h-[36px] mt-[11px] relative w-[100%]">
                          <div className="bg-blue_A201 h-[25px] my-[auto] rounded-radius12 w-[25px]"></div>
                          <Line className="bg-blue_A201 h-[4px] mb-[7px] ml-[-1px] mt-[auto] w-[95%] z-[1]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[20px] w-[100%]">
                      <div className="bg-orange_50 border-2 border-amber_500_b3 border-solid flex flex-col items-center justify-center p-[11px] rounded-radius10 w-[100%]">
                        <div className="flex flex-row gap-[279px] items-start justify-start mt-[8px] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            Pooled BTC
                          </Text>
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body17"
                          >
                            0.7 BTC
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[283px] items-start justify-between sm:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            Pooled ETH
                          </Text>
                          <Text
                            className="font-bold text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            3.76 ETH
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[236px] items-start justify-start mt-[10px] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            BTC Fees earned
                          </Text>
                          <Text
                            className="font-bold text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            0.007 BTC
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[236px] items-start justify-start mb-[9px] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            ETH Fees earned
                          </Text>
                          <Text
                            className="font-bold text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            0.021 ETH
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[20px] w-[100%]">
                      <Text
                        className="font-medium text-gray_903 text-left w-[auto]"
                        variant="body17"
                      >
                        Collect as WETH{" "}
                      </Text>
                      <Switch value={true} className="w-[auto]" />
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[146px] mt-[20px] text-[16px] text-center text-white_A700 w-[auto]"
                      shape="CircleBorder19"
                      size="4xl"
                      variant="FillBlueA201"
                    >
                      Remove
                    </Button>
                    <Text
                      className="font-medium mt-[10px] text-gray_600 text-left w-[auto]"
                      variant="body17"
                    >
                      Cancel
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[77px] md:w-[100%] sm:w-[100%] w-[63%]">
              <div className="bg-white_A700 flex flex-col items-center justify-start p-[23px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-end justify-start w-[100%]">
                    <div className="flex flex-row items-end justify-between ml-[auto] md:w-[100%] sm:w-[100%] w-[66%]">
                      <Text
                        className="font-bold mt-[5px] text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Remove liquidity
                      </Text>
                      <Img
                        src="images/img_close_gray_900.svg"
                        className="h-[24px] w-[24px]"
                        alt="close Ten"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[40px] w-[100%]">
                      <div className="bg-orange_50 border-2 border-amber_500_b3 border-solid flex flex-col items-center justify-center p-[11px] rounded-radius10 w-[100%]">
                        <div className="flex flex-row gap-[279px] items-start justify-start mt-[8px] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            Pooled BTC
                          </Text>
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body17"
                          >
                            0.7 BTC
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[283px] items-start justify-between sm:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            Pooled ETH
                          </Text>
                          <Text
                            className="font-bold text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            3.76 ETH
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[236px] items-start justify-start mt-[10px] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            BTC Fees earned
                          </Text>
                          <Text
                            className="font-bold text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            0.007 BTC
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[236px] items-start justify-start mb-[9px] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            ETH Fees earned
                          </Text>
                          <Text
                            className="font-bold text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            0.021 ETH
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[146px] mr-[139px] mt-[40px] text-[16px] text-center text-white_A700 w-[auto]"
                      shape="CircleBorder19"
                      size="4xl"
                      variant="FillBlueA201"
                    >
                      Remove
                    </Button>
                    <Text
                      className="font-medium mt-[10px] text-gray_600 text-left w-[auto]"
                      variant="body17"
                    >
                      Cancel
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[66px] items-end justify-start mt-[77px] md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="bg-white_A700 flex flex-col gap-[6px] h-[143px] items-center justify-end p-[7px] w-[143px]">
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[71px] mt-[28px] text-[12px] text-center text-white_A700 w-[auto]"
                  shape="RoundedBorder10"
                  size="sm"
                  variant="GradientBlueA200DeeppurpleA700"
                >
                  Collect
                </Button>
                <div className="md:h-[41px] sm:h-[41px] h-[71px] relative w-[60%]">
                  <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[93%]">
                    <div className="flex flex-col gap-[7px] items-center justify-start w-[100%]">
                      <div className="bg-gradient2  flex flex-col items-start justify-start px-[14px] py-[3px] rounded-radius12 shadow-bs4 w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body17"
                        >
                          Collect
                        </Text>
                      </div>
                      <div className="bg-gradient10  p-[1px] rounded-radius12 w-[100%] ">
                        <div className="bg-white_A700 border-solid flex flex-col items-start justify-start px-[14px] py-[3px] rounded-radius12">
                          <Text
                            className="bg-clip-text bg-gradient2  font-medium text-left text-transparent w-[auto]"
                            variant="body17"
                          >
                            Collect
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_cursor_white_a701.svg"
                    className="absolute h-[20px] right-[0] top-[18%] w-[auto]"
                    alt="cursor Three"
                  />
                  <Img
                    src="images/img_folder.svg"
                    className="absolute bottom-[0] h-[23px] right-[0] w-[auto]"
                    alt="folder"
                  />
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-center justify-end p-[21px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[32%]">
                <div className="flex flex-col gap-[14px] items-start justify-start mt-[13px] w-[auto]">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[167px] text-[16px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder13"
                    size="4xl"
                    variant="GradientBlueA200DeeppurpleA700"
                  >
                    Remove liquidity
                  </Button>
                  <div className="md:h-[34px] sm:h-[34px] h-[48px] relative w-[100%]">
                    <div className="absolute bg-gradient2  flex flex-col h-[40px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-center mx-[auto] px-[14px] py-[8px] rounded-radius15 shadow-bs3 top-[0] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body12"
                      >
                        Remove liquidity
                      </Text>
                    </div>
                    <Img
                      src="images/img_vector_white_a701_16x12.svg"
                      className="absolute bottom-[0] h-[16px] left-[35%] w-[12px]"
                      alt="Vector"
                    />
                  </div>
                  <div className="md:h-[34px] sm:h-[34px] h-[52px] relative w-[100%]">
                    <div className="absolute bg-gradient2  p-[1px] rounded-radius15 w-[100%] ">
                      <div className="absolute bg-white_A700 border-solid flex flex-col h-[40px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-center mx-[auto] px-[14px] py-[8px] rounded-radius15 top-[0]">
                        <Text
                          className="bg-clip-text bg-gradient2  font-bold text-left text-transparent w-[auto]"
                          variant="body12"
                        >
                          Remove liquidity
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_vector_white_a701_18x19.svg"
                      className="absolute bottom-[0] h-[18px] left-[18%] w-[19px]"
                      alt="Vector One"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-start justify-end p-[32px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[33%]">
                <Text
                  className="bg-gray_500_33 font-medium justify-center mt-[30px] px-[14px] py-[3px] rounded-radius12 text-gray_600 text-left w-[auto]"
                  variant="body17"
                >
                  Increase liquidity
                </Text>
                <Text
                  className="bg-gray_500_7f font-medium justify-center mt-[12px] px-[14px] py-[3px] rounded-radius12 text-gray_600 text-left w-[auto]"
                  variant="body17"
                >
                  Increase liquidity
                </Text>
                <Img
                  src="images/img_cursor_white_a701.svg"
                  className="h-[20px] mb-[10px] md:ml-[0] sm:ml-[0] ml-[120px] w-[auto]"
                  alt="cursor Four"
                />
              </div>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row font-inter md:gap-[40px] sm:gap-[40px] gap-[63px] items-start justify-start mt-[77px] md:w-[100%] sm:w-[100%] w-[86%]">
              <div className="bg-white_A700 flex flex-col items-start justify-end p-[35px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[44%]">
                <Button
                  className="flex items-center justify-center min-w-[198px] mt-[19px] text-center w-[auto]"
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
                  <div className="bg-transparent cursor-pointer font-bold leading-[normal] text-[16px] text-left text-white_A700">
                    Add new position{" "}
                  </div>
                </Button>
                <Button
                  className="flex items-center justify-center min-w-[198px] mt-[16px] text-center w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_plus.svg"
                      className="mr-[10px] text-center"
                      alt="plus"
                    />
                  }
                  shape="RoundedBorder13"
                  size="2xl"
                  variant="FillGray400"
                >
                  <div className="bg-transparent cursor-pointer font-bold leading-[normal] text-[16px] text-left text-white_A700">
                    Add new position{" "}
                  </div>
                </Button>
                <div className="h-[43px] md:h-[56px] sm:h-[56px] mt-[16px] relative md:w-[100%] sm:w-[100%] w-[93%]">
                  <div className="absolute bg-gradient2  flex flex-row gap-[10px] inset-x-[0] items-center justify-center mx-[auto] px-[14px] py-[8px] rounded-radius15 shadow-bs3 top-[0] w-[auto]">
                    <Img
                      src="images/img_plus.svg"
                      className="h-[24px] w-[24px]"
                      alt="plus Six"
                    />
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body12"
                    >
                      Add new position{" "}
                    </Text>
                  </div>
                  <Img
                    src="images/img_vector_white_a701_16x12.svg"
                    className="absolute bottom-[0] h-[16px] right-[41%] w-[auto]"
                    alt="Vector Two"
                  />
                </div>
                <div className="h-[49px] md:h-[52px] sm:h-[52px] mt-[12px] relative md:w-[100%] sm:w-[100%] w-[93%]">
                  <div className="absolute bg-gradient2  p-[1px] rounded-radius15 w-[100%] ">
                    <div className="absolute bg-gradient2  bg-white_A700 border-solid flex flex-row gap-[10px] inset-x-[0] items-center justify-center mx-[auto] px-[14px] py-[8px] rounded-radius15 top-[0]">
                      <Img
                        src="images/img_plus.svg"
                        className="h-[24px] w-[24px]"
                        alt="plus Seven"
                      />
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body12"
                      >
                        Add new position{" "}
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_vector_white_a701_18x19.svg"
                    className="absolute bottom-[0] h-[18px] right-[7%] w-[19px]"
                    alt="Vector Three"
                  />
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col items-end justify-start md:mt-[0] sm:mt-[0] mt-[66px] pb-[25px] sm:pl-[20px] pl-[25px] md:w-[100%] sm:w-[100%] w-[47%]"
                style={{ backgroundImage: "url('images/img_group258.svg')" }}
              >
                <div className="flex flex-col gap-[25px] items-center justify-start md:w-[100%] sm:w-[100%] w-[20%]">
                  <div className="bg-blue_A200_4c flex flex-col h-[22px] md:h-[auto] sm:h-[auto] items-center justify-center px-[8px] py-[2px] rounded-radius3 w-[53px]">
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowdown Three"
                    />
                  </div>
                  <div className="bg-blue_A200_7f flex flex-col h-[22px] md:h-[auto] sm:h-[auto] items-center justify-center px-[8px] py-[2px] rounded-radius3 w-[53px]">
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowdown Four"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="font-poppins md:h-[109px] sm:h-[109px] h-[51px] mt-[77px] relative md:w-[100%] sm:w-[100%] w-[15%]">
              <div className="absolute flex flex-row gap-[8px] inset-x-[0] items-center justify-between mx-[auto] top-[0] w-[auto]">
                <Button
                  className="cursor-pointer font-medium leading-[normal] text-[16px] text-blue_A201 text-center w-[49px]"
                  shape="RoundedBorder5"
                  size="md"
                  variant="FillBlueA2004c"
                >
                  25%
                </Button>
                <div className="bg-blue_A200_7f flex flex-col items-center justify-center px-[8px] py-[4px] rounded-radius5 w-[49px]">
                  <Text
                    className="font-medium text-blue_A201 text-left w-[auto]"
                    variant="body12"
                  >
                    25%
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_television.svg"
                className="absolute bottom-[0] h-[23px] right-[14%] w-[auto]"
                alt="television"
              />
            </div>
            <div className="bg-white_A700 flex flex-col font-poppins items-center justify-end mt-[57px] p-[26px] sm:px-[20px] rounded-radius15 shadow-bs2 md:w-[100%] sm:w-[100%] w-[38%]">
              <div className="flex flex-col items-start justify-start mt-[6px] md:w-[100%] sm:w-[100%] w-[97%]">
                <Text
                  className="font-medium text-gray_900 text-left w-[auto]"
                  variant="body12"
                >
                  Liquidity
                </Text>
                <div className="flex flex-row gap-[32px] items-center justify-between mt-[11px] w-[100%]">
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    variant="body4"
                  >
                    $5000.47
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[71px] text-[12px] text-blue_A201 text-center w-[auto]"
                    shape="RoundedBorder10"
                    size="sm"
                    variant="FillBlueA2004c"
                  >
                    Collect
                  </Button>
                </div>
                <div className="bg-indigo_50_99 flex flex-col items-center justify-start mt-[19px] p-[8px] rounded-radius10 w-[100%]">
                  <List
                    className="flex-col gap-[8px] grid items-center my-[2px] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                      <Img
                        src="images/img_bluetooth.svg"
                        className="h-[26px] w-[26px]"
                        alt="bluetooth Twenty"
                      />
                      <Text
                        className="font-medium ml-[5px] mt-[5px] text-gray_601 text-left w-[auto]"
                        variant="body14"
                      >
                        BTC
                      </Text>
                      <Text
                        className="font-medium ml-[38px] mt-[5px] text-gray_601 text-left w-[auto]"
                        variant="body14"
                      >
                        0.003596
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] ml-[5px] my-[2px] text-[12px] text-blue_A201 text-center w-[36px]"
                        shape="RoundedBorder5"
                        size="sm"
                        variant="FillBlueA2004c"
                      >
                        38%
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                      <Img
                        src="images/img_floatingicon.svg"
                        className="h-[26px] w-[26px]"
                        alt="floatingicon Twenty"
                      />
                      <Text
                        className="font-medium ml-[5px] mt-[5px] text-gray_601 text-left w-[auto]"
                        variant="body14"
                      >
                        USDT
                      </Text>
                      <Text
                        className="font-medium ml-[39px] mt-[5px] text-gray_601 text-left w-[auto]"
                        variant="body14"
                      >
                        3400.58
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] ml-[5px] my-[2px] text-[12px] text-blue_A201 text-center w-[36px]"
                        shape="RoundedBorder5"
                        size="sm"
                        variant="FillBlueA2004c"
                      >
                        62%
                      </Button>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col gap-[116px] md:gap-[40px] sm:gap-[40px] justify-start md:ml-[0] sm:ml-[0] ml-[304px] md:mt-[0] sm:mt-[0] mt-[28px] p-[159px] sm:px-[20px] md:px-[40px] md:w-[100%] sm:w-[100%] w-[28%]">
            <div className="border border-deep_purple_A200 border-solid flex flex-col items-center justify-start mx-[auto] p-[20px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[89%]">
              <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start p-[13px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="md:h-[35px] sm:h-[35px] h-[49px] md:ml-[0] sm:ml-[0] ml-[25px] md:mt-[0] sm:mt-[0] mt-[17px] relative md:w-[100%] sm:w-[100%] w-[57%]">
                    <Img
                      src="images/img_cursor_white_a701.svg"
                      className="absolute bottom-[0] h-[20px] left-[3%] w-[auto]"
                      alt="cursor Five"
                    />
                    <div className="absolute flex flex-row inset-x-[0] items-end justify-between mx-[auto] top-[0] w-[100%]">
                      <Button
                        className="flex h-[32px] items-center justify-center mb-[3px] w-[32px]"
                        shape="icbCircleBorder15"
                        size="mdIcn"
                        variant="icbFillGray5004c"
                      >
                        <Img
                          src="images/img_arrowleft.svg"
                          className="h-[15px]"
                          alt="arrowleft Three"
                        />
                      </Button>
                      <Text
                        className="font-medium mt-[5px] text-gray_900 text-left w-[auto]"
                        variant="body4"
                      >
                        Add liquidity{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[128px] md:w-[100%] sm:w-[100%] w-[17%]">
                    <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                      <Text
                        className="font-medium text-gray_600 text-left w-[auto]"
                        variant="body12"
                      >
                        BTC
                      </Text>
                      <Switch value={true} className="w-[auto]" />
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        USDT
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_settings_gray_900.svg"
                    className="h-[18px] md:ml-[0] sm:ml-[0] ml-[35px] w-[18px]"
                    alt="settings"
                  />
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[27px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="flex flex-col items-start justify-start mb-[3px] md:w-[100%] sm:w-[100%] w-[98%]">
                    <div className="flex md:h-[26px] sm:h-[26px] h-[27px] justify-end relative md:w-[100%] sm:w-[100%] w-[13%]">
                      <Text
                        className="font-medium mt-[auto] mx-[auto] text-gray_900 text-left w-[auto]"
                        variant="body9"
                      >
                        Select pair
                      </Text>
                      <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] pt-[6px] w-[100%]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body9"
                        >
                          Select pair
                        </Text>
                      </div>
                    </div>
                    <div className="bg-indigo_50 flex flex-col items-center justify-start mt-[20px] p-[10px] rounded-radius20 md:w-[100%] sm:w-[100%] w-[51%]">
                      <div className="flex flex-row items-end justify-between mb-[3px] md:w-[100%] sm:w-[100%] w-[99%]">
                        <div className="flex flex-col gap-[11px] justify-start w-[auto]">
                          <div className="bg-white_A700 flex flex-col items-start justify-start px-[6px] py-[3px] rounded-radius18 shadow-bs w-[auto]">
                            <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_bluetooth.svg"
                                className="h-[26px] w-[26px]"
                                alt="bluetooth TwentyOne"
                              />
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body7"
                              >
                                BTC
                              </Text>
                              <Img
                                src="images/img_arrowup_gray_900_16x16.svg"
                                className="h-[16px] w-[16px]"
                                alt="arrowup Six"
                              />
                            </div>
                          </div>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[10px] text-gray_600 text-left w-[auto]"
                            variant="body5"
                          >
                            0.00
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[5px] items-end justify-start mt-[40px] w-[auto]">
                          <a
                            className="font-medium text-[12px] text-gray_600 text-left underline w-[auto]"
                            href="#"
                          >
                            Max
                          </a>
                          <Text
                            className="font-medium text-gray_600 text-left w-[auto]"
                            variant="body17"
                          >
                            Balance: 0.00
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-indigo_50 flex flex-col items-center justify-start mt-[10px] p-[10px] rounded-radius20 md:w-[100%] sm:w-[100%] w-[51%]">
                      <div className="flex flex-row items-end justify-between mb-[3px] md:w-[100%] sm:w-[100%] w-[99%]">
                        <div className="flex flex-col gap-[11px] justify-start w-[auto]">
                          <Button
                            className="flex items-center justify-center text-center"
                            rightIcon={
                              <Img
                                src="images/img_arrowup_white_a700_16x16.svg"
                                className="ml-[5px] text-center"
                                alt="arrow_up"
                              />
                            }
                            shape="CircleBorder19"
                            size="xl"
                            variant="OutlineBlack90021"
                          >
                            <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[20px] text-left text-white_A700">
                              Select token
                            </div>
                          </Button>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[10px] text-gray_600 text-left w-[auto]"
                            variant="body5"
                          >
                            0.00
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[5px] items-end justify-start mt-[40px] w-[auto]">
                          <a
                            className="font-medium text-[12px] text-gray_600 text-left underline w-[auto]"
                            href="#"
                          >
                            Max
                          </a>
                          <Text
                            className="font-medium text-gray_600 text-left w-[auto]"
                            variant="body17"
                          >
                            Balance: 0.00
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-end mt-[30px] py-[2px] md:w-[100%] sm:w-[100%] w-[15%]">
                      <Text
                        className="font-medium mt-[4px] text-gray_900_7e text-left w-[auto]"
                        variant="body12"
                      >
                        Swapping fee
                      </Text>
                    </div>
                    <div className="flex md:flex-col sm:flex-col flex-row gap-[39px] items-end justify-between mt-[20px] w-[100%]">
                      <div className="bg-indigo_50_7e flex md:flex-1 sm:flex-1 flex-col items-start justify-end p-[13px] rounded-radius15 md:w-[100%] sm:w-[100%] w-[auto]">
                        <div className="flex flex-col gap-[9px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[4px] md:w-[100%] sm:w-[100%] w-[19%]">
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body9"
                          >
                            Fee tier
                          </Text>
                          <Text
                            className="bg-bluegray_102 justify-center px-[6px] rounded-radius5 text-gray_900 text-left w-[auto]"
                            variant="body22"
                          >
                            0% select
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] md:mt-[0] sm:mt-[0] mt-[23px] text-[16px] text-center text-gray_400 w-[362px]"
                        shape="RoundedBorder13"
                        size="7xl"
                        variant="FillGray903"
                      >
                        Invalid pair
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[172px] w-[100%]">
                <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                  <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start p-[13px] rounded-radius20 shadow-bs2 w-[100%]">
                    <div className="md:h-[35px] sm:h-[35px] h-[49px] md:ml-[0] sm:ml-[0] ml-[25px] md:mt-[0] sm:mt-[0] mt-[17px] relative md:w-[100%] sm:w-[100%] w-[57%]">
                      <Img
                        src="images/img_cursor_white_a701.svg"
                        className="absolute bottom-[0] h-[20px] left-[3%] w-[auto]"
                        alt="cursor Six"
                      />
                      <div className="absolute flex flex-row inset-x-[0] items-end justify-between mx-[auto] top-[0] w-[100%]">
                        <Button
                          className="flex h-[32px] items-center justify-center mb-[3px] w-[32px]"
                          shape="icbCircleBorder15"
                          size="mdIcn"
                          variant="icbFillGray5004c"
                        >
                          <Img
                            src="images/img_arrowleft.svg"
                            className="h-[15px]"
                            alt="arrowleft Four"
                          />
                        </Button>
                        <Text
                          className="font-medium mt-[5px] text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          Add liquidity{" "}
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 sm:flex-1 flex-row gap-[10px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[128px] md:w-[100%] sm:w-[100%] w-[17%]">
                      <Text
                        className="font-medium text-gray_600 text-left w-[auto]"
                        variant="body12"
                      >
                        BTC
                      </Text>
                      <Switch value={true} className="w-[34%]" />
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        USDT
                      </Text>
                    </div>
                    <Img
                      src="images/img_settings_gray_900.svg"
                      className="h-[18px] md:ml-[0] sm:ml-[0] ml-[35px] w-[18px]"
                      alt="settings One"
                    />
                  </div>
                  <div className="bg-white_A700 flex flex-col items-center justify-start p-[33px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                    <div className="flex flex-col items-start justify-start mb-[6px] md:w-[100%] sm:w-[100%] w-[99%]">
                      <div className="h-[20px] md:h-[auto] sm:h-[auto] relative md:w-[100%] sm:w-[100%] w-[13%]">
                        <Text
                          className="font-medium m-[auto] text-gray_900 text-left w-[auto]"
                          variant="body9"
                        >
                          Select pair
                        </Text>
                        <Text
                          className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-gray_900 text-left w-[max-content]"
                          variant="body9"
                        >
                          Select pair
                        </Text>
                      </div>
                      <div className="bg-indigo_50 flex flex-col items-center justify-start mt-[20px] p-[10px] rounded-radius20 md:w-[100%] sm:w-[100%] w-[51%]">
                        <div className="flex flex-row items-end justify-between mb-[3px] md:w-[100%] sm:w-[100%] w-[99%]">
                          <div className="flex flex-col gap-[11px] justify-start w-[auto]">
                            <div className="bg-white_A700 flex flex-col items-start justify-start px-[6px] py-[3px] rounded-radius18 shadow-bs w-[auto]">
                              <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_bluetooth.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="bluetooth TwentyTwo"
                                />
                                <Text
                                  className="font-medium text-gray_900 text-left w-[auto]"
                                  variant="body7"
                                >
                                  BTC
                                </Text>
                                <Img
                                  src="images/img_arrowup_gray_900_16x16.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="arrowup Seven"
                                />
                              </div>
                            </div>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[10px] text-gray_600 text-left w-[auto]"
                              variant="body5"
                            >
                              0.00
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[5px] items-end justify-start mt-[40px] w-[auto]">
                            <a
                              className="font-medium text-[12px] text-gray_600 text-left underline w-[auto]"
                              href="#"
                            >
                              Max
                            </a>
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body17"
                            >
                              Balance: 0.005
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-indigo_50 flex flex-col items-center justify-start mt-[10px] p-[10px] rounded-radius20 md:w-[100%] sm:w-[100%] w-[51%]">
                        <div className="flex flex-row items-end justify-between mb-[3px] md:w-[100%] sm:w-[100%] w-[99%]">
                          <div className="flex flex-col gap-[9px] justify-start w-[auto]">
                            <div className="bg-white_A700 flex flex-col items-start justify-start px-[6px] py-[3px] rounded-radius19 shadow-bs w-[auto]">
                              <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                <div
                                  className="bg-cover bg-no-repeat flex flex-col h-[32px] items-start justify-start p-[2px] w-[32px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group155.svg')",
                                  }}
                                >
                                  <Img
                                    src="images/img_floatingicon.svg"
                                    className="h-[26px] w-[26px]"
                                    alt="floatingicon TwentyOne"
                                  />
                                </div>
                                <Text
                                  className="font-medium text-gray_900 text-left w-[auto]"
                                  variant="body7"
                                >
                                  USDT
                                </Text>
                                <Img
                                  src="images/img_arrowup_gray_900_16x16.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="arrowup Eight"
                                />
                              </div>
                            </div>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[10px] text-gray_600 text-left w-[auto]"
                              variant="body5"
                            >
                              0.00
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[5px] items-end justify-start mt-[40px] w-[auto]">
                            <a
                              className="font-medium text-[12px] text-gray_600 text-left underline w-[auto]"
                              href="#"
                            >
                              Max
                            </a>
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body17"
                            >
                              Balance: 138.76
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="font-medium mt-[36px] text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Swapping fee
                      </Text>
                      <div className="flex md:flex-col sm:flex-col flex-row gap-[39px] items-end justify-between mt-[22px] w-[100%]">
                        <div className="bg-indigo_50 flex md:flex-1 sm:flex-1 flex-col items-start justify-end p-[13px] rounded-radius15 md:w-[100%] sm:w-[100%] w-[auto]">
                          <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[4px] md:w-[100%] sm:w-[100%] w-[30%]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0.3% fee tier
                            </Text>
                            <Text
                              className="bg-bluegray_102 justify-center px-[6px] rounded-radius5 text-gray_900 text-left w-[auto]"
                              variant="body22"
                            >
                              78% select
                            </Text>
                          </div>
                        </div>
                        <Input
                          className="flex-1 font-bold leading-[normal] p-[0] text-[16px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                          wrapClassName="md:h-[auto] md:mt-[0] md:w-[100%] mt-[23px] sm:h-[auto] sm:mt-[0] sm:w-[100%] w-[362px]"
                          name="Frame262"
                          placeholder="Enter an amount"
                          shape="RoundedBorder15"
                          size="xl"
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[323px] w-[100%]">
                <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                  <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start p-[13px] rounded-radius20 shadow-bs2 w-[100%]">
                    <div className="md:h-[35px] sm:h-[35px] h-[49px] md:ml-[0] sm:ml-[0] ml-[25px] md:mt-[0] sm:mt-[0] mt-[17px] relative md:w-[100%] sm:w-[100%] w-[57%]">
                      <Img
                        src="images/img_cursor_white_a701.svg"
                        className="absolute bottom-[0] h-[20px] left-[3%] w-[auto]"
                        alt="cursor Seven"
                      />
                      <div className="absolute flex flex-row inset-x-[0] items-end justify-between mx-[auto] top-[0] w-[100%]">
                        <Button
                          className="flex h-[32px] items-center justify-center mb-[3px] w-[32px]"
                          shape="icbCircleBorder15"
                          size="mdIcn"
                          variant="icbFillGray5004c"
                        >
                          <Img
                            src="images/img_arrowleft.svg"
                            className="h-[15px]"
                            alt="arrowleft Five"
                          />
                        </Button>
                        <Text
                          className="font-medium mt-[5px] text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          Add liquidity{" "}
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 sm:flex-1 flex-row gap-[10px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[128px] md:w-[100%] sm:w-[100%] w-[17%]">
                      <Text
                        className="font-medium text-gray_600 text-left w-[auto]"
                        variant="body12"
                      >
                        BTC
                      </Text>
                      <Switch value={true} className="w-[34%]" />
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        USDT
                      </Text>
                    </div>
                    <Img
                      src="images/img_settings_gray_900.svg"
                      className="h-[18px] md:ml-[0] sm:ml-[0] ml-[35px] w-[18px]"
                      alt="settings Two"
                    />
                  </div>
                  <div className="bg-white_A700 flex flex-col items-center justify-start p-[33px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                    <div className="flex flex-col items-start justify-start mb-[6px] md:w-[100%] sm:w-[100%] w-[99%]">
                      <div className="h-[20px] md:h-[auto] sm:h-[auto] relative md:w-[100%] sm:w-[100%] w-[13%]">
                        <Text
                          className="font-medium m-[auto] text-gray_900 text-left w-[auto]"
                          variant="body9"
                        >
                          Select pair
                        </Text>
                        <Text
                          className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-gray_900 text-left w-[max-content]"
                          variant="body9"
                        >
                          Select pair
                        </Text>
                      </div>
                      <List
                        className="flex-col gap-[10px] grid mt-[20px] md:w-[100%] sm:w-[100%] w-[51%]"
                        orientation="vertical"
                      >
                        <div className="bg-indigo_50 flex flex-col items-center justify-start p-[10px] rounded-radius20 w-[100%]">
                          <div className="flex flex-row items-end justify-between mb-[3px] md:w-[100%] sm:w-[100%] w-[99%]">
                            <div className="flex flex-col gap-[11px] justify-start w-[auto]">
                              <div className="bg-white_A700 flex flex-col items-start justify-start px-[6px] py-[3px] rounded-radius18 shadow-bs w-[auto]">
                                <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                  <Img
                                    src="images/img_bluetooth.svg"
                                    className="h-[26px] w-[26px]"
                                    alt="bluetooth TwentyThree"
                                  />
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body7"
                                  >
                                    BTC
                                  </Text>
                                  <Img
                                    src="images/img_arrowup_gray_900_16x16.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="arrowup Nine"
                                  />
                                </div>
                              </div>
                              <Text
                                className="font-medium md:ml-[0] sm:ml-[0] ml-[10px] text-gray_600 text-left w-[auto]"
                                variant="body5"
                              >
                                0.00
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[5px] items-end justify-start mt-[40px] w-[auto]">
                              <a
                                className="font-medium text-[12px] text-gray_600 text-left underline w-[auto]"
                                href="#"
                              >
                                Max
                              </a>
                              <Text
                                className="font-medium text-gray_600 text-left w-[auto]"
                                variant="body17"
                              >
                                Balance: 0.005
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-indigo_50 flex flex-col items-center justify-start p-[10px] rounded-radius20 w-[100%]">
                          <div className="flex flex-row items-end justify-between mb-[3px] md:w-[100%] sm:w-[100%] w-[99%]">
                            <div className="flex flex-col gap-[9px] justify-start w-[auto]">
                              <div className="bg-white_A700 flex flex-col items-start justify-start px-[6px] py-[3px] rounded-radius19 shadow-bs w-[auto]">
                                <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                  <div
                                    className="bg-cover bg-no-repeat flex flex-col h-[32px] items-start justify-start p-[2px] w-[32px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group155.svg')",
                                    }}
                                  >
                                    <Img
                                      src="images/img_floatingicon.svg"
                                      className="h-[26px] w-[26px]"
                                      alt="floatingicon TwentyTwo"
                                    />
                                  </div>
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body7"
                                  >
                                    USDT
                                  </Text>
                                  <Img
                                    src="images/img_arrowup_gray_900_16x16.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="arrowup Ten"
                                  />
                                </div>
                              </div>
                              <Text
                                className="font-medium md:ml-[0] sm:ml-[0] ml-[10px] text-gray_600 text-left w-[auto]"
                                variant="body5"
                              >
                                0.00
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[5px] items-end justify-start mt-[40px] w-[auto]">
                              <a
                                className="font-medium text-[12px] text-gray_600 text-left underline w-[auto]"
                                href="#"
                              >
                                Max
                              </a>
                              <Text
                                className="font-medium text-gray_600 text-left w-[auto]"
                                variant="body17"
                              >
                                Balance: 138.76
                              </Text>
                            </div>
                          </div>
                        </div>
                      </List>
                      <Text
                        className="font-medium mt-[36px] text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Swapping fee
                      </Text>
                      <div className="flex md:flex-col sm:flex-col flex-row gap-[39px] items-end justify-between mt-[22px] w-[100%]">
                        <div className="bg-indigo_50 flex md:flex-1 sm:flex-1 flex-col items-start justify-end p-[13px] rounded-radius15 md:w-[100%] sm:w-[100%] w-[auto]">
                          <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[4px] md:w-[100%] sm:w-[100%] w-[30%]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0.3% fee tier
                            </Text>
                            <Text
                              className="bg-bluegray_102 justify-center px-[6px] rounded-radius5 text-gray_900 text-left w-[auto]"
                              variant="body22"
                            >
                              78% select
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-bold leading-[normal] md:mt-[0] sm:mt-[0] mt-[23px] text-[16px] text-center text-gray_400 w-[362px]"
                          shape="RoundedBorder13"
                          size="7xl"
                          variant="FillGray903"
                        >
                          Insufficient BTC balance
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[323px] w-[100%]">
                <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                  <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start p-[13px] rounded-radius20 shadow-bs2 w-[100%]">
                    <div className="md:h-[35px] sm:h-[35px] h-[49px] md:ml-[0] sm:ml-[0] ml-[25px] md:mt-[0] sm:mt-[0] mt-[17px] relative md:w-[100%] sm:w-[100%] w-[57%]">
                      <Img
                        src="images/img_cursor_white_a701.svg"
                        className="absolute bottom-[0] h-[20px] left-[3%] w-[auto]"
                        alt="cursor Eight"
                      />
                      <div className="absolute flex flex-row inset-x-[0] items-end justify-between mx-[auto] top-[0] w-[100%]">
                        <Button
                          className="flex h-[32px] items-center justify-center mb-[3px] w-[32px]"
                          shape="icbCircleBorder15"
                          size="mdIcn"
                          variant="icbFillGray5004c"
                        >
                          <Img
                            src="images/img_arrowleft.svg"
                            className="h-[15px]"
                            alt="arrowleft Six"
                          />
                        </Button>
                        <Text
                          className="font-medium mt-[5px] text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          Add liquidity{" "}
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 sm:flex-1 flex-row gap-[10px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[128px] md:w-[100%] sm:w-[100%] w-[17%]">
                      <Text
                        className="font-medium text-gray_600 text-left w-[auto]"
                        variant="body12"
                      >
                        BTC
                      </Text>
                      <Switch value={true} className="w-[34%]" />
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        USDT
                      </Text>
                    </div>
                    <Img
                      src="images/img_settings_gray_900.svg"
                      className="h-[18px] md:ml-[0] sm:ml-[0] ml-[35px] w-[18px]"
                      alt="settings Three"
                    />
                  </div>
                  <div className="bg-white_A700 flex flex-col items-center justify-start p-[33px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row gap-[39px] items-end justify-between mb-[6px] md:w-[100%] sm:w-[100%] w-[99%]">
                      <div className="flex flex-col gap-[22px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <div className="flex flex-col items-start justify-start w-[100%]">
                          <div className="h-[20px] md:h-[auto] sm:h-[auto] relative md:w-[100%] sm:w-[100%] w-[25%]">
                            <Text
                              className="font-medium m-[auto] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              Select pair
                            </Text>
                            <Text
                              className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-gray_900 text-left w-[max-content]"
                              variant="body9"
                            >
                              Select pair
                            </Text>
                          </div>
                          <List
                            className="flex-col gap-[10px] grid items-center mt-[20px] w-[100%]"
                            orientation="vertical"
                          >
                            <div className="bg-indigo_50 flex flex-1 flex-col items-center justify-start p-[10px] rounded-radius20 w-[100%]">
                              <div className="flex flex-row items-end justify-between mb-[2px] md:w-[100%] sm:w-[100%] w-[99%]">
                                <div className="flex flex-col gap-[12px] justify-start w-[auto]">
                                  <div className="bg-white_A700 flex flex-col items-start justify-start mr-[18px] px-[6px] py-[3px] rounded-radius18 shadow-bs w-[auto]">
                                    <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                      <Img
                                        src="images/img_bluetooth.svg"
                                        className="h-[26px] w-[26px]"
                                        alt="bluetooth TwentyFour"
                                      />
                                      <Text
                                        className="font-medium text-gray_900 text-left w-[auto]"
                                        variant="body7"
                                      >
                                        BTC
                                      </Text>
                                      <Img
                                        src="images/img_arrowup_gray_900_16x16.svg"
                                        className="h-[16px] w-[16px]"
                                        alt="arrowup Eleven"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-end justify-evenly ml-[auto] md:w-[100%] sm:w-[100%] w-[92%]">
                                    <Text
                                      className="font-medium text-gray_900 text-left w-[auto]"
                                      variant="body5"
                                    >
                                      0.005
                                    </Text>
                                    <Text
                                      className="font-medium mt-[7px] text-gray_600 text-left w-[auto]"
                                      variant="body17"
                                    >
                                      $137.35
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-[6px] items-end justify-start mt-[40px] w-[auto]">
                                  <a
                                    className="font-medium text-[12px] text-gray_600 text-left underline w-[auto]"
                                    href="#"
                                  >
                                    Max
                                  </a>
                                  <Text
                                    className="font-medium text-gray_600 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    Balance: 0.005
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-indigo_50 flex flex-1 flex-col items-center justify-start p-[10px] rounded-radius20 w-[100%]">
                              <div className="flex flex-row items-end justify-between mb-[2px] md:w-[100%] sm:w-[100%] w-[99%]">
                                <div className="flex flex-col gap-[10px] items-end justify-start w-[auto]">
                                  <div className="bg-white_A700 flex flex-col items-start justify-start px-[6px] py-[3px] rounded-radius19 shadow-bs w-[auto]">
                                    <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                      <div
                                        className="bg-cover bg-no-repeat flex flex-col h-[32px] items-start justify-start p-[2px] w-[32px]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group155.svg')",
                                        }}
                                      >
                                        <Img
                                          src="images/img_floatingicon.svg"
                                          className="h-[26px] w-[26px]"
                                          alt="floatingicon TwentyThree"
                                        />
                                      </div>
                                      <Text
                                        className="font-medium text-gray_900 text-left w-[auto]"
                                        variant="body7"
                                      >
                                        USDT
                                      </Text>
                                      <Img
                                        src="images/img_arrowup_gray_900_16x16.svg"
                                        className="h-[16px] w-[16px]"
                                        alt="arrowup Twelve"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-end justify-evenly ml-[auto] md:w-[100%] sm:w-[100%] w-[92%]">
                                    <Text
                                      className="font-medium text-gray_900 text-left w-[auto]"
                                      variant="body5"
                                    >
                                      137.61
                                    </Text>
                                    <Text
                                      className="font-medium mt-[7px] text-gray_600 text-left w-[auto]"
                                      variant="body17"
                                    >
                                      $137.35
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-[6px] items-end justify-start mt-[40px] w-[auto]">
                                  <a
                                    className="font-medium text-[12px] text-gray_600 text-left underline w-[auto]"
                                    href="#"
                                  >
                                    Max
                                  </a>
                                  <Text
                                    className="font-medium text-gray_600 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    Balance: 138.76
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </List>
                          <Text
                            className="font-medium mt-[36px] text-gray_900 text-left w-[auto]"
                            variant="body12"
                          >
                            Swapping fee
                          </Text>
                        </div>
                        <div className="bg-indigo_50 flex flex-col items-start justify-end p-[13px] rounded-radius15 w-[100%]">
                          <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[4px] md:w-[100%] sm:w-[100%] w-[30%]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0.3% fee tier
                            </Text>
                            <Text
                              className="bg-bluegray_102 justify-center px-[6px] rounded-radius5 text-gray_900 text-left w-[auto]"
                              variant="body22"
                            >
                              78% select
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[10px] items-center justify-start md:mt-[0] sm:mt-[0] mt-[280px] md:w-[100%] sm:w-[100%] w-[auto]">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[362px]"
                          shape="RoundedBorder13"
                          size="6xl"
                          variant="GradientDeeppurple400Purple300"
                        >
                          Approve BTC
                        </Button>
                        <Button
                          className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-gray_400 w-[362px]"
                          shape="RoundedBorder13"
                          size="7xl"
                          variant="FillGray903"
                        >
                          Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[323px] w-[100%]">
                <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                  <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start p-[13px] rounded-radius20 shadow-bs2 w-[100%]">
                    <div className="md:h-[35px] sm:h-[35px] h-[49px] md:ml-[0] sm:ml-[0] ml-[25px] md:mt-[0] sm:mt-[0] mt-[17px] relative md:w-[100%] sm:w-[100%] w-[57%]">
                      <Img
                        src="images/img_cursor_white_a701.svg"
                        className="absolute bottom-[0] h-[20px] left-[3%] w-[auto]"
                        alt="cursor Nine"
                      />
                      <div className="absolute flex flex-row inset-x-[0] items-end justify-between mx-[auto] top-[0] w-[100%]">
                        <Button
                          className="flex h-[32px] items-center justify-center mb-[3px] w-[32px]"
                          shape="icbCircleBorder15"
                          size="mdIcn"
                          variant="icbFillGray5004c"
                        >
                          <Img
                            src="images/img_arrowleft.svg"
                            className="h-[15px]"
                            alt="arrowleft Seven"
                          />
                        </Button>
                        <Text
                          className="font-medium mt-[5px] text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          Add liquidity{" "}
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 sm:flex-1 flex-row gap-[10px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[128px] md:w-[100%] sm:w-[100%] w-[17%]">
                      <Text
                        className="font-medium text-gray_600 text-left w-[auto]"
                        variant="body12"
                      >
                        BTC
                      </Text>
                      <Switch value={true} className="w-[34%]" />
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        USDT
                      </Text>
                    </div>
                    <Img
                      src="images/img_settings_gray_900.svg"
                      className="h-[18px] md:ml-[0] sm:ml-[0] ml-[35px] w-[18px]"
                      alt="settings Four"
                    />
                  </div>
                  <div className="bg-white_A700 flex flex-col items-center justify-start p-[33px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row gap-[39px] items-end justify-between mb-[6px] md:w-[100%] sm:w-[100%] w-[99%]">
                      <div className="flex flex-col gap-[22px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <div className="flex flex-col items-start justify-start w-[100%]">
                          <div className="h-[20px] md:h-[auto] sm:h-[auto] relative md:w-[100%] sm:w-[100%] w-[25%]">
                            <Text
                              className="font-medium m-[auto] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              Select pair
                            </Text>
                            <Text
                              className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-gray_900 text-left w-[max-content]"
                              variant="body9"
                            >
                              Select pair
                            </Text>
                          </div>
                          <List
                            className="flex-col gap-[10px] grid items-center mt-[20px] w-[100%]"
                            orientation="vertical"
                          >
                            <div className="bg-indigo_50 flex flex-1 flex-col items-center justify-start p-[10px] rounded-radius20 w-[100%]">
                              <div className="flex flex-row items-end justify-between mb-[2px] md:w-[100%] sm:w-[100%] w-[99%]">
                                <div className="flex flex-col gap-[12px] justify-start w-[auto]">
                                  <div className="bg-white_A700 flex flex-col items-start justify-start mr-[18px] px-[6px] py-[3px] rounded-radius18 shadow-bs w-[auto]">
                                    <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                      <Img
                                        src="images/img_bluetooth.svg"
                                        className="h-[26px] w-[26px]"
                                        alt="bluetooth TwentyFive"
                                      />
                                      <Text
                                        className="font-medium text-gray_900 text-left w-[auto]"
                                        variant="body7"
                                      >
                                        BTC
                                      </Text>
                                      <Img
                                        src="images/img_arrowup_gray_900_16x16.svg"
                                        className="h-[16px] w-[16px]"
                                        alt="arrowup Thirteen"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-end justify-evenly ml-[auto] md:w-[100%] sm:w-[100%] w-[92%]">
                                    <Text
                                      className="font-medium text-gray_900 text-left w-[auto]"
                                      variant="body5"
                                    >
                                      0.005
                                    </Text>
                                    <Text
                                      className="font-medium mt-[7px] text-gray_600 text-left w-[auto]"
                                      variant="body17"
                                    >
                                      $137.35
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-[6px] items-end justify-start mt-[40px] w-[auto]">
                                  <a
                                    className="font-medium text-[12px] text-gray_600 text-left underline w-[auto]"
                                    href="#"
                                  >
                                    Max
                                  </a>
                                  <Text
                                    className="font-medium text-gray_600 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    Balance: 0.005
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-indigo_50 flex flex-1 flex-col items-center justify-start p-[10px] rounded-radius20 w-[100%]">
                              <div className="flex flex-row items-end justify-between mb-[2px] md:w-[100%] sm:w-[100%] w-[99%]">
                                <div className="flex flex-col gap-[10px] items-end justify-start w-[auto]">
                                  <div className="bg-white_A700 flex flex-col items-start justify-start px-[6px] py-[3px] rounded-radius19 shadow-bs w-[auto]">
                                    <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                      <div
                                        className="bg-cover bg-no-repeat flex flex-col h-[32px] items-start justify-start p-[2px] w-[32px]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group155.svg')",
                                        }}
                                      >
                                        <Img
                                          src="images/img_floatingicon.svg"
                                          className="h-[26px] w-[26px]"
                                          alt="floatingicon TwentyFour"
                                        />
                                      </div>
                                      <Text
                                        className="font-medium text-gray_900 text-left w-[auto]"
                                        variant="body7"
                                      >
                                        USDT
                                      </Text>
                                      <Img
                                        src="images/img_arrowup_gray_900_16x16.svg"
                                        className="h-[16px] w-[16px]"
                                        alt="arrowup Fourteen"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-end justify-evenly ml-[auto] md:w-[100%] sm:w-[100%] w-[92%]">
                                    <Text
                                      className="font-medium text-gray_900 text-left w-[auto]"
                                      variant="body5"
                                    >
                                      137.61
                                    </Text>
                                    <Text
                                      className="font-medium mt-[7px] text-gray_600 text-left w-[auto]"
                                      variant="body17"
                                    >
                                      $137.35
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-[6px] items-end justify-start mt-[40px] w-[auto]">
                                  <a
                                    className="font-medium text-[12px] text-gray_600 text-left underline w-[auto]"
                                    href="#"
                                  >
                                    Max
                                  </a>
                                  <Text
                                    className="font-medium text-gray_600 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    Balance: 138.76
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </List>
                          <Text
                            className="font-medium mt-[36px] text-gray_900 text-left w-[auto]"
                            variant="body12"
                          >
                            Swapping fee
                          </Text>
                        </div>
                        <div className="bg-indigo_50 flex flex-col items-start justify-end p-[13px] rounded-radius15 w-[100%]">
                          <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[4px] md:w-[100%] sm:w-[100%] w-[30%]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0.3% fee tier
                            </Text>
                            <Text
                              className="bg-bluegray_102 justify-center px-[6px] rounded-radius5 text-gray_900 text-left w-[auto]"
                              variant="body22"
                            >
                              78% select
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[10px] items-center justify-start md:mt-[0] sm:mt-[0] mt-[280px] md:w-[100%] sm:w-[100%] w-[auto]">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-gray_400 w-[362px]"
                          shape="RoundedBorder13"
                          size="7xl"
                          variant="FillGray903"
                        >
                          Approve BTC
                        </Button>
                        <Button
                          className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[362px]"
                          shape="RoundedBorder13"
                          size="7xl"
                          variant="GradientDeeppurple400Purple300"
                        >
                          Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[136px] md:gap-[40px] sm:gap-[40px] items-center justify-start mb-[908px] md:ml-[0] sm:ml-[0] ml-[79px] md:w-[100%] sm:w-[100%] w-[47%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col gap-[40px] items-center justify-start p-[29px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="md:h-[152px] sm:h-[152px] h-[235px] mt-[5px] relative w-[100%]">
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      variant="body4"
                    >
                      Add liquidity
                    </Text>
                    <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                      <div className="flex flex-col gap-[17px] items-end justify-start w-[100%]">
                        <Img
                          src="images/img_close_gray_900.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Eleven"
                        />
                        <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[12px] h-[38px] md:h-[auto] sm:h-[auto] items-center justify-center w-[200px]">
                            <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                              <Img
                                src="images/img_bluetooth.svg"
                                className="h-[26px] my-[auto] w-[26px]"
                                alt="bluetooth TwentySix"
                              />
                              <Img
                                src="images/img_floatingicon.svg"
                                className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                                alt="floatingicon TwentyFive"
                              />
                            </div>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body4"
                            >
                              BTC - USDT
                            </Text>
                          </div>
                          <List
                            className="flex-col gap-[10px] grid items-center w-[100%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-row items-center justify-between pr-[5px] w-[100%]">
                              <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_bluetooth.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="bluetooth TwentySeven"
                                />
                                <div className="flex flex-col gap-[-3px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    BTC
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_600 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    Bitcoin
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body7"
                              >
                                0.0056 BTC
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row items-center justify-between pr-[5px] w-[100%]">
                              <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_floatingicon.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="floatingicon TwentySix"
                                />
                                <div className="flex flex-col gap-[-3px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    USDT
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_600 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    Tether
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body7"
                              >
                                675.00 USDT
                              </Text>
                            </div>
                          </List>
                          <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[99%]">
                            <Text
                              className="font-medium text-gray_903 text-left w-[auto]"
                              variant="body12"
                            >
                              Fee tier
                            </Text>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] min-w-[67px] text-[16px] text-center text-gray_900 w-[auto]"
                              shape="RoundedBorder13"
                              size="sm"
                              variant="OutlineGray900bf"
                            >
                              0.3%
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] mb-[13px] text-[16px] text-center text-white_A700 w-[389px]"
                    shape="RoundedBorder13"
                    size="9xl"
                    variant="GradientDeeppurple400Purple300"
                  >
                    Confirm
                  </Button>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[14px] md:w-[100%] sm:w-[100%] w-[99%]"
                style={{
                  backgroundImage: "url('images/img_extraprogram.svg')",
                }}
              >
                <div className="flex flex-col justify-start mb-[28px] md:w-[100%] sm:w-[100%] w-[95%]">
                  <div className="flex flex-row items-end justify-between w-[100%]">
                    <Text
                      className="font-bold mt-[5px] text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      Confirm supplying liquidity
                    </Text>
                    <Img
                      src="images/img_close_gray_900.svg"
                      className="h-[24px] w-[24px]"
                      alt="close Twelve"
                    />
                  </div>
                  <div className="bg-gray_903 h-[140px] mt-[45px] mx-[auto] rounded-radius50 w-[140px]"></div>
                  <Text
                    className="font-bold md:ml-[0] sm:ml-[0] ml-[51px] mt-[37px] text-gray_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Waiting for confirmation
                  </Text>
                  <Text
                    className="font-bold md:ml-[0] sm:ml-[0] ml-[69px] mt-[15px] text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Supplying 0.0056 BTC to 675.00 USDT
                  </Text>
                  <Text
                    className="font-bold md:ml-[0] sm:ml-[0] ml-[86px] mt-[56px] text-gray_600 text-left w-[auto]"
                    variant="body14"
                  >
                    Confirm transaction in your wallet
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UIkitliquiditypagePage;
