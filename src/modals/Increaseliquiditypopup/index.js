import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, List, Button } from "components";

const IncreaseliquiditypopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[37%]"
        overlayClassName="bg-white_A700 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto md:w-[100%] sm:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-center justify-start mb-[810px] p-[15px] md:px-[20px] sm:px-[20px] rounded-radius20 w-[100%]">
            <div className="md:h-[166px] sm:h-[166px] h-[235px] mt-[19px] relative md:w-[100%] sm:w-[100%] w-[93%]">
              <Text
                className="font-bold text-gray_900 text-left w-[auto]"
                variant="body4"
              >
                Add liquidity
              </Text>
              <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                <div className="flex flex-col gap-[17px] items-end justify-start w-[100%]">
                  <Img
                    src="images/img_close_gray_900.svg"
                    className="common-pointer h-[24px] w-[24px]"
                    onClick={props.onRequestClose}
                    alt="close"
                  />
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <div className="flex flex-row gap-[12px] h-[38px] md:h-[auto] sm:h-[auto] items-center justify-center w-[200px]">
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
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body4"
                      >
                        BTC - USDT
                      </Text>
                    </div>
                    <List
                      className="flex-col gap-[10px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row items-center justify-between pr-[5px] w-[100%]">
                        <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_bluetooth.svg"
                            className="h-[26px] w-[26px]"
                            alt="bluetooth One"
                          />
                          <div className="flex flex-col gap-[-3px] items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              BTC
                            </Text>
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body17"
                            >
                              Bitcoin
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body7"
                        >
                          0.0056 BTC
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row items-center justify-between pr-[5px] w-[100%]">
                        <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_floatingicon.svg"
                            className="h-[26px] w-[26px]"
                            alt="floatingicon One"
                          />
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
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body7"
                        >
                          675.00 USDT
                        </Text>
                      </div>
                    </List>
                    <div className="flex flex-row items-end justify-between md:w-[100%] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-medium mb-[2px] mt-[7px] text-gray_903 text-left w-[auto]"
                        variant="body12"
                      >
                        Swapping fee
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[67px] text-[16px] text-center text-gray_900 w-[auto]"
                        shape="RoundedBorder13"
                        size="sm"
                        variant="OutlineGray900bf"
                      >
                        0.3%
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="font-medium mt-[45px] text-gray_900 text-left w-[auto]"
              variant="body12"
            >
              Add more liquidity
            </Text>
            <div className="flex flex-col gap-[31px] items-center justify-start mb-[25px] mt-[29px] w-[100%]">
              <div className="md:h-[198px] h-[200px] sm:h-[264px] relative w-[100%]">
                <div className="flex flex-col h-[100%] items-center justify-start m-[auto] w-[100%]">
                  <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                    <div className="bg-indigo_50 flex flex-col items-center justify-start p-[10px] rounded-radius20 w-[100%]">
                      <div className="flex flex-row items-end justify-between mb-[2px] md:w-[100%] sm:w-[100%] w-[97%]">
                        <div className="flex flex-col gap-[12px] justify-start w-[auto]">
                          <div className="bg-white_A700 flex flex-col items-start justify-start mr-[18px] px-[6px] py-[3px] rounded-radius18 shadow-bs w-[auto]">
                            <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_bluetooth.svg"
                                className="h-[26px] w-[26px]"
                                alt="bluetooth Two"
                              />
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body7"
                              >
                                BTC
                              </Text>
                              <Img
                                src="images/img_arrowup_gray_900_16x16.svg"
                                className="h-[16px] w-[16px]"
                                alt="arrowup"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row items-end justify-evenly ml-[auto] md:w-[100%] sm:w-[100%] w-[92%]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body5"
                            >
                              0.005
                            </Text>
                            <Text
                              className="font-medium mt-[7px] text-gray_600 text-left w-[auto]"
                              variant="body17"
                            >
                              $137.35
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[6px] items-end justify-start mt-[40px] w-[auto]">
                          <a
                            className="font-medium text-[12px] text-gray_600 text-left underline w-[auto]"
                            href="#"
                          >
                            Max
                          </a>
                          <Text
                            className="font-medium text-gray_600 text-left w-[auto]"
                            variant="body17"
                          >
                            Balance: 0.005
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-indigo_50 flex flex-col items-center justify-start p-[10px] rounded-radius20 w-[100%]">
                      <div className="flex flex-col gap-[10px] justify-start mb-[2px] md:w-[100%] sm:w-[100%] w-[97%]">
                        <div className="bg-white_A700 flex flex-col items-start justify-start mr-[290px] px-[6px] py-[3px] rounded-radius19 shadow-bs w-[auto]">
                          <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[32px] items-start justify-start p-[2px] w-[32px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group155.svg')",
                              }}
                            >
                              <Img
                                src="images/img_floatingicon.svg"
                                className="h-[26px] w-[26px]"
                                alt="floatingicon Two"
                              />
                            </div>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body7"
                            >
                              USDT
                            </Text>
                            <Img
                              src="images/img_arrowup_gray_900_16x16.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowup One"
                            />
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-end justify-start md:ml-[0] sm:ml-[0] ml-[10px] md:w-[100%] sm:w-[100%] w-[98%]">
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body5"
                          >
                            137.61
                          </Text>
                          <Text
                            className="font-medium sm:ml-[0] ml-[3px] sm:mt-[0] mt-[7px] text-gray_600 text-left w-[auto]"
                            variant="body17"
                          >
                            $137.35
                          </Text>
                          <Text
                            className="font-medium sm:ml-[0] ml-[227px] sm:mt-[0] mt-[10px] text-gray_600 text-left w-[auto]"
                            variant="body17"
                          >
                            Balance: 0
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="absolute flex h-[50px] inset-[0] items-center justify-center m-[auto] rounded-radius50 w-[50px]"
                  size="xlIcn"
                  variant="icbOutlineIndigo50"
                >
                  <Img
                    src="images/img_arrowdown_gray_900.svg"
                    className="h-[24px]"
                    alt="arrowdown"
                  />
                </Button>
              </div>
              <Button
                className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[450px]"
                shape="RoundedBorder13"
                size="9xl"
                variant="GradientDeeppurple400Purple300"
              >
                Preview
              </Button>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default IncreaseliquiditypopupModal;
