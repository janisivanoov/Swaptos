import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Input, Button, List } from "components";

const TokenchoosingModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[36%]"
        overlayClassName="bg-white_A700 border-2 border-solid border-white_A700 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto md:w-[100%] sm:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-center justify-start mt-[91px] p-[15px] md:px-[20px] sm:px-[20px] rounded-radius20 w-[100%]">
            <div className="flex flex-col items-center justify-start mb-[8px] md:w-[100%] sm:w-[100%] w-[96%]">
              <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[99%]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Choose token
                  </Text>
                  <Img
                    src="images/img_close_gray_900.svg"
                    className="common-pointer h-[24px] w-[24px]"
                    onClick={props.onRequestClose}
                    alt="close"
                  />
                </div>
                <Input
                  className="font-medium leading-[normal] p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                  wrapClassName="w-[100%]"
                  type="text"
                  name="Group100"
                  placeholder="Search name or paste adress to import"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineBlue200"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start mt-[27px] md:w-[100%] sm:w-[100%] w-[97%]">
                <Text
                  className="font-bold text-gray_600 text-left w-[auto]"
                  variant="body17"
                >
                  Popular tokens:
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-evenly mt-[8px] w-[100%]">
                  <Button
                    className="flex items-center justify-center mb-[2px] min-w-[105px] text-center w-[auto]"
                    leftIcon={
                      <Img
                        src="images/img_close_yellow_900.svg"
                        className="mr-[10px] text-center"
                        alt="close"
                      />
                    }
                    shape="CircleBorder19"
                    size="2xl"
                    variant="FillIndigo50"
                  >
                    <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[16px] text-gray_900 text-left">
                      WBTC
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center mb-[2px] min-w-[86px] text-center w-[auto]"
                    leftIcon={
                      <Img
                        src="images/img_group_276.svg"
                        className="mr-[10px] text-center"
                        alt="Group 276"
                      />
                    }
                    shape="CircleBorder19"
                    size="2xl"
                    variant="FillIndigo50"
                  >
                    <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[16px] text-gray_900 text-left">
                      ETH
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center mb-[2px] min-w-[104px] text-center w-[auto]"
                    leftIcon={
                      <Img
                        src="images/img_cut_gray_900.svg"
                        className="mr-[10px] text-center"
                        alt="cut"
                      />
                    }
                    shape="CircleBorder19"
                    size="2xl"
                    variant="FillIndigo50"
                  >
                    <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[16px] text-gray_900 text-left">
                      ATOM
                    </div>
                  </Button>
                  <div className="md:h-[36px] sm:h-[36px] h-[38px] relative sm:w-[100%] w-[24%]">
                    <div className="absolute bg-blue_50 flex flex-col items-start justify-start left-[0] pl-[8px] pr-[15px] py-[6px] rounded-radius18 top-[0] w-[auto]">
                      <div className="flex flex-row gap-[10px] items-start justify-start w-[auto]">
                        <div className="flex flex-col h-[24px] items-center justify-start w-[24px]">
                          <Button
                            className="flex h-[24px] items-center justify-center w-[24px]"
                            shape="icbCircleBorder11"
                            size="mdIcn"
                            variant="icbFillYellow700"
                          >
                            <Img
                              src="images/img_close_white_a700_24x24.svg"
                              className="h-[15px]"
                              alt="close One"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          BNB
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_cursor_white_a701.svg"
                      className="absolute bottom-[0] h-[20px] right-[0] w-[auto]"
                      alt="cursor"
                    />
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[5px] items-start justify-start mt-[6px] sm:w-[100%] w-[auto]">
                  <Button
                    className="flex items-center justify-center min-w-[99px] text-center w-[auto]"
                    leftIcon={
                      <div className="h-[24px] pt-[5px] pb-[4px] w-[24px] bg-teal_400 text-center rounded-radius50 px-[4px] flex justify-center items-center">
                        <Img
                          src="images/img_eye_white_a700.svg"
                          className="text-center"
                          alt="eye"
                        />
                      </div>
                    }
                    shape="CircleBorder19"
                    size="2xl"
                    variant="FillIndigo50"
                  >
                    <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[16px] text-gray_900 text-left">
                      USDT
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center min-w-[102px] text-center w-[auto]"
                    leftIcon={
                      <Img
                        src="images/img_component_2_group.png"
                        className="text-center"
                        alt="Component 2/Group"
                      />
                    }
                    shape="CircleBorder19"
                    size="2xl"
                    variant="FillIndigo50"
                  >
                    <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[16px] text-gray_900 text-left">
                      USDC
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center min-w-[90px] text-center w-[auto]"
                    leftIcon={
                      <Img
                        src="images/img_component_2_group_pink_500.png"
                        className="text-center"
                        alt="Component 2/Group"
                      />
                    }
                    shape="CircleBorder19"
                    size="2xl"
                    variant="FillIndigo50"
                  >
                    <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[16px] text-gray_900 text-left">
                      DOT
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center min-w-[102px] text-center w-[auto]"
                    leftIcon={
                      <div className="h-[24px] w-[24px] bg-lime_700 text-center p-[6px] rounded-radius50 flex justify-center items-center">
                        <Img
                          src="images/img_lock.svg"
                          className="text-center"
                          alt="lock"
                        />
                      </div>
                    }
                    shape="CircleBorder19"
                    size="2xl"
                    variant="FillIndigo50"
                  >
                    <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[16px] text-gray_900 text-left">
                      DOGE
                    </div>
                  </Button>
                </div>
              </div>
              <div className="flex md:h-[182px] sm:h-[182px] h-[285px] mt-[20px] relative w-[100%]">
                <div className="flex flex-col items-start justify-start my-[auto] pb-[82px] w-[28%]">
                  <div className="flex flex-col items-center justify-start w-[auto]">
                    <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
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
                      <div className="flex flex-col gap-[-3px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          USDT
                        </Text>
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body17"
                        >
                          Tether
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[10px] items-center justify-start mt-[2px] w-[auto]">
                    <div className="flex flex-col h-[24px] items-center justify-start w-[24px]">
                      <Button
                        className="flex h-[24px] items-center justify-center w-[24px]"
                        shape="icbCircleBorder11"
                        size="mdIcn"
                        variant="icbFillYellow700"
                      >
                        <Img
                          src="images/img_close_white_a700_24x24.svg"
                          className="h-[15px]"
                          alt="close Two"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[-3px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        BNB
                      </Text>
                      <Text
                        className="font-medium text-gray_600 text-left w-[auto]"
                        variant="body17"
                      >
                        Binance Coin
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex-col gap-[2px] grid items-center mt-[2px] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                      <Img
                        src="images/img_component_2_group.png"
                        className="h-[24px] md:h-[auto] sm:h-[auto] object-cover w-[24px]"
                        alt="Component2Group"
                      />
                      <div className="flex flex-col gap-[-3px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          USDC
                        </Text>
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body17"
                        >
                          USD Coin
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                      <Button
                        className="flex h-[24px] items-center justify-center w-[24px]"
                        shape="icbCircleBorder11"
                        size="mdIcn"
                        variant="icbFillLime700"
                      >
                        <Img
                          src="images/img_lock.svg"
                          className=""
                          alt="lock"
                        />
                      </Button>
                      <div className="flex flex-col gap-[-3px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          DOGE
                        </Text>
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body17"
                        >
                          Dogecoin
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                      <Button
                        className="flex h-[24px] items-center justify-center w-[24px]"
                        shape="icbCircleBorder11"
                        size="mdIcn"
                        variant="icbFillYellow700"
                      >
                        <Img
                          src="images/img_close_white_a700_24x24.svg"
                          className="h-[15px]"
                          alt="close Three"
                        />
                      </Button>
                      <div className="flex flex-col gap-[-3px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          BNB
                        </Text>
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body17"
                        >
                          Binance Coin
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="flex flex-row gap-[251px] items-center justify-between ml-[-115px] mr-[auto] mt-[auto] w-[auto] z-[1]">
                  <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_component_2_group.png"
                      className="h-[24px] md:h-[auto] sm:h-[auto] object-cover w-[24px]"
                      alt="Component2Group One"
                    />
                    <div className="flex flex-col gap-[-3px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        USDC
                      </Text>
                      <Text
                        className="font-medium text-gray_600 text-left w-[auto]"
                        variant="body17"
                      >
                        USD Coin
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[12px] text-center text-white_A702 w-[80px]"
                    shape="RoundedBorder13"
                    size="md"
                    variant="FillBlueA201"
                  >
                    Import
                  </Button>
                </div>
                <div className="flex flex-row gap-[265px] items-center justify-between mb-[41px] ml-[-115px] mr-[auto] mt-[auto] w-[auto] z-[1]">
                  <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
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
                    <div className="flex flex-col gap-[-3px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        USDT
                      </Text>
                      <Text
                        className="font-medium text-gray_600 text-left w-[auto]"
                        variant="body17"
                      >
                        Tether
                      </Text>
                    </div>
                  </div>
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
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default TokenchoosingModal;
