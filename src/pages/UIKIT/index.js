import React from "react";

import { Img, Text, Button, Line, Input } from "components";

const UIKITPage = () => {
  return (
    <>
      <div className="bg-white_A700 font-poppins h-[2251px] mx-[auto] p-[34px] sm:px-[20px] relative w-[100%]">
        <div className="absolute flex flex-col items-start justify-start md:px-[20px] right-[13%] top-[3%] w-[23%]">
          <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between w-[100%]">
            <div className="flex sm:flex-1 flex-col gap-[30px] items-start justify-start mb-[8px] sm:w-[100%] w-[auto]">
              <Img
                src="images/img_grid.svg"
                className="h-[20px] w-[95px]"
                alt="grid"
              />
              <Img
                src="images/img_checkmark.svg"
                className="h-[12px] w-[12px]"
                alt="checkmark"
              />
            </div>
            <Text
              className="sm:mt-[0] mt-[10px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Main font: Poppins
            </Text>
          </div>
          <div className="flex flex-row sm:gap-[40px] items-start justify-between mt-[22px] md:w-[100%] sm:w-[100%] w-[97%]">
            <Img
              src="images/img_cut.svg"
              className="h-[14px] w-[14px]"
              alt="cut"
            />
            <Text
              className="mt-[2px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Accent font: Inter
            </Text>
          </div>
          <Img
            src="images/img_menu.svg"
            className="h-[40px] w-[40px]"
            alt="menu"
          />
        </div>
        <div className="absolute flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-end justify-between md:px-[20px] right-[14%] top-[19%] w-[21%]">
          <div className="flex flex-col gap-[29px] items-start justify-start mb-[3px] md:mt-[0] sm:mt-[0] mt-[66px] md:w-[100%] sm:w-[100%] w-[auto]">
            <div className="bg-white_A700 flex flex-row items-start justify-between p-[24px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
              <div className="flex flex-col items-start justify-start mb-[99px] py-[9px] w-[auto]">
                <Text
                  className="font-bold text-black_900 text-left w-[auto]"
                  variant="body4"
                >
                  Mystery Pool
                </Text>
                <Text
                  className="font-medium mb-[65px] mt-[3px] text-black_900 text-left w-[auto]"
                  variant="body12"
                >
                  Have a chance to win tokens!
                </Text>
              </div>
              <Img
                src="images/img_arrowright.svg"
                className="h-[30px] mr-[11px] mt-[4px] w-[30px]"
                alt="arrowright"
              />
            </div>
            <div className="bg-white_A700 flex flex-col h-[180px] items-center justify-start p-[12px] rounded-radius20 shadow-bs2 w-[180px]">
              <div className="bg-black_900 flex flex-col h-[60px] items-center justify-start rounded-radius50 w-[60px]">
                <Img
                  src="images/img_close.svg"
                  className="h-[60px] rounded-tl-[50%] rounded-tr-[50%] w-[60px]"
                  alt="close"
                />
              </div>
              <div className="flex flex-row gap-[7px] items-center justify-center mt-[7px] w-[auto]">
                <Text
                  className="font-medium font-poppins text-black_900 text-left w-[auto]"
                  variant="body9"
                >
                  $351.31
                </Text>
                <Button
                  className="cursor-pointer font-bold font-inter leading-[normal] min-w-[60px] text-[16px] text-center text-green_A700 w-[auto]"
                  shape="RoundedBorder13"
                  size="sm"
                  variant="FillGreen50"
                >
                  +27%
                </Button>
              </div>
              <div className="flex flex-col gap-[11px] items-center justify-start mb-[6px] mt-[11px] md:w-[100%] sm:w-[100%] w-[26%]">
                <Text
                  className="font-bold font-poppins text-black_900 text-left w-[auto]"
                  variant="body9"
                >
                  BNB
                </Text>
                <Text
                  className="font-inter font-medium text-black_900 text-left w-[auto]"
                  variant="body17"
                >
                  (BNB)
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
            <Text
              className="text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Main colors:
            </Text>
            <Img
              src="images/img_frame243.svg"
              className="h-[64px] md:ml-[0] sm:ml-[0] ml-[7px] mt-[27px] w-[286px]"
              alt="Frame243"
            />
            <div className="flex flex-row items-start justify-start mt-[12px] md:w-[100%] sm:w-[100%] w-[92%]">
              <Text
                className="font-bold text-black_900 text-left w-[auto]"
                variant="body7"
              >
                White
              </Text>
              <Text
                className="font-bold ml-[22px] mt-[4px] text-black_900 text-left w-[auto]"
                variant="body7"
              >
                Black
              </Text>
              <Text
                className="font-bold ml-[22px] mt-[7px] text-black_900 text-left w-[auto]"
                variant="body7"
              >
                Gray
              </Text>
              <Text
                className="font-bold ml-[23px] mt-[2px] text-black_900 text-left w-[auto]"
                variant="body7"
              >
                Brand  blue
              </Text>
            </div>
            <Text
              className="mt-[4px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Main gradients:
            </Text>
            <div className="bg-gradient8  h-[74px] mt-[32px] rounded-radius10 w-[91%]"></div>
            <Text
              className="font-bold mt-[14px] text-black_900 text-left w-[auto]"
              variant="body7"
            >
              4 colours
            </Text>
            <div className="bg-gradient4  h-[74px] mt-[42px] rounded-radius10 w-[91%]"></div>
            <Text
              className="font-bold mt-[14px] text-black_900 text-left w-[auto]"
              variant="body7"
            >
              3 colours
            </Text>
          </div>
        </div>
        <div className="absolute bottom-[6%] flex flex-col items-start justify-start md:px-[20px] right-[20%] w-[15%]">
          <div className="bg-white_A700 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[35px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
            <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
              <Button
                className="flex h-[39px] items-center justify-center w-[39px]"
                shape="icbRoundedBorder19"
                size="lgIcn"
                variant="icbFillPink4006c"
              >
                <Img
                  src="images/img_menu_pink_400.svg"
                  className=""
                  alt="menu One"
                />
              </Button>
              <Text
                className="font-bold text-gray_900 text-left w-[auto]"
                variant="body12"
              >
                BEOM
              </Text>
            </div>
            <div className="h-[37px] md:h-[auto] sm:h-[auto] sm:ml-[0] ml-[46px] relative sm:w-[100%] w-[34%]">
              <div className="absolute flex flex-row gap-[30px] h-[max-content] inset-[0] items-center justify-between m-[auto] w-[auto]">
                <div className="flex flex-col gap-[-5px] items-start justify-start w-[auto]">
                  <Text
                    className="font-bold text-gray_600 text-left w-[auto]"
                    variant="body17"
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
                <div className="flex flex-col gap-[-5px] items-start justify-start w-[auto]">
                  <Text
                    className="bg-clip-text bg-gradient8  font-bold text-left text-transparent w-[auto]"
                    variant="body17"
                  >
                    Boosted APR%
                  </Text>
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    1300%
                  </Text>
                </div>
              </div>
              <Line className="absolute bg-black_900 bottom-[22%] h-[2px] left-[0] w-[28%]" />
            </div>
            <Img
              src="images/img_menu.svg"
              className="h-[40px] sm:ml-[0] ml-[46px] w-[40px]"
              alt="menu Two"
            />
            <Button
              className="cursor-pointer font-bold leading-[normal] min-w-[92px] sm:ml-[0] ml-[20px] text-[16px] text-center text-purple_A100 w-[auto]"
              shape="RoundedBorder10"
              size="6xl"
              variant="FillGray900"
            >
              Farm
            </Button>
          </div>
          <div className="bg-white_A700 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[30px] p-[26px] sm:px-[20px] rounded-radius20 w-[100%]">
            <div className="flex flex-row gap-[10px] items-center justify-start sm:ml-[0] ml-[12px] w-[auto]">
              <div className="flex h-[26px] md:h-[auto] sm:h-[auto] relative w-[47px]">
                <Img
                  src="images/img_bluetooth.svg"
                  className="h-[26px] my-[auto] w-[26px]"
                  alt="bluetooth"
                />
                <Img
                  src="images/img_floatingicon.svg"
                  className="h-[26px] ml-[-5px] my-[auto] w-[26px] z-[1]"
                  alt="floatingicon"
                />
              </div>
              <Text
                className="font-bold text-gray_900 text-left w-[auto]"
                variant="body12"
              >
                BTC - USDT
              </Text>
            </div>
            <div className="flex flex-row gap-[20px] items-start justify-start sm:ml-[0] ml-[28px] w-[auto]">
              <div className="md:h-[23px] sm:h-[23px] h-[37px] relative w-[37px]">
                <div className="absolute flex flex-col gap-[-5px] h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[0] w-[auto]">
                  <Text
                    className="font-bold text-gray_600 text-left w-[auto]"
                    variant="body17"
                  >
                    APR%
                  </Text>
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    19%
                  </Text>
                </div>
                <Line className="absolute bg-black_900 bottom-[22%] h-[2px] left-[0] w-[95%]" />
              </div>
              <div className="flex flex-col gap-[-5px] items-start justify-start w-[auto]">
                <Text
                  className="bg-clip-text bg-gradient8  font-bold text-left text-transparent w-[auto]"
                  variant="body17"
                >
                  Boosted APR%
                </Text>
                <Text
                  className="font-bold text-gray_900 text-left w-[auto]"
                  variant="body12"
                >
                  87%
                </Text>
              </div>
            </div>
            <Img
              src="images/img_menu.svg"
              className="h-[40px] sm:ml-[0] ml-[27px] w-[40px]"
              alt="menu Three"
            />
            <div className="flex sm:flex-1 flex-col items-center justify-start sm:ml-[0] ml-[20px] sm:w-[100%] w-[18%]">
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[92px] text-[16px] text-center text-purple_A100 w-[auto]"
                shape="RoundedBorder10"
                size="6xl"
                variant="FillGray900"
              >
                Farm
              </Button>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-col items-center justify-end mt-[30px] p-[40px] sm:px-[20px] rounded-radius20 md:w-[100%] sm:w-[100%] w-[80%]">
            <div className="flex flex-row items-start justify-between mt-[250px] pt-[4px] w-[100%]">
              <Text
                className="font-bold text-gray_400 text-left w-[auto]"
                variant="body7"
              >
                Reward token
              </Text>
              <Text
                className="font-bold text-gray_900 text-left w-[auto]"
                variant="body7"
              >
                $SODT
              </Text>
            </div>
            <div className="flex flex-row items-start justify-between mt-[10px] pt-[4px] w-[100%]">
              <Text
                className="font-bold text-gray_400 text-left w-[auto]"
                variant="body7"
              >
                Value locked
              </Text>
              <Text
                className="font-bold text-gray_900 text-left w-[auto]"
                variant="body7"
              >
                $7,635,213
              </Text>
            </div>
            <Button
              className="cursor-pointer font-bold leading-[normal] min-w-[380px] mt-[19px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-purple_A100 w-[auto]"
              shape="RoundedBorder10"
              size="8xl"
              variant="FillGray900"
            >
              Claim
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start mt-[71px] md:w-[100%] sm:w-[100%] w-[45%]">
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
                      <Img src="images/img_fire.svg" className="" alt="fire" />
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
                    size="6xl"
                    variant="GradientIndigo500Purple500"
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
        </div>
        <div className="absolute flex flex-col items-start justify-start md:px-[20px] right-[2%] top-[21%] w-[14%]">
          <Text
            className="md:ml-[0] sm:ml-[0] ml-[3px] text-black_900 text-left w-[100%]"
            as="h5"
            variant="h5"
          >
            Градиенты и цвета добавлены в стили
          </Text>
          <div className="flex sm:flex-col flex-row gap-[52px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[17px] mt-[48px] md:w-[100%] sm:w-[100%] w-[78%]">
            <Img
              src="images/img_vector_deep_purple_a201.svg"
              className="h-[123px] sm:mt-[0] mt-[51px] w-[auto]"
              alt="Vector"
            />
            <Img
              src="images/img_vector_purple_a100.svg"
              className="h-[182px] w-[auto]"
              alt="Vector One"
            />
          </div>
          <div className="flex flex-row items-center justify-between md:ml-[0] sm:ml-[0] ml-[17px] mt-[5px] md:w-[100%] sm:w-[100%] w-[61%]">
            <Text
              className="font-bold text-black_900 text-left w-[auto]"
              variant="body7"
            >
              Violet
            </Text>
            <Text
              className="font-bold text-black_900 text-left w-[auto]"
              variant="body7"
            >
              Pink
            </Text>
          </div>
          <div className="flex flex-row gap-[86px] items-end justify-start mt-[49px] md:w-[100%] sm:w-[100%] w-[74%]">
            <Img
              src="images/img_vector_yellow_a200.svg"
              className="h-[184px] w-[auto]"
              alt="Vector Two"
            />
            <Img
              src="images/img_vector_orange_700.svg"
              className="h-[144px] mb-[4px] mt-[36px] w-[auto]"
              alt="Vector Three"
            />
          </div>
        </div>
        <div className="absolute bottom-[20%] flex flex-col justify-start md:px-[20px] right-[5%] w-[15%]">
          <div className="flex flex-row items-start justify-between ml-[auto] md:w-[100%] sm:w-[100%] w-[61%]">
            <Text
              className="font-bold text-black_900 text-left w-[auto]"
              variant="body7"
            >
              Yellow
            </Text>
            <Text
              className="font-bold mt-[2px] text-black_900 text-left w-[auto]"
              variant="body7"
            >
              Orange
            </Text>
          </div>
          <div className="bg-bluegray_100 flex flex-col h-[140px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[138px] mr-[305px] mt-[117px] p-[40px] sm:px-[20px] w-[140px]">
            <Button
              className="flex h-[60px] items-center justify-center rounded-radius50 w-[60px]"
              size="lgIcn"
              variant="icbGradientBlueA200DeeppurpleA700"
            >
              <Img src="images/img_refresh.svg" className="" alt="refresh" />
            </Button>
          </div>
          <div className="bg-white_A701 flex flex-col items-center justify-start mr-[78px] mt-[162px] pl-[14px] py-[14px] md:w-[100%] sm:w-[100%] w-[88%]">
            <Text
              className="font-medium mb-[30px] mt-[23px] text-black_900 text-left"
              variant="body12"
            >
              1. При заполнении текстового содержания сайта слово APR изменять
              на APY
              <br />
              2. Тикер токена: SWP, там где написано XXX тоже меняем на SWP.
              Иконку для токена добавил в UI Kit для главной страницы.
              <br />
              3. Все упоминания LP убрать (из карточек убрал сам) 4. Вместо
              swaptos использовать swapos
            </Text>
          </div>
        </div>
        <div className="absolute bg-gray_100 md:h-[1318px] sm:h-[1318px] h-[1785px] left-[3%] pl-[102px] pt-[102px] md:px-[20px] sm:px-[20px] top-[8%] md:w-[100%] sm:w-[100%] w-[57%]">
          <div className="absolute flex flex-col gap-[10px] items-start justify-start left-[6%] top-[6%] w-[41%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[10px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Button
                  className="cursor-pointer font-bold font-poppins leading-[normal] min-w-[380px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-purple_A100 w-[auto]"
                  shape="RoundedBorder10"
                  size="8xl"
                  variant="FillGray900"
                >
                  Claim
                </Button>
                <Button
                  className="cursor-pointer font-bold font-poppins leading-[normal] min-w-[92px] text-[16px] text-center text-purple_A100 w-[auto]"
                  shape="RoundedBorder10"
                  size="6xl"
                  variant="FillGray900"
                >
                  Farm
                </Button>
                <div className="font-inter h-[47px] md:h-[auto] sm:h-[auto] relative md:w-[100%] sm:w-[100%] w-[54%]">
                  <div className="bg-gradient2  flex flex-col h-[100%] items-center justify-center my-[auto] sm:px-[20px] px-[28px] py-[14px] rounded-radius23 w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body12"
                    >
                      Connect wallet
                    </Text>
                  </div>
                  <Button
                    className="absolute cursor-pointer font-bold h-[max-content] inset-[0] leading-[normal] m-[auto] text-[16px] text-center text-white_A700 w-[203px]"
                    shape="RoundedBorder23"
                    size="6xl"
                    variant="GradientBlueA200DeeppurpleA700"
                  >
                    Generate link
                  </Button>
                </div>
                <Button
                  className="cursor-pointer font-bold font-inter leading-[normal] text-[16px] text-center text-white_A700 w-[175px]"
                  shape="RoundedBorder23"
                  size="6xl"
                  variant="GradientBlueA200DeeppurpleA700"
                >
                  Launch app
                </Button>
              </div>
              <div className="h-[224px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                <Text
                  className="font-medium mt-[88px] text-left text-white_A700 w-[auto]"
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
            </div>
            <div className="flex flex-row font-inter sm:gap-[40px] items-end justify-between md:w-[100%] sm:w-[100%] w-[75%]">
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[174px] text-[16px] text-center text-white_A700 w-[auto]"
                shape="RoundedBorder23"
                size="6xl"
                variant="GradientBlueA200DeeppurpleA700"
              >
                Collect fees
              </Button>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[115px] mt-[10px] text-[12px] text-center text-white_A700 w-[auto]"
                shape="RoundedBorder10"
                size="4xl"
                variant="GradientBlueA200DeeppurpleA700"
              >
                Buy SWP
              </Button>
            </div>
          </div>
          <div className="absolute bottom-[10%] flex flex-col font-inter items-start justify-start left-[6%] w-[21%]">
            <div className="flex flex-col gap-[10px] items-start justify-start sm:w-[100%] w-[auto]">
              <Button
                className="flex items-center justify-center min-w-[198px] text-center w-[auto]"
                leftIcon={
                  <Img
                    src="images/img_plus.svg"
                    className="mr-[10px] text-center"
                    alt="plus"
                  />
                }
                shape="RoundedBorder13"
                size="2xl"
                variant="GradientBlueA200DeeppurpleA700"
              >
                <div className="bg-transparent cursor-pointer font-bold font-inter leading-[normal] text-[16px] text-left text-white_A700">
                  Add new position{" "}
                </div>
              </Button>
              <Button
                className="cursor-pointer font-bold font-inter leading-[normal] text-[16px] text-center text-white_A700 w-[198px]"
                shape="RoundedBorder13"
                size="4xl"
                variant="GradientBlueA200DeeppurpleA700"
              >
                Remove liquidity
              </Button>
              <Text
                className="bg-gray_500_33 font-medium font-poppins justify-center px-[14px] py-[3px] rounded-radius12 text-gray_600 text-left w-[132px]"
                variant="body17"
              >
                Add liquidity
              </Text>
              <Button
                className="cursor-pointer font-medium font-poppins leading-[normal] text-[12px] text-center text-white_A700 w-[71px]"
                shape="RoundedBorder10"
                size="sm"
                variant="GradientBlueA200DeeppurpleA700"
              >
                Claim
              </Button>
              <Button
                className="cursor-pointer font-inter font-medium leading-[normal] min-w-[80px] text-[17.27px] text-center text-white_A700 w-[auto]"
                shape="RoundedBorder13"
                size="md"
                variant="GradientDeeppurple400Purple300"
              >
                Swap
              </Button>
              <Button
                className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[106px] text-[17px] text-center text-white_A700 w-[auto]"
                shape="RoundedBorder13"
                size="4xl"
                variant="GradientDeeppurple400Purple300"
              >
                Liquidity
              </Button>
              <Button
                className="cursor-pointer font-medium font-poppins leading-[normal] text-[16px] text-center text-white_A700 w-[120px]"
                shape="RoundedBorder10"
                size="4xl"
                variant="GradientDeeppurple400Purple300"
              >
                Start
              </Button>
              <Button
                className="cursor-pointer font-bold font-poppins leading-[normal] text-[16px] text-center text-white_A700 w-[450px]"
                shape="RoundedBorder13"
                size="9xl"
                variant="GradientDeeppurple400Purple300"
              >
                Preview
              </Button>
              <div className="flex flex-col font-poppins items-center justify-start w-[100%]">
                <Button
                  className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[450px]"
                  shape="RoundedBorder13"
                  size="9xl"
                  variant="GradientDeeppurple400Purple300"
                >
                  Connect wallet
                </Button>
              </div>
              <Button
                className="cursor-pointer font-bold font-poppins leading-[normal] text-[16px] text-center text-white_A700 w-[389px]"
                shape="RoundedBorder13"
                size="9xl"
                variant="GradientDeeppurple400Purple300"
              >
                Confirm
              </Button>
              <Button
                className="cursor-pointer font-bold font-poppins leading-[normal] text-[16px] text-center text-white_A700 w-[219px]"
                shape="RoundedBorder13"
                size="9xl"
                variant="GradientDeeppurple400Purple300"
              >
                Approve
              </Button>
            </div>
            <div className="flex flex-col gap-[10px] items-start justify-start mt-[66px] w-[auto]">
              <Button
                className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[175px]"
                shape="RoundedBorder23"
                size="6xl"
                variant="GradientDeeppurple400Purple300"
              >
                Connect wallet
              </Button>
              <Button
                className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[175px]"
                shape="RoundedBorder23"
                size="6xl"
                variant="GradientDeeppurple400Purple300"
              >
                Change network
              </Button>
              <Button
                className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[175px]"
                shape="RoundedBorder23"
                size="6xl"
                variant="GradientDeeppurple400Purple300"
              >
                Add new position
              </Button>
            </div>
            <Button
              className="cursor-pointer font-bold leading-[normal] min-w-[140px] mt-[28px] text-[16px] text-center text-white_A700 w-[auto]"
              shape="RoundedBorder23"
              size="6xl"
              variant="GradientBlueA200DeeppurpleA700"
            >
              Harvest all
            </Button>
            <div className="flex flex-col font-poppins gap-[10px] items-start justify-start mt-[130px] w-[auto]">
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[134px] text-[16px] text-center text-white_A702 w-[auto]"
                shape="CircleBorder19"
                size="4xl"
                variant="FillBlueA201"
              >
                Import
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[193px] text-[16px] text-center text-white_A702 w-[auto]"
                shape="CircleBorder19"
                size="4xl"
                variant="FillBlueA201"
              >
                Confirm swap
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] text-[12px] text-center text-white_A702 w-[80px]"
                shape="RoundedBorder13"
                size="md"
                variant="FillBlueA201"
              >
                Import
              </Button>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col font-inter gap-[169px] md:gap-[40px] sm:gap-[40px] justify-start right-[0] w-[55%]">
            <div className="bg-white_A701 flex flex-col items-center justify-end md:ml-[0] sm:ml-[0] ml-[172px] mr-[566px] p-[32px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[39%]">
              <div className="flex flex-col gap-[18px] items-center justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[91%]">
                <div className="flex flex-row gap-[14px] items-center justify-between w-[100%]">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[175px] text-[16px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder23"
                    size="6xl"
                    variant="GradientBlueA200DeeppurpleA700"
                  >
                    Connect wallet
                  </Button>
                  <Button
                    className="flex items-center justify-center text-center"
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
                    <div className="bg-transparent cursor-pointer font-bold leading-[normal] text-[16px] text-left text-white_A700">
                      0x9547...3258
                    </div>
                  </Button>
                </div>
                <div className="flex flex-row gap-[14px] items-center justify-between w-[100%]">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[175px] text-[16px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder23"
                    size="6xl"
                    variant="OutlineIndigoA2007f"
                  >
                    Connect wallet
                  </Button>
                  <Button
                    className="flex items-center justify-center text-center"
                    leftIcon={
                      <Img
                        src="images/img_volume.svg"
                        className="mr-[10px] text-center"
                        alt="volume"
                      />
                    }
                    shape="RoundedBorder23"
                    size="5xl"
                    variant="OutlineIndigoA2007f"
                  >
                    <div className="bg-transparent cursor-pointer font-bold leading-[normal] text-[16px] text-left text-white_A700">
                      0x9547...3258
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row font-poppins gap-[37px] items-start justify-between w-[100%]">
              <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col gap-[17px] items-center justify-start mb-[76px] p-[24px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
                <Button
                  className="flex items-center justify-center min-w-[120px] text-center w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_computer.svg"
                      className="mr-[5px] text-center"
                      alt="computer"
                    />
                  }
                  shape="CircleBorder19"
                  size="2xl"
                  variant="GradientBlueA200DeeppurpleA700"
                >
                  <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[16px] text-left text-white_A700">
                    Copy
                  </div>
                </Button>
                <div className="flex flex-col gap-[28px] items-start justify-start mb-[31px] md:w-[100%] sm:w-[100%] w-[76%]">
                  <div className="border border-deep_purple_A200 border-solid flex flex-col gap-[13px] items-center justify-start p-[20px] rounded-radius5 w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Button
                        className="flex items-center justify-center min-w-[120px] text-center w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_computer.svg"
                            className="mr-[5px] text-center"
                            alt="computer"
                          />
                        }
                        shape="CircleBorder19"
                        size="2xl"
                        variant="GradientBlueA200DeeppurpleA700"
                      >
                        <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[16px] text-left text-white_A700">
                          Copy
                        </div>
                      </Button>
                    </div>
                    <div className="bg-gradient2  p-[1px] rounded-radius18 w-[100%] ">
                      <div className="bg-white_A700 border-solid flex flex-col h-[36px] md:h-[auto] sm:h-[auto] items-center justify-center sm:px-[20px] px-[24px] py-[6px] rounded-radius18">
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="bg-clip-text bg-gradient2  font-medium text-left text-transparent w-[auto]"
                            variant="body12"
                          >
                            Copied
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start rounded-radius18 shadow-bs3 w-[auto]">
                      <div className="bg-gradient2  flex flex-col items-center justify-center sm:px-[20px] px-[24px] py-[6px] rounded-radius18 w-[auto]">
                        <div className="flex flex-row gap-[5px] items-start justify-start w-[auto]">
                          <Img
                            src="images/img_computer.svg"
                            className="h-[24px] w-[24px]"
                            alt="computer"
                          />
                          <Text
                            className="font-medium text-left text-white_A700 w-[auto]"
                            variant="body12"
                          >
                            Copy
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="border border-gray_900 border-solid font-medium px-[12px] py-[3px] rounded-radius13 text-gray_50 text-left w-[auto]"
                    variant="body14"
                  >
                    <span className="text-purple_A100 text-[14px] font-poppins">
                      7.5%
                    </span>
                    <span className="text-gray_900 text-[14px] font-poppins">
                      {" "}
                      swaps
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-indigo_50_99 flex md:flex-1 sm:flex-1 flex-col items-end justify-center md:mt-[0] sm:mt-[0] mt-[2px] p-[12px] md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex md:flex-col sm:flex-col flex-row gap-[26px] items-center justify-end my-[50px] md:w-[100%] sm:w-[100%] w-[96%]">
                  <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[47%]">
                    <div className="bg-blue_A201 flex flex-col items-start justify-center sm:px-[20px] px-[40px] py-[8px] rounded-radius20 w-[146px]">
                      <div className="bg-white_A700 h-[24px] rounded-radius50 w-[24px]"></div>
                    </div>
                    <div className="bg-gradient1  flex flex-col h-[70px] md:h-[auto] sm:h-[auto] items-center justify-center mt-[26px] px-[163px] sm:px-[20px] md:px-[40px] py-[25px] rounded-radius15 sm:w-[100%] w-[389px]">
                      <div className="bg-white_A700 h-[30px] rounded-radius50 w-[30px]"></div>
                    </div>
                    <div className="bg-gradient1  flex flex-col h-[50px] md:h-[auto] sm:h-[auto] items-center justify-center mt-[24px] px-[163px] sm:px-[20px] md:px-[40px] py-[25px] rounded-radius15 w-[362px]">
                      <div className="bg-white_A700 h-[30px] rounded-radius50 w-[30px]"></div>
                    </div>
                    <div className="bg-gradient1  flex flex-col h-[70px] md:h-[auto] sm:h-[auto] items-center justify-center md:ml-[0] sm:ml-[0] ml-[3px] mt-[30px] px-[163px] sm:px-[20px] md:px-[40px] py-[25px] rounded-radius15 sm:w-[100%] w-[389px]">
                      <div className="bg-white_A700 h-[30px] rounded-radius50 w-[30px]"></div>
                    </div>
                  </div>
                  <Text
                    className="font-bold text-gray_900 text-left sm:w-[100%] w-[51%]"
                    variant="body7"
                  >
                    After click on button, where some waiting time required, we
                    need to put  this waiting sign on the button (while  the
                    action proceeds)
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[26%] flex flex-col font-inter md:gap-[40px] sm:gap-[40px] gap-[80px] items-start justify-start left-[31%] w-[15%]">
            <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
              <div className="bg-gradient2  p-[2px] rounded-radius23 w-[100%] ">
                <div className="bg-gray_100 border-solid flex flex-col h-[47px] md:h-[auto] sm:h-[auto] items-center justify-center sm:px-[20px] px-[28px] py-[14px] rounded-radius23">
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
              <div className="md:h-[47px] sm:h-[47px] h-[58px] relative w-[100%]">
                <div className="absolute bg-gradient2  p-[2px] rounded-radius23 w-[100%] ">
                  <div className="absolute bg-gray_100 border-solid flex flex-col h-[47px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-center mx-[auto] sm:px-[20px] px-[28px] py-[14px] rounded-radius23 shadow-bs3 top-[0]">
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
                  className="absolute bottom-[0] h-[19px] left-[0] w-[auto]"
                  alt="cursor"
                />
              </div>
            </div>
            <div className="border border-deep_purple_A200 border-solid flex flex-col font-poppins gap-[23px] items-center justify-start p-[20px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[76%]">
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
          <div className="absolute flex flex-col font-inter gap-[37px] items-start justify-start left-[31%] top-[24%] w-[17%]">
            <Button
              className="cursor-pointer font-bold leading-[normal] min-w-[173px] text-[16px] text-center text-white_A700 w-[auto]"
              shape="RoundedBorder10"
              size="4xl"
              variant="GradientBlueA200DeeppurpleA700"
            >
              Withdraw
            </Button>
            <div className="border border-deep_purple_A200 border-solid flex flex-col items-center justify-end p-[17px] rounded-radius5 w-[100%]">
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
                  alt="Vector Four"
                />
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col font-poppins md:gap-[40px] sm:gap-[40px] gap-[77px] items-start justify-start right-[10%] top-[21%] w-[35%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[66px] items-end justify-start md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="bg-white_A701 flex flex-col gap-[6px] h-[143px] items-center justify-end p-[7px] w-[143px]">
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[71px] mt-[28px] text-[12px] text-center text-white_A700 w-[auto]"
                  shape="RoundedBorder10"
                  size="sm"
                  variant="GradientBlueA200DeeppurpleA700"
                >
                  Collect
                </Button>
                <div className="md:h-[43px] sm:h-[43px] h-[71px] relative w-[60%]">
                  <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[93%]">
                    <div className="flex flex-col gap-[7px] items-center justify-start w-[100%]">
                      <div className="bg-gradient2  flex flex-col items-start justify-start px-[14px] py-[3px] rounded-radius12 shadow-bs4 w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body17"
                        >
                          Collect
                        </Text>
                      </div>
                      <div className="bg-gradient10  p-[1px] rounded-radius12 w-[100%] ">
                        <div className="bg-white_A701 border-solid flex flex-col items-start justify-start px-[14px] py-[3px] rounded-radius12">
                          <Text
                            className="bg-clip-text bg-gradient2  font-medium text-left text-transparent w-[auto]"
                            variant="body17"
                          >
                            Collect
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_cursor_white_a701.svg"
                    className="absolute h-[20px] right-[0] top-[18%] w-[auto]"
                    alt="cursor One"
                  />
                  <Img
                    src="images/img_folder.svg"
                    className="absolute bottom-[0] h-[23px] right-[0] w-[auto]"
                    alt="folder"
                  />
                </div>
              </div>
              <div className="bg-white_A701 flex flex-col font-inter items-end justify-end p-[8px] md:w-[100%] sm:w-[100%] w-[32%]">
                <div className="flex flex-col gap-[14px] items-start justify-start mb-[13px] mt-[26px] w-[auto]">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[198px]"
                    shape="RoundedBorder13"
                    size="4xl"
                    variant="GradientBlueA200DeeppurpleA700"
                  >
                    Remove liquidity
                  </Button>
                  <div className="md:h-[35px] sm:h-[35px] h-[48px] relative w-[100%]">
                    <div className="absolute bg-gradient2  flex flex-col h-[40px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-center mx-[auto] px-[14px] py-[8px] rounded-radius15 shadow-bs3 top-[0] w-[198px]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body12"
                      >
                        Remove liquidity
                      </Text>
                    </div>
                    <Img
                      src="images/img_vector.svg"
                      className="absolute bottom-[0] h-[16px] left-[35%] w-[14px]"
                      alt="Vector Five"
                    />
                  </div>
                  <div className="md:h-[35px] sm:h-[35px] h-[52px] relative w-[100%]">
                    <div className="absolute bg-gradient2  p-[1px] rounded-radius15 w-[100%] ">
                      <div className="absolute bg-white_A701 border-solid flex flex-col h-[40px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-center mx-[auto] px-[14px] py-[8px] rounded-radius15 top-[0]">
                        <Text
                          className="bg-clip-text bg-gradient2  font-bold text-left text-transparent w-[auto]"
                          variant="body12"
                        >
                          Remove liquidity
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_vector_white_a701.svg"
                      className="absolute bottom-[0] h-[18px] left-[18%] w-[22px]"
                      alt="Vector Six"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white_A701 flex flex-col font-poppins items-start justify-end p-[32px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[33%]">
                <Text
                  className="bg-gray_500_33 font-medium justify-center mt-[30px] px-[14px] py-[3px] rounded-radius12 text-gray_600 text-left w-[auto]"
                  variant="body17"
                >
                  Increase liquidity
                </Text>
                <Text
                  className="bg-gray_500_7f font-medium justify-center mt-[12px] px-[14px] py-[3px] rounded-radius12 text-gray_600 text-left w-[auto]"
                  variant="body17"
                >
                  Increase liquidity
                </Text>
                <Img
                  src="images/img_cursor_white_a701.svg"
                  className="h-[20px] mb-[10px] md:ml-[0] sm:ml-[0] ml-[120px] w-[auto]"
                  alt="cursor Two"
                />
              </div>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row font-inter md:gap-[40px] sm:gap-[40px] gap-[63px] items-center justify-start md:w-[100%] sm:w-[100%] w-[86%]">
              <div className="bg-white_A701 flex flex-col items-start justify-end p-[35px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[44%]">
                <Button
                  className="flex items-center justify-center min-w-[198px] mt-[19px] text-center w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_plus.svg"
                      className="mr-[10px] text-center"
                      alt="plus"
                    />
                  }
                  shape="RoundedBorder13"
                  size="2xl"
                  variant="GradientBlueA200DeeppurpleA700"
                >
                  <div className="bg-transparent cursor-pointer font-bold leading-[normal] text-[16px] text-left text-white_A700">
                    Add new position{" "}
                  </div>
                </Button>
                <Button
                  className="flex items-center justify-center min-w-[198px] mt-[16px] text-center w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_plus.svg"
                      className="mr-[10px] text-center"
                      alt="plus"
                    />
                  }
                  shape="RoundedBorder13"
                  size="2xl"
                  variant="FillGray400"
                >
                  <div className="bg-transparent cursor-pointer font-bold leading-[normal] text-[16px] text-left text-white_A700">
                    Add new position{" "}
                  </div>
                </Button>
                <div className="h-[43px] md:h-[56px] sm:h-[56px] mt-[16px] relative md:w-[100%] sm:w-[100%] w-[93%]">
                  <div className="absolute bg-gradient2  flex flex-row gap-[10px] inset-x-[0] items-center justify-center mx-[auto] px-[14px] py-[8px] rounded-radius15 shadow-bs3 top-[0] w-[auto]">
                    <Img
                      src="images/img_plus.svg"
                      className="h-[24px] w-[24px]"
                      alt="plus Three"
                    />
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body12"
                    >
                      Add new position{" "}
                    </Text>
                  </div>
                  <Img
                    src="images/img_vector_white_a701_16x12.svg"
                    className="absolute bottom-[0] h-[16px] right-[41%] w-[auto]"
                    alt="Vector Seven"
                  />
                </div>
                <div className="h-[49px] md:h-[52px] sm:h-[52px] mt-[12px] relative md:w-[100%] sm:w-[100%] w-[93%]">
                  <div className="absolute bg-gradient2  p-[1px] rounded-radius15 w-[100%] ">
                    <div className="absolute bg-gradient2  bg-white_A701 border-solid flex flex-row gap-[10px] inset-x-[0] items-center justify-center mx-[auto] px-[14px] py-[8px] rounded-radius15 top-[0]">
                      <Img
                        src="images/img_plus.svg"
                        className="h-[24px] w-[24px]"
                        alt="plus Four"
                      />
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body12"
                      >
                        Add new position{" "}
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_vector_white_a701_18x19.svg"
                    className="absolute bottom-[0] h-[18px] right-[7%] w-[19px]"
                    alt="Vector Eight"
                  />
                </div>
              </div>
              <div className="flex flex-col font-poppins gap-[31px] justify-start md:w-[100%] sm:w-[100%] w-[47%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col items-end justify-start pb-[25px] sm:pl-[20px] pl-[25px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group227.svg')" }}
                >
                  <div className="flex flex-col gap-[25px] items-center justify-start md:w-[100%] sm:w-[100%] w-[20%]">
                    <div className="bg-blue_A200_4c flex flex-col h-[22px] md:h-[auto] sm:h-[auto] items-center justify-center px-[8px] py-[2px] rounded-radius3 w-[53px]">
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[16px] w-[16px]"
                        alt="arrowdown"
                      />
                    </div>
                    <div className="bg-blue_A200_7f flex flex-col h-[22px] md:h-[auto] sm:h-[auto] items-center justify-center px-[8px] py-[2px] rounded-radius3 w-[53px]">
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[16px] w-[16px]"
                        alt="arrowdown One"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:h-[32px] sm:h-[32px] h-[51px] md:ml-[0] sm:ml-[0] ml-[16px] relative sm:w-[100%] w-[36%]">
                  <div className="absolute flex flex-row gap-[8px] inset-x-[0] items-center justify-between mx-[auto] top-[0] w-[auto]">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] text-[16px] text-blue_A201 text-center w-[49px]"
                      shape="RoundedBorder5"
                      size="md"
                      variant="FillBlueA2004c"
                    >
                      25%
                    </Button>
                    <div className="bg-blue_A200_7f flex flex-col items-center justify-center px-[8px] py-[4px] rounded-radius5 w-[49px]">
                      <Text
                        className="font-medium text-blue_A201 text-left w-[auto]"
                        variant="body12"
                      >
                        25%
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_television.svg"
                    className="absolute bottom-[0] h-[23px] right-[14%] w-[auto]"
                    alt="television"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UIKITPage;
