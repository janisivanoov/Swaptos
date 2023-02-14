import React from "react";

import { List, Button, Img, Text, Line } from "components";

const PoolpageUIKitPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-end justify-end mx-[auto] p-[18px] w-[100%]">
        <div className="flex flex-col gap-[124px] md:gap-[40px] sm:gap-[40px] justify-start mb-[37px] mt-[88px] md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[90%]">
          <div className="flex md:flex-col sm:flex-col flex-row gap-[52px] items-start justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[94%]">
            <List
              className="sm:flex-col flex-row gap-[21px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 md:w-[100%] sm:w-[100%] w-[45%]"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[20px] items-center justify-start mb-[10px] sm:ml-[0] w-[100%]">
                <div className="bg-white_A700 md:h-[356px] sm:h-[356px] h-[432px] p-[27px] sm:px-[20px] relative rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="flex flex-row h-[100%] items-center justify-center ml-[7px] mt-[132px] w-[55%]">
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
                      className="font-bold ml-[5px] text-gray_900 text-left w-[auto]"
                      variant="body5"
                    >
                      0.57123 SWP
                    </Text>
                  </div>
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[6%] w-[82%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between md:ml-[0] sm:ml-[0] ml-[3px] md:w-[100%] sm:w-[100%] w-[99%]">
                          <Text
                            className="font-bold mt-[4px] text-gray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            Free pool
                          </Text>
                          <div className="bg-green_51 flex flex-row gap-[10px] items-center justify-start mb-[5px] px-[12px] py-[3px] rounded-radius13 w-[auto]">
                            <div className="bg-green_A700 h-[8px] rounded-radius50 w-[8px]"></div>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body14"
                            >
                              Active
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[3px] text-gray_900 text-left sm:w-[100%] w-[60%]"
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
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[3px] mt-[26px] text-gray_900 text-left w-[auto]"
                          variant="body7"
                        >
                          You will get
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[3px] mt-[41px] text-gray_900 text-left w-[auto]"
                          variant="body7"
                        >
                          $12.4134
                        </Text>
                        <Button
                          className="cursor-pointer font-bold leading-[normal] md:ml-[0] sm:ml-[0] ml-[3px] mt-[14px] text-[16px] text-center text-white_A700 w-[176px]"
                          shape="RoundedBorder10"
                          size="7xl"
                          variant="GradientPurpleA100IndigoA200"
                        >
                          Connect wallet
                        </Button>
                        <div className="flex flex-row items-start justify-between md:ml-[0] sm:ml-[0] ml-[3px] mt-[24px] md:w-[100%] sm:w-[100%] w-[99%]">
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
                        <div className="flex flex-row items-center justify-between md:ml-[0] sm:ml-[0] ml-[3px] mt-[5px] md:w-[100%] sm:w-[100%] w-[99%]">
                          <Text
                            className="font-medium text-gray_903 text-left w-[auto]"
                            variant="body9"
                          >
                            Pool limit
                          </Text>
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body9"
                          >
                            0.57/2
                          </Text>
                        </div>
                        <div className="bg-bluegray_101 flex flex-col items-start justify-start mt-[10px] rounded-radius8 w-[100%]">
                          <div className="bg-gradient4  h-[16px] rounded-radius8 w-[79%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col gap-[40px] items-center justify-start p-[15px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <Text
                      className="bg-clip-text bg-gradient4  font-bold text-left text-transparent w-[auto]"
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
                  <div className="flex flex-col items-center justify-start mb-[25px] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                          <Text
                            className="bg-gradient4  flex h-[42px] items-center justify-center rounded-radius50 text-center text-white_A700 w-[42px]"
                            variant="body6"
                          >
                            1
                          </Text>
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            Connect your wallet to our website
                          </Text>
                        </div>
                        <Line className="bg-gradient4  h-[27px] md:h-[6px] sm:h-[6px] md:ml-[0] sm:ml-[0] ml-[19px] mt-[2px] rounded-radius3 md:w-[100%] sm:w-[100%] w-[6px]" />
                        <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] sm:w-[100%] w-[55%]">
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
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            Harvest your tokens for free
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-center justify-start sm:ml-[0] pb-[10px] w-[100%]">
                <div className="bg-white_A700 flex flex-col gap-[10px] items-center justify-start p-[27px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="md:h-[330px] sm:h-[330px] h-[333px] relative sm:w-[100%] w-[96%]">
                    <div className="flex flex-row gap-[10px] h-[100%] items-center justify-start mt-[132px] w-[auto]">
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
                                alt="close One"
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
                    <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-col items-start justify-start w-[100%]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="font-bold mt-[2px] text-gray_900 text-left w-[auto]"
                              variant="body4"
                            >
                              Mystic pool
                            </Text>
                            <div className="bg-green_51 flex flex-row gap-[10px] items-center justify-start mb-[5px] px-[12px] py-[3px] rounded-radius13 w-[auto]">
                              <div className="bg-green_A700 h-[8px] rounded-radius50 w-[8px]"></div>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                Active
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="font-medium text-gray_900 text-left sm:w-[100%] w-[61%]"
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
                            className="font-medium mt-[26px] text-gray_900 text-left w-[auto]"
                            variant="body7"
                          >
                            You will get
                          </Text>
                          <Text
                            className="font-medium mt-[41px] text-gray_900 text-left w-[auto]"
                            variant="body7"
                          >
                            $12.4134
                          </Text>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] mt-[14px] text-[16px] text-center text-white_A700 w-[176px]"
                            shape="RoundedBorder10"
                            size="7xl"
                            variant="GradientBlueA200DeeppurpleA700"
                          >
                            Connect wallet
                          </Button>
                          <div className="flex flex-row items-start justify-between mt-[24px] w-[100%]">
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
                          <div className="flex flex-row items-center justify-between mt-[5px] w-[100%]">
                            <Text
                              className="font-medium text-gray_903 text-left w-[auto]"
                              variant="body9"
                            >
                              Pool limit
                            </Text>
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0.57/2
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bluegray_101 flex flex-col items-start justify-start mb-[17px] rounded-radius8 md:w-[100%] sm:w-[100%] w-[97%]">
                    <div className="bg-gradient2  h-[16px] rounded-radius8 w-[79%]"></div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col gap-[40px] items-center justify-start p-[11px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="flex flex-row items-center justify-between mt-[4px] md:w-[100%] sm:w-[100%] w-[97%]">
                    <Text
                      className="bg-clip-text bg-gradient2  font-bold text-left text-transparent w-[auto]"
                      variant="body12"
                    >
                      Stake LP tokens
                    </Text>
                    <Img
                      src="images/img_close_gray_900.svg"
                      className="h-[24px] w-[24px]"
                      alt="close One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start mb-[29px] md:w-[100%] sm:w-[100%] w-[99%]">
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
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            Connect your wallet to our website
                          </Text>
                        </div>
                        <Line className="bg-gradient2  h-[27px] md:h-[6px] sm:h-[6px] md:ml-[0] sm:ml-[0] ml-[19px] mt-[2px] rounded-radius3 md:w-[100%] sm:w-[100%] w-[6px]" />
                        <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] sm:w-[100%] w-[54%]">
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
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            Harvest your tokens for free
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[64px] justify-start md:mt-[0] sm:mt-[0] mt-[23px] md:w-[100%] sm:w-[100%] w-[53%]">
              <div className="flex md:flex-col sm:flex-col flex-row gap-[8px] items-start justify-between w-[100%]">
                <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="bg-white_A700 flex flex-col items-center justify-end p-[23px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                      <Text
                        className="font-bold mt-[69px] text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        You sure you want to withdraw?
                      </Text>
                      <div className="flex flex-col gap-[7px] items-start justify-start mt-[50px] md:w-[100%] sm:w-[100%] w-[97%]">
                        <div className="border-2 border-black_900_33 border-solid flex flex-col items-center justify-end p-[9px] rounded-radius10 w-[100%]">
                          <div className="flex flex-col gap-[9px] items-start justify-start mt-[3px] w-[100%]">
                            <Text
                              className="font-medium text-gray_900_7f1 text-left w-[auto]"
                              variant="body17"
                            >
                              Withdrawal
                            </Text>
                            <div className="flex flex-row items-start justify-between w-[100%]">
                              <Text
                                className="font-medium mt-[2px] text-gray_900 text-left w-[auto]"
                                variant="body7"
                              >
                                0.00
                              </Text>
                              <div className="flex flex-row gap-[5px] items-center justify-end w-[auto]">
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
                                  XXX
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body17"
                        >
                          Withdrawal fee: 0.2 XXX
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[10px] items-center justify-start mt-[46px] md:w-[100%] sm:w-[100%] w-[46%]">
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[142px] text-[16px] text-center text-white_A700 w-[auto]"
                          shape="CircleBorder19"
                          size="4xl"
                          variant="FillBlueA201"
                        >
                          Harvest
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
                </div>
                <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="h-[444px] md:h-[auto] sm:h-[auto] sm:px-[20px] md:px-[40px] px-[56px] relative w-[100%]">
                        <div className="bg-white_A700 h-[444px] m-[auto] rounded-radius20 shadow-bs2 w-[77%]"></div>
                        <div className="absolute flex flex-col gap-[29px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[67%]">
                          <div className="flex flex-col h-[313px] items-center justify-start w-[313px]">
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
                                alt="close Two"
                              />
                            </div>
                            <Text
                              className="font-bold mt-[54px] text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              You sure you want to harvest?
                            </Text>
                            <Text
                              className="font-bold mt-[23px] text-gray_900 text-left w-[auto]"
                              variant="body14"
                            >
                              Prove that you’re not a robot
                            </Text>
                            <div className="bg-bluegray_101 flex flex-col items-center justify-end mt-[40px] p-[61px] sm:px-[20px] md:px-[40px] md:w-[100%] sm:w-[100%] w-[75%]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body17"
                              >
                                Google captcha
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[10px] items-center justify-start md:w-[100%] sm:w-[100%] w-[46%]">
                            <Button
                              className="cursor-pointer font-medium leading-[normal] min-w-[142px] text-[16px] text-center text-white_A700 w-[auto]"
                              shape="CircleBorder19"
                              size="4xl"
                              variant="FillBlueA201"
                            >
                              Harvest
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:ml-[0] sm:ml-[0] ml-[57px] md:w-[100%] sm:w-[100%] w-[66%]">
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[16px] rounded-radius15 shadow-bs2 sm:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[10px] items-start justify-center my-[5px] w-[auto]">
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body14"
                      >
                        Free Pool total harvested
                      </Text>
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        variant="body7"
                      >
                        0.0002 SWPT
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[174px] text-[16px] text-center text-white_A700 w-[auto]"
                      shape="RoundedBorder10"
                      size="7xl"
                      variant="GradientBlueA200DeeppurpleA700"
                    >
                      Withdraw
                    </Button>
                  </div>
                </div>
                <Img
                  src="images/img_group258_gray_504.svg"
                  className="h-[94px] sm:mt-[0] mt-[37px] w-[auto]"
                  alt="Group258"
                />
              </div>
            </div>
          </div>
          <List
            className="border border-deep_purple_A200 border-solid sm:flex-col flex-row gap-[53px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mr-[21px] p-[18px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[99%]"
            orientation="horizontal"
          >
            <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
              <div className="flex flex-col items-center justify-start pb-[43px] rounded-radius15 w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <div className="flex flex-col gap-[12px] justify-start w-[auto]">
                        <div className="flex flex-row gap-[99px] items-start justify-start md:w-[100%] sm:w-[100%] w-[76%]">
                          <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] mb-[8px] rotate-[90deg] rounded-radius29 w-[13%]"></div>
                          <div className="flex flex-row items-center justify-evenly mt-[36px] w-[42%]">
                            <Img
                              src="images/img_youtube.svg"
                              className="h-[30px] w-[30px]"
                              alt="youtube"
                            />
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body4"
                            >
                              XXX
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[55px] md:w-[100%] sm:w-[100%] w-[81%]">
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
                  <div className="flex flex-col gap-[30px] items-center justify-start mt-[20px] md:w-[100%] sm:w-[100%] w-[89%]">
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
                  <div className="flex flex-col font-inter items-center justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[95%]">
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
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            SWAPTOS earned
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
            <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
              <div className="flex flex-col items-center justify-start pb-[43px] rounded-radius15 w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <div className="flex flex-col gap-[12px] justify-start w-[auto]">
                        <div className="flex flex-row gap-[99px] items-start justify-start md:w-[100%] sm:w-[100%] w-[76%]">
                          <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] mb-[8px] rotate-[90deg] rounded-radius29 w-[13%]"></div>
                          <div className="flex flex-row items-center justify-evenly mt-[36px] w-[42%]">
                            <Img
                              src="images/img_youtube.svg"
                              className="h-[30px] w-[30px]"
                              alt="youtube One"
                            />
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body4"
                            >
                              XXX
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[55px] md:w-[100%] sm:w-[100%] w-[81%]">
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
                  <div className="flex flex-col gap-[30px] items-center justify-start mt-[20px] md:w-[100%] sm:w-[100%] w-[89%]">
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
                        src="images/img_group223_gray_903_40x40.png"
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
                  <div className="flex flex-col font-inter items-center justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[95%]">
                    <Button
                      className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[320px]"
                      shape="RoundedBorder23"
                      size="6xl"
                      variant="GradientBlueA200DeeppurpleA700"
                    >
                      Approve BNB
                    </Button>
                    <div className="flex flex-row font-poppins items-end justify-between mt-[32px] w-[100%]">
                      <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            SWAPTOS earned
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
            <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
              <div className="flex flex-col items-center justify-start pb-[43px] rounded-radius15 w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <div className="flex flex-col gap-[12px] justify-start w-[auto]">
                        <div className="flex flex-row gap-[99px] items-start justify-start md:w-[100%] sm:w-[100%] w-[76%]">
                          <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] mb-[8px] rotate-[90deg] rounded-radius29 w-[13%]"></div>
                          <div className="flex flex-row items-center justify-evenly mt-[36px] w-[42%]">
                            <Img
                              src="images/img_youtube.svg"
                              className="h-[30px] w-[30px]"
                              alt="youtube Two"
                            />
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body4"
                            >
                              XXX
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[55px] md:w-[100%] sm:w-[100%] w-[81%]">
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
                  <div className="flex flex-col gap-[30px] items-center justify-start mt-[20px] md:w-[100%] sm:w-[100%] w-[89%]">
                    <div className="md:h-[44px] sm:h-[44px] h-[46px] relative w-[100%]">
                      <div className="absolute border-2 border-gray_903 border-solid flex flex-col h-[max-content] inset-y-[0] items-start justify-end left-[0] my-[auto] p-[15px] rounded-radius5 w-[81%]">
                        <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[64px] md:w-[100%] sm:w-[100%] w-[14%]">
                          <div className="flex flex-col items-center justify-start w-[100%]">
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body14"
                            >
                              APR
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-row h-[max-content] inset-y-[0] items-center justify-between my-[auto] right-[0] w-[61%]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          410%
                        </Text>
                        <Button
                          className="flex h-[40px] items-center justify-center w-[40px]"
                          shape="icbRoundedBorder7"
                          size="lgIcn"
                          variant="icbOutlineGray903"
                        >
                          <Img
                            src="images/img_group47.png"
                            className=""
                            alt="Group178"
                          />
                        </Button>
                      </div>
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
                  <div className="flex flex-col font-inter items-center justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[95%]">
                    <Button
                      className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[320px]"
                      shape="RoundedBorder23"
                      size="6xl"
                      variant="GradientBlueA200DeeppurpleA700"
                    >
                      Stake BNB
                    </Button>
                    <div className="flex flex-row font-poppins items-center justify-between mt-[32px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          SWAPTOS staked
                        </Text>
                        <Text
                          className="font-bold mt-[8px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          0.00 SWAPTOS
                        </Text>
                        <Text
                          className="font-medium mt-[3px] text-green_A700 text-left w-[auto]"
                          variant="body14"
                        >
                          $0.0000
                        </Text>
                        <Text
                          className="font-medium mt-[16px] text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          SWAPTOS earned
                        </Text>
                        <Text
                          className="font-bold mt-[8px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          0.00 SWAPTOS
                        </Text>
                        <Text
                          className="font-medium mt-[3px] text-green_A700 text-left w-[auto]"
                          variant="body14"
                        >
                          $0.0000
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[32px] items-center justify-start w-[auto]">
                        <div className="flex flex-row gap-[13px] items-center justify-between w-[100%]">
                          <div className="bg-white_A700_75 border-2 border-gray_600_36 border-solid flex flex-col items-center justify-start p-[4px] rounded-radius8 w-[auto]">
                            <Img
                              src="images/img_plus_gray_900.svg"
                              className="h-[32px] w-[32px]"
                              alt="plus"
                            />
                          </div>
                          <div className="bg-white_A700_75 border-2 border-gray_600_36 border-solid flex flex-col items-center justify-start p-[12px] rounded-radius8 w-[auto]">
                            <Img
                              src="images/img_vector_gray_900_2x23.svg"
                              className="h-[2px] my-[5px] w-[auto]"
                              alt="Vector"
                            />
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[113px] text-[16px] text-center text-gray_400 w-[auto]"
                          shape="RoundedBorder10"
                          size="7xl"
                          variant="FillGray903"
                        >
                          Harvest
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gradient14  mt-[13px] p-[2px] rounded-radius23 w-[100%] ">
                      <div className="bg-white_A700 border-solid flex flex-col font-inter h-[47px] md:h-[auto] sm:h-[auto] items-center justify-center sm:px-[20px] px-[28px] py-[14px] rounded-radius23">
                        <div className="flex flex-col items-center justify-center w-[auto]">
                          <Text
                            className="bg-clip-text bg-gradient2  font-bold text-left text-transparent w-[auto]"
                            variant="body12"
                          >
                            Compound
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-poppins items-center justify-start mt-[12px] w-[100%]">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
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
                        <div className="flex flex-row items-start justify-between w-[100%]">
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
            <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
              <div className="flex flex-col items-center justify-start pb-[43px] rounded-radius15 w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <div className="flex flex-col gap-[12px] justify-start w-[auto]">
                        <div className="flex flex-row gap-[99px] items-start justify-start md:w-[100%] sm:w-[100%] w-[76%]">
                          <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] mb-[8px] rotate-[90deg] rounded-radius29 w-[13%]"></div>
                          <div className="flex flex-row items-center justify-evenly mt-[36px] w-[42%]">
                            <Img
                              src="images/img_youtube.svg"
                              className="h-[30px] w-[30px]"
                              alt="youtube Three"
                            />
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body4"
                            >
                              XXX
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[55px] md:w-[100%] sm:w-[100%] w-[81%]">
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
                  <div className="flex flex-col gap-[30px] items-center justify-start mt-[20px] md:w-[100%] sm:w-[100%] w-[89%]">
                    <div className="md:h-[44px] sm:h-[44px] h-[46px] relative w-[100%]">
                      <div className="absolute border-2 border-gray_903 border-solid flex flex-col h-[max-content] inset-y-[0] items-center justify-end left-[0] my-[auto] p-[14px] rounded-radius5 w-[81%]">
                        <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[38%]">
                          <div className="flex flex-row gap-[10px] items-center justify-start w-[100%]">
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body14"
                            >
                              APR
                            </Text>
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              410%
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_group223_gray_903_40x180.png"
                        className="absolute h-[40px] inset-y-[0] my-[auto] object-cover right-[0] w-[auto]"
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
                          alt="calculator Three"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[32px] md:w-[100%] sm:w-[100%] w-[95%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          SWAPTOS staked
                        </Text>
                        <Text
                          className="font-bold mt-[8px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          0.00 SWAPTOS
                        </Text>
                        <Text
                          className="font-medium mt-[3px] text-green_A700 text-left w-[auto]"
                          variant="body14"
                        >
                          $0.0000
                        </Text>
                        <Text
                          className="font-medium mt-[16px] text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          SWAPTOS earned
                        </Text>
                        <Text
                          className="font-bold mt-[8px] text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          0.00 SWAPTOS
                        </Text>
                        <Text
                          className="font-medium mt-[3px] text-green_A700 text-left w-[auto]"
                          variant="body14"
                        >
                          $0.0000
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[32px] items-center justify-start w-[auto]">
                        <div className="flex flex-row gap-[13px] items-center justify-between w-[100%]">
                          <div className="bg-white_A700 border-2 border-gray_600_4c border-solid flex flex-col items-center justify-start p-[4px] rounded-radius8 w-[auto]">
                            <Img
                              src="images/img_plus_gray_900.svg"
                              className="h-[32px] w-[32px]"
                              alt="plus One"
                            />
                          </div>
                          <div className="bg-white_A700 border-2 border-gray_600_4c border-solid flex flex-col items-center justify-start p-[12px] rounded-radius8 w-[auto]">
                            <Img
                              src="images/img_vector_gray_900_2x23.svg"
                              className="h-[2px] my-[5px] w-[auto]"
                              alt="Vector One"
                            />
                          </div>
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
                    <div className="bg-gradient2  mt-[13px] p-[2px] rounded-radius23 w-[100%] ">
                      <div className="bg-white_A700 border-solid flex flex-col font-inter h-[47px] md:h-[auto] sm:h-[auto] items-center justify-center sm:px-[20px] px-[28px] py-[14px] rounded-radius23">
                        <div className="flex flex-col items-center justify-center w-[auto]">
                          <Text
                            className="bg-clip-text bg-gradient2  font-bold text-left text-transparent w-[auto]"
                            variant="body12"
                          >
                            Compound
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-poppins items-center justify-start mt-[12px] w-[100%]">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
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
                        <div className="flex flex-row items-start justify-between w-[100%]">
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
          </List>
        </div>
      </div>
    </>
  );
};

export default PoolpageUIKitPage;
