import React from "react";

import { Img, Text, Button, List, Line, Switch, Input } from "components";

const UiKit360LiquiditypagePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] p-[87px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start max-w-[4291px] mb-[173px] mt-[58px] mx-[auto] w-[100%]">
          <div className="flex flex-col items-start justify-start w-[auto]">
            <div className="border border-deep_purple_A200 border-solid flex flex-col gap-[50px] items-center justify-start p-[20px] rounded-radius5 w-[100%]">
              <div className="bg-white_A700 flex flex-col md:gap-[40px] sm:gap-[40px] gap-[65px] items-center justify-end p-[27px] sm:px-[20px] rounded-radius30 shadow-bs2 w-[100%]">
                <div className="flex flex-col font-poppins gap-[6px] items-center justify-start mt-[70px] w-[100%]">
                  <Img
                    src="images/img_trash.svg"
                    className="h-[50px] w-[50px]"
                    alt="trash"
                  />
                  <Text
                    className="font-medium text-center text-gray_400 w-[100%]"
                    variant="body9"
                  >
                    Your active liquidity positions will appear here{" "}
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-bold font-inter leading-[normal] mb-[14px] min-w-[175px] text-[16px] text-center text-white_A700 w-[auto]"
                  shape="RoundedBorder23"
                  size="6xl"
                  variant="GradientDeeppurple400Purple300"
                >
                  Connect wallet
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-end p-[27px] sm:px-[20px] rounded-radius30 shadow-bs2 w-[100%]">
                  <Img
                    src="images/img_warning_gray_400.svg"
                    className="h-[50px] mt-[72px] w-[50px]"
                    alt="warning"
                  />
                  <div className="flex flex-col font-poppins items-center justify-start mt-[6px] md:w-[100%] sm:w-[100%] w-[101%]">
                    <Text
                      className="font-medium text-center text-gray_400 w-[100%]"
                      variant="body9"
                    >
                      Your connected network is unsupported.
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] mb-[28px] min-w-[186px] mt-[49px] text-[16px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder23"
                    size="6xl"
                    variant="GradientDeeppurple400Purple300"
                  >
                    Change network
                  </Button>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col md:gap-[40px] sm:gap-[40px] gap-[65px] items-center justify-end p-[27px] sm:px-[20px] rounded-radius30 shadow-bs2 w-[100%]">
                <div className="flex flex-col font-poppins gap-[6px] items-center justify-start mt-[70px] w-[100%]">
                  <Img
                    src="images/img_trash.svg"
                    className="h-[50px] w-[50px]"
                    alt="trash One"
                  />
                  <Text
                    className="font-medium text-center text-gray_400 w-[100%]"
                    variant="body9"
                  >
                    Your active liquidity positions will appear here{" "}
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-bold font-inter leading-[normal] mb-[14px] min-w-[159px] text-[16px] text-center text-white_A700 w-[auto]"
                  shape="RoundedBorder23"
                  size="6xl"
                  variant="GradientDeeppurple400Purple300"
                >
                  New position
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-1 flex-col font-poppins gap-[148px] md:gap-[40px] sm:gap-[40px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[215px] md:w-[100%] sm:w-[100%] w-[9%]">
            <div className="flex flex-col gap-[162px] md:gap-[40px] sm:gap-[40px] items-center justify-start w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[14px] rounded-radius20 shadow-bs8 w-[100%]">
                  <div className="h-[25px] md:h-[26px] sm:h-[26px] mt-[2px] relative md:w-[100%] sm:w-[100%] w-[97%]">
                    <Img
                      src="images/img_frame109.svg"
                      className="absolute h-[24px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                      alt="Frame109"
                    />
                    <Text
                      className="absolute bottom-[0] font-bold left-[0] text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      Confirm swap
                    </Text>
                  </div>
                  <div className="bg-gray_903 h-[140px] mt-[21px] rounded-radius50 w-[140px]"></div>
                  <Text
                    className="font-bold mt-[24px] text-gray_900 text-left w-[auto]"
                    variant="body7"
                  >
                    Waiting for confirmation
                  </Text>
                  <Text
                    className="font-bold mt-[7px] text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Swapping 675.00 USDT to 3.76 BNB{" "}
                  </Text>
                  <Text
                    className="font-bold mb-[6px] mt-[20px] text-gray_600 text-left w-[auto]"
                    variant="body17"
                  >
                    Confirm transaction in your wallet
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col justify-start p-[14px] rounded-radius20 shadow-bs8 w-[100%]">
                  <div className="md:h-[24px] sm:h-[24px] h-[25px] md:ml-[0] sm:ml-[0] ml-[12px] relative md:w-[100%] sm:w-[100%] w-[97%]">
                    <Img
                      src="images/img_frame109.svg"
                      className="absolute h-[24px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                      alt="Frame109 One"
                    />
                    <Text
                      className="absolute bottom-[0] font-bold left-[0] text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      Confirm swap
                    </Text>
                  </div>
                  <div className="bg-gray_903 flex flex-col h-[80px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[132px] mr-[120px] mt-[31px] p-[4px] w-[80px]">
                    <Img
                      src="images/img_checkmark_green_a700.svg"
                      className="h-[69px] w-[70px]"
                      alt="checkmark"
                    />
                  </div>
                  <Text
                    className="font-bold md:ml-[0] sm:ml-[0] ml-[12px] mt-[24px] text-gray_900 text-left w-[auto]"
                    variant="body7"
                  >
                    Transaction sent successfully
                  </Text>
                  <Text
                    className="font-bold md:ml-[0] sm:ml-[0] ml-[123px] mt-[16px] text-blue_A201 text-left w-[auto]"
                    variant="body14"
                  >
                    View in explorer
                  </Text>
                  <Text
                    className="font-bold mb-[6px] md:ml-[0] sm:ml-[0] ml-[91px] mt-[61px] text-gray_600 text-left w-[auto]"
                    variant="body14"
                  >
                    Add BNB to your wallet
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="bg-white_A700 flex flex-col items-center justify-start p-[14px] rounded-radius20 shadow-bs8 w-[100%]">
                <div className="md:h-[24px] sm:h-[24px] h-[25px] relative md:w-[100%] sm:w-[100%] w-[97%]">
                  <Img
                    src="images/img_frame109.svg"
                    className="absolute h-[24px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                    alt="Frame109 Two"
                  />
                  <Text
                    className="absolute bottom-[0] font-bold left-[0] text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Confirm swap
                  </Text>
                </div>
                <Img
                  src="images/img_warning_red_700.svg"
                  className="h-[100px] mt-[30px] w-[100px]"
                  alt="warning One"
                />
                <Text
                  className="font-bold mt-[5px] text-gray_900 text-left w-[auto]"
                  variant="body7"
                >
                  Transaction error
                </Text>
                <Text
                  className="font-bold mb-[84px] mt-[21px] text-blue_A201 text-left w-[auto]"
                  variant="body14"
                >
                  View in explorer
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-1 flex-col font-poppins items-center justify-start md:ml-[0] sm:ml-[0] ml-[97px] md:mt-[0] sm:mt-[0] mt-[91px] md:w-[100%] sm:w-[100%] w-[7%]">
            <List
              className="flex-col gap-[30px] grid items-center w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]">
                <div className="bg-gradient4  p-[1px] rounded-radius15 w-[100%] ">
                  <div className="bg-white_A700 border-solid flex flex-col gap-[21px] items-start justify-end p-[20px] rounded-radius15">
                    <div className="flex flex-row gap-[10px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] mr-[auto] mt-[10px] w-[auto]">
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
                    <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] md:w-[100%] sm:w-[100%] w-[86%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[17px] items-center justify-start md:w-[100%] sm:w-[100%] w-[88%]">
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            Comission rate:
                          </Text>
                          <Text
                            className="bg-blue_A200_33 font-medium justify-center p-[4px] rounded-radius3 text-blue_A201 text-left w-[auto]"
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
                          shape="CircleBorder19"
                          size="4xl"
                          variant="GradientBlueA200DeeppurpleA700"
                        >
                          Collect fees
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]">
                <div className="bg-gradient4  p-[1px] rounded-radius15 w-[100%] ">
                  <div className="bg-white_A700 border-solid flex flex-col gap-[21px] items-start justify-end p-[20px] rounded-radius15">
                    <div className="flex flex-row gap-[10px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] mr-[auto] mt-[10px] w-[auto]">
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
                    <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] md:w-[100%] sm:w-[100%] w-[86%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[17px] items-center justify-start md:w-[100%] sm:w-[100%] w-[88%]">
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            Comission rate:
                          </Text>
                          <Text
                            className="bg-blue_A200_33 font-medium justify-center p-[4px] rounded-radius3 text-blue_A201 text-left w-[auto]"
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
                          shape="CircleBorder19"
                          size="4xl"
                          variant="GradientBlueA200DeeppurpleA700"
                        >
                          Collect fees
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]">
                <div className="bg-gradient4  p-[1px] rounded-radius15 w-[100%] ">
                  <div className="bg-white_A700 border-solid flex flex-col gap-[21px] items-start justify-end p-[20px] rounded-radius15">
                    <div className="flex flex-row gap-[10px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] mr-[auto] mt-[10px] w-[auto]">
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
                    <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] md:w-[100%] sm:w-[100%] w-[86%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[17px] items-center justify-start md:w-[100%] sm:w-[100%] w-[88%]">
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            Comission rate:
                          </Text>
                          <Text
                            className="bg-blue_A200_33 font-medium justify-center p-[4px] rounded-radius3 text-blue_A201 text-left w-[auto]"
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
                          shape="CircleBorder19"
                          size="4xl"
                          variant="GradientBlueA200DeeppurpleA700"
                        >
                          Collect fees
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex sm:flex-1 flex-col font-poppins gap-[50px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[72px] md:mt-[0] sm:mt-[0] mt-[48px] sm:w-[100%] w-[auto]">
            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[85%]">
              <div className="bg-white_A700 flex flex-col gap-[11px] items-center justify-start p-[14px] rounded-radius20 shadow-bs8 w-[100%]">
                <div className="flex flex-row items-start justify-between md:w-[100%] sm:w-[100%] w-[96%]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Remove liquidity
                  </Text>
                  <Img
                    src="images/img_close_gray_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="close"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mb-[8px] md:w-[100%] sm:w-[100%] w-[93%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[12px] items-center justify-center w-[auto]">
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
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          BTC - USDT
                        </Text>
                      </div>
                      <div className="bg-indigo_50 flex flex-col items-center justify-start mt-[6px] p-[10px] rounded-radius10 w-[100%]">
                        <div className="flex flex-col items-start justify-start my-[7px] md:w-[100%] sm:w-[100%] w-[96%]">
                          <Text
                            className="font-medium text-gray_601 text-left w-[auto]"
                            variant="body17"
                          >
                            Amount
                          </Text>
                          <div className="flex flex-row items-end justify-start mt-[3px] w-[100%]">
                            <Text
                              className="font-medium mb-[2px] mt-[5px] text-gray_600 text-left w-[auto]"
                              variant="body5"
                            >
                              0%
                            </Text>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] ml-[25px] text-[16px] text-blue_A201 text-center w-[49px]"
                              shape="RoundedBorder5"
                              size="md"
                              variant="FillBlueA2004c"
                            >
                              25%
                            </Button>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] ml-[5px] text-[16px] text-blue_A201 text-center w-[49px]"
                              shape="RoundedBorder5"
                              size="md"
                              variant="FillBlueA2004c"
                            >
                              50%
                            </Button>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] ml-[5px] text-[16px] text-blue_A201 text-center w-[49px]"
                              shape="RoundedBorder5"
                              size="md"
                              variant="FillBlueA2004c"
                            >
                              75%
                            </Button>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] ml-[5px] text-[16px] text-blue_A201 text-center w-[49px]"
                              shape="RoundedBorder5"
                              size="md"
                              variant="FillBlueA2004c"
                            >
                              MAX
                            </Button>
                          </div>
                          <div className="flex h-[25px] md:h-[36px] sm:h-[36px] mt-[11px] relative w-[100%]">
                            <div className="bg-blue_A201 h-[25px] my-[auto] rounded-radius12 w-[24px]"></div>
                            <Line className="bg-blue_A201 h-[4px] mb-[7px] ml-[-2px] mt-[auto] w-[92%] z-[1]" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-orange_50 border-2 border-amber_500_b2 border-solid flex flex-col items-center justify-start mt-[19px] pl-[11px] py-[11px] rounded-radius10 w-[100%]">
                        <div className="flex flex-col items-start justify-start my-[9px] w-[100%]">
                          <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[97%]">
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
                          <div className="flex flex-row items-center justify-between mt-[5px] md:w-[100%] sm:w-[100%] w-[96%]">
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
                          <div className="flex flex-row items-center justify-between mt-[15px] md:w-[100%] sm:w-[100%] w-[97%]">
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
                          <div className="flex flex-row items-start justify-between mt-[3px] pr-[2px] py-[2px] w-[100%]">
                            <Text
                              className="font-medium text-gray_903 text-left w-[auto]"
                              variant="body17"
                            >
                              ETH Fees earned
                            </Text>
                            <Text
                              className="font-bold mr-[10px] text-gray_903 text-left w-[auto]"
                              variant="body17"
                            >
                              0.021 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[14px] w-[100%]">
                        <div className="flex flex-col items-center justify-start mt-[3px] w-[auto]">
                          <Text
                            className="font-medium text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            Collect as WETH{" "}
                          </Text>
                        </div>
                        <Switch value={true} className="w-[auto]" />
                      </div>
                      <Input
                        className="font-medium leading-[normal] p-[0] text-[16px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                        wrapClassName="md:ml-[0] md:w-[100%] ml-[53px] mt-[26px] sm:ml-[0] sm:w-[100%] w-[203px]"
                        name="Frame233"
                        placeholder="Enter a percent"
                        size="lg"
                      ></Input>
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[133px] mt-[10px] text-gray_600 text-left w-[auto]"
                        variant="body17"
                      >
                        Cancel
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:h-[495px] sm:h-[495px] h-[503px] relative w-[100%]">
              <div className="absolute bg-white_A700 flex flex-col gap-[11px] h-[max-content] inset-y-[0] items-center justify-start left-[0] my-[auto] p-[14px] rounded-radius20 shadow-bs8 w-[85%]">
                <div className="flex flex-row items-start justify-between md:w-[100%] sm:w-[100%] w-[96%]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Remove liquidity
                  </Text>
                  <Img
                    src="images/img_close_gray_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="close One"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mb-[8px] md:w-[100%] sm:w-[100%] w-[93%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
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
                      <div className="bg-indigo_50 flex flex-col items-center justify-start mt-[6px] p-[10px] rounded-radius10 w-[100%]">
                        <div className="flex flex-col items-start justify-start my-[7px] md:w-[100%] sm:w-[100%] w-[96%]">
                          <Text
                            className="font-medium text-gray_601 text-left w-[auto]"
                            variant="body17"
                          >
                            Amount
                          </Text>
                          <div className="flex flex-row items-end justify-between mt-[3px] w-[100%]">
                            <Text
                              className="font-medium mb-[2px] mt-[5px] text-gray_900 text-left w-[auto]"
                              variant="body5"
                            >
                              50%
                            </Text>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] text-[16px] text-blue_A201 text-center w-[49px]"
                              shape="RoundedBorder5"
                              size="md"
                              variant="FillBlueA2004c"
                            >
                              25%
                            </Button>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] text-[16px] text-blue_A201 text-center w-[49px]"
                              shape="RoundedBorder5"
                              size="md"
                              variant="FillBlueA2007f"
                            >
                              50%
                            </Button>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] text-[16px] text-blue_A201 text-center w-[49px]"
                              shape="RoundedBorder5"
                              size="md"
                              variant="FillBlueA2004c"
                            >
                              75%
                            </Button>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] text-[16px] text-blue_A201 text-center w-[49px]"
                              shape="RoundedBorder5"
                              size="md"
                              variant="FillBlueA2004c"
                            >
                              MAX
                            </Button>
                          </div>
                          <div className="h-[25px] md:h-[36px] sm:h-[36px] md:ml-[0] sm:ml-[0] ml-[22px] mt-[11px] relative sm:w-[100%] w-[92%]">
                            <div className="absolute bg-blue_A201 h-[25px] inset-[0] justify-center m-[auto] rounded-radius12 w-[24px]"></div>
                            <Line className="absolute bg-blue_A201 bottom-[28%] h-[4px] inset-x-[0] mx-[auto] w-[100%]" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[154px] w-[100%]">
                        <div className="flex flex-col items-center justify-start mt-[3px] w-[auto]">
                          <Text
                            className="font-medium text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            Collect as WETH{" "}
                          </Text>
                        </div>
                        <Switch value={true} className="w-[auto]" />
                      </div>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[146px] md:ml-[0] sm:ml-[0] ml-[81px] mt-[26px] text-[16px] text-center text-white_A700 w-[auto]"
                        shape="CircleBorder19"
                        size="4xl"
                        variant="FillBlueA201"
                      >
                        Remove
                      </Button>
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[133px] mt-[10px] text-gray_600 text-left w-[auto]"
                        variant="body17"
                      >
                        Cancel
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-orange_50 border-2 border-amber_500_b2 border-solid bottom-[29%] md:h-[118px] sm:h-[118px] h-[121px] right-[0] rounded-radius10 sm:w-[100%] w-[94%]">
                <div className="absolute bg-orange_50 border-2 border-amber_500_b2 border-solid flex flex-col h-[max-content] inset-y-[0] items-center justify-start left-[0] my-[auto] p-[11px] rounded-radius10 w-[78%]">
                  <div className="flex flex-col items-center justify-start mb-[30px] mt-[10px] w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
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
                    <div className="flex flex-row items-center justify-between mt-[5px] w-[100%]">
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
                    <div className="flex flex-row items-center justify-between mt-[15px] w-[100%]">
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
                  </div>
                </div>
                <div className="absolute bottom-[17%] flex flex-row inset-x-[0] items-start justify-between mx-[auto] pr-[2px] py-[2px] w-[98%]">
                  <Text
                    className="font-medium text-gray_903 text-left w-[auto]"
                    variant="body17"
                  >
                    ETH Fees earned
                  </Text>
                  <Text
                    className="font-bold mr-[101px] text-gray_903 text-left w-[auto]"
                    variant="body17"
                  >
                    0.021 ETH
                  </Text>
                </div>
              </div>
            </div>
            <div className="md:h-[162px] sm:h-[162px] h-[348px] relative w-[100%]">
              <div className="absolute bg-white_A700 flex flex-col gap-[223px] md:gap-[40px] sm:gap-[40px] h-[max-content] inset-y-[0] items-center justify-start left-[0] my-[auto] p-[14px] rounded-radius20 shadow-bs8 w-[85%]">
                <div className="flex flex-row items-start justify-between md:w-[100%] sm:w-[100%] w-[96%]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Remove liquidity
                  </Text>
                  <Img
                    src="images/img_close_gray_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="close Two"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mb-[8px] md:w-[100%] sm:w-[100%] w-[44%]">
                  <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[146px] text-[16px] text-center text-white_A700 w-[auto]"
                      shape="CircleBorder19"
                      size="4xl"
                      variant="FillBlueA201"
                    >
                      Remove
                    </Button>
                    <Text
                      className="font-medium text-gray_600 text-left w-[auto]"
                      variant="body17"
                    >
                      Cancel
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bg-orange_50 border-2 border-amber_500_b2 border-solid md:h-[118px] sm:h-[118px] h-[121px] right-[0] rounded-radius10 top-[26%] sm:w-[100%] w-[94%]">
                <div className="absolute bg-orange_50 border-2 border-amber_500_b2 border-solid flex flex-col h-[max-content] inset-y-[0] items-center justify-start left-[0] my-[auto] p-[11px] rounded-radius10 w-[78%]">
                  <div className="flex flex-col items-center justify-start mb-[30px] mt-[10px] w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
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
                    <div className="flex flex-row items-center justify-between mt-[5px] w-[100%]">
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
                    <div className="flex flex-row items-center justify-between mt-[15px] w-[100%]">
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
                  </div>
                </div>
                <div className="absolute bottom-[17%] flex flex-row inset-x-[0] items-start justify-between mx-[auto] pr-[2px] py-[2px] w-[98%]">
                  <Text
                    className="font-medium text-gray_903 text-left w-[auto]"
                    variant="body17"
                  >
                    ETH Fees earned
                  </Text>
                  <Text
                    className="font-bold mr-[101px] text-gray_903 text-left w-[auto]"
                    variant="body17"
                  >
                    0.021 ETH
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-poppins h-[6789px] md:h-[auto] sm:h-[auto] items-start justify-start md:ml-[0] sm:ml-[0] ml-[80px] md:mt-[0] sm:mt-[0] mt-[41px] w-[auto]">
            <List
              className="flex-col gap-[50px] grid items-center w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-[20px] items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[10px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[14px] items-center justify-start mb-[10px] mt-[4px] md:w-[100%] sm:w-[100%] w-[98%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <Button
                        className="flex h-[32px] items-center justify-center w-[32px]"
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
                      <Text
                        className="font-medium mt-[9px] text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Add liquidity
                      </Text>
                      <Img
                        src="images/img_settings_white_a700.svg"
                        className="h-[32px] rounded-radius50 w-[32px]"
                        alt="settings"
                      />
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-center md:w-[100%] sm:w-[100%] w-[56%]">
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
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-center p-[16px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="h-[20px] md:h-[26px] sm:h-[26px] mt-[6px] relative md:w-[100%] sm:w-[100%] w-[40%]">
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
                  <div className="bg-indigo_50 flex flex-col items-center justify-start mt-[10px] p-[9px] rounded-radius20 w-[100%]">
                    <div className="flex flex-row gap-[36px] items-end justify-between mb-[4px] w-[100%]">
                      <div className="flex flex-col gap-[11px] justify-start w-[auto]">
                        <div className="bg-white_A700 flex flex-col items-start justify-start px-[6px] py-[3px] rounded-radius18 shadow-bs w-[auto]">
                          <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                            <Img
                              src="images/img_bluetooth.svg"
                              className="h-[26px] w-[26px]"
                              alt="bluetooth Five"
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
                  <div className="bg-indigo_50 flex flex-col items-center justify-start mt-[10px] p-[9px] rounded-radius20 w-[100%]">
                    <div className="flex flex-col justify-start mb-[4px] w-[100%]">
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
                      <div className="flex flex-row items-end justify-between ml-[auto] mt-[4px] md:w-[100%] sm:w-[100%] w-[96%]">
                        <Text
                          className="font-medium mt-[6px] text-gray_600 text-left w-[auto]"
                          variant="body5"
                        >
                          0.00
                        </Text>
                        <div className="flex flex-col gap-[5px] items-end justify-start w-[auto]">
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
                  </div>
                  <Text
                    className="font-medium mt-[26px] text-gray_900_7e text-left w-[auto]"
                    variant="body12"
                  >
                    Swapping fee
                  </Text>
                  <div className="bg-indigo_50_7e flex flex-row items-center justify-between mt-[12px] p-[9px] rounded-radius15 w-[100%]">
                    <div className="flex flex-col gap-[5px] items-start justify-start mb-[4px] ml-[6px] mt-[9px] w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body9"
                      >
                        0,3 fee tier
                      </Text>
                      <Text
                        className="bg-bluegray_102 justify-center px-[6px] rounded-radius5 text-gray_900 text-left w-[auto]"
                        variant="body22"
                      >
                        78% select
                      </Text>
                    </div>
                    <Button
                      className="flex items-center justify-center min-w-[53px] my-[16px] text-center w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_edit.svg"
                          className="mr-[5px] text-center"
                          alt="edit"
                        />
                      }
                      shape="RoundedBorder5"
                      size="lg"
                      variant="FillBlueA2004c"
                    >
                      <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[12px] text-blue_A201 text-left">
                        Edit
                      </div>
                    </Button>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mb-[14px] md:ml-[0] sm:ml-[0] ml-[10px] mt-[30px] text-[16px] text-center text-gray_400 w-[229px]"
                    shape="RoundedBorder13"
                    size="7xl"
                    variant="FillGray9007e1"
                  >
                    Invalid pair
                  </Button>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[10px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[10px] items-center justify-start mb-[5px] md:w-[100%] sm:w-[100%] w-[98%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <div className="bg-gray_500_4c flex flex-col h-[24px] md:h-[auto] sm:h-[auto] items-center justify-center p-[8px] rounded-radius12 w-[32px]">
                        <Img
                          src="images/img_arrowleft.svg"
                          className="h-[15px] w-[15px]"
                          alt="arrowleft One"
                        />
                      </div>
                      <Text
                        className="font-medium mt-[8px] text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Add liquidity
                      </Text>
                      <Img
                        src="images/img_settings_white_a700.svg"
                        className="h-[24px] rounded-radius50 w-[32px]"
                        alt="settings One"
                      />
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-center md:w-[100%] sm:w-[100%] w-[56%]">
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
                  </div>
                </div>
                <div className="flex md:h-[493px] sm:h-[493px] h-[521px] justify-end pt-[28px] relative w-[100%]">
                  <div className="h-[493px] md:h-[auto] sm:h-[auto] mt-[auto] mx-[auto] w-[100%]">
                    <div className="bg-white_A700 h-[493px] m-[auto] rounded-radius20 shadow-bs2 w-[100%]"></div>
                    <div className="absolute bottom-[6%] flex flex-col gap-[226px] md:gap-[40px] sm:gap-[40px] inset-x-[0] items-center justify-start mx-[auto] w-[82%]">
                      <div className="bg-gray_900_7e1 flex flex-col h-[50px] md:h-[auto] sm:h-[auto] items-center justify-center px-[163px] sm:px-[20px] md:px-[40px] py-[25px] rounded-radius15 w-[229px]">
                        <Text
                          className="font-medium text-gray_400 text-left w-[auto]"
                          variant="body12"
                        >
                          Invalid pair
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] text-[16px] text-center text-gray_400 w-[229px]"
                        shape="RoundedBorder13"
                        size="7xl"
                        variant="FillGray903"
                      >
                        Insufficient balance
                      </Button>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[12px] inset-x-[0] items-center justify-start mx-[auto] top-[4%] w-[89%]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <div className="h-[20px] md:h-[auto] sm:h-[auto] relative md:w-[100%] sm:w-[100%] w-[40%]">
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
                      <div className="bg-indigo_50 flex flex-col items-center justify-start mt-[10px] p-[9px] rounded-radius20 w-[100%]">
                        <div className="flex flex-row gap-[36px] items-end justify-between mb-[4px] w-[100%]">
                          <div className="flex flex-col gap-[11px] justify-start w-[auto]">
                            <div className="bg-white_A700 flex flex-col items-start justify-start px-[6px] py-[3px] rounded-radius18 shadow-bs w-[auto]">
                              <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_bluetooth.svg"
                                  className="h-[26px] w-[26px]"
                                  alt="bluetooth Six"
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
                                  alt="arrowup One"
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
                      <div className="bg-indigo_50 flex flex-col items-center justify-start mt-[10px] p-[9px] rounded-radius20 w-[100%]">
                        <div className="flex flex-row gap-[15px] items-end justify-between mb-[4px] w-[100%]">
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
                                    alt="floatingicon Five"
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
                        className="font-medium mt-[26px] text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Swapping fee
                      </Text>
                    </div>
                    <div className="bg-indigo_50 flex flex-col items-start justify-end p-[13px] rounded-radius15 w-[100%]">
                      <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[5px] md:w-[100%] sm:w-[100%] w-[44%]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body9"
                        >
                          0,3 fee tier
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
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[20px] items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[10px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[14px] items-center justify-start mb-[10px] mt-[4px] md:w-[100%] sm:w-[100%] w-[98%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <Button
                        className="flex h-[32px] items-center justify-center w-[32px]"
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
                      <Text
                        className="font-medium mt-[9px] text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Add liquidity
                      </Text>
                      <Img
                        src="images/img_settings_white_a700.svg"
                        className="h-[32px] rounded-radius50 w-[32px]"
                        alt="settings Two"
                      />
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-center md:w-[100%] sm:w-[100%] w-[56%]">
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
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-center p-[16px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="h-[20px] md:h-[26px] sm:h-[26px] mt-[6px] relative md:w-[100%] sm:w-[100%] w-[40%]">
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
                  <div className="bg-indigo_50 flex flex-col items-center justify-start mt-[10px] p-[9px] rounded-radius20 w-[100%]">
                    <div className="flex flex-row gap-[36px] items-end justify-between mb-[4px] w-[100%]">
                      <div className="flex flex-col gap-[11px] justify-start w-[auto]">
                        <div className="bg-white_A700 flex flex-col items-start justify-start px-[6px] py-[3px] rounded-radius18 shadow-bs w-[auto]">
                          <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                            <Img
                              src="images/img_bluetooth.svg"
                              className="h-[26px] w-[26px]"
                              alt="bluetooth Seven"
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
                  <div className="bg-indigo_50 flex flex-col items-center justify-start mt-[10px] p-[9px] rounded-radius20 w-[100%]">
                    <div className="flex flex-row gap-[15px] items-end justify-between mb-[4px] w-[100%]">
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
                                alt="floatingicon Six"
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
                              alt="arrowup One One"
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
                    className="font-medium mt-[26px] text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Swapping fee
                  </Text>
                  <div className="bg-indigo_50 flex flex-col items-start justify-end mt-[12px] p-[13px] rounded-radius15 w-[100%]">
                    <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[5px] md:w-[100%] sm:w-[100%] w-[44%]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body9"
                      >
                        0,3 fee tier
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
                    className="cursor-pointer font-medium leading-[normal] mb-[14px] md:ml-[0] sm:ml-[0] ml-[10px] mt-[30px] text-[16px] text-center text-gray_400 w-[229px]"
                    shape="RoundedBorder13"
                    size="7xl"
                    variant="FillGray903"
                  >
                    Insufficient balance
                  </Button>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[20px] items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[10px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[14px] items-center justify-start mb-[10px] mt-[4px] md:w-[100%] sm:w-[100%] w-[98%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <Button
                        className="flex h-[32px] items-center justify-center w-[32px]"
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
                        className="font-medium mt-[9px] text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Add liquidity
                      </Text>
                      <Img
                        src="images/img_settings_white_a700.svg"
                        className="h-[32px] rounded-radius50 w-[32px]"
                        alt="settings Three"
                      />
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-center md:w-[100%] sm:w-[100%] w-[56%]">
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
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-center p-[16px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="h-[20px] md:h-[26px] sm:h-[26px] mt-[6px] relative md:w-[100%] sm:w-[100%] w-[40%]">
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
                  <div className="bg-indigo_50 flex flex-col items-center justify-start mt-[10px] p-[9px] rounded-radius20 w-[100%]">
                    <div className="flex flex-row gap-[36px] items-end justify-between mb-[4px] w-[100%]">
                      <div className="flex flex-col gap-[11px] justify-start w-[auto]">
                        <div className="bg-white_A700 flex flex-col items-start justify-start px-[6px] py-[3px] rounded-radius18 shadow-bs w-[auto]">
                          <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                            <Img
                              src="images/img_bluetooth.svg"
                              className="h-[26px] w-[26px]"
                              alt="bluetooth Eight"
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
                              alt="arrowup Three"
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
                  <div className="bg-indigo_50 flex flex-col items-center justify-start mt-[10px] p-[9px] rounded-radius20 w-[100%]">
                    <div className="flex flex-row gap-[15px] items-end justify-between mb-[4px] w-[100%]">
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
                                alt="floatingicon Seven"
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
                              alt="arrowup One Two"
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
                    className="font-medium mt-[24px] text-gray_900 text-left w-[auto]"
                    variant="body9"
                  >
                    Your fee tier
                  </Text>
                  <div className="bg-indigo_50 flex flex-col items-start justify-end mt-[14px] p-[13px] rounded-radius15 w-[100%]">
                    <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[5px] md:w-[100%] sm:w-[100%] w-[44%]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body9"
                      >
                        0,3 fee tier
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
                    className="cursor-pointer font-medium leading-[normal] md:ml-[0] sm:ml-[0] ml-[10px] mt-[30px] text-[16px] text-center text-white_A700 w-[229px]"
                    shape="RoundedBorder13"
                    size="7xl"
                    variant="GradientDeeppurple400Purple300"
                  >
                    Approve
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mb-[14px] md:ml-[0] sm:ml-[0] ml-[10px] mt-[10px] text-[16px] text-center text-gray_400 w-[229px]"
                    shape="RoundedBorder13"
                    size="7xl"
                    variant="FillGray903"
                  >
                    Preview
                  </Button>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[20px] items-center justify-start pb-[762px] w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[10px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[14px] items-center justify-start mb-[10px] mt-[4px] md:w-[100%] sm:w-[100%] w-[98%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <Button
                        className="flex h-[32px] items-center justify-center w-[32px]"
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
                        className="font-medium mt-[9px] text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Add liquidity
                      </Text>
                      <Img
                        src="images/img_settings_white_a700.svg"
                        className="h-[32px] rounded-radius50 w-[32px]"
                        alt="settings Four"
                      />
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-center md:w-[100%] sm:w-[100%] w-[56%]">
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
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-center p-[16px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="h-[20px] md:h-[26px] sm:h-[26px] mt-[6px] relative md:w-[100%] sm:w-[100%] w-[40%]">
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
                  <div className="bg-indigo_50 flex flex-col items-center justify-start mt-[10px] p-[9px] rounded-radius20 w-[100%]">
                    <div className="flex flex-row gap-[36px] items-end justify-between mb-[4px] w-[100%]">
                      <div className="flex flex-col gap-[11px] justify-start w-[auto]">
                        <div className="bg-white_A700 flex flex-col items-start justify-start px-[6px] py-[3px] rounded-radius18 shadow-bs w-[auto]">
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
                              alt="arrowup Four"
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
                  <div className="bg-indigo_50 flex flex-col items-center justify-start mt-[10px] p-[9px] rounded-radius20 w-[100%]">
                    <div className="flex flex-row gap-[15px] items-end justify-between mb-[4px] w-[100%]">
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
                                alt="floatingicon Eight"
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
                              alt="arrowup One Three"
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
                  <Text
                    className="font-medium mt-[24px] text-gray_900 text-left w-[auto]"
                    variant="body9"
                  >
                    Your fee tier
                  </Text>
                  <div className="bg-indigo_50 flex flex-col items-start justify-end mt-[14px] p-[13px] rounded-radius15 w-[100%]">
                    <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[5px] md:w-[100%] sm:w-[100%] w-[44%]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body9"
                      >
                        0,3 fee tier
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
                    className="cursor-pointer font-medium leading-[normal] md:ml-[0] sm:ml-[0] ml-[10px] mt-[30px] text-[16px] text-center text-gray_400 w-[229px]"
                    shape="RoundedBorder13"
                    size="7xl"
                    variant="FillGray903"
                  >
                    Approve
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mb-[14px] md:ml-[0] sm:ml-[0] ml-[10px] mt-[10px] text-[16px] text-center text-white_A700 w-[229px]"
                    shape="RoundedBorder13"
                    size="7xl"
                    variant="GradientDeeppurple400Purple300"
                  >
                    Preview
                  </Button>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col font-poppins gap-[50px] h-[1814px] md:h-[auto] sm:h-[auto] items-start justify-start md:ml-[0] sm:ml-[0] ml-[225px] md:mt-[0] sm:mt-[0] mt-[52px] w-[auto]">
            <div className="md:h-[633px] sm:h-[633px] h-[675px] pb-[42px] relative w-[100%]">
              <div className="bg-white_A700 h-[633px] mx-[auto] rounded-radius20 shadow-bs8 w-[100%]"></div>
              <div className="absolute flex flex-col gap-[11px] items-start justify-start right-[0] top-[2%] w-[93%]">
                <div className="flex flex-row items-end justify-between md:w-[100%] sm:w-[100%] w-[95%]">
                  <Text
                    className="font-bold mt-[5px] text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Add liquidity
                  </Text>
                  <Img
                    src="images/img_close_gray_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="close Three"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[12px] h-[38px] md:h-[auto] sm:h-[auto] items-center justify-center md:ml-[0] sm:ml-[0] ml-[4px] w-[200px]">
                        <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                          <Img
                            src="images/img_bluetooth.svg"
                            className="h-[26px] my-[auto] w-[26px]"
                            alt="bluetooth Ten"
                          />
                          <Img
                            src="images/img_floatingicon.svg"
                            className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                            alt="floatingicon Nine"
                          />
                        </div>
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          BTC - USDT
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between md:ml-[0] sm:ml-[0] ml-[2px] mt-[20px] sm:pr-[20px] pr-[27px] w-[100%]">
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
                      <div className="flex flex-row items-center justify-between md:ml-[0] sm:ml-[0] ml-[2px] mt-[10px] sm:pr-[20px] pr-[27px] w-[100%]">
                        <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_floatingicon.svg"
                            className="h-[26px] w-[26px]"
                            alt="floatingicon Ten"
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
                      <div className="flex flex-row items-end justify-between mt-[20px] md:w-[100%] sm:w-[100%] w-[92%]">
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
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[80px] mt-[35px] text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Add more liquidity
                      </Text>
                      <div className="h-[200px] md:h-[65px] sm:h-[65px] mt-[15px] relative md:w-[100%] sm:w-[100%] w-[92%]">
                        <div className="flex flex-col h-[100%] items-center justify-start m-[auto] w-[100%]">
                          <List
                            className="flex-col gap-[10px] grid items-center w-[100%]"
                            orientation="vertical"
                          >
                            <div className="bg-indigo_50 flex flex-1 flex-col items-center justify-start my-[0] p-[10px] rounded-radius20 w-[100%]">
                              <div className="flex flex-col gap-[12px] items-start justify-start mb-[2px] w-[100%]">
                                <div className="bg-white_A700 flex flex-col items-start justify-start px-[6px] py-[3px] rounded-radius18 shadow-bs w-[100px]">
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
                                      alt="arrowup Five"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-row items-end justify-between w-[100%]">
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
                              <div className="flex flex-col gap-[10px] items-start justify-start mb-[2px] w-[100%]">
                                <div className="bg-white_A700 flex flex-col items-start justify-start px-[6px] py-[3px] rounded-radius19 shadow-bs w-[118px]">
                                  <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                    <div
                                      className="bg-cover bg-no-repeat flex flex-col h-[32px] items-start justify-start w-[32px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group155.svg')",
                                      }}
                                    >
                                      <Img
                                        src="images/img_floatingicon.svg"
                                        className="h-[26px] my-[2px] w-[26px]"
                                        alt="floatingicon Eleven"
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
                                      alt="arrowup Six"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-row items-end justify-between w-[100%]">
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
                        wrapClassName="md:h-[auto] md:w-[100%] mt-[30px] sm:h-[auto] sm:w-[100%] w-[306px]"
                        name="Frame103"
                        placeholder="Enter an amount"
                        shape="RoundedBorder15"
                        size="2xl"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:h-[633px] sm:h-[633px] h-[675px] pb-[42px] relative w-[100%]">
              <div className="bg-white_A700 h-[633px] mx-[auto] rounded-radius20 shadow-bs8 w-[100%]"></div>
              <div className="absolute flex flex-col gap-[11px] items-start justify-start right-[0] top-[2%] w-[93%]">
                <div className="flex flex-row items-end justify-between md:w-[100%] sm:w-[100%] w-[95%]">
                  <Text
                    className="font-bold mt-[5px] text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Add liquidity
                  </Text>
                  <Img
                    src="images/img_close_gray_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="close Four"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[12px] h-[38px] md:h-[auto] sm:h-[auto] items-center justify-center md:ml-[0] sm:ml-[0] ml-[4px] w-[200px]">
                        <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                          <Img
                            src="images/img_bluetooth.svg"
                            className="h-[26px] my-[auto] w-[26px]"
                            alt="bluetooth Thirteen"
                          />
                          <Img
                            src="images/img_floatingicon.svg"
                            className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                            alt="floatingicon Twelve"
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
                        className="flex-col gap-[10px] grid items-center md:ml-[0] sm:ml-[0] ml-[2px] mt-[20px] w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row items-center justify-between sm:pr-[20px] pr-[27px] w-[100%]">
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
                        <div className="flex flex-1 flex-row items-center justify-between sm:pr-[20px] pr-[27px] w-[100%]">
                          <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                            <Img
                              src="images/img_floatingicon.svg"
                              className="h-[26px] w-[26px]"
                              alt="floatingicon Thirteen"
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
                      <div className="flex flex-row items-end justify-between mt-[20px] md:w-[100%] sm:w-[100%] w-[92%]">
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
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[80px] mt-[35px] text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Add more liquidity
                      </Text>
                      <div className="h-[200px] md:h-[65px] sm:h-[65px] mt-[15px] relative md:w-[100%] sm:w-[100%] w-[92%]">
                        <div className="flex flex-col h-[100%] items-center justify-start m-[auto] w-[100%]">
                          <List
                            className="flex-col gap-[10px] grid items-center w-[100%]"
                            orientation="vertical"
                          >
                            <div className="bg-indigo_50 flex flex-1 flex-col items-center justify-start my-[0] p-[10px] rounded-radius20 w-[100%]">
                              <div className="flex flex-col gap-[12px] items-start justify-start mb-[2px] w-[100%]">
                                <div className="bg-white_A700 flex flex-col items-start justify-start px-[6px] py-[3px] rounded-radius18 shadow-bs w-[100px]">
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
                                      alt="arrowup Seven"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-row items-end justify-between w-[100%]">
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
                              <div className="flex flex-col gap-[10px] items-start justify-start mb-[2px] w-[100%]">
                                <div className="bg-white_A700 flex flex-col items-start justify-start px-[6px] py-[3px] rounded-radius19 shadow-bs w-[118px]">
                                  <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                    <div
                                      className="bg-cover bg-no-repeat flex flex-col h-[32px] items-start justify-start w-[32px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group155.svg')",
                                      }}
                                    >
                                      <Img
                                        src="images/img_floatingicon.svg"
                                        className="h-[26px] my-[2px] w-[26px]"
                                        alt="floatingicon Fourteen"
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
                                <div className="flex flex-row items-end justify-between w-[100%]">
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
                        className="cursor-pointer font-bold leading-[normal] mt-[30px] text-[16px] text-center text-white_A700 w-[306px]"
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
            </div>
            <div className="bg-white_A700 flex flex-col gap-[11px] items-start justify-start rounded-radius20 shadow-bs8 w-[100%]">
              <div className="flex flex-row items-end justify-between md:ml-[0] sm:ml-[0] ml-[25px] mt-[14px] md:w-[100%] sm:w-[100%] w-[88%]">
                <Text
                  className="font-bold mt-[5px] text-gray_900 text-left w-[auto]"
                  variant="body12"
                >
                  Add liquidity
                </Text>
                <Img
                  src="images/img_close_gray_900.svg"
                  className="h-[24px] w-[24px]"
                  alt="close Five"
                />
              </div>
              <div className="flex flex-col items-center justify-start mb-[19px] md:ml-[0] sm:ml-[0] ml-[25px] md:w-[100%] sm:w-[100%] w-[93%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex flex-row gap-[12px] h-[38px] md:h-[auto] sm:h-[auto] items-center justify-center md:ml-[0] sm:ml-[0] ml-[4px] w-[200px]">
                      <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                        <Img
                          src="images/img_bluetooth.svg"
                          className="h-[26px] my-[auto] w-[26px]"
                          alt="bluetooth Sixteen"
                        />
                        <Img
                          src="images/img_floatingicon.svg"
                          className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                          alt="floatingicon Fifteen"
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
                      className="flex-col gap-[10px] grid items-center md:ml-[0] sm:ml-[0] ml-[2px] mt-[20px] w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row items-center justify-between sm:pr-[20px] pr-[27px] w-[100%]">
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
                      <div className="flex flex-1 flex-row items-center justify-between sm:pr-[20px] pr-[27px] w-[100%]">
                        <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_floatingicon.svg"
                            className="h-[26px] w-[26px]"
                            alt="floatingicon Sixteen"
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
                    <div className="flex flex-row items-end justify-between mt-[20px] md:w-[100%] sm:w-[100%] w-[92%]">
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
                    <Button
                      className="cursor-pointer font-bold leading-[normal] mt-[30px] text-[16px] text-center text-white_A700 w-[306px]"
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
          </div>
          <div className="flex md:flex-1 sm:flex-1 flex-col font-poppins items-center justify-start md:ml-[0] sm:ml-[0] ml-[222px] md:mt-[0] sm:mt-[0] mt-[20px] md:w-[100%] sm:w-[100%] w-[7%]">
            <List
              className="flex-col gap-[100px] md:gap-[40px] sm:gap-[40px] grid items-center w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-[20px] items-center justify-start my-[0] w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                    <div className="bg-white_A700 flex flex-col gap-[13px] items-center justify-start p-[9px] rounded-radius20 shadow-bs2 w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start mt-[6px] md:w-[100%] sm:w-[100%] w-[95%]">
                        <div className="flex flex-row gap-[20px] items-start justify-between w-[82%]">
                          <Button
                            className="flex h-[32px] items-center justify-center w-[32px]"
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
                          <div className="flex flex-row gap-[12px] items-center justify-center w-[auto]">
                            <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                              <Img
                                src="images/img_bluetooth.svg"
                                className="h-[26px] my-[auto] w-[26px]"
                                alt="bluetooth Eighteen"
                              />
                              <Img
                                src="images/img_floatingicon.svg"
                                className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                                alt="floatingicon Seventeen"
                              />
                            </div>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              BTC - USDT
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="bg-blue_A200_4c font-medium justify-center my-[5px] px-[4px] py-[2px] rounded-radius3 text-blue_A201 text-left w-[36px]"
                          variant="body17"
                        >
                          0,3%
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[10px] items-center justify-start mb-[6px] w-[auto]">
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[126px] text-[14px] text-center text-gray_600 w-[auto]"
                          shape="RoundedBorder13"
                          size="md"
                          variant="FillGray903"
                        >
                          Increase
                        </Button>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[126px] text-[14px] text-center text-white_A700 w-[auto]"
                          shape="RoundedBorder13"
                          size="md"
                          variant="GradientBlueA200DeeppurpleA700"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
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
                                  src="images/img_vector53stroke.png"
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
                  </div>
                </div>
                <div className="flex flex-col gap-[20px] items-start justify-start w-[auto]">
                  <div className="bg-white_A700 flex flex-col items-start justify-end p-[26px] sm:px-[20px] rounded-radius15 shadow-bs2 w-[100%]">
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
                  <div className="bg-white_A700 flex flex-col items-start justify-end p-[26px] sm:px-[20px] rounded-radius15 shadow-bs2 w-[100%]">
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
              <div className="flex flex-1 flex-col gap-[20px] items-center justify-start my-[0] w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                    <div className="bg-white_A700 flex flex-col gap-[13px] items-center justify-start p-[15px] rounded-radius20 shadow-bs2 w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start w-[100%]">
                        <div className="flex flex-row gap-[20px] items-start justify-between w-[82%]">
                          <Button
                            className="flex h-[32px] items-center justify-center w-[32px]"
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
                          <div className="flex flex-row gap-[12px] items-center justify-center w-[auto]">
                            <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                              <Img
                                src="images/img_bluetooth.svg"
                                className="h-[26px] my-[auto] w-[26px]"
                                alt="bluetooth Nineteen"
                              />
                              <Img
                                src="images/img_floatingicon.svg"
                                className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                                alt="floatingicon Eighteen"
                              />
                            </div>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              BTC - USDT
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="bg-blue_A200_4c font-medium justify-center my-[5px] px-[4px] py-[2px] rounded-radius3 text-blue_A201 text-left w-[36px]"
                          variant="body17"
                        >
                          0,3%
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[134px] text-[14px] text-center text-white_A700 w-[auto]"
                        shape="RoundedBorder13"
                        size="md"
                        variant="GradientBlueA200DeeppurpleA700"
                      >
                        Connect wallet
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
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
                                  src="images/img_vector53stroke.png"
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
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[20px] items-start justify-start w-[auto]">
                  <div className="bg-white_A700 flex flex-col items-start justify-end p-[26px] sm:px-[20px] rounded-radius15 shadow-bs2 w-[100%]">
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
                  <div className="bg-white_A700 flex flex-col items-start justify-end p-[26px] sm:px-[20px] rounded-radius15 shadow-bs2 w-[100%]">
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
              <div className="flex flex-1 flex-col gap-[20px] items-center justify-start my-[0] w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                    <div className="bg-white_A700 flex flex-col gap-[13px] items-center justify-start p-[15px] rounded-radius20 shadow-bs2 w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start w-[100%]">
                        <div className="flex flex-row gap-[20px] items-start justify-between w-[82%]">
                          <Button
                            className="flex h-[32px] items-center justify-center w-[32px]"
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
                          <div className="flex flex-row gap-[12px] items-center justify-center w-[auto]">
                            <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                              <Img
                                src="images/img_bluetooth.svg"
                                className="h-[26px] my-[auto] w-[26px]"
                                alt="bluetooth Twenty"
                              />
                              <Img
                                src="images/img_floatingicon.svg"
                                className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                                alt="floatingicon Nineteen"
                              />
                            </div>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              BTC - USDT
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="bg-blue_A200_4c font-medium justify-center my-[5px] px-[4px] py-[2px] rounded-radius3 text-blue_A201 text-left w-[36px]"
                          variant="body17"
                        >
                          0,3%
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[151px] text-[14px] text-center text-gray_400 w-[auto]"
                        shape="RoundedBorder13"
                        size="sm"
                        variant="FillGray903"
                      >
                        Removed liquidity
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
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
                                  src="images/img_vector53stroke.png"
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
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[auto]">
                  <List
                    className="flex-col gap-[20px] grid items-start w-[auto]"
                    orientation="vertical"
                  >
                    <div className="bg-white_A700 flex flex-col items-start justify-end my-[0] p-[26px] sm:px-[20px] rounded-radius15 shadow-bs2 w-[100%]">
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
                    <div className="bg-white_A700 flex flex-col items-start justify-end my-[0] p-[26px] sm:px-[20px] rounded-radius15 shadow-bs2 w-[100%]">
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
                  </List>
                </div>
              </div>
            </List>
          </div>
          <div className="flex md:flex-1 sm:flex-1 flex-col font-poppins gap-[50px] justify-start md:ml-[0] sm:ml-[0] ml-[145px] md:mt-[0] sm:mt-[0] mt-[136px] md:w-[100%] sm:w-[100%] w-[22%]">
            <Img
              src="images/img_group258.svg"
              className="h-[94px] md:ml-[0] sm:ml-[0] ml-[380px] w-[auto]"
              alt="Group258"
            />
            <div className="bg-indigo_50_99 flex flex-col items-end justify-center p-[12px] w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row gap-[26px] items-center justify-end my-[50px] md:w-[100%] sm:w-[100%] w-[96%]">
                <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[47%]">
                  <div className="bg-blue_A201 flex flex-col items-start justify-center sm:px-[20px] px-[40px] py-[8px] rounded-radius20 w-[146px]">
                    <div className="bg-white_A700 h-[24px] rounded-radius50 w-[24px]"></div>
                  </div>
                  <div className="bg-gradient1  flex flex-col h-[70px] md:h-[auto] sm:h-[auto] items-center justify-center mt-[26px] px-[163px] sm:px-[20px] md:px-[40px] py-[25px] rounded-radius15 sm:w-[100%] w-[389px]">
                    <div className="bg-white_A700 h-[30px] rounded-radius50 w-[30px]"></div>
                  </div>
                  <div className="bg-gradient1  flex flex-col h-[50px] md:h-[auto] sm:h-[auto] items-center justify-center mt-[24px] px-[163px] sm:px-[20px] md:px-[40px] py-[25px] rounded-radius15 w-[362px]">
                    <div className="bg-white_A700 h-[30px] rounded-radius50 w-[30px]"></div>
                  </div>
                  <div className="bg-gradient1  flex flex-col h-[70px] md:h-[auto] sm:h-[auto] items-center justify-center md:ml-[0] sm:ml-[0] ml-[3px] mt-[30px] px-[163px] sm:px-[20px] md:px-[40px] py-[25px] rounded-radius15 sm:w-[100%] w-[389px]">
                    <div className="bg-white_A700 h-[30px] rounded-radius50 w-[30px]"></div>
                  </div>
                </div>
                <Text
                  className="font-bold text-gray_900 text-left sm:w-[100%] w-[51%]"
                  variant="body7"
                >
                  After click on button, where some waiting time required, we
                  need to put  this waiting sign on the button (while  the
                  action proceeds)
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UiKit360LiquiditypagePage;
