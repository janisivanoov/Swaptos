import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Button } from "components";

const ImportcautionModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[36%]"
        overlayClassName="bg-white_A700 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto md:w-[100%] sm:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-center justify-start mt-[59px] p-[14px] md:px-[20px] sm:px-[20px] rounded-radius20 w-[100%]">
            <div className="flex flex-col items-start justify-start mb-[14px] md:w-[100%] sm:w-[100%] w-[96%]">
              <div className="flex flex-row items-end justify-between md:w-[100%] sm:w-[100%] w-[99%]">
                <Text
                  className="font-bold mt-[6px] text-gray_900 text-left w-[auto]"
                  variant="body12"
                >
                  Import token
                </Text>
                <Img
                  src="images/img_close_gray_900.svg"
                  className="common-pointer h-[24px] w-[24px]"
                  onClick={props.onRequestClose}
                  alt="close"
                />
              </div>
              <div className="bg-red_100 border-2 border-red_300 border-solid flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[20px] p-[12px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_warning.svg"
                  className="h-[21px] sm:ml-[0] ml-[7px] sm:mt-[0] mt-[7px] w-[auto]"
                  alt="warning"
                />
                <div className="flex sm:flex-1 flex-col items-center justify-start sm:ml-[0] ml-[3px] px-[5px] sm:w-[100%] w-[90%]">
                  <Text
                    className="font-medium text-gray_903 text-left"
                    variant="body17"
                  >
                    Anyone can create a BEP20 token on BNB Smart Chain with any
                    name, including creating fake versions of existing tokens
                    and tokens that claim to represent projects that do not have
                    a token.
                    <br />
                    <br />
                    If you purchase an arbitrary token, you may be unable to
                    sell it back.
                  </Text>
                </div>
              </div>
              <Text
                className="font-medium mt-[20px] text-gray_900 text-left w-[auto]"
                variant="body14"
              >
                Binance Pegged USD Coin (USDC)
              </Text>
              <div className="flex flex-row gap-[228px] items-start justify-between mt-[2px] sm:w-[100%] w-[auto]">
                <Text
                  className="font-medium text-gray_900 text-left w-[auto]"
                  variant="body14"
                >
                  0x8A....5B7A
                </Text>
                <a
                  className="font-medium text-[14px] text-blue_A201 text-left underline w-[auto]"
                  href="#"
                >
                  View in explorer
                </a>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[134px] md:ml-[0] sm:ml-[0] ml-[143px] mt-[20px] text-[16px] text-center text-white_A702 w-[auto]"
                shape="CircleBorder19"
                size="4xl"
                variant="FillBlueA201"
              >
                Import
              </Button>
              <Text
                className="font-medium md:ml-[0] sm:ml-[0] ml-[189px] mt-[10px] text-gray_600 text-left w-[auto]"
                variant="body17"
              >
                Cancel
              </Text>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default ImportcautionModal;
