import React from "react";

import { Button, Text, Img, Line, List } from "components";

const PreLaunchBlackOnePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-end justify-start pb-[135px] w-[100%]">
          <header className="flex items-center justify-center w-[100%]">
            <div className="bg-gradient16  flex flex-1 md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-center p-[31px] sm:px-[20px] w-[100%]">
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[125px] md:mt-[0] sm:mt-[0] mt-[2px] text-[16px] text-center text-white_A700 w-[auto]"
                shape="RoundedBorder13"
                size="6xl"
                variant="GradientPurpleA100IndigoA200"
              >
                Swaptos
              </Button>
              <ul className="flex sm:flex-1 sm:flex-col flex-row font-poppins gap-[30px] sm:hidden items-center justify-start md:ml-[0] sm:ml-[0] ml-[46px] sm:w-[100%] w-[auto] common-row-list">
                <li className="sm:w-[100%] sm:my-[10px] w-[7%]">
                  <div className="flex flex-col items-center justify-center">
                    <a
                      className="cursor-pointer font-medium hover:h-[undefinedpx] text-[16px] text-left text-white_A700 w-[auto] hover:w-[undefinedpx]"
                      href="#"
                    >
                      Main
                    </a>
                  </div>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[12%]">
                  <div className="flex flex-row gap-[5px] items-center justify-center">
                    <a
                      className="cursor-pointer font-medium hover:h-[undefinedpx] text-[16px] text-left text-white_A700 w-[auto] hover:w-[undefinedpx]"
                      href="#"
                    >
                      Trade
                    </a>
                    <Img
                      src="images/img_arrowup_white_a700_16x16.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowup"
                    />
                  </div>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[10%]">
                  <div className="flex flex-row gap-[5px] items-center justify-center">
                    <a
                      className="cursor-pointer font-medium hover:h-[undefinedpx] text-[16px] text-left text-white_A700 w-[auto] hover:w-[undefinedpx]"
                      href="#"
                    >
                      Earn
                    </a>
                    <Img
                      src="images/img_arrowup_white_a700_16x16.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowup One"
                    />
                  </div>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[13%]">
                  <div className="flex flex-col items-center justify-center">
                    <a
                      className="cursor-pointer font-medium hover:h-[undefinedpx] text-[16px] text-left text-white_A700 w-[auto] hover:w-[undefinedpx]"
                      href="#"
                    >
                      Extra APR
                    </a>
                  </div>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[23%]">
                  <div className="flex flex-col items-center justify-center">
                    <a
                      className="cursor-pointer font-medium hover:h-[undefinedpx] text-[16px] text-left text-white_A700 w-[auto] hover:w-[undefinedpx]"
                      href="#"
                    >
                      Referal program
                    </a>
                  </div>
                </li>
              </ul>
              <Button
                className="cursor-pointer font-bold leading-[normal] mb-[2px] min-w-[175px] md:ml-[0] sm:ml-[0] ml-[270px] mr-[19px] text-[16px] text-center text-white_A700 w-[auto]"
                shape="RoundedBorder23"
                size="6xl"
                variant="GradientPurpleA100IndigoA200"
              >
                Connect wallet
              </Button>
            </div>
          </header>
          <div className="font-poppins sm:h-[1159px] h-[1222px] md:h-[662px] md:px-[20px] sm:px-[20px] relative md:w-[100%] sm:w-[100%] w-[95%]">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col items-end justify-end pl-[13px] py-[13px] right-[0] top-[0] w-[70%]"
              style={{ backgroundImage: "url('images/img_group65.png')" }}
            >
              <Img
                src="images/img_maskgroup.png"
                className="h-[600px] md:h-[auto] sm:h-[auto] mt-[36px] object-cover sm:w-[100%] w-[auto]"
                alt="Maskgroup"
              />
            </div>
            <Text
              className="absolute bg-clip-text bg-gradient4  leading-[80.00px] left-[0] text-left text-transparent top-[20%] sm:w-[100%] w-[59%]"
              as="h1"
              variant="h1"
            >
              Global  Pre-Launch Event
            </Text>
            <div className="absolute font-inter sm:h-[133px] h-[48px] md:h-[auto] left-[0] top-[15%] sm:w-[100%] w-[42%]">
              <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_union_31x22.png"
                    className="sm:flex-1 h-[31px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[auto]"
                    alt="Union"
                  />
                  <Text
                    className="bg-clip-text bg-gradient4  font-bold sm:ml-[0] ml-[4px] text-left text-transparent w-[auto]"
                    variant="body7"
                  >
                    Swaptos
                  </Text>
                  <Text
                    className="bg-clip-text bg-gradient4  sm:flex-1 font-bold sm:ml-[0] ml-[40px] text-left text-transparent sm:w-[100%] w-[71%]"
                    variant="body12"
                  >
                    New generation of DeFi with price ranges, custom fees and
                    daily tasks.
                  </Text>
                </div>
              </div>
              <Line className="absolute bg-gradient4  h-[48px] inset-y-[0] left-[26%] my-[auto] w-[1px]" />
            </div>
            <div className="absolute backdrop-opacity-[0.5] blur-[30.00px] bottom-[0] flex flex-col font-poppins items-center justify-start left-[12%] w-[71%]">
              <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                <List
                  className="flex-col gap-[20px] grid w-[auto]"
                  orientation="vertical"
                >
                  <div className="bg-gray_900 flex flex-col items-start justify-start my-[0] p-[16px] rounded-radius25 shadow-bs2 w-[100%]">
                    <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] w-[auto]">
                      <Text
                        className="font-bold leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[148px] text-left text-white_A700"
                        variant="body7"
                      >
                        Early Bird bonus
                      </Text>
                      <Img
                        src="images/img_component9.png"
                        className="h-[60px] md:h-[auto] sm:h-[auto] object-cover w-[60px]"
                        alt="ComponentNine"
                      />
                    </div>
                    <div className="flex flex-col gap-[7px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[55px] mt-[37px] md:w-[100%] sm:w-[100%] w-[58%]">
                      <Text
                        className="bg-clip-text bg-gradient3  font-bold text-left text-transparent w-[auto]"
                        variant="body4"
                      >
                        <span className="text-white_A700 text-[14px] font-poppins">
                          up to
                        </span>
                        <span className="sm:text-[21px] md:text-[23px] text-deep_purple_A203 text-[25px] font-poppins">
                          {" "}
                        </span>
                        <span className="sm:text-[36px] md:text-[38px] text-deep_purple_A203 text-[40px] font-poppins">
                          $20*
                        </span>
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body7"
                      >
                        (20 SWPT)
                      </Text>
                    </div>
                    <Text
                      className="font-bold mb-[6px] md:ml-[0] sm:ml-[0] ml-[10px] mt-[48px] text-left text-white_A700 w-[auto]"
                      variant="body14"
                    >
                      * just for a few steps
                    </Text>
                  </div>
                  <div className="bg-gray_900 flex flex-col items-start justify-start my-[0] p-[16px] rounded-radius25 shadow-bs2 w-[100%]">
                    <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body7"
                      >
                        Competition
                      </Text>
                      <Img
                        src="images/img_component9_1.png"
                        className="h-[60px] md:h-[auto] sm:h-[auto] object-cover w-[60px]"
                        alt="ComponentNine One"
                      />
                    </div>
                    <div className="flex flex-col gap-[5px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[46px] mt-[34px] md:w-[100%] sm:w-[100%] w-[65%]">
                      <Text
                        className="bg-clip-text bg-gradient3  text-left text-transparent w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        $15.000
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body7"
                      >
                        (15 000 SWPT)
                      </Text>
                    </div>
                    <Text
                      className="font-bold mb-[8px] md:ml-[0] sm:ml-[0] ml-[10px] mt-[47px] text-left text-white_A700 w-[auto]"
                      variant="body14"
                    >
                      * for the most active referrals
                    </Text>
                  </div>
                </List>
                <div className="sm:h-[1139px] md:h-[560px] h-[564px] relative sm:w-[100%] w-[auto]">
                  <div className="flex flex-col h-[100%] items-center justify-start m-[auto] w-[100%]">
                    <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                      <List
                        className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 grid-cols-2 justify-center w-[100%]"
                        orientation="horizontal"
                      >
                        <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[16px] rounded-radius25 shadow-bs2 w-[100%]">
                          <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] w-[auto]">
                            <Text
                              className="font-bold leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[148px] text-left text-white_A700"
                              variant="body7"
                            >
                              Referral bonus
                            </Text>
                            <Img
                              src="images/img_mdiusersgroup.png"
                              className="h-[60px] md:h-[auto] sm:h-[auto] object-cover w-[60px]"
                              alt="ComponentNine Two"
                            />
                          </div>
                          <div className="flex flex-col gap-[7px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[66px] mt-[37px] md:w-[100%] sm:w-[100%] w-[48%]">
                            <Text
                              className="bg-clip-text bg-gradient3  font-bold text-left text-transparent w-[auto]"
                              variant="body4"
                            >
                              <span className="text-white_A700 text-[14px] font-poppins">
                                up to
                              </span>
                              <span className="sm:text-[21px] md:text-[23px] text-deep_purple_A203 text-[25px] font-poppins">
                                {" "}
                              </span>
                              <span className="sm:text-[36px] md:text-[38px] text-deep_purple_A203 text-[40px] font-poppins">
                                $5*
                              </span>
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              (5 SWPT)
                            </Text>
                          </div>
                          <Text
                            className="font-bold mb-[8px] md:ml-[0] sm:ml-[0] ml-[10px] mt-[47px] text-left text-white_A700 w-[auto]"
                            variant="body14"
                          >
                            * for each invited friend
                          </Text>
                        </div>
                        <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[16px] rounded-radius25 shadow-bs2 w-[100%]">
                          <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] w-[auto]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              Giveaway
                            </Text>
                            <Img
                              src="images/img_component9_60x60.png"
                              className="h-[60px] md:h-[auto] sm:h-[auto] object-cover w-[60px]"
                              alt="ComponentNine Three"
                            />
                          </div>
                          <div className="flex flex-col gap-[5px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[42px] mt-[34px] md:w-[100%] sm:w-[100%] w-[68%]">
                            <Text
                              className="bg-clip-text bg-gradient3  text-left text-transparent w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              $20.000
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              (20 000 SWPT)
                            </Text>
                          </div>
                          <Text
                            className="font-bold mb-[8px] md:ml-[0] sm:ml-[0] ml-[10px] mt-[47px] text-left text-white_A700 w-[auto]"
                            variant="body14"
                          >
                            * for 1000 random users
                          </Text>
                        </div>
                      </List>
                      <div className="bg-gray_900 flex flex-col items-center justify-end p-[16px] rounded-radius15 shadow-bs11 w-[100%]">
                        <div className="flex flex-col gap-[7px] items-start justify-start mt-[11px] md:w-[100%] sm:w-[100%] w-[97%]">
                          <div className="flex sm:flex-col flex-row sm:gap-[47px] items-center justify-between w-[100%]">
                            <div className="flex flex-row font-poppins gap-[10px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_component9_2.png"
                                className="h-[60px] md:h-[auto] sm:h-[auto] object-cover w-[60px]"
                                alt="ComponentNine Four"
                              />
                              <Text
                                className="font-bold leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[119px] text-left text-white_A700"
                                variant="body7"
                              >
                                Twitter campaign
                              </Text>
                            </div>
                            <div className="flex flex-col font-poppins gap-[7px] items-center justify-center w-[auto]">
                              <Text
                                className="bg-clip-text bg-gradient3  font-bold text-left text-transparent w-[auto]"
                                variant="body4"
                              >
                                $2000.00
                              </Text>
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body14"
                              >
                                (20 000 SWPT)
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-bold font-inter leading-[normal] min-w-[121px] text-[16px] text-center text-white_A700 w-[auto]"
                              shape="RoundedBorder23"
                              size="6xl"
                              variant="GradientDeeppurpleA203Purple400"
                            >
                              Retweet
                            </Button>
                          </div>
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body14"
                          >
                            * retweet and win
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray_900 flex sm:flex-col flex-row sm:gap-[49px] items-center justify-between p-[15px] rounded-radius15 shadow-bs11 w-[100%]">
                        <Text
                          className="font-medium font-poppins leading-[24.00px] sm:ml-[0] ml-[11px] text-left text-white_A700 w-[auto]"
                          variant="body12"
                        >
                          <span className="text-white_A700 text-[16px]">
                            Complete few{" "}
                          </span>
                          <span className="text-deep_purple_A203 text-[16px]">
                            sign up steps
                          </span>
                          <span className="text-white_A700 text-[16px]">
                            {" "}
                            and earn crypto rewards!{" "}
                          </span>
                          <span className="text-deep_purple_A203 text-[16px]">
                            Connect
                          </span>
                          <span className="text-white_A700 text-[16px]">
                            {" "}
                            your wallet to start participation  in{" "}
                          </span>
                          <span className="text-deep_purple_A203 text-[16px]">
                            Swaptos
                          </span>
                          <span className="text-white_A700 text-[16px]">
                            {" "}
                            Global Pre-Launch Event!
                          </span>
                        </Text>
                        <Button
                          className="cursor-pointer font-bold font-inter leading-[normal] min-w-[175px] mr-[11px] text-[16px] text-center text-white_A700 w-[auto]"
                          shape="RoundedBorder23"
                          size="6xl"
                          variant="GradientDeeppurpleA203Purple400"
                        >
                          Connect wallet
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-gray_900 flex flex-col gap-[10px] h-[max-content] inset-y-[0] justify-start left-[0] my-[auto] p-[14px] rounded-radius25 shadow-bs2 w-[54%]">
                    <Img
                      src="images/img_close_24x24.svg"
                      className="h-[24px] md:ml-[0] sm:ml-[0] ml-[260px] w-[24px]"
                      alt="close"
                    />
                    <div className="flex flex-col items-center justify-start mb-[36px] mx-[auto] md:w-[100%] sm:w-[100%] w-[81%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <Text
                          className="bg-clip-text bg-gradient5  font-bold font-poppins text-left text-transparent w-[auto]"
                          variant="body7"
                        >
                          <span className="text-purple_A100 text-[20px]">
                            1.{" "}
                          </span>
                          <span className="text-purple_A100 text-[20px]">
                            Copy unique code
                          </span>
                        </Text>
                        <Text
                          className="font-medium font-poppins leading-[23.00px] mt-[6px] text-gray_600 text-left sm:w-[100%] w-[99%]"
                          variant="body14"
                        >
                          One step closer! Copy your unique code to complete all
                          sign up steps and earn crypto reward
                        </Text>
                        <div className="bg-gradient4  mt-[19px] p-[2px] rounded-radius25 w-[100%] ">
                          <div className="bg-gray_900 border-solid flex flex-row font-poppins gap-[12px] items-center justify-end p-[7px] rounded-radius25">
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body14"
                            >
                              /?code01324...
                            </Text>
                            <Button
                              className="flex items-center justify-center min-w-[96px] text-center w-[auto]"
                              leftIcon={
                                <Img
                                  src="images/img_computer.svg"
                                  className="mr-[5px] text-center"
                                  alt="computer"
                                />
                              }
                              shape="CircleBorder19"
                              size="2xl"
                              variant="GradientPurpleA100IndigoA200"
                            >
                              <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[16px] text-left text-white_A700">
                                Copy
                              </div>
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col font-poppins gap-[7px] items-start justify-start mt-[61px] w-[auto]">
                          <Text
                            className="bg-clip-text bg-gradient5  font-bold leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[189px] text-left text-transparent"
                            variant="body7"
                          >
                            <span className="text-purple_A100 text-[20px] font-poppins">
                              2.{" "}
                            </span>
                            <span className="text-purple_A100 text-[20px] font-poppins">
                              Subscribe to telegram bot
                            </span>
                          </Text>
                          <Text
                            className="font-medium leading-[23.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[225px] text-gray_600 text-left"
                            variant="body14"
                          >
                            Do not wait any longer and join this bot! Complete
                            easy steps inside and get your bsw tokens!
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer font-bold font-inter leading-[normal] min-w-[136px] md:ml-[0] sm:ml-[0] ml-[48px] mt-[40px] text-[16px] text-center text-white_A700 w-[auto]"
                          shape="RoundedBorder23"
                          size="6xl"
                          variant="GradientPurpleA100IndigoA200"
                        >
                          Subscribe
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="absolute bg-clip-text bg-gradient4  font-bold left-[0] text-left text-transparent top-[35%] w-[auto]"
              variant="body7"
            >
              With Prize Pool of $30.000 (200.000 SWPT){" "}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreLaunchBlackOnePage;
