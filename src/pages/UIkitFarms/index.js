import React from "react";

import { List, Img, Text, Button, Input, Line, Switch } from "components";

const UIkitFarmsPage = () => {
  return (
    <>
      <div className="flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-white_A700 flex flex-col items-start justify-start p-[99px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col gap-[31px] items-center justify-start mb-[228px] mt-[11px] md:w-[100%] sm:w-[100%] w-[87%]">
            <List
              className="sm:flex-col flex-row gap-[134px] md:gap-[40px] sm:gap-[40px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-[100%]">
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
                                   Stake{" "}
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
                          <div className="flex sm:flex-col flex-row sm:gap-[49px] items-start justify-between w-[100%]">
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
              <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius20 shadow-bs2 w-[100%]">
                    <div className="bg-white_A700 flex flex-col items-center justify-end p-[14px] rotate-[90deg] rounded-radius20 shadow-bs2 w-[100%]">
                      <div className="flex flex-col gap-[10px] items-center justify-start mb-[3px] mt-[9px] md:w-[100%] sm:w-[100%] w-[99%]">
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
                                  Stake
                                </span>
                                <span className="text-gray_900 text-[16px] font-poppins">
                                  {" "}
                                </span>
                                <span className="text-deep_purple_A202 text-[16px] font-poppins">
                                  SWP
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
                          <div className="flex sm:flex-col flex-row sm:gap-[49px] items-start justify-between w-[100%]">
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
            </List>
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between md:w-[100%] sm:w-[100%] w-[99%]">
              <div className="flex flex-col items-start justify-start md:mt-[0] sm:mt-[0] mt-[4px] md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[95%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius20 shadow-bs2 w-[100%]">
                      <div className="bg-white_A700 flex flex-col items-center justify-end p-[14px] rotate-[90deg] rounded-radius20 shadow-bs2 w-[100%]">
                        <div className="flex flex-col gap-[10px] items-center justify-start mb-[3px] mt-[9px] md:w-[100%] sm:w-[100%] w-[99%]">
                          <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                            <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_materialsymbol_30x30.png"
                                className="h-[30px] md:h-[auto] sm:h-[auto] object-cover w-[30px]"
                                alt="materialsymbol Two"
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
                                    Stake
                                  </span>
                                  <span className="text-gray_900 text-[16px] font-poppins">
                                    {" "}
                                  </span>
                                  <span className="text-deep_purple_A202 text-[16px] font-poppins">
                                    SWP
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
                                            src="images/img_question.svg"
                                            className="h-[11px] w-[11px]"
                                            alt="question Two"
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
                            <div className="flex sm:flex-col flex-row sm:gap-[49px] items-start justify-between w-[100%]">
                              <Button
                                className="cursor-pointer font-bold font-inter leading-[normal] text-[16px] text-center text-white_A700 w-[217px]"
                                shape="RoundedBorder23"
                                size="6xl"
                                variant="GradientPurpleA100IndigoA200"
                              >
                                Boost APR
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
                <div className="flex flex-col items-center justify-start mt-[35px] md:w-[100%] sm:w-[100%] w-[95%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius20 shadow-bs2 w-[100%]">
                        <div className="bg-white_A700 flex flex-col items-center justify-end p-[14px] rotate-[90deg] rounded-radius20 shadow-bs2 w-[100%]">
                          <div className="flex flex-col gap-[10px] items-center justify-start mb-[3px] mt-[9px] md:w-[100%] sm:w-[100%] w-[99%]">
                            <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                              <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_materialsymbol_30x30.png"
                                  className="h-[30px] md:h-[auto] sm:h-[auto] object-cover w-[30px]"
                                  alt="materialsymbol Three"
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
                            <div className="flex flex-col gap-[22px] items-center justify-start md:w-[100%] sm:w-[100%] w-[99%]">
                              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-evenly md:w-[100%] sm:w-[100%] w-[99%]">
                                <div className="flex flex-col gap-[46px] items-center justify-start sm:w-[100%] w-[63%]">
                                  <Text
                                    className="font-medium text-gray_900 text-left sm:w-[100%] w-[98%]"
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
                                      Stake
                                    </span>
                                    <span className="text-gray_900 text-[16px] font-poppins">
                                      {" "}
                                    </span>
                                    <span className="text-deep_purple_A202 text-[16px] font-poppins">
                                      SWP
                                    </span>
                                    <span className="text-gray_900 text-[16px] font-poppins">
                                      {" "}
                                      & complete daily quests!
                                    </span>
                                  </Text>
                                  <div className="md:h-[49px] sm:h-[49px] h-[52px] relative w-[100%]">
                                    <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[71%]">
                                      <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                                        <div
                                          className="h-[15px] overflow-hidden relative w-[96%]"
                                          name="GroupThree Three"
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
                                                alt="question Three"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bg-gray_601 bottom-[12%] flex flex-col items-center justify-start p-[2px] right-[0] rounded-radius9 w-[35%]">
                                      <Text
                                        className="font-medium text-left text-white_A700 w-[auto]"
                                        variant="body17"
                                      >
                                        GMT timezone
                                      </Text>
                                    </div>
                                    <Img
                                      src="images/img_icon.svg"
                                      className="absolute bottom-[0] h-[6px] right-[32%] w-[auto]"
                                      alt="icon"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start sm:mt-[0] mt-[4px] rotate-[-90deg] rounded-radius20 sm:w-[100%] w-[38%]">
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
                              <div className="flex sm:flex-col flex-row sm:gap-[49px] items-start justify-between w-[100%]">
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
                <div className="flex sm:flex-col flex-row gap-[21px] items-end justify-between md:ml-[0] sm:ml-[0] ml-[8px] mt-[79px] md:w-[100%] sm:w-[100%] w-[99%]">
                  <div className="h-[224px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                    <Text
                      className="font-medium ml-[auto] mr-[5px] mt-[88px] text-left text-white_A700 w-[auto]"
                      variant="body17"
                    >
                      GMT timezone
                    </Text>
                    <div className="absolute border border-deep_purple_A200 border-solid flex flex-col font-inter gap-[21px] h-[max-content] inset-[0] items-center justify-center m-[auto] p-[20px] rounded-radius5 w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[302px]"
                          shape="RoundedBorder23"
                          size="6xl"
                          variant="GradientBlueA200DeeppurpleA700"
                        >
                          Connect wallet
                        </Button>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[302px]"
                          shape="RoundedBorder23"
                          size="6xl"
                          variant="GradientBlueA200DeeppurpleA700"
                        >
                          Enable farm
                        </Button>
                      </div>
                      <div className="bg-gradient2  flex flex-col items-center justify-center sm:px-[20px] px-[28px] py-[14px] rounded-radius24 w-[302px]">
                        <div className="bg-white_A700 h-[20px] rounded-radius50 w-[20px]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="border border-deep_purple_A200 border-solid flex flex-col gap-[23px] items-center justify-start sm:mt-[0] mt-[18px] p-[20px] rounded-radius5 sm:w-[100%] w-[auto]">
                    <Input
                      className="font-medium leading-[normal] p-[0] text-[16px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                      wrapClassName="md:w-[100%] sm:w-[100%] w-[203px]"
                      name="Property1Frame"
                      placeholder="Enter an amount"
                    ></Input>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] text-[16px] text-center text-gray_400 w-[203px]"
                      shape="CircleBorder19"
                      size="4xl"
                      variant="FillGray903"
                    >
                      Insufficient amount
                    </Button>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] text-[16px] text-center text-white_A700 w-[203px]"
                      shape="CircleBorder19"
                      size="4xl"
                      variant="GradientBlueA200DeeppurpleA700"
                    >
                      Stake
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px] items-start justify-end mt-[130px] sm:w-[100%] w-[auto]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="bg-white_A700 flex md:h-[379px] sm:h-[379px] h-[456px] justify-end p-[14px] relative rounded-radius20 shadow-bs2 w-[100%]">
                      <div className="flex flex-col gap-[13px] h-[100%] items-center justify-start mb-[26px] mt-[auto] mx-[auto] w-[89%]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body9"
                        >
                          Calculate your gains
                        </Text>
                        <div className="md:h-[67px] sm:h-[67px] h-[83px] relative w-[100%]">
                          <div className="absolute bottom-[0] md:h-[54px] sm:h-[54px] h-[58px] inset-x-[0] mx-[auto] w-[100%]">
                            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[95%]">
                              <div className="flex flex-col gap-[14px] items-end justify-start w-[100%]">
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <div className="flex flex-row gap-[9px] items-center justify-start w-[auto]">
                                    <Button
                                      className="flex h-[24px] items-center justify-center w-[24px]"
                                      shape="icbCircleBorder11"
                                      size="mdIcn"
                                      variant="icbFillTeal400"
                                    >
                                      <Img
                                        src="images/img_eye_white_a700.svg"
                                        className=""
                                        alt="eye"
                                      />
                                    </Button>
                                    <Text
                                      className="font-medium text-gray_900 text-left w-[auto]"
                                      variant="body12"
                                    >
                                      USDT
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    2.3
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    75.32
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    132.313
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
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
                            <div className="absolute bottom-[0] flex flex-row items-center justify-start left-[2%] w-[71%]">
                              <div className="flex flex-row gap-[9px] items-center justify-start w-[auto]">
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
                              <Text
                                className="font-medium ml-[38px] text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                0.01
                              </Text>
                              <Text
                                className="font-medium ml-[45px] text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                0.32
                              </Text>
                              <Text
                                className="font-medium ml-[64px] text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                1.2
                              </Text>
                            </div>
                            <Line className="absolute bg-gray_500_66 h-[2px] inset-[0] justify-center m-[auto] w-[100%]" />
                          </div>
                          <Line className="absolute bg-gray_500_66 bottom-[0] h-[67px] left-[39%] w-[2px]" />
                          <Line className="absolute bg-gray_500_66 bottom-[0] h-[67px] right-[41%] w-[2px]" />
                          <Line className="absolute bg-gray_500_66 bottom-[0] h-[67px] right-[18%] w-[2px]" />
                          <Text
                            className="absolute font-medium left-[28%] text-gray_503 text-left top-[0] w-[auto]"
                            variant="body14"
                          >
                            day
                          </Text>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_503 text-left top-[0] w-[max-content]"
                            variant="body14"
                          >
                            month
                          </Text>
                          <Text
                            className="absolute font-medium right-[23%] text-gray_503 text-left top-[2%] w-[auto]"
                            variant="body14"
                          >
                            quarter
                          </Text>
                          <Text
                            className="absolute font-medium right-[6%] text-gray_503 text-left top-[0] w-[auto]"
                            variant="body14"
                          >
                            year
                          </Text>
                        </div>
                      </div>
                      <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[3%] w-[89%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body12"
                          >
                            Stake LP tokens
                          </Text>
                          <Img
                            src="images/img_close_gray_900.svg"
                            className="h-[24px] w-[24px]"
                            alt="close"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[46px] md:w-[100%] sm:w-[100%] w-[73%]">
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
                                    Buy XXX-USDT
                                  </a>
                                </div>
                              </div>
                            </div>
                            <Input
                              className="font-medium leading-[normal] p-[0] text-[16px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                              wrapClassName="md:h-[auto] md:ml-[0] md:w-[100%] ml-[61px] mr-[39px] mt-[20px] sm:h-[auto] sm:ml-[0] sm:w-[100%] w-[203px]"
                              name="Frame233"
                              placeholder="Enter an amount"
                            ></Input>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[141px] mt-[12px] text-gray_600 text-left w-[auto]"
                              variant="body17"
                            >
                              Cancel
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-gray_500_66 md:h-[2px] sm:h-[2px] h-[67px] mt-[87px] md:w-[100%] sm:w-[100%] w-[2px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="bg-white_A700 flex flex-col gap-[46px] items-center justify-start p-[14px] rounded-radius20 shadow-bs2 w-[100%]">
                      <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[95%]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Unstake LP tokens
                        </Text>
                        <Img
                          src="images/img_close_gray_900.svg"
                          className="h-[24px] w-[24px]"
                          alt="close One"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start mb-[9px] md:w-[100%] sm:w-[100%] w-[69%]">
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
                                      Unstake
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
                                  Buy XXX-USDT
                                </a>
                              </div>
                            </div>
                          </div>
                          <Input
                            className="font-medium leading-[normal] p-[0] text-[16px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                            wrapClassName="md:ml-[0] md:w-[100%] ml-[61px] mr-[39px] mt-[20px] sm:ml-[0] sm:w-[100%] w-[203px]"
                            name="Frame233 One"
                            placeholder="Enter an amount"
                          ></Input>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[141px] mt-[12px] text-gray_600 text-left w-[auto]"
                            variant="body17"
                          >
                            Cancel
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="bg-white_A700 flex flex-col gap-[46px] items-center justify-start p-[14px] rounded-radius20 shadow-bs2 w-[100%]">
                      <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[95%]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Unstake LP tokens
                        </Text>
                        <Img
                          src="images/img_close_gray_900.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Two"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start mb-[9px] md:w-[100%] sm:w-[100%] w-[69%]">
                        <div className="flex flex-col justify-start w-[100%]">
                          <div className="flex flex-col gap-[9px] items-end justify-start w-[100%]">
                            <div className="border-2 border-black_900_33 border-solid flex flex-col items-center justify-start p-[6px] rounded-radius10 w-[100%]">
                              <div className="flex flex-col gap-[9px] items-center justify-start mb-[3px] mt-[6px] md:w-[100%] sm:w-[100%] w-[99%]">
                                <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[99%]">
                                  <Text
                                    className="font-medium text-gray_900_7f1 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    Unstake
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_900_7f1 text-left w-[auto]"
                                    variant="body17"
                                  >
                                    Balance: 28.4350
                                  </Text>
                                </div>
                                <div className="flex flex-row items-start justify-between w-[100%]">
                                  <Text
                                    className="font-medium mt-[2px] text-gray_900 text-left w-[auto]"
                                    variant="body7"
                                  >
                                    9.673
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
                            <a
                              className="font-medium text-[12px] text-blue_A201 text-left underline w-[auto]"
                              href="#"
                            >
                              Buy XXX-USDT
                            </a>
                          </div>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] md:ml-[0] sm:ml-[0] ml-[61px] mt-[20px] text-[16px] text-center text-white_A700 w-[203px]"
                            shape="CircleBorder19"
                            size="4xl"
                            variant="GradientBlueA200DeeppurpleA700"
                          >
                            Unstake
                          </Button>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[141px] mt-[12px] text-gray_600 text-left w-[auto]"
                            variant="body17"
                          >
                            Cancel
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="bg-white_A700 flex flex-col gap-[14px] items-center justify-start p-[14px] rounded-radius20 shadow-bs2 w-[100%]">
                      <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[95%]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Calculate APR
                        </Text>
                        <Img
                          src="images/img_close_gray_900.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Three"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start mb-[26px] md:w-[100%] sm:w-[100%] w-[96%]">
                        <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                          <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[72%]">
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
                                See how much you can earn  with SWP staking and
                                Extra Yield
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
                                  <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                                    <div className="bg-gradient2  flex flex-col h-[12px] items-center justify-end p-[2px] rounded-radius50 w-[12px]">
                                      <Img
                                        src="images/img_union_white_a700.svg"
                                        className="h-[7px] w-[auto]"
                                        alt="Union"
                                      />
                                    </div>
                                    <Text
                                      className="font-medium text-gray_900_7f1 text-left w-[auto]"
                                      variant="body17"
                                    >
                                      SWP
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body7"
                                  >
                                    5000.00
                                  </Text>
                                </div>
                                <Button
                                  className="flex h-[24px] items-center justify-center ml-[4px] mt-[25px] w-[24px]"
                                  shape="icbCircleBorder11"
                                  size="mdIcn"
                                  variant="icbGradientBlueA200DeeppurpleA700"
                                >
                                  <Img
                                    src="images/img_settings_white_a700_24x24.svg"
                                    className=""
                                    alt="settings"
                                  />
                                </Button>
                                <Button
                                  className="cursor-pointer font-bold leading-[normal] min-w-[115px] ml-[52px] my-[5px] text-[12px] text-center text-white_A700 w-[auto]"
                                  shape="RoundedBorder10"
                                  size="4xl"
                                  variant="GradientBlueA200DeeppurpleA700"
                                >
                                  Buy SWP
                                </Button>
                              </div>
                            </div>
                            <Text
                              className="font-bold mt-[32px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              Without boost
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[28px] items-center justify-start w-[100%]">
                            <List
                              className="flex-col gap-[23px] grid items-center w-[100%]"
                              orientation="vertical"
                            >
                              <div className="flex flex-1 flex-col items-center justify-start ml-[4px] my-[0] w-[100%]">
                                <div className="sm:h-[202px] md:h-[67px] h-[83px] relative w-[100%]">
                                  <Line className="bg-gray_500_66 h-[67px] mb-[undefinedpx] ml-[162px] mt-[auto] w-[2px] z-[1]" />
                                  <Line className="bg-gray_500_66 h-[67px] mb-[undefinedpx] ml-[auto] mr-[172px] mt-[auto] w-[2px] z-[1]" />
                                  <Line className="bg-gray_500_66 h-[67px] mb-[undefinedpx] ml-[auto] mr-[76px] mt-[auto] w-[2px] z-[1]" />
                                  <Text
                                    className="font-medium mb-[-2px] ml-[116px] text-gray_503 text-left w-[auto] z-[1]"
                                    variant="body14"
                                  >
                                    day
                                  </Text>
                                  <Text
                                    className="font-medium mb-[undefinedpx] mx-[auto] text-gray_503 text-left w-[auto] z-[1]"
                                    variant="body14"
                                  >
                                    month
                                  </Text>
                                  <Text
                                    className="font-medium mb-[-2px] ml-[auto] mr-[98px] mt-[2px] text-gray_503 text-left w-[auto] z-[1]"
                                    variant="body14"
                                  >
                                    quarter
                                  </Text>
                                  <Text
                                    className="font-medium mb-[undefinedpx] ml-[auto] mr-[26px] text-gray_503 text-left w-[auto] z-[1]"
                                    variant="body14"
                                  >
                                    year
                                  </Text>
                                  <div className="sm:h-[202px] h-[67px] md:h-[auto] mt-[auto] mx-[auto] w-[100%]">
                                    <div className="absolute sm:h-[202px] h-[67px] md:h-[auto] inset-[0] justify-center m-[auto] sm:w-[100%] w-[95%]">
                                      <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                                        <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start w-[100%]">
                                            <div className="flex flex-row gap-[9px] items-center justify-start w-[auto]">
                                              <Button
                                                className="flex h-[24px] items-center justify-center w-[24px]"
                                                shape="icbCircleBorder11"
                                                size="mdIcn"
                                                variant="icbGradientBlueA200DeeppurpleA700"
                                              >
                                                <Img
                                                  src="images/img_settings_white_a700_24x24.svg"
                                                  className=""
                                                  alt="settings One"
                                                />
                                              </Button>
                                              <Text
                                                className="font-medium text-gray_900 text-left w-[auto]"
                                                variant="body12"
                                              >
                                                SWP
                                              </Text>
                                            </div>
                                            <Text
                                              className="font-medium sm:ml-[0] ml-[34px] text-gray_900 text-left w-[auto]"
                                              variant="body12"
                                            >
                                              0.01
                                            </Text>
                                            <Text
                                              className="font-medium sm:ml-[0] ml-[45px] text-gray_900 text-left w-[auto]"
                                              variant="body12"
                                            >
                                              0.32
                                            </Text>
                                            <Text
                                              className="font-medium sm:ml-[0] ml-[64px] text-gray_900 text-left w-[auto]"
                                              variant="body12"
                                            >
                                              1.2
                                            </Text>
                                            <Text
                                              className="font-medium sm:ml-[0] ml-[47px] text-gray_900 text-left w-[auto]"
                                              variant="body12"
                                            >
                                              132.313
                                            </Text>
                                          </div>
                                          <div className="flex flex-row items-center justify-between w-[100%]">
                                            <div className="flex flex-row gap-[9px] items-center justify-start w-[auto]">
                                              <Button
                                                className="flex h-[24px] items-center justify-center w-[24px]"
                                                shape="icbCircleBorder11"
                                                size="mdIcn"
                                                variant="icbFillTeal400"
                                              >
                                                <Img
                                                  src="images/img_eye_white_a700.svg"
                                                  className=""
                                                  alt="eye One"
                                                />
                                              </Button>
                                              <Text
                                                className="font-medium text-gray_900 text-left w-[auto]"
                                                variant="body12"
                                              >
                                                USDT
                                              </Text>
                                            </div>
                                            <Text
                                              className="font-medium text-gray_900 text-left w-[auto]"
                                              variant="body12"
                                            >
                                              2.3
                                            </Text>
                                            <Text
                                              className="font-medium text-gray_900 text-left w-[auto]"
                                              variant="body12"
                                            >
                                              75.32
                                            </Text>
                                            <Text
                                              className="font-medium text-gray_900 text-left w-[auto]"
                                              variant="body12"
                                            >
                                              132.313
                                            </Text>
                                            <Text
                                              className="font-medium text-gray_900 text-left w-[auto]"
                                              variant="body12"
                                            >
                                              132.313
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                      <Line className="absolute bg-gray_500_66 h-[67px] inset-y-[0] left-[21%] my-[auto] w-[2px]" />
                                    </div>
                                    <Line className="absolute bg-gray_500_66 bottom-[40%] h-[2px] inset-x-[0] mx-[auto] w-[100%]" />
                                  </div>
                                </div>
                              </div>
                              <div className="h-[150px] sm:h-[212px] md:h-[auto] my-[0] relative w-[100%]">
                                <div className="absolute bg-white_A700 flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] p-[11px] rounded-radius15 shadow-bs2 w-[100%]">
                                  <div className="flex flex-row gap-[7px] items-center justify-center mb-[104px] md:w-[100%] sm:w-[100%] w-[37%]">
                                    <Text
                                      className="bg-clip-text bg-gradient4  font-bold text-left text-transparent w-[auto]"
                                      variant="body9"
                                    >
                                      Boosted APR
                                    </Text>
                                    <Img
                                      src="images/img_materialsymbolsrocketlaunch.png"
                                      className="h-[24px] md:h-[auto] sm:h-[auto] object-cover w-[24px]"
                                      alt="materialsymbol Four"
                                    />
                                  </div>
                                </div>
                                <div className="absolute bottom-[15%] sm:h-[212px] md:h-[67px] h-[83px] inset-x-[0] mx-[auto] sm:w-[100%] w-[99%]">
                                  <Line className="bg-gradient4  h-[67px] mb-[undefinedpx] ml-[161px] mt-[auto] w-[2px] z-[1]" />
                                  <Line className="bg-gradient4  h-[67px] mb-[undefinedpx] ml-[auto] mr-[171px] mt-[auto] w-[2px] z-[1]" />
                                  <Line className="bg-gradient4  h-[67px] mb-[undefinedpx] ml-[auto] mr-[75px] mt-[auto] w-[2px] z-[1]" />
                                  <Text
                                    className="font-medium mb-[-2px] ml-[115px] text-gray_503 text-left w-[auto] z-[1]"
                                    variant="body14"
                                  >
                                    day
                                  </Text>
                                  <Text
                                    className="font-medium mb-[undefinedpx] mx-[auto] text-gray_503 text-left w-[auto] z-[1]"
                                    variant="body14"
                                  >
                                    month
                                  </Text>
                                  <Text
                                    className="font-medium mb-[-2px] ml-[auto] mr-[97px] mt-[2px] text-gray_503 text-left w-[auto] z-[1]"
                                    variant="body14"
                                  >
                                    quarter
                                  </Text>
                                  <Text
                                    className="font-medium mb-[undefinedpx] ml-[auto] mr-[25px] text-gray_503 text-left w-[auto] z-[1]"
                                    variant="body14"
                                  >
                                    year
                                  </Text>
                                  <div className="sm:h-[212px] h-[67px] md:h-[auto] mt-[auto] mx-[auto] w-[100%]">
                                    <div className="absolute sm:h-[212px] h-[67px] md:h-[auto] inset-[0] justify-center m-[auto] sm:w-[100%] w-[95%]">
                                      <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                                        <div className="flex flex-col gap-[11px] items-center justify-start w-[100%]">
                                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-end justify-start w-[100%]">
                                            <div className="flex flex-row gap-[9px] items-center justify-start w-[auto]">
                                              <Button
                                                className="flex h-[24px] items-center justify-center w-[24px]"
                                                shape="icbCircleBorder11"
                                                size="mdIcn"
                                                variant="icbGradientBlueA200DeeppurpleA700"
                                              >
                                                <Img
                                                  src="images/img_settings_white_a700_24x24.svg"
                                                  className=""
                                                  alt="settings Two"
                                                />
                                              </Button>
                                              <Text
                                                className="font-medium text-gray_900 text-left w-[auto]"
                                                variant="body12"
                                              >
                                                SWP
                                              </Text>
                                            </div>
                                            <Text
                                              className="font-medium sm:ml-[0] ml-[37px] sm:mt-[0] my-[3px] text-gray_900 text-left w-[auto]"
                                              variant="body12"
                                            >
                                              0.01
                                            </Text>
                                            <Text
                                              className="font-medium mb-[2px] sm:ml-[0] ml-[42px] sm:mt-[0] mt-[5px] text-gray_900 text-left w-[auto]"
                                              variant="body12"
                                            >
                                              0.32
                                            </Text>
                                            <Text
                                              className="font-medium mb-[2px] sm:ml-[0] ml-[63px] sm:mt-[0] mt-[5px] text-gray_900 text-left w-[auto]"
                                              variant="body12"
                                            >
                                              1.2
                                            </Text>
                                            <Text
                                              className="font-medium mb-[2px] sm:ml-[0] ml-[46px] sm:mt-[0] mt-[5px] text-gray_900 text-left w-[auto]"
                                              variant="body12"
                                            >
                                              132.313
                                            </Text>
                                          </div>
                                          <div className="flex flex-row items-center justify-between w-[100%]">
                                            <div className="flex flex-row gap-[9px] items-center justify-start w-[auto]">
                                              <Button
                                                className="flex h-[24px] items-center justify-center w-[24px]"
                                                shape="icbCircleBorder11"
                                                size="mdIcn"
                                                variant="icbFillTeal400"
                                              >
                                                <Img
                                                  src="images/img_eye_white_a700.svg"
                                                  className=""
                                                  alt="eye Two"
                                                />
                                              </Button>
                                              <Text
                                                className="font-medium text-gray_900 text-left w-[auto]"
                                                variant="body12"
                                              >
                                                USDT
                                              </Text>
                                            </div>
                                            <Text
                                              className="font-medium text-gray_900 text-left w-[auto]"
                                              variant="body12"
                                            >
                                              2.3
                                            </Text>
                                            <Text
                                              className="font-medium text-gray_900 text-left w-[auto]"
                                              variant="body12"
                                            >
                                              75.32
                                            </Text>
                                            <Text
                                              className="font-medium text-gray_900 text-left w-[auto]"
                                              variant="body12"
                                            >
                                              132.313
                                            </Text>
                                            <Text
                                              className="font-medium text-gray_900 text-left w-[auto]"
                                              variant="body12"
                                            >
                                              132.313
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                      <Line className="absolute bg-gradient4  h-[67px] inset-y-[0] left-[21%] my-[auto] w-[2px]" />
                                    </div>
                                    <Line className="absolute bg-gradient4  bottom-[40%] h-[2px] inset-x-[0] mx-[auto] w-[100%]" />
                                  </div>
                                </div>
                              </div>
                            </List>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] text-[16px] text-center text-white_A700 w-[203px]"
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
              <div className="flex flex-col gap-[23px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col items-start justify-start p-[10px] sm:w-[100%] w-[auto]">
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
                        style={{
                          backgroundImage: "url('images/img_group4.svg')",
                        }}
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
                      <div className="bg-gray_903 flex flex-row gap-[12px] items-center justify-center pl-[12px] rounded-radius16 w-[100%]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          Active
                        </Text>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[83px] text-[14px] text-center text-white_A700 w-[auto]"
                          shape="RoundedBorder13"
                          size="4xl"
                          variant="GradientBlueA200DeeppurpleA700"
                        >
                          Finished
                        </Button>
                      </div>
                    </div>
                    <div className="border border-deep_purple_A200 border-solid flex flex-col gap-[37px] items-center justify-start p-[20px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[41%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col items-center justify-end p-[11px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group4.svg')",
                          }}
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
                          style={{
                            backgroundImage: "url('images/img_popup.png')",
                          }}
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
                    <div className="border border-deep_purple_A200 border-solid flex flex-col gap-[10px] items-center justify-end rounded-radius5 md:w-[100%] sm:w-[100%] w-[28%]">
                      <Button
                        className="flex items-center justify-center min-w-[102px] mt-[19px] text-center w-[auto]"
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
                      <div className="md:h-[25px] sm:h-[25px] h-[44px] relative w-[73%]">
                        <div className="absolute bg-gray_900 flex flex-row gap-[2px] inset-x-[0] items-center justify-start mx-[auto] pl-[5px] pr-[10px] py-[2px] rounded-radius12 top-[0] w-[auto]">
                          <Img
                            src="images/img_materialsymbolsrocketlaunch.png"
                            className="h-[12px] md:h-[auto] sm:h-[auto] object-cover w-[12px]"
                            alt="materialsymbol Five"
                          />
                          <Text
                            className="font-medium text-left text-white_A700 w-[auto]"
                            variant="body14"
                          >
                            Extra Yield
                          </Text>
                        </div>
                        <Img
                          src="images/img_cursor_white_a701.svg"
                          className="absolute bottom-[0] h-[20px] right-[0] w-[auto]"
                          alt="cursor"
                        />
                      </div>
                    </div>
                    <div className="border border-deep_purple_A200 border-solid flex flex-col items-start justify-end p-[2px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[30%]">
                      <Text
                        className="border border-gray_900 border-solid font-medium md:ml-[0] sm:ml-[0] ml-[18px] mt-[18px] px-[10px] py-[2px] rounded-radius12 text-gray_900 text-left w-[auto]"
                        variant="body14"
                      >
                        <span className="text-gray_900 text-[14px] font-poppins">
                          Multiplier{" "}
                        </span>
                        <span className="text-purple_A100 text-[14px] font-poppins">
                          6.1X
                        </span>
                      </Text>
                      <div className="bg-gray_900 flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[18px] mt-[10px] px-[10px] py-[2px] rounded-radius12 w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
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
                      <Img
                        src="images/img_cursor_white_a701.svg"
                        className="h-[20px] md:ml-[0] sm:ml-[0] ml-[118px] w-[auto]"
                        alt="cursor One"
                      />
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
                <div className="flex flex-col items-start justify-start sm:w-[100%] w-[auto]">
                  <List
                    className="flex-col gap-[30px] grid items-center pt-[584px] w-[100%]"
                    orientation="vertical"
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
                        <div className="flex flex-col gap-[19px] items-center justify-start w-[100%]">
                          <div className="flex flex-col gap-[21px] items-center justify-start w-[100%]">
                            <div className="h-[120px] sm:h-[243px] md:h-[auto] relative w-[100%]">
                              <div className="flex flex-col h-[100%] items-center justify-start mt-[30px] mx-[auto] w-[55%]">
                                <div className="flex flex-row gap-[10px] items-center justify-center w-[auto]">
                                  <Img
                                    src="images/img_close_yellow_900_30x55.svg"
                                    className="h-[30px] w-[55px]"
                                    alt="close Five"
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
                              <div className="font-poppins md:h-[177px] sm:h-[177px] h-[189px] relative w-[100%]">
                                <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[93%]">
                                  <div className="flex flex-col items-start justify-start w-[100%]">
                                    <Text
                                      className="font-medium text-gray_900 text-left w-[auto]"
                                      variant="body14"
                                    >
                                      Avialable
                                    </Text>
                                    <div className="flex flex-row items-center justify-between mt-[8px] w-[100%]">
                                      <Text
                                        className="font-bold text-gray_900 text-left w-[auto]"
                                        variant="body12"
                                      >
                                        0.00 SWP
                                      </Text>
                                      <Text
                                        className="font-bold text-blue_A201 text-left w-[auto]"
                                        variant="body12"
                                      >
                                        Get SWP
                                      </Text>
                                    </div>
                                    <Text
                                      className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
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
                                  variant="FillGray90088"
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
                              alt="arrowdown One"
                            />
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
                                  alt="close Six"
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
                                alt="calculator Two"
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
                            <div className="flex flex-row items-center justify-between mt-[22px] w-[100%]">
                              <div className="flex flex-col items-start justify-start w-[auto]">
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
                              <Button
                                className="cursor-pointer font-bold leading-[normal] min-w-[113px] text-[16px] text-blue_A201 text-center w-[auto]"
                                shape="RoundedBorder10"
                                size="7xl"
                                variant="OutlineBlack90033"
                              >
                                Get SWP
                              </Button>
                            </div>
                            <div className="flex flex-col font-inter gap-[22px] items-center justify-start mt-[23px] w-[100%]">
                              <Button
                                className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[302px]"
                                shape="RoundedBorder23"
                                size="6xl"
                                variant="GradientBlueA200DeeppurpleA700"
                              >
                                Enable farm
                              </Button>
                              <div className="flex flex-row font-poppins items-center justify-between w-[100%]">
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
                            </div>
                            <div className="bg-blue_A200_4c flex flex-col h-[22px] md:h-[auto] sm:h-[auto] items-center justify-center mt-[18px] px-[8px] py-[2px] rounded-radius3 w-[53px]">
                              <Img
                                src="images/img_arrowdown.svg"
                                className="h-[16px] w-[16px]"
                                alt="arrowdown Two"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
                      <div className="flex flex-col gap-[21px] items-center justify-start pb-[20px] rounded-radius15 w-[100%]">
                        <div className="h-[120px] sm:h-[243px] md:h-[auto] relative w-[100%]">
                          <div className="flex flex-col h-[100%] items-center justify-start mt-[30px] mx-[auto] w-[55%]">
                            <div className="flex flex-row gap-[10px] items-center justify-center w-[auto]">
                              <Img
                                src="images/img_close_yellow_900_30x55.svg"
                                className="h-[30px] w-[55px]"
                                alt="close Seven"
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
                              alt="arrowdown Three"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
                      <div className="flex flex-col items-center justify-start pb-[20px] rounded-radius15 w-[100%]">
                        <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                          <div className="flex flex-col gap-[21px] items-center justify-start w-[100%]">
                            <div className="h-[120px] sm:h-[243px] md:h-[auto] relative w-[100%]">
                              <div className="flex flex-col h-[100%] items-center justify-start mt-[30px] mx-[auto] w-[55%]">
                                <div className="flex flex-row gap-[10px] items-center justify-center w-[auto]">
                                  <Img
                                    src="images/img_close_yellow_900_30x55.svg"
                                    className="h-[30px] w-[55px]"
                                    alt="close Eight"
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
                              <div className="md:h-[124px] sm:h-[124px] h-[193px] relative w-[100%]">
                                <div className="md:h-[124px] sm:h-[124px] h-[184px] mb-[-57px] mx-[auto] w-[100%] z-[1]">
                                  <div className="md:h-[181px] sm:h-[181px] h-[184px] m-[auto] w-[100%]">
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
                                      src="images/img_group223_gray_601.svg"
                                      className="absolute h-[181px] inset-y-[0] my-[auto] right-[0] w-[auto]"
                                      alt="Group223 One"
                                    />
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
                                        alt="calculator Four"
                                      />
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start mt-[auto] mx-[auto] pr-[2px] py-[2px] w-[100%]">
                                  <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[94%]">
                                    <Text
                                      className="font-medium text-gray_900 text-left w-[auto]"
                                      variant="body14"
                                    >
                                      Available
                                    </Text>
                                    <div className="flex flex-row items-center justify-between mt-[8px] w-[100%]">
                                      <Text
                                        className="font-bold text-gray_900 text-left w-[auto]"
                                        variant="body12"
                                      >
                                        0.00 SWP
                                      </Text>
                                      <Text
                                        className="font-bold text-blue_A201 text-left w-[auto]"
                                        variant="body12"
                                      >
                                        Get SWP
                                      </Text>
                                    </div>
                                    <Text
                                      className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
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
                                      SWP staked
                                    </Text>
                                    <Text
                                      className="font-bold mt-[8px] text-gray_900 text-left w-[auto]"
                                      variant="body12"
                                    >
                                      43.56 SWP
                                    </Text>
                                    <Text
                                      className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
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
                              <div className="h-[59px] md:h-[84px] sm:h-[84px] mt-[26px] relative w-[100%]">
                                <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] w-[29%]">
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
                                    2.36 SWP
                                  </Text>
                                  <Text
                                    className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
                                    variant="body14"
                                  >
                                    $20.42
                                  </Text>
                                </div>
                                <div className="bg-gradient2  flex flex-col h-[100%] items-center justify-end ml-[auto] my-[auto] sm:px-[20px] px-[24px] py-[12px] rounded-radius10 w-[auto]">
                                  <Text
                                    className="font-bold text-left text-white_A700 w-[auto]"
                                    variant="body12"
                                  >
                                    Harvest
                                  </Text>
                                </div>
                                <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-start justify-between mx-[auto] w-[100%]">
                                  <div className="flex flex-col items-start justify-start mt-[17px] w-[auto]">
                                    <Text
                                      className="font-bold text-gray_900 text-left w-[auto]"
                                      variant="body12"
                                    >
                                      2.36 SWP
                                    </Text>
                                    <Text
                                      className="font-medium mt-[3px] text-gray_900 text-left w-[auto]"
                                      variant="body14"
                                    >
                                      $20.42
                                    </Text>
                                  </div>
                                  <Button
                                    className="cursor-pointer font-bold leading-[normal] mb-[6px] min-w-[113px] text-[16px] text-center text-white_A700 w-[auto]"
                                    shape="RoundedBorder10"
                                    size="7xl"
                                    variant="GradientBlueA200DeeppurpleA700"
                                  >
                                    Harvest
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-blue_A200_4c flex flex-col h-[22px] md:h-[auto] sm:h-[auto] items-center justify-center px-[8px] py-[2px] rounded-radius3 w-[53px]">
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowdown Four"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UIkitFarmsPage;
