import React from "react";

import { Img, Text, Button, List, Line } from "components";

const ExtraBoostwithmoretasPage = () => {
  function handleNavigate3() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate4() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="font-poppins h-[4571px] mx-[auto] relative w-[100%]">
        <div className="absolute md:h-[3766px] sm:h-[4412px] h-[4571px] inset-[0] justify-center m-[auto] w-[100%]">
          <div className="md:h-[3766px] sm:h-[4412px] h-[4571px] m-[auto] w-[100%]">
            <div className="md:h-[3766px] sm:h-[4066px] h-[4571px] m-[auto] w-[100%]">
              <div className="bg-white_A700 flex flex-col h-[100%] items-center justify-start m-[auto] pb-[2175px] w-[100%]">
                <div className="flex flex-col gap-[1404px] md:gap-[40px] sm:gap-[40px] items-center justify-start w-[100%]">
                  <header className="flex items-center justify-center w-[100%]">
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-center w-[100%]">
                      <div className="bg-white_A700 flex flex-col items-center justify-center p-[26px] sm:px-[20px] w-[100%]">
                        <div className="flex flex-col items-center justify-center mt-[5px] md:w-[100%] sm:w-[100%] w-[93%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-center w-[100%]">
                            <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-end mb-[5px] p-[12px] rounded-radius7 md:w-[100%] sm:w-[100%] w-[12%]">
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
                            <div className="flex md:flex-1 sm:flex-1 flex-col gap-[10px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[70px] md:w-[100%] sm:w-[100%] w-[51%]">
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
                              <div className="bg-gradient2  h-[8px] rounded-radius50 w-[8px]"></div>
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
                  <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[89%]">
                    <Text
                      className="font-bold md:ml-[0] sm:ml-[0] ml-[2px] text-gray_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Active tasks
                    </Text>
                    <div className="gap-[20px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[24px] w-[100%]">
                      <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-[18px] rounded-radius15 shadow-bs2 w-[100%]">
                        <div className="flex flex-col items-center justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[98%]">
                          <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-between w-[100%]">
                            <div className="flex sm:flex-1 flex-row gap-[5px] items-center justify-start sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_twitter_blue_300.svg"
                                className="h-[30px] w-[30px]"
                                alt="twitter"
                              />
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body7"
                              >
                                Retweet
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
                                  alt="clock"
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
                                  alt="grid"
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
                      <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-[18px] rounded-radius15 shadow-bs2 w-[100%]">
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
                                Join Discord
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
                      <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-[18px] rounded-radius15 shadow-bs2 w-[100%]">
                        <div className="flex flex-col items-center justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[98%]">
                          <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-between w-[100%]">
                            <div className="flex sm:flex-1 flex-row gap-[5px] items-center justify-start sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_send_blue_500.svg"
                                className="h-[30px] w-[30px]"
                                alt="send"
                              />
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body7"
                              >
                                Subscribe to Telegram
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
                                  alt="clock Two"
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
                                  alt="grid Two"
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
                                alt="socials"
                              />
                              <Text
                                className="font-bold text-gray_900 text-left w-[auto]"
                                variant="body7"
                              >
                                Subscribe to Youtube
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
                                  53h. 21m.
                                </Text>
                              </div>
                              <div className="flex flex-row items-center justify-evenly w-[50%]">
                                <Img
                                  src="images/img_grid_gray_400.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="grid Three"
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
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-end mt-[20px] p-[18px] rounded-radius15 shadow-bs2 md:w-[100%] sm:w-[100%] w-[50%]">
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
                                alt="clock Four"
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
                                alt="grid Four"
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
                  </div>
                </div>
              </div>
              <Img
                src="images/img_liquidityconect.png"
                className="absolute h-[680px] inset-x-[0] mx-[auto] object-cover top-[0] md:w-[100%] sm:w-[100%] w-[auto]"
                alt="08Gradients"
              />
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-end justify-start mx-[auto] pb-[680px] top-[5%] w-[100%]">
              <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[44%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius20 shadow-bs2 w-[100%]">
                    <div className="bg-white_A700 flex flex-col items-center justify-end p-[18px] rotate-[90deg] rounded-radius20 shadow-bs2 w-[100%]">
                      <div className="flex flex-col items-center justify-start mt-[6px] md:w-[100%] sm:w-[100%] w-[99%]">
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
              <div className="md:h-[1025px] sm:h-[1463px] h-[575px] mt-[43px] relative w-[100%]">
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] p-[22px] sm:px-[20px] w-[89%]"
                  style={{ backgroundImage: "url('images/img_group243.svg')" }}
                >
                  <div className="flex flex-col gap-[184px] md:gap-[40px] sm:gap-[40px] items-center justify-start mt-[81px] md:w-[100%] sm:w-[100%] w-[98%]">
                    <div className="flex md:flex-col sm:flex-col flex-row gap-[40px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                      <List
                        className="sm:flex-col flex-row gap-[40px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] sm:w-[100%] w-[49%]"
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
                            Stake SWP on  the Pools page
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
                        <div className="bg-white_A700 flex flex-col items-center justify-center p-[16px] rounded-radius15 shadow-bs2 w-[100%]">
                          <div className="flex flex-col items-center justify-start mt-[9px] md:w-[100%] sm:w-[100%] w-[54%]">
                            <Text
                              className="font-bold text-gray_900 text-left w-[auto]"
                              variant="body7"
                            >
                              Complete
                            </Text>
                          </div>
                          <Text
                            className="font-medium mt-[12px] text-center text-gray_900 w-[100%]"
                            variant="body14"
                          >
                            Pick a task from the  list and submit proof
                          </Text>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] mb-[5px] mt-[18px] text-[16px] text-center text-gray_400 w-[120px]"
                            shape="RoundedBorder10"
                            size="4xl"
                            variant="FillGray903"
                          >
                            View
                          </Button>
                        </div>
                      </List>
                      <div className="bg-white_A700 flex flex-col gap-[18px] items-center justify-start p-[18px] rounded-radius15 shadow-bs2 md:w-[100%] sm:w-[100%] w-[23%]">
                        <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[27%]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body7"
                          >
                            Wait
                          </Text>
                        </div>
                        <Text
                          className="font-medium mb-[36px] text-center text-gray_900 sm:w-[100%] w-[85%]"
                          variant="body14"
                        >
                          Wait for moderators&#39; approval - this can take up
                          to 24h
                        </Text>
                      </div>
                      <div className="bg-white_A700 flex flex-col gap-[16px] items-center justify-center p-[16px] rounded-radius15 shadow-bs2 md:w-[100%] sm:w-[100%] w-[23%]">
                        <div className="flex flex-col items-center justify-start mt-[6px] md:w-[100%] sm:w-[100%] w-[33%]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body7"
                          >
                            Done!
                          </Text>
                        </div>
                        <Text
                          className="font-medium mb-[39px] text-center text-gray_900 w-[100%]"
                          variant="body14"
                        >
                          Enjoy Your APY on all eligible farms and pools will be
                          boosted for 24 hours
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                        <div className="sm:h-[301px] md:h-[79px] h-[80px] relative md:w-[100%] sm:w-[100%] w-[auto]">
                          <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[46%]">
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <Line className="bg-black_900_4c h-[79px] w-[1px]" />
                              <Line className="bg-black_900_4c h-[79px] w-[1px]" />
                            </div>
                          </div>
                          <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                            <div className="flex flex-col items-center justify-start w-[100%]">
                              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                                <div className="flex sm:flex-1 flex-col gap-[13px] items-center justify-start sm:mt-[0] mt-[4px] sm:w-[100%] w-[auto]">
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
                                <div className="flex sm:flex-1 flex-col gap-[13px] items-center justify-start sm:w-[100%] w-[auto]">
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
                                <div className="flex sm:flex-1 flex-col gap-[24px] items-center justify-start sm:mt-[0] mt-[2px] sm:w-[100%] w-[auto]">
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body14"
                                  >
                                    Total APY boost
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
                          <div className="flex h-[53px] md:h-[auto] sm:h-[auto] justify-end relative md:w-[100%] sm:w-[100%] w-[64%]">
                            <div className="bg-gray_900 flex flex-col h-[100%] items-center justify-start mb-[2px] ml-[92px] mt-[auto] rounded-radius50 w-[14px]">
                              <Img
                                src="images/img_question_white_a700.svg"
                                className="h-[11px] w-[11px]"
                                alt="question One"
                              />
                            </div>
                            <div className="absolute flex flex-col gap-[12px] h-[max-content] inset-[0] items-start justify-center m-[auto] w-[100%]">
                              <div className="flex flex-col items-center justify-start w-[100%]">
                                <Text
                                  className="font-medium text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  Time left to complete today&#39;s tasks
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[37%]">
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
                </div>
                <Img
                  src="images/img_group331.png"
                  className="absolute bottom-[41%] h-[25px] inset-x-[0] mx-[auto] object-cover md:w-[100%] sm:w-[100%] w-[auto]"
                  alt="Group331"
                />
              </div>
              <div className="flex flex-col items-start justify-start mt-[57px] md:w-[100%] sm:w-[100%] w-[89%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                    <Text
                      className="font-bold md:ml-[0] sm:ml-[0] ml-[2px] text-gray_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Awaiting moderation
                    </Text>
                    <List
                      className="sm:flex-col flex-row gap-[20px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 justify-center w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-[12px] rounded-radius15 shadow-bs2 w-[100%]">
                        <div className="flex flex-col gap-[10px] items-center justify-start my-[9px] md:w-[100%] sm:w-[100%] w-[98%]">
                          <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between w-[100%]">
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
                                Subscribe to Telegram
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
                          </div>
                          <Text
                            className="font-medium text-gray_900 text-left"
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
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-[12px] rounded-radius15 shadow-bs2 w-[100%]">
                        <div className="flex flex-col gap-[10px] items-center justify-start my-[9px] md:w-[100%] sm:w-[100%] w-[98%]">
                          <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between w-[100%]">
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
                                Subscribe to Youtube
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
                          </div>
                          <Text
                            className="font-medium text-gray_900 text-left"
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
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="flex flex-row gap-[13px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[949px] md:w-[100%] sm:w-[100%] w-[25%]">
                  <Text
                    className="font-bold mt-[2px] text-gray_900 text-left w-[auto]"
                    variant="body1"
                  >
                    Approved tasks
                  </Text>
                  <Img
                    src="images/img_arrowup.svg"
                    className="h-[30px] w-[30px]"
                    alt="arrowup Two"
                  />
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[30px] md:w-[100%] sm:w-[100%] w-[24%]">
                  <div className="flex flex-row gap-[18px] items-center justify-start w-[auto]">
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Rejected tasks
                    </Text>
                    <Img
                      src="images/img_arrowup.svg"
                      className="h-[30px] w-[30px]"
                      alt="arrowup Three"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col items-center justify-start left-[5%] top-[5%] w-[41%]">
            <div className="md:h-[388px] sm:h-[388px] h-[455px] relative w-[100%]">
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
                    Up to 1300% for staking SWP and completing simple challenges
                    like retweets. Pick a task, post proof, wait for moderation
                    - and see your APY skyrocket.
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
                  alt="materialsymbol One"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-gradient4  h-[25px] left-[4%] md:px-[20px] sm:px-[20px] rounded-radius12 top-[11%] w-[25px]"></div>
        <Img
          src="images/img_rectangle89.png"
          className="absolute bottom-[28%] h-[489px] inset-x-[0] mx-[auto] object-cover rounded-radius15 w-[60%]"
          alt="RectangleEightyNine"
        />
        <footer className="absolute bg-gray_900 bottom-[0] flex inset-x-[0] items-center justify-center mx-[auto] w-[100%]">
          <div className="flex flex-col items-center justify-center w-[89%]">
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
                    <Img
                      src="images/img_send.svg"
                      className=""
                      alt="send Two"
                    />
                  </Button>
                  <Button
                    className="common-pointer flex h-[40px] items-center justify-center w-[40px]"
                    onClick={handleNavigate3}
                    shape="icbRoundedBorder19"
                    size="lgIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_twitter.svg"
                      className=""
                      alt="twitter One"
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
                      alt="socials Two"
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
                    onClick={handleNavigate4}
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
        <div className="absolute bottom-[10%] flex flex-col inset-x-[0] justify-start max-w-[1180px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[207px] md:w-[100%] sm:w-[100%] w-[60%]">
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
              Watch the APY boost tutorial if you have any questions
            </Text>
            <Img
              src="images/img_biplayfill.svg"
              className="h-[127px] mt-[197px] w-[127px]"
              alt="biplayfill"
            />
          </div>
          <Text
            className="bg-clip-text bg-gradient4  md:ml-[0] sm:ml-[0] ml-[543px] mt-[319px] text-left text-transparent w-[auto]"
            as="h4"
            variant="h4"
          >
            FAQ
          </Text>
          <Text
            className="font-bold md:ml-[0] sm:ml-[0] ml-[409px] mt-[7px] text-gray_900 text-left w-[auto]"
            variant="body4"
          >
            Frequently Asked Questions
          </Text>
          <div className="flex flex-col gap-[15px] items-center justify-center mt-[30px] md:w-[100%] sm:w-[100%] w-[auto]">
            <div className="bg-white_A700 flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between p-[16px] rounded-radius15 shadow-bs2 w-[100%]">
              <Text
                className="font-bold sm:ml-[0] ml-[41px] text-gray_900 text-left w-[auto]"
                variant="body7"
              >
                Which of my farms will be boosted?
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
                  alt="plus"
                />
              </Button>
            </div>
            <div className="bg-white_A700 flex flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between p-[16px] rounded-radius15 shadow-bs2 w-[100%]">
              <Text
                className="font-bold ml-[41px] text-gray_900 text-left w-[auto]"
                variant="body7"
              >
                How long does the boost last?
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
                  alt="plus One"
                />
              </Button>
            </div>
            <div className="bg-white_A700 flex flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between p-[16px] rounded-radius15 shadow-bs2 w-[100%]">
              <Text
                className="font-bold ml-[41px] text-gray_900 text-left w-[auto]"
                variant="body7"
              >
                Can I combine several boosts?
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
                  alt="plus Two"
                />
              </Button>
            </div>
            <div className="bg-white_A700 flex flex-col items-center justify-start p-[16px] rounded-radius15 shadow-bs2 w-[100%]">
              <div className="flex flex-col gap-[8px] items-start justify-start mb-[8px] mt-[3px] md:w-[100%] sm:w-[100%] w-[97%]">
                <div className="flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body7"
                  >
                    When will the boost start working?
                  </Text>
                  <Button
                    className="flex h-[35px] items-center justify-center w-[35px]"
                    shape="icbRoundedBorder19"
                    size="mdIcn"
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
                  Invite your friends and get 10% for each referral. There are
                  variety of options  to get referals involved: farms and pools.
                </Text>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between p-[16px] rounded-radius15 shadow-bs2 w-[100%]">
              <Text
                className="font-bold ml-[41px] text-gray_900 text-left w-[auto]"
                variant="body7"
              >
                Is moderation manual?
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
            <div className="bg-white_A700 flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between p-[16px] rounded-radius15 shadow-bs2 w-[100%]">
              <Text
                className="font-bold sm:ml-[0] ml-[41px] text-gray_900 text-left w-[auto]"
                variant="body7"
              >
                What if my submission gets rejected?
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
                  alt="plus Four"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraBoostwithmoretasPage;
