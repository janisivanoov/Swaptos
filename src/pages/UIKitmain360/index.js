import React from "react";

import {
  Text,
  Img,
  PagerIndicator,
  Line,
  Slider,
  Button,
  List,
} from "components";

const UIKitmain360Page = () => {
  function handleNavigate34() {
    window.location.href = "https://codepen.io/andreykrokhin/pen/mGEqja";
  }
  function handleNavigate35() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate36() {
    window.location.href = "https://www.facebook.com/login/";
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-start justify-start mx-[auto] pr-[113px] sm:pr-[20px] md:pr-[40px] py-[113px] w-[100%]">
        <div className="flex flex-col justify-start mb-[59px] mt-[14px] w-[100%]">
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between md:ml-[0] sm:ml-[0] ml-[57px] md:w-[100%] sm:w-[100%] w-[95%]">
            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[50px] sm:gap-[50px] items-center justify-between w-[100%]">
                <div className="flex md:flex-1 sm:flex-1 flex-col gap-[25px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[47px] sm:gap-[47px] items-center justify-between w-[100%]">
                    <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                      <div className="bg-white_A700 flex flex-col items-center justify-end p-[4px] rounded-radius20 shadow-bs2 w-[100%]">
                        <Text
                          className="font-bold mt-[25px] text-center text-gray_900 w-[100%]"
                          variant="body4"
                        >
                          Trade  your crypto
                        </Text>
                        <div className="h-[225px] md:h-[255px] sm:h-[255px] mt-[30px] relative sm:w-[100%] w-[65%]">
                          <Img
                            src="images/img_materialsymbol.png"
                            className="h-[135px] m-[auto] object-cover w-[135px]"
                            alt="materialsymbol"
                          />
                          <Img
                            src="images/img_illustration_gray_500.svg"
                            className="absolute h-[225px] inset-[0] justify-center m-[auto] w-[auto]"
                            alt="illustration"
                          />
                        </div>
                        <PagerIndicator
                          className="flex gap-[5px] h-[12px] items-start justify-start mb-[16px] mt-[20px] w-[46px]"
                          count={3}
                          activeCss="inline-block cursor-pointer rounded-radius50 h-[12px] bg-gray_900 w-[12px]"
                          activeIndex={1}
                          inactiveCss="inline-block cursor-pointer rounded-radius50 h-[12px] bg-gray_903 w-[12px]"
                          selectedWrapperCss="inline-block"
                          unselectedWrapperCss="inline-block"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col gap-[7px] items-center justify-center p-[17px] rounded-radius20 shadow-bs2 md:w-[100%] sm:w-[100%] w-[auto]">
                      <div className="md:h-[259px] sm:h-[259px] h-[335px] mt-[18px] relative w-[97%]">
                        <Img
                          src="images/img_vector_165x249.png"
                          className="absolute bottom-[7%] h-[165px] inset-x-[0] mx-[auto] object-cover w-[auto]"
                          alt="Vector"
                        />
                        <Img
                          src="images/img_vector_188x249.png"
                          className="absolute bottom-[0] h-[188px] inset-x-[0] mx-[auto] object-cover w-[auto]"
                          alt="Vector One"
                        />
                        <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                          <div className="md:h-[241px] sm:h-[241px] h-[335px] relative w-[100%]">
                            <div className="md:h-[241px] sm:h-[241px] h-[335px] m-[auto] w-[100%]">
                              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-[auto] w-[94%]">
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <Line className="bg-gray_500_b2 h-[241px] w-[4px]" />
                                  <Line className="bg-gray_500_b2 h-[241px] w-[4px]" />
                                </div>
                              </div>
                              <Text
                                className="absolute font-bold inset-x-[0] mx-[auto] text-gray_900 text-left top-[0] w-[max-content]"
                                variant="body4"
                              >
                                <span className="sm:text-[36px] md:text-[38px] text-gray_900 text-[40px] font-poppins">
                                  Stake & Farm{" "}
                                </span>
                                <span className="sm:text-[21px] md:text-[23px] text-gray_900 text-[25px] font-poppins">
                                  {" "}
                                   to get interest up to{" "}
                                </span>
                                <span className="sm:text-[21px] md:text-[23px] text-purple_A100 text-[25px] font-poppins">
                                  400%
                                </span>
                              </Text>
                            </div>
                            <Img
                              src="images/img_illustration_gray_500.svg"
                              className="absolute bottom-[0] h-[241px] inset-x-[0] mx-[auto] w-[auto]"
                              alt="Group356"
                            />
                          </div>
                        </div>
                      </div>
                      <PagerIndicator
                        className="flex gap-[5px] h-[12px] items-start justify-start mb-[3px] w-[46px]"
                        count={3}
                        activeCss="inline-block cursor-pointer rounded-radius50 h-[12px] bg-gray_900 w-[12px]"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer rounded-radius50 h-[12px] bg-gray_903 w-[12px]"
                        selectedWrapperCss="inline-block"
                        unselectedWrapperCss="inline-block"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      <span className="text-gray_900 text-[16px] font-poppins">
                        A lot of{" "}
                      </span>
                      <span className="text-purple_A100 text-[16px] font-poppins">
                        liquidity
                      </span>
                      <span className="text-gray_900 text-[16px] font-poppins">
                        {" "}
                        for each price range
                      </span>
                    </Text>
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      <span className="text-gray_900 text-[16px] font-poppins">
                        Set{" "}
                      </span>
                      <span className="text-purple_A100 text-[16px] font-poppins">
                        price ranges
                      </span>
                      <span className="text-gray_900 text-[16px] font-poppins">
                        {" "}
                        and choose fees tiers.
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 sm:flex-1 flex-col gap-[25px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="bg-white_A700 md:h-[359px] sm:h-[359px] h-[410px] p-[20px] relative rounded-radius20 shadow-bs2 w-[100%]">
                    <div className="absolute flex h-[359px] md:h-[auto] sm:h-[auto] inset-[0] justify-end m-[auto] w-[71%]">
                      <div className="flex flex-col h-[100%] items-center justify-start mb-[34px] mt-[auto] mx-[auto] w-[auto]">
                        <div className="flex flex-col gap-[17px] items-start justify-start w-[auto]">
                          <div className="bg-gradient8  p-[2px] rounded-radius13 w-[100%] ">
                            <div className="bg-white_A700 border-solid flex flex-col items-center justify-start p-[7px] rounded-radius13">
                              <div className="flex flex-col items-center justify-start mb-[2px] mt-[6px] md:w-[100%] sm:w-[100%] w-[96%]">
                                <div className="flex flex-col items-center justify-start w-[100%]">
                                  <div className="flex flex-row items-center justify-evenly w-[100%]">
                                    <Text
                                      className="text-gray_900 text-left w-[auto]"
                                      variant="body13"
                                    >
                                      0.00%
                                    </Text>
                                    <div className="bg-gradient5  flex flex-col h-[17px] items-center justify-end p-[5px] rounded-radius8 w-[17px]">
                                      <Img
                                        src="images/img_checkmark_white_a700.svg"
                                        className="h-[7px] w-[7px]"
                                        alt="checkmark"
                                      />
                                    </div>
                                  </div>
                                  <Text
                                    className="mt-[3px] text-gray_900 text-left w-[100%]"
                                    variant="body18"
                                  >
                                    Best for stable pairs{" "}
                                  </Text>
                                </div>
                                <div className="bg-indigo_50 flex flex-col items-start justify-start mt-[3px] px-[6.63px] rounded-radius5 w-[auto]">
                                  <Text
                                    className="text-gray_900 text-left w-[auto]"
                                    variant="body18"
                                  >
                                    72% select
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 border border-gray_600_4c border-solid flex flex-col items-start justify-center p-[7px] rounded-radius13 w-[100%]">
                            <Text
                              className="mt-[8px] text-gray_900 text-left w-[auto]"
                              variant="body13"
                            >
                              0.01%
                            </Text>
                            <Text
                              className="mt-[4px] text-gray_900 text-left sm:w-[100%] w-[95%]"
                              variant="body18"
                            >
                              Best for other pairs{" "}
                            </Text>
                            <div className="bg-indigo_50 flex flex-col items-start justify-start my-[2px] px-[6.63px] rounded-radius5 w-[auto]">
                              <Text
                                className="text-gray_900 text-left w-[auto]"
                                variant="body18"
                              >
                                28% select
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_morecapitalfficient.png"
                        className="absolute h-[359px] inset-[0] justify-center m-[auto] object-cover w-[auto]"
                        alt="Morecapitalfficient"
                      />
                    </div>
                    <div className="absolute flex flex-col gap-[265px] md:gap-[40px] sm:gap-[40px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[64%]">
                      <Text
                        className="font-bold text-center text-gray_900 w-[100%]"
                        variant="body4"
                      >
                        Zero fees  for stablecoins
                      </Text>
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
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    <span className="text-gray_900 text-[16px] font-poppins">
                      Set{" "}
                    </span>
                    <span className="text-purple_A100 text-[16px] font-poppins">
                      fee tiers
                    </span>
                    <span className="text-gray_900 text-[16px] font-poppins">
                      {" "}
                      how you want.
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-inter gap-[15px] justify-start md:mt-[0] sm:mt-[0] mt-[8px] md:w-[100%] sm:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-gray_900 text-left w-[auto]"
                variant="body1"
              >
                Burger menu animation there{" "}
              </Text>
              <Text
                className="common-pointer font-bold md:ml-[0] sm:ml-[0] ml-[6px] text-gray_900 text-left w-[auto]"
                variant="body1"
                onClick={handleNavigate34}
              >
                https://codepen.io/andreykrokhin/pen/mGEqja
              </Text>
            </div>
          </div>
          <div className="h-[367px] md:h-[495px] sm:h-[495px] md:ml-[0] sm:ml-[0] ml-[45px] mt-[128px] relative md:w-[100%] sm:w-[100%] w-[99%]">
            <div className="h-[367px] md:h-[auto] sm:h-[auto] m-[auto] w-[100%]">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 2 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                activeSlideCSS="scale-[1.00] absolute"
                ref={sliderRef}
                className="m-[auto] w-[100%]"
                items={[...Array(10)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="border border-deep_purple_A200 border-solid flex flex-col items-center justify-start mx-[10px] px-[20px] rounded-radius5">
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                          <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                            <div className="bg-white_A700 flex flex-col items-center justify-start p-[24px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                              <div className="flex flex-col items-center justify-start mb-[24px] mt-[3px] w-[100%]">
                                <div className="flex flex-row items-end justify-between w-[100%]">
                                  <Text
                                    className="font-bold mt-[5px] text-gray_900 text-left w-[auto]"
                                    variant="body4"
                                  >
                                    Mystery Pool
                                  </Text>
                                  <Img
                                    src="images/img_arrowright_gray_900_30x30.svg"
                                    className="h-[30px] mb-[4px] w-[30px]"
                                    alt="arrowright"
                                  />
                                </div>
                                <Text
                                  className="font-medium mt-[8px] text-gray_900 text-left w-[100%]"
                                  variant="body12"
                                >
                                  <span className="text-gray_900 text-[16px] font-poppins">
                                    Have a chance to{" "}
                                  </span>
                                  <span className="text-purple_A100 text-[16px] font-poppins">
                                    win
                                  </span>
                                  <span className="text-gray_900 text-[16px] font-poppins">
                                    {" "}
                                     a random amount!
                                  </span>
                                </Text>
                                <div className="md:h-[128px] sm:h-[128px] h-[80px] mt-[48px] relative md:w-[100%] sm:w-[100%] w-[85%]">
                                  <div className="absolute bottom-[14%] md:h-[30px] sm:h-[30px] h-[53px] left-[0] w-[51%]">
                                    <div
                                      className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-[auto] p-[6px] rounded-radius12 w-[98%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group188.svg')",
                                      }}
                                    >
                                      <Text
                                        className="rotate-[-2deg] text-left text-white_A700 w-[auto]"
                                        variant="body21"
                                      >
                                        You won 3 DOGE!
                                      </Text>
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-col inset-x-[0] items-end justify-start mx-[auto] p-[7px] rounded-radius13 top-[0] w-[100%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group120.svg')",
                                      }}
                                    >
                                      <Text
                                        className="rotate-[6deg] text-left text-white_A700 w-[auto]"
                                        variant="body21"
                                      >
                                        You won 10 USDT!
                                      </Text>
                                    </div>
                                  </div>
                                  <Img
                                    src="images/img_illustration_teal_400_80x226.png"
                                    className="absolute h-[80px] inset-[0] justify-center m-[auto] object-cover w-[auto]"
                                    alt="ILLUSTRATION One"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-1 sm:flex-1 flex-col gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                          <div className="bg-white_A700 flex flex-col items-center justify-start p-[24px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                            <div className="flex flex-col items-start justify-start my-[2px] w-[100%]">
                              <div className="flex flex-row items-end justify-between w-[100%]">
                                <Text
                                  className="font-bold mt-[5px] text-gray_900 text-left w-[auto]"
                                  variant="body4"
                                >
                                  Free pool
                                </Text>
                                <Img
                                  src="images/img_arrowright_gray_900_30x30.svg"
                                  className="h-[30px] mb-[4px] w-[30px]"
                                  alt="arrowright One"
                                />
                              </div>
                              <Text
                                className="font-medium mt-[5px] text-gray_900 text-left w-[auto]"
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
                              <div className="h-[150px] md:h-[183px] sm:h-[183px] md:ml-[0] sm:ml-[0] ml-[60px] mt-[33px] relative w-[150px]">
                                <div className="flex flex-col gap-[11px] h-[100%] items-center justify-start m-[auto] w-[52%]">
                                  <Text
                                    className="font-bold text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    13:54
                                  </Text>
                                  <div className="bg-gradient5  flex flex-col font-inter items-start justify-start px-[16px] rounded-radius13 w-[auto]">
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
                        <div className="flex md:flex-1 sm:flex-1 flex-col gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                          <div className="bg-white_A700 flex flex-col items-center justify-start p-[12px] rounded-radius20 shadow-bs2 w-[100%]">
                            <div className="flex flex-col gap-[12px] items-center justify-start mb-[28px] mt-[16px] md:w-[100%] sm:w-[100%] w-[99%]">
                              <div className="flex flex-col gap-[8px] items-center justify-start md:w-[100%] sm:w-[100%] w-[93%]">
                                <div className="flex flex-row items-end justify-between w-[100%]">
                                  <Text
                                    className="font-bold mt-[6px] text-gray_900 text-left w-[auto]"
                                    variant="body4"
                                  >
                                    Extra program
                                  </Text>
                                  <Img
                                    src="images/img_arrowright_gray_900_30x30.svg"
                                    className="h-[30px] mb-[4px] w-[30px]"
                                    alt="arrowright Two"
                                  />
                                </div>
                                <Text
                                  className="font-medium text-gray_900 text-left sm:w-[100%] w-[99%]"
                                  variant="body12"
                                >
                                  <span className="text-gray_900 text-[16px] font-poppins">
                                    Perform daily tasks, get{" "}
                                  </span>
                                  <span className="text-purple_A100 text-[16px] font-poppins">
                                    rewards
                                  </span>
                                  <span className="text-gray_900 text-[16px] font-poppins">
                                    {" "}
                                    and increase APR.
                                  </span>
                                </Text>
                              </div>
                              <div className="h-[125px] md:h-[89px] sm:h-[89px] relative w-[100%]">
                                <Text
                                  className="absolute bottom-[0] right-[0] text-gray_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  <span className="text-gray_900 text-[11.3px] font-poppins font-bold">
                                    up to
                                  </span>
                                  <span className="sm:text-[24.25px] md:text-[26.25px] text-gray_900 text-[28.25px] font-poppins font-bold">
                                    {" "}
                                  </span>
                                  <span className="sm:text-[24.25px] md:text-[26.25px] text-purple_A100 text-[28.25px] font-poppins font-bold">
                                    4x APR
                                  </span>
                                </Text>
                                <div className="absolute h-[121px] md:h-[89px] sm:h-[89px] inset-[0] justify-center m-[auto] w-[98%]">
                                  <div className="absolute flex flex-col gap-[31px] h-[max-content] inset-[0] justify-center m-[auto] w-[40%]">
                                    <Img
                                      src="images/img_vector5.png"
                                      className="h-[29px] md:h-[auto] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[61px] object-cover sm:w-[100%] w-[auto]"
                                      alt="VectorFive"
                                    />
                                    <Img
                                      src="images/img_vector4.png"
                                      className="h-[29px] md:h-[auto] sm:h-[auto] mr-[61px] object-cover sm:w-[100%] w-[auto]"
                                      alt="VectorFour"
                                    />
                                  </div>
                                  <div className="absolute bg-gray_900 flex flex-col items-center justify-start p-[11px] right-[0] rounded-radius16 top-[0] w-[34%]">
                                    <div
                                      className="h-[10px] overflow-hidden relative w-[69%]"
                                      name="Group237"
                                    >
                                      <div className="w-full h-full absolute bg-undefined"></div>
                                      <div
                                        className="h-full absolute bg-gradient-to-r from-[#9542ff] to-[#fd5fd0]  rounded-[5px]"
                                        style={{ width: "67%" }}
                                      ></div>
                                    </div>
                                  </div>
                                  <div className="absolute bg-gray_900 flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] p-[6px] rounded-radius16 w-[34%]">
                                    <Button
                                      className="flex h-[21px] items-center justify-center w-[21px]"
                                      shape="icbCircleBorder11"
                                      size="mdIcn"
                                      variant="icbGradientDeeppurpleA202PinkA100"
                                    >
                                      <Img
                                        src="images/img_signal.svg"
                                        className="h-[9px]"
                                        alt="signal One"
                                      />
                                    </Button>
                                  </div>
                                  <div className="absolute bg-gray_900 bottom-[0] flex flex-col items-center justify-start left-[0] p-[6px] rounded-radius16 w-[34%]">
                                    <Button
                                      className="flex h-[21px] items-center justify-center w-[21px]"
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
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <List
                          className="sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[67px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 w-[auto]"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col gap-[20px] items-center justify-start sm:ml-[0] w-[100%]">
                            <div className="bg-white_A700 flex flex-col items-center justify-start pt-[7px] px-[7px] rounded-radius20 shadow-bs2 w-[100%]">
                              <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[76px] items-center justify-start mt-[21px] w-[100%]">
                                <div className="flex flex-col gap-[11px] items-start justify-start md:w-[100%] sm:w-[100%] w-[89%]">
                                  <div className="flex flex-row gap-[28px] items-start justify-between w-[100%]">
                                    <Text
                                      className="font-bold mt-[4px] text-gray_900 text-left w-[auto]"
                                      variant="body4"
                                    >
                                      Referal program
                                    </Text>
                                    <Img
                                      src="images/img_arrowright_gray_900_30x30.svg"
                                      className="h-[30px] mb-[4px] w-[30px]"
                                      alt="arrowright Three"
                                    />
                                  </div>
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    <span className="text-gray_900 text-[16px] font-poppins">
                                      Get{" "}
                                    </span>
                                    <span className="text-purple_A100 text-[16px] font-poppins">
                                      10%
                                    </span>
                                    <span className="text-gray_900 text-[16px] font-poppins">
                                      {" "}
                                      for each of referal.
                                    </span>
                                  </Text>
                                </div>
                                <Img
                                  src="images/img_frame238.png"
                                  className="h-[130px] sm:h-[auto] object-cover md:w-[100%] sm:w-[100%] w-[306px]"
                                  alt="Frame238"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[20px] items-center justify-start sm:ml-[0] w-[100%]">
                            <div className="bg-white_A700 flex flex-col items-center justify-start pt-[28px] rounded-radius20 shadow-bs2 w-[100%]">
                              <div className="flex flex-col gap-[13px] items-center justify-start w-[100%]">
                                <div className="flex flex-col gap-[12px] items-center justify-start md:w-[100%] sm:w-[100%] w-[85%]">
                                  <div className="flex flex-row items-center justify-between w-[100%]">
                                    <Text
                                      className="font-bold text-gray_900 text-left w-[auto]"
                                      variant="body4"
                                    >
                                      Calculate
                                    </Text>
                                    <Img
                                      src="images/img_arrowright_gray_900_30x30.svg"
                                      className="h-[30px] w-[30px]"
                                      alt="arrowright Four"
                                    />
                                  </div>
                                  <Text
                                    className="font-medium text-gray_900 text-left sm:w-[100%] w-[99%]"
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
                                      you can get with our APR and Extra APR
                                      program.
                                    </span>
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_component3.png"
                                    className="h-[164px] sm:h-[auto] object-cover md:w-[100%] sm:w-[100%] w-[auto]"
                                    alt="ComponentThree"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                Indicator={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer rounded-radius50 h-[12px] bg-gray_900 w-[12px] relative" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-radius50 h-[12px] bg-gray_903 w-[12px] relative"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
              <PagerIndicator
                className="absolute bottom-[5%] flex gap-[5px] h-[12px] left-[23%] w-[80px]"
                count={5}
                activeCss="inline-block cursor-pointer rounded-radius50 h-[12px] bg-gray_900 w-[12px] relative"
                activeIndex={sliderState}
                inactiveCss="inline-block cursor-pointer rounded-radius50 h-[12px] bg-gray_903 w-[12px] relative"
                sliderRef={sliderRef}
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
            </div>
            <div className="absolute h-[367px] inset-y-[0] my-[auto] right-[0] w-[84%]"></div>
          </div>
          <div className="flex md:flex-col sm:flex-col flex-row gap-[21px] items-center justify-start mt-[76px] md:w-[100%] sm:w-[100%] w-[31%]">
            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[53%]">
              <div className="md:h-[333px] sm:h-[333px] h-[334px] relative w-[100%]">
                <div className="absolute bg-white_A700 flex flex-col h-[max-content] inset-y-[0] items-center justify-end my-[auto] p-[13px] right-[3%] rounded-radius20 shadow-bs2 w-[85%]">
                  <div className="flex flex-col items-center justify-start mt-[19px] w-[100%]">
                    <div className="h-[150px] md:h-[auto] sm:h-[auto] relative w-[150px]">
                      <div className="flex flex-col gap-[11px] h-[100%] items-center justify-start m-[auto] w-[52%]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          13:54
                        </Text>
                        <div className="bg-gradient5  flex flex-col font-inter items-start justify-start px-[16px] py-[4px] rounded-radius13 w-[auto]">
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
                    <div className="flex flex-row items-start justify-between mt-[20px] md:w-[100%] sm:w-[100%] w-[92%]">
                      <Text
                        className="font-bold text-gray_600 text-left w-[auto]"
                        variant="body12"
                      >
                        Reward token
                      </Text>
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        $SODT
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[294px] mt-[41px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-deep_purple_A202 w-[auto]"
                      shape="RoundedBorder10"
                      size="7xl"
                      variant="FillGray900"
                    >
                      Claim
                    </Button>
                  </div>
                </div>
                <div className="absolute bottom-[24%] flex flex-row inset-x-[0] items-start justify-between mx-[auto] w-[100%]">
                  <Text
                    className="font-bold ml-[70px] text-gray_600 text-left w-[auto]"
                    variant="body12"
                  >
                    Value locked
                  </Text>
                  <Text
                    className="font-bold mr-[36px] my-[2px] text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    $7,635,213
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[45%]">
              <div className="bg-white_A700 flex flex-col items-center justify-end p-[13px] rounded-radius20 shadow-bs2 w-[100%]">
                <div className="md:h-[119px] sm:h-[119px] h-[80px] mt-[39px] relative md:w-[100%] sm:w-[100%] w-[79%]">
                  <div className="absolute bottom-[14%] md:h-[30px] sm:h-[30px] h-[53px] left-[0] w-[51%]">
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-[auto] p-[6px] rounded-radius12 w-[99%]"
                      style={{
                        backgroundImage: "url('images/img_group188.svg')",
                      }}
                    >
                      <Text
                        className="rotate-[-2deg] text-left text-white_A700 w-[auto]"
                        variant="body21"
                      >
                        You won 3 DOGE!
                      </Text>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col inset-x-[0] items-end justify-start mx-[auto] p-[7px] rounded-radius13 top-[0] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group120.svg')",
                      }}
                    >
                      <Text
                        className="rotate-[6deg] text-left text-white_A700 w-[auto]"
                        variant="body21"
                      >
                        You won 10 USDT!
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_illustration_teal_400_80x226.png"
                    className="absolute h-[80px] inset-[0] justify-center m-[auto] object-cover w-[auto]"
                    alt="ILLUSTRATION Three"
                  />
                </div>
                <div className="flex flex-col gap-[21px] items-center justify-start mt-[63px] md:w-[100%] sm:w-[100%] w-[92%]">
                  <div
                    className="h-[13px] overflow-hidden relative w-[100%]"
                    name="Group180"
                  >
                    <div className="w-full h-full absolute bg-gray_903 rounded-[6px]"></div>
                    <div
                      className="h-full absolute bg-gradient-to-r from-[#9542ff] to-[#fd5fd0]  rounded-[6px]"
                      style={{ width: "52%" }}
                    ></div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[97%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Text
                        className="font-bold text-gray_600 text-left w-[auto]"
                        variant="body12"
                      >
                        Pool closed in:
                      </Text>
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        1h 5m 42s.
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[294px] mt-[16px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-deep_purple_A202 w-[auto]"
                  shape="RoundedBorder10"
                  size="7xl"
                  variant="FillGray900"
                >
                  Claim
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col sm:flex-col flex-row gap-[56px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[64px] mt-[116px] md:w-[100%] sm:w-[100%] w-[44%]">
            <div className="bg-gray_900 flex flex-col items-center justify-start p-[50px] sm:px-[20px] md:px-[40px] md:w-[100%] sm:w-[100%] w-[36%]">
              <div className="flex flex-col gap-[50px] items-center justify-start w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="bg-gray_904 flex flex-col gap-[23px] items-center justify-start p-[20px] rounded-radius15 w-[100%]">
                      <div className="flex flex-row gap-[19px] items-center justify-start w-[auto]">
                        <div className="flex flex-row gap-[7px] items-center justify-center w-[auto]">
                          <Button
                            className="flex h-[40px] items-center justify-center w-[40px]"
                            shape="icbRoundedBorder19"
                            size="mdIcn"
                            variant="icbFillLightblue4007e"
                          >
                            <Img
                              src="images/img_info.svg"
                              className=""
                              alt="info"
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
                          variant="GradientDeeppurpleA202PinkA100"
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
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <div className="flex flex-col gap-[30px] items-center justify-center w-[auto]">
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-gray_903 text-left w-[auto]"
                        variant="body14"
                      >
                        Sitemap
                      </Text>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-[99px]">
                        <Text
                          className="font-normal not-italic text-gray_903 text-left w-[auto]"
                          variant="body17"
                        >
                          Main
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_903 text-left w-[auto]"
                          variant="body17"
                        >
                          Trade
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_903 text-left w-[auto]"
                          variant="body17"
                        >
                          Earn
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_903 text-left w-[auto]"
                          variant="body17"
                        >
                          Extra APR
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_903 text-left w-[auto]"
                          variant="body17"
                        >
                          Referal program
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-gray_903 text-left w-[auto]"
                        variant="body14"
                      >
                        Products
                      </Text>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_903 text-left w-[auto]"
                          variant="body17"
                        >
                          Free pool
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_903 text-left w-[auto]"
                          variant="body17"
                        >
                          Mystery pool
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_903 text-left w-[auto]"
                          variant="body17"
                        >
                          Pools
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_903 text-left w-[auto]"
                          variant="body17"
                        >
                          Farm
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_903 text-left w-[auto]"
                          variant="body17"
                        >
                          Extra APR
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-gray_903 text-left w-[auto]"
                        variant="body14"
                      >
                        About us
                      </Text>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_903 text-left w-[auto]"
                          variant="body17"
                        >
                          Blog
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_903 text-left w-[auto]"
                          variant="body17"
                        >
                          Docs
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_903 text-left w-[auto]"
                          variant="body17"
                        >
                          White Paper{" "}
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_903 text-left w-[auto]"
                          variant="body17"
                        >
                          Github
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[22px] items-end justify-start w-[auto]">
                    <Text
                      className="font-bold text-gray_903 text-left w-[auto]"
                      variant="body14"
                    >
                      Follow us:
                    </Text>
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
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
                        onClick={handleNavigate35}
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
                        onClick={handleNavigate36}
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
            <div className="flex flex-col font-inter md:gap-[40px] sm:gap-[40px] gap-[67px] justify-start md:w-[100%] sm:w-[100%] w-[60%]">
              <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[95%]">
                <div className="border border-deep_purple_A200 border-solid flex flex-col gap-[18px] items-center justify-start sm:mt-[0] mt-[13px] p-[20px] rounded-radius5 sm:w-[100%] w-[33%]">
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[147px] text-[16px] text-center text-white_A700 w-[auto]"
                      shape="RoundedBorder23"
                      size="6xl"
                      variant="GradientBlueA200DeeppurpleA700"
                    >
                      Launch app
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[147px] text-[16px] text-center text-white_A700 w-[auto]"
                      shape="RoundedBorder23"
                      size="6xl"
                      variant="OutlineIndigoA2007f"
                    >
                      Launch app
                    </Button>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col font-poppins items-center justify-start p-[15px] sm:w-[100%] w-[63%]"
                  style={{
                    backgroundImage: "url('images/img_mainpageheader.png')",
                  }}
                >
                  <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[97%]">
                    <div className="flex flex-col items-center justify-end p-[12px] rounded-radius7 w-[auto]">
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
                    <Img
                      src="images/img_menu_gray_900.svg"
                      className="h-[32px] w-[32px]"
                      alt="menu"
                    />
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[11px] items-start justify-between mr-[24px] md:w-[100%] sm:w-[100%] w-[97%]">
                <div className="border border-deep_purple_A200 border-solid flex flex-col font-poppins items-center justify-start p-[20px] rounded-radius5 sm:w-[100%] w-[auto]">
                  <div className="flex flex-col items-start justify-end pr-[14px] py-[14px] w-[100%]">
                    <div className="flex flex-col items-center justify-end mt-[3px] p-[12px] rounded-radius7 md:w-[100%] sm:w-[100%] w-[37%]">
                      <div className="flex flex-row gap-[12px] items-end justify-start rotate-[90deg] md:w-[100%] sm:w-[100%] w-[94%]">
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
                  </div>
                  <List
                    className="flex-col gap-[1px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col items-start justify-end my-[0] pr-[14px] py-[14px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_mainpageheader.png')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-start mr-[auto] mt-[3px] md:w-[100%] sm:w-[100%] w-[98%]">
                        <div className="flex flex-col font-poppins items-center justify-end p-[12px] rounded-radius7 w-[37%]">
                          <div className="flex flex-row gap-[12px] items-end justify-start rotate-[90deg] md:w-[100%] sm:w-[100%] w-[94%]">
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
                        <Img
                          src="images/img_menu_gray_900.svg"
                          className="h-[32px] w-[32px]"
                          alt="menu One"
                        />
                        <Button
                          className="cursor-pointer font-bold font-inter leading-[normal] min-w-[117px] ml-[64px] text-[12px] text-center text-white_A700 w-[auto]"
                          shape="RoundedBorder13"
                          size="md"
                          variant="GradientPurpleA100IndigoA200"
                        >
                          Connect wallet
                        </Button>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col items-start justify-end my-[0] pr-[14px] py-[14px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_mainpageheader.png')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-start mr-[auto] mt-[3px] w-[100%]">
                        <div className="flex flex-col font-poppins items-center justify-end p-[12px] rounded-radius7 w-[37%]">
                          <div className="flex flex-row gap-[12px] items-end justify-start rotate-[90deg] md:w-[100%] sm:w-[100%] w-[94%]">
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
                        <Img
                          src="images/img_menu_gray_900.svg"
                          className="h-[32px] w-[32px]"
                          alt="menu Two"
                        />
                        <Button
                          className="flex items-center justify-center min-w-[142px] ml-[44px] text-center w-[auto]"
                          leftIcon={
                            <Img
                              src="images/img_volume.svg"
                              className="mr-[10px] text-center"
                              alt="volume"
                            />
                          }
                          shape="RoundedBorder13"
                          size="lg"
                          variant="GradientPurpleA100IndigoA200"
                        >
                          <div className="bg-transparent cursor-pointer font-bold font-inter leading-[normal] text-[12px] text-left text-white_A700">
                            0x9547...3258
                          </div>
                        </Button>
                      </div>
                    </div>
                  </List>
                </div>
                <Button
                  className="flex items-center justify-center mt-[77px] sm:mt-[0] text-center"
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
                  <div className="bg-transparent cursor-pointer font-bold font-inter leading-[normal] text-[16px] text-left text-white_A700">
                    0x9547...3258
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UIKitmain360Page;
