import React from "react";

import { Text, Img, Switch, Button, Line, List, Input } from "components";

const UIKitFarmsPagePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-start justify-start mx-[auto] p-[82px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mb-[503px] mt-[479px] md:w-[100%] sm:w-[100%] w-[91%]">
          <div className="flex flex-col items-start justify-start md:mt-[0] sm:mt-[0] mt-[419px] p-[10px] sm:w-[100%] w-[auto]">
            <div className="flex flex-col gap-[51px] items-center justify-start w-[auto]">
              <div className="border border-deep_purple_A200 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-between p-[20px] rounded-radius5 w-[100%]">
                <div className="bg-green_51 flex flex-row gap-[10px] items-center justify-start px-[12px] py-[3px] rounded-radius13 w-[auto]">
                  <div className="bg-green_A700 h-[8px] rounded-radius50 w-[8px]"></div>
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    variant="body14"
                  >
                    Active
                  </Text>
                </div>
                <div className="bg-lime_A200_4c flex flex-row gap-[10px] items-center justify-start px-[12px] py-[3px] rounded-radius13 w-[auto]">
                  <div className="bg-amber_A400 h-[8px] rounded-radius50 w-[8px]"></div>
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    variant="body14"
                  >
                    Moderation
                  </Text>
                </div>
                <div className="bg-red_A700_4c flex flex-row gap-[10px] items-center justify-start px-[12px] py-[3px] rounded-radius13 w-[auto]">
                  <div className="bg-red_A700 h-[8px] rounded-radius50 w-[8px]"></div>
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    variant="body14"
                  >
                    Canceled
                  </Text>
                </div>
                <div className="bg-gradient13  flex flex-row gap-[10px] items-center justify-start px-[12px] py-[3px] rounded-radius13 w-[auto]">
                  <div className="bg-gradient4  h-[8px] rounded-radius50 w-[8px]"></div>
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    variant="body14"
                  >
                    Activate
                  </Text>
                </div>
              </div>
              <div className="border border-deep_purple_A200 border-solid flex flex-col gap-[23px] items-center justify-start p-[20px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[63%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[11px] md:w-[100%] sm:w-[100%] w-[72%]"
                  style={{ backgroundImage: "url('images/img_group4.svg')" }}
                >
                  <div className="flex flex-row gap-[6px] items-start justify-start w-[auto]">
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
                <Img
                  src="images/img_property1on.png"
                  className="h-[46px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[auto]"
                  alt="Property1on"
                />
              </div>
              <div className="border border-deep_purple_A200 border-solid flex flex-col gap-[31px] items-start justify-start p-[20px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[19%]">
                <Switch value={false} className="w-[82%]" />
                <Switch value={true} className="w-[82%]" />
              </div>
              <div className="border border-deep_purple_A200 border-solid flex flex-col gap-[26px] items-center justify-start p-[20px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[37%]">
                <div className="bg-gray_903 flex flex-row gap-[12px] items-center justify-start pr-[12px] rounded-radius16 w-[100%]">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[14px] text-center text-white_A700 w-[68px]"
                    shape="CircleBorder16"
                    size="3xl"
                    variant="GradientBlueA200b2DeeppurpleA700b2"
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
                <div className="bg-gray_903 flex flex-row gap-[12px] items-center justify-center pl-[12px] rounded-radius16 w-[100%]">
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    variant="body14"
                  >
                    Active
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[83px] text-[14px] text-center text-white_A700 w-[auto]"
                    shape="CircleBorder16"
                    size="3xl"
                    variant="GradientBlueA200b2DeeppurpleA700b2"
                  >
                    Finished
                  </Button>
                </div>
              </div>
              <div className="border border-deep_purple_A200 border-solid flex flex-col gap-[37px] items-center justify-start p-[20px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[41%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
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
                        alt="arrowup"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-end p-[11px] w-[100%]"
                      style={{
                        backgroundImage:
                          "url('images/img_group4_white_a700.png')",
                      }}
                    >
                      <div className="flex flex-row items-start justify-between mt-[4px] md:w-[100%] sm:w-[100%] w-[83%]">
                        <Text
                          className="font-medium mt-[2px] text-gray_900_7f text-left w-[auto]"
                          variant="body12"
                        >
                          Sort by:
                        </Text>
                        <Img
                          src="images/img_arrowup_gray_900_16x16.svg"
                          className="h-[16px] w-[16px]"
                          alt="arrowup One"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-start pb-[10px] px-[10px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_popup.png')" }}
                  >
                    <div className="flex flex-col justify-start mb-[11px] w-[100%]">
                      <Text
                        className="bg-bluegray_101 font-medium h-[26px] pl-[13px] sm:pr-[20px] pr-[35px] py-[4px] rounded-radius5 text-gray_900 text-left w-[154px]"
                        variant="body12"
                      >
                        Hot
                      </Text>
                      <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[14px] mt-[2px] md:w-[100%] sm:w-[100%] w-[50%]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          APR
                        </Text>
                        <Text
                          className="font-medium mt-[9px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Multiplier
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Earned
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-deep_purple_A200 border-solid flex flex-col gap-[10px] items-center justify-start p-[20px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[28%]">
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
                  variant="FillGray900"
                >
                  <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-left text-white_A700">
                    Extra Yield
                  </div>
                </Button>
              </div>
              <div className="border border-deep_purple_A200 border-solid flex flex-col gap-[10px] items-center justify-start p-[20px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[31%]">
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
                <Text
                  className="bg-gray_900 font-medium justify-center px-[10px] py-[2px] rounded-radius12 text-gray_900 text-left w-[auto]"
                  variant="body14"
                >
                  <span className="text-white_A700 text-[14px] font-poppins">
                    Multiplier
                  </span>
                  <span className="text-gray_900 text-[14px] font-poppins">
                    {" "}
                  </span>
                  <span className="text-purple_A100 text-[14px] font-poppins">
                    6.1X
                  </span>
                </Text>
              </div>
              <div className="border border-black_900_33 border-solid flex md:h-[16px] sm:h-[16px] h-[46px] justify-end p-[10px] relative rounded-radius5 md:w-[100%] sm:w-[100%] w-[35%]">
                <Line className="bg-gray_900 h-[2px] mb-[10px] ml-[auto] mr-[10px] mt-[auto] w-[20%]" />
                <div className="absolute flex flex-row h-[max-content] inset-[0] items-center justify-center m-[auto] w-[89%]">
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
              <div className="border border-deep_purple_A200 border-solid flex flex-col gap-[25px] items-center justify-start p-[20px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[18%]">
                <div className="bg-blue_A200_4c flex flex-col h-[22px] md:h-[auto] sm:h-[auto] items-center justify-center px-[8px] py-[2px] rounded-radius3 w-[53px]">
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-[16px] w-[16px]"
                    alt="arrowdown"
                  />
                </div>
                <div className="bg-gray_903 flex flex-col h-[22px] md:h-[auto] sm:h-[auto] items-center justify-center px-[8px] py-[2px] rounded-radius3 w-[53px]">
                  <Img
                    src="images/img_arrowup.svg"
                    className="h-[16px] w-[16px]"
                    alt="arrowup Two"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[44px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[292px] md:w-[100%] sm:w-[100%] w-[18%]">
            <div className="flex flex-col gap-[49px] items-center justify-start md:w-[100%] sm:w-[100%] w-[94%]">
              <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius20 shadow-bs2 md:w-[100%] sm:w-[100%] w-[88%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[11px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group2.svg')" }}
                >
                  <div className="flex flex-col gap-[7px] items-center justify-start mb-[12px] mt-[16px] md:w-[100%] sm:w-[100%] w-[99%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_materialsymbolsrocketlaunch.png"
                        className="h-[30px] md:h-[auto] sm:h-[auto] mb-[2px] object-cover w-[30px]"
                        alt="materialsymbol"
                      />
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        variant="body4"
                      >
                        Boost your yield!
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[93%]">
                      <div className="bg-green_51 flex flex-row font-poppins gap-[5px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[2px] px-[12px] py-[3px] rounded-radius13 w-[auto]">
                        <div className="bg-green_A700 h-[8px] rounded-radius50 w-[8px]"></div>
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          Active
                        </Text>
                      </div>
                      <Text
                        className="font-medium font-poppins md:ml-[0] sm:ml-[0] ml-[2px] mt-[5px] text-gray_900 text-left w-[100%]"
                        variant="body12"
                      >
                        <span className="text-gray_900 text-[16px]">
                          Up to{" "}
                        </span>
                        <span className="text-deep_purple_A202 text-[16px]">
                          1300% APY
                        </span>
                        <span className="text-gray_900 text-[16px]">
                          {" "}
                          with special boosts
                        </span>
                        <span className="text-gray_900 text-[16px]">. </span>
                        <span className="text-deep_purple_A202 text-[16px]">
                          Stake{" "}
                        </span>
                        <span className="text-deep_purple_A202 text-[16px]">
                          SWP
                        </span>
                        <span className="text-gray_900 text-[16px]">
                          {" "}
                          & complete daily quests!
                        </span>
                      </Text>
                      <div className="flex flex-col font-poppins items-center justify-start mt-[10px] w-[100%]">
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
                                  src="images/img_question_white_a700.svg"
                                  className="h-[11px] w-[11px]"
                                  alt="question"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold font-inter leading-[normal] md:ml-[0] sm:ml-[0] ml-[2px] mt-[10px] text-[16px] text-center text-white_A700 w-[217px]"
                        shape="RoundedBorder23"
                        size="6xl"
                        variant="GradientPurpleA100IndigoA200"
                      >
                        Connect wallet
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="border border-deep_purple_A200 border-solid flex-col gap-[35px] grid items-center p-[20px] rounded-radius5 w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                  <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius20 shadow-bs2 w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[11px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group2.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[7px] items-center justify-start mb-[12px] mt-[16px] md:w-[100%] sm:w-[100%] w-[99%]">
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                          <Img
                            src="images/img_materialsymbolsrocketlaunch.png"
                            className="h-[30px] md:h-[auto] sm:h-[auto] mb-[2px] object-cover w-[30px]"
                            alt="materialsymbol One"
                          />
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            Boost your yield!
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[93%]">
                          <div className="bg-green_51 flex flex-row font-poppins gap-[5px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[2px] px-[12px] py-[3px] rounded-radius13 w-[auto]">
                            <div className="bg-green_A700 h-[8px] rounded-radius50 w-[8px]"></div>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body14"
                            >
                              Active
                            </Text>
                          </div>
                          <Text
                            className="font-medium font-poppins md:ml-[0] sm:ml-[0] ml-[2px] mt-[5px] text-gray_900 text-left w-[100%]"
                            variant="body12"
                          >
                            <span className="text-gray_900 text-[16px]">
                              Up to{" "}
                            </span>
                            <span className="text-deep_purple_A202 text-[16px]">
                              1300% APY
                            </span>
                            <span className="text-gray_900 text-[16px]">
                              {" "}
                              with special boosts
                            </span>
                            <span className="text-gray_900 text-[16px]">
                              .{" "}
                            </span>
                            <span className="text-deep_purple_A202 text-[16px]">
                              Stake{" "}
                            </span>
                            <span className="text-deep_purple_A202 text-[16px]">
                              SWP
                            </span>
                            <span className="text-gray_900 text-[16px]">
                              {" "}
                              & complete daily quests!
                            </span>
                          </Text>
                          <div className="flex flex-col font-poppins items-center justify-start mt-[10px] w-[100%]">
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
                                      src="images/img_question_white_a700.svg"
                                      className="h-[11px] w-[11px]"
                                      alt="question One"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer font-bold font-inter leading-[normal] md:ml-[0] sm:ml-[0] ml-[2px] mt-[10px] text-[16px] text-center text-white_A700 w-[217px]"
                            shape="RoundedBorder23"
                            size="6xl"
                            variant="GradientPurpleA100IndigoA200"
                          >
                            Connect wallet
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                  <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius20 shadow-bs2 w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[11px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group2.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[7px] items-center justify-start mb-[12px] mt-[16px] md:w-[100%] sm:w-[100%] w-[99%]">
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                          <Img
                            src="images/img_materialsymbolsrocketlaunch.png"
                            className="h-[30px] md:h-[auto] sm:h-[auto] mb-[2px] object-cover w-[30px]"
                            alt="materialsymbol Two"
                          />
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            Boost your yield!
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[93%]">
                          <div className="bg-green_51 flex flex-row font-poppins gap-[5px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[2px] px-[12px] py-[3px] rounded-radius13 w-[auto]">
                            <div className="bg-green_A700 h-[8px] rounded-radius50 w-[8px]"></div>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body14"
                            >
                              Active
                            </Text>
                          </div>
                          <Text
                            className="font-medium font-poppins md:ml-[0] sm:ml-[0] ml-[2px] mt-[5px] text-gray_900 text-left w-[100%]"
                            variant="body12"
                          >
                            <span className="text-gray_900 text-[16px]">
                              Up to{" "}
                            </span>
                            <span className="text-deep_purple_A202 text-[16px]">
                              1300% APY
                            </span>
                            <span className="text-gray_900 text-[16px]">
                              {" "}
                              with special boosts
                            </span>
                            <span className="text-gray_900 text-[16px]">
                              .{" "}
                            </span>
                            <span className="text-deep_purple_A202 text-[16px]">
                              Stake{" "}
                            </span>
                            <span className="text-deep_purple_A202 text-[16px]">
                              SWP
                            </span>
                            <span className="text-gray_900 text-[16px]">
                              {" "}
                              & complete daily quests!
                            </span>
                          </Text>
                          <div className="flex flex-col font-poppins items-center justify-start mt-[10px] w-[100%]">
                            <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                              <div
                                className="h-[15px] overflow-hidden relative w-[96%]"
                                name="GroupThree Two"
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
                                      src="images/img_question_white_a700.svg"
                                      className="h-[11px] w-[11px]"
                                      alt="question Two"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer font-bold font-inter leading-[normal] md:ml-[0] sm:ml-[0] ml-[2px] mt-[10px] text-[16px] text-center text-white_A700 w-[217px]"
                            shape="RoundedBorder23"
                            size="6xl"
                            variant="GradientPurpleA100IndigoA200"
                          >
                            Boost APR
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                  <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius20 shadow-bs2 w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[11px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group2.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[7px] items-center justify-start mb-[12px] mt-[16px] md:w-[100%] sm:w-[100%] w-[99%]">
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                          <Img
                            src="images/img_materialsymbolsrocketlaunch.png"
                            className="h-[30px] md:h-[auto] sm:h-[auto] mb-[2px] object-cover w-[30px]"
                            alt="materialsymbol Three"
                          />
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            Boost your yield!
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[93%]">
                          <div className="bg-green_51 flex flex-row font-poppins gap-[5px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[2px] px-[12px] py-[3px] rounded-radius13 w-[auto]">
                            <div className="bg-green_A700 h-[8px] rounded-radius50 w-[8px]"></div>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body14"
                            >
                              Active
                            </Text>
                          </div>
                          <Text
                            className="font-medium font-poppins md:ml-[0] sm:ml-[0] ml-[2px] mt-[5px] text-gray_900 text-left w-[100%]"
                            variant="body12"
                          >
                            <span className="text-gray_900 text-[16px]">
                              Up to{" "}
                            </span>
                            <span className="text-deep_purple_A202 text-[16px]">
                              1300% APY
                            </span>
                            <span className="text-gray_900 text-[16px]">
                              {" "}
                              with special boosts
                            </span>
                            <span className="text-gray_900 text-[16px]">
                              .{" "}
                            </span>
                            <span className="text-deep_purple_A202 text-[16px]">
                              Stake{" "}
                            </span>
                            <span className="text-deep_purple_A202 text-[16px]">
                              SWP
                            </span>
                            <span className="text-gray_900 text-[16px]">
                              {" "}
                              & complete daily quests!
                            </span>
                          </Text>
                          <div className="flex flex-col font-poppins items-center justify-start mt-[10px] w-[100%]">
                            <div className="flex flex-col items-center justify-start w-[100%]">
                              <div className="md:h-[18px] sm:h-[18px] h-[24px] relative w-[100%]">
                                <div
                                  className="absolute h-[15px] left-[0] overflow-hidden top-[0] w-[96%]"
                                  name="GroupThree Three"
                                >
                                  <div className="w-full h-full absolute bg-bluegray_101 rounded-[7px]"></div>
                                  <div
                                    className="h-full absolute bg-gradient-to-r from-[#fe80db] via-[#cc9b1dff] to-[#5f74fd]  rounded-[7px]"
                                    style={{ width: "54%" }}
                                  ></div>
                                </div>
                                <Text
                                  className="absolute bg-gray_601 bottom-[0] font-medium h-[18px] justify-center px-[12px] py-[2px] right-[0] rounded-radius9 text-left text-white_A700 w-[111px]"
                                  variant="body17"
                                >
                                  GMT timezone
                                </Text>
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
                                      src="images/img_question_white_a700.svg"
                                      className="h-[11px] w-[11px]"
                                      alt="question Three"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer font-bold font-inter leading-[normal] md:ml-[0] sm:ml-[0] ml-[2px] mt-[10px] text-[16px] text-center text-white_A700 w-[217px]"
                            shape="RoundedBorder23"
                            size="6xl"
                            variant="GradientPurpleA100IndigoA200"
                          >
                            Connect wallet
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <List
              className="flex-col gap-[30px] grid items-start w-[auto]"
              orientation="vertical"
            >
              <div className="bg-white_A700 flex flex-col items-center justify-start my-[0] rounded-radius15 shadow-bs2 w-[100%]">
                <div className="flex flex-col gap-[19px] items-center justify-start pb-[30px] rounded-radius15 w-[100%]">
                  <div className="md:h-[469px] sm:h-[469px] h-[483px] relative w-[100%]">
                    <div className="absolute flex flex-col gap-[21px] h-[max-content] inset-[0] items-center justify-center m-[auto] pb-[5px] w-[100%]">
                      <div className="h-[120px] md:h-[auto] sm:h-[auto] relative w-[100%]">
                        <div className="flex flex-row gap-[10px] h-[100%] items-center justify-center mt-[30px] mx-[auto] w-[auto]">
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
                        <div className="absolute flex flex-row h-[max-content] inset-[0] items-start justify-center m-[auto] w-[100%]">
                          <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] rotate-[90deg] rounded-radius29 w-[8%]"></div>
                          <div className="flex flex-col items-center justify-start ml-[29px] mt-[78px] w-[68%]">
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
                          <div className="backdrop-opacity-[0.5] bg-pink_500 blur-[120.00px] h-[120px] ml-[54px] rotate-[90deg] rounded-radius60 w-[1%]"></div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[89%]">
                        <div className="font-poppins md:h-[177px] sm:h-[177px] h-[189px] relative w-[100%]">
                          <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[91%]">
                            <div className="flex flex-col items-start justify-start w-[100%]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                Available
                              </Text>
                              <div className="flex flex-row items-start justify-between mt-[8px] w-[100%]">
                                <Text
                                  className="font-bold text-gray_900 text-left w-[auto]"
                                  variant="body12"
                                >
                                  0.00 SWP
                                </Text>
                                <Text
                                  className="font-bold mt-[2px] text-blue_A201 text-left w-[auto]"
                                  variant="body12"
                                >
                                  Supply
                                </Text>
                              </div>
                              <Text
                                className="font-medium text-green_A700 text-left w-[auto]"
                                variant="body14"
                              >
                                $0.0000
                              </Text>
                            </div>
                          </div>
                          <div className="absolute md:h-[177px] sm:h-[177px] h-[180px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                            <div className="md:h-[177px] sm:h-[177px] h-[180px] m-[auto] w-[100%]">
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
                              <Img
                                src="images/img_group223.svg"
                                className="absolute h-[177px] inset-y-[0] my-[auto] right-[0] w-[auto]"
                                alt="Group223"
                              />
                            </div>
                            <div className="absolute flex flex-row gap-[20px] inset-x-[0] items-center justify-between mx-[auto] top-[34%] w-[100%]">
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
                        <Button
                          className="cursor-pointer font-bold font-poppins leading-[normal] min-w-[113px] md:ml-[0] sm:ml-[0] ml-[189px] mt-[28px] text-[16px] text-center text-gray_400 w-[auto]"
                          shape="RoundedBorder10"
                          size="7xl"
                          variant="FillGray90088"
                        >
                          Harvest
                        </Button>
                      </div>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col items-start justify-start left-[6%] w-[26%]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body14"
                      >
                        SWP Earned
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
                  </div>
                  <div className="bg-blue_A200_4c flex flex-col h-[22px] md:h-[auto] sm:h-[auto] items-center justify-center px-[8px] py-[2px] rounded-radius3 w-[53px]">
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowdown One"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-center justify-start my-[0] rounded-radius15 shadow-bs2 w-[100%]">
                <div className="flex flex-col items-center justify-start pb-[30px] rounded-radius15 w-[100%]">
                  <div className="flex flex-col gap-[21px] items-center justify-start w-[100%]">
                    <div className="h-[120px] md:h-[auto] sm:h-[auto] relative w-[100%]">
                      <div className="flex flex-col h-[100%] items-center justify-start mt-[30px] mx-[auto] w-[61%]">
                        <div className="flex flex-row gap-[10px] items-center justify-center w-[207px]">
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
                      <div className="absolute flex flex-row h-[max-content] inset-[0] items-start justify-center m-[auto] w-[100%]">
                        <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] rotate-[90deg] rounded-radius29 w-[8%]"></div>
                        <div className="flex flex-col items-center justify-start ml-[29px] mt-[78px] w-[68%]">
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
                        <div className="backdrop-opacity-[0.5] bg-pink_500 blur-[120.00px] h-[120px] ml-[54px] rotate-[90deg] rounded-radius60 w-[1%]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[90%]">
                      <div className="font-poppins md:h-[177px] sm:h-[177px] h-[189px] relative w-[100%]">
                        <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[91%]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body14"
                            >
                              Available
                            </Text>
                            <div className="flex flex-row items-start justify-between mt-[8px] w-[100%]">
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                0.00 SWP
                              </Text>
                              <Text
                                className="font-bold mt-[2px] text-blue_A201 text-left w-[auto]"
                                variant="body12"
                              >
                                Supply
                              </Text>
                            </div>
                            <Text
                              className="font-medium text-green_A700 text-left w-[auto]"
                              variant="body14"
                            >
                              $0.0000
                            </Text>
                          </div>
                        </div>
                        <div className="absolute md:h-[177px] sm:h-[177px] h-[180px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                          <div className="md:h-[177px] sm:h-[177px] h-[180px] m-[auto] w-[100%]">
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
                            <Img
                              src="images/img_group223.svg"
                              className="absolute h-[177px] inset-y-[0] my-[auto] right-[0] w-[auto]"
                              alt="Group223 One"
                            />
                          </div>
                          <div className="absolute flex flex-row gap-[20px] inset-x-[0] items-center justify-between mx-[auto] top-[34%] w-[100%]">
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
                            className="font-medium mt-[3px] text-green_A700 text-left w-[auto]"
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
                                  APR%
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
              <div className="bg-white_A700 flex flex-col items-center justify-start my-[0] rounded-radius15 shadow-bs2 w-[100%]">
                <div className="flex flex-col gap-[21px] items-center justify-start pb-[20px] rounded-radius15 w-[100%]">
                  <div className="h-[120px] md:h-[auto] sm:h-[auto] relative w-[100%]">
                    <div className="flex flex-col h-[100%] items-center justify-start mt-[30px] mx-[auto] w-[61%]">
                      <div className="flex flex-row gap-[10px] items-center justify-center w-[207px]">
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
                    <div className="absolute flex flex-row h-[max-content] inset-[0] items-start justify-center m-[auto] w-[100%]">
                      <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] rotate-[90deg] rounded-radius29 w-[8%]"></div>
                      <div className="flex flex-col items-center justify-start ml-[29px] mt-[78px] w-[68%]">
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
                      <div className="backdrop-opacity-[0.5] bg-pink_500 blur-[120.00px] h-[120px] ml-[54px] rotate-[90deg] rounded-radius60 w-[1%]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[89%]">
                    <div className="md:h-[124px] sm:h-[124px] h-[193px] relative w-[100%]">
                      <div className="md:h-[124px] sm:h-[124px] h-[180px] mb-[-53px] mx-[auto] w-[100%] z-[1]">
                        <div className="md:h-[177px] sm:h-[177px] h-[180px] m-[auto] w-[100%]">
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
                          <Img
                            src="images/img_group223.svg"
                            className="absolute h-[177px] inset-y-[0] my-[auto] right-[0] w-[auto]"
                            alt="Group223 Two"
                          />
                        </div>
                        <div className="absolute flex flex-row gap-[20px] inset-x-[0] items-center justify-between mx-[auto] top-[34%] w-[100%]">
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
                      <div className="flex flex-col items-start justify-start mt-[auto] mx-[auto] pr-[2px] py-[2px] w-[100%]">
                        <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            Available
                          </Text>
                          <div className="flex flex-row items-start justify-between mt-[8px] w-[100%]">
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              0.00 SWP
                            </Text>
                            <Text
                              className="font-bold mt-[2px] text-blue_A201 text-left w-[auto]"
                              variant="body12"
                            >
                              Supply
                            </Text>
                          </div>
                          <Text
                            className="font-medium text-green_A700 text-left w-[auto]"
                            variant="body14"
                          >
                            $0.0000
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[22px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          Staked
                        </Text>
                        <Text
                          className="font-bold mt-[8px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          0.00 SWP
                        </Text>
                        <Text
                          className="font-medium mt-[3px] text-green_A700 text-left w-[auto]"
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
                        Stake{" "}
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
                          className="font-medium mt-[3px] text-green_A700 text-left w-[auto]"
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
                        alt="arrowdown Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-center justify-start my-[0] rounded-radius15 shadow-bs2 w-[100%]">
                <div className="flex flex-col items-center justify-start pb-[20px] rounded-radius15 w-[100%]">
                  <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[21px] items-center justify-start w-[100%]">
                      <div className="h-[120px] md:h-[auto] sm:h-[auto] relative w-[100%]">
                        <div className="flex flex-col h-[100%] items-center justify-start mt-[30px] mx-[auto] w-[61%]">
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
                        <div className="absolute flex flex-row h-[max-content] inset-[0] items-start justify-center m-[auto] w-[100%]">
                          <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] rotate-[90deg] rounded-radius29 w-[8%]"></div>
                          <div className="flex flex-col items-center justify-start ml-[29px] mt-[78px] w-[68%]">
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
                          <div className="backdrop-opacity-[0.5] bg-pink_500 blur-[120.00px] h-[120px] ml-[54px] rotate-[90deg] rounded-radius60 w-[1%]"></div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[89%]">
                        <div className="md:h-[124px] sm:h-[124px] h-[193px] relative w-[100%]">
                          <div className="md:h-[124px] sm:h-[124px] h-[180px] mb-[-53px] mx-[auto] w-[100%] z-[1]">
                            <div className="md:h-[177px] sm:h-[177px] h-[180px] m-[auto] w-[100%]">
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
                              <Img
                                src="images/img_group223.svg"
                                className="absolute h-[177px] inset-y-[0] my-[auto] right-[0] w-[auto]"
                                alt="Group223 Three"
                              />
                            </div>
                            <div className="absolute flex flex-row gap-[20px] inset-x-[0] items-center justify-between mx-[auto] top-[34%] w-[100%]">
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
                          <div className="flex flex-col items-start justify-start mt-[auto] mx-[auto] pr-[2px] py-[2px] w-[100%]">
                            <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                Available
                              </Text>
                              <div className="flex flex-row items-start justify-between mt-[8px] w-[100%]">
                                <Text
                                  className="font-bold text-gray_900 text-left w-[auto]"
                                  variant="body12"
                                >
                                  32.20 SWP
                                </Text>
                                <Text
                                  className="font-bold mt-[2px] text-blue_A201 text-left w-[auto]"
                                  variant="body12"
                                >
                                  Supply
                                </Text>
                              </div>
                              <Text
                                className="font-medium text-green_A700 text-left w-[auto]"
                                variant="body14"
                              >
                                $0.0000
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-[22px] w-[100%]">
                          <div className="flex flex-col items-center justify-start w-[auto]">
                            <div className="flex flex-col items-start justify-start w-[100%]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                Staked
                              </Text>
                              <Text
                                className="font-bold mt-[8px] text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                32.20 SWP
                              </Text>
                              <Text
                                className="font-medium mt-[3px] text-green_A700 text-left w-[auto]"
                                variant="body14"
                              >
                                $785.57
                              </Text>
                            </div>
                          </div>
                          <Img
                            src="images/img_group272.svg"
                            className="h-[40px] w-[auto]"
                            alt="Group272"
                          />
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
                              32.20 SWP
                            </Text>
                            <Text
                              className="font-medium mt-[3px] text-green_A700 text-left w-[auto]"
                              variant="body14"
                            >
                              $20.42
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[113px] text-[16px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder10"
                            size="7xl"
                            variant="GradientBlueA200DeeppurpleA700"
                          >
                            Harvest
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_A200_4c flex flex-col h-[22px] md:h-[auto] sm:h-[auto] items-center justify-center px-[8px] py-[2px] rounded-radius3 w-[53px]">
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[16px] w-[16px]"
                        alt="arrowdown Three"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[73px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[393px] md:mt-[0] sm:mt-[0] mt-[166px] md:w-[100%] sm:w-[100%] w-[18%]">
            <div className="flex flex-col gap-[34px] items-center justify-start w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col gap-[45px] items-center justify-start p-[15px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[98%]">
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      Stake LP tokens
                    </Text>
                    <Img
                      src="images/img_close_gray_900.svg"
                      className="h-[24px] w-[24px]"
                      alt="close Four"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start mb-[24px] md:w-[100%] sm:w-[100%] w-[98%]">
                    <div className="flex flex-col justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-col gap-[7px] items-center justify-start w-[100%]">
                          <div className="border-2 border-black_900_33 border-solid flex flex-col items-center justify-start p-[6px] rounded-radius10 w-[100%]">
                            <div className="flex flex-col gap-[9px] items-center justify-start mb-[3px] mt-[6px] md:w-[100%] sm:w-[100%] w-[99%]">
                              <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[99%]">
                                <Text
                                  className="font-medium text-gray_900_7f1 text-left w-[auto]"
                                  variant="body17"
                                >
                                  Stake
                                </Text>
                                <Text
                                  className="font-medium text-gray_900_7f1 text-left w-[auto]"
                                  variant="body17"
                                >
                                  Balance: 0
                                </Text>
                              </div>
                              <div className="flex flex-row items-start justify-between w-[100%]">
                                <Text
                                  className="font-medium mt-[2px] text-gray_900 text-left w-[auto]"
                                  variant="body7"
                                >
                                  0.00
                                </Text>
                                <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                  <a
                                    className="font-medium text-[12px] text-blue_A201 text-left underline w-[auto]"
                                    href="#"
                                  >
                                    Max
                                  </a>
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body9"
                                  >
                                    SWP-USDT
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="font-medium text-left text-red_600 w-[auto]"
                              variant="body17"
                            >
                              Insufficient balance
                            </Text>
                            <a
                              className="font-medium text-[12px] text-blue_A201 text-left underline w-[auto]"
                              href="#"
                            >
                              Buy SWP-USDT
                            </a>
                          </div>
                        </div>
                      </div>
                      <Input
                        className="font-medium leading-[normal] p-[0] text-[16px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                        wrapClassName="md:h-[auto] md:ml-[0] md:w-[100%] mt-[20px] mx-[50px] sm:h-[auto] sm:ml-[0] sm:w-[100%] w-[203px]"
                        name="Frame233"
                        placeholder="Enter an amount"
                      ></Input>
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[131px] mt-[12px] text-gray_600 text-left w-[auto]"
                        variant="body17"
                      >
                        Cancel
                      </Text>
                      <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[57px] mt-[37px] md:w-[100%] sm:w-[100%] w-[64%]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body9"
                        >
                          Calculate your gains
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start md:ml-[0] sm:ml-[0] ml-[28px] mt-[24px] md:w-[100%] sm:w-[100%] w-[70%]">
                        <div className="flex flex-col gap-[19px] items-center justify-center mt-[55px] w-[auto]">
                          <Text
                            className="font-medium text-gray_503 text-left w-[auto]"
                            variant="body14"
                          >
                            day
                          </Text>
                          <div className="flex flex-col items-center justify-start w-[100%]">
                            <Text
                              className="font-medium text-gray_503 text-left w-[auto]"
                              variant="body14"
                            >
                              month
                            </Text>
                            <Text
                              className="font-medium mt-[28px] text-gray_503 text-left w-[auto]"
                              variant="body14"
                            >
                              quarter
                            </Text>
                            <Text
                              className="font-medium mt-[24px] text-gray_503 text-left w-[auto]"
                              variant="body14"
                            >
                              year
                            </Text>
                          </div>
                        </div>
                        <div className="flex h-[214px] md:h-[auto] sm:h-[auto] justify-end ml-[5px] relative w-[73%]">
                          <div className="absolute flex flex-row gap-[9px] items-center justify-between left-[0] top-[5%] w-[auto]">
                            <Button
                              className="flex h-[24px] items-center justify-center w-[24px]"
                              shape="icbCircleBorder11"
                              size="mdIcn"
                              variant="icbFillYellow900"
                            >
                              <Img
                                src="images/img_group.svg"
                                className=""
                                alt="Group"
                              />
                            </Button>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              BTC
                            </Text>
                          </div>
                          <div className="absolute flex flex-row gap-[9px] items-center justify-between right-[0] top-[5%] w-[auto]">
                            <Button
                              className="flex h-[24px] items-center justify-center w-[24px]"
                              shape="icbCircleBorder11"
                              size="mdIcn"
                              variant="icbFillYellow900"
                            >
                              <Img
                                src="images/img_group.svg"
                                className=""
                                alt="Group One"
                              />
                            </Button>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              BTC
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[24px] h-[100%] items-center justify-start mb-[19px] mt-[auto] mx-[auto] w-[84%]">
                            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[85%]">
                              <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[98%]">
                                <div className="h-[16px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                                  <Text
                                    className="font-medium m-[auto] text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    0.01
                                  </Text>
                                  <Text
                                    className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-gray_900 text-left w-[max-content]"
                                    variant="body12"
                                  >
                                    0.01
                                  </Text>
                                </div>
                                <Text
                                  className="font-medium text-gray_900 text-left w-[auto]"
                                  variant="body12"
                                >
                                  0.01
                                </Text>
                              </div>
                              <div className="flex flex-row items-center justify-between mt-[23px] w-[100%]">
                                <div className="h-[16px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                                  <Text
                                    className="font-medium m-[auto] text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    0.32
                                  </Text>
                                  <Text
                                    className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-gray_900 text-left w-[max-content]"
                                    variant="body12"
                                  >
                                    0.32
                                  </Text>
                                </div>
                                <Text
                                  className="font-medium text-gray_900 text-left w-[auto]"
                                  variant="body12"
                                >
                                  0.32
                                </Text>
                              </div>
                              <div className="flex flex-row items-center justify-between mt-[24px] md:w-[100%] sm:w-[100%] w-[88%]">
                                <div className="h-[16px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                                  <Text
                                    className="font-medium m-[auto] text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    1.2
                                  </Text>
                                  <Text
                                    className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-gray_900 text-left w-[max-content]"
                                    variant="body12"
                                  >
                                    1.2
                                  </Text>
                                </div>
                                <Text
                                  className="font-medium text-gray_900 text-left w-[auto]"
                                  variant="body12"
                                >
                                  1.2
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[22px] items-center justify-between w-[100%]">
                              <div className="h-[16px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                                <Text
                                  className="font-medium m-[auto] text-gray_900 text-left w-[auto]"
                                  variant="body12"
                                >
                                  132.313
                                </Text>
                                <Text
                                  className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-gray_900 text-left w-[max-content]"
                                  variant="body12"
                                >
                                  132.313
                                </Text>
                              </div>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                132.313
                              </Text>
                            </div>
                          </div>
                          <Img
                            src="images/img_group391.svg"
                            className="absolute h-[214px] inset-[0] justify-center m-[auto] w-[auto]"
                            alt="Group391"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col gap-[45px] items-center justify-start p-[15px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[98%]">
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      Unstake LP tokens
                    </Text>
                    <Img
                      src="images/img_close_gray_900.svg"
                      className="h-[24px] w-[24px]"
                      alt="close Five"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start mb-[8px] md:w-[100%] sm:w-[100%] w-[98%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-col gap-[7px] items-center justify-start w-[100%]">
                          <div className="border-2 border-black_900_33 border-solid flex flex-col items-center justify-end p-[9px] rounded-radius10 w-[100%]">
                            <div className="flex flex-col gap-[9px] items-center justify-start mt-[3px] w-[100%]">
                              <div className="flex flex-row items-center justify-between w-[100%]">
                                <Text
                                  className="font-medium text-gray_900_7f1 text-left w-[auto]"
                                  variant="body17"
                                >
                                  Stake
                                </Text>
                                <Text
                                  className="font-medium text-gray_900_7f1 text-left w-[auto]"
                                  variant="body17"
                                >
                                  Balance: 0
                                </Text>
                              </div>
                              <div className="flex flex-row items-start justify-between w-[100%]">
                                <Text
                                  className="font-medium mt-[2px] text-gray_900 text-left w-[auto]"
                                  variant="body7"
                                >
                                  0.00
                                </Text>
                                <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                  <a
                                    className="font-medium text-[12px] text-blue_A201 text-left underline w-[auto]"
                                    href="#"
                                  >
                                    Max
                                  </a>
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body9"
                                  >
                                    XXX-USDT
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="font-medium text-left text-red_600 w-[auto]"
                              variant="body17"
                            >
                              Insufficient balance
                            </Text>
                            <a
                              className="font-medium text-[12px] text-blue_A201 text-left underline w-[auto]"
                              href="#"
                            >
                              Buy XXX-USDT
                            </a>
                          </div>
                        </div>
                      </div>
                      <Input
                        className="font-medium leading-[normal] p-[0] text-[16px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                        wrapClassName="md:h-[auto] mt-[20px] sm:h-[auto] sm:w-[100%] w-[203px]"
                        name="Frame233 One"
                        placeholder="Enter an amount"
                      ></Input>
                      <Text
                        className="font-medium mt-[12px] text-gray_600 text-left w-[auto]"
                        variant="body17"
                      >
                        Cancel
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="bg-white_A700 flex flex-col gap-[25px] items-center justify-start p-[15px] rounded-radius20 shadow-bs2 w-[100%]">
                <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[98%]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Stake tokens
                  </Text>
                  <Img
                    src="images/img_close_gray_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="close Six"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mb-[10px] md:w-[100%] sm:w-[100%] w-[98%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[99%]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body9"
                        >
                          Estimated payout
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-center text-gray_600 w-[100%]"
                          variant="body14"
                        >
                          Calculate the estimated amount according to your XXX
                          staked in the pool{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[9px] items-start justify-start mt-[21px] w-[auto]">
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[53px] text-[16px] text-blue_A201 text-center w-[auto]"
                          shape="RoundedBorder5"
                          size="md"
                          variant="FillBlueA2004c"
                        >
                          1000
                        </Button>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[57px] text-[16px] text-blue_A201 text-center w-[auto]"
                          shape="RoundedBorder5"
                          size="3xl"
                          variant="OutlineBlueA2004c"
                        >
                          5000
                        </Button>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[63px] text-[16px] text-blue_A201 text-center w-[auto]"
                          shape="RoundedBorder5"
                          size="md"
                          variant="FillBlueA2004c"
                        >
                          10000
                        </Button>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[67px] text-[16px] text-blue_A201 text-center w-[auto]"
                          shape="RoundedBorder5"
                          size="md"
                          variant="FillBlueA2004c"
                        >
                          20000
                        </Button>
                      </div>
                      <div className="border-2 border-black_900_33 border-solid flex flex-col items-center justify-start mt-[23px] p-[10px] rounded-radius10 w-[100%]">
                        <div className="flex flex-row items-end justify-start md:w-[100%] sm:w-[100%] w-[98%]">
                          <div className="flex flex-col gap-[8px] items-start justify-start mb-[2px] w-[30%]">
                            <div className="flex flex-row gap-[5px] h-[18px] md:h-[auto] sm:h-[auto] items-center justify-start w-[76px]">
                              <div className="bg-yellow_800 flex flex-col h-[12px] items-center justify-start rounded-radius50 w-[12px]">
                                <Img
                                  src="images/img_arrowup_white_a700.svg"
                                  className="h-[8px] w-[8px]"
                                  alt="arrowup Four"
                                />
                              </div>
                              <Text
                                className="font-medium text-gray_900_7f1 text-left w-[auto]"
                                variant="body17"
                              >
                                SPT
                              </Text>
                            </div>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body7"
                            >
                              5000.00
                            </Text>
                          </div>
                          <Img
                            src="images/img_youtube.svg"
                            className="h-[24px] ml-[5px] mt-[25px] w-[24px]"
                            alt="youtube"
                          />
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[115px] ml-[51px] my-[5px] text-[12px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder10"
                            size="4xl"
                            variant="GradientBlueA200DeeppurpleA700"
                          >
                            Buy SPT
                          </Button>
                        </div>
                      </div>
                      <Text
                        className="font-bold mt-[26px] text-gray_900 text-left w-[auto]"
                        variant="body9"
                      >
                        Without boost
                      </Text>
                      <div className="flex flex-col items-center justify-start mt-[15px] md:w-[100%] sm:w-[100%] w-[70%]">
                        <div className="flex flex-row items-start justify-evenly w-[100%]">
                          <div className="flex flex-col gap-[19px] items-center justify-center mt-[55px] w-[auto]">
                            <Text
                              className="font-medium text-gray_503 text-left w-[auto]"
                              variant="body14"
                            >
                              day
                            </Text>
                            <div className="flex flex-col items-center justify-start w-[100%]">
                              <Text
                                className="font-medium text-gray_503 text-left w-[auto]"
                                variant="body14"
                              >
                                month
                              </Text>
                              <Text
                                className="font-medium mt-[28px] text-gray_503 text-left w-[auto]"
                                variant="body14"
                              >
                                quarter
                              </Text>
                              <Text
                                className="font-medium mt-[24px] text-gray_503 text-left w-[auto]"
                                variant="body14"
                              >
                                year
                              </Text>
                            </div>
                          </div>
                          <div className="flex h-[214px] md:h-[auto] sm:h-[auto] justify-end relative w-[73%]">
                            <div className="absolute flex flex-row gap-[9px] items-center justify-between left-[0] top-[5%] w-[auto]">
                              <Button
                                className="flex h-[24px] items-center justify-center w-[24px]"
                                shape="icbCircleBorder11"
                                size="mdIcn"
                                variant="icbFillYellow900"
                              >
                                <Img
                                  src="images/img_group.svg"
                                  className=""
                                  alt="Group Two"
                                />
                              </Button>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                BTC
                              </Text>
                            </div>
                            <div className="absolute flex flex-row gap-[9px] items-center justify-between right-[0] top-[5%] w-[auto]">
                              <Button
                                className="flex h-[24px] items-center justify-center w-[24px]"
                                shape="icbCircleBorder11"
                                size="mdIcn"
                                variant="icbFillYellow900"
                              >
                                <Img
                                  src="images/img_group.svg"
                                  className=""
                                  alt="Group Three"
                                />
                              </Button>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                BTC
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[24px] h-[100%] items-center justify-start mb-[19px] mt-[auto] mx-[auto] w-[84%]">
                              <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[85%]">
                                <List
                                  className="flex-col gap-[23px] grid items-center w-[100%]"
                                  orientation="vertical"
                                >
                                  <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-between my-[0] md:w-[100%] sm:w-[100%] w-[98%]">
                                    <div className="h-[16px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                                      <Text
                                        className="font-medium m-[auto] text-gray_900 text-left w-[auto]"
                                        variant="body12"
                                      >
                                        0.01
                                      </Text>
                                      <Text
                                        className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-gray_900 text-left w-[max-content]"
                                        variant="body12"
                                      >
                                        0.01
                                      </Text>
                                    </div>
                                    <Text
                                      className="font-medium text-gray_900 text-left w-[auto]"
                                      variant="body12"
                                    >
                                      0.01
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 flex-row items-center justify-between my-[0] w-[100%]">
                                    <div className="h-[16px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                                      <Text
                                        className="font-medium m-[auto] text-gray_900 text-left w-[auto]"
                                        variant="body12"
                                      >
                                        0.32
                                      </Text>
                                      <Text
                                        className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-gray_900 text-left w-[max-content]"
                                        variant="body12"
                                      >
                                        0.32
                                      </Text>
                                    </div>
                                    <Text
                                      className="font-medium text-gray_900 text-left w-[auto]"
                                      variant="body12"
                                    >
                                      0.32
                                    </Text>
                                  </div>
                                  <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-between mx-[auto] my-[0] md:w-[100%] sm:w-[100%] w-[88%]">
                                    <div className="h-[16px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                                      <Text
                                        className="font-medium m-[auto] text-gray_900 text-left w-[auto]"
                                        variant="body12"
                                      >
                                        1.2
                                      </Text>
                                      <Text
                                        className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-gray_900 text-left w-[max-content]"
                                        variant="body12"
                                      >
                                        1.2
                                      </Text>
                                    </div>
                                    <Text
                                      className="font-medium text-gray_900 text-left w-[auto]"
                                      variant="body12"
                                    >
                                      1.2
                                    </Text>
                                  </div>
                                </List>
                              </div>
                              <div className="flex flex-row gap-[22px] items-center justify-between w-[100%]">
                                <div className="h-[16px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                                  <Text
                                    className="font-medium m-[auto] text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    132.313
                                  </Text>
                                  <Text
                                    className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-gray_900 text-left w-[max-content]"
                                    variant="body12"
                                  >
                                    132.313
                                  </Text>
                                </div>
                                <Text
                                  className="font-medium text-gray_900 text-left w-[auto]"
                                  variant="body12"
                                >
                                  132.313
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_group391.svg"
                              className="absolute h-[214px] inset-[0] justify-center m-[auto] w-[auto]"
                              alt="Group391 One"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[9px] items-start justify-center mt-[25px] md:w-[100%] sm:w-[100%] w-[48%]">
                        <div className="flex flex-col items-center justify-start w-[81%]">
                          <div className="flex flex-col items-center justify-start w-[100%]">
                            <Text
                              className="bg-clip-text bg-gradient4  font-bold text-left text-transparent w-[auto]"
                              variant="body9"
                            >
                              Boosted APR
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_materialsymbolsrocketlaunch.png"
                          className="h-[19px] md:h-[auto] sm:h-[auto] object-cover w-[19px]"
                          alt="Vector"
                        />
                      </div>
                      <div className="bg-white_A700 flex flex-col items-start justify-start mt-[12px] p-[14px] rounded-radius15 shadow-bs2 md:w-[100%] sm:w-[100%] w-[96%]">
                        <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[82%]">
                          <div className="flex flex-row items-start justify-evenly w-[100%]">
                            <div className="flex flex-col gap-[19px] items-center justify-center mt-[55px] w-[auto]">
                              <Text
                                className="font-medium text-gray_400 text-left w-[auto]"
                                variant="body14"
                              >
                                day
                              </Text>
                              <div className="flex flex-col items-center justify-start w-[100%]">
                                <Text
                                  className="font-medium text-gray_400 text-left w-[auto]"
                                  variant="body14"
                                >
                                  month
                                </Text>
                                <Text
                                  className="font-medium mt-[28px] text-gray_400 text-left w-[auto]"
                                  variant="body14"
                                >
                                  quarter
                                </Text>
                                <Text
                                  className="font-medium mt-[24px] text-gray_400 text-left w-[auto]"
                                  variant="body14"
                                >
                                  year
                                </Text>
                              </div>
                            </div>
                            <div className="h-[214px] md:h-[auto] sm:h-[auto] relative w-[73%]">
                              <div className="flex flex-col h-[100%] items-center justify-start mt-[10px] mx-[auto] w-[93%]">
                                <div className="flex flex-row gap-[22px] items-center justify-between w-[100%]">
                                  <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                    <Button
                                      className="flex h-[24px] items-center justify-center w-[24px]"
                                      shape="icbCircleBorder11"
                                      size="mdIcn"
                                      variant="icbFillYellow900"
                                    >
                                      <Img
                                        src="images/img_group.svg"
                                        className=""
                                        alt="Group Four"
                                      />
                                    </Button>
                                    <Text
                                      className="font-medium text-gray_900 text-left w-[auto]"
                                      variant="body12"
                                    >
                                      BTC
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                    <Button
                                      className="flex h-[24px] items-center justify-center w-[24px]"
                                      shape="icbCircleBorder11"
                                      size="mdIcn"
                                      variant="icbFillYellow900"
                                    >
                                      <Img
                                        src="images/img_group.svg"
                                        className=""
                                        alt="Group Five"
                                      />
                                    </Button>
                                    <Text
                                      className="font-medium text-gray_900 text-left w-[auto]"
                                      variant="body12"
                                    >
                                      BTC
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start mt-[24px] md:w-[100%] sm:w-[100%] w-[77%]">
                                  <List
                                    className="flex-col gap-[23px] grid items-center w-[100%]"
                                    orientation="vertical"
                                  >
                                    <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-between my-[0] md:w-[100%] sm:w-[100%] w-[98%]">
                                      <div className="h-[16px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                                        <Text
                                          className="font-medium m-[auto] text-gray_900 text-left w-[auto]"
                                          variant="body12"
                                        >
                                          0.01
                                        </Text>
                                        <Text
                                          className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-gray_900 text-left w-[max-content]"
                                          variant="body12"
                                        >
                                          0.01
                                        </Text>
                                      </div>
                                      <Text
                                        className="font-medium text-gray_900 text-left w-[auto]"
                                        variant="body12"
                                      >
                                        0.01
                                      </Text>
                                    </div>
                                    <div className="flex flex-1 flex-row items-center justify-between my-[0] w-[100%]">
                                      <div className="h-[16px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                                        <Text
                                          className="font-medium m-[auto] text-gray_900 text-left w-[auto]"
                                          variant="body12"
                                        >
                                          0.32
                                        </Text>
                                        <Text
                                          className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-gray_900 text-left w-[max-content]"
                                          variant="body12"
                                        >
                                          0.32
                                        </Text>
                                      </div>
                                      <Text
                                        className="font-medium text-gray_900 text-left w-[auto]"
                                        variant="body12"
                                      >
                                        0.32
                                      </Text>
                                    </div>
                                    <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-between mx-[auto] my-[0] md:w-[100%] sm:w-[100%] w-[88%]">
                                      <div className="h-[16px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                                        <Text
                                          className="font-medium m-[auto] text-gray_900 text-left w-[auto]"
                                          variant="body12"
                                        >
                                          1.2
                                        </Text>
                                        <Text
                                          className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-gray_900 text-left w-[max-content]"
                                          variant="body12"
                                        >
                                          1.2
                                        </Text>
                                      </div>
                                      <Text
                                        className="font-medium text-gray_900 text-left w-[auto]"
                                        variant="body12"
                                      >
                                        1.2
                                      </Text>
                                    </div>
                                  </List>
                                </div>
                                <div className="flex flex-row gap-[22px] items-center justify-between mt-[23px] md:w-[100%] sm:w-[100%] w-[91%]">
                                  <div className="h-[16px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                                    <Text
                                      className="font-medium m-[auto] text-gray_900 text-left w-[auto]"
                                      variant="body12"
                                    >
                                      132.313
                                    </Text>
                                    <Text
                                      className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-gray_900 text-left w-[max-content]"
                                      variant="body12"
                                    >
                                      132.313
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    132.313
                                  </Text>
                                </div>
                              </div>
                              <Img
                                src="images/img_group391_214x153.png"
                                className="absolute h-[214px] inset-[0] justify-center m-[auto] object-cover w-[auto]"
                                alt="Group391 Two"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] mt-[24px] text-[16px] text-center text-white_A700 w-[203px]"
                        shape="CircleBorder19"
                        size="4xl"
                        variant="GradientBlueA200DeeppurpleA700"
                      >
                        Stake
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UIKitFarmsPagePage;
