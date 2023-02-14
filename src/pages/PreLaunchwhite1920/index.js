import React from "react";

import { Img, Text, Line, Button, List } from "components";

const PreLaunchwhite1920Page = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter gap-[9px] items-center justify-start mx-[auto] pb-[135px] w-[100%]">
        <div className="sm:h-[1240px] md:h-[680px] h-[760px] relative w-[100%]">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[92%]">
            <div className="flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
              <Img
                src="images/img_vector_purple_304.png"
                className="md:flex-1 sm:flex-1 h-[527px] sm:h-[auto] mb-[153px] object-cover md:w-[100%] sm:w-[100%] w-[auto]"
                alt="Vector"
              />
              <Img
                src="images/img_vector_purple_316.svg"
                className="h-[520px] sm:mt-[0] mt-[160px] w-[auto]"
                alt="Vector One"
              />
            </div>
          </div>
          <Img
            src="images/img_maskgroup.png"
            className="absolute bottom-[0] h-[600px] object-cover right-[0] w-[auto]"
            alt="Maskgroup"
          />
          <div className="absolute bottom-[26%] flex flex-col gap-[20px] items-start justify-start left-[19%] w-[39%]">
            <div className="sm:h-[133px] h-[48px] md:h-[auto] relative md:w-[100%] sm:w-[100%] w-[72%]">
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
            <div className="flex flex-col font-poppins gap-[20px] items-start justify-start w-[100%]">
              <Text
                className="bg-clip-text bg-gradient4  leading-[80.00px] text-left text-transparent w-[100%]"
                as="h1"
                variant="h1"
              >
                Global  Pre-Launch Event
              </Text>
              <Text
                className="bg-clip-text bg-gradient4  font-bold md:ml-[0] sm:ml-[0] ml-[3px] text-left text-transparent w-[auto]"
                variant="body12"
              >
                With Prize Pool of $30.000 (200.000 SWPT){" "}
              </Text>
            </div>
          </div>
          <div className="absolute bg-gradient11  flex flex-row inset-x-[0] items-center justify-start mx-[auto] p-[31px] sm:px-[20px] top-[0] w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start ml-[19px] w-[98%]">
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[125px] md:mt-[0] sm:mt-[0] mt-[2px] text-[16px] text-center text-white_A700 w-[auto]"
                shape="RoundedBorder13"
                size="6xl"
                variant="GradientPurpleA100IndigoA200"
              >
                Swaptos
              </Button>
              <div className="flex sm:flex-col flex-row font-poppins gap-[30px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[43px] md:mt-[0] sm:mt-[0] mt-[12px] sm:w-[100%] w-[auto]">
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
              <Button
                className="flex items-center justify-center mb-[2px] md:ml-[0] ml-[884px] sm:ml-[0] text-center"
                leftIcon={
                  <Img
                    src="images/img_volume.svg"
                    className="mr-[10px] text-center"
                    alt="volume"
                  />
                }
                shape="RoundedBorder23"
                size="5xl"
                variant="GradientPurpleA100IndigoA200"
              >
                <div className="bg-transparent cursor-pointer font-bold leading-[normal] text-[16px] text-left text-white_A700">
                  0x9547...3258
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-poppins items-center justify-start md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[46%]">
          <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
            <List
              className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[16px] rounded-radius25 shadow-bs2 w-[100%]">
                <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] w-[auto]">
                  <Text
                    className="font-bold leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[148px] text-gray_900 text-left"
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
                    className="bg-clip-text bg-gradient4  font-bold text-left text-transparent w-[auto]"
                    variant="body4"
                  >
                    <span className="text-gray_900 text-[14px] font-poppins">
                      up to
                    </span>
                    <span className="sm:text-[21px] md:text-[23px] text-purple_A100 text-[25px] font-poppins">
                      {" "}
                    </span>
                    <span className="sm:text-[36px] md:text-[38px] text-purple_A100 text-[40px] font-poppins">
                      $20*
                    </span>
                  </Text>
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body7"
                  >
                    (20 SWPT)
                  </Text>
                </div>
                <Text
                  className="font-bold mb-[6px] md:ml-[0] sm:ml-[0] ml-[10px] mt-[48px] text-gray_900 text-left w-[auto]"
                  variant="body14"
                >
                  * just for a few steps
                </Text>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[16px] rounded-radius25 shadow-bs2 w-[100%]">
                <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] w-[auto]">
                  <Text
                    className="font-bold leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[148px] text-gray_900 text-left"
                    variant="body7"
                  >
                    Referral bonus
                  </Text>
                  <Img
                    src="images/img_mdiusersgroup.png"
                    className="h-[60px] md:h-[auto] sm:h-[auto] object-cover w-[60px]"
                    alt="ComponentNine One"
                  />
                </div>
                <div className="flex flex-col gap-[7px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[66px] mt-[37px] md:w-[100%] sm:w-[100%] w-[48%]">
                  <Text
                    className="bg-clip-text bg-gradient4  font-bold text-left text-transparent w-[auto]"
                    variant="body4"
                  >
                    <span className="text-gray_900 text-[14px] font-poppins">
                      up to
                    </span>
                    <span className="sm:text-[21px] md:text-[23px] text-purple_A100 text-[25px] font-poppins">
                      {" "}
                    </span>
                    <span className="sm:text-[36px] md:text-[38px] text-purple_A100 text-[40px] font-poppins">
                      $5*
                    </span>
                  </Text>
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body7"
                  >
                    (5 SWPT)
                  </Text>
                </div>
                <Text
                  className="font-bold mb-[8px] md:ml-[0] sm:ml-[0] ml-[10px] mt-[47px] text-gray_900 text-left w-[auto]"
                  variant="body14"
                >
                  * for each invited friend
                </Text>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[16px] rounded-radius25 shadow-bs2 w-[100%]">
                <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] w-[auto]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body7"
                  >
                    Giveaway
                  </Text>
                  <Img
                    src="images/img_component9_60x60.png"
                    className="h-[60px] md:h-[auto] sm:h-[auto] object-cover w-[60px]"
                    alt="ComponentNine Two"
                  />
                </div>
                <div className="flex flex-col gap-[5px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[42px] mt-[34px] md:w-[100%] sm:w-[100%] w-[68%]">
                  <Text
                    className="bg-clip-text bg-gradient4  text-left text-transparent w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    $20.000
                  </Text>
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body7"
                  >
                    (20 000 SWPT)
                  </Text>
                </div>
                <Text
                  className="font-bold mb-[8px] md:ml-[0] sm:ml-[0] ml-[10px] mt-[47px] text-gray_900 text-left w-[auto]"
                  variant="body14"
                >
                  * for 1000 random users
                </Text>
              </div>
            </List>
            <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
              <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-start justify-start p-[16px] rounded-radius25 shadow-bs2 md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] w-[auto]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body7"
                  >
                    Competition
                  </Text>
                  <Img
                    src="images/img_component9_1.png"
                    className="h-[60px] md:h-[auto] sm:h-[auto] object-cover w-[60px]"
                    alt="ComponentNine Three"
                  />
                </div>
                <div className="flex flex-col gap-[5px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[46px] mt-[34px] md:w-[100%] sm:w-[100%] w-[65%]">
                  <Text
                    className="bg-clip-text bg-gradient4  text-left text-transparent w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    $15.000
                  </Text>
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body7"
                  >
                    (15 000 SWPT)
                  </Text>
                </div>
                <Text
                  className="font-bold mb-[8px] md:ml-[0] sm:ml-[0] ml-[10px] mt-[47px] text-gray_900 text-left w-[auto]"
                  variant="body14"
                >
                  * for the most active referrals
                </Text>
              </div>
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="bg-white_A700 flex flex-col items-center justify-end p-[16px] rounded-radius15 shadow-bs11 w-[100%]">
                  <div className="flex flex-col gap-[7px] items-start justify-start mt-[11px] md:w-[100%] sm:w-[100%] w-[97%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[47px] items-center justify-between w-[100%]">
                      <div className="flex flex-row font-poppins gap-[10px] items-center justify-start w-[auto]">
                        <Img
                          src="images/img_component9_2.png"
                          className="h-[60px] md:h-[auto] sm:h-[auto] object-cover w-[60px]"
                          alt="ComponentNine Four"
                        />
                        <Text
                          className="font-bold leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[119px] text-gray_900 text-left"
                          variant="body7"
                        >
                          Twitter campaign
                        </Text>
                      </div>
                      <div className="flex flex-col font-poppins gap-[7px] items-center justify-center w-[auto]">
                        <Text
                          className="bg-clip-text bg-gradient4  font-bold text-left text-transparent w-[auto]"
                          variant="body4"
                        >
                          $2000.00
                        </Text>
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body14"
                        >
                          (20 000 SWPT)
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-bold font-inter leading-[normal] min-w-[121px] text-[16px] text-center text-white_A700 w-[auto]"
                        shape="RoundedBorder23"
                        size="6xl"
                        variant="GradientPurpleA100IndigoA200"
                      >
                        Retweet
                      </Button>
                    </div>
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      variant="body14"
                    >
                      * retweet and win
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex sm:flex-col flex-row sm:gap-[49px] items-center justify-between p-[15px] rounded-radius15 shadow-bs11 w-[100%]">
                  <Text
                    className="font-medium font-poppins leading-[24.00px] sm:ml-[0] ml-[11px] text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    <span className="text-gray_900 text-[16px]">
                      Complete few{" "}
                    </span>
                    <span className="text-purple_A100 text-[16px]">
                      sign up steps
                    </span>
                    <span className="text-gray_900 text-[16px]">
                      {" "}
                      and earn crypto rewards!{" "}
                    </span>
                    <span className="text-purple_A100 text-[16px]">
                      Connect
                    </span>
                    <span className="text-gray_900 text-[16px]">
                      {" "}
                      your wallet to start participation  in{" "}
                    </span>
                    <span className="text-purple_A100 text-[16px]">
                      Swaptos
                    </span>
                    <span className="text-gray_900 text-[16px]">
                      {" "}
                      Global Pre-Launch Event!
                    </span>
                  </Text>
                  <Button
                    className="cursor-pointer font-bold font-inter leading-[normal] min-w-[175px] mr-[11px] text-[16px] text-center text-white_A700 w-[auto]"
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
      </div>
    </>
  );
};

export default PreLaunchwhite1920Page;
