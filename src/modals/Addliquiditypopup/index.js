import React from "react";
import ModalProvider from "react-modal";

import { List, Img, Text, Button } from "components";

const AddliquiditypopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[67%]"
        overlayClassName="bg-white_A700 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto md:w-[100%] sm:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-center justify-start max-w-[880px] mb-[1246px] mt-[89px] mx-[auto] p-[36px] md:px-[20px] sm:px-[20px] rounded-radius20 w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row gap-[39px] items-end justify-between mb-[4px] mt-[38px] w-[100%]">
              <div className="flex md:flex-1 sm:flex-1 flex-col md:gap-[40px] sm:gap-[40px] gap-[77px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <List
                  className="flex-col gap-[10px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="bg-indigo_50 flex flex-1 flex-col items-center justify-start my-[0] p-[10px] rounded-radius20 w-[100%]">
                    <div className="flex flex-row items-end justify-between mb-[2px] md:w-[100%] sm:w-[100%] w-[99%]">
                      <div className="flex flex-col gap-[12px] justify-start w-[auto]">
                        <div className="bg-white_A700 flex flex-col items-start justify-start mr-[18px] px-[6px] py-[3px] rounded-radius18 shadow-bs w-[auto]">
                          <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                            <Img
                              src="images/img_bluetooth.svg"
                              className="h-[26px] w-[26px]"
                              alt="bluetooth"
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
                  <div className="bg-indigo_50 flex flex-1 flex-col items-center justify-start my-[0] p-[10px] rounded-radius20 w-[100%]">
                    <div className="flex flex-row items-end justify-between mb-[2px] md:w-[100%] sm:w-[100%] w-[99%]">
                      <div className="flex flex-col gap-[10px] items-end justify-start w-[auto]">
                        <div className="bg-white_A700 flex flex-col items-start justify-start px-[6px] py-[3px] rounded-radius19 shadow-bs w-[auto]">
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
                                alt="floatingicon"
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
                        <div className="flex flex-row items-end justify-evenly ml-[auto] md:w-[100%] sm:w-[100%] w-[92%]">
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body5"
                          >
                            137.61
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
                          Balance: 138.76
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="bg-indigo_50 flex flex-col items-start justify-end p-[13px] rounded-radius15 w-[100%]">
                  <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[4px] md:w-[100%] sm:w-[100%] w-[30%]">
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      variant="body9"
                    >
                      0.3% fee tier
                    </Text>
                    <Text
                      className="bg-bluegray_102 justify-center px-[6px] rounded-radius5 text-gray_900 text-left w-[auto]"
                      variant="body22"
                    >
                      78% select
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[10px] items-center justify-start md:mt-[0] sm:mt-[0] mt-[240px] md:w-[100%] sm:w-[100%] w-[auto]">
                <Button
                  className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-white_A700 w-[362px]"
                  shape="RoundedBorder13"
                  size="7xl"
                  variant="GradientDeeppurple400Purple300"
                >
                  Approve BTC
                </Button>
                <Button
                  className="cursor-pointer font-bold leading-[normal] text-[16px] text-center text-gray_400 w-[362px]"
                  shape="RoundedBorder13"
                  size="7xl"
                  variant="FillGray903"
                >
                  Preview
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default AddliquiditypopupModal;
