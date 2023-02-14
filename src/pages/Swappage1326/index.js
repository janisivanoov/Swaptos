import React from "react";

import { Img, Text, Button, List } from "components";

const Swappage1326Page = () => {
  function handleNavigate30() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate37() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter gap-[12px] items-center justify-start mx-[auto] w-[100%]">
        <div
          className="bg-cover bg-no-repeat flex flex-col items-center justify-start pb-[110px] w-[100%]"
          style={{ backgroundImage: "url('images/img_group107.png')" }}
        >
          <div className="flex flex-col justify-start w-[100%]">
            <header className="flex items-center justify-center w-[100%]">
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
            <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[565px] mt-[30px] md:px-[20px] sm:px-[20px] shadow-bs6 md:w-[100%] sm:w-[100%] w-[15%]">
              <div className="bg-white_A700 flex flex-col items-start justify-start pl-[2.88px] pr-[20.14px] sm:pr-[20px] py-[2.88px] rounded-radius16 w-[auto]">
                <div className="flex flex-row gap-[18.7px] items-center justify-start w-[auto]">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[80px] text-[17.27px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder13"
                    size="md"
                    variant="GradientDeeppurple400Purple300"
                  >
                    Swap
                  </Button>
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    variant="body10"
                  >
                    Liquidity
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row font-poppins md:gap-[40px] sm:gap-[40px] items-start justify-between max-w-[880px] mt-[11px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
              <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col gap-[14px] items-center justify-start p-[15px] rounded-radius30 shadow-bs2 md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex sm:flex-col flex-row sm:gap-[20px] items-end justify-start md:w-[100%] sm:w-[100%] w-[95%]">
                  <Text
                    className="font-bold sm:mt-[0] mt-[6px] text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Swap
                  </Text>
                  <Img
                    src="images/img_clock.svg"
                    className="h-[24px] sm:ml-[0] ml-[322px] w-[24px]"
                    alt="clock"
                  />
                  <Img
                    src="images/img_settings_gray_903.svg"
                    className="h-[24px] sm:ml-[0] ml-[10px] w-[24px]"
                    alt="settings"
                  />
                </div>
                <div className="flex flex-col gap-[31px] items-center justify-start mb-[5px] w-[100%]">
                  <div className="h-[200px] md:h-[50px] sm:h-[50px] relative w-[100%]">
                    <div className="flex flex-col h-[100%] items-center justify-start m-[auto] w-[100%]">
                      <List
                        className="flex-col gap-[10px] grid items-center w-[100%]"
                        orientation="vertical"
                      >
                        <div className="bg-indigo_50 flex flex-1 flex-col items-center justify-start my-[0] p-[10px] rounded-radius20 w-[100%]">
                          <div className="flex flex-col gap-[10px] justify-start mb-[2px] md:w-[100%] sm:w-[100%] w-[97%]">
                            <div className="bg-white_A700 flex flex-col items-start justify-start mr-[297px] px-[6px] py-[3px] rounded-radius19 shadow-bs w-[auto]">
                              <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_close_green_a400.svg"
                                  className="h-[32px] w-[32px]"
                                  alt="close"
                                />
                                <Text
                                  className="font-medium text-gray_900 text-left w-[auto]"
                                  variant="body7"
                                >
                                  Flow
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
                            <div className="bg-white_A700 flex flex-col items-start justify-start mr-[297px] px-[6px] py-[3px] rounded-radius19 shadow-bs w-[auto]">
                              <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_close_green_a400.svg"
                                  className="h-[32px] w-[32px]"
                                  alt="close One"
                                />
                                <Text
                                  className="font-medium text-gray_900 text-left w-[auto]"
                                  variant="body7"
                                >
                                  Flow
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
                        alt="arrowdown"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <Button
                      className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[450px]"
                      shape="RoundedBorder13"
                      size="9xl"
                      variant="GradientDeeppurple400Purple300"
                    >
                      Connect wallet
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-start justify-start mb-[304px] md:mt-[0] sm:mt-[0] mt-[10px] pl-[15px] sm:pr-[20px] pr-[23px] py-[12px] rounded-radius15 shadow-bs7 w-[auto]">
                <div className="flex flex-row gap-[30px] items-center justify-start w-[auto]">
                  <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                    <Button
                      className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                      size="lgIcn"
                      variant="icbFillGreenA700"
                    >
                      <Img
                        src="images/img_checkmark_white_a700.svg"
                        className="h-[12px]"
                        alt="checkmark"
                      />
                    </Button>
                    <Text
                      className="font-medium text-gray_903 text-left w-[auto]"
                      variant="body14"
                    >
                      Success!
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      variant="body17"
                    >
                      0x8A....5B7A
                    </Text>
                    <Text
                      className="font-medium text-blue_A201 text-left w-[auto]"
                      variant="body17"
                    >
                      View in explorer
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-gray_900 flex font-poppins items-center justify-center w-[100%]">
          <div className="flex flex-col items-center justify-center mb-[43px] mt-[46px] mx-[auto] w-[89%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-center w-[100%]">
              <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[22%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="bg-gray_904 flex flex-col gap-[23px] items-center justify-start p-[20px] rounded-radius15 w-[100%]">
                    <div className="flex flex-row gap-[19px] items-center justify-start w-[auto]">
                      <div className="flex flex-row gap-[7px] items-center justify-center w-[auto]">
                        <Button
                          className="flex h-[40px] items-center justify-center w-[40px]"
                          shape="icbRoundedBorder19"
                          size="mdIcn"
                          variant="icbGradientBlueA200DeeppurpleA700"
                        >
                          <Img
                            src="images/img_refresh.svg"
                            className=""
                            alt="refresh"
                          />
                        </Button>
                        <div className="flex flex-col gap-[-5px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-gray_600 text-left w-[auto]"
                            variant="body17"
                          >
                            SWP
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
                        className="cursor-pointer font-bold leading-[normal] min-w-[94px] text-[12px] text-center text-white_A700 w-[auto]"
                        shape="CircleBorder19"
                        size="4xl"
                        variant="GradientBlueA200DeeppurpleA700"
                      >
                        Buy SWP
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
                            Pools
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
                    onClick={handleNavigate37}
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
                      alt="Vector"
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
                    onClick={handleNavigate30}
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

export default Swappage1326Page;
