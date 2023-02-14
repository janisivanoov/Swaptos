import React from "react";

import { Text, Img, List, Button, Line } from "components";

const ExtraBoostpage1920Page = () => {
  function handleNavigate5() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate6() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate7() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="font-inter h-[4112px] mx-[auto] relative w-[100%]">
        <div className="md:h-[2836px] sm:h-[3424px] h-[4112px] m-[auto] w-[100%]">
          <div className="md:h-[2836px] sm:h-[3424px] h-[4112px] m-[auto] w-[100%]">
            <div className="md:h-[2836px] sm:h-[3424px] h-[4112px] m-[auto] w-[100%]">
              <div className="bg-white_A700 flex flex-col h-[100%] items-center justify-start m-[auto] w-[100%]">
                <div className="bg-gradient11  flex flex-col items-center justify-start p-[31px] sm:px-[20px] w-[100%]">
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[98%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start w-[100%]">
                      <div className="bg-gradient2  flex flex-col items-start justify-start md:mt-[0] sm:mt-[0] mt-[2px] sm:px-[20px] px-[28px] py-[14px] rounded-radius15 w-[auto]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body12"
                        >
                          Swaptos
                        </Text>
                      </div>
                      <div className="flex md:flex-1 sm:flex-1 flex-col font-poppins justify-start md:ml-[0] sm:ml-[0] ml-[43px] md:mt-[0] sm:mt-[0] mt-[12px] md:w-[100%] sm:w-[100%] w-[33%]">
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
                        <div className="bg-gradient2  h-[8px] md:ml-[0] sm:ml-[0] ml-[421px] mt-[5px] rounded-radius50 w-[8px]"></div>
                      </div>
                      <div className="bg-gradient4  flex md:flex-1 sm:flex-1 flex-col font-inter items-center justify-start mb-[2px] md:ml-[0] sm:ml-[0] ml-[884px] p-[11px] rounded-radius23 w-[10%] md:w-[100%] sm:w-[100%]">
                        <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_volume.svg"
                            className="h-[24px] w-[24px]"
                            alt="volume"
                          />
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body12"
                          >
                            0x9547...3258
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <List
                  className="flex-col font-poppins gap-[300px] md:gap-[40px] sm:gap-[40px] grid items-center mt-[1156px] md:w-[100%] sm:w-[100%] w-[62%]"
                  orientation="vertical"
                >
                  <div className="bg-white_A700 flex flex-col items-center justify-end p-[18px] rounded-radius15 shadow-bs2 md:w-[100%] sm:w-[100%] w-[50%]">
                    <div className="flex flex-col items-center justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[99%]">
                      <div className="flex sm:flex-col flex-row gap-[28px] items-center justify-between w-[100%]">
                        <div className="flex sm:flex-1 flex-row gap-[5px] items-center justify-start sm:w-[100%] w-[auto]">
                          <Img
                            src="images/img_settings_indigo_300.svg"
                            className="h-[30px] w-[30px]"
                            alt="settings"
                          />
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body7"
                          >
                            Join our Discord server
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
                      </div>
                      <Text
                        className="font-medium mt-[10px] text-gray_900 text-left"
                        variant="body14"
                      >
                        <span className="text-gray_900 text-[14px] font-inter">
                          1.
                        </span>
                        <span className="text-gray_900 text-[14px] font-poppins">
                          {" "}
                          Follow the link{" "}
                        </span>
                        <a
                          href="javascript:"
                          className="text-blue_A201 text-[14px] font-poppins underline"
                        >
                          https://youtu.be/dQw4w9WgXcQ
                        </a>
                        <span className="text-gray_900 text-[14px] font-poppins">
                          .  Write an original comment to the video and attach
                          one of the three attached hashtags. Add your referral
                          link. <br />
                        </span>
                        <span className="text-gray_900 text-[14px] font-inter">
                          2.
                        </span>
                        <span className="text-gray_900 text-[14px] font-poppins">
                          {" "}
                          Click on the time of comment post
                          <br />
                          3. Copy URL of your commentary
                          <br />
                        </span>
                        <span className="text-gray_900 text-[14px] font-inter">
                          4.
                        </span>
                        <span className="text-gray_900 text-[14px] font-poppins">
                          {" "}
                          Submit this link and wait for moderation approval.
                        </span>
                      </Text>
                      <div className="flex flex-row sm:gap-[40px] items-center justify-between mt-[9px] w-[100%]">
                        <div className="flex flex-row gap-[20px] items-start justify-start w-[auto]">
                          <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_clock_gray_400.svg"
                              className="h-[24px] w-[24px]"
                              alt="clock"
                            />
                            <Text
                              className="font-medium text-gray_400 text-left w-[auto]"
                              variant="body14"
                            >
                              3h. 40m.
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-end w-[50%]">
                            <Img
                              src="images/img_grid_gray_400.svg"
                              className="h-[24px] w-[24px]"
                              alt="grid"
                            />
                            <Text
                              className="font-medium ml-[3px] text-green_A700 text-left w-[auto]"
                              variant="body14"
                            >
                              +42% Boost
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] text-[16px] text-center text-white_A700 w-[120px]"
                          shape="RoundedBorder10"
                          size="4xl"
                          variant="GradientPurpleA100IndigoA200"
                        >
                          Start
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-center justify-end p-[18px] rounded-radius15 shadow-bs2 md:w-[100%] sm:w-[100%] w-[50%]">
                    <div className="flex flex-col items-center justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[98%]">
                      <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-between w-[100%]">
                        <div className="flex sm:flex-1 flex-row gap-[5px] items-center justify-start sm:w-[100%] w-[auto]">
                          <Img
                            src="images/img_settings_indigo_300.svg"
                            className="h-[30px] w-[30px]"
                            alt="settings One"
                          />
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body7"
                          >
                            Join our Discord server
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
                      <Text
                        className="font-medium mt-[10px] text-gray_900 text-left"
                        variant="body14"
                      >
                        <span className="text-gray_900 text-[14px] font-inter">
                          1.
                        </span>
                        <span className="text-gray_900 text-[14px] font-poppins">
                          {" "}
                          Follow the link{" "}
                        </span>
                        <a
                          href="javascript:"
                          className="text-blue_A201 text-[14px] font-poppins underline"
                        >
                          https://youtu.be/dQw4w9WgXcQ
                        </a>
                        <span className="text-gray_900 text-[14px] font-poppins">
                          .  Write an original comment to the video and attach
                          one of the three attached hashtags. Add your referral
                          link. <br />
                        </span>
                        <span className="text-gray_900 text-[14px] font-inter">
                          2.
                        </span>
                        <span className="text-gray_900 text-[14px] font-poppins">
                          {" "}
                          Click on the time of comment post
                          <br />
                          3. Copy URL of your commentary
                          <br />
                        </span>
                        <span className="text-gray_900 text-[14px] font-inter">
                          4.
                        </span>
                        <span className="text-gray_900 text-[14px] font-poppins">
                          {" "}
                          Submit this link and wait for moderation approval.
                        </span>
                      </Text>
                      <div className="flex flex-row sm:gap-[40px] items-center justify-between mt-[9px] w-[100%]">
                        <div className="flex flex-row gap-[20px] items-start justify-start w-[auto]">
                          <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_clock_gray_400.svg"
                              className="h-[24px] w-[24px]"
                              alt="clock One"
                            />
                            <Text
                              className="font-medium text-gray_400 text-left w-[auto]"
                              variant="body14"
                            >
                              3h. 40m.
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-end w-[50%]">
                            <Img
                              src="images/img_grid_gray_400.svg"
                              className="h-[24px] w-[24px]"
                              alt="grid One"
                            />
                            <Text
                              className="font-medium ml-[3px] text-green_A700 text-left w-[auto]"
                              variant="body14"
                            >
                              +42% Boost
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] text-[16px] text-center text-white_A700 w-[120px]"
                          shape="RoundedBorder10"
                          size="4xl"
                          variant="GradientPurpleA100IndigoA200"
                        >
                          Start
                        </Button>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="font-poppins h-[1464px] md:h-[1707px] sm:h-[1773px] mt-[119px] relative md:w-[100%] sm:w-[100%] w-[62%]">
                  <Img
                    src="images/img_rectangle89.png"
                    className="h-[489px] mt-[126px] mx-[auto] object-cover rounded-radius15 w-[67%]"
                    alt="RectangleEightyNine"
                  />
                  <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                    <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[65%]">
                      <Text
                        className="bg-clip-text bg-gradient4  text-left text-transparent w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Detailed tutorial
                      </Text>
                      <Text
                        className="font-bold mt-[21px] text-gray_900 text-left w-[auto]"
                        variant="body4"
                      >
                        You can watch our detailed tutorial if you have any
                        troubles
                      </Text>
                      <Img
                        src="images/img_biplayfill.svg"
                        className="h-[127px] mt-[197px] w-[127px]"
                        alt="biplayfill"
                      />
                    </div>
                    <Text
                      className="bg-clip-text bg-gradient4  mt-[319px] text-left text-transparent w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      FAQ
                    </Text>
                    <Text
                      className="font-bold mt-[7px] text-gray_900 text-left w-[auto]"
                      variant="body4"
                    >
                      Frequently Asked Questions
                    </Text>
                    <div className="flex flex-col gap-[15px] items-center justify-center mt-[30px] md:w-[100%] sm:w-[100%] w-[auto]">
                      <div className="bg-white_A700 flex flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between p-[16px] rounded-radius15 shadow-bs2 w-[100%]">
                        <Text
                          className="font-bold ml-[41px] text-gray_900 text-left w-[auto]"
                          variant="body7"
                        >
                          Where do i get my youtube link?
                        </Text>
                        <Button
                          className="flex h-[35px] items-center justify-center my-[3px] w-[35px]"
                          shape="icbRoundedBorder19"
                          size="lgIcn"
                          variant="icbFillIndigo50"
                        >
                          <Img
                            src="images/img_plus_gray_900_35x35.svg"
                            className="h-[16px]"
                            alt="plus"
                          />
                        </Button>
                      </div>
                      <div className="bg-white_A700 flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between p-[16px] rounded-radius15 shadow-bs2 w-[100%]">
                        <Text
                          className="font-bold sm:ml-[0] ml-[41px] text-gray_900 text-left w-[auto]"
                          variant="body7"
                        >
                          How do i invite my referral friend?
                        </Text>
                        <Button
                          className="flex h-[35px] items-center justify-center sm:mt-[0] my-[3px] w-[35px]"
                          shape="icbRoundedBorder19"
                          size="lgIcn"
                          variant="icbFillIndigo50"
                        >
                          <Img
                            src="images/img_plus_gray_900_35x35.svg"
                            className="h-[16px]"
                            alt="plus One"
                          />
                        </Button>
                      </div>
                      <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between p-[16px] rounded-radius15 shadow-bs2 w-[100%]">
                        <Text
                          className="font-bold md:ml-[0] sm:ml-[0] ml-[41px] text-gray_900 text-left w-[auto]"
                          variant="body7"
                        >
                          Are there separate balance for different types of
                          activity (pools, farm)?
                        </Text>
                        <Button
                          className="flex h-[35px] items-center justify-center md:mt-[0] sm:mt-[0] my-[3px] w-[35px]"
                          shape="icbRoundedBorder19"
                          size="lgIcn"
                          variant="icbFillIndigo50"
                        >
                          <Img
                            src="images/img_plus_gray_900_35x35.svg"
                            className="h-[16px]"
                            alt="plus Two"
                          />
                        </Button>
                      </div>
                      <div className="bg-white_A700 flex flex-col items-center justify-start p-[16px] rounded-radius15 shadow-bs2 w-[100%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start mb-[8px] mt-[3px] md:w-[100%] sm:w-[100%] w-[97%]">
                          <div className="flex flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
                            <Text
                              className="font-bold mt-[3px] text-gray_900 text-left w-[auto]"
                              variant="body7"
                            >
                              How does it works?
                            </Text>
                            <Button
                              className="flex h-[35px] items-center justify-center w-[35px]"
                              shape="icbRoundedBorder19"
                              size="lgIcn"
                              variant="icbFillIndigo50"
                            >
                              <Img
                                src="images/img_ticket.svg"
                                className="h-[16px]"
                                alt="ticket"
                              />
                            </Button>
                          </div>
                          <Text
                            className="font-medium text-gray_600 text-left sm:w-[100%] w-[30%]"
                            variant="body12"
                          >
                            Invite your friends and get 10% for each referral.
                            There are variety of options  to get referals
                            involved: farms and pools.
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between p-[16px] rounded-radius15 shadow-bs2 w-[100%]">
                        <Text
                          className="font-bold ml-[41px] text-gray_900 text-left w-[auto]"
                          variant="body7"
                        >
                          Where all my referral links?
                        </Text>
                        <Button
                          className="flex h-[35px] items-center justify-center my-[3px] w-[35px]"
                          shape="icbRoundedBorder19"
                          size="lgIcn"
                          variant="icbFillIndigo50"
                        >
                          <Img
                            src="images/img_plus_gray_900_35x35.svg"
                            className="h-[16px]"
                            alt="plus Three"
                          />
                        </Button>
                      </div>
                      <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between p-[16px] rounded-radius15 shadow-bs2 w-[100%]">
                        <Text
                          className="font-bold md:ml-[0] sm:ml-[0] ml-[41px] text-gray_900 text-left w-[auto]"
                          variant="body7"
                        >
                          Are there fees for referral rewards withdrawal from
                          referral balance?
                        </Text>
                        <Button
                          className="flex h-[35px] items-center justify-center md:mt-[0] sm:mt-[0] my-[3px] w-[35px]"
                          shape="icbRoundedBorder19"
                          size="lgIcn"
                          variant="icbFillIndigo50"
                        >
                          <Img
                            src="images/img_plus_gray_900_35x35.svg"
                            className="h-[16px]"
                            alt="plus Four"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_900 flex flex-col font-poppins items-center justify-end mt-[136px] p-[37px] sm:px-[20px] w-[100%]">
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-end justify-start mt-[9px] md:w-[100%] sm:w-[100%] w-[64%]">
                    <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[22%]">
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
                              <div className="flex flex-col gap-[10px] items-start justify-start w-[58%]">
                                <Text
                                  className="font-bold text-gray_600 text-left w-[auto]"
                                  variant="body17"
                                >
                                  Max supply:
                                </Text>
                                <Text
                                  className="font-bold text-gray_600 text-left w-[auto]"
                                  variant="body17"
                                >
                                  Total supply:
                                </Text>
                                <Text
                                  className="font-bold text-gray_600 text-left w-[auto]"
                                  variant="body17"
                                >
                                  Circulating supply:
                                </Text>
                                <Text
                                  className="font-bold text-gray_600 text-left w-[auto]"
                                  variant="body17"
                                >
                                  Total burned:
                                </Text>
                                <Text
                                  className="font-bold text-gray_600 text-left w-[auto]"
                                  variant="body17"
                                >
                                  Market cap:
                                </Text>
                              </div>
                              <div className="flex flex-col font-poppins items-start justify-start pr-[2px] py-[2px] w-[40%]">
                                <Text
                                  className="font-bold text-left text-white_A700 w-[auto]"
                                  variant="body17"
                                >
                                  15 000 000
                                </Text>
                                <Text
                                  className="font-bold mt-[13px] text-left text-white_A700 w-[auto]"
                                  variant="body17"
                                >
                                  9 073 652
                                </Text>
                                <Text
                                  className="font-bold mt-[13px] text-left text-white_A700 w-[auto]"
                                  variant="body17"
                                >
                                  7 654 228
                                </Text>
                                <Text
                                  className="font-bold mt-[12px] text-left text-white_A700 w-[auto]"
                                  variant="body17"
                                >
                                  1 276 445
                                </Text>
                                <Text
                                  className="font-bold mt-[10px] text-left text-white_A700 w-[auto]"
                                  variant="body17"
                                >
                                  $37 654 213
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[93px] md:mt-[0] sm:mt-[0] mt-[15px] md:w-[100%] sm:w-[100%] w-[37%]">
                      <div className="flex flex-col gap-[47px] items-start justify-start w-[100%]">
                        <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[60px] items-start justify-start sm:w-[100%] w-[auto]">
                          <div className="flex flex-col gap-[15px] items-start justify-start w-[auto]">
                            <Text
                              className="font-bold text-bluegray_101 text-left w-[auto]"
                              variant="body12"
                            >
                              About us
                            </Text>
                            <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                                variant="body14"
                              >
                                Blog
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                                variant="body14"
                              >
                                Docs
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                                variant="body14"
                              >
                                White Paper{" "}
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                                variant="body14"
                              >
                                Github
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[15px] items-start justify-start w-[auto]">
                            <Text
                              className="font-bold text-bluegray_101 text-left w-[auto]"
                              variant="body12"
                            >
                              Sitemap
                            </Text>
                            <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                                variant="body14"
                              >
                                Main
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                                variant="body14"
                              >
                                Trade
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                                variant="body14"
                              >
                                Earn
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                                variant="body14"
                              >
                                Extra APR
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                                variant="body14"
                              >
                                Referal program
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[15px] items-start justify-start w-[auto]">
                            <Text
                              className="font-bold text-bluegray_101 text-left w-[auto]"
                              variant="body12"
                            >
                              Products
                            </Text>
                            <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                                variant="body14"
                              >
                                Free pool
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                                variant="body14"
                              >
                                Mystery pool
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                                variant="body14"
                              >
                                V3 Pools
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                                variant="body14"
                              >
                                Farm
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                                variant="body14"
                              >
                                Extra APR
                              </Text>
                            </div>
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
                    <div className="flex flex-col gap-[22px] items-start justify-start mb-[127px] md:ml-[0] sm:ml-[0] ml-[60px] md:mt-[0] sm:mt-[0] mt-[15px] md:w-[100%] sm:w-[100%] w-[29%]">
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
                          <Img
                            src="images/img_send.svg"
                            className=""
                            alt="send"
                          />
                        </Button>
                        <Button
                          className="common-pointer flex h-[40px] items-center justify-center w-[40px]"
                          onClick={handleNavigate5}
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
                          <Img
                            src="images/img_eye.svg"
                            className=""
                            alt="eye"
                          />
                        </Button>
                        <Button
                          className="common-pointer flex h-[40px] items-center justify-center w-[40px]"
                          onClick={handleNavigate6}
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
              </div>
              <Img
                src="images/img_liquidityconect.png"
                className="absolute h-[680px] inset-x-[0] mx-[auto] object-cover top-[0] w-[auto]"
                alt="08Gradients"
              />
            </div>
            <div className="absolute flex flex-col font-poppins gap-[101px] md:gap-[40px] sm:gap-[40px] inset-x-[0] items-center justify-start mx-[auto] py-[126px] top-[14%] w-[100%]">
              <div className="sm:h-[1057px] h-[215px] md:h-[495px] relative w-[100%]">
                <div className="absolute bottom-[0] h-[12px] md:h-[8px] sm:h-[8px] inset-x-[0] mx-[auto] w-[100%]">
                  <Line className="absolute bg-gray_500_33 bottom-[0] h-[8px] inset-x-[0] mx-[auto] w-[100%]" />
                  <Img
                    src="images/img_line18.png"
                    className="absolute h-[8px] left-[0] object-cover top-[0] w-[auto]"
                    alt="LineEighteen"
                  />
                </div>
                <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[54%]">
                  <div className="flex flex-col gap-[13px] items-center justify-start w-[100%]">
                    <List
                      className="sm:flex-col flex-row gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start md:w-[100%] sm:w-[100%] w-[auto]"
                      orientation="horizontal"
                    >
                      <div className="bg-white_A700 flex flex-col items-center justify-center p-[17px] rounded-radius15 shadow-bs2 w-[100%]">
                        <div className="flex flex-col items-center justify-start mt-[5px] md:w-[100%] sm:w-[100%] w-[32%]">
                          <Text
                            className="bg-clip-text bg-gradient4  font-bold text-left text-transparent w-[auto]"
                            variant="body7"
                          >
                            Stake
                          </Text>
                        </div>
                        <Text
                          className="font-medium mt-[17px] text-center text-gray_900 w-[100%]"
                          variant="body14"
                        >
                          Stake tokens  on the Pool page.{" "}
                        </Text>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] mb-[4px] mt-[18px] text-[16px] text-center text-white_A700 w-[120px]"
                          shape="RoundedBorder10"
                          size="4xl"
                          variant="GradientPurpleA100IndigoA200"
                        >
                          Stake
                        </Button>
                      </div>
                      <div className="bg-white_A700 flex flex-col gap-[18px] items-center justify-start p-[17px] rounded-radius15 shadow-bs2 w-[100%]">
                        <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[47%]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body7"
                          >
                            Activate
                          </Text>
                        </div>
                        <Text
                          className="font-medium text-center text-gray_903 w-[100%]"
                          variant="body14"
                        >
                          Confirm transaction  in your crypto wallet.{" "}
                        </Text>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] mb-[4px] text-[16px] text-center text-gray_400 w-[120px]"
                          shape="RoundedBorder10"
                          size="4xl"
                          variant="FillGray50033"
                        >
                          Stake
                        </Button>
                      </div>
                      <div className="bg-white_A700 flex flex-col items-center justify-center p-[17px] rounded-radius15 shadow-bs2 w-[100%]">
                        <div className="flex flex-col items-center justify-start mt-[8px] md:w-[100%] sm:w-[100%] w-[54%]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body7"
                          >
                            Complete
                          </Text>
                        </div>
                        <Text
                          className="font-medium mt-[12px] text-center text-gray_903 w-[100%]"
                          variant="body14"
                        >
                          Choose task on the list below and submit it.
                        </Text>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] mb-[4px] mt-[18px] text-[16px] text-center text-gray_400 w-[120px]"
                          shape="RoundedBorder10"
                          size="4xl"
                          variant="FillGray50033"
                        >
                          Stake
                        </Button>
                      </div>
                      <div className="bg-white_A700 flex flex-col items-center justify-start p-[18px] rounded-radius15 shadow-bs2 w-[100%]">
                        <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[27%]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body7"
                          >
                            Wait
                          </Text>
                        </div>
                        <Text
                          className="font-medium mt-[7px] text-center text-gray_900 sm:w-[100%] w-[85%]"
                          variant="body14"
                        >
                          Wait moderators approval. After that your APR will
                          increase.
                        </Text>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] mb-[3px] mt-[7px] text-[16px] text-center text-gray_400 w-[120px]"
                          shape="RoundedBorder10"
                          size="4xl"
                          variant="FillGray903"
                        >
                          View
                        </Button>
                      </div>
                    </List>
                    <div className="gap-[243px] md:gap-[40px] sm:gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between md:w-[100%] sm:w-[100%] w-[81%]">
                      <div className="bg-gradient4  border-bw3 border-solid border-white_A700 h-[25px] rounded-radius12 md:w-[13px] w-[25px] sm:w-[7px]"></div>
                      <div className="bg-gray_301 border-bw3 border-purple_50 border-solid h-[25px] rounded-radius12 md:w-[13px] w-[25px] sm:w-[7px]"></div>
                      <div className="bg-gray_302 border-bw3 border-purple_50 border-solid h-[25px] rounded-radius12 md:w-[13px] w-[25px] sm:w-[7px]"></div>
                      <div className="bg-gray_302 border-bw3 border-purple_50 border-solid h-[25px] rounded-radius12 md:w-[13px] w-[25px] sm:w-[7px]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mb-[238px] md:w-[100%] sm:w-[100%] w-[62%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="h-[133px] md:h-[390px] sm:h-[390px] relative w-[100%]">
                      <div className="flex flex-col h-[100%] items-center justify-start m-[auto] w-[100%]">
                        <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                          <div className="bg-white_A700 h-[133px] rotate-[90deg] rounded-radius15 shadow-bs2 w-[auto]"></div>
                          <div className="bg-white_A700 h-[133px] rotate-[90deg] rounded-radius15 shadow-bs2 w-[auto]"></div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[94%]">
                        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                          <div className="md:h-[261px] sm:h-[261px] h-[80px] relative md:w-[100%] sm:w-[100%] w-[auto]">
                            <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-center justify-start left-[26%] my-[auto] w-[45%]">
                              <div className="flex flex-row items-center justify-between w-[100%]">
                                <Line className="bg-black_900_4c h-[79px] w-[1px]" />
                                <Line className="bg-black_900_4c h-[79px] w-[1px]" />
                              </div>
                            </div>
                            <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                              <div className="flex flex-col items-center justify-start w-[100%]">
                                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start w-[100%]">
                                  <div className="flex md:flex-1 sm:flex-1 flex-col gap-[13px] items-center justify-start md:mt-[0] sm:mt-[0] mt-[4px] md:w-[100%] sm:w-[100%] w-[20%]">
                                    <Text
                                      className="font-medium text-gray_900 text-left w-[auto]"
                                      variant="body14"
                                    >
                                      Tasks approved
                                    </Text>
                                    <Text
                                      className="font-bold text-gray_900 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      4/5
                                    </Text>
                                  </div>
                                  <div className="flex md:flex-1 sm:flex-1 flex-col gap-[13px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[94px] md:w-[100%] sm:w-[100%] w-[32%]">
                                    <Text
                                      className="font-medium text-gray_900 text-left w-[auto]"
                                      variant="body14"
                                    >
                                      Tasks for today completed
                                    </Text>
                                    <Text
                                      className="font-bold text-gray_900 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      0/3
                                    </Text>
                                  </div>
                                  <div className="flex md:flex-1 sm:flex-1 flex-col gap-[24px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[68px] md:mt-[0] sm:mt-[0] mt-[2px] md:w-[100%] sm:w-[100%] w-[27%]">
                                    <Text
                                      className="font-medium text-gray_900 text-left w-[auto]"
                                      variant="body14"
                                    >
                                      Total APR increased in:
                                    </Text>
                                    <Text
                                      className="font-bold text-gray_900 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      +178%
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex md:flex-1 sm:flex-1 flex-col gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                            <div className="flex h-[53px] md:h-[auto] sm:h-[auto] justify-end relative md:w-[100%] sm:w-[100%] w-[92%]">
                              <div className="bg-gray_900 flex flex-col h-[100%] items-center justify-start mb-[2px] ml-[92px] mt-[auto] rounded-radius50 w-[14px]">
                                <Img
                                  src="images/img_question_white_a700.svg"
                                  className="h-[11px] w-[11px]"
                                  alt="question"
                                />
                              </div>
                              <div className="absolute flex flex-col gap-[12px] h-[max-content] inset-[0] items-start justify-center m-[auto] w-[100%]">
                                <div className="flex flex-col items-center justify-start w-[100%]">
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body14"
                                  >
                                    To complete the task for the current day you
                                    have:
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[26%]">
                                  <Text
                                    className="font-bold text-gray_900 text-left w-[auto]"
                                    variant="body7"
                                  >
                                    06:53:47
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray_903 flex flex-col items-start justify-start rounded-radius8 w-[100%]">
                              <div className="bg-gradient4  h-[16px] rounded-radius8 w-[35%]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-end mt-[119px] p-[18px] rounded-radius15 shadow-bs2 md:w-[100%] sm:w-[100%] w-[50%]">
                      <div className="flex flex-col items-center justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[98%]">
                        <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-between w-[100%]">
                          <div className="flex sm:flex-1 flex-row gap-[5px] items-center justify-start sm:w-[100%] w-[auto]">
                            <Img
                              src="images/img_twitter_blue_300.svg"
                              className="common-pointer h-[30px] w-[30px]"
                              onClick={handleNavigate7}
                              alt="twitter One"
                            />
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body7"
                            >
                              Retweet our post
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
                        <Text
                          className="font-medium mt-[10px] text-gray_900 text-left"
                          variant="body14"
                        >
                          <span className="text-gray_900 text-[14px] font-inter">
                            1.
                          </span>
                          <span className="text-gray_900 text-[14px] font-poppins">
                            {" "}
                            Follow the link{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-blue_A201 text-[14px] font-poppins underline"
                          >
                            https://youtu.be/dQw4w9WgXcQ
                          </a>
                          <span className="text-gray_900 text-[14px] font-poppins">
                            .  Write an original comment to the video and attach
                            one of the three attached hashtags. Add your
                            referral link. <br />
                          </span>
                          <span className="text-gray_900 text-[14px] font-inter">
                            2.
                          </span>
                          <span className="text-gray_900 text-[14px] font-poppins">
                            {" "}
                            Click on the time of comment post
                            <br />
                            3. Copy URL of your commentary
                            <br />
                          </span>
                          <span className="text-gray_900 text-[14px] font-inter">
                            4.
                          </span>
                          <span className="text-gray_900 text-[14px] font-poppins">
                            {" "}
                            Submit this link and wait for moderation approval.
                          </span>
                        </Text>
                        <div className="flex flex-row sm:gap-[40px] items-center justify-between mt-[9px] w-[100%]">
                          <div className="flex flex-row gap-[20px] items-start justify-start w-[auto]">
                            <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                              <Img
                                src="images/img_clock_gray_400.svg"
                                className="h-[24px] w-[24px]"
                                alt="clock Two"
                              />
                              <Text
                                className="font-medium text-gray_400 text-left w-[auto]"
                                variant="body14"
                              >
                                27h. 23m.
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-evenly w-[49%]">
                              <Img
                                src="images/img_grid_gray_400.svg"
                                className="h-[24px] w-[24px]"
                                alt="grid Two"
                              />
                              <Text
                                className="font-medium text-green_A700 text-left w-[auto]"
                                variant="body14"
                              >
                                +56% Boost
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] text-[16px] text-center text-white_A700 w-[120px]"
                            shape="RoundedBorder10"
                            size="4xl"
                            variant="GradientPurpleA100IndigoA200"
                          >
                            Start
                          </Button>
                        </div>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[20px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 justify-center mt-[20px] w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-[18px] rounded-radius15 shadow-bs2 w-[100%]">
                        <div className="flex flex-col items-center justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[98%]">
                          <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-between w-[100%]">
                            <div className="flex sm:flex-1 flex-row gap-[5px] items-center justify-start sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_send_blue_500.svg"
                                className="h-[30px] w-[30px]"
                                alt="send One"
                              />
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body7"
                              >
                                Subscribe to our Telegram
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
                          <Text
                            className="font-medium mt-[10px] text-gray_900 text-left"
                            variant="body14"
                          >
                            <span className="text-gray_900 text-[14px] font-inter">
                              1.
                            </span>
                            <span className="text-gray_900 text-[14px] font-poppins">
                              {" "}
                              Follow the link{" "}
                            </span>
                            <a
                              href="javascript:"
                              className="text-blue_A201 text-[14px] font-poppins underline"
                            >
                              https://youtu.be/dQw4w9WgXcQ
                            </a>
                            <span className="text-gray_900 text-[14px] font-poppins">
                              .  Write an original comment to the video and
                              attach one of the three attached hashtags. Add
                              your referral link. <br />
                            </span>
                            <span className="text-gray_900 text-[14px] font-inter">
                              2.
                            </span>
                            <span className="text-gray_900 text-[14px] font-poppins">
                              {" "}
                              Click on the time of comment post
                              <br />
                              3. Copy URL of your commentary
                              <br />
                            </span>
                            <span className="text-gray_900 text-[14px] font-inter">
                              4.
                            </span>
                            <span className="text-gray_900 text-[14px] font-poppins">
                              {" "}
                              Submit this link and wait for moderation approval.
                            </span>
                          </Text>
                          <div className="flex flex-row sm:gap-[40px] items-center justify-between mt-[9px] w-[100%]">
                            <div className="flex flex-row gap-[20px] items-start justify-start w-[auto]">
                              <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                                <Img
                                  src="images/img_clock_gray_400.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="clock Three"
                                />
                                <Text
                                  className="font-medium text-gray_400 text-left w-[auto]"
                                  variant="body14"
                                >
                                  3h. 30m.
                                </Text>
                              </div>
                              <div className="flex flex-row items-center justify-end w-[51%]">
                                <Img
                                  src="images/img_grid_gray_400.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="grid Three"
                                />
                                <Text
                                  className="font-medium ml-[3px] text-green_A700 text-left w-[auto]"
                                  variant="body14"
                                >
                                  +30% Boost
                                </Text>
                              </div>
                            </div>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] text-[16px] text-center text-white_A700 w-[120px]"
                              shape="RoundedBorder10"
                              size="4xl"
                              variant="GradientPurpleA100IndigoA200"
                            >
                              Start
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-[18px] rounded-radius15 shadow-bs2 w-[100%]">
                        <div className="flex flex-col items-center justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[98%]">
                          <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-between w-[100%]">
                            <div className="flex sm:flex-1 flex-row gap-[5px] items-center justify-start sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_socials_red_a701.svg"
                                className="h-[30px] w-[30px]"
                                alt="socials One"
                              />
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body7"
                              >
                                Subscribe to our Youtube
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
                          <Text
                            className="font-medium mt-[10px] text-gray_900 text-left"
                            variant="body14"
                          >
                            <span className="text-gray_900 text-[14px] font-inter">
                              1.
                            </span>
                            <span className="text-gray_900 text-[14px] font-poppins">
                              {" "}
                              Follow the link{" "}
                            </span>
                            <a
                              href="javascript:"
                              className="text-blue_A201 text-[14px] font-poppins underline"
                            >
                              https://youtu.be/dQw4w9WgXcQ
                            </a>
                            <span className="text-gray_900 text-[14px] font-poppins">
                              .  Write an original comment to the video and
                              attach one of the three attached hashtags. Add
                              your referral link. <br />
                            </span>
                            <span className="text-gray_900 text-[14px] font-inter">
                              2.
                            </span>
                            <span className="text-gray_900 text-[14px] font-poppins">
                              {" "}
                              Click on the time of comment post
                              <br />
                              3. Copy URL of your commentary
                              <br />
                            </span>
                            <span className="text-gray_900 text-[14px] font-inter">
                              4.
                            </span>
                            <span className="text-gray_900 text-[14px] font-poppins">
                              {" "}
                              Submit this link and wait for moderation approval.
                            </span>
                          </Text>
                          <div className="flex flex-row sm:gap-[40px] items-center justify-between mt-[9px] w-[100%]">
                            <div className="flex flex-row gap-[20px] items-start justify-start w-[auto]">
                              <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                                <Img
                                  src="images/img_clock_gray_400.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="clock Four"
                                />
                                <Text
                                  className="font-medium text-gray_400 text-left w-[auto]"
                                  variant="body14"
                                >
                                  53h. 21m.
                                </Text>
                              </div>
                              <div className="flex flex-row items-center justify-evenly w-[50%]">
                                <Img
                                  src="images/img_grid_gray_400.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="grid Four"
                                />
                                <Text
                                  className="font-medium text-green_A700 text-left w-[auto]"
                                  variant="body14"
                                >
                                  +60% Boost
                                </Text>
                              </div>
                            </div>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] text-[16px] text-center text-white_A700 w-[120px]"
                              shape="RoundedBorder10"
                              size="4xl"
                              variant="GradientPurpleA100IndigoA200"
                            >
                              Start
                            </Button>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col font-poppins inset-x-[0] items-center justify-start mx-[auto] top-[5%] w-[62%]">
            <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[537px] items-start justify-start w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
                <div className="md:h-[388px] sm:h-[388px] h-[455px] relative sm:w-[100%] w-[auto]">
                  <Text
                    className="absolute bg-clip-text bg-gradient4  left-[1%] text-left text-transparent top-[0] w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Extra Boost
                  </Text>
                  <div className="absolute md:h-[388px] sm:h-[388px] h-[449px] inset-[0] justify-center m-[auto] w-[100%]">
                    <div className="absolute bottom-[0] md:h-[388px] sm:h-[388px] h-[390px] left-[0] sm:w-[100%] w-[76%]">
                      <Text
                        className="font-medium ml-[3px] text-gray_900 text-left sm:w-[100%] w-[81%]"
                        variant="body7"
                      >
                        <span className="text-gray_900 text-[20px] font-poppins">
                          Up to{" "}
                        </span>
                        <span className="text-purple_A100 text-[20px] font-poppins font-bold">
                          1300% APR
                        </span>
                        <span className="text-gray_900 text-[20px] font-poppins">
                          {" "}
                          for staking our tokens. Just complete tasks, wait for
                          moderation and after approval your APR will boost to
                          the sky.
                        </span>
                      </Text>
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-[max-content] inset-[0] items-end justify-center m-[auto] p-[22px] sm:px-[20px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group205.png')",
                        }}
                      >
                        <Img
                          src="images/img_vector2.png"
                          className="h-[60px] md:h-[auto] sm:h-[auto] mb-[161px] mt-[123px] object-cover sm:w-[100%] w-[auto]"
                          alt="VectorTwo"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_vector3.png"
                      className="absolute bottom-[37%] h-[62px] object-cover right-[21%] w-[auto]"
                      alt="VectorThree"
                    />
                    <Img
                      src="images/img_materialsymbol_199x199.png"
                      className="absolute h-[199px] object-cover right-[0] top-[0] w-[199px]"
                      alt="materialsymbol"
                    />
                  </div>
                </div>
                <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:mt-[0] sm:mt-[0] mt-[14px] md:w-[100%] sm:w-[100%] w-[auto]">
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
                                    450%{" "}
                                  </Button>
                                </div>
                                <Button
                                  className="cursor-pointer font-bold leading-[normal] md:ml-[0] sm:ml-[0] ml-[51px] mt-[3px] text-[16px] text-center text-white_A700 w-[68px]"
                                  shape="RoundedBorder13"
                                  size="md"
                                  variant="GradientPurpleA100IndigoA200"
                                >
                                  1100%{" "}
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
              <Text
                className="font-bold md:ml-[0] sm:ml-[0] ml-[4px] text-gray_900 text-left w-[auto]"
                variant="body1"
              >
                Active tasks
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bg-gradient4  h-[25px] left-[18%] md:px-[20px] sm:px-[20px] rounded-radius12 top-[12%] w-[25px]"></div>
      </div>
    </>
  );
};

export default ExtraBoostpage1920Page;
