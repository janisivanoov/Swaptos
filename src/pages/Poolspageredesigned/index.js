import React from "react";

import { Img, Text, Button, Switch, Line } from "components";

const PoolspageredesignedPage = () => {
  function handleNavigate17() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate18() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="font-poppins h-[3069px] mx-[auto] relative w-[100%]">
        <div className="bg-white_A700 flex flex-col h-[100%] items-center justify-start m-[auto] pb-[421px] w-[100%]">
          <div className="flex flex-col gap-[28px] items-center justify-start w-[100%]">
            <div className="sm:h-[1168px] h-[688px] md:h-[938px] relative w-[100%]">
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col gap-[20px] h-[max-content] inset-[0] items-center justify-center m-[auto] pb-[150px] w-[100%]"
                style={{
                  backgroundImage: "url('images/img_liquidityconect.png')",
                }}
              >
                <div className="flex h-[111px] md:h-[auto] sm:h-[auto] justify-end relative w-[100%]">
                  <div className="bg-gradient2  h-[8px] mb-[31px] ml-[427px] mt-[auto] rounded-radius50 w-[8px]"></div>
                  <header className="absolute flex inset-[0] items-center justify-center m-[auto] w-[100%]">
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-center w-[100%]">
                      <div className="bg-white_A700 flex flex-col items-center justify-center p-[27px] sm:px-[20px] w-[100%]">
                        <div className="flex flex-col items-center justify-center mt-[4px] md:w-[100%] sm:w-[100%] w-[93%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-center w-[100%]">
                            <div className="flex md:flex-1 sm:flex-1 flex-col font-poppins items-center justify-end mb-[4px] p-[12px] rounded-radius7 md:w-[100%] sm:w-[100%] w-[12%]">
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
                            <div className="flex md:flex-1 sm:flex-1 flex-col font-poppins gap-[9px] justify-start md:ml-[0] sm:ml-[0] ml-[70px] md:w-[100%] sm:w-[100%] w-[51%]">
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
                              <div className="bg-gradient2  h-[8px] md:ml-[0] sm:ml-[0] ml-[184px] rounded-radius50 w-[8px]"></div>
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
                </div>
                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[89%]">
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[47px] sm:gap-[47px] items-start justify-between w-[100%]">
                    <div className="flex md:flex-1 sm:flex-1 flex-col gap-[11px] items-start justify-start md:mt-[0] sm:mt-[0] mt-[136px] md:w-[100%] sm:w-[100%] w-[auto]">
                      <Text
                        className="bg-clip-text bg-gradient4  text-left text-transparent w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Pools
                      </Text>
                      <Text
                        className="font-medium text-gray_900 text-left"
                        variant="body7"
                      >
                        <span className="text-gray_900 text-[20px] font-poppins">
                          Looking for a less resource-intensive alternative to
                          mining? Use your BSW tokens to earn more tokens, for
                          Free. Just stake some tokens to earn{" "}
                        </span>
                        <span className="text-purple_A100 text-[20px] font-poppins">
                          XXX
                        </span>
                        <span className="text-gray_900 text-[20px] font-poppins">
                          . High AP
                        </span>
                        <span className="text-gray_900 text-[20px] font-poppins">
                          Y
                        </span>
                        <span className="text-gray_900 text-[20px] font-poppins">
                          , low risk.
                          <br />
                        </span>
                      </Text>
                    </div>
                    <div className="flex md:flex-1 sm:flex-1 flex-col gap-[40px] justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                      <div className="flex flex-col items-center justify-start shadow-bs2 md:w-[100%] sm:w-[100%] w-[29%]">
                        <div className="flex flex-col items-center justify-start shadow-bs2 w-[100%]">
                          <div className="bg-white_A700 flex flex-row gap-[12px] items-center justify-end p-[3px] rounded-radius16 w-[100%]">
                            <Text
                              className="text-gray_900 text-left w-[auto]"
                              variant="body11"
                            >
                              Farms
                            </Text>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] text-[17px] text-center text-white_A700 w-[106px]"
                              shape="RoundedBorder13"
                              size="4xl"
                              variant="GradientPurpleA100IndigoA200"
                            >
                              Pools
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[101px] md:w-[100%] sm:w-[100%] w-[86%]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius20 shadow-bs2 w-[100%]">
                            <div className="bg-white_A700 flex flex-col items-center justify-end p-[18px] rotate-[90deg] rounded-radius20 shadow-bs2 w-[100%]">
                              <div className="flex flex-col items-center justify-start mt-[6px] md:w-[100%] sm:w-[100%] w-[99%]">
                                <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                                  <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                    <Img
                                      src="images/img_materialsymbol_30x30.png"
                                      className="h-[30px] md:h-[auto] sm:h-[auto] object-cover w-[30px]"
                                      alt="materialsymbol"
                                    />
                                    <Text
                                      className="font-bold text-gray_900 text-left w-[auto]"
                                      variant="body4"
                                    >
                                      Get extra yield!
                                    </Text>
                                  </div>
                                  <div className="bg-green_51 flex flex-row gap-[10px] items-center justify-start my-[5px] px-[12px] py-[3px] rounded-radius13 w-[auto]">
                                    <div className="bg-green_A700 h-[8px] rounded-radius50 w-[8px]"></div>
                                    <Text
                                      className="font-medium text-gray_900 text-left w-[auto]"
                                      variant="body14"
                                    >
                                      Active
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-between mt-[10px] md:w-[100%] sm:w-[100%] w-[99%]">
                                  <div className="flex flex-col gap-[46px] items-start justify-start sm:w-[100%] w-[auto]">
                                    <Text
                                      className="font-medium md:ml-[0] sm:ml-[0] ml-[2px] text-gray_900 text-left w-[100%]"
                                      variant="body12"
                                    >
                                      <span className="text-gray_900 text-[16px] font-poppins">
                                        Up to{" "}
                                      </span>
                                      <span className="text-purple_A100 text-[16px] font-poppins">
                                        1300
                                      </span>
                                      <span className="text-purple_A100 text-[16px] font-poppins">
                                        % APR
                                      </span>
                                      <span className="text-gray_900 text-[16px] font-poppins">
                                        {" "}
                                        for staking our tokens.  Stake{" "}
                                      </span>
                                      <span className="text-purple_A100 text-[16px] font-poppins">
                                        SWAPTOS
                                      </span>
                                      <span className="text-gray_900 text-[16px] font-poppins">
                                        {" "}
                                        to boost your APR!
                                      </span>
                                    </Text>
                                    <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[72%]">
                                      <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                                        <div
                                          className="h-[15px] overflow-hidden relative w-[96%]"
                                          name="GroupThree"
                                        >
                                          <div className="w-full h-full absolute bg-bluegray_101 rounded-[7px]"></div>
                                          <div
                                            className="h-full absolute bg-gradient-to-r from-[#fe80db] via-[#cc9b1dff] to-[#5f74fd]  rounded-[7px]"
                                            style={{ width: "54%" }}
                                          ></div>
                                        </div>
                                        <div className="flex flex-row items-center justify-evenly w-[100%]">
                                          <Text
                                            className="font-medium text-gray_400 text-left w-[auto]"
                                            variant="body12"
                                          >
                                            Pool closed in:
                                          </Text>
                                          <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                            <Text
                                              className="font-medium text-gray_900 text-left w-[auto]"
                                              variant="body12"
                                            >
                                              12h 5m 42s.
                                            </Text>
                                            <div className="bg-gray_900 flex flex-col h-[14px] items-center justify-start rounded-radius50 w-[14px]">
                                              <Img
                                                src="images/img_question.svg"
                                                className="h-[11px] w-[11px]"
                                                alt="question"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start rotate-[-90deg] rounded-radius20 sm:w-[100%] w-[auto]">
                                    <div className="flex flex-col justify-start w-[100%]">
                                      <div className="flex flex-row gap-[28px] items-start justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[78%]">
                                        <Button
                                          className="cursor-pointer font-bold leading-[normal] text-[12.99px] text-center text-white_A700 w-[56px]"
                                          shape="RoundedBorder10"
                                          size="sm"
                                          variant="GradientPurpleA100IndigoA200"
                                        >
                                          900%
                                        </Button>
                                        <Button
                                          className="cursor-pointer font-bold leading-[normal] mt-[9px] text-[16px] text-center text-white_A700 w-[69px]"
                                          shape="RoundedBorder13"
                                          size="md"
                                          variant="GradientPurpleA100IndigoA200"
                                        >
                                          600%{" "}
                                        </Button>
                                      </div>
                                      <div className="flex flex-row gap-[20px] items-start justify-between mt-[2px] w-[100%]">
                                        <Button
                                          className="cursor-pointer font-bold leading-[normal] mb-[8px] sm:text-[21.46px] md:text-[23.46px] text-[25.46px] text-center text-white_A700 w-[119px]"
                                          shape="CircleBorder19"
                                          size="4xl"
                                          variant="GradientPurpleA100IndigoA200"
                                        >
                                          1300%
                                        </Button>
                                        <Button
                                          className="cursor-pointer font-bold leading-[normal] mt-[32px] text-[12.8px] text-center text-white_A700 w-[57px]"
                                          shape="RoundedBorder10"
                                          size="sm"
                                          variant="GradientPurpleA100IndigoA200"
                                        >
                                          1100%{" "}
                                        </Button>
                                      </div>
                                      <Button
                                        className="cursor-pointer font-bold leading-[normal] md:ml-[0] sm:ml-[0] ml-[51px] mt-[3px] text-[16px] text-center text-white_A700 w-[68px]"
                                        shape="RoundedBorder13"
                                        size="md"
                                        variant="GradientPurpleA100IndigoA200"
                                      >
                                        740%
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex sm:flex-col flex-row sm:gap-[49px] items-start justify-between mt-[25px] w-[100%]">
                                  <Button
                                    className="cursor-pointer font-bold font-inter leading-[normal] text-[16px] text-center text-white_A700 w-[217px]"
                                    shape="RoundedBorder23"
                                    size="6xl"
                                    variant="GradientPurpleA100IndigoA200"
                                  >
                                    Connect wallet
                                  </Button>
                                  <Text
                                    className="font-poppins sm:mt-[0] mt-[4px] rotate-[-90deg] text-gray_900 text-left w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    <span className="text-gray_900 text-[16px] font-bold">
                                      up to
                                    </span>
                                    <span className="sm:text-[36px] md:text-[38px] text-gray_900 text-[40px] font-bold">
                                      {" "}
                                    </span>
                                    <span className="sm:text-[36px] md:text-[38px] text-purple_A100 text-[40px] font-bold">
                                      1300% APR{" "}
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
                </div>
              </div>
              <div className="absolute bottom-[0] flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] inset-x-[0] items-start justify-start mx-[auto] w-[89%]">
                <div className="bg-gray_903 flex flex-row font-poppins gap-[12px] items-center justify-start md:mt-[0] sm:mt-[0] my-[8px] pr-[12px] rounded-radius16 md:w-[100%] sm:w-[100%] w-[13%]">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[14px] text-center text-white_A700 w-[68px]"
                    shape="RoundedBorder13"
                    size="4xl"
                    variant="GradientBlueA200DeeppurpleA700"
                  >
                    Active
                  </Button>
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    variant="body14"
                  >
                    Finished
                  </Text>
                </div>
                <div className="flex flex-row font-poppins gap-[10px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[30px] md:mt-[0] sm:mt-[0] mt-[11px] w-[auto]">
                  <Switch value={true} className="w-[32%]" />
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Staked only
                  </Text>
                </div>
                <div className="flex flex-row font-poppins gap-[10px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] md:mt-[0] sm:mt-[0] mt-[11px] w-[auto]">
                  <Switch value={false} className="w-[22%]" />
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Extra Yield avialable
                  </Text>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col font-poppins items-center justify-start md:ml-[0] sm:ml-[0] ml-[233px] p-[10px] md:w-[100%] sm:w-[100%] w-[18%]"
                  style={{ backgroundImage: "url('images/img_group4.svg')" }}
                >
                  <div className="flex flex-row gap-[6px] items-start justify-start pr-[4px] w-[auto]">
                    <Img
                      src="images/img_search.svg"
                      className="h-[24px] w-[24px]"
                      alt="search"
                    />
                    <Text
                      className="font-medium text-gray_900_87 text-left w-[auto]"
                      variant="body12"
                    >
                      Search token pairs
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold font-inter leading-[normal] min-w-[140px] md:ml-[0] sm:ml-[0] ml-[30px] text-[16px] text-center text-white_A700 w-[auto]"
                  shape="RoundedBorder23"
                  size="6xl"
                  variant="GradientBlueA200DeeppurpleA700"
                >
                  Harvest all
                </Button>
              </div>
            </div>
            <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-center justify-start max-w-[1180px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                  <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="bg-white_A700 flex h-[378px] md:h-[528px] sm:h-[528px] justify-end pt-[32px] sm:px-[20px] px-[32px] relative rounded-radius20 shadow-bs2 md:w-[100%] sm:w-[100%] w-[auto]">
                      <div className="flex flex-col h-[100%] items-center justify-start mb-[30px] ml-[6px] mt-[auto] w-[70%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-medium text-gray_903 text-left w-[auto]"
                            variant="body9"
                          >
                            Max Daily Profit:
                          </Text>
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body9"
                          >
                            10 token
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-[2px] w-[100%]">
                          <Text
                            className="font-medium text-gray_903 text-left w-[auto]"
                            variant="body9"
                          >
                            Pool fulfillment:
                          </Text>
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body9"
                          >
                            0.57/2
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[16px] w-[100%]">
                          <div className="flex flex-col gap-[13px] items-center justify-start w-[100%]">
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <Text
                                className="font-medium text-gray_903 text-left w-[auto]"
                                variant="body9"
                              >
                                Closed in:
                              </Text>
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body9"
                              >
                                1h 5m 42s
                              </Text>
                            </div>
                            <div className="bg-bluegray_101 flex flex-col items-start justify-start rounded-radius9 w-[100%]">
                              <div className="bg-gradient2  h-[18px] rounded-radius9 w-[46%]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-[0] h-[346px] md:h-[528px] sm:h-[528px] inset-x-[0] mx-[auto] md:w-[100%] sm:w-[100%] w-[90%]">
                        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[98%]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[20px] items-center justify-start w-[auto]">
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body4"
                              >
                                Free pool
                              </Text>
                              <div className="bg-green_51 flex flex-row gap-[10px] items-center justify-start px-[12px] py-[3px] rounded-radius13 w-[auto]">
                                <div className="bg-green_A700 h-[8px] rounded-radius50 w-[8px]"></div>
                                <Text
                                  className="font-medium text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  Active
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row sm:gap-[40px] items-end justify-between mt-[2px] w-[100%]">
                              <Text
                                className="font-medium mt-[11px] text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                <span className="text-gray_900 text-[16px] font-poppins">
                                  Harvest free tokens every{" "}
                                </span>
                                <span className="text-purple_A100 text-[16px] font-poppins">
                                  15
                                </span>
                                <span className="text-gray_900 text-[16px] font-poppins">
                                  {" "}
                                  minutes!
                                </span>
                              </Text>
                              <Text
                                className="font-bold mb-[2px] text-gray_900 text-left w-[auto]"
                                variant="body17"
                              >
                                Pool  fulfillment
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between mt-[20px] md:w-[100%] sm:w-[100%] w-[80%]">
                              <div className="flex flex-col items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-gray_900 text-left w-[auto]"
                                  variant="body7"
                                >
                                  You will get
                                </Text>
                                <div className="flex flex-row items-center justify-evenly mt-[2px] w-[100%]">
                                  <Button
                                    className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                                    size="mdIcn"
                                    variant="icbGradientBlueA200DeeppurpleA700"
                                  >
                                    <Img
                                      src="images/img_refresh.svg"
                                      className=""
                                      alt="refresh"
                                    />
                                  </Button>
                                  <Text
                                    className="font-bold text-gray_900 text-left w-[auto]"
                                    variant="body5"
                                  >
                                    0.57123 USDT
                                  </Text>
                                </div>
                                <Text
                                  className="font-medium mt-[9px] text-gray_900 text-left w-[auto]"
                                  variant="body7"
                                >
                                  $12.4134
                                </Text>
                              </div>
                              <Button
                                className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[176px]"
                                shape="RoundedBorder10"
                                size="7xl"
                                variant="GradientBlueA200DeeppurpleA700"
                              >
                                Connect wallet
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Img
                          src="images/img_group291.png"
                          className="absolute bottom-[0] h-[528px] object-cover right-[0] w-[auto]"
                          alt="Group291"
                        />
                        <Line className="absolute bg-black_900_33 bottom-[46%] h-[1px] left-[0] w-[78%]" />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-center justify-start p-[24px] sm:px-[20px] rounded-radius20 shadow-bs2 md:w-[100%] sm:w-[100%] w-[auto]">
                      <div className="flex flex-col gap-[59px] items-start justify-start mb-[51px] mt-[6px] md:w-[100%] sm:w-[100%] w-[99%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="bg-clip-text bg-gradient4  font-bold text-left text-transparent w-[auto]"
                            variant="body4"
                          >
                            How does Free Pool work?
                          </Text>
                          <Img
                            src="images/img_close_gray_900.svg"
                            className="h-[24px] w-[24px]"
                            alt="close"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start md:w-[100%] sm:w-[100%] w-[91%]">
                          <div className="flex flex-col items-center justify-start sm:w-[100%] w-[54%]">
                            <div className="flex flex-col items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                <Text
                                  className="bg-gradient4  flex h-[42px] items-center justify-center rounded-radius50 text-center text-white_A700 w-[42px]"
                                  variant="body6"
                                >
                                  1
                                </Text>
                                <Text
                                  className="font-bold md:max-w-[100%] sm:max-w-[100%] max-w-[155px] text-gray_900 text-left"
                                  variant="body14"
                                >
                                  Connect your wallet to our website
                                </Text>
                              </div>
                              <Line className="bg-gradient4  h-[27px] md:h-[6px] sm:h-[6px] md:ml-[0] sm:ml-[0] ml-[19px] mt-[2px] rounded-radius3 md:w-[100%] sm:w-[100%] w-[6px]" />
                              <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] sm:w-[100%] w-[81%]">
                                <Text
                                  className="bg-gradient4  flex h-[42px] items-center justify-center rounded-radius50 text-center text-white_A700 w-[42px]"
                                  variant="body6"
                                >
                                  2
                                </Text>
                                <Text
                                  className="font-bold text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  Wait 15 minutes{" "}
                                </Text>
                              </div>
                              <Line className="bg-gradient4  h-[27px] md:h-[6px] sm:h-[6px] md:ml-[0] sm:ml-[0] ml-[19px] mt-[2px] rounded-radius3 md:w-[100%] sm:w-[100%] w-[6px]" />
                              <div className="flex flex-row gap-[7px] items-center justify-center w-[auto]">
                                <Text
                                  className="bg-gradient4  flex h-[42px] items-center justify-center rounded-radius50 text-center text-white_A700 w-[42px]"
                                  variant="body6"
                                >
                                  3
                                </Text>
                                <Text
                                  className="font-bold md:max-w-[100%] sm:max-w-[100%] max-w-[147px] text-gray_900 text-left"
                                  variant="body14"
                                >
                                  Harvest your tokens for free
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="h-[150px] md:h-[auto] sm:h-[auto] relative rounded-radius50 shadow-bs10 w-[150px]">
                            <div className="flex flex-col gap-[11px] h-[100%] items-center justify-start m-[auto] w-[52%]">
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                13:54
                              </Text>
                              <div className="bg-gradient4  flex flex-col font-inter items-start justify-start px-[16px] py-[4px] rounded-radius13 w-[auto]">
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body12"
                                >
                                  Claim
                                </Text>
                              </div>
                            </div>
                            <div className="absolute bg-gradient5  h-[150px] inset-[0] justify-center m-[auto] rounded-radius50 w-[150px]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-center justify-start p-[24px] sm:px-[20px] rounded-radius20 shadow-bs2 md:w-[100%] sm:w-[100%] w-[auto]">
                      <div className="flex flex-col gap-[49px] items-start justify-start mb-[51px] mt-[11px] md:w-[100%] sm:w-[100%] w-[99%]">
                        <div className="flex sm:flex-col flex-row sm:gap-[45px] items-start justify-between w-[100%]">
                          <Text
                            className="bg-clip-text bg-gradient2  font-bold text-left text-transparent w-[auto]"
                            variant="body4"
                          >
                            How does Mystic Pool work?
                          </Text>
                          <Img
                            src="images/img_close_gray_900.svg"
                            className="h-[24px] w-[24px]"
                            alt="close One"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[47px] items-center justify-start md:w-[100%] sm:w-[100%] w-[89%]">
                          <div className="flex flex-col items-center justify-start sm:w-[100%] w-[55%]">
                            <div className="flex flex-col items-center justify-start w-[100%]">
                              <div className="flex flex-col items-start justify-start w-[100%]">
                                <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                  <Text
                                    className="bg-gradient2  flex h-[42px] items-center justify-center rounded-radius50 text-center text-white_A700 w-[42px]"
                                    variant="body6"
                                  >
                                    1
                                  </Text>
                                  <Text
                                    className="font-bold md:max-w-[100%] sm:max-w-[100%] max-w-[155px] text-gray_900 text-left"
                                    variant="body14"
                                  >
                                    Connect your wallet to our website
                                  </Text>
                                </div>
                                <Line className="bg-gradient2  h-[27px] md:h-[6px] sm:h-[6px] md:ml-[0] sm:ml-[0] ml-[19px] mt-[2px] rounded-radius3 md:w-[100%] sm:w-[100%] w-[6px]" />
                                <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] sm:w-[100%] w-[81%]">
                                  <Text
                                    className="bg-gradient2  flex h-[42px] items-center justify-center rounded-radius50 text-center text-white_A700 w-[42px]"
                                    variant="body6"
                                  >
                                    2
                                  </Text>
                                  <Text
                                    className="font-bold text-gray_900 text-left w-[auto]"
                                    variant="body14"
                                  >
                                    Wait 15 minutes{" "}
                                  </Text>
                                </div>
                                <Line className="bg-gradient2  h-[27px] md:h-[6px] sm:h-[6px] md:ml-[0] sm:ml-[0] ml-[19px] mt-[2px] rounded-radius3 md:w-[100%] sm:w-[100%] w-[6px]" />
                                <div className="flex flex-row gap-[7px] items-center justify-center w-[auto]">
                                  <Text
                                    className="bg-gradient2  flex h-[42px] items-center justify-center rounded-radius50 text-center text-white_A700 w-[42px]"
                                    variant="body6"
                                  >
                                    3
                                  </Text>
                                  <Text
                                    className="font-bold md:max-w-[100%] sm:max-w-[100%] max-w-[147px] text-gray_900 text-left"
                                    variant="body14"
                                  >
                                    Harvest your tokens for free
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_group294.png"
                            className="h-[110px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[auto]"
                            alt="Group294"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex h-[378px] md:h-[528px] sm:h-[528px] justify-end pt-[30px] sm:px-[20px] px-[30px] relative rounded-radius20 shadow-bs2 md:w-[100%] sm:w-[100%] w-[auto]">
                      <Line className="bg-black_900_33 h-[1px] mb-[164px] ml-[6px] mt-[auto] w-[70%]" />
                      <div className="absolute bottom-[0] h-[348px] md:h-[528px] sm:h-[528px] inset-x-[0] mx-[auto] md:w-[100%] sm:w-[100%] w-[90%]">
                        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[98%]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[20px] items-center justify-start w-[auto]">
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body4"
                              >
                                Mystery Pool
                              </Text>
                              <div className="bg-green_51 flex flex-row gap-[10px] items-center justify-start px-[12px] py-[3px] rounded-radius13 w-[auto]">
                                <div className="bg-green_A700 h-[8px] rounded-radius50 w-[8px]"></div>
                                <Text
                                  className="font-medium text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  Active
                                </Text>
                              </div>
                            </div>
                            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between mt-[4px] w-[100%]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                <span className="text-gray_900 text-[16px] font-poppins">
                                  Harvest random tokens every{" "}
                                </span>
                                <span className="text-purple_A100 text-[16px] font-poppins">
                                  15
                                </span>
                                <span className="text-gray_900 text-[16px] font-poppins">
                                  {" "}
                                  minutes!
                                </span>
                              </Text>
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body17"
                              >
                                Pool  fulfillment
                              </Text>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-[52px] items-start justify-start mt-[31px] md:w-[100%] sm:w-[100%] w-[80%]">
                              <div className="flex flex-col gap-[9px] items-start justify-start sm:w-[100%] w-[52%]">
                                <Text
                                  className="font-medium text-gray_900 text-left w-[auto]"
                                  variant="body7"
                                >
                                  You will get
                                </Text>
                                <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                  <div className="flex h-[30px] md:h-[auto] sm:h-[auto] relative w-[81px]">
                                    <div className="flex h-[30px] md:h-[auto] sm:h-[auto] my-[auto] w-[80%]">
                                      <div className="flex h-[30px] md:h-[auto] sm:h-[auto] my-[auto] w-[74%]">
                                        <Button
                                          className="flex h-[30px] items-center justify-center my-[auto] rounded-radius50 w-[30px]"
                                          size="mdIcn"
                                          variant="icbGradientBlueA200DeeppurpleA700"
                                        >
                                          <Img
                                            src="images/img_refresh.svg"
                                            className=""
                                            alt="refresh One"
                                          />
                                        </Button>
                                        <Button
                                          className="flex h-[30px] items-center justify-center ml-[-13px] my-[auto] rounded-radius50 w-[30px] z-[1]"
                                          size="mdIcn"
                                          variant="icbFillYellow700"
                                        >
                                          <Img
                                            src="images/img_close_white_a700_24x24.svg"
                                            className="h-[18px]"
                                            alt="close Two"
                                          />
                                        </Button>
                                      </div>
                                      <Button
                                        className="flex h-[30px] items-center justify-center ml-[-13px] my-[auto] rounded-radius50 w-[30px] z-[1]"
                                        size="smIcn"
                                        variant="icbFillIndigoA202"
                                      >
                                        <Img
                                          src="images/img_arrowdown_white_a700.svg"
                                          className=""
                                          alt="arrowdown"
                                        />
                                      </Button>
                                    </div>
                                    <Button
                                      className="flex h-[30px] items-center justify-center ml-[-13px] my-[auto] rounded-radius50 w-[30px] z-[1]"
                                      size="mdIcn"
                                      variant="icbFillTeal400"
                                    >
                                      <Img
                                        src="images/img_eye_white_a700.svg"
                                        className=""
                                        alt="eye"
                                      />
                                    </Button>
                                  </div>
                                  <Text
                                    className="font-bold text-gray_900 text-left w-[auto]"
                                    variant="body7"
                                  >
                                    Random token
                                  </Text>
                                </div>
                              </div>
                              <Button
                                className="cursor-pointer font-bold leading-[normal] sm:mt-[0] mt-[4px] text-[16px] text-center text-white_A700 w-[176px]"
                                shape="RoundedBorder10"
                                size="7xl"
                                variant="GradientBlueA200DeeppurpleA700"
                              >
                                Connect wallet
                              </Button>
                            </div>
                            <div className="flex flex-row items-start justify-between mt-[37px] md:w-[100%] sm:w-[100%] w-[80%]">
                              <Text
                                className="font-medium text-gray_903 text-left w-[auto]"
                                variant="body9"
                              >
                                Max Daily Profit:
                              </Text>
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body9"
                              >
                                10 token
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[274px] items-center justify-start mt-[2px] md:w-[100%] sm:w-[100%] w-[80%]">
                              <Text
                                className="font-medium text-gray_903 text-left w-[auto]"
                                variant="body9"
                              >
                                Pool fulfillment:
                              </Text>
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body9"
                              >
                                0.57/2
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[80%]">
                              <div className="flex flex-col gap-[13px] items-center justify-start w-[100%]">
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <Text
                                    className="font-medium text-gray_903 text-left w-[auto]"
                                    variant="body9"
                                  >
                                    Closed in:
                                  </Text>
                                  <Text
                                    className="font-bold text-gray_900 text-left w-[auto]"
                                    variant="body9"
                                  >
                                    1h 5m 42s
                                  </Text>
                                </div>
                                <div className="bg-bluegray_101 flex flex-col items-start justify-start rounded-radius9 w-[100%]">
                                  <div className="bg-gradient2  h-[18px] rounded-radius9 w-[46%]"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img
                          src="images/img_group291.png"
                          className="absolute bottom-[0] h-[528px] object-cover right-[0] w-[auto]"
                          alt="Group291 One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
                  <div className="flex flex-col items-center justify-start pb-[43px] rounded-radius15 w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <div className="flex flex-col gap-[8px] justify-start w-[auto]">
                            <div className="flex flex-row gap-[94px] items-start justify-start mr-[67px] md:w-[100%] sm:w-[100%] w-[79%]">
                              <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] mb-[12px] rotate-[90deg] rounded-radius29 w-[20%]"></div>
                              <div className="flex flex-col items-center justify-start mt-[32px] w-[42%]">
                                <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                  <Button
                                    className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                                    size="mdIcn"
                                    variant="icbGradientBlueA200DeeppurpleA700"
                                  >
                                    <Img
                                      src="images/img_refresh.svg"
                                      className=""
                                      alt="refresh Two"
                                    />
                                  </Button>
                                  <Text
                                    className="font-bold text-gray_900 text-left w-[auto]"
                                    variant="body4"
                                  >
                                    SWP
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[75px] md:w-[100%] sm:w-[100%] w-[76%]">
                              <div className="flex flex-row gap-[5px] items-start justify-start w-[auto]">
                                <Button
                                  className="cursor-pointer font-medium leading-[normal] min-w-[64px] text-[14px] text-center text-gray_900 w-[auto]"
                                  shape="RoundedBorder10"
                                  size="sm"
                                  variant="OutlineGray900"
                                >
                                  Active
                                </Button>
                                <Button
                                  className="flex items-center justify-center min-w-[102px] text-center w-[auto]"
                                  leftIcon={
                                    <Img
                                      src="images/img_materialsymbolsrocketlaunch.png"
                                      className="mr-[2px] text-center"
                                      alt="material-symbols:rocket-launch"
                                    />
                                  }
                                  shape="RoundedBorder10"
                                  size="lg"
                                  variant="OutlineGray900"
                                >
                                  <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-gray_900 text-left">
                                    Extra Yield
                                  </div>
                                </Button>
                                <Button
                                  className="cursor-pointer font-medium leading-[normal] min-w-[55px] text-[14px] text-center text-gray_900 w-[auto]"
                                  shape="RoundedBorder10"
                                  size="sm"
                                  variant="OutlineGray900"
                                >
                                  410%
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="backdrop-opacity-[0.5] bg-pink_500 blur-[120.00px] h-[120px] rotate-[90deg] rounded-radius60 w-[auto]"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[30px] items-center justify-start mt-[20px] md:w-[100%] sm:w-[100%] w-[80%]">
                        <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                          <div className="border-2 border-gray_903 border-solid flex flex-col items-center justify-end p-[14px] rounded-radius5 w-[auto]">
                            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[38%]">
                              <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                                <Text
                                  className="font-bold text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  APR
                                </Text>
                                <div className="h-[16px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                                  <Text
                                    className="font-bold m-[auto] text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    410%
                                  </Text>
                                  <Line className="absolute bg-gray_900 bottom-[25%] h-[2px] right-[0] w-[91%]" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_group223_gray_903.png"
                            className="h-[40px] md:h-[auto] sm:h-[auto] object-cover w-[40px]"
                            alt="Group223"
                          />
                        </div>
                        <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                          <div className="bg-gradient4  p-[2px] rounded-radius5 w-[auto] ">
                            <div className="bg-white_A700 border-solid flex flex-row gap-[20px] items-center justify-start p-[14px] rounded-radius5">
                              <Text
                                className="bg-clip-text bg-gradient8  font-bold ml-[14px] text-left text-transparent w-[auto]"
                                variant="body14"
                              >
                                Boosted APR%
                              </Text>
                              <div className="flex flex-col items-center justify-start w-[24%]">
                                <Text
                                  className="font-bold text-gray_900 text-left w-[auto]"
                                  variant="body12"
                                >
                                  1410%
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="flex h-[40px] items-center justify-center w-[40px]"
                            shape="icbRoundedBorder7"
                            size="lgIcn"
                            variant="icbGradientPurpleA100IndigoA200"
                          >
                            <Img
                              src="images/img_calculator.svg"
                              className=""
                              alt="calculator"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col font-inter items-center justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[85%]">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[320px]"
                          shape="RoundedBorder23"
                          size="6xl"
                          variant="GradientBlueA200DeeppurpleA700"
                        >
                          Connect wallet
                        </Button>
                        <div className="flex flex-row font-poppins items-end justify-between mt-[32px] w-[100%]">
                          <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[81%]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                SWP earned
                              </Text>
                            </div>
                            <div className="bg-red_A700_4c flex flex-row gap-[10px] items-center justify-start px-[12px] py-[3px] rounded-radius13 w-[auto]">
                              <div className="bg-red_A700 h-[8px] rounded-radius50 w-[8px]"></div>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                Unactive
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[113px] mt-[5px] text-[16px] text-center text-gray_400 w-[auto]"
                            shape="RoundedBorder10"
                            size="7xl"
                            variant="FillGray903"
                          >
                            Harvest
                          </Button>
                        </div>
                        <div className="flex flex-row font-poppins items-start justify-between mt-[12px] w-[100%]">
                          <Text
                            className="font-medium mt-[2px] text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            Total staked
                          </Text>
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body17"
                          >
                            $41,298,676.669
                          </Text>
                        </div>
                        <div className="flex flex-row font-poppins items-start justify-between mt-[20px] w-[100%]">
                          <Text
                            className="font-bold text-blue_A201 text-left w-[auto]"
                            variant="body17"
                          >
                            View contract
                          </Text>
                          <Text
                            className="font-bold mt-[2px] text-blue_A201 text-left w-[auto]"
                            variant="body17"
                          >
                            Add XXX token
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
                  <div className="flex flex-col items-center justify-start pb-[43px] rounded-radius15 w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <div className="flex flex-col gap-[8px] justify-start w-[auto]">
                            <div className="flex flex-row gap-[94px] items-start justify-start mr-[67px] md:w-[100%] sm:w-[100%] w-[79%]">
                              <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] mb-[12px] rotate-[90deg] rounded-radius29 w-[20%]"></div>
                              <div className="flex flex-col items-center justify-start mt-[32px] w-[42%]">
                                <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                  <Button
                                    className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                                    size="mdIcn"
                                    variant="icbGradientBlueA200DeeppurpleA700"
                                  >
                                    <Img
                                      src="images/img_refresh.svg"
                                      className=""
                                      alt="refresh Three"
                                    />
                                  </Button>
                                  <Text
                                    className="font-bold text-gray_900 text-left w-[auto]"
                                    variant="body4"
                                  >
                                    SWP
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[75px] md:w-[100%] sm:w-[100%] w-[76%]">
                              <div className="flex flex-row gap-[5px] items-start justify-start w-[auto]">
                                <Button
                                  className="cursor-pointer font-medium leading-[normal] min-w-[64px] text-[14px] text-center text-gray_900 w-[auto]"
                                  shape="RoundedBorder10"
                                  size="sm"
                                  variant="OutlineGray900"
                                >
                                  Active
                                </Button>
                                <Button
                                  className="flex items-center justify-center min-w-[102px] text-center w-[auto]"
                                  leftIcon={
                                    <Img
                                      src="images/img_materialsymbolsrocketlaunch.png"
                                      className="mr-[2px] text-center"
                                      alt="material-symbols:rocket-launch"
                                    />
                                  }
                                  shape="RoundedBorder10"
                                  size="lg"
                                  variant="OutlineGray900"
                                >
                                  <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-gray_900 text-left">
                                    Extra Yield
                                  </div>
                                </Button>
                                <Button
                                  className="cursor-pointer font-medium leading-[normal] min-w-[55px] text-[14px] text-center text-gray_900 w-[auto]"
                                  shape="RoundedBorder10"
                                  size="sm"
                                  variant="OutlineGray900"
                                >
                                  410%
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="backdrop-opacity-[0.5] bg-pink_500 blur-[120.00px] h-[120px] rotate-[90deg] rounded-radius60 w-[auto]"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[30px] items-center justify-start mt-[20px] md:w-[100%] sm:w-[100%] w-[80%]">
                        <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                          <div className="border-2 border-gray_903 border-solid flex flex-col items-center justify-end p-[14px] rounded-radius5 w-[auto]">
                            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[38%]">
                              <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                                <Text
                                  className="font-bold text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  APR
                                </Text>
                                <div className="h-[16px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                                  <Text
                                    className="font-bold m-[auto] text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    410%
                                  </Text>
                                  <Line className="absolute bg-gray_900 bottom-[25%] h-[2px] right-[0] w-[91%]" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_group223_gray_903.png"
                            className="h-[40px] md:h-[auto] sm:h-[auto] object-cover w-[40px]"
                            alt="Group223 One"
                          />
                        </div>
                        <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                          <div className="bg-gradient4  p-[2px] rounded-radius5 w-[auto] ">
                            <div className="bg-white_A700 border-solid flex flex-row gap-[20px] items-center justify-start p-[14px] rounded-radius5">
                              <Text
                                className="bg-clip-text bg-gradient8  font-bold ml-[14px] text-left text-transparent w-[auto]"
                                variant="body14"
                              >
                                Boosted APR%
                              </Text>
                              <div className="flex flex-col items-center justify-start w-[24%]">
                                <Text
                                  className="font-bold text-gray_900 text-left w-[auto]"
                                  variant="body12"
                                >
                                  1410%
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="flex h-[40px] items-center justify-center w-[40px]"
                            shape="icbRoundedBorder7"
                            size="lgIcn"
                            variant="icbGradientPurpleA100IndigoA200"
                          >
                            <Img
                              src="images/img_calculator.svg"
                              className=""
                              alt="calculator One"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col font-inter items-center justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[85%]">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[320px]"
                          shape="RoundedBorder23"
                          size="6xl"
                          variant="GradientBlueA200DeeppurpleA700"
                        >
                          Connect wallet
                        </Button>
                        <div className="flex flex-row font-poppins items-end justify-between mt-[32px] w-[100%]">
                          <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[81%]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                SWP earned
                              </Text>
                            </div>
                            <div className="bg-red_A700_4c flex flex-row gap-[10px] items-center justify-start px-[12px] py-[3px] rounded-radius13 w-[auto]">
                              <div className="bg-red_A700 h-[8px] rounded-radius50 w-[8px]"></div>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                Unactive
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[113px] mt-[5px] text-[16px] text-center text-gray_400 w-[auto]"
                            shape="RoundedBorder10"
                            size="7xl"
                            variant="FillGray903"
                          >
                            Harvest
                          </Button>
                        </div>
                        <div className="flex flex-row font-poppins items-start justify-between mt-[12px] w-[100%]">
                          <Text
                            className="font-medium mt-[2px] text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            Total staked
                          </Text>
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body17"
                          >
                            $41,298,676.669
                          </Text>
                        </div>
                        <div className="flex flex-row font-poppins items-start justify-between mt-[20px] w-[100%]">
                          <Text
                            className="font-bold text-blue_A201 text-left w-[auto]"
                            variant="body17"
                          >
                            View contract
                          </Text>
                          <Text
                            className="font-bold mt-[2px] text-blue_A201 text-left w-[auto]"
                            variant="body17"
                          >
                            Add XXX token
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
                  <div className="flex flex-col items-center justify-start pb-[43px] rounded-radius15 w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <div className="flex flex-col gap-[8px] justify-start w-[auto]">
                            <div className="flex flex-row gap-[94px] items-start justify-start mr-[67px] md:w-[100%] sm:w-[100%] w-[79%]">
                              <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] mb-[12px] rotate-[90deg] rounded-radius29 w-[20%]"></div>
                              <div className="flex flex-col items-center justify-start mt-[32px] w-[42%]">
                                <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                  <Button
                                    className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                                    size="mdIcn"
                                    variant="icbGradientBlueA200DeeppurpleA700"
                                  >
                                    <Img
                                      src="images/img_refresh.svg"
                                      className=""
                                      alt="refresh Four"
                                    />
                                  </Button>
                                  <Text
                                    className="font-bold text-gray_900 text-left w-[auto]"
                                    variant="body4"
                                  >
                                    SWP
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[75px] md:w-[100%] sm:w-[100%] w-[76%]">
                              <div className="flex flex-row gap-[5px] items-start justify-start w-[auto]">
                                <Button
                                  className="cursor-pointer font-medium leading-[normal] min-w-[64px] text-[14px] text-center text-gray_900 w-[auto]"
                                  shape="RoundedBorder10"
                                  size="sm"
                                  variant="OutlineGray900"
                                >
                                  Active
                                </Button>
                                <div className="border border-gray_900 border-solid flex flex-row gap-[2px] items-center justify-start pl-[5px] pr-[10px] py-[2px] rounded-radius12 w-[auto]">
                                  <Img
                                    src="images/img_materialsymbolsrocketlaunch.png"
                                    className="h-[12px] md:h-[auto] sm:h-[auto] object-cover w-[12px]"
                                    alt="materialsymbol One"
                                  />
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body14"
                                  >
                                    Extra Yield
                                  </Text>
                                </div>
                                <div className="border border-gray_900 border-solid flex flex-col items-center justify-start px-[10px] py-[2px] rounded-radius12 w-[auto]">
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body14"
                                  >
                                    410%
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="backdrop-opacity-[0.5] bg-pink_500 blur-[120.00px] h-[120px] rotate-[90deg] rounded-radius60 w-[auto]"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[30px] items-center justify-start mt-[20px] md:w-[100%] sm:w-[100%] w-[80%]">
                        <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                          <div className="border-2 border-gray_903 border-solid flex flex-col items-center justify-end p-[14px] rounded-radius5 w-[auto]">
                            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[38%]">
                              <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                                <Text
                                  className="font-bold text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  APR
                                </Text>
                                <div className="h-[16px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                                  <Text
                                    className="font-bold m-[auto] text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    410%
                                  </Text>
                                  <Line className="absolute bg-gray_900 bottom-[25%] h-[2px] right-[0] w-[91%]" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_group223_gray_903.png"
                            className="h-[40px] md:h-[auto] sm:h-[auto] object-cover w-[40px]"
                            alt="Group223 Two"
                          />
                        </div>
                        <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                          <div className="bg-gradient4  p-[2px] rounded-radius5 w-[auto] ">
                            <div className="bg-white_A700 border-solid flex flex-row gap-[20px] items-center justify-start p-[14px] rounded-radius5">
                              <Text
                                className="bg-clip-text bg-gradient8  font-bold ml-[14px] text-left text-transparent w-[auto]"
                                variant="body14"
                              >
                                Boosted APR%
                              </Text>
                              <div className="flex flex-col items-center justify-start w-[24%]">
                                <Text
                                  className="font-bold text-gray_900 text-left w-[auto]"
                                  variant="body12"
                                >
                                  1410%
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="flex h-[40px] items-center justify-center w-[40px]"
                            shape="icbRoundedBorder7"
                            size="lgIcn"
                            variant="icbGradientPurpleA100IndigoA200"
                          >
                            <Img
                              src="images/img_calculator.svg"
                              className=""
                              alt="calculator Two"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col font-inter items-center justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[85%]">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[320px]"
                          shape="RoundedBorder23"
                          size="6xl"
                          variant="GradientBlueA200DeeppurpleA700"
                        >
                          Connect wallet
                        </Button>
                        <div className="flex flex-row font-poppins items-end justify-between mt-[32px] w-[100%]">
                          <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[81%]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                SWP earned
                              </Text>
                            </div>
                            <div className="bg-red_A700_4c flex flex-row gap-[10px] items-center justify-start px-[12px] py-[3px] rounded-radius13 w-[auto]">
                              <div className="bg-red_A700 h-[8px] rounded-radius50 w-[8px]"></div>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                Unactive
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[113px] mt-[5px] text-[16px] text-center text-gray_400 w-[auto]"
                            shape="RoundedBorder10"
                            size="7xl"
                            variant="FillGray903"
                          >
                            Harvest
                          </Button>
                        </div>
                        <div className="flex flex-row font-poppins items-start justify-between mt-[12px] w-[100%]">
                          <Text
                            className="font-medium mt-[2px] text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            Total staked
                          </Text>
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body17"
                          >
                            $41,298,676.669
                          </Text>
                        </div>
                        <div className="flex flex-row font-poppins items-start justify-between mt-[20px] w-[100%]">
                          <Text
                            className="font-bold text-blue_A201 text-left w-[auto]"
                            variant="body17"
                          >
                            View contract
                          </Text>
                          <Text
                            className="font-bold mt-[2px] text-blue_A201 text-left w-[auto]"
                            variant="body17"
                          >
                            Add XXX token
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
                  <div className="flex flex-col items-center justify-start pb-[43px] rounded-radius15 w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <div className="flex flex-col gap-[8px] justify-start w-[auto]">
                            <div className="flex flex-row gap-[94px] items-start justify-start mr-[67px] md:w-[100%] sm:w-[100%] w-[79%]">
                              <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] mb-[12px] rotate-[90deg] rounded-radius29 w-[20%]"></div>
                              <div className="flex flex-col items-center justify-start mt-[32px] w-[42%]">
                                <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                  <Button
                                    className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                                    size="mdIcn"
                                    variant="icbGradientBlueA200DeeppurpleA700"
                                  >
                                    <Img
                                      src="images/img_refresh.svg"
                                      className=""
                                      alt="refresh Five"
                                    />
                                  </Button>
                                  <Text
                                    className="font-bold text-gray_900 text-left w-[auto]"
                                    variant="body4"
                                  >
                                    SWP
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[75px] md:w-[100%] sm:w-[100%] w-[76%]">
                              <div className="flex flex-row gap-[5px] items-start justify-start w-[auto]">
                                <Button
                                  className="cursor-pointer font-medium leading-[normal] min-w-[64px] text-[14px] text-center text-gray_900 w-[auto]"
                                  shape="RoundedBorder10"
                                  size="sm"
                                  variant="OutlineGray900"
                                >
                                  Active
                                </Button>
                                <Button
                                  className="flex items-center justify-center min-w-[102px] text-center w-[auto]"
                                  leftIcon={
                                    <Img
                                      src="images/img_materialsymbolsrocketlaunch.png"
                                      className="mr-[2px] text-center"
                                      alt="material-symbols:rocket-launch"
                                    />
                                  }
                                  shape="RoundedBorder10"
                                  size="lg"
                                  variant="OutlineGray900"
                                >
                                  <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-gray_900 text-left">
                                    Extra Yield
                                  </div>
                                </Button>
                                <Button
                                  className="cursor-pointer font-medium leading-[normal] min-w-[55px] text-[14px] text-center text-gray_900 w-[auto]"
                                  shape="RoundedBorder10"
                                  size="sm"
                                  variant="OutlineGray900"
                                >
                                  410%
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="backdrop-opacity-[0.5] bg-pink_500 blur-[120.00px] h-[120px] rotate-[90deg] rounded-radius60 w-[auto]"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[30px] items-center justify-start mt-[20px] md:w-[100%] sm:w-[100%] w-[80%]">
                        <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                          <div className="border-2 border-gray_903 border-solid flex flex-col items-center justify-end p-[14px] rounded-radius5 w-[auto]">
                            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[38%]">
                              <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                                <Text
                                  className="font-bold text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  APR
                                </Text>
                                <div className="h-[16px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                                  <Text
                                    className="font-bold m-[auto] text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    410%
                                  </Text>
                                  <Line className="absolute bg-gray_900 bottom-[25%] h-[2px] right-[0] w-[91%]" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_group223_gray_903.png"
                            className="h-[40px] md:h-[auto] sm:h-[auto] object-cover w-[40px]"
                            alt="Group223 Three"
                          />
                        </div>
                        <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                          <div className="bg-gradient4  p-[2px] rounded-radius5 w-[auto] ">
                            <div className="bg-white_A700 border-solid flex flex-row gap-[20px] items-center justify-start p-[14px] rounded-radius5">
                              <Text
                                className="bg-clip-text bg-gradient8  font-bold ml-[14px] text-left text-transparent w-[auto]"
                                variant="body14"
                              >
                                Boosted APR%
                              </Text>
                              <div className="flex flex-col items-center justify-start w-[24%]">
                                <Text
                                  className="font-bold text-gray_900 text-left w-[auto]"
                                  variant="body12"
                                >
                                  1410%
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="flex h-[40px] items-center justify-center w-[40px]"
                            shape="icbRoundedBorder7"
                            size="lgIcn"
                            variant="icbGradientPurpleA100IndigoA200"
                          >
                            <Img
                              src="images/img_calculator.svg"
                              className=""
                              alt="calculator Three"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col font-inter items-center justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[85%]">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[320px]"
                          shape="RoundedBorder23"
                          size="6xl"
                          variant="GradientBlueA200DeeppurpleA700"
                        >
                          Connect wallet
                        </Button>
                        <div className="flex flex-row font-poppins items-end justify-between mt-[32px] w-[100%]">
                          <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[81%]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                SWP earned
                              </Text>
                            </div>
                            <div className="bg-red_A700_4c flex flex-row gap-[10px] items-center justify-start px-[12px] py-[3px] rounded-radius13 w-[auto]">
                              <div className="bg-red_A700 h-[8px] rounded-radius50 w-[8px]"></div>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                Unactive
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[113px] mt-[5px] text-[16px] text-center text-gray_400 w-[auto]"
                            shape="RoundedBorder10"
                            size="7xl"
                            variant="FillGray903"
                          >
                            Harvest
                          </Button>
                        </div>
                        <div className="flex flex-row font-poppins items-start justify-between mt-[12px] w-[100%]">
                          <Text
                            className="font-medium mt-[2px] text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            Total staked
                          </Text>
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body17"
                          >
                            $41,298,676.669
                          </Text>
                        </div>
                        <div className="flex flex-row font-poppins items-start justify-between mt-[20px] w-[100%]">
                          <Text
                            className="font-bold text-blue_A201 text-left w-[auto]"
                            variant="body17"
                          >
                            View contract
                          </Text>
                          <Text
                            className="font-bold mt-[2px] text-blue_A201 text-left w-[auto]"
                            variant="body17"
                          >
                            Add XXX token
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
                  <div className="flex flex-col items-center justify-start pb-[43px] rounded-radius15 w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <div className="flex flex-col gap-[8px] justify-start w-[auto]">
                            <div className="flex flex-row gap-[94px] items-start justify-start mr-[67px] md:w-[100%] sm:w-[100%] w-[79%]">
                              <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] mb-[12px] rotate-[90deg] rounded-radius29 w-[20%]"></div>
                              <div className="flex flex-col items-center justify-start mt-[32px] w-[42%]">
                                <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                                  <Button
                                    className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                                    size="mdIcn"
                                    variant="icbGradientBlueA200DeeppurpleA700"
                                  >
                                    <Img
                                      src="images/img_refresh.svg"
                                      className=""
                                      alt="refresh Six"
                                    />
                                  </Button>
                                  <Text
                                    className="font-bold text-gray_900 text-left w-[auto]"
                                    variant="body4"
                                  >
                                    SWP
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[75px] md:w-[100%] sm:w-[100%] w-[76%]">
                              <div className="flex flex-row gap-[5px] items-start justify-start w-[auto]">
                                <Button
                                  className="cursor-pointer font-medium leading-[normal] min-w-[64px] text-[14px] text-center text-gray_900 w-[auto]"
                                  shape="RoundedBorder10"
                                  size="sm"
                                  variant="OutlineGray900"
                                >
                                  Active
                                </Button>
                                <Button
                                  className="flex items-center justify-center min-w-[102px] text-center w-[auto]"
                                  leftIcon={
                                    <Img
                                      src="images/img_materialsymbolsrocketlaunch.png"
                                      className="mr-[2px] text-center"
                                      alt="material-symbols:rocket-launch"
                                    />
                                  }
                                  shape="RoundedBorder10"
                                  size="lg"
                                  variant="OutlineGray900"
                                >
                                  <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-gray_900 text-left">
                                    Extra Yield
                                  </div>
                                </Button>
                                <Button
                                  className="cursor-pointer font-medium leading-[normal] min-w-[55px] text-[14px] text-center text-gray_900 w-[auto]"
                                  shape="RoundedBorder10"
                                  size="sm"
                                  variant="OutlineGray900"
                                >
                                  410%
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="backdrop-opacity-[0.5] bg-pink_500 blur-[120.00px] h-[120px] rotate-[90deg] rounded-radius60 w-[auto]"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[30px] items-center justify-start mt-[20px] md:w-[100%] sm:w-[100%] w-[80%]">
                        <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                          <div className="border-2 border-gray_903 border-solid flex flex-col items-center justify-end p-[14px] rounded-radius5 w-[auto]">
                            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[38%]">
                              <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                                <Text
                                  className="font-bold text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  APR
                                </Text>
                                <div className="h-[16px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                                  <Text
                                    className="font-bold m-[auto] text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    410%
                                  </Text>
                                  <Line className="absolute bg-gray_900 bottom-[25%] h-[2px] right-[0] w-[91%]" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_group223_gray_903.png"
                            className="h-[40px] md:h-[auto] sm:h-[auto] object-cover w-[40px]"
                            alt="Group223 Four"
                          />
                        </div>
                        <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                          <div className="bg-gradient4  p-[2px] rounded-radius5 w-[auto] ">
                            <div className="bg-white_A700 border-solid flex flex-row gap-[20px] items-center justify-start p-[14px] rounded-radius5">
                              <Text
                                className="bg-clip-text bg-gradient8  font-bold ml-[14px] text-left text-transparent w-[auto]"
                                variant="body14"
                              >
                                Boosted APR%
                              </Text>
                              <div className="flex flex-col items-center justify-start w-[24%]">
                                <Text
                                  className="font-bold text-gray_900 text-left w-[auto]"
                                  variant="body12"
                                >
                                  1410%
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="flex h-[40px] items-center justify-center w-[40px]"
                            shape="icbRoundedBorder7"
                            size="lgIcn"
                            variant="icbGradientPurpleA100IndigoA200"
                          >
                            <Img
                              src="images/img_calculator.svg"
                              className=""
                              alt="calculator Four"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col font-inter items-center justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[85%]">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[320px]"
                          shape="RoundedBorder23"
                          size="6xl"
                          variant="GradientBlueA200DeeppurpleA700"
                        >
                          Connect wallet
                        </Button>
                        <div className="flex flex-row font-poppins items-end justify-between mt-[32px] w-[100%]">
                          <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[81%]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                SWP earned
                              </Text>
                            </div>
                            <div className="bg-red_A700_4c flex flex-row gap-[10px] items-center justify-start px-[12px] py-[3px] rounded-radius13 w-[auto]">
                              <div className="bg-red_A700 h-[8px] rounded-radius50 w-[8px]"></div>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                Unactive
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[113px] mt-[5px] text-[16px] text-center text-gray_400 w-[auto]"
                            shape="RoundedBorder10"
                            size="7xl"
                            variant="FillGray903"
                          >
                            Harvest
                          </Button>
                        </div>
                        <div className="flex flex-row font-poppins items-start justify-between mt-[12px] w-[100%]">
                          <Text
                            className="font-medium mt-[2px] text-gray_903 text-left w-[auto]"
                            variant="body17"
                          >
                            Total staked
                          </Text>
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body17"
                          >
                            $41,298,676.669
                          </Text>
                        </div>
                        <div className="flex flex-row font-poppins items-start justify-between mt-[20px] w-[100%]">
                          <Text
                            className="font-bold text-blue_A201 text-left w-[auto]"
                            variant="body17"
                          >
                            View contract
                          </Text>
                          <Text
                            className="font-bold mt-[2px] text-blue_A201 text-left w-[auto]"
                            variant="body17"
                          >
                            Add XXX token
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
        <footer className="absolute bg-gray_900 bottom-[0] flex inset-x-[0] items-center justify-center mx-[auto] w-[100%]">
          <div className="flex flex-col items-center justify-center w-[89%]">
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
                    onClick={handleNavigate17}
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
                    <Img src="images/img_eye.svg" className="" alt="eye One" />
                  </Button>
                  <Button
                    className="common-pointer flex h-[40px] items-center justify-center w-[40px]"
                    onClick={handleNavigate18}
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

export default PoolspageredesignedPage;
