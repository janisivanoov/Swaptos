import React from "react";

import { Img, Text, Button, Switch, List, Line } from "components";

const FarmspagePage = () => {
  function handleNavigate15() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate16() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-start justify-start w-[100%]">
          <div className="sm:h-[1186px] h-[686px] md:h-[956px] relative w-[100%]">
            <div className="absolute sm:h-[1186px] h-[680px] md:h-[956px] inset-[0] justify-center m-[auto] w-[100%]">
              <div className="absolute bottom-[22%] flex flex-col items-center justify-start right-[5%] w-[44%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius20 shadow-bs2 w-[100%]">
                    <div className="bg-white_A700 flex flex-col items-center justify-end p-[14px] rotate-[90deg] rounded-radius20 shadow-bs2 w-[100%]">
                      <div className="flex flex-col gap-[10px] items-center justify-start mb-[3px] mt-[9px] md:w-[100%] sm:w-[100%] w-[99%]">
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
                              Boost your yield!
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
                        <div className="flex flex-col gap-[25px] items-center justify-start md:w-[100%] sm:w-[100%] w-[99%]">
                          <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-between md:w-[100%] sm:w-[100%] w-[99%]">
                            <div className="flex flex-col gap-[46px] items-start justify-start sm:w-[100%] w-[auto]">
                              <Text
                                className="font-medium md:ml-[0] sm:ml-[0] ml-[2px] text-gray_900 text-left w-[100%]"
                                variant="body12"
                              >
                                <span className="text-gray_900 text-[16px] font-poppins">
                                  Up to{" "}
                                </span>
                                <span className="text-deep_purple_A202 text-[16px] font-poppins">
                                  1300% APY
                                </span>
                                <span className="text-gray_900 text-[16px] font-poppins">
                                  {" "}
                                  with special boosts
                                </span>
                                <span className="text-gray_900 text-[16px] font-poppins">
                                   
                                </span>
                                <span className="text-deep_purple_A202 text-[16px] font-poppins">
                                  Stake SWP
                                </span>
                                <span className="text-gray_900 text-[16px] font-poppins">
                                  {" "}
                                  & complete daily quests!
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
                                  <div className="flex flex-row gap-[7px] items-center justify-between w-[100%]">
                                    <Text
                                      className="font-medium text-gray_400 text-left w-[auto]"
                                      variant="body12"
                                    >
                                      Pool closes in:
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
                                <div className="flex flex-col justify-start w-[100%]">
                                  <div className="flex flex-row gap-[28px] items-start justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[78%]">
                                    <div className="bg-gradient4  flex flex-col items-start justify-start px-[9.74px] py-[2.43px] rounded-radius11 w-[56px]">
                                      <Text
                                        className="text-left text-white_A700 w-[auto]"
                                        variant="body15"
                                      >
                                        900%
                                      </Text>
                                    </div>
                                    <div className="bg-gradient4  flex flex-col items-start justify-start mt-[9px] px-[12px] py-[3px] rounded-radius15 w-[69px]">
                                      <Text
                                        className="font-bold text-left text-white_A700 w-[auto]"
                                        variant="body12"
                                      >
                                        600%{" "}
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[20px] items-start justify-between mt-[2px] w-[100%]">
                                    <div className="bg-gradient4  flex flex-col items-start justify-start mb-[8px] px-[19.09px] py-[4.77px] rounded-radius20 w-[119px]">
                                      <Text
                                        className="text-left text-white_A700 w-[auto]"
                                        variant="body3"
                                      >
                                        1300%
                                      </Text>
                                    </div>
                                    <div className="bg-gradient4  flex flex-col items-start justify-start mt-[32px] px-[9.6px] py-[2.4px] rounded-radius11 w-[57px]">
                                      <Text
                                        className="text-left text-white_A700 w-[auto]"
                                        variant="body16"
                                      >
                                        1100%{" "}
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gradient4  flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[51px] mt-[3px] px-[12px] py-[3px] rounded-radius15 w-[68px]">
                                  <Text
                                    className="font-bold text-left text-white_A700 w-[auto]"
                                    variant="body12"
                                  >
                                    740%
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-[49px] items-start justify-between w-[100%]">
                            <div className="bg-gradient4  flex flex-col font-inter items-center justify-center sm:px-[20px] px-[28px] py-[14px] rounded-radius23 w-[217px]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body12"
                              >
                                Connect wallet
                              </Text>
                            </div>
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
              <header className="flex items-center justify-center mx-[auto] w-[100%]">
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-center w-[100%]">
                  <div className="bg-white_A700 flex flex-col items-center justify-center p-[27px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col items-center justify-center mt-[4px] md:w-[100%] sm:w-[100%] w-[93%]">
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-center w-[100%]">
                        <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-end mb-[4px] p-[12px] rounded-radius7 md:w-[100%] sm:w-[100%] w-[12%]">
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
                        <div className="flex md:flex-1 sm:flex-1 flex-col gap-[9px] justify-start md:ml-[0] sm:ml-[0] ml-[70px] md:w-[100%] sm:w-[100%] w-[51%]">
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
                        <div className="bg-gradient2  flex flex-col font-inter items-center justify-center md:ml-[0] sm:ml-[0] ml-[213px] sm:px-[20px] px-[28px] py-[14px] rounded-radius23 w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body12"
                          >
                            Connect wallet
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] p-[72px] sm:px-[20px] md:px-[40px] w-[100%]"
                style={{
                  backgroundImage: "url('images/img_liquidityconect.png')",
                }}
              >
                <div className="flex flex-col items-center justify-start mb-[78px] mt-[59px] w-[100%]">
                  <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
                    <div className="flex flex-col items-center justify-start shadow-bs2 md:w-[100%] sm:w-[100%] w-[17%]">
                      <div className="bg-white_A700 flex flex-row gap-[20px] items-center justify-start p-[3px] rounded-radius16 w-[100%]">
                        <Button
                          className="cursor-pointer font-medium leading-[normal] text-[17px] text-center text-white_A700 w-[106px]"
                          shape="RoundedBorder13"
                          size="4xl"
                          variant="GradientPurpleA100IndigoA200"
                        >
                          Farms
                        </Button>
                        <Text
                          className="text-gray_900 text-left w-[auto]"
                          variant="body11"
                        >
                          Pools
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
                      <div className="flex md:flex-1 sm:flex-1 flex-col gap-[12px] items-start justify-start md:mt-[0] sm:mt-[0] mt-[48px] md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="bg-clip-text bg-gradient4  text-left text-transparent w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Farms
                        </Text>
                        <Text
                          className="font-medium text-gray_900 text-left w-[100%]"
                          variant="body7"
                        >
                          Stake LP tokens and earn rewards in SWP. To maximize
                          your gains, stake some SWP and complete daily
                          challenges. We incentivize many liquidity pairs by
                          offering our Liquidity Providers best farming
                          opportunities.
                        </Text>
                      </div>
                      <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius20 shadow-bs2 w-[100%]">
                            <div className="bg-white_A700 flex flex-col items-center justify-end p-[18px] rotate-[90deg] rounded-radius20 shadow-bs2 w-[100%]">
                              <div className="flex flex-col items-center justify-start mt-[6px] md:w-[100%] sm:w-[100%] w-[99%]">
                                <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                                  <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                    <Img
                                      src="images/img_materialsymbol_30x30.png"
                                      className="h-[30px] md:h-[auto] sm:h-[auto] object-cover w-[30px]"
                                      alt="materialsymbol One"
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
                                        for staking our tokens.  
                                      </span>
                                      <span className="text-deep_purple_A202 text-[16px] font-poppins">
                                        Stake SWP
                                      </span>
                                      <span className="text-gray_900 text-[16px] font-poppins">
                                        {" "}
                                        & complete daily quests!
                                      </span>
                                    </Text>
                                    <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[72%]">
                                      <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                                        <div
                                          className="h-[15px] overflow-hidden relative w-[96%]"
                                          name="GroupThree One"
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
                                                alt="question One"
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
            </div>
            <div className="absolute bottom-[0] flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] inset-x-[0] items-center justify-start mx-[auto] w-[90%]">
              <div className="bg-gray_903 flex flex-row font-poppins gap-[12px] items-center justify-start md:mt-[0] sm:mt-[0] my-[7px] pr-[12px] rounded-radius16 md:w-[100%] sm:w-[100%] w-[13%]">
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
              <div className="flex flex-row font-poppins gap-[10px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[30px] w-[auto]">
                <Switch value={true} className="w-[32%]" />
                <Text
                  className="font-medium text-gray_900 text-left w-[auto]"
                  variant="body12"
                >
                  Staked only
                </Text>
              </div>
              <div className="flex flex-row font-poppins gap-[10px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] w-[auto]">
                <Switch value={false} className="w-[22%]" />
                <Text
                  className="font-medium text-gray_900 text-left w-[auto]"
                  variant="body12"
                >
                  Extra Yield avialable
                </Text>
              </div>
              <div className="flex flex-col font-poppins items-center justify-start md:ml-[0] sm:ml-[0] ml-[30px] md:w-[100%] sm:w-[100%] w-[15%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col items-center justify-end p-[11px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group4.svg')" }}
                >
                  <div className="flex flex-row gap-[18px] items-start justify-center mt-[4px] md:w-[100%] sm:w-[100%] w-[83%]">
                    <Text
                      className="font-medium mt-[2px] text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      Sort by: Hot
                    </Text>
                    <Img
                      src="images/img_arrowup_gray_900_16x16.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowup Two"
                    />
                  </div>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col font-poppins items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] p-[10px] md:w-[100%] sm:w-[100%] w-[18%]"
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
                    Search tokens
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-bold font-inter leading-[normal] min-w-[140px] md:ml-[0] sm:ml-[0] ml-[57px] text-[16px] text-center text-white_A700 w-[auto]"
                shape="RoundedBorder23"
                size="6xl"
                variant="GradientBlueA200DeeppurpleA700"
              >
                Harvest all
              </Button>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1180px] mt-[53px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]"
            orientation="horizontal"
          >
            <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
              <div className="flex flex-col items-center justify-start pb-[30px] rounded-radius15 w-[100%]">
                <div className="flex flex-col gap-[21px] items-center justify-start w-[100%]">
                  <div className="h-[120px] sm:h-[243px] md:h-[auto] relative w-[100%]">
                    <div className="flex flex-col h-[100%] items-center justify-start mt-[30px] mx-[auto] w-[55%]">
                      <div className="flex flex-row gap-[10px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_close_yellow_900_30x55.svg"
                          className="h-[30px] w-[55px]"
                          alt="close"
                        />
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          BTC - USDT
                        </Text>
                      </div>
                    </div>
                    <div className="absolute flex sm:flex-col flex-row sm:gap-[20px] h-[max-content] inset-[0] items-start justify-center m-[auto] w-[100%]">
                      <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] rotate-[90deg] rounded-radius29 w-[13%]"></div>
                      <div className="flex sm:flex-1 flex-col items-center justify-start sm:ml-[0] ml-[29px] sm:mt-[0] mt-[78px] sm:w-[100%] w-[60%]">
                        <div className="flex flex-row gap-[10px] items-start justify-start w-[auto]">
                          <Text
                            className="border border-gray_900 border-solid font-medium px-[10px] py-[2px] rounded-radius12 text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            <span className="text-gray_900 text-[14px] font-poppins">
                              Multiplier{" "}
                            </span>
                            <span className="text-purple_A100 text-[14px] font-poppins">
                              6.1X
                            </span>
                          </Text>
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
                        </div>
                      </div>
                      <div className="backdrop-opacity-[0.5] bg-pink_500 blur-[120.00px] h-[120px] sm:ml-[0] ml-[54px] rotate-[90deg] rounded-radius60 w-[6%]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[80%]">
                    <div className="font-poppins md:h-[128px] sm:h-[128px] h-[189px] relative w-[100%]">
                      <div className="absolute bottom-[0] flex flex-col items-start justify-start left-[0] w-[27%]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          Available
                        </Text>
                        <Text
                          className="font-bold mt-[8px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          0.00 SWP
                        </Text>
                        <Text
                          className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          $0.0000
                        </Text>
                      </div>
                      <div className="absolute md:h-[128px] sm:h-[128px] h-[184px] inset-[0] justify-center m-[auto] w-[100%]">
                        <div className="md:h-[128px] sm:h-[128px] h-[184px] m-[auto] w-[100%]">
                          <div className="absolute border-2 border-black_900_33 border-solid flex md:h-[16px] sm:h-[16px] h-[46px] justify-end left-[0] p-[14px] rounded-radius5 top-[0] w-[81%]">
                            <Line className="bg-gray_900 h-[2px] mb-[6px] ml-[auto] mr-[31px] mt-[auto] w-[15%]" />
                            <div className="absolute flex flex-row h-[max-content] inset-y-[0] items-center justify-between my-[auto] right-[17%] w-[57%]">
                              <Text
                                className="font-bold text-gray_400 text-left w-[auto]"
                                variant="body14"
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
                          </div>
                          <div className="absolute flex flex-col md:gap-[40px] sm:gap-[40px] gap-[93px] h-[max-content] inset-y-[0] items-end justify-start my-[auto] right-[0] w-[38%]">
                            <Button
                              className="flex h-[40px] items-center justify-center w-[40px]"
                              shape="icbRoundedBorder7"
                              size="lgIcn"
                              variant="icbOutlineBlack90033"
                            >
                              <Img
                                src="images/img_calendar.svg"
                                className=""
                                alt="calendar"
                              />
                            </Button>
                            <Button
                              className="cursor-pointer font-bold leading-[normal] min-w-[113px] text-[16px] text-blue_A201 text-center w-[auto]"
                              shape="RoundedBorder10"
                              size="7xl"
                              variant="OutlineBlack90033"
                            >
                              Get SWP
                            </Button>
                          </div>
                        </div>
                        <div className="absolute flex flex-row gap-[20px] inset-x-[0] items-center justify-between mx-[auto] top-[33%] w-[100%]">
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
                    </div>
                    <Button
                      className="cursor-pointer font-bold font-inter leading-[normal] mt-[23px] text-[16px] text-center text-white_A700 w-[302px]"
                      shape="RoundedBorder23"
                      size="6xl"
                      variant="GradientBlueA200DeeppurpleA700"
                    >
                      Connect wallet
                    </Button>
                    <div className="flex flex-row font-poppins items-center justify-between mt-[22px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          SWP earned
                        </Text>
                        <Text
                          className="font-bold mt-[8px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          0.00 SWP
                        </Text>
                        <Text
                          className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          $0.0000
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[113px] my-[5px] text-[16px] text-center text-gray_400 w-[auto]"
                        shape="RoundedBorder10"
                        size="7xl"
                        variant="FillGray903"
                      >
                        Harvest
                      </Button>
                    </div>
                    <div className="bg-gray_903 flex flex-col h-[22px] md:h-[auto] sm:h-[auto] items-center justify-center mt-[18px] px-[8px] py-[2px] rounded-radius3 w-[53px]">
                      <Img
                        src="images/img_arrowup.svg"
                        className="h-[16px] w-[16px]"
                        alt="arrowup Three"
                      />
                    </div>
                    <div className="flex flex-col font-poppins items-center justify-start mt-[10px] w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="bg-blue_A200_19 border-2 border-blue_A201 border-solid flex flex-col items-center justify-end p-[17px] rounded-radius10 w-[100%]">
                          <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[98%]">
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <Text
                                className="font-bold text-gray_903 text-left w-[auto]"
                                variant="body17"
                              >
                                APY%
                              </Text>
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body17"
                              >
                                1400%
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between mt-[4px] w-[100%]">
                              <Text
                                className="font-bold text-gray_903 text-left w-[auto]"
                                variant="body17"
                              >
                                Total liquidity
                              </Text>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body17"
                              >
                                $1,356,291.32
                              </Text>
                            </div>
                            <a
                              className="font-bold mt-[7px] text-[12px] text-blue_A201 text-left underline w-[auto]"
                              href="#"
                            >
                              View contract
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
              <div className="flex flex-col items-center justify-start pb-[30px] rounded-radius15 w-[100%]">
                <div className="flex flex-col gap-[21px] items-center justify-start w-[100%]">
                  <div className="h-[120px] sm:h-[243px] md:h-[auto] relative w-[100%]">
                    <div className="flex flex-col h-[100%] items-center justify-start mt-[30px] mx-[auto] w-[55%]">
                      <div className="flex flex-row gap-[10px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_close_yellow_900_30x55.svg"
                          className="h-[30px] w-[55px]"
                          alt="close One"
                        />
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          BTC - USDT
                        </Text>
                      </div>
                    </div>
                    <div className="absolute flex sm:flex-col flex-row sm:gap-[20px] h-[max-content] inset-[0] items-start justify-center m-[auto] w-[100%]">
                      <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] rotate-[90deg] rounded-radius29 w-[13%]"></div>
                      <div className="flex sm:flex-1 flex-col items-center justify-start sm:ml-[0] ml-[29px] sm:mt-[0] mt-[78px] sm:w-[100%] w-[60%]">
                        <div className="flex flex-row gap-[10px] items-start justify-start w-[auto]">
                          <Text
                            className="border border-gray_900 border-solid font-medium px-[10px] py-[2px] rounded-radius12 text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            <span className="text-gray_900 text-[14px] font-poppins">
                              Multiplier{" "}
                            </span>
                            <span className="text-purple_A100 text-[14px] font-poppins">
                              6.1X
                            </span>
                          </Text>
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
                        </div>
                      </div>
                      <div className="backdrop-opacity-[0.5] bg-pink_500 blur-[120.00px] h-[120px] sm:ml-[0] ml-[54px] rotate-[90deg] rounded-radius60 w-[6%]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[80%]">
                    <div className="font-poppins md:h-[128px] sm:h-[128px] h-[189px] relative w-[100%]">
                      <div className="absolute bottom-[0] flex flex-col items-start justify-start left-[0] w-[27%]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          Available
                        </Text>
                        <Text
                          className="font-bold mt-[8px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          0.00 SWP
                        </Text>
                        <Text
                          className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          $0.0000
                        </Text>
                      </div>
                      <div className="absolute md:h-[128px] sm:h-[128px] h-[184px] inset-[0] justify-center m-[auto] w-[100%]">
                        <div className="md:h-[128px] sm:h-[128px] h-[184px] m-[auto] w-[100%]">
                          <div className="absolute border-2 border-black_900_33 border-solid flex md:h-[16px] sm:h-[16px] h-[46px] justify-end left-[0] p-[14px] rounded-radius5 top-[0] w-[81%]">
                            <Line className="bg-gray_900 h-[2px] mb-[6px] ml-[auto] mr-[31px] mt-[auto] w-[15%]" />
                            <div className="absolute flex flex-row h-[max-content] inset-y-[0] items-center justify-between my-[auto] right-[17%] w-[57%]">
                              <Text
                                className="font-bold text-gray_400 text-left w-[auto]"
                                variant="body14"
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
                          </div>
                          <div className="absolute flex flex-col md:gap-[40px] sm:gap-[40px] gap-[93px] h-[max-content] inset-y-[0] items-end justify-start my-[auto] right-[0] w-[38%]">
                            <Button
                              className="flex h-[40px] items-center justify-center w-[40px]"
                              shape="icbRoundedBorder7"
                              size="lgIcn"
                              variant="icbOutlineBlack90033"
                            >
                              <Img
                                src="images/img_calendar.svg"
                                className=""
                                alt="calendar One"
                              />
                            </Button>
                            <Button
                              className="cursor-pointer font-bold leading-[normal] min-w-[113px] text-[16px] text-blue_A201 text-center w-[auto]"
                              shape="RoundedBorder10"
                              size="7xl"
                              variant="OutlineBlack90033"
                            >
                              Get SWP
                            </Button>
                          </div>
                        </div>
                        <div className="absolute flex flex-row gap-[20px] inset-x-[0] items-center justify-between mx-[auto] top-[33%] w-[100%]">
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
                    </div>
                    <Button
                      className="cursor-pointer font-bold font-inter leading-[normal] mt-[23px] text-[16px] text-center text-white_A700 w-[302px]"
                      shape="RoundedBorder23"
                      size="6xl"
                      variant="GradientBlueA200DeeppurpleA700"
                    >
                      Connect wallet
                    </Button>
                    <div className="flex flex-row font-poppins items-center justify-between mt-[22px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          SWP earned
                        </Text>
                        <Text
                          className="font-bold mt-[8px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          0.00 SWP
                        </Text>
                        <Text
                          className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          $0.0000
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[113px] my-[5px] text-[16px] text-center text-gray_400 w-[auto]"
                        shape="RoundedBorder10"
                        size="7xl"
                        variant="FillGray903"
                      >
                        Harvest
                      </Button>
                    </div>
                    <div className="bg-gray_903 flex flex-col h-[22px] md:h-[auto] sm:h-[auto] items-center justify-center mt-[18px] px-[8px] py-[2px] rounded-radius3 w-[53px]">
                      <Img
                        src="images/img_arrowup.svg"
                        className="h-[16px] w-[16px]"
                        alt="arrowup Four"
                      />
                    </div>
                    <div className="flex flex-col font-poppins items-center justify-start mt-[10px] w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="bg-blue_A200_19 border-2 border-blue_A201 border-solid flex flex-col items-center justify-end p-[17px] rounded-radius10 w-[100%]">
                          <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[98%]">
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <Text
                                className="font-bold text-gray_903 text-left w-[auto]"
                                variant="body17"
                              >
                                APY%
                              </Text>
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body17"
                              >
                                1400%
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between mt-[4px] w-[100%]">
                              <Text
                                className="font-bold text-gray_903 text-left w-[auto]"
                                variant="body17"
                              >
                                Total liquidity
                              </Text>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body17"
                              >
                                $1,356,291.32
                              </Text>
                            </div>
                            <a
                              className="font-bold mt-[7px] text-[12px] text-blue_A201 text-left underline w-[auto]"
                              href="#"
                            >
                              View contract
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
              <div className="flex flex-col items-center justify-start pb-[30px] rounded-radius15 w-[100%]">
                <div className="flex flex-col gap-[21px] items-center justify-start w-[100%]">
                  <div className="h-[120px] sm:h-[243px] md:h-[auto] relative w-[100%]">
                    <div className="flex flex-col h-[100%] items-center justify-start mt-[30px] mx-[auto] w-[55%]">
                      <div className="flex flex-row gap-[10px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_close_yellow_900_30x55.svg"
                          className="h-[30px] w-[55px]"
                          alt="close Two"
                        />
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          BTC - USDT
                        </Text>
                      </div>
                    </div>
                    <div className="absolute flex sm:flex-col flex-row sm:gap-[20px] h-[max-content] inset-[0] items-start justify-center m-[auto] w-[100%]">
                      <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] rotate-[90deg] rounded-radius29 w-[13%]"></div>
                      <div className="flex sm:flex-1 flex-col items-center justify-start sm:ml-[0] ml-[29px] sm:mt-[0] mt-[78px] sm:w-[100%] w-[60%]">
                        <div className="flex flex-row gap-[10px] items-start justify-start w-[auto]">
                          <Text
                            className="border border-gray_900 border-solid font-medium px-[10px] py-[2px] rounded-radius12 text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            <span className="text-gray_900 text-[14px] font-poppins">
                              Multiplier{" "}
                            </span>
                            <span className="text-purple_A100 text-[14px] font-poppins">
                              6.1X
                            </span>
                          </Text>
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
                        </div>
                      </div>
                      <div className="backdrop-opacity-[0.5] bg-pink_500 blur-[120.00px] h-[120px] sm:ml-[0] ml-[54px] rotate-[90deg] rounded-radius60 w-[6%]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[80%]">
                    <div className="font-poppins md:h-[128px] sm:h-[128px] h-[189px] relative w-[100%]">
                      <div className="absolute bottom-[0] flex flex-col items-start justify-start left-[0] w-[27%]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          Available
                        </Text>
                        <Text
                          className="font-bold mt-[8px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          0.00 SWP
                        </Text>
                        <Text
                          className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          $0.0000
                        </Text>
                      </div>
                      <div className="absolute md:h-[128px] sm:h-[128px] h-[184px] inset-[0] justify-center m-[auto] w-[100%]">
                        <div className="md:h-[128px] sm:h-[128px] h-[184px] m-[auto] w-[100%]">
                          <div className="absolute border-2 border-black_900_33 border-solid flex md:h-[16px] sm:h-[16px] h-[46px] justify-end left-[0] p-[14px] rounded-radius5 top-[0] w-[81%]">
                            <Line className="bg-gray_900 h-[2px] mb-[6px] ml-[auto] mr-[31px] mt-[auto] w-[15%]" />
                            <div className="absolute flex flex-row h-[max-content] inset-y-[0] items-center justify-between my-[auto] right-[17%] w-[57%]">
                              <Text
                                className="font-bold text-gray_400 text-left w-[auto]"
                                variant="body14"
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
                          </div>
                          <div className="absolute flex flex-col md:gap-[40px] sm:gap-[40px] gap-[93px] h-[max-content] inset-y-[0] items-end justify-start my-[auto] right-[0] w-[38%]">
                            <Button
                              className="flex h-[40px] items-center justify-center w-[40px]"
                              shape="icbRoundedBorder7"
                              size="lgIcn"
                              variant="icbOutlineBlack90033"
                            >
                              <Img
                                src="images/img_calendar.svg"
                                className=""
                                alt="calendar Two"
                              />
                            </Button>
                            <Button
                              className="cursor-pointer font-bold leading-[normal] min-w-[113px] text-[16px] text-blue_A201 text-center w-[auto]"
                              shape="RoundedBorder10"
                              size="7xl"
                              variant="OutlineBlack90033"
                            >
                              Get SWP
                            </Button>
                          </div>
                        </div>
                        <div className="absolute flex flex-row gap-[20px] inset-x-[0] items-center justify-between mx-[auto] top-[33%] w-[100%]">
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
                    </div>
                    <Button
                      className="cursor-pointer font-bold font-inter leading-[normal] mt-[23px] text-[16px] text-center text-white_A700 w-[302px]"
                      shape="RoundedBorder23"
                      size="6xl"
                      variant="GradientBlueA200DeeppurpleA700"
                    >
                      Connect wallet
                    </Button>
                    <div className="flex flex-row font-poppins items-center justify-between mt-[22px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          SWP earned
                        </Text>
                        <Text
                          className="font-bold mt-[8px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          0.00 SWP
                        </Text>
                        <Text
                          className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          $0.0000
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[113px] my-[5px] text-[16px] text-center text-gray_400 w-[auto]"
                        shape="RoundedBorder10"
                        size="7xl"
                        variant="FillGray903"
                      >
                        Harvest
                      </Button>
                    </div>
                    <div className="bg-gray_903 flex flex-col h-[22px] md:h-[auto] sm:h-[auto] items-center justify-center mt-[18px] px-[8px] py-[2px] rounded-radius3 w-[53px]">
                      <Img
                        src="images/img_arrowup.svg"
                        className="h-[16px] w-[16px]"
                        alt="arrowup Five"
                      />
                    </div>
                    <div className="flex flex-col font-poppins items-center justify-start mt-[10px] w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="bg-blue_A200_19 border-2 border-blue_A201 border-solid flex flex-col items-center justify-end p-[17px] rounded-radius10 w-[100%]">
                          <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[98%]">
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <Text
                                className="font-bold text-gray_903 text-left w-[auto]"
                                variant="body17"
                              >
                                APY%
                              </Text>
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body17"
                              >
                                1400%
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between mt-[4px] w-[100%]">
                              <Text
                                className="font-bold text-gray_903 text-left w-[auto]"
                                variant="body17"
                              >
                                Total liquidity
                              </Text>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body17"
                              >
                                $1,356,291.32
                              </Text>
                            </div>
                            <a
                              className="font-bold mt-[7px] text-[12px] text-blue_A201 text-left underline w-[auto]"
                              href="#"
                            >
                              View contract
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </List>
          <List
            className="sm:flex-col flex-row gap-[20px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 md:ml-[0] sm:ml-[0] ml-[73px] mt-[20px] md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[59%]"
            orientation="horizontal"
          >
            <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
              <div className="flex flex-col gap-[21px] items-center justify-start pb-[20px] rounded-radius15 w-[100%]">
                <div className="h-[120px] sm:h-[243px] md:h-[auto] relative w-[100%]">
                  <div className="flex flex-col h-[100%] items-center justify-start mt-[30px] mx-[auto] w-[55%]">
                    <div className="flex flex-row gap-[10px] items-center justify-center w-[auto]">
                      <Img
                        src="images/img_close_yellow_900_30x55.svg"
                        className="h-[30px] w-[55px]"
                        alt="close Three"
                      />
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        variant="body4"
                      >
                        BTC - USDT
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex sm:flex-col flex-row sm:gap-[20px] h-[max-content] inset-[0] items-start justify-center m-[auto] w-[100%]">
                    <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] rotate-[90deg] rounded-radius29 w-[13%]"></div>
                    <div className="flex sm:flex-1 flex-col items-center justify-start sm:ml-[0] ml-[29px] sm:mt-[0] mt-[78px] sm:w-[100%] w-[60%]">
                      <div className="flex flex-row gap-[10px] items-start justify-start w-[auto]">
                        <Text
                          className="border border-gray_900 border-solid font-medium px-[10px] py-[2px] rounded-radius12 text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          <span className="text-gray_900 text-[14px] font-poppins">
                            Multiplier{" "}
                          </span>
                          <span className="text-purple_A100 text-[14px] font-poppins">
                            6.1X
                          </span>
                        </Text>
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
                      </div>
                    </div>
                    <div className="backdrop-opacity-[0.5] bg-pink_500 blur-[120.00px] h-[120px] sm:ml-[0] ml-[54px] rotate-[90deg] rounded-radius60 w-[6%]"></div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[80%]">
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="border-2 border-black_900_33 border-solid flex md:h-[16px] sm:h-[16px] h-[46px] justify-end p-[14px] relative rounded-radius5 w-[auto]">
                      <Line className="bg-gray_900 h-[2px] mb-[6px] ml-[auto] mr-[31px] mt-[auto] w-[15%]" />
                      <div className="absolute flex flex-row h-[max-content] inset-y-[0] items-center justify-between my-[auto] right-[17%] w-[57%]">
                        <Text
                          className="font-bold text-gray_400 text-left w-[auto]"
                          variant="body14"
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
                    </div>
                    <Img
                      src="images/img_calculator_black_900.svg"
                      className="h-[40px] w-[40px]"
                      alt="calculator Three"
                    />
                  </div>
                  <div className="flex flex-row gap-[20px] items-center justify-between mt-[15px] w-[100%]">
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
                  <div className="flex flex-col items-center justify-start mt-[20px] py-[2px] w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          Avialable
                        </Text>
                        <Text
                          className="font-bold mt-[8px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          0.00 SWP
                        </Text>
                        <Text
                          className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          $0.0000
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[113px] text-[16px] text-blue_A201 text-center w-[auto]"
                        shape="RoundedBorder10"
                        size="7xl"
                        variant="OutlineBlack90033"
                      >
                        Get SWP
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[22px] w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body14"
                      >
                        SWP staked
                      </Text>
                      <Text
                        className="font-bold mt-[8px] text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        0.00 SWP
                      </Text>
                      <Text
                        className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
                        variant="body14"
                      >
                        $0.0000
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[113px]"
                      shape="RoundedBorder10"
                      size="7xl"
                      variant="GradientBlueA200DeeppurpleA700"
                    >
                      Stake
                    </Button>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[26px] w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body14"
                      >
                        SWP earned
                      </Text>
                      <Text
                        className="font-bold mt-[8px] text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        0.00 SWP
                      </Text>
                      <Text
                        className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
                        variant="body14"
                      >
                        $0.0000
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[113px] my-[5px] text-[16px] text-center text-gray_400 w-[auto]"
                      shape="RoundedBorder10"
                      size="7xl"
                      variant="FillGray903"
                    >
                      Harvest
                    </Button>
                  </div>
                  <div className="bg-blue_A200_4c flex flex-col h-[22px] md:h-[auto] sm:h-[auto] items-center justify-center mt-[23px] px-[8px] py-[2px] rounded-radius3 w-[53px]">
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
              <div className="flex flex-col gap-[21px] items-center justify-start pb-[20px] rounded-radius15 w-[100%]">
                <div className="h-[120px] sm:h-[243px] md:h-[auto] relative w-[100%]">
                  <div className="flex flex-col h-[100%] items-center justify-start mt-[30px] mx-[auto] w-[55%]">
                    <div className="flex flex-row gap-[10px] items-center justify-center w-[auto]">
                      <Img
                        src="images/img_close_yellow_900_30x55.svg"
                        className="h-[30px] w-[55px]"
                        alt="close Four"
                      />
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        variant="body4"
                      >
                        BTC - USDT
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex sm:flex-col flex-row sm:gap-[20px] h-[max-content] inset-[0] items-start justify-center m-[auto] w-[100%]">
                    <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] rotate-[90deg] rounded-radius29 w-[13%]"></div>
                    <div className="flex sm:flex-1 flex-col items-center justify-start sm:ml-[0] ml-[29px] sm:mt-[0] mt-[78px] sm:w-[100%] w-[60%]">
                      <div className="flex flex-row gap-[10px] items-start justify-start w-[auto]">
                        <Text
                          className="border border-gray_900 border-solid font-medium px-[10px] py-[2px] rounded-radius12 text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          <span className="text-gray_900 text-[14px] font-poppins">
                            Multiplier{" "}
                          </span>
                          <span className="text-purple_A100 text-[14px] font-poppins">
                            6.1X
                          </span>
                        </Text>
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
                      </div>
                    </div>
                    <div className="backdrop-opacity-[0.5] bg-pink_500 blur-[120.00px] h-[120px] sm:ml-[0] ml-[54px] rotate-[90deg] rounded-radius60 w-[6%]"></div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[80%]">
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="border-2 border-black_900_33 border-solid flex md:h-[16px] sm:h-[16px] h-[46px] justify-end p-[14px] relative rounded-radius5 w-[auto]">
                      <Line className="bg-gray_900 h-[2px] mb-[6px] ml-[auto] mr-[31px] mt-[auto] w-[15%]" />
                      <div className="absolute flex flex-row h-[max-content] inset-y-[0] items-center justify-between my-[auto] right-[17%] w-[57%]">
                        <Text
                          className="font-bold text-gray_400 text-left w-[auto]"
                          variant="body14"
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
                    </div>
                    <Img
                      src="images/img_calculator_black_900.svg"
                      className="h-[40px] w-[40px]"
                      alt="calculator Four"
                    />
                  </div>
                  <div className="flex flex-row gap-[20px] items-center justify-between mt-[15px] w-[100%]">
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
                        alt="calculator One One"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[20px] py-[2px] w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          Avialable
                        </Text>
                        <Text
                          className="font-bold mt-[8px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          0.00 SWP
                        </Text>
                        <Text
                          className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          $0.0000
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[113px] text-[16px] text-blue_A201 text-center w-[auto]"
                        shape="RoundedBorder10"
                        size="7xl"
                        variant="OutlineBlack90033"
                      >
                        Get SWP
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[22px] w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body14"
                      >
                        SWP staked
                      </Text>
                      <Text
                        className="font-bold mt-[8px] text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        0.00 SWP
                      </Text>
                      <Text
                        className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
                        variant="body14"
                      >
                        $0.0000
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[113px]"
                      shape="RoundedBorder10"
                      size="7xl"
                      variant="GradientBlueA200DeeppurpleA700"
                    >
                      Stake
                    </Button>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[26px] w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body14"
                      >
                        SWP earned
                      </Text>
                      <Text
                        className="font-bold mt-[8px] text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        0.00 SWP
                      </Text>
                      <Text
                        className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
                        variant="body14"
                      >
                        $0.0000
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[113px] my-[5px] text-[16px] text-center text-gray_400 w-[auto]"
                      shape="RoundedBorder10"
                      size="7xl"
                      variant="FillGray903"
                    >
                      Harvest
                    </Button>
                  </div>
                  <div className="bg-blue_A200_4c flex flex-col h-[22px] md:h-[auto] sm:h-[auto] items-center justify-center mt-[23px] px-[8px] py-[2px] rounded-radius3 w-[53px]">
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowdown One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </List>
          <footer className="bg-gray_900 flex items-center justify-center mt-[130px] w-[100%]">
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
                      onClick={handleNavigate15}
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
                      onClick={handleNavigate16}
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
      </div>
    </>
  );
};

export default FarmspagePage;
