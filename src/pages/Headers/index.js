import React from "react";

import { Button, Img, Text, List } from "components";

const HeadersPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col gap-[35px] justify-start mx-[auto] pb-[101px] pr-[101px] sm:pr-[20px] md:pr-[40px] w-[100%]">
        <Button
          className="flex h-[60px] items-center justify-center rounded-radius50 w-[60px]"
          size="lgIcn"
          variant="icbGradientBlueA200DeeppurpleA700"
        >
          <Img src="images/img_refresh.svg" className="" alt="refresh" />
        </Button>
        <div className="flex flex-col gap-[30px] items-center mr-[75px] pl-[156px] sm:pl-[20px] md:pl-[40px] md:w-[100%] sm:w-[100%] w-[97%]">
          <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[97%]">
            <div className="bg-white_A700 flex flex-col items-center justify-end p-[28px] sm:px-[20px] w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[3px] md:w-[100%] sm:w-[100%] w-[64%]">
                <div className="flex flex-col font-poppins items-center justify-end mb-[3px] p-[12px] rounded-radius7 md:w-[100%] sm:w-[100%] w-[12%]">
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
                <div className="flex flex-col font-poppins gap-[8px] justify-start md:ml-[0] sm:ml-[0] ml-[70px] md:mt-[0] sm:mt-[0] mt-[12px] md:w-[100%] sm:w-[100%] w-[51%]">
                  <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start sm:w-[100%] w-[auto]">
                    <div className="flex flex-col items-center justify-center w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Main
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Trade
                      </Text>
                      <Img
                        src="images/img_arrowup_gray_900_16x16.svg"
                        className="h-[16px] w-[16px]"
                        alt="arrowup"
                      />
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Earn
                      </Text>
                      <Img
                        src="images/img_arrowup_gray_900_16x16.svg"
                        className="h-[16px] w-[16px]"
                        alt="arrowup One"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Extra APR
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Referral program
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient2  h-[8px] md:ml-[0] sm:ml-[0] ml-[18px] rounded-radius50 w-[8px]"></div>
                </div>
                <Button
                  className="flex items-center justify-center md:ml-[0] md:mt-[0] ml-[213px] mt-[2px] sm:ml-[0] sm:mt-[0] text-center"
                  leftIcon={
                    <Img
                      src="images/img_volume.svg"
                      className="mr-[10px] text-center"
                      alt="volume"
                    />
                  }
                  shape="RoundedBorder23"
                  size="5xl"
                  variant="GradientBlueA200DeeppurpleA700"
                >
                  <div className="bg-transparent cursor-pointer font-bold font-inter leading-[normal] text-[16px] text-left text-white_A700">
                    0x9547...3258
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <List
            className="flex-col gap-[29px] grid items-center w-[100%]"
            orientation="vertical"
          >
            <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="border border-deep_purple_A200 border-solid flex flex-col gap-[30px] items-center justify-start p-[20px] rounded-radius5 w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="bg-white_A700 flex flex-col items-center justify-end p-[28px] sm:px-[20px] w-[100%]">
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[3px] md:w-[100%] sm:w-[100%] w-[64%]">
                        <div className="flex flex-col font-poppins items-center justify-end mb-[3px] p-[12px] rounded-radius7 md:w-[100%] sm:w-[100%] w-[12%]">
                          <div className="flex flex-row gap-[14px] items-end justify-start rotate-[90deg] md:w-[100%] sm:w-[100%] w-[91%]">
                            <Img
                              src="images/img_union.png"
                              className="h-[24px] md:h-[auto] sm:h-[auto] object-cover w-[auto]"
                              alt="Union One"
                            />
                            <Text
                              className="bg-clip-text bg-gradient2  font-bold mt-[6px] rotate-[-90deg] text-left text-transparent w-[auto]"
                              variant="body12"
                            >
                              Swapos
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col font-poppins gap-[8px] justify-start md:ml-[0] sm:ml-[0] ml-[70px] md:mt-[0] sm:mt-[0] mt-[12px] md:w-[100%] sm:w-[100%] w-[51%]">
                          <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start sm:w-[100%] w-[auto]">
                            <div className="flex flex-col items-center justify-center w-[auto]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                Main
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                Trade
                              </Text>
                              <Img
                                src="images/img_arrowup_gray_900_16x16.svg"
                                className="h-[16px] w-[16px]"
                                alt="arrowup Two"
                              />
                            </div>
                            <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                Earn
                              </Text>
                              <Img
                                src="images/img_arrowup_gray_900_16x16.svg"
                                className="h-[16px] w-[16px]"
                                alt="arrowup One"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-center w-[auto]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                Extra APR
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-center w-[auto]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                Referral program
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gradient2  h-[8px] md:ml-[0] sm:ml-[0] ml-[18px] rounded-radius50 w-[8px]"></div>
                        </div>
                        <Button
                          className="cursor-pointer font-bold font-inter leading-[normal] min-w-[175px] md:ml-[0] sm:ml-[0] ml-[213px] md:mt-[0] sm:mt-[0] mt-[2px] text-[16px] text-center text-white_A700 w-[auto]"
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
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="bg-white_A700 flex flex-col items-center justify-end p-[28px] sm:px-[20px] w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[3px] md:w-[100%] sm:w-[100%] w-[64%]">
                      <div className="flex flex-col font-poppins items-center justify-end mb-[3px] p-[12px] rounded-radius7 md:w-[100%] sm:w-[100%] w-[12%]">
                        <div className="flex flex-row gap-[14px] items-end justify-start rotate-[90deg] md:w-[100%] sm:w-[100%] w-[91%]">
                          <Img
                            src="images/img_union.png"
                            className="h-[24px] md:h-[auto] sm:h-[auto] object-cover w-[auto]"
                            alt="Union One"
                          />
                          <Text
                            className="bg-clip-text bg-gradient2  font-bold mt-[6px] rotate-[-90deg] text-left text-transparent w-[auto]"
                            variant="body12"
                          >
                            Swapos
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col font-poppins gap-[8px] justify-start md:ml-[0] sm:ml-[0] ml-[70px] md:mt-[0] sm:mt-[0] mt-[12px] md:w-[100%] sm:w-[100%] w-[51%]">
                        <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start sm:w-[100%] w-[auto]">
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Main
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Trade
                            </Text>
                            <Img
                              src="images/img_arrowup_gray_900_16x16.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowup Two"
                            />
                          </div>
                          <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Earn
                            </Text>
                            <Img
                              src="images/img_arrowup_gray_900_16x16.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowup Three"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Extra APR
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Referral program
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gradient2  h-[8px] md:ml-[0] sm:ml-[0] ml-[89px] rounded-radius50 w-[8px]"></div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold font-inter leading-[normal] min-w-[175px] md:ml-[0] sm:ml-[0] ml-[213px] md:mt-[0] sm:mt-[0] mt-[2px] text-[16px] text-center text-white_A700 w-[auto]"
                        shape="RoundedBorder23"
                        size="6xl"
                        variant="GradientBlueA200DeeppurpleA700"
                      >
                        Connect wallet
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start w-[100%]">
                  <div className="bg-white_A700 flex flex-col items-center justify-end p-[27px] sm:px-[20px] w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[64%]">
                      <div className="flex flex-col font-poppins items-center justify-end mb-[4px] p-[12px] rounded-radius7 md:w-[100%] sm:w-[100%] w-[12%]">
                        <div className="flex flex-row gap-[14px] items-end justify-start rotate-[90deg] md:w-[100%] sm:w-[100%] w-[91%]">
                          <Img
                            src="images/img_union.png"
                            className="h-[24px] md:h-[auto] sm:h-[auto] object-cover w-[auto]"
                            alt="Union Two"
                          />
                          <Text
                            className="bg-clip-text bg-gradient2  font-bold mt-[6px] rotate-[-90deg] text-left text-transparent w-[auto]"
                            variant="body12"
                          >
                            Swapos
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col font-poppins gap-[9px] justify-start md:ml-[0] sm:ml-[0] ml-[70px] md:mt-[0] sm:mt-[0] mt-[12px] md:w-[100%] sm:w-[100%] w-[51%]">
                        <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start sm:w-[100%] w-[auto]">
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Main
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Trade
                            </Text>
                            <Img
                              src="images/img_arrowup_gray_900_16x16.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowup Four"
                            />
                          </div>
                          <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Earn
                            </Text>
                            <Img
                              src="images/img_arrowup_gray_900_16x16.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowup Five"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Extra APR
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Referral program
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gradient2  h-[8px] md:ml-[0] sm:ml-[0] ml-[184px] rounded-radius50 w-[8px]"></div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold font-inter leading-[normal] min-w-[175px] md:ml-[0] sm:ml-[0] ml-[213px] md:mt-[0] sm:mt-[0] mt-[2px] text-[16px] text-center text-white_A700 w-[auto]"
                        shape="RoundedBorder23"
                        size="6xl"
                        variant="GradientBlueA200DeeppurpleA700"
                      >
                        Connect wallet
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start w-[100%]">
                  <div className="bg-white_A700 flex flex-col items-center justify-end p-[26px] sm:px-[20px] w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[5px] md:w-[100%] sm:w-[100%] w-[64%]">
                      <div className="flex flex-col font-poppins items-center justify-end mb-[5px] p-[12px] rounded-radius7 md:w-[100%] sm:w-[100%] w-[12%]">
                        <div className="flex flex-row gap-[14px] items-end justify-start rotate-[90deg] md:w-[100%] sm:w-[100%] w-[91%]">
                          <Img
                            src="images/img_union.png"
                            className="h-[24px] md:h-[auto] sm:h-[auto] object-cover w-[auto]"
                            alt="Union Three"
                          />
                          <Text
                            className="bg-clip-text bg-gradient2  font-bold mt-[6px] rotate-[-90deg] text-left text-transparent w-[auto]"
                            variant="body12"
                          >
                            Swapos
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col font-poppins gap-[10px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[70px] md:mt-[0] sm:mt-[0] mt-[12px] md:w-[100%] sm:w-[100%] w-[51%]">
                        <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start sm:w-[100%] w-[auto]">
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Main
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Trade
                            </Text>
                            <Img
                              src="images/img_arrowup_gray_900_16x16.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowup Six"
                            />
                          </div>
                          <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Earn
                            </Text>
                            <Img
                              src="images/img_arrowup_gray_900_16x16.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowup Seven"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Extra APR
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Referral program
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gradient2  h-[8px] rounded-radius50 w-[8px]"></div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold font-inter leading-[normal] min-w-[175px] md:ml-[0] sm:ml-[0] ml-[213px] md:mt-[0] sm:mt-[0] mt-[2px] text-[16px] text-center text-white_A700 w-[auto]"
                        shape="RoundedBorder23"
                        size="6xl"
                        variant="GradientBlueA200DeeppurpleA700"
                      >
                        Connect wallet
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start w-[100%]">
                  <div className="bg-white_A700 flex flex-col items-center justify-end p-[25px] sm:px-[20px] w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[6px] md:w-[100%] sm:w-[100%] w-[64%]">
                      <div className="flex flex-col font-poppins items-center justify-end mb-[6px] p-[12px] rounded-radius7 md:w-[100%] sm:w-[100%] w-[12%]">
                        <div className="flex flex-row gap-[14px] items-end justify-start rotate-[90deg] md:w-[100%] sm:w-[100%] w-[91%]">
                          <Img
                            src="images/img_union.png"
                            className="h-[24px] md:h-[auto] sm:h-[auto] object-cover w-[auto]"
                            alt="Union Four"
                          />
                          <Text
                            className="bg-clip-text bg-gradient2  font-bold mt-[6px] rotate-[-90deg] text-left text-transparent w-[auto]"
                            variant="body12"
                          >
                            Swapos
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col font-poppins gap-[11px] justify-start md:ml-[0] sm:ml-[0] ml-[70px] md:mt-[0] sm:mt-[0] mt-[12px] md:w-[100%] sm:w-[100%] w-[51%]">
                        <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start sm:w-[100%] w-[auto]">
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Main
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Trade
                            </Text>
                            <Img
                              src="images/img_arrowup_gray_900_16x16.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowup Eight"
                            />
                          </div>
                          <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Earn
                            </Text>
                            <Img
                              src="images/img_arrowup_gray_900_16x16.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowup Nine"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Extra APR
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Referral program
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gradient2  h-[8px] md:ml-[0] sm:ml-[0] ml-[421px] rounded-radius50 w-[8px]"></div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold font-inter leading-[normal] min-w-[175px] md:ml-[0] sm:ml-[0] ml-[213px] md:mt-[0] sm:mt-[0] mt-[2px] text-[16px] text-center text-white_A700 w-[auto]"
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
            </div>
            <div className="border border-deep_purple_A200 border-solid flex flex-1 flex-col items-center justify-start p-[20px] rounded-radius5 w-[100%]">
              <div className="bg-white_A700 flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-end p-[27px] sm:px-[20px] w-[100%]">
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[2px] md:w-[100%] sm:w-[100%] w-[98%]">
                    <div className="flex flex-col font-poppins items-center justify-end mb-[2px] p-[11px] rounded-radius7 md:w-[100%] sm:w-[100%] w-[8%]">
                      <div className="flex flex-row gap-[14px] items-end justify-start rotate-[90deg] md:w-[100%] sm:w-[100%] w-[90%]">
                        <Img
                          src="images/img_union.png"
                          className="h-[24px] md:h-[auto] sm:h-[auto] object-cover w-[auto]"
                          alt="Union Two"
                        />
                        <Text
                          className="bg-clip-text bg-gradient2  font-bold mt-[5px] rotate-[-90deg] text-left text-transparent w-[auto]"
                          variant="body12"
                        >
                          Swapos
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-poppins gap-[7px] justify-start md:ml-[0] sm:ml-[0] ml-[99px] md:mt-[0] sm:mt-[0] mt-[11px] md:w-[100%] sm:w-[100%] w-[33%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start sm:w-[100%] w-[auto]">
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Main
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Trade
                            </Text>
                            <Img
                              src="images/img_arrowup_gray_900_16x16.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowup Three"
                            />
                          </div>
                          <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Earn
                            </Text>
                            <Img
                              src="images/img_arrowup_gray_900_16x16.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowup One One"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Extra APR
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Referral program
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient2  h-[7px] md:ml-[0] sm:ml-[0] ml-[17px] rounded-radius3 w-[7px]"></div>
                    </div>
                    <Button
                      className="cursor-pointer font-bold font-inter leading-[normal] min-w-[175px] md:ml-[0] sm:ml-[0] ml-[824px] text-[16px] text-center text-white_A700 w-[auto]"
                      shape="RoundedBorder23"
                      size="6xl"
                      variant="GradientBlueA200DeeppurpleA700"
                    >
                      Connect wallet
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-end p-[30px] sm:px-[20px] w-[100%]">
                  <div className="flex md:flex-1 sm:flex-1 flex-col font-poppins items-center justify-end p-[11px] rounded-radius7 md:w-[100%] sm:w-[100%] w-[7%]">
                    <div className="flex flex-row gap-[14px] items-end justify-start rotate-[90deg] md:w-[100%] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_union.png"
                        className="h-[24px] md:h-[auto] sm:h-[auto] object-cover w-[auto]"
                        alt="Union One One"
                      />
                      <Text
                        className="bg-clip-text bg-gradient2  font-bold mt-[5px] rotate-[-90deg] text-left text-transparent w-[auto]"
                        variant="body12"
                      >
                        Swapos
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-poppins h-[23px] md:h-[auto] sm:h-[auto] items-center justify-center md:ml-[0] sm:ml-[0] ml-[99px] w-[41px]">
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      Main
                    </Text>
                  </div>
                  <div className="flex md:flex-1 sm:flex-1 flex-col font-poppins gap-[5px] justify-start md:ml-[0] sm:ml-[0] ml-[27px] md:w-[100%] sm:w-[100%] w-[4%]">
                    <div className="flex flex-row gap-[5px] h-[23px] md:h-[auto] sm:h-[auto] items-center justify-center w-[68px]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Trade
                      </Text>
                      <Img
                        src="images/img_arrowup_gray_900_16x16.svg"
                        className="h-[16px] w-[16px]"
                        alt="arrowup Two One"
                      />
                    </div>
                    <div className="flex flex-col h-[7px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[24px] w-[7px]">
                      <div className="flex flex-col h-[7px] items-center justify-start w-[7px]">
                        <div className="bg-gradient2  h-[7px] rounded-radius3 w-[7px]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row font-poppins gap-[5px] h-[23px] md:h-[auto] sm:h-[auto] items-center justify-center md:ml-[0] sm:ml-[0] ml-[28px] w-[58px]">
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      Earn
                    </Text>
                    <Img
                      src="images/img_arrowup_gray_900_16x16.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowup Three One"
                    />
                  </div>
                  <div className="flex flex-col font-poppins h-[23px] md:h-[auto] sm:h-[auto] items-center justify-center md:ml-[0] sm:ml-[0] ml-[27px] w-[77px]">
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      Extra APR
                    </Text>
                  </div>
                  <div className="flex flex-col font-poppins h-[23px] md:h-[auto] sm:h-[auto] items-center justify-center md:ml-[0] sm:ml-[0] ml-[25px] w-[139px]">
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      Referral program
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold font-inter leading-[normal] min-w-[175px] md:ml-[0] sm:ml-[0] ml-[918px] mr-[19px] text-[16px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder23"
                    size="6xl"
                    variant="GradientBlueA200DeeppurpleA700"
                  >
                    Connect wallet
                  </Button>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-end p-[26px] sm:px-[20px] w-[100%]">
                  <div className="flex md:flex-1 sm:flex-1 flex-col font-poppins items-center justify-end md:mt-[0] sm:mt-[0] my-[3px] p-[11px] rounded-radius7 md:w-[100%] sm:w-[100%] w-[7%]">
                    <div className="flex flex-row gap-[14px] items-end justify-start rotate-[90deg] md:w-[100%] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_union.png"
                        className="h-[24px] md:h-[auto] sm:h-[auto] object-cover w-[auto]"
                        alt="Union Two One"
                      />
                      <Text
                        className="bg-clip-text bg-gradient2  font-bold mt-[5px] rotate-[-90deg] text-left text-transparent w-[auto]"
                        variant="body12"
                      >
                        Swapos
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-poppins h-[23px] md:h-[auto] sm:h-[auto] items-center justify-center md:ml-[0] sm:ml-[0] ml-[99px] w-[41px]">
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      Main
                    </Text>
                  </div>
                  <div className="flex flex-row font-poppins gap-[5px] h-[23px] md:h-[auto] sm:h-[auto] items-center justify-center md:ml-[0] sm:ml-[0] ml-[27px] w-[68px]">
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      Trade
                    </Text>
                    <Img
                      src="images/img_arrowup_gray_900_16x16.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowup Four One"
                    />
                  </div>
                  <div className="flex md:flex-1 sm:flex-1 flex-col font-poppins gap-[9px] justify-start md:ml-[0] sm:ml-[0] ml-[28px] md:w-[100%] sm:w-[100%] w-[4%]">
                    <div className="flex flex-row gap-[5px] h-[23px] md:h-[auto] sm:h-[auto] items-center justify-center w-[58px]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Earn
                      </Text>
                      <Img
                        src="images/img_arrowup_gray_900_16x16.svg"
                        className="h-[16px] w-[16px]"
                        alt="arrowup Five One"
                      />
                    </div>
                    <div className="flex flex-col h-[7px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[17px] w-[7px]">
                      <div className="flex flex-col h-[7px] items-center justify-start w-[7px]">
                        <div className="bg-gradient2  h-[7px] rounded-radius3 w-[7px]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-poppins h-[23px] md:h-[auto] sm:h-[auto] items-center justify-center md:ml-[0] sm:ml-[0] ml-[27px] w-[77px]">
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      Extra APR
                    </Text>
                  </div>
                  <div className="flex flex-col font-poppins h-[23px] md:h-[auto] sm:h-[auto] items-center justify-center md:ml-[0] sm:ml-[0] ml-[25px] w-[139px]">
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      Referral program
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold font-inter leading-[normal] min-w-[175px] md:ml-[0] sm:ml-[0] ml-[918px] mr-[23px] text-[16px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder23"
                    size="6xl"
                    variant="GradientBlueA200DeeppurpleA700"
                  >
                    Connect wallet
                  </Button>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-end p-[25px] sm:px-[20px] w-[100%]">
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[98%]">
                    <div className="flex flex-col font-poppins items-center justify-end mb-[4px] p-[11px] rounded-radius7 md:w-[100%] sm:w-[100%] w-[8%]">
                      <div className="flex flex-row gap-[14px] items-end justify-start rotate-[90deg] md:w-[100%] sm:w-[100%] w-[90%]">
                        <Img
                          src="images/img_union.png"
                          className="h-[24px] md:h-[auto] sm:h-[auto] object-cover w-[auto]"
                          alt="Union Three One"
                        />
                        <Text
                          className="bg-clip-text bg-gradient2  font-bold mt-[5px] rotate-[-90deg] text-left text-transparent w-[auto]"
                          variant="body12"
                        >
                          Swapos
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-poppins gap-[9px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[99px] md:mt-[0] sm:mt-[0] mt-[11px] md:w-[100%] sm:w-[100%] w-[33%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start sm:w-[100%] w-[auto]">
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Main
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Trade
                            </Text>
                            <Img
                              src="images/img_arrowup_gray_900_16x16.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowup Six One"
                            />
                          </div>
                          <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Earn
                            </Text>
                            <Img
                              src="images/img_arrowup_gray_900_16x16.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowup Seven One"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Extra APR
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Referral program
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient2  h-[7px] rounded-radius3 w-[7px]"></div>
                    </div>
                    <Button
                      className="cursor-pointer font-bold font-inter leading-[normal] min-w-[175px] md:ml-[0] sm:ml-[0] ml-[824px] text-[16px] text-center text-white_A700 w-[auto]"
                      shape="RoundedBorder23"
                      size="6xl"
                      variant="GradientBlueA200DeeppurpleA700"
                    >
                      Connect wallet
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-end p-[24px] sm:px-[20px] w-[100%]">
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[5px] md:w-[100%] sm:w-[100%] w-[98%]">
                    <div className="flex flex-col font-poppins items-center justify-end mb-[5px] p-[11px] rounded-radius7 md:w-[100%] sm:w-[100%] w-[8%]">
                      <div className="flex flex-row gap-[14px] items-end justify-start rotate-[90deg] md:w-[100%] sm:w-[100%] w-[90%]">
                        <Img
                          src="images/img_union.png"
                          className="h-[24px] md:h-[auto] sm:h-[auto] object-cover w-[auto]"
                          alt="Union Four One"
                        />
                        <Text
                          className="bg-clip-text bg-gradient2  font-bold mt-[5px] rotate-[-90deg] text-left text-transparent w-[auto]"
                          variant="body12"
                        >
                          Swapos
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-poppins gap-[10px] justify-start md:ml-[0] sm:ml-[0] ml-[99px] md:mt-[0] sm:mt-[0] mt-[11px] md:w-[100%] sm:w-[100%] w-[33%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start sm:w-[100%] w-[auto]">
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Main
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Trade
                            </Text>
                            <Img
                              src="images/img_arrowup_gray_900_16x16.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowup Eight One"
                            />
                          </div>
                          <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Earn
                            </Text>
                            <Img
                              src="images/img_arrowup_gray_900_16x16.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowup Nine One"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Extra APR
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Referral program
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient2  h-[7px] md:ml-[0] sm:ml-[0] ml-[419px] rounded-radius3 w-[7px]"></div>
                    </div>
                    <Button
                      className="cursor-pointer font-bold font-inter leading-[normal] min-w-[175px] md:ml-[0] sm:ml-[0] ml-[824px] text-[16px] text-center text-white_A700 w-[auto]"
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
          </List>
        </div>
      </div>
    </>
  );
};

export default HeadersPage;
