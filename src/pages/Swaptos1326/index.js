import React from "react";

import { Img, Text, Button, Line, PagerIndicator, List } from "components";

const Swaptos1326Page = () => {
  function handleNavigate38() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate39() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate42() {
    window.location.href = "https://accounts.google.com/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins gap-[111px] md:gap-[40px] sm:gap-[40px] items-center justify-start mx-[auto] w-[100%]">
        <div
          className="bg-cover bg-no-repeat h-[6210px] md:h-[6695px] sm:h-[7337px] pb-[49px] relative w-[100%]"
          style={{ backgroundImage: "url('images/img_group115.png')" }}
        >
          <div className="h-[6160px] md:h-[6695px] sm:h-[7337px] m-[auto] w-[100%]">
            <div className="h-[6160px] md:h-[6695px] sm:h-[7337px] m-[auto] w-[100%]">
              <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[76px] h-[100%] items-center justify-start m-[auto] w-[100%]">
                <header className="flex items-center justify-center w-[100%]">
                  <div className="bg-gradient11  flex flex-1 flex-col items-center justify-center w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row gap-[213px] md:gap-[40px] sm:gap-[40px] items-center justify-center p-[28px] sm:px-[20px] w-[100%]">
                      <div className="flex md:flex-1 sm:flex-1 flex-col font-poppins items-center justify-start md:ml-[0] sm:ml-[0] ml-[45px] md:mt-[0] sm:mt-[0] mt-[3px] md:w-[100%] sm:w-[100%] w-[63%]">
                        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-end justify-between w-[100%]">
                          <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-end mb-[3px] p-[12px] rounded-radius7 md:w-[100%] sm:w-[100%] w-[auto]">
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
                          <div className="flex md:flex-1 sm:flex-1 flex-col gap-[8px] justify-start md:mt-[0] sm:mt-[0] mt-[12px] md:w-[100%] sm:w-[100%] w-[auto]">
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
                            <div className="bg-gradient2  h-[8px] md:ml-[0] sm:ml-[0] ml-[18px] rounded-radius50 w-[8px]"></div>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold font-inter leading-[normal] min-w-[175px] mr-[45px] text-[16px] text-center text-white_A700 w-[auto]"
                        shape="RoundedBorder23"
                        size="6xl"
                        variant="GradientBlueA200DeeppurpleA700"
                      >
                        Connect wallet
                      </Button>
                    </div>
                  </div>
                </header>
                <div className="h-[5973px] md:h-[6544px] sm:h-[7186px] relative w-[100%]">
                  <div className="absolute bottom-[0] flex flex-col gap-[145px] md:gap-[40px] sm:gap-[40px] inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[123px] md:gap-[40px] sm:gap-[40px] items-center justify-start md:w-[100%] sm:w-[100%] w-[89%]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                            <div className="h-[1019px] md:h-[634px] sm:h-[634px] relative w-[100%]">
                              <Img
                                src="images/img_vector_purple_a100_634x1020.svg"
                                className="absolute h-[634px] left-[3%] top-[0] w-[auto]"
                                alt="Vector"
                              />
                              <div className="absolute bottom-[30%] flex flex-col items-center justify-start pt-[6px] right-[0] w-[33%]">
                                <div className="h-[274px] md:h-[280px] sm:h-[280px] relative w-[100%]">
                                  <div className="h-[280px] md:h-[auto] sm:h-[auto] m-[auto] w-[100%]">
                                    <div className="bg-white_A700 h-[280px] m-[auto] rounded-radius20 shadow-bs2 w-[100%]"></div>
                                    <div className="absolute md:h-[71px] sm:h-[71px] h-[72px] left-[4%] top-[9%] w-[65%]">
                                      <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[8%] w-[97%]">
                                        <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                                          <Text
                                            className="font-bold text-gray_900 text-left w-[auto]"
                                            variant="body4"
                                          >
                                            Free Pool
                                          </Text>
                                          <Text
                                            className="font-medium text-gray_900 text-left w-[auto]"
                                            variant="body12"
                                          >
                                            Free tokens every 15 minutes!
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] pl-[8px] py-[8px] w-[98%]">
                                        <Text
                                          className="font-medium mb-[2px] mt-[35px] text-gray_900 text-left w-[auto]"
                                          variant="body12"
                                        >
                                          <span className="text-gray_900 text-[16px] font-poppins">
                                            Free tokens every{" "}
                                          </span>
                                          <span className="text-purple_A100 text-[16px] font-poppins">
                                            15
                                          </span>
                                          <span className="text-gray_900 text-[16px] font-poppins">
                                            {" "}
                                            minutes!
                                          </span>
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat flex flex-col h-[30px] items-center justify-start right-[9%] top-[10%] w-[30px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_arrowright.svg')",
                                    }}
                                  >
                                    <Img
                                      src="images/img_arrowright.svg"
                                      className="h-[30px] w-[30px]"
                                      alt="arrowright"
                                    />
                                  </div>
                                  <div className="absolute bottom-[6%] h-[165px] md:h-[auto] sm:h-[auto] inset-x-[0] mx-[auto] w-[165px]">
                                    <div className="flex flex-col gap-[11px] h-[100%] items-center justify-start m-[auto] w-[47%]">
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
                                    <div className="absolute bg-gradient5  h-[165px] inset-[0] justify-center m-[auto] rotate-[-6deg] rounded-radius82 w-[165px]"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[67%]">
                                <div className="bg-white_A700 flex flex-col items-center justify-end sm:pl-[20px] pl-[24px] pt-[24px] rounded-radius20 shadow-bs2 w-[100%]">
                                  <div className="flex flex-col items-start justify-start mt-[4px] w-[100%]">
                                    <div className="flex flex-row sm:gap-[40px] items-start justify-between md:w-[100%] sm:w-[100%] w-[96%]">
                                      <Text
                                        className="font-bold mt-[11px] text-gray_900 text-left w-[auto]"
                                        variant="body4"
                                      >
                                        Calculate your rewards
                                      </Text>
                                      <Img
                                        src="images/img_arrowright.svg"
                                        className="h-[30px] mb-[10px] w-[30px]"
                                        alt="arrowright One"
                                      />
                                    </div>
                                    <div className="md:h-[164px] sm:h-[164px] h-[212px] relative w-[100%]">
                                      <Text
                                        className="absolute font-medium left-[0] text-gray_900 text-left top-[0] sm:w-[100%] w-[36%]"
                                        variant="body12"
                                      >
                                        <span className="text-gray_900 text-[16px] font-poppins">
                                          See{" "}
                                        </span>
                                        <span className="text-purple_A100 text-[16px] font-poppins">
                                          how
                                        </span>
                                        <span className="text-gray_900 text-[16px] font-poppins">
                                          {" "}
                                        </span>
                                        <span className="text-purple_A100 text-[16px] font-poppins">
                                          much
                                        </span>
                                        <span className="text-gray_900 text-[16px] font-poppins">
                                          {" "}
                                          you can earn with our APY and Extra
                                          Yield program
                                        </span>
                                      </Text>
                                      <div className="absolute bg-white_A700 bottom-[0] flex flex-col items-end justify-start sm:pl-[20px] pl-[23px] right-[0] w-[73%]">
                                        <Img
                                          src="images/img_component3.png"
                                          className="h-[164px] sm:h-[auto] object-cover md:w-[100%] sm:w-[100%] w-[auto]"
                                          alt="ComponentThree"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bg-white_A700 bottom-[29%] flex flex-col inset-x-[0] items-center justify-start mx-[auto] p-[20px] rounded-radius20 shadow-bs2 w-[33%]">
                                <div className="flex flex-col items-start justify-start mb-[18px] mt-[7px] md:w-[100%] sm:w-[100%] w-[96%]">
                                  <div className="flex flex-row items-end justify-between md:ml-[0] sm:ml-[0] ml-[4px] md:w-[100%] sm:w-[100%] w-[99%]">
                                    <Text
                                      className="font-bold mt-[5px] text-gray_900 text-left w-[auto]"
                                      variant="body4"
                                    >
                                      Mystery Pool
                                    </Text>
                                    <Img
                                      src="images/img_arrowright.svg"
                                      className="h-[30px] mb-[4px] w-[30px]"
                                      alt="arrowright Two"
                                    />
                                  </div>
                                  <Text
                                    className="font-medium md:ml-[0] sm:ml-[0] ml-[4px] mt-[3px] text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    Click and win a random amount!
                                  </Text>
                                  <div className="h-[110px] md:h-[159px] sm:h-[159px] mt-[49px] relative md:w-[100%] sm:w-[100%] w-[97%]">
                                    <div className="absolute bottom-[14%] md:h-[43px] sm:h-[43px] h-[73px] left-[0] w-[52%]">
                                      <div className="absolute bg-gray_900 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-[auto] p-[5px] rotate-[-2deg] rounded-radius16 w-[100%]">
                                        <div className="bg-yellow_700 flex flex-col h-[17px] items-center justify-start mb-[5px] p-[3px] rotate-[2deg] rounded-radius8 w-[17px]">
                                          <Img
                                            src="images/img_close_white_a700.svg"
                                            className="h-[10px] w-[10px]"
                                            alt="close"
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="absolute bg-cover bg-no-repeat flex flex-col inset-x-[0] items-end justify-start mx-[auto] p-[10px] rounded-radius18 top-[0] w-[100%]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group120.svg')",
                                        }}
                                      >
                                        <Text
                                          className="font-medium mb-[2px] mr-[5px] rotate-[6deg] text-left text-white_A700 w-[auto]"
                                          variant="body14"
                                        >
                                          You won 2 USDT!
                                        </Text>
                                      </div>
                                    </div>
                                    <Text
                                      className="absolute bottom-[23%] font-medium left-[8%] rotate-[-2deg] text-left text-white_A700 w-[auto]"
                                      variant="body14"
                                    >
                                      You won 0.01 BNB!
                                    </Text>
                                    <Img
                                      src="images/img_illustration.png"
                                      className="absolute h-[110px] inset-[0] justify-center m-[auto] object-cover w-[auto]"
                                      alt="ILLUSTRATION"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[33%]">
                                <div className="flex flex-col items-center justify-start w-[100%]">
                                  <div className="bg-white_A700 flex flex-col gap-[22px] items-center justify-start p-[14px] rounded-radius20 shadow-bs2 w-[100%]">
                                    <div className="flex md:h-[409px] sm:h-[409px] h-[518px] justify-end relative sm:w-[100%] w-[95%]">
                                      <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] pt-[8px] px-[8px] top-[0] w-[100%]">
                                        <div className="flex flex-col items-center justify-start mt-[2px] pb-[93px] w-[100%]">
                                          <div className="flex flex-col h-[38px] md:h-[auto] sm:h-[auto] items-center justify-start w-[315px]">
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body4"
                                            >
                                              Our features
                                            </Text>
                                          </div>
                                          <Text
                                            className="font-medium text-gray_900 text-left w-[100%]"
                                            variant="body12"
                                          >
                                            <span className="text-deep_purple_A202 text-[16px] font-poppins">
                                              Trade
                                            </span>
                                            <span className="text-gray_900 text-[16px] font-poppins">
                                              {" "}
                                              tokens
                                            </span>
                                            <span className="text-purple_A100 text-[16px] font-poppins">
                                              {" "}
                                            </span>
                                            <span className="text-gray_900 text-[16px] font-poppins">
                                              fast and with minimal fees and
                                              slippage
                                            </span>
                                          </Text>
                                        </div>
                                      </div>
                                      <Img
                                        src="images/img_materialsymbol.png"
                                        className="h-[180px] mb-[78px] mt-[auto] mx-[auto] object-cover w-[180px]"
                                        alt="materialsymbol"
                                      />
                                      <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-start justify-between mx-[auto] w-[87%]">
                                        <Line className="bg-gray_500_b2 h-[409px] w-[4px]" />
                                        <Text
                                          className="font-bold mt-[34px] text-center text-gray_900 w-[auto]"
                                          variant="body4"
                                        >
                                          Trade  your crypto
                                        </Text>
                                        <Line className="bg-gray_500_b2 h-[409px] w-[4px]" />
                                      </div>
                                    </div>
                                    <PagerIndicator
                                      className="flex gap-[5px] h-[12px] items-start justify-start w-[46px]"
                                      count={3}
                                      activeCss="inline-block cursor-pointer rounded-radius50 h-[12px] bg-gray_900 w-[12px]"
                                      activeIndex={1}
                                      inactiveCss="inline-block cursor-pointer rounded-radius50 h-[12px] bg-gray_903 w-[12px]"
                                      selectedWrapperCss="inline-block"
                                      unselectedWrapperCss="inline-block"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                              <div
                                className="bg-cover bg-no-repeat md:h-[127px] sm:h-[127px] h-[280px] p-[23px] sm:px-[20px] relative sm:w-[100%] w-[auto]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_extraprogram.svg')",
                                }}
                              >
                                <div className="absolute flex flex-col items-center justify-start left-[5%] top-[10%] w-[38%]">
                                  <div className="flex flex-col gap-[7px] items-start justify-start w-[100%]">
                                    <Text
                                      className="font-bold text-gray_900 text-left w-[auto]"
                                      variant="body4"
                                    >
                                      Extra Yield
                                    </Text>
                                    <Text
                                      className="font-medium text-gray_900 text-left w-[100%]"
                                      variant="body12"
                                    >
                                      <span className="text-gray_900 text-[16px] font-poppins">
                                        Daily quests that give you huge{" "}
                                      </span>
                                      <span className="text-purple_A100 text-[16px] font-poppins">
                                        APY boosts
                                      </span>
                                      <span className="text-gray_900 text-[16px] font-poppins">
                                        {" "}
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_arrowright.svg"
                                  className="absolute h-[30px] right-[8%] top-[10%] w-[30px]"
                                  alt="arrowright Three"
                                />
                                <div className="absolute bottom-[8%] md:h-[127px] sm:h-[127px] h-[188px] right-[8%] sm:w-[100%] w-[78%]">
                                  <Text
                                    className="absolute bottom-[0] right-[0] text-gray_900 text-left w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    <span className="text-gray_900 text-[16px] font-poppins font-bold">
                                      up to
                                    </span>
                                    <span className="sm:text-[36px] md:text-[38px] text-gray_900 text-[40px] font-poppins font-bold">
                                      {" "}
                                    </span>
                                    <span className="sm:text-[36px] md:text-[38px] text-purple_A100 text-[40px] font-poppins font-bold">
                                      4x APR
                                    </span>
                                  </Text>
                                  <div className="absolute md:h-[127px] sm:h-[127px] h-[172px] left-[0] top-[0] sm:w-[100%] w-[89%]">
                                    <div className="absolute flex flex-col gap-[45px] h-[max-content] inset-[0] justify-center m-[auto] w-[40%]">
                                      <Img
                                        src="images/img_vector5.png"
                                        className="h-[41px] md:h-[auto] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[87px] object-cover sm:w-[100%] w-[auto]"
                                        alt="VectorFive"
                                      />
                                      <Img
                                        src="images/img_vector4.png"
                                        className="h-[41px] md:h-[auto] sm:h-[auto] mr-[87px] object-cover sm:w-[100%] w-[auto]"
                                        alt="VectorFour"
                                      />
                                    </div>
                                    <div className="absolute bg-gray_900 flex flex-col items-center justify-start p-[16px] right-[0] rounded-radius24 top-[0] w-[34%]">
                                      <div
                                        className="h-[15px] overflow-hidden relative w-[69%]"
                                        name="Group237"
                                      >
                                        <div className="w-full h-full absolute bg-gray_600 rounded-[7px]"></div>
                                        <div
                                          className="h-full absolute bg-gradient-to-r from-[#9542ff] to-[#fd5fd0]  rounded-[7px]"
                                          style={{ width: "67%" }}
                                        ></div>
                                      </div>
                                    </div>
                                    <div className="absolute bg-gray_900 flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] p-[9px] rounded-radius24 w-[34%]">
                                      <Button
                                        className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                                        size="mdIcn"
                                        variant="icbGradientDeeppurpleA202PinkA100"
                                      >
                                        <Img
                                          src="images/img_signal.svg"
                                          className="h-[14px]"
                                          alt="signal"
                                        />
                                      </Button>
                                    </div>
                                    <div className="absolute bg-gray_900 bottom-[0] flex flex-col items-center justify-start left-[0] p-[9px] rounded-radius24 w-[34%]">
                                      <Button
                                        className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                                        size="lgIcn"
                                        variant="icbGradientDeeppurpleA202PinkA100"
                                      >
                                        <Img
                                          src="images/img_checkmark_white_a700.svg"
                                          className="h-[12px]"
                                          alt="checkmark"
                                        />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-center justify-end pt-[24px] sm:px-[20px] px-[24px] rounded-radius20 shadow-bs2 md:w-[100%] sm:w-[100%] w-[auto]">
                                <div className="flex flex-col items-start justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[98%]">
                                  <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                                    <Text
                                      className="font-bold mt-[4px] text-gray_900 text-left w-[auto]"
                                      variant="body4"
                                    >
                                      Referral program
                                    </Text>
                                    <Img
                                      src="images/img_arrowright.svg"
                                      className="h-[30px] mb-[4px] w-[30px]"
                                      alt="arrowright Four"
                                    />
                                  </div>
                                  <Text
                                    className="font-medium mt-[5px] text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    Get 10% of your referrals&#39; rewards
                                  </Text>
                                  <Img
                                    src="images/img_frame237.svg"
                                    className="h-[133px] md:ml-[0] sm:ml-[0] ml-[23px] mt-[61px] w-[auto]"
                                    alt="Frame237"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <Text
                            className="text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Trending tokens
                          </Text>
                          <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
                            <div className="flex flex-col items-center justify-start w-[100%]">
                              <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-gray_600 text-left w-[auto]"
                                  variant="body7"
                                >
                                  Check out the top gainers on Swapos
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                              <List
                                className="sm:flex-col flex-row gap-[20px] grid grid-cols-2 w-[auto]"
                                orientation="horizontal"
                              >
                                <div className="bg-white_A700 flex flex-col h-[180px] items-center justify-start sm:ml-[0] p-[12px] rounded-radius20 shadow-bs2 w-[100%]">
                                  <div className="bg-gray_900 flex flex-col h-[60px] items-center justify-start rounded-radius50 w-[60px]">
                                    <Img
                                      src="images/img_close.svg"
                                      className="h-[60px] rounded-tl-[50%] rounded-tr-[50%] w-[60px]"
                                      alt="close One"
                                    />
                                  </div>
                                  <div className="flex flex-row gap-[7px] items-center justify-center mt-[7px] w-[auto]">
                                    <Text
                                      className="font-medium font-poppins text-gray_900 text-left w-[auto]"
                                      variant="body9"
                                    >
                                      $351.31
                                    </Text>
                                    <Button
                                      className="cursor-pointer font-bold font-inter leading-[normal] min-w-[61px] text-[16px] text-center text-green_A700 w-[auto]"
                                      shape="RoundedBorder13"
                                      size="sm"
                                      variant="FillGreen51"
                                    >
                                      +87%
                                    </Button>
                                  </div>
                                  <div className="flex flex-col gap-[11px] items-center justify-start mb-[6px] mt-[11px] md:w-[100%] sm:w-[100%] w-[26%]">
                                    <Text
                                      className="font-bold font-poppins text-gray_900 text-left w-[auto]"
                                      variant="body9"
                                    >
                                      BNB
                                    </Text>
                                    <Text
                                      className="font-inter font-medium text-gray_900 text-left w-[auto]"
                                      variant="body17"
                                    >
                                      (BNB)
                                    </Text>
                                  </div>
                                </div>
                                <div className="bg-white_A700 flex flex-col h-[180px] items-center justify-start sm:ml-[0] p-[12px] rounded-radius20 shadow-bs2 w-[100%]">
                                  <div className="bg-gray_900 flex flex-col h-[60px] items-center justify-start rounded-radius50 w-[60px]">
                                    <Img
                                      src="images/img_map.svg"
                                      className="h-[60px] rounded-tl-[50%] rounded-tr-[50%] w-[60px]"
                                      alt="map"
                                    />
                                  </div>
                                  <div className="flex flex-row gap-[7px] items-center justify-center mt-[7px] w-[auto]">
                                    <Text
                                      className="font-medium font-poppins text-gray_900 text-left w-[auto]"
                                      variant="body9"
                                    >
                                      $47.31
                                    </Text>
                                    <Button
                                      className="cursor-pointer font-bold font-inter leading-[normal] min-w-[62px] text-[16px] text-center text-green_A700 w-[auto]"
                                      shape="RoundedBorder13"
                                      size="sm"
                                      variant="FillGreen51"
                                    >
                                      +63%
                                    </Button>
                                  </div>
                                  <div className="flex flex-col gap-[11px] items-center justify-start mb-[6px] mt-[11px] md:w-[100%] sm:w-[100%] w-[23%]">
                                    <Text
                                      className="font-bold font-poppins text-gray_900 text-left w-[auto]"
                                      variant="body9"
                                    >
                                      0x
                                    </Text>
                                    <Text
                                      className="font-inter font-medium text-gray_900 text-left w-[auto]"
                                      variant="body17"
                                    >
                                      (ZRX)
                                    </Text>
                                  </div>
                                </div>
                              </List>
                              <div className="bg-white_A700 flex flex-col h-[180px] items-center justify-start p-[12px] rounded-radius20 shadow-bs2 w-[180px]">
                                <div className="flex flex-col gap-[7px] items-center justify-start mb-[6px] w-[auto]">
                                  <div className="bg-gray_900 flex flex-col h-[60px] items-center justify-start rounded-radius50 w-[60px]">
                                    <Button
                                      className="flex h-[60px] items-center justify-center rounded-radius50 w-[60px]"
                                      size="xlIcn"
                                      variant="icbFillGray6006c"
                                    >
                                      <Img
                                        src="images/img_location.svg"
                                        className=""
                                        alt="location"
                                      />
                                    </Button>
                                  </div>
                                  <div className="flex flex-row gap-[7px] items-center justify-center w-[auto]">
                                    <Text
                                      className="font-medium font-poppins text-gray_900 text-left w-[auto]"
                                      variant="body9"
                                    >
                                      $1.16
                                    </Text>
                                    <Button
                                      className="cursor-pointer font-bold font-inter leading-[normal] min-w-[62px] text-[16px] text-center text-green_A700 w-[auto]"
                                      shape="RoundedBorder13"
                                      size="sm"
                                      variant="FillGreen51"
                                    >
                                      +58%
                                    </Button>
                                  </div>
                                  <div className="flex flex-col gap-[11px] items-center justify-start md:w-[100%] sm:w-[100%] w-[33%]">
                                    <Text
                                      className="font-bold font-poppins text-gray_900 text-left w-[auto]"
                                      variant="body9"
                                    >
                                      EOS
                                    </Text>
                                    <Text
                                      className="font-inter font-medium text-gray_900 text-left w-[auto]"
                                      variant="body17"
                                    >
                                      (EOS)
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <List
                                className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 grid-cols-3 w-[auto]"
                                orientation="horizontal"
                              >
                                <div className="bg-white_A700 flex flex-col h-[180px] items-center justify-start sm:ml-[0] p-[12px] rounded-radius20 shadow-bs2 w-[100%]">
                                  <div className="bg-gray_900 flex flex-col h-[60px] items-center justify-start rounded-radius50 w-[60px]">
                                    <Img
                                      src="images/img_arrowdown_blue_800.svg"
                                      className="h-[60px] rounded-tl-[50%] rounded-tr-[50%] w-[60px]"
                                      alt="arrowdown"
                                    />
                                  </div>
                                  <div className="flex flex-row gap-[7px] items-center justify-center mt-[7px] w-[auto]">
                                    <Text
                                      className="font-medium font-poppins text-gray_900 text-left w-[auto]"
                                      variant="body9"
                                    >
                                      $32.16
                                    </Text>
                                    <Button
                                      className="cursor-pointer font-bold font-inter leading-[normal] min-w-[63px] text-[16px] text-center text-green_A700 w-[auto]"
                                      shape="RoundedBorder13"
                                      size="sm"
                                      variant="FillGreen51"
                                    >
                                      +44%
                                    </Button>
                                  </div>
                                  <Text
                                    className="font-bold font-poppins mt-[10px] text-gray_900 text-left w-[auto]"
                                    variant="body9"
                                  >
                                    Chainlink
                                  </Text>
                                  <Text
                                    className="font-inter font-medium mb-[6px] mt-[12px] text-gray_900 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    (LINK)
                                  </Text>
                                </div>
                                <div className="bg-white_A700 flex flex-col h-[180px] items-center justify-start sm:ml-[0] p-[12px] rounded-radius20 shadow-bs2 w-[100%]">
                                  <div className="bg-gray_900 flex flex-col h-[60px] items-center justify-start rounded-radius50 w-[60px]">
                                    <Img
                                      src="images/img_home.svg"
                                      className="h-[60px] rounded-tl-[50%] rounded-tr-[50%] w-[60px]"
                                      alt="home"
                                    />
                                  </div>
                                  <div className="flex flex-row gap-[7px] items-center justify-center mt-[7px] w-[auto]">
                                    <Text
                                      className="font-medium font-poppins text-gray_900 text-left w-[auto]"
                                      variant="body9"
                                    >
                                      $13.24
                                    </Text>
                                    <Button
                                      className="cursor-pointer font-bold font-inter leading-[normal] min-w-[61px] text-[16px] text-center text-green_A700 w-[auto]"
                                      shape="RoundedBorder13"
                                      size="sm"
                                      variant="FillGreen51"
                                    >
                                      +37%
                                    </Button>
                                  </div>
                                  <Text
                                    className="font-bold font-poppins mt-[11px] text-gray_900 text-left w-[auto]"
                                    variant="body9"
                                  >
                                    Monero
                                  </Text>
                                  <Text
                                    className="font-inter font-medium mb-[6px] mt-[11px] text-gray_900 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    (XMR)
                                  </Text>
                                </div>
                                <div className="bg-white_A700 flex flex-col h-[180px] items-center justify-start sm:ml-[0] p-[12px] rounded-radius20 shadow-bs2 w-[100%]">
                                  <div className="bg-gray_900 flex flex-col h-[60px] items-center justify-start rounded-radius50 w-[60px]">
                                    <Img
                                      src="images/img_cryptocurrency.png"
                                      className="h-[60px] md:h-[auto] sm:h-[auto] object-cover rounded-tl-[50%] rounded-tr-[50%] w-[60px]"
                                      alt="Cryptocurrency"
                                    />
                                  </div>
                                  <div className="flex flex-row gap-[7px] items-center justify-center mt-[7px] w-[auto]">
                                    <Text
                                      className="font-medium font-poppins text-gray_900 text-left w-[auto]"
                                      variant="body9"
                                    >
                                      $0.23
                                    </Text>
                                    <Button
                                      className="cursor-pointer font-bold font-inter leading-[normal] min-w-[60px] text-[16px] text-center text-green_A700 w-[auto]"
                                      shape="RoundedBorder13"
                                      size="sm"
                                      variant="FillGreen51"
                                    >
                                      +27%
                                    </Button>
                                  </div>
                                  <Text
                                    className="font-bold font-poppins mt-[10px] text-gray_900 text-left w-[auto]"
                                    variant="body9"
                                  >
                                    Radium
                                  </Text>
                                  <Text
                                    className="font-inter font-medium mb-[6px] mt-[12px] text-gray_900 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    (RADS)
                                  </Text>
                                </div>
                              </List>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[885px] w-[100%]">
                        <div className="flex flex-col items-center justify-start p-[35px] sm:px-[20px] w-[100%]">
                          <div className="flex flex-col gap-[58px] items-center justify-start mb-[66px] md:w-[100%] sm:w-[100%] w-[95%]">
                            <div className="flex flex-col items-center justify-start pt-[48px] sm:px-[20px] md:px-[40px] px-[48px] w-[100%]">
                              <div className="flex md:flex-col sm:flex-col flex-row gap-[119px] md:gap-[40px] sm:gap-[40px] items-center justify-between md:w-[100%] sm:w-[100%] w-[auto]">
                                <div className="flex flex-col items-center justify-start sm:w-[100%] w-[auto]">
                                  <Text
                                    className="text-gray_900 text-left w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    Free pools
                                  </Text>
                                  <Text
                                    className="font-bold text-center text-gray_600 w-[auto]"
                                    variant="body7"
                                  >
                                    No need to be a liquidity provider – just
                                    click the Claim button to get tokens.
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-center p-[10px] sm:w-[100%] w-[481px]">
                                  <div className="flex flex-col items-center justify-start w-[auto]">
                                    <Text
                                      className="text-gray_900 text-left w-[auto]"
                                      as="h4"
                                      variant="h4"
                                    >
                                      Mystery pools
                                    </Text>
                                    <Text
                                      className="font-bold text-center text-gray_600 w-[auto]"
                                      variant="body7"
                                    >
                                      Claim 100% free crypto every 15 minutes –
                                      all day, every day. The pools rotate every
                                      24h!{" "}
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between md:w-[100%] sm:w-[100%] w-[89%]">
                              <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                                <div className="bg-white_A700 flex flex-col gap-[21px] items-center justify-end p-[40px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                                  <div className="h-[217px] md:h-[228px] sm:h-[228px] mt-[11px] relative w-[217px]">
                                    <div className="flex flex-col gap-[27px] h-[100%] items-center justify-start m-[auto] w-[56%]">
                                      <Text
                                        className="font-bold text-gray_900 text-left w-[auto]"
                                        variant="body7"
                                      >
                                        13:54
                                      </Text>
                                      <div className="bg-gradient4  flex flex-col font-inter items-start justify-start sm:px-[20px] px-[32px] py-[4px] rounded-radius16 w-[auto]">
                                        <Text
                                          className="font-bold text-left text-white_A700 w-[auto]"
                                          variant="body7"
                                        >
                                          Claim
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="absolute bg-gradient5  h-[217px] inset-[0] justify-center m-[auto] rotate-[-5deg] rounded-radius108 w-[217px]"></div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[100%]">
                                    <div className="flex flex-row items-start justify-between pt-[4px] w-[100%]">
                                      <Text
                                        className="font-bold text-gray_600 text-left w-[auto]"
                                        variant="body7"
                                      >
                                        Reward token
                                      </Text>
                                      <Text
                                        className="font-bold text-gray_900 text-left w-[auto]"
                                        variant="body7"
                                      >
                                        $SODT
                                      </Text>
                                    </div>
                                    <div className="flex flex-row items-start justify-between mt-[10px] w-[100%]">
                                      <Text
                                        className="font-bold mb-[5px] text-gray_600 text-left w-[auto]"
                                        variant="body7"
                                      >
                                        Allocation
                                      </Text>
                                      <Text
                                        className="font-bold mt-[5px] text-gray_900 text-left w-[auto]"
                                        variant="body7"
                                      >
                                        $7,635,213
                                      </Text>
                                    </div>
                                    <Button
                                      className="cursor-pointer font-bold leading-[normal] min-w-[380px] mt-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-purple_A100 w-[auto]"
                                      shape="RoundedBorder10"
                                      size="8xl"
                                      variant="FillGray900"
                                    >
                                      Claim
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                                <div className="bg-white_A700 flex flex-col items-center justify-end p-[35px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                                  <div className="h-[146px] md:h-[179px] sm:h-[179px] mt-[33px] relative w-[100%]">
                                    <div className="absolute bottom-[12%] md:h-[57px] sm:h-[57px] h-[98px] left-[0] w-[55%]">
                                      <div className="absolute bg-gray_900 bottom-[0] flex flex-row gap-[3px] h-[45px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-start mx-[auto] pl-[5px] pr-[8px] py-[4px] rotate-[-2deg] rounded-radius18 w-[205px]">
                                        <Button
                                          className="flex h-[22px] items-center justify-center rotate-[2deg] rounded-radius50 w-[22px]"
                                          size="mdIcn"
                                          variant="icbGradientBlueA200DeeppurpleA700"
                                        >
                                          <Img
                                            src="images/img_settings.svg"
                                            className=""
                                            alt="settings"
                                          />
                                        </Button>
                                        <Text
                                          className="font-medium rotate-[-2deg] text-left text-white_A700 w-[auto]"
                                          variant="body14"
                                        >
                                          You won 0.01 SWP!
                                        </Text>
                                      </div>
                                      <div
                                        className="absolute bg-cover bg-no-repeat flex flex-col inset-x-[0] items-start justify-end mx-[auto] p-[17px] rounded-radius18 top-[0] w-[100%]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group120.svg')",
                                        }}
                                      >
                                        <Text
                                          className="font-medium md:ml-[0] sm:ml-[0] ml-[16px] mt-[2px] rotate-[6deg] text-left text-white_A700 w-[auto]"
                                          variant="body14"
                                        >
                                          You won 2 USDT!
                                        </Text>
                                      </div>
                                    </div>
                                    <Img
                                      src="images/img_illustration.png"
                                      className="absolute h-[146px] inset-[0] justify-center m-[auto] object-cover w-[auto]"
                                      alt="ILLUSTRATION One"
                                    />
                                  </div>
                                  <div
                                    className="h-[15px] mt-[80px] overflow-hidden relative w-[98%]"
                                    name="Group112"
                                  >
                                    <div className="w-full h-full absolute bg-gray_903 rounded-[7px]"></div>
                                    <div
                                      className="h-full absolute bg-gradient-to-r from-[#fe80db] via-[#cc9b1dff] to-[#5f74fd]  rounded-[7px]"
                                      style={{ width: "60%" }}
                                    ></div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start mt-[17px] md:w-[100%] sm:w-[100%] w-[66%]">
                                    <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                                      <Text
                                        className="font-bold text-gray_600 text-left w-[auto]"
                                        variant="body7"
                                      >
                                        Pool closes in:
                                      </Text>
                                      <Text
                                        className="font-bold mt-[4px] text-gray_900 text-left w-[auto]"
                                        variant="body7"
                                      >
                                        1h 5m 42s.
                                      </Text>
                                    </div>
                                  </div>
                                  <Button
                                    className="cursor-pointer font-bold leading-[normal] mb-[5px] min-w-[380px] mt-[18px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-purple_A100 w-[auto]"
                                    shape="RoundedBorder10"
                                    size="8xl"
                                    variant="FillGray900"
                                  >
                                    Claim
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[678px] md:h-[830px] sm:h-[998px] mt-[9px] relative md:w-[100%] sm:w-[100%] w-[89%]">
                        <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-center justify-start left-[0] my-[auto] w-[82%]">
                          <div className="flex flex-col gap-[40px] justify-start w-[100%]">
                            <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[222px] md:w-[100%] sm:w-[100%] w-[78%]">
                              <Text
                                className="text-gray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Liquidity Pools
                              </Text>
                              <Text
                                className="font-bold text-gray_600 text-left w-[auto]"
                                variant="body7"
                              >
                                Deposit assets & stake LP tokens to earn trading
                                fees & farming rewards
                              </Text>
                            </div>
                            <div className="bg-white_A700 flex flex-col items-center justify-start mr-[378px] rounded-radius20 shadow-bs2 md:w-[100%] sm:w-[100%] w-[61%]">
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
                                        className="bg-clip-text bg-gradient4  font-bold text-left text-transparent w-[auto]"
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
                                          className="bg-clip-text bg-gradient4  font-bold text-left text-transparent w-[auto]"
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
                                          className="bg-clip-text bg-gradient4  font-bold text-left text-transparent w-[auto]"
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
                                          className="bg-clip-text bg-gradient4  font-bold text-left text-transparent w-[auto]"
                                          variant="body12"
                                        >
                                          Farm
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <Img
                                    src="images/img_frame98.svg"
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
                                      className="cursor-pointer font-bold leading-[normal] min-w-[92px] text-[16px] text-center text-purple_A100 w-[auto]"
                                      shape="RoundedBorder10"
                                      size="6xl"
                                      variant="FillGray900"
                                    >
                                      Farm
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex md:flex-col sm:flex-col flex-row gap-[20px] inset-x-[0] items-start justify-between mx-[auto] pt-[138px] top-[0] w-[100%]">
                          <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start pb-[302px] md:w-[100%] sm:w-[100%] w-[auto]">
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
                                    className="cursor-pointer font-bold leading-[normal] min-w-[92px] text-[16px] text-center text-purple_A100 w-[auto]"
                                    shape="RoundedBorder10"
                                    size="6xl"
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
                                  className="cursor-pointer font-bold leading-[normal] min-w-[92px] sm:ml-[0] ml-[20px] text-[16px] text-center text-purple_A100 w-[auto]"
                                  shape="RoundedBorder10"
                                  size="6xl"
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
                                  className="cursor-pointer font-bold leading-[normal] min-w-[92px] sm:ml-[0] ml-[20px] text-[16px] text-center text-purple_A100 w-[auto]"
                                  shape="RoundedBorder10"
                                  size="6xl"
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
                                      alt="menu Eight"
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
                                  alt="menu One Two"
                                />
                                <Button
                                  className="cursor-pointer font-bold leading-[normal] min-w-[92px] sm:ml-[0] ml-[20px] text-[16px] text-center text-purple_A100 w-[auto]"
                                  shape="RoundedBorder10"
                                  size="6xl"
                                  variant="FillGray900"
                                >
                                  Farm
                                </Button>
                              </div>
                            </List>
                            <div className="bg-white_A700 flex flex-col justify-end pt-[35px] sm:px-[20px] px-[35px] shadow-bs2 w-[100%]">
                              <Text
                                className="bg-clip-text bg-gradient4  bg-gray_900 font-bold justify-center md:ml-[0] sm:ml-[0] ml-[418px] sm:px-[20px] px-[24px] py-[12px] text-left text-transparent w-[auto]"
                                variant="body12"
                              >
                                Farm
                              </Text>
                              <Img
                                src="images/img_group224.svg"
                                className="h-[1px] md:ml-[0] sm:ml-[0] ml-[358px] mr-[112px] mt-[58px] w-[auto]"
                                alt="Group224"
                              />
                              <div className="flex flex-row gap-[10px] items-center justify-start mr-[auto] mt-[58px] w-[auto]">
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
                              <div className="flex flex-col gap-[26px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[142px] mr-[198px] mt-[59px] md:w-[100%] sm:w-[100%] w-[34%]">
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[1444px] md:h-[1526px] sm:h-[1602px] relative w-[100%]">
                      <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                        <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[97px] items-center justify-start w-[100%]">
                          <div className="flex flex-col gap-[131px] md:gap-[40px] sm:gap-[40px] justify-start w-[100%]">
                            <Text
                              className="leading-[100.00px] md:ml-[0] sm:ml-[0] ml-[180px] text-gray_900 text-left sm:w-[100%] w-[41%]"
                              as="h1"
                              variant="h1"
                            >
                              Boosts up to 1300% APY
                            </Text>
                            <div className="flex flex-col items-center justify-start pr-[12px] py-[12px] w-[100%]">
                              <div className="h-[694px] md:h-[743px] sm:h-[743px] my-[26px] relative w-[100%]">
                                <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[97%]">
                                  <div className="md:h-[691px] sm:h-[691px] h-[694px] relative w-[100%]">
                                    <div className="absolute bg-white_A700 flex flex-col h-[max-content] inset-y-[0] items-start justify-start my-[auto] p-[29px] sm:px-[20px] right-[2%] rounded-radius40 shadow-bs2 w-[94%]">
                                      <Text
                                        className="mb-[553px] mt-[27px] text-gray_900 text-left w-[auto]"
                                        as="h4"
                                        variant="h4"
                                      >
                                        Recent transactions
                                      </Text>
                                    </div>
                                    <div className="absolute flex sm:flex-col flex-row font-inter sm:gap-[20px] inset-x-[0] items-center justify-start mx-[auto] px-[112px] sm:px-[20px] md:px-[40px] top-[21%] w-[100%]">
                                      <Text
                                        className="font-bold text-gray_600 text-left w-[auto]"
                                        variant="body12"
                                      >
                                        Time
                                      </Text>
                                      <Text
                                        className="font-bold sm:ml-[0] ml-[278px] text-gray_600 text-left w-[auto]"
                                        variant="body12"
                                      >
                                        Amount
                                      </Text>
                                      <Text
                                        className="font-bold sm:ml-[0] ml-[245px] text-gray_600 text-left w-[auto]"
                                        variant="body12"
                                      >
                                        Transaction ID
                                      </Text>
                                      <Text
                                        className="font-bold sm:ml-[0] ml-[194px] text-gray_600 text-left w-[auto]"
                                        variant="body12"
                                      >
                                        Type
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute bottom-[0] font-inter md:h-[601px] sm:h-[601px] h-[626px] inset-x-[0] mx-[auto] p-[52px] sm:px-[20px] md:px-[40px] w-[100%]">
                                  <div className="absolute sm:h-[162px] h-[46px] md:h-[auto] inset-x-[0] mx-[auto] top-[9%] md:w-[100%] sm:w-[100%] w-[84%]">
                                    <div className="flex sm:flex-col flex-row gap-[203px] sm:gap-[40px] h-[100%] items-center justify-start m-[auto] pr-[5px] py-[5px] w-[93%]">
                                      <Text
                                        className="font-bold text-gray_400 text-left w-[auto]"
                                        variant="body7"
                                      >
                                        2 hours ago
                                      </Text>
                                      <Text
                                        className="font-bold text-gray_900 text-left w-[auto]"
                                        variant="body7"
                                      >
                                        0.008 BTC
                                      </Text>
                                      <Text
                                        className="font-bold text-gray_900 text-left w-[auto]"
                                        variant="body7"
                                      >
                                        1c2v4a…
                                      </Text>
                                    </div>
                                    <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                                      <div className="bg-gray_903 h-[46px] rounded-radius8 w-[100%]"></div>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-[0] h-[457px] md:h-[601px] sm:h-[601px] left-[9%] md:w-[100%] sm:w-[100%] w-[1014px]">
                                    <div className="absolute flex h-[444px] md:h-[601px] sm:h-[601px] inset-[0] justify-end m-[auto] w-[100%]">
                                      <div className="absolute flex flex-row inset-x-[0] items-center justify-between mx-[auto] pr-[4px] py-[4px] top-[0] w-[100%]">
                                        <Text
                                          className="font-bold text-gray_900 text-left w-[auto]"
                                          variant="body7"
                                        >
                                          2 hours ago
                                        </Text>
                                        <Text
                                          className="font-bold text-gray_900 text-left w-[auto]"
                                          variant="body7"
                                        >
                                          0.008 BTC
                                        </Text>
                                        <Text
                                          className="font-bold text-gray_900 text-left w-[auto]"
                                          variant="body7"
                                        >
                                          1c2v4a…
                                        </Text>
                                        <div className="flex flex-col items-center justify-start mr-[16px] w-[auto]">
                                          <Text
                                            className="font-bold text-gray_900 text-left w-[auto]"
                                            variant="body7"
                                          >
                                            Stake
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[11%] w-[100%]">
                                        <div className="sm:h-[165px] h-[34px] md:h-[88px] relative w-[100%]">
                                          <Text
                                            className="absolute font-bold h-[max-content] inset-y-[0] left-[0] my-[auto] text-gray_900 text-left w-[auto]"
                                            variant="body7"
                                          >
                                            2 hours ago
                                          </Text>
                                          <div className="absolute flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[39%]">
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              0.008 BTC
                                            </Text>
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              1c2v4a…
                                            </Text>
                                          </div>
                                          <div className="flex flex-col h-[100%] items-center justify-start ml-[auto] mt-[3px] w-[auto]">
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              Unstake
                                            </Text>
                                          </div>
                                          <div className="absolute sm:h-[165px] h-[34px] md:h-[88px] inset-[0] justify-center m-[auto] w-[100%]">
                                            <Text
                                              className="absolute font-bold h-[max-content] inset-y-[0] left-[0] my-[auto] text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              2 hours ago
                                            </Text>
                                            <div className="absolute flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[39%]">
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                0.008 BTC
                                              </Text>
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                1c2v4a…
                                              </Text>
                                            </div>
                                            <div className="flex flex-col h-[100%] items-center justify-start ml-[auto] mt-[3px] w-[auto]">
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                Unstake
                                              </Text>
                                            </div>
                                            <div className="absolute flex sm:flex-col flex-row sm:gap-[20px] h-[max-content] inset-[0] items-start justify-center m-[auto] py-[3px] w-[100%]">
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                2 hours ago
                                              </Text>
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                0.008 BTC
                                              </Text>
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                1c2v4a…
                                              </Text>
                                              <div className="flex flex-col items-center justify-start mb-[3px] w-[auto]">
                                                <Text
                                                  className="font-bold text-gray_900 text-left w-[auto]"
                                                  variant="body7"
                                                >
                                                  Unstake
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="absolute flex flex-row inset-x-[0] items-center justify-between mx-[auto] pr-[4px] py-[4px] top-[21%] w-[100%]">
                                        <Text
                                          className="font-bold text-gray_900 text-left w-[auto]"
                                          variant="body7"
                                        >
                                          2 hours ago
                                        </Text>
                                        <Text
                                          className="font-bold text-gray_900 text-left w-[auto]"
                                          variant="body7"
                                        >
                                          0.008 BTC
                                        </Text>
                                        <Text
                                          className="font-bold text-gray_900 text-left w-[auto]"
                                          variant="body7"
                                        >
                                          1c2v4a…
                                        </Text>
                                        <div className="flex flex-col items-center justify-start mr-[16px] w-[auto]">
                                          <Text
                                            className="font-bold text-gray_900 text-left w-[auto]"
                                            variant="body7"
                                          >
                                            Stake
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="absolute flex flex-row inset-x-[0] items-center justify-between mx-[auto] pr-[4px] py-[4px] top-[32%] w-[100%]">
                                        <Text
                                          className="font-bold text-gray_900 text-left w-[auto]"
                                          variant="body7"
                                        >
                                          2 hours ago
                                        </Text>
                                        <Text
                                          className="font-bold text-gray_900 text-left w-[auto]"
                                          variant="body7"
                                        >
                                          0.008 BTC
                                        </Text>
                                        <Text
                                          className="font-bold text-gray_900 text-left w-[auto]"
                                          variant="body7"
                                        >
                                          1c2v4a…
                                        </Text>
                                        <div className="flex flex-col items-center justify-start mr-[16px] w-[auto]">
                                          <Text
                                            className="font-bold text-gray_900 text-left w-[auto]"
                                            variant="body7"
                                          >
                                            Stake
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[42%] w-[100%]">
                                        <div className="sm:h-[165px] h-[34px] md:h-[88px] relative w-[100%]">
                                          <Text
                                            className="absolute font-bold h-[max-content] inset-y-[0] left-[0] my-[auto] text-gray_900 text-left w-[auto]"
                                            variant="body7"
                                          >
                                            2 hours ago
                                          </Text>
                                          <div className="absolute flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[39%]">
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              0.008 BTC
                                            </Text>
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              1c2v4a…
                                            </Text>
                                          </div>
                                          <div className="flex flex-col h-[100%] items-center justify-start ml-[auto] mt-[3px] w-[auto]">
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              Unstake
                                            </Text>
                                          </div>
                                          <div className="absolute sm:h-[165px] h-[34px] md:h-[88px] inset-[0] justify-center m-[auto] w-[100%]">
                                            <Text
                                              className="absolute font-bold h-[max-content] inset-y-[0] left-[0] my-[auto] text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              2 hours ago
                                            </Text>
                                            <div className="absolute flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[39%]">
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                0.008 BTC
                                              </Text>
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                1c2v4a…
                                              </Text>
                                            </div>
                                            <div className="flex flex-col h-[100%] items-center justify-start ml-[auto] mt-[3px] w-[auto]">
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                Unstake
                                              </Text>
                                            </div>
                                            <div className="absolute flex sm:flex-col flex-row sm:gap-[20px] h-[max-content] inset-[0] items-start justify-center m-[auto] py-[3px] w-[100%]">
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                2 hours ago
                                              </Text>
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                0.008 BTC
                                              </Text>
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                1c2v4a…
                                              </Text>
                                              <div className="flex flex-col items-center justify-start mb-[3px] w-[auto]">
                                                <Text
                                                  className="font-bold text-gray_900 text-left w-[auto]"
                                                  variant="body7"
                                                >
                                                  Unstake
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="absolute bottom-[39%] flex flex-row inset-x-[0] items-center justify-between mx-[auto] pr-[4px] py-[4px] w-[100%]">
                                        <Text
                                          className="font-bold text-gray_900 text-left w-[auto]"
                                          variant="body7"
                                        >
                                          2 hours ago
                                        </Text>
                                        <Text
                                          className="font-bold text-gray_900 text-left w-[auto]"
                                          variant="body7"
                                        >
                                          0.008 BTC
                                        </Text>
                                        <Text
                                          className="font-bold text-gray_900 text-left w-[auto]"
                                          variant="body7"
                                        >
                                          1c2v4a…
                                        </Text>
                                        <div className="flex flex-col items-center justify-start mr-[16px] w-[auto]">
                                          <Text
                                            className="font-bold text-gray_900 text-left w-[auto]"
                                            variant="body7"
                                          >
                                            Stake
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="absolute bottom-[29%] flex flex-row inset-x-[0] items-center justify-between mx-[auto] pr-[4px] py-[4px] w-[100%]">
                                        <Text
                                          className="font-bold text-gray_900 text-left w-[auto]"
                                          variant="body7"
                                        >
                                          2 hours ago
                                        </Text>
                                        <Text
                                          className="font-bold text-gray_900 text-left w-[auto]"
                                          variant="body7"
                                        >
                                          0.008 BTC
                                        </Text>
                                        <Text
                                          className="font-bold text-gray_900 text-left w-[auto]"
                                          variant="body7"
                                        >
                                          1c2v4a…
                                        </Text>
                                        <div className="flex flex-col items-center justify-start mr-[16px] w-[auto]">
                                          <Text
                                            className="font-bold text-gray_900 text-left w-[auto]"
                                            variant="body7"
                                          >
                                            Stake
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="flex flex-col h-[100%] items-center justify-start mb-[81px] mt-[auto] mx-[auto] w-[100%]">
                                        <div className="sm:h-[165px] h-[34px] md:h-[88px] relative w-[100%]">
                                          <Text
                                            className="absolute font-bold h-[max-content] inset-y-[0] left-[0] my-[auto] text-gray_900 text-left w-[auto]"
                                            variant="body7"
                                          >
                                            2 hours ago
                                          </Text>
                                          <div className="absolute flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[39%]">
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              0.008 BTC
                                            </Text>
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              1c2v4a…
                                            </Text>
                                          </div>
                                          <div className="flex flex-col h-[100%] items-center justify-start ml-[auto] mt-[3px] w-[auto]">
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              Unstake
                                            </Text>
                                          </div>
                                          <div className="absolute sm:h-[165px] h-[34px] md:h-[88px] inset-[0] justify-center m-[auto] w-[100%]">
                                            <Text
                                              className="absolute font-bold h-[max-content] inset-y-[0] left-[0] my-[auto] text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              2 hours ago
                                            </Text>
                                            <div className="absolute flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[39%]">
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                0.008 BTC
                                              </Text>
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                1c2v4a…
                                              </Text>
                                            </div>
                                            <div className="flex flex-col h-[100%] items-center justify-start ml-[auto] mt-[3px] w-[auto]">
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                Unstake
                                              </Text>
                                            </div>
                                            <div className="absolute flex sm:flex-col flex-row sm:gap-[20px] h-[max-content] inset-[0] items-start justify-center m-[auto] py-[3px] w-[100%]">
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                2 hours ago
                                              </Text>
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                0.008 BTC
                                              </Text>
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                1c2v4a…
                                              </Text>
                                              <div className="flex flex-col items-center justify-start mb-[3px] w-[auto]">
                                                <Text
                                                  className="font-bold text-gray_900 text-left w-[auto]"
                                                  variant="body7"
                                                >
                                                  Unstake
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="absolute flex h-[433px] md:h-[601px] sm:h-[601px] inset-[0] justify-end m-[auto] w-[100%]">
                                        <div className="md:h-[122px] sm:h-[199px] h-[34px] mb-[34px] mt-[auto] mx-[auto] w-[100%]">
                                          <Text
                                            className="absolute font-bold h-[max-content] inset-y-[0] left-[0] my-[auto] text-gray_900 text-left w-[auto]"
                                            variant="body7"
                                          >
                                            2 hours ago
                                          </Text>
                                          <div className="absolute flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[39%]">
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              0.008 BTC
                                            </Text>
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              1c2v4a…
                                            </Text>
                                          </div>
                                          <div className="flex flex-col h-[100%] items-center justify-start ml-[auto] mt-[3px] w-[auto]">
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              Unstake
                                            </Text>
                                          </div>
                                          <div className="absolute flex sm:flex-col flex-row sm:gap-[20px] h-[max-content] inset-[0] items-start justify-center m-[auto] py-[3px] w-[100%]">
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              2 hours ago
                                            </Text>
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              0.008 BTC
                                            </Text>
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              1c2v4a…
                                            </Text>
                                            <div className="flex flex-col items-center justify-start mb-[3px] w-[auto]">
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                Unstake
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                                          <div className="flex flex-col items-start justify-start w-[100%]">
                                            <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[896px] md:w-[100%] sm:w-[100%] w-[2%]">
                                              <div className="bg-green_A700 h-[12px] rounded-radius50 w-[12px]"></div>
                                              <div className="bg-yellow_901 h-[12px] mt-[33px] rounded-radius50 w-[12px]"></div>
                                              <div className="bg-green_A700 h-[12px] mt-[37px] rounded-radius50 w-[12px]"></div>
                                              <div className="bg-green_A700 h-[12px] mt-[35px] rounded-radius50 w-[12px]"></div>
                                              <div className="bg-yellow_901 h-[12px] mt-[33px] rounded-radius50 w-[12px]"></div>
                                              <div className="bg-green_A700 h-[12px] mt-[37px] rounded-radius50 w-[12px]"></div>
                                              <div className="bg-green_A700 h-[12px] mt-[35px] rounded-radius50 w-[12px]"></div>
                                              <div className="bg-yellow_901 h-[12px] mt-[33px] rounded-radius50 w-[12px]"></div>
                                            </div>
                                            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[29px] w-[100%]">
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                2 hours ago
                                              </Text>
                                              <Text
                                                className="font-bold md:ml-[0] sm:ml-[0] ml-[203px] text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                0.008 BTC
                                              </Text>
                                              <Text
                                                className="font-bold md:ml-[0] sm:ml-[0] ml-[203px] text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                1c2v4a…
                                              </Text>
                                              <div className="bg-yellow_901 h-[12px] md:ml-[0] sm:ml-[0] ml-[183px] md:mt-[0] sm:mt-[0] my-[6px] rounded-radius50 w-[12px]"></div>
                                              <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[25px] w-[auto]">
                                                <Text
                                                  className="font-bold text-gray_900 text-left w-[auto]"
                                                  variant="body7"
                                                >
                                                  Unstake
                                                </Text>
                                              </div>
                                            </div>
                                            <div className="bg-yellow_901 h-[12px] md:ml-[0] sm:ml-[0] ml-[896px] mt-[27px] rounded-radius50 w-[12px]"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                                      <div className="sm:h-[165px] h-[34px] md:h-[88px] relative w-[100%]">
                                        <Text
                                          className="absolute font-bold h-[max-content] inset-y-[0] left-[0] my-[auto] text-gray_900 text-left w-[auto]"
                                          variant="body7"
                                        >
                                          2 hours ago
                                        </Text>
                                        <div className="absolute flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[39%]">
                                          <Text
                                            className="font-bold text-gray_900 text-left w-[auto]"
                                            variant="body7"
                                          >
                                            0.008 BTC
                                          </Text>
                                          <Text
                                            className="font-bold text-gray_900 text-left w-[auto]"
                                            variant="body7"
                                          >
                                            1c2v4a…
                                          </Text>
                                        </div>
                                        <div className="flex flex-col h-[100%] items-center justify-start ml-[auto] mt-[3px] w-[auto]">
                                          <Text
                                            className="font-bold text-gray_900 text-left w-[auto]"
                                            variant="body7"
                                          >
                                            Unstake
                                          </Text>
                                        </div>
                                        <div className="absolute sm:h-[165px] h-[34px] md:h-[88px] inset-[0] justify-center m-[auto] w-[100%]">
                                          <Text
                                            className="absolute font-bold h-[max-content] inset-y-[0] left-[0] my-[auto] text-gray_900 text-left w-[auto]"
                                            variant="body7"
                                          >
                                            2 hours ago
                                          </Text>
                                          <div className="absolute flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[39%]">
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              0.008 BTC
                                            </Text>
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              1c2v4a…
                                            </Text>
                                          </div>
                                          <div className="flex flex-col h-[100%] items-center justify-start ml-[auto] mt-[3px] w-[auto]">
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              Unstake
                                            </Text>
                                          </div>
                                          <div className="absolute flex sm:flex-col flex-row sm:gap-[20px] h-[max-content] inset-[0] items-start justify-center m-[auto] py-[3px] w-[100%]">
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              2 hours ago
                                            </Text>
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              0.008 BTC
                                            </Text>
                                            <Text
                                              className="font-bold text-gray_900 text-left w-[auto]"
                                              variant="body7"
                                            >
                                              1c2v4a…
                                            </Text>
                                            <div className="flex flex-col items-center justify-start mb-[3px] w-[auto]">
                                              <Text
                                                className="font-bold text-gray_900 text-left w-[auto]"
                                                variant="body7"
                                              >
                                                Unstake
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
                          <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[81%]">
                            <div className="flex flex-col h-[241px] md:h-[auto] sm:h-[auto] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                              <div className="flex flex-col items-start justify-start w-[100%]">
                                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[50px] sm:gap-[50px] items-center justify-between w-[100%]">
                                  <Text
                                    className="leading-[100.00px] text-gray_900 text-left w-[auto]"
                                    as="h2"
                                    variant="h2"
                                  >
                                    How our referral system works
                                  </Text>
                                  <div className="flex sm:flex-1 flex-col gap-[15px] items-start justify-start sm:w-[100%] w-[auto]">
                                    <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-start w-[100%]">
                                      <div
                                        className="bg-cover bg-no-repeat flex flex-col h-[60px] items-center justify-start p-[9px] w-[60px]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group116.svg')",
                                        }}
                                      >
                                        <Button
                                          className="flex h-[40px] items-center justify-center w-[40px]"
                                          shape="icbRoundedBorder19"
                                          size="mdIcn"
                                          variant="icbFillOrange100"
                                        >
                                          <Img
                                            src="images/img_refresh_orange_a200.svg"
                                            className=""
                                            alt="refresh"
                                          />
                                        </Button>
                                      </div>
                                      <Text
                                        className="font-bold text-gray_900 text-left"
                                        variant="body7"
                                      >
                                        <span className="text-gray_900 text-[20px] font-poppins">
                                          One of the{" "}
                                        </span>
                                        <span className="text-yellow_900 text-[20px] font-poppins">
                                          most generous <br />
                                        </span>
                                        <span className="text-gray_900 text-[20px] font-poppins">
                                          referral programs on any DEX
                                        </span>
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[18px] items-center justify-start w-[auto]">
                                      <Img
                                        src="images/img_google.svg"
                                        className="common-pointer h-[60px] w-[60px]"
                                        onClick={handleNavigate42}
                                        alt="google"
                                      />
                                      <Text
                                        className="font-bold text-center text-gray_900"
                                        variant="body7"
                                      >
                                        <span className="text-gray_900 text-[20px] font-poppins">
                                          Get{" "}
                                        </span>
                                        <span className="text-yellow_900 text-[20px] font-poppins">
                                          10%
                                        </span>
                                        <span className="text-gray_900 text-[20px] font-poppins">
                                          {" "}
                                          of your referrals&#39; <br /> rewards
                                          in farms & pools
                                        </span>
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[18px] items-center justify-start w-[auto]">
                                      <Img
                                        src="images/img_location_yellow_a400.svg"
                                        className="h-[60px] w-[60px]"
                                        alt="location One"
                                      />
                                      <Text
                                        className="font-bold md:max-w-[100%] sm:max-w-[100%] max-w-[231px] text-gray_900 text-left"
                                        variant="body7"
                                      >
                                        Withdraw the balance whenever you wish.
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-row gap-[10px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[2px] w-[auto]">
                                  <Text
                                    className="font-bold text-gray_900 text-left w-[auto]"
                                    variant="body7"
                                  >
                                    Learn more
                                  </Text>
                                  <Img
                                    src="images/img_arrowright_gray_900.svg"
                                    className="h-[11px] w-[7px]"
                                    alt="arrowright Five"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col gap-[15px] items-center justify-start right-[18%] top-[0] w-[auto]">
                        <div className="flex flex-row gap-[18px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_share.svg"
                            className="h-[60px] w-[60px]"
                            alt="share"
                          />
                          <Text
                            className="font-bold text-gray_900 text-left"
                            variant="body7"
                          >
                            Complete easy quests
                            <br />
                            to increase the APY
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[18px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_close_purple_501.svg"
                            className="h-[60px] w-[60px]"
                            alt="close Two"
                          />
                          <Text
                            className="font-bold text-gray_900 text-left"
                            variant="body7"
                          >
                            Each boost works for all
                            <br />
                            eligible farms & pools
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[18px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_volume_purple_501.svg"
                            className="h-[60px] w-[60px]"
                            alt="volume"
                          />
                          <Text
                            className="font-bold md:max-w-[100%] sm:max-w-[100%] max-w-[231px] text-gray_900 text-left"
                            variant="body7"
                          >
                            Combine quests to maximize your boost
                          </Text>
                        </div>
                      </div>
                      <div className="absolute flex flex-row gap-[10px] items-center justify-center left-[14%] top-[14%] w-[auto]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body7"
                        >
                          Learn more
                        </Text>
                        <Img
                          src="images/img_arrowright_gray_900.svg"
                          className="h-[13px] w-[7px]"
                          alt="arrowright Six"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[93%]">
                    <Button
                      className="cursor-pointer font-bold font-poppins leading-[normal] min-w-[396px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-purple_A100 w-[auto]"
                      shape="RoundedBorder23"
                      size="4xl"
                      variant="OutlineGray600"
                    >
                      Earn, Farm, and Swap MORE
                    </Button>
                    <Text
                      className="font-poppins leading-[70.00px] mt-[20px] text-center text-gray_900 sm:w-[100%] w-[96%]"
                      as="h3"
                      variant="h3"
                    >
                      Fed up with low earnings on other DEXes? Swapos has got
                      you covered!
                    </Text>
                    <Text
                      className="font-bold font-poppins text-center text-gray_600 sm:w-[100%] w-[85%]"
                      variant="body4"
                    >
                      The biggest APY boosts on BNB Chain, free pools, a
                      referral system – and of course, cheap swaps.
                    </Text>
                    <Button
                      className="cursor-pointer font-bold font-inter leading-[normal] mt-[50px] text-[16px] text-center text-white_A700 w-[175px]"
                      shape="RoundedBorder23"
                      size="6xl"
                      variant="GradientBlueA200DeeppurpleA700"
                    >
                      Launch app
                    </Button>
                    <div className="flex flex-col font-poppins items-center justify-start mt-[77px] w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[73px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                            <div className="flex flex-col gap-[23px] items-center justify-start md:w-[100%] sm:w-[100%] w-[22%]">
                              <Text
                                className="font-bold text-gray_600 text-left w-[auto]"
                                variant="body4"
                              >
                                Total Value Locked
                              </Text>
                              <Text
                                className="text-gray_900 text-left w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                $47.25M
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[23px] justify-start md:w-[100%] sm:w-[100%] w-[22%]">
                              <Text
                                className="font-bold text-gray_600 text-left w-[auto]"
                                variant="body4"
                              >
                                Total Trade Volume
                              </Text>
                              <Text
                                className="md:ml-[0] sm:ml-[0] ml-[23px] text-gray_900 text-left w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                $1.38B
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[23px] justify-start md:w-[100%] sm:w-[100%] w-[21%]">
                              <Text
                                className="font-bold md:ml-[0] sm:ml-[0] ml-[64px] text-gray_600 text-left w-[auto]"
                                variant="body4"
                              >
                                APY (%)
                              </Text>
                              <Text
                                className="text-gray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                <span className="sm:text-[20px] md:text-[22px] text-gray_900 text-[24px] font-poppins font-bold">
                                  up to
                                </span>
                                <span className="sm:text-[36px] md:text-[38px] text-gray_900 text-[40px] font-poppins font-bold">
                                  {" "}
                                </span>
                                <span className="sm:text-[48px] md:text-[48px] text-gray_900 text-[60px] font-poppins font-bold">
                                  400%
                                </span>
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[23px] items-center justify-start md:w-[100%] sm:w-[100%] w-[23%]">
                              <Text
                                className="font-bold text-gray_600 text-left w-[auto]"
                                variant="body4"
                              >
                                Extra APY (%)
                              </Text>
                              <Text
                                className="bg-clip-text bg-gradient8  text-left text-transparent w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                <span className="sm:text-[20px] md:text-[22px] text-gray_900 text-[24px] font-poppins font-bold">
                                  up to
                                </span>
                                <span className="sm:text-[36px] md:text-[38px] text-gray_900 text-[40px] font-poppins font-bold">
                                  {" "}
                                </span>
                                <span className="sm:text-[48px] md:text-[48px] text-gray_900 text-[60px] font-poppins font-bold">
                                  1300%
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
              <div className="absolute flex flex-col items-center justify-start right-[6%] top-[37%] w-[72%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[40px] justify-start w-[100%]">
                    <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[79%]">
                      <Text
                        className="text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        The advantages of Swapos DeFi
                      </Text>
                      <Text
                        className="font-bold text-gray_600 text-left w-[auto]"
                        variant="body7"
                      >
                        Much more than a DEX: Swapos is the best way to start
                        earning with DeFi
                      </Text>
                    </div>
                    <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-center justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[82%]">
                      <div className="bg-white_A700 flex flex-col items-start justify-start p-[27px] sm:px-[20px] rounded-radius20 shadow-bs2 md:w-[100%] sm:w-[100%] w-[49%]">
                        <Text
                          className="font-bold md:ml-[0] sm:ml-[0] ml-[4px] text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          Boost your yield
                        </Text>
                        <Text
                          className="font-bold md:ml-[0] sm:ml-[0] ml-[5px] mt-[5px] text-gray_600 text-left sm:w-[100%] w-[82%]"
                          variant="body12"
                        >
                          Complete daily tasks and invite friends to maximize
                          the farming gains.
                        </Text>
                        <Text
                          className="md:ml-[0] sm:ml-[0] ml-[29px] mt-[113px] text-gray_900 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <span className="text-gray_900 text-[20px] font-poppins font-bold">
                            up to
                          </span>
                          <span className="sm:text-[21px] md:text-[23px] text-gray_900 text-[25px] font-poppins font-bold">
                            {" "}
                          </span>
                          <span className="sm:text-[36px] md:text-[38px] text-purple_A100 text-[40px] font-poppins font-bold">
                            400% APY
                          </span>
                        </Text>
                        <Img
                          src="images/img_vector_125x199.png"
                          className="h-[125px] md:h-[auto] sm:h-[auto] mb-[122px] md:ml-[0] sm:ml-[0] ml-[62px] mt-[57px] object-cover sm:w-[100%] w-[auto]"
                          alt="Vector One"
                        />
                      </div>
                      <div className="flex flex-col gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[49%]">
                        <div className="bg-white_A700 flex flex-col items-start justify-start p-[26px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                          <div className="flex flex-col gap-[49px] justify-start mb-[3px] md:ml-[0] sm:ml-[0] ml-[3px] md:w-[100%] sm:w-[100%] w-[81%]">
                            <div className="flex flex-col gap-[11px] items-start justify-start mr-[18px] md:w-[100%] sm:w-[100%] w-[95%]">
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body4"
                              >
                                Trade tokens
                              </Text>
                              <Text
                                className="font-bold text-gray_600 text-left w-[100%]"
                                variant="body12"
                              >
                                Swap tokens on BSC across dozens of highly
                                liquid pools.
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[6px] items-center justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[80%]">
                              <Img
                                src="images/img_arrow2.png"
                                className="h-[73px] md:h-[auto] sm:h-[auto] object-cover w-[auto]"
                                alt="ArrowTwo"
                              />
                              <div className="flex flex-col gap-[34px] items-center justify-start w-[59%]">
                                <div className="bg-white_A700 flex flex-col h-[38px] md:h-[auto] sm:h-[auto] items-start justify-start px-[6px] py-[3px] rounded-radius19 shadow-bs w-[122px]">
                                  <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                    <Img
                                      src="images/img_arrowdown_teal_400.svg"
                                      className="h-[26px] w-[26px]"
                                      alt="arrowdown One"
                                    />
                                    <Text
                                      className="font-medium text-gray_900 text-left w-[auto]"
                                      variant="body7"
                                    >
                                      USDT
                                    </Text>
                                    <Img
                                      src="images/img_arrowup_gray_900_16x16.svg"
                                      className="h-[16px] w-[16px]"
                                      alt="arrowup Two"
                                    />
                                  </div>
                                </div>
                                <div className="bg-white_A700 flex flex-row gap-[9px] items-center justify-start p-[6px] rounded-radius19 shadow-bs w-[100%]">
                                  <div className="bg-gradient2  flex flex-col h-[26px] items-center justify-end p-[4px] rounded-radius50 w-[26px]">
                                    <Img
                                      src="images/img_refresh.svg"
                                      className="h-[16px] w-[auto]"
                                      alt="refresh One"
                                    />
                                  </div>
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body7"
                                  >
                                    SWP
                                  </Text>
                                  <Img
                                    src="images/img_arrowup_gray_900_16x16.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="arrowup Three"
                                  />
                                </div>
                              </div>
                              <Img
                                src="images/img_arrow3.png"
                                className="h-[73px] md:h-[auto] sm:h-[auto] object-cover w-[auto]"
                                alt="ArrowThree"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-start justify-center p-[24px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                          <Text
                            className="font-bold md:ml-[0] sm:ml-[0] ml-[6px] text-gray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            Low fees. Zero for stables.
                          </Text>
                          <Text
                            className="font-bold md:ml-[0] sm:ml-[0] ml-[7px] mt-[7px] text-gray_600 text-left sm:w-[100%] w-[83%]"
                            variant="body12"
                          >
                            The lowest swapping fees of any DEX on BNB Chain
                          </Text>
                          <div className="flex flex-row items-start justify-start md:ml-[0] sm:ml-[0] ml-[40px] my-[25px] w-[auto]">
                            <div className="h-[118px] md:h-[auto] sm:h-[auto] px-[11px] relative w-[50%]">
                              <div className="absolute bg-gradient8  p-[2px] rounded-radius15 w-[83%] ">
                                <div className="bg-white_A700 border-solid h-[118px] m-[auto] rounded-radius15"></div>
                              </div>
                              <div className="absolute flex flex-col gap-[15px] inset-x-[0] items-center justify-start mx-[auto] top-[14%] w-[70%]">
                                <div className="flex flex-row gap-[5px] items-center justify-between md:w-[100%] sm:w-[100%] w-[95%]">
                                  <Text
                                    className="text-gray_900 text-left w-[auto]"
                                    variant="body8"
                                  >
                                    0.00%
                                  </Text>
                                  <Button
                                    className="flex h-[20px] items-center justify-center w-[20px]"
                                    shape="icbCircleBorder11"
                                    size="mdIcn"
                                    variant="icbGradientDeeppurpleA202PinkA100"
                                  >
                                    <Img
                                      src="images/img_checkmark_white_a700.svg"
                                      className="h-[8px]"
                                      alt="checkmark One"
                                    />
                                  </Button>
                                </div>
                                <Text
                                  className="font-medium text-center text-gray_900 w-[100%]"
                                  variant="body17"
                                >
                                  Stablecoin swaps
                                </Text>
                              </div>
                            </div>
                            <div className="h-[118px] md:h-[auto] sm:h-[auto] px-[11px] relative w-[50%]">
                              <div className="bg-white_A700 border border-gray_600_4c border-solid h-[118px] m-[auto] rounded-radius15 w-[83%]"></div>
                              <div className="absolute flex flex-col gap-[15px] inset-x-[0] items-center justify-start mx-[auto] top-[15%] w-[71%]">
                                <Text
                                  className="text-gray_900 text-left w-[auto]"
                                  variant="body8"
                                >
                                  0.01%
                                </Text>
                                <Text
                                  className="font-medium text-center text-gray_900 w-[100%]"
                                  variant="body17"
                                >
                                  Uncorrelated swaps
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
            <div className="absolute flex flex-col gap-[2285px] md:gap-[40px] sm:gap-[40px] justify-start left-[6%] top-[1%] w-[34%]">
              <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[357px] md:w-[100%] sm:w-[100%] w-[19%]">
                <div className="bg-gradient8  p-[1px] rounded-radius10 w-[100%] ">
                  <div className="bg-white_A700 border-solid flex flex-col gap-[7px] items-start justify-start px-[15px] py-[9px] rounded-radius10 shadow-bs5">
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      Farms
                    </Text>
                    <a
                      className="font-medium text-[16px] text-gray_900 text-left underline w-[auto]"
                      href="#"
                    >
                      Pools
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-start justify-start mr-[58px] p-[9px] rounded-radius20 shadow-bs2 md:w-[100%] sm:w-[100%] w-[87%]">
                <Text
                  className="font-bold md:ml-[0] sm:ml-[0] ml-[23px] mt-[18px] text-gray_900 text-left w-[auto]"
                  variant="body4"
                >
                  Farming & Staking
                </Text>
                <Text
                  className="font-bold md:ml-[0] sm:ml-[0] ml-[24px] mt-[5px] text-gray_600 text-left sm:w-[100%] w-[94%]"
                  variant="body12"
                >
                  Passive income from farming and staking on the Earn page
                </Text>
                <Img
                  src="images/img_group449.svg"
                  className="h-[235px] mb-[128px] md:ml-[0] sm:ml-[0] ml-[58px] mt-[137px] w-[auto]"
                  alt="Group449"
                />
              </div>
            </div>
          </div>
          <Img
            src="images/img_cursor_white_a701.svg"
            className="absolute h-[20px] left-[35%] top-[2%] w-[auto]"
            alt="cursor"
          />
        </div>
        <footer className="bg-gray_900 flex items-center justify-center w-[100%]">
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
                            alt="refresh Two"
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
                        variant="GradientDeeppurple400Purple300"
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
                    onClick={handleNavigate38}
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
                    onClick={handleNavigate39}
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

export default Swaptos1326Page;
