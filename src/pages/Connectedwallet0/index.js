import React from "react";

import { Img, Text, Button, Line, List } from "components";

const Connectedwallet0Page = () => {
  function handleNavigate27() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate28() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="sm:h-[1240px] h-[680px] md:h-[auto] relative w-[100%]">
            <div className="flex flex-col h-[100%] items-center justify-start m-[auto] w-[100%]">
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
            <header className="absolute flex inset-x-[0] items-center justify-center mx-[auto] top-[0] w-[100%]">
              <div className="flex flex-1 flex-col items-center justify-center w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-center p-[28px] sm:px-[20px] w-[100%]">
                  <div className="flex flex-col items-center justify-center mt-[3px] md:w-[100%] sm:w-[100%] w-[93%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-center w-[100%]">
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
                      <div className="flex md:flex-1 sm:flex-1 flex-col font-poppins gap-[8px] justify-start md:ml-[0] sm:ml-[0] ml-[70px] md:w-[100%] sm:w-[100%] w-[51%]">
                        <ul className="flex sm:flex-col flex-row gap-[30px] sm:hidden items-center justify-start sm:w-[100%] w-[auto] common-row-list">
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
                        <div className="bg-gradient2  h-[8px] md:ml-[0] sm:ml-[0] ml-[89px] rounded-radius50 w-[8px]"></div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold font-inter leading-[normal] min-w-[175px] md:ml-[0] sm:ml-[0] ml-[213px] text-[16px] text-center text-white_A700 w-[auto]"
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
            </header>
            <div className="absolute bottom-[3%] flex flex-col gap-[23px] inset-x-[0] items-center justify-start mx-[auto] w-[66%]">
              <div className="flex flex-col items-center justify-start shadow-bs6 md:w-[100%] sm:w-[100%] w-[23%]">
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
                      variant="GradientPurpleA100IndigoA200"
                    >
                      Liquidity
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-inter items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[26px] sm:px-[20px] rounded-radius30 shadow-bs2 w-[100%]">
                  <div className="flex flex-col items-center justify-start mb-[74px] w-[100%]">
                    <div className="flex flex-row sm:gap-[40px] items-end justify-between w-[100%]">
                      <Text
                        className="font-medium font-poppins mt-[9px] text-gray_900 text-left w-[auto]"
                        variant="body4"
                      >
                        Liquidity
                      </Text>
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
                    <div className="flex flex-col font-poppins gap-[12px] items-center justify-start mt-[116px] md:w-[100%] sm:w-[100%] w-[42%]">
                      <Img
                        src="images/img_trash.svg"
                        className="h-[50px] w-[50px]"
                        alt="trash"
                      />
                      <Text
                        className="font-medium text-gray_400 text-left w-[auto]"
                        variant="body9"
                      >
                        Your active liquidity will appear here.
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] mt-[46px] text-[16px] text-center text-white_A700 w-[175px]"
                      shape="RoundedBorder23"
                      size="6xl"
                      variant="GradientPurpleA100IndigoA200"
                    >
                      Add new position
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:h-[580px] h-[768px] sm:h-[865px] max-w-[1180px] mx-[auto] md:px-[20px] sm:px-[20px] relative w-[100%]">
            <div className="absolute bg-white_A700 bottom-[0] flex flex-col items-center justify-start left-[0] rounded-radius20 shadow-bs2 w-[50%]">
              <div className="flex flex-col gap-[10px] items-start justify-start sm:w-[100%] w-[auto]">
                <div className="bg-white_A700 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[26px] sm:px-[20px] rounded-radius20 w-[100%]">
                  <div className="flex flex-row gap-[10px] items-center justify-start sm:ml-[0] ml-[12px] w-[auto]">
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
                    className="font-bold mb-[3px] sm:mt-[0] mt-[8px] text-gray_600 text-left w-[auto]"
                    variant="body12"
                  >
                    Deposit tokens into pools to farm rewards
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
          <div className="bg-gray_900 flex flex-col items-center justify-end mt-[110px] p-[43px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-end justify-start max-w-[1180px] mt-[3px] mx-[auto] w-[100%]">
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
                        <div className="flex flex-col gap-[10px] items-start justify-start w-[58%]">
                          <Text
                            className="font-bold text-gray_600 text-left w-[auto]"
                            variant="body17"
                          >
                            Max supply:
                          </Text>
                          <Text
                            className="font-bold text-gray_600 text-left w-[auto]"
                            variant="body17"
                          >
                            Total supply:
                          </Text>
                          <Text
                            className="font-bold text-gray_600 text-left w-[auto]"
                            variant="body17"
                          >
                            Circulating supply:
                          </Text>
                          <Text
                            className="font-bold text-gray_600 text-left w-[auto]"
                            variant="body17"
                          >
                            Total burned:
                          </Text>
                          <Text
                            className="font-bold text-gray_600 text-left w-[auto]"
                            variant="body17"
                          >
                            Market cap:
                          </Text>
                        </div>
                        <div className="flex flex-col font-poppins items-start justify-start pr-[2px] py-[2px] w-[40%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body17"
                          >
                            15 000 000
                          </Text>
                          <Text
                            className="font-bold mt-[13px] text-left text-white_A700 w-[auto]"
                            variant="body17"
                          >
                            9 073 652
                          </Text>
                          <Text
                            className="font-bold mt-[13px] text-left text-white_A700 w-[auto]"
                            variant="body17"
                          >
                            7 654 228
                          </Text>
                          <Text
                            className="font-bold mt-[12px] text-left text-white_A700 w-[auto]"
                            variant="body17"
                          >
                            1 276 445
                          </Text>
                          <Text
                            className="font-bold mt-[10px] text-left text-white_A700 w-[auto]"
                            variant="body17"
                          >
                            $37 654 213
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[93px] md:mt-[0] sm:mt-[0] mt-[15px] md:w-[100%] sm:w-[100%] w-[37%]">
                <div className="flex flex-col gap-[47px] items-start justify-start w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[60px] items-start justify-start sm:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[15px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-bluegray_101 text-left w-[auto]"
                        variant="body12"
                      >
                        About us
                      </Text>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                          variant="body14"
                        >
                          Blog
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                          variant="body14"
                        >
                          Docs
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                          variant="body14"
                        >
                          White Paper{" "}
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                          variant="body14"
                        >
                          Github
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[15px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-bluegray_101 text-left w-[auto]"
                        variant="body12"
                      >
                        Sitemap
                      </Text>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                          variant="body14"
                        >
                          Main
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                          variant="body14"
                        >
                          Trade
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                          variant="body14"
                        >
                          Earn
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                          variant="body14"
                        >
                          Extra APR
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                          variant="body14"
                        >
                          Referal program
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[15px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-bluegray_101 text-left w-[auto]"
                        variant="body12"
                      >
                        Products
                      </Text>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                          variant="body14"
                        >
                          Free pool
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                          variant="body14"
                        >
                          Mystery pool
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                          variant="body14"
                        >
                          V3 Pools
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                          variant="body14"
                        >
                          Farm
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                          variant="body14"
                        >
                          Extra APR
                        </Text>
                      </div>
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
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[22px] items-start justify-start mb-[127px] md:ml-[0] sm:ml-[0] ml-[60px] md:mt-[0] sm:mt-[0] mt-[15px] md:w-[100%] sm:w-[100%] w-[29%]">
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
                    onClick={handleNavigate27}
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
                    onClick={handleNavigate28}
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
        </div>
      </div>
    </>
  );
};

export default Connectedwallet0Page;
