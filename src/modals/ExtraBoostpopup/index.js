import React from "react";
import ModalProvider from "react-modal";

import { Img, Text, List, Input, Button } from "components";

const ExtraBoostpopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[43%]"
        overlayClassName="bg-white_A700 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto md:w-[100%] sm:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-start justify-start mb-[1330px] mt-[716px] p-[18px] md:px-[20px] sm:px-[20px] rounded-radius30 w-[100%]">
            <div className="h-[1094px] md:h-[570px] sm:h-[570px] md:ml-[0] sm:ml-[0] ml-[33px] relative md:w-[100%] sm:w-[100%] w-[93%]">
              <div className="bg-yellow_100 border-2 border-orange_A100 border-solid flex sm:flex-col flex-row gap-[26px] h-[100%] items-center justify-start mt-[99px] p-[8px] rounded-radius10 w-[95%]">
                <Img
                  src="images/img_warning.svg"
                  className="h-[21px] sm:ml-[0] ml-[23px] w-[auto]"
                  alt="warning"
                />
                <Text
                  className="font-medium mb-[4px] text-gray_900 text-left"
                  variant="body17"
                >
                  Dont forget to attach three hashtags to your comment:
                  <br />
                  #swaptos,  #taskswaptos, #extraboosted
                </Text>
              </div>
              <div className="absolute flex flex-col gap-[16px] h-[max-content] inset-[0] justify-center m-[auto] w-[100%]">
                <Img
                  src="images/img_close_gray_900.svg"
                  className="common-pointer h-[24px] md:ml-[0] sm:ml-[0] ml-[468px] w-[24px]"
                  onClick={props.onRequestClose}
                  alt="close"
                />
                <div className="flex flex-col gap-[145px] md:gap-[40px] sm:gap-[40px] items-center justify-start mr-[27px] md:w-[100%] sm:w-[100%] w-[95%]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body4"
                  >
                    Submit task
                  </Text>
                  <div className="flex flex-col font-inter items-center justify-start w-[100%]">
                    <Text
                      className="font-bold text-gray_900 text-left"
                      variant="body14"
                    >
                      <span className="text-gray_900 text-[14px] font-inter">
                        STEP 1.  1. Follow the link{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_A201 text-[14px] font-inter underline"
                      >
                        https://youtu.be/dQw4w9WgXcQ
                      </a>
                      <span className="text-gray_900 text-[14px] font-inter">
                        .  2. Write an original comment to the video and attach
                        one of the three attached hashtags. Add your referral
                        link. <br />
                        3. Post comment{" "}
                      </span>
                    </Text>
                    <div className="bg-bluegray_101 flex flex-col font-poppins items-center justify-start mt-[6px] p-[61px] sm:px-[20px] md:px-[40px] w-[100%]">
                      <Text
                        className="font-medium mb-[2px] text-gray_900 text-left w-[auto]"
                        variant="body17"
                      >
                        Picture
                      </Text>
                    </div>
                    <List
                      className="flex-col font-inter gap-[30px] grid items-center mt-[30px] w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-col gap-[6px] items-center justify-start w-[100%]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[100%]"
                          variant="body14"
                        >
                          STEP 2.  1. Click on the time of comment publication.{" "}
                        </Text>
                        <div className="bg-bluegray_101 flex flex-col font-poppins items-center justify-start p-[61px] sm:px-[20px] md:px-[40px] w-[100%]">
                          <Text
                            className="font-medium mb-[2px] text-gray_900 text-left w-[auto]"
                            variant="body17"
                          >
                            Picture
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-[6px] items-center justify-start w-[100%]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[100%]"
                          variant="body14"
                        >
                          STEP 3.  1. Copy URL.
                        </Text>
                        <div className="bg-bluegray_101 flex flex-col font-poppins items-center justify-start p-[61px] sm:px-[20px] md:px-[40px] w-[100%]">
                          <Text
                            className="font-medium mb-[2px] text-gray_900 text-left w-[auto]"
                            variant="body17"
                          >
                            Picture
                          </Text>
                        </div>
                      </div>
                    </List>
                    <div className="flex flex-col font-inter gap-[6px] items-center justify-start mt-[30px] w-[100%]">
                      <Text
                        className="font-bold text-gray_900 text-left"
                        variant="body14"
                      >
                        STEP 4.  1. Submit URL to our field. 2. Click on Submit
                        button
                        <br />
                        3. Wait for moderator confirmation
                      </Text>
                      <div className="bg-bluegray_101 flex flex-col font-poppins items-center justify-start p-[61px] sm:px-[20px] md:px-[40px] w-[100%]">
                        <Text
                          className="font-medium mb-[2px] text-gray_900 text-left w-[auto]"
                          variant="body17"
                        >
                          Picture
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[29px] mt-[18px] pt-[2px] md:w-[100%] sm:w-[100%] w-[89%]">
              <div className="flex flex-row gap-[10px] items-start justify-start md:w-[100%] sm:w-[100%] w-[28%]">
                <Img
                  src="images/img_edit_gray_900.svg"
                  className="h-[12px] w-[12px]"
                  alt="edit"
                />
                <Text
                  className="font-medium text-gray_900 text-left w-[auto]"
                  variant="body14"
                >
                  Submit the link
                </Text>
              </div>
              <Input
                className="font-medium leading-[normal] p-[0] text-[14px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                wrapClassName="w-[100%]"
                name="GroupFiftyFive"
                placeholder="Link for subscribers"
                shape="RoundedBorder10"
                size="sm"
                variant="FillIndigo50"
              ></Input>
            </div>
            <Button
              className="cursor-pointer font-medium leading-[normal] md:ml-[0] sm:ml-[0] ml-[199px] mt-[20px] text-[16px] text-center text-white_A700 w-[134px]"
              shape="CircleBorder19"
              size="4xl"
              variant="FillBlueA201"
            >
              Submit task
            </Button>
            <Text
              className="font-medium md:ml-[0] sm:ml-[0] ml-[245px] my-[10px] text-gray_600 text-left w-[auto]"
              variant="body17"
            >
              Cancel
            </Text>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default ExtraBoostpopupModal;
