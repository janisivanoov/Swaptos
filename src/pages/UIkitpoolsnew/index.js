import React from "react";

import { Text, Img, Button, List, Line } from "components";

const UIkitpoolsnewPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] p-[72px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col gap-[186px] md:gap-[40px] sm:gap-[40px] justify-start max-w-[3044px] mx-[auto] w-[100%]">
          <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[75px] md:w-[100%] sm:w-[100%] w-[98%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
              <div className="border border-deep_purple_A200 border-solid flex md:flex-1 sm:flex-1 md:flex-col sm:flex-col flex-row gap-[29px] items-start justify-between md:mt-[0] sm:mt-[0] mt-[135px] p-[4px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[15px] md:mt-[0] sm:mt-[0] mt-[16px] md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="bg-white_A700 flex flex-col items-end justify-start pb-[20px] sm:px-[20px] px-[23px] rounded-radius20 shadow-bs2 sm:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[22px] items-center justify-start sm:w-[100%] w-[auto]">
                      <div className="flex flex-row gap-[278px] items-start justify-between sm:w-[100%] w-[auto]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Calculate APR
                        </Text>
                        <Img
                          src="images/img_close_gray_900.svg"
                          className="h-[24px] w-[24px]"
                          alt="close"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[71%]">
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
                      <div className="flex flex-row gap-[9px] items-start justify-start w-[auto]">
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
                          size="md"
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
                      <div className="border-2 border-black_900_33 border-solid flex flex-col items-center justify-start p-[10px] rounded-radius10 md:w-[100%] sm:w-[100%] w-[72%]">
                        <div className="flex flex-row items-end justify-start md:w-[100%] sm:w-[100%] w-[98%]">
                          <div className="flex flex-col gap-[8px] items-start justify-start mb-[2px] w-[30%]">
                            <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                              <div className="bg-yellow_800 flex flex-col h-[12px] items-center justify-start rounded-radius50 w-[12px]">
                                <Img
                                  src="images/img_arrowup_white_a700.svg"
                                  className="h-[8px] w-[8px]"
                                  alt="arrowup"
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
                            Buy Swaptos
                          </Button>
                        </div>
                      </div>
                      <List
                        className="flex-col gap-[22px] grid items-center w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex sm:flex-1 flex-col gap-[6px] items-center justify-start sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body9"
                          >
                            Without boost
                          </Text>
                          <div className="flex flex-col items-center justify-start w-[100%]">
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
                                            size="smIcn"
                                            variant="icbFillYellow800"
                                          >
                                            <Img
                                              src="images/img_arrowup_white_a700.svg"
                                              className="h-[17px]"
                                              alt="arrowup One"
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
                                    </div>
                                  </div>
                                  <Line className="absolute bg-gray_500_66 h-[67px] inset-y-[0] left-[21%] my-[auto] w-[2px]" />
                                </div>
                                <Line className="absolute bg-gray_500_66 bottom-[40%] h-[2px] inset-x-[0] mx-[auto] w-[100%]" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[150px] sm:h-[212px] md:h-[auto] relative w-[100%]">
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
                                alt="materialsymbol"
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
                                          size="smIcn"
                                          variant="icbFillYellow800"
                                        >
                                          <Img
                                            src="images/img_arrowup_white_a700.svg"
                                            className="h-[17px]"
                                            alt="arrowup Two"
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
                <div className="flex flex-col items-center justify-start mr-[16px] md:mt-[0] sm:mt-[0] mt-[16px] md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="bg-white_A700 flex flex-col items-end justify-start pb-[20px] sm:px-[20px] px-[23px] rounded-radius20 shadow-bs2 sm:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[22px] items-center justify-start pt-[24px] sm:w-[100%] w-[auto]">
                      <div className="flex flex-row gap-[278px] items-start justify-between sm:w-[100%] w-[auto]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Calculate APR
                        </Text>
                        <Img
                          src="images/img_close_gray_900.svg"
                          className="h-[24px] w-[24px]"
                          alt="close One"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[72%]">
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
                      <div className="flex flex-row gap-[9px] items-start justify-start w-[auto]">
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
                          size="md"
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
                      <div className="border-2 border-black_900_33 border-solid flex flex-col items-center justify-start p-[10px] rounded-radius10 md:w-[100%] sm:w-[100%] w-[73%]">
                        <div className="flex flex-row items-end justify-start md:w-[100%] sm:w-[100%] w-[98%]">
                          <div className="flex flex-col gap-[8px] items-start justify-start mb-[2px] w-[30%]">
                            <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                              <div className="bg-yellow_800 flex flex-col h-[12px] items-center justify-start rounded-radius50 w-[12px]">
                                <Img
                                  src="images/img_arrowup_white_a700.svg"
                                  className="h-[8px] w-[8px]"
                                  alt="arrowup Three"
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
                          <Img
                            src="images/img_youtube.svg"
                            className="h-[24px] ml-[5px] mt-[25px] w-[24px]"
                            alt="youtube One"
                          />
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[115px] ml-[51px] my-[5px] text-[12px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder10"
                            size="4xl"
                            variant="GradientBlueA200DeeppurpleA700"
                          >
                            Buy Swaptos
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[auto]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="md:h-[67px] sm:h-[67px] h-[83px] relative w-[100%]">
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
                            <div className="h-[67px] md:h-[auto] sm:h-[auto] mt-[auto] mx-[auto] w-[100%]">
                              <div className="absolute h-[67px] md:h-[auto] sm:h-[auto] inset-[0] justify-center m-[auto] sm:w-[100%] w-[95%]">
                                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                                  <List
                                    className="flex-col gap-[10px] grid items-center w-[100%]"
                                    orientation="vertical"
                                  >
                                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start my-[0] w-[100%]">
                                      <div className="flex flex-row gap-[9px] items-center justify-start w-[auto]">
                                        <Button
                                          className="flex h-[24px] items-center justify-center w-[24px]"
                                          shape="icbCircleBorder11"
                                          size="smIcn"
                                          variant="icbFillYellow800"
                                        >
                                          <Img
                                            src="images/img_arrowup_white_a700.svg"
                                            className="h-[17px]"
                                            alt="arrowup Four"
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
                                    <div className="flex flex-1 flex-row items-center justify-between my-[0] w-[100%]">
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
                                  </List>
                                </div>
                                <Line className="absolute bg-gray_500_66 h-[67px] inset-y-[0] left-[21%] my-[auto] w-[2px]" />
                              </div>
                              <Line className="absolute bg-gray_500_66 bottom-[40%] h-[2px] inset-x-[0] mx-[auto] w-[100%]" />
                            </div>
                          </div>
                        </div>
                      </div>
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
              <div className="border border-deep_purple_A200 border-solid flex md:flex-1 sm:flex-1 md:flex-col sm:flex-col flex-row md:gap-[47px] sm:gap-[47px] items-end justify-between mb-[94px] p-[13px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[auto]">
                <List
                  className="sm:flex-col flex-row gap-[40px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 mb-[50px] md:ml-[0] sm:ml-[0] ml-[7px] md:mt-[0] sm:mt-[0] mt-[143px] w-[auto]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
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
                                        alt="refresh"
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
                  <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
                    <div className="flex flex-col items-center justify-start pb-[43px] rounded-radius15 w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col items-center justify-end p-[17px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group45.png')",
                          }}
                        >
                          <div className="flex flex-col gap-[8px] items-center justify-start mt-[15px] md:w-[100%] sm:w-[100%] w-[67%]">
                            <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                              <Button
                                className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                                size="mdIcn"
                                variant="icbGradientBlueA200DeeppurpleA700"
                              >
                                <Img
                                  src="images/img_refresh.svg"
                                  className=""
                                  alt="refresh One"
                                />
                              </Button>
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body4"
                              >
                                SWP
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[100%]">
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
                        <div className="flex flex-col font-inter items-center justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[85%]">
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
                </List>
                <List
                  className="sm:flex-col flex-row gap-[40px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 mb-[50px] md:mt-[0] sm:mt-[0] mt-[5px] w-[auto]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius15 shadow-bs2 w-[100%]">
                    <div className="flex flex-col items-center justify-start pb-[43px] rounded-radius15 w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <div className="flex flex-col gap-[12px] justify-start w-[auto]">
                              <div className="flex flex-row gap-[99px] items-start justify-start mr-[71px] md:w-[100%] sm:w-[100%] w-[77%]">
                                <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] mb-[8px] rotate-[90deg] rounded-radius29 w-[20%]"></div>
                                <div className="flex flex-row items-center justify-evenly mt-[36px] w-[38%]">
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
                                  alt="GroupFortySeven"
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
                        <div className="flex flex-col font-inter items-center justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[85%]">
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
                                SWP staked
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
                              <Text
                                className="font-medium mt-[16px] text-gray_900 text-left w-[auto]"
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
                              <div className="flex flex-row gap-[99px] items-start justify-start mr-[71px] md:w-[100%] sm:w-[100%] w-[77%]">
                                <div className="backdrop-opacity-[0.5] bg-gradient4  blur-[100.00px] h-[58px] mb-[8px] rotate-[90deg] rounded-radius29 w-[20%]"></div>
                                <div className="flex flex-row items-center justify-evenly mt-[36px] w-[38%]">
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
                        <div className="flex flex-col items-center justify-start mt-[32px] md:w-[100%] sm:w-[100%] w-[85%]">
                          <div className="flex flex-row items-center justify-between w-[100%]">
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
                                className="font-medium mt-[3px] text-green_A700 text-left w-[auto]"
                                variant="body14"
                              >
                                $0.0000
                              </Text>
                              <Text
                                className="font-medium mt-[16px] text-gray_900 text-left w-[auto]"
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
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between md:w-[100%] sm:w-[100%] w-[52%]">
              <div className="flex flex-col gap-[221px] md:gap-[40px] sm:gap-[40px] items-center justify-start md:mt-[0] sm:mt-[0] mt-[67px] md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="bg-white_A700 flex flex-col items-center justify-start p-[14px] rounded-radius20 shadow-bs2 w-[100%]">
                      <div className="flex flex-col gap-[38px] items-center justify-start mb-[26px] md:w-[100%] sm:w-[100%] w-[95%]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Stake BNB tokens
                            </Text>
                            <Img
                              src="images/img_close_gray_900.svg"
                              className="h-[24px] w-[24px]"
                              alt="close Two"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start mt-[46px] md:w-[100%] sm:w-[100%] w-[73%]">
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
                              <div className="flex flex-row items-start justify-between w-[100%]">
                                <Text
                                  className="font-medium text-left text-red_600 w-[auto]"
                                  variant="body17"
                                >
                                  Insufficient amount
                                </Text>
                                <a
                                  className="font-medium text-[12px] text-blue_A201 text-left underline w-[auto]"
                                  href="#"
                                >
                                  Buy XXX
                                </a>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] mt-[20px] text-[16px] text-center text-gray_400 w-[203px]"
                            shape="CircleBorder19"
                            size="4xl"
                            variant="FillGray903"
                          >
                            Insufficient amount
                          </Button>
                          <Text
                            className="font-medium mt-[12px] text-gray_600 text-left w-[auto]"
                            variant="body17"
                          >
                            Cancel
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[13px] items-center justify-start w-[100%]">
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body9"
                          >
                            Calculate your gains
                          </Text>
                          <div className="md:h-[67px] sm:h-[67px] h-[83px] relative w-[100%]">
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
                            <div className="h-[67px] md:h-[auto] sm:h-[auto] mt-[auto] mx-[auto] w-[100%]">
                              <div className="absolute h-[67px] md:h-[auto] sm:h-[auto] inset-[0] justify-center m-[auto] sm:w-[100%] w-[95%]">
                                <div className="absolute bottom-[0] md:h-[54px] sm:h-[54px] h-[58px] inset-x-[0] mx-[auto] w-[100%]">
                                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
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
                                              alt="eye Three"
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
                                  <div className="absolute bottom-[0] flex flex-row items-center justify-start left-[0] w-[75%]">
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
                                </div>
                                <Line className="absolute bg-gray_500_66 h-[67px] inset-y-[0] left-[21%] my-[auto] w-[2px]" />
                              </div>
                              <Line className="absolute bg-gray_500_66 bottom-[40%] h-[2px] inset-x-[0] mx-[auto] w-[100%]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="bg-white_A700 flex md:h-[404px] sm:h-[404px] h-[444px] justify-end p-[14px] relative rounded-radius20 shadow-bs2 w-[100%]">
                      <div className="bg-bluegray_101 flex flex-col h-[100%] items-center justify-end mb-[101px] mt-[auto] mx-[auto] p-[61px] sm:px-[20px] md:px-[40px] w-[89%]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body17"
                        >
                          Google captcha
                        </Text>
                      </div>
                      <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[89%]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Harvest
                            </Text>
                            <Img
                              src="images/img_close_gray_900.svg"
                              className="h-[24px] w-[24px]"
                              alt="close Three"
                            />
                          </div>
                          <Text
                            className="font-bold mt-[52px] text-gray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            You sure you want to harvest?
                          </Text>
                          <Text
                            className="font-bold mt-[16px] text-gray_900 text-left w-[auto]"
                            variant="body12"
                          >
                            Prove that you’re not a robot
                          </Text>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[142px] mt-[205px] text-[16px] text-center text-white_A700 w-[auto]"
                            shape="CircleBorder19"
                            size="4xl"
                            variant="FillBlueA201"
                          >
                            Harvest
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
                </div>
              </div>
              <div className="flex flex-col gap-[59px] justify-start mb-[60px] md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[20px] md:w-[100%] sm:w-[100%] w-[54%]">
                  <div className="bg-white_A700 flex flex-col items-end justify-start p-[27px] sm:px-[20px] rounded-radius15 shadow-bs2 w-[100%]">
                    <div className="flex flex-col items-center justify-start my-[13px] md:w-[100%] sm:w-[100%] w-[95%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-col items-center justify-start w-[auto]">
                          <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
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
                  </div>
                  <div className="border border-deep_purple_A200 border-solid flex flex-col font-inter items-center justify-end mt-[28px] p-[17px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[77%]">
                    <Button
                      className="cursor-pointer font-bold leading-[normal] mt-[2px] text-[16px] text-center text-white_A700 w-[320px]"
                      shape="RoundedBorder23"
                      size="6xl"
                      variant="GradientBlueA200DeeppurpleA700"
                    >
                      Connect wallet
                    </Button>
                    <Button
                      className="flex items-center justify-center mt-[23px] text-center w-[320px]"
                      leftIcon={
                        <Img
                          src="images/img_youtube.svg"
                          className="mr-[5px] text-center"
                          alt="youtube"
                        />
                      }
                      shape="RoundedBorder23"
                      size="5xl"
                      variant="GradientBlueA200DeeppurpleA700"
                    >
                      <div className="bg-transparent cursor-pointer font-bold leading-[normal] text-[16px] text-left text-white_A700">
                        Approve BNB
                      </div>
                    </Button>
                    <Button
                      className="flex items-center justify-center mt-[30px] text-center w-[320px]"
                      leftIcon={
                        <Img
                          src="images/img_youtube.svg"
                          className="mr-[5px] text-center"
                          alt="youtube"
                        />
                      }
                      shape="RoundedBorder23"
                      size="5xl"
                      variant="GradientBlueA200DeeppurpleA700"
                    >
                      <div className="bg-transparent cursor-pointer font-bold leading-[normal] text-[16px] text-left text-white_A700">
                        Stake BNB
                      </div>
                    </Button>
                    <div className="bg-gradient2  flex flex-col h-[47px] md:h-[auto] sm:h-[auto] items-center justify-center mt-[30px] sm:px-[20px] px-[28px] py-[14px] rounded-radius23 w-[320px]">
                      <div className="bg-white_A700 h-[30px] rounded-radius50 w-[30px]"></div>
                    </div>
                    <div className="bg-gradient9  flex flex-col gap-[10px] items-center justify-center mt-[20px] sm:px-[20px] px-[28px] py-[14px] rounded-radius23 w-[320px]">
                      <div className="bg-gradient9  flex flex-col items-center justify-center sm:px-[20px] px-[28px] py-[14px] rounded-radius23 w-[320px]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body12"
                        >
                          Connect wallet
                        </Text>
                      </div>
                      <Img
                        src="images/img_vector_white_a700.svg"
                        className="h-[5px] w-[12px]"
                        alt="Vector Two"
                      />
                    </div>
                  </div>
                  <div className="bg-gradient2  md:ml-[0] md:w-[100%] ml-[24px] mt-[33px] p-[2px] rounded-radius23 sm:ml-[0] sm:w-[100%] w-[69%] ">
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
                  <div className="font-inter md:h-[57px] sm:h-[57px] h-[58px] md:ml-[0] sm:ml-[0] ml-[24px] mt-[10px] relative md:w-[100%] sm:w-[100%] w-[69%]">
                    <div className="absolute bg-gradient2  p-[2px] rounded-radius23 w-[100%] ">
                      <div className="absolute bg-white_A700 border-solid flex flex-col h-[47px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-center mx-[auto] sm:px-[20px] px-[28px] py-[14px] rounded-radius23 shadow-bs3 top-[0]">
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
                    <Img
                      src="images/img_cursor.svg"
                      className="absolute bottom-[0] h-[19px] left-[39%] w-[auto]"
                      alt="cursor"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                  <div className="flex md:flex-1 sm:flex-1 flex-col gap-[40px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                    <Img
                      src="images/img_group258_gray_504.svg"
                      className="h-[94px] w-[auto]"
                      alt="Group258"
                    />
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="border border-deep_purple_A200 border-solid flex flex-col gap-[11px] items-center justify-start p-[20px] rounded-radius5 w-[auto]">
                        <div className="bg-white_A700 border-2 border-gray_600_4c border-solid flex flex-col items-center justify-start p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_plus_gray_900.svg"
                            className="h-[32px] w-[32px]"
                            alt="plus Two"
                          />
                        </div>
                        <div className="bg-gray_903 border-2 border-gray_600_4c border-solid flex flex-col items-center justify-start p-[4px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_plus_gray_900.svg"
                            className="h-[32px] w-[32px]"
                            alt="plus Three"
                          />
                        </div>
                      </div>
                      <div className="border border-deep_purple_A200 border-solid flex flex-col gap-[11px] items-center justify-start p-[20px] rounded-radius5 w-[auto]">
                        <div className="bg-white_A700 border-2 border-gray_600_4c border-solid flex flex-col items-center justify-start p-[12px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_vector_gray_900_2x23.svg"
                            className="h-[2px] my-[5px] w-[auto]"
                            alt="Vector Three"
                          />
                        </div>
                        <div className="bg-gray_903 border-2 border-gray_600_4c border-solid flex flex-col items-center justify-start p-[12px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_vector_gray_900_2x23.svg"
                            className="h-[2px] my-[5px] w-[auto]"
                            alt="Vector Four"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="bg-white_A700 flex md:h-[345px] sm:h-[345px] h-[384px] justify-end p-[14px] relative rounded-radius20 shadow-bs2 w-[100%]">
                        <div className="flex flex-col gap-[7px] h-[100%] items-start justify-start mb-[118px] mt-[auto] mx-[auto] w-[65%]">
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
                        <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[89%]">
                          <div className="flex flex-col items-center justify-start w-[100%]">
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                Withdraw
                              </Text>
                              <Img
                                src="images/img_close_gray_900.svg"
                                className="h-[24px] w-[24px]"
                                alt="close Four"
                              />
                            </div>
                            <Text
                              className="font-bold mt-[50px] text-gray_900 text-left w-[auto]"
                              variant="body4"
                            >
                              You sure you want to withdraw?
                            </Text>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] min-w-[158px] mt-[179px] text-[16px] text-center text-white_A700 w-[auto]"
                              shape="CircleBorder19"
                              size="4xl"
                              variant="FillBlueA201"
                            >
                              Withdraw
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row gap-[40px] items-end justify-start mr-[773px] p-[75px] sm:px-[20px] md:px-[40px] md:w-[100%] sm:w-[100%] w-[75%]">
            <div className="flex flex-col items-center justify-start mb-[38px] md:mt-[0] sm:mt-[0] mt-[8px] md:w-[100%] sm:w-[100%] w-[56%]">
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
                                    alt="refresh Two"
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
                          alt="close Five"
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
                          alt="close Six"
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
                                          alt="refresh Three"
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
                                          alt="close Seven"
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
                                      alt="eye Four"
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
            <div className="bg-white_A700 flex h-[378px] md:h-[566px] sm:h-[566px] justify-end mb-[38px] md:mt-[0] sm:mt-[0] mt-[406px] pt-[30px] sm:px-[20px] px-[30px] relative rounded-radius20 shadow-bs2 md:w-[100%] sm:w-[100%] w-[33%]">
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
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[97px] items-start justify-start mt-[26px] md:w-[100%] sm:w-[100%] w-[80%]">
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[42%]">
                        <div className="flex flex-col items-start justify-start w-[100%]">
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body7"
                          >
                            You won
                          </Text>
                          <div className="flex flex-row gap-[10px] items-center justify-start mt-[4px] w-[auto]">
                            <Button
                              className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                              size="mdIcn"
                              variant="icbFillTeal400"
                            >
                              <Img
                                src="images/img_eye_white_a700.svg"
                                className=""
                                alt="eye Five"
                              />
                            </Button>
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body5"
                            >
                              0.57123 USDT
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] sm:mt-[0] mt-[3px] text-[16px] text-center text-white_A700 w-[176px]"
                        shape="RoundedBorder10"
                        size="7xl"
                        variant="GradientBlueA200DeeppurpleA700"
                      >
                        Claim
                      </Button>
                    </div>
                    <div className="flex flex-row items-start justify-between mt-[44px] md:w-[100%] sm:w-[100%] w-[80%]">
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
                  alt="Group291 Two"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UIkitpoolsnewPage;
