import React from "react";

import {
  Img,
  Text,
  Line,
  Button,
  Input,
  CheckBox,
  List,
  ReactTable,
} from "components";
import { createColumnHelper } from "@tanstack/react-table";

const UikitreferralpagePage = () => {
  const tableData = React.useRef([
    {
      rowdate: "12/17/22",
      rowwalletadress: "0x573282...",
      rowlink: "https://...ref0567",
    },
    {
      rowdate: "12/17/22",
      rowwalletadress: "0x573282...",
      rowlink: "https://...ref0567",
    },
    {
      rowdate: "12/17/22",
      rowwalletadress: "0x573282...",
      rowlink: "https://...ref0567",
    },
    {
      rowdate: "12/17/22",
      rowwalletadress: "0x573282...",
      rowlink: "https://...ref0567",
    },
    {
      rowdate: "12/17/22",
      rowwalletadress: "0x573282...",
      rowlink: "https://...ref0567",
    },
    {
      rowdate: "12/17/22",
      rowwalletadress: "0x573282...",
      rowlink: "https://...ref0567",
    },
    {
      rowdate: "12/17/22",
      rowwalletadress: "0x573282...",
      rowlink: "https://...ref0567",
    },
    {
      rowdate: "12/17/22",
      rowwalletadress: "0x573282...",
      rowlink: "https://...ref0567",
    },
    {
      rowdate: "12/17/22",
      rowwalletadress: "0x573282...",
      rowlink: "https://...ref0567",
    },
  ]);
  const columnHelper = createColumnHelper();
  const column = [
    columnHelper.accessor("rowdate", {
      cell: (info) => (
        <Text
          className="font-medium pb-[-2px] pt-[14px] text-gray_600 text-left"
          variant="body17"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex flex-row items-center justify-start min-w-[100px] w-[32%]">
          <Text className="text-gray_600 text-left w-[auto]" variant="body22">
            Date
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowwalletadress", {
      cell: (info) => (
        <Text
          className="font-medium pt-[17px] text-gray_903 text-left"
          variant="body17"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex flex-row items-center justify-start min-w-[117px] w-[37%]">
          <Text className="text-gray_600 text-left w-[auto]" variant="body22">
            Wallet adress
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowlink", {
      cell: (info) => (
        <Text
          className="font-bold pb-[-2px] pt-[14px] text-gray_903 text-left"
          variant="body17"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex flex-row items-center justify-start min-w-[105px] w-[33%]">
          <Text className="text-gray_600 text-left w-[auto]" variant="body22">
            Link
          </Text>
        </div>
      ),
    }),
  ];

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] p-[108px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col gap-[263px] md:gap-[40px] sm:gap-[40px] items-center justify-start max-w-[1220px] mb-[992px] mt-[22px] mx-[auto] w-[100%]">
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between md:w-[100%] sm:w-[100%] w-[95%]">
            <div className="flex flex-col items-start justify-start md:mt-[0] sm:mt-[0] mt-[3px] md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[21px] justify-start w-[100%]">
                <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[78px] items-center justify-start w-[100%]">
                  <div className="border border-deep_purple_A200 border-solid flex flex-col gap-[23px] items-center justify-start p-[20px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[67%]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[10px] md:w-[100%] sm:w-[100%] w-[72%]"
                      style={{
                        backgroundImage: "url('images/img_group4.svg')",
                      }}
                    >
                      <div className="flex flex-row gap-[6px] items-start justify-start pr-[4px] w-[auto]">
                        <Img
                          src="images/img_search.svg"
                          className="h-[24px] w-[24px]"
                          alt="search"
                        />
                        <Text
                          className="font-medium text-gray_900_87 text-left w-[auto]"
                          variant="body12"
                        >
                          Search token pairs
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_property1on.png"
                      className="h-[46px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[auto]"
                      alt="Property1on"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[96%]">
                    <div className="bg-white_A700 flex flex-col items-center justify-start p-[14px] rounded-radius20 shadow-bs2 w-[100%]">
                      <div className="flex flex-col items-center justify-start mb-[6px] md:w-[100%] sm:w-[100%] w-[98%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body12"
                          >
                            Interest rate
                          </Text>
                          <Img
                            src="images/img_close_gray_900.svg"
                            className="h-[24px] w-[24px]"
                            alt="close"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[34px] md:w-[100%] sm:w-[100%] w-[94%]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body9"
                          >
                            Set your refback rate
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-center text-gray_600 w-[100%]"
                            variant="body14"
                          >
                            You can share rewards with your referrals to
                            motivate more followers to join with your link.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[29px] md:w-[100%] sm:w-[100%] w-[71%]">
                          <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[93%]">
                            <div className="flex flex-row items-start justify-between w-[100%]">
                              <div className="flex flex-col gap-[12px] items-center justify-start w-[auto]">
                                <Text
                                  className="bg-clip-text bg-gradient4  text-left text-transparent w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  75%
                                </Text>
                                <Text
                                  className="font-bold text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  You will get
                                </Text>
                              </div>
                              <Line className="bg-black_900_4c h-[79px] w-[1px]" />
                              <div className="flex flex-col gap-[12px] items-center justify-start w-[auto]">
                                <Text
                                  className="text-gray_900 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  25%
                                </Text>
                                <Text
                                  className="font-bold text-gray_900 text-left w-[auto]"
                                  variant="body14"
                                >
                                  Referral will get
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[5px] items-start justify-end mt-[20px] w-[auto]">
                            <Text
                              className="border border-gray_900 border-solid font-medium px-[12px] py-[3px] rounded-radius13 text-gray_50 text-left w-[auto]"
                              variant="body14"
                            >
                              <span className="text-purple_A100 text-[14px] font-poppins">
                                7.5%
                              </span>
                              <span className="text-gray_900 text-[14px] font-poppins">
                                {" "}
                                launchpools
                              </span>
                            </Text>
                            <Text
                              className="border border-gray_900 border-solid font-medium px-[12px] py-[3px] rounded-radius13 text-left text-white_A700 w-[auto]"
                              variant="body14"
                            >
                              <span className="text-purple_A100 text-[14px] font-poppins">
                                7.5%
                              </span>
                              <span className="text-white_A700 text-[14px] font-poppins">
                                {" "}
                              </span>
                              <span className="text-gray_900 text-[14px] font-poppins">
                                farms
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[14px] items-center justify-center mt-[26px] w-[auto]">
                            <Button
                              className="cursor-pointer font-medium leading-[normal] text-[16px] text-blue_A201 text-center w-[66px]"
                              shape="RoundedBorder5"
                              size="4xl"
                              variant="FillBlueA2004c"
                            >
                              0%
                            </Button>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] text-[16px] text-blue_A201 text-center w-[66px]"
                              shape="RoundedBorder5"
                              size="4xl"
                              variant="FillBlueA2004c"
                            >
                              10%
                            </Button>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] text-[16px] text-blue_A201 text-center w-[66px]"
                              shape="RoundedBorder5"
                              size="4xl"
                              variant="OutlineBlueA2004c"
                            >
                              25%
                            </Button>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] text-[16px] text-blue_A201 text-center w-[66px]"
                              shape="RoundedBorder5"
                              size="4xl"
                              variant="FillBlueA2004c"
                            >
                              50%
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start mt-[20px] md:w-[100%] sm:w-[100%] w-[97%]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[12%]">
                              <div className="flex flex-col items-center justify-center w-[auto]">
                                <div className="flex flex-row gap-[3px] items-center justify-start w-[auto]">
                                  <Img
                                    src="images/img_edit_gray_600.svg"
                                    className="h-[12px] w-[12px]"
                                    alt="edit"
                                  />
                                  <Text
                                    className="font-medium text-gray_600 text-left w-[auto]"
                                    variant="body14"
                                  >
                                    Note
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Input
                              className="font-medium leading-[normal] p-[0] text-[14px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                              wrapClassName="w-[100%]"
                              name="Group209"
                              placeholder="Link for subscribers"
                              shape="RoundedBorder10"
                              size="sm"
                              variant="FillIndigo50"
                            ></Input>
                          </div>
                          <CheckBox
                            className="font-medium leading-[normal] mt-[14px] text-[12px] text-gray_900 text-left md:w-[100%] sm:w-[100%]"
                            inputClassName="h-[20px] md:w-[100%] mr-[5px] sm:w-[100%] w-[20px]"
                            label="Set as default link"
                            name="Setasdefaultlink"
                          ></CheckBox>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] md:ml-[0] sm:ml-[0] ml-[107px] mt-[15px] text-[16px] text-center text-white_A700 w-[203px]"
                            shape="RoundedBorder23"
                            size="7xl"
                            variant="GradientBlueA200DeeppurpleA700"
                          >
                            Generate link
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[108px] md:gap-[40px] sm:gap-[40px] items-start justify-start w-[100%]">
                    <div className="border border-deep_purple_A200 border-solid flex flex-col items-center justify-end p-[17px] rounded-radius5 w-[100%]">
                      <List
                        className="flex-col gap-[18px] grid items-center mt-[3px] w-[99%]"
                        orientation="vertical"
                      >
                        <div className="bg-gradient2  p-[3px] relative rounded-radius29 w-[100%] ">
                          <div className="bg-white_A700 border-solid md:h-[44px] sm:h-[44px] h-[58px] p-[7px] relative rounded-radius29 sm:w-[100%]">
                            <div className="absolute bg-gradient2  h-[44px] inset-y-[0] my-[auto] right-[12%] rounded-radius22 w-[17%]"></div>
                            <div className="absolute flex flex-row gap-[58px] h-[max-content] inset-[0] items-start justify-between m-[auto] w-[auto]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                Referral list
                              </Text>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                Farms
                              </Text>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                Pools
                              </Text>
                              <Text
                                className="font-medium text-left text-white_A700 w-[auto]"
                                variant="body12"
                              >
                                Links
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gradient2  p-[3px] relative rounded-radius29 w-[100%] ">
                          <div className="bg-white_A700 border-solid md:h-[44px] sm:h-[44px] h-[58px] p-[7px] relative rounded-radius29 sm:w-[100%]">
                            <div className="absolute bg-gradient2  h-[44px] inset-y-[0] my-[auto] right-[22%] rounded-radius22 w-[20%]"></div>
                            <div className="absolute flex flex-row gap-[58px] h-[max-content] inset-[0] items-start justify-between m-[auto] w-[auto]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                Referral list
                              </Text>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                Farms
                              </Text>
                              <Text
                                className="font-medium text-left text-white_A700 w-[auto]"
                                variant="body12"
                              >
                                Pools
                              </Text>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                Links
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gradient2  p-[3px] relative rounded-radius29 w-[100%] ">
                          <div className="bg-white_A700 border-solid md:h-[44px] sm:h-[44px] h-[58px] p-[7px] relative rounded-radius29 sm:w-[100%]">
                            <div className="absolute bg-gradient2  h-[44px] inset-y-[0] left-[34%] my-[auto] rounded-radius22 w-[22%]"></div>
                            <div className="absolute flex flex-row gap-[58px] h-[max-content] inset-[0] items-start justify-between m-[auto] w-[auto]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                Referral list
                              </Text>
                              <Text
                                className="font-medium text-left text-white_A700 w-[auto]"
                                variant="body12"
                              >
                                Farms
                              </Text>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                Pools
                              </Text>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                Links
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gradient2  flex p-[3px] relative rounded-radius29 w-[100%] ">
                          <div className="bg-white_A700 border-solid flex md:h-[44px] sm:h-[44px] h-[58px] p-[7px] relative rounded-radius29 sm:w-[100%]">
                            <div className="bg-gradient2  h-[44px] my-[auto] rounded-radius22 w-[30%]"></div>
                            <div className="flex flex-row gap-[58px] items-start justify-between ml-[-112px] mr-[auto] my-[auto] w-[auto] z-[1]">
                              <Text
                                className="font-medium text-left text-white_A700 w-[auto]"
                                variant="body12"
                              >
                                Referral list
                              </Text>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                Farms
                              </Text>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                Pools
                              </Text>
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body12"
                              >
                                Links
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gradient2  p-[3px] relative rounded-radius30 w-[100%] ">
                          <div className="bg-white_A700 border-solid md:h-[44px] sm:h-[44px] h-[61px] relative rounded-radius30 sm:w-[100%]">
                            <div className="absolute bg-gradient2  p-[3px] rounded-radius29 w-[100%] ">
                              <div className="absolute bg-white_A700 border-solid md:h-[44px] sm:h-[44px] h-[58px] inset-x-[0] mx-[auto] p-[7px] rounded-radius29 top-[0] sm:w-[100%]">
                                <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-center justify-start left-[12%] my-[auto] w-[54%]">
                                  <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                                    <div className="bg-gradient2  h-[44px] rounded-radius22 w-[auto]"></div>
                                    <div className="bg-gray_400_6c h-[44px] rounded-radius22 w-[auto]"></div>
                                  </div>
                                </div>
                                <div className="absolute flex flex-row gap-[58px] h-[max-content] inset-[0] items-start justify-between m-[auto] w-[auto]">
                                  <Text
                                    className="font-medium text-left text-white_A700 w-[auto]"
                                    variant="body12"
                                  >
                                    Referral list
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    Farms
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    Pools
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_900 text-left w-[auto]"
                                    variant="body12"
                                  >
                                    Links
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Img
                              src="images/img_cursor_white_a701.svg"
                              className="absolute bottom-[0] h-[13px] inset-x-[0] mx-[auto] w-[12px]"
                              alt="cursor"
                            />
                          </div>
                        </div>
                      </List>
                    </div>
                    <div className="border border-deep_purple_A200 border-solid flex flex-col gap-[40px] items-center justify-start p-[20px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[93%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[12%]">
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <div className="flex flex-row gap-[3px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_edit_gray_600.svg"
                                className="h-[12px] w-[12px]"
                                alt="edit One"
                              />
                              <Text
                                className="font-medium text-gray_600 text-left w-[auto]"
                                variant="body14"
                              >
                                Note
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Input
                          className="font-medium leading-[normal] p-[0] text-[14px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                          wrapClassName="w-[100%]"
                          name="Group208"
                          placeholder="Link for subscribers"
                          shape="RoundedBorder10"
                          size="sm"
                          variant="FillIndigo50"
                        ></Input>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[12%]">
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <div className="flex flex-row gap-[3px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_edit_gray_600.svg"
                                className="h-[12px] w-[12px]"
                                alt="edit Two"
                              />
                              <Text
                                className="font-medium text-gray_600 text-left w-[auto]"
                                variant="body14"
                              >
                                Note
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-indigo_50 border border-blue_A201 border-solid flex flex-col items-start justify-end p-[7px] rounded-radius8 w-[100%]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[24px] md:ml-[0] sm:ml-[0] ml-[4px] w-[24px]"
                            alt="sort"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-deep_purple_A200 border-solid flex flex-col gap-[13px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[72px] p-[20px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[12%]">
                  <Img
                    src="images/img_videocamera.svg"
                    className="h-[16px] w-[16px]"
                    alt="videocamera"
                  />
                  <Img
                    src="images/img_videocamera_gray_601.svg"
                    className="h-[16px] w-[16px]"
                    alt="videocamera One"
                  />
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[17px] items-center justify-start p-[24px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[53%]">
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
            </div>
            <div className="flex flex-col gap-[171px] md:gap-[40px] sm:gap-[40px] justify-start md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[78px] items-start justify-start md:w-[100%] sm:w-[100%] w-[64%]">
                <div className="border border-deep_purple_A200 border-solid flex flex-col items-center justify-start p-[20px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[53%]">
                  <Img
                    src="images/img_property1frame.png"
                    className="h-[150px] md:h-[auto] sm:h-[auto] object-cover w-[150px]"
                    alt="Property1Frame"
                  />
                  <Img
                    src="images/img_property1phlinkbold.png"
                    className="h-[150px] md:h-[auto] sm:h-[auto] mt-[76px] object-cover w-[150px]"
                    alt="Property1phlinkbold"
                  />
                  <Img
                    src="images/img_property1icroundshare.png"
                    className="h-[150px] md:h-[auto] sm:h-[auto] mt-[31px] object-cover w-[150px]"
                    alt="Property1icroundshare"
                  />
                </div>
                <div className="bg-white_A700 flex flex-col gap-[29px] h-[360px] items-center justify-start p-[20px] rounded-radius25 shadow-bs2 w-[360px]">
                  <Text
                    className="font-bold text-center text-gray_900 sm:w-[100%] w-[90%]"
                    variant="body4"
                  >
                    Create  and manage your referral links
                  </Text>
                  <Img
                    src="images/img_property1phlinkbold.png"
                    className="h-[150px] md:h-[auto] sm:h-[auto] mb-[10px] object-cover w-[150px]"
                    alt="ComponentEight"
                  />
                </div>
              </div>
              <div className="border border-deep_purple_A200 border-solid flex flex-col md:gap-[40px] sm:gap-[40px] gap-[78px] items-center justify-end md:ml-[0] sm:ml-[0] ml-[152px] p-[18px] rounded-radius5 md:w-[100%] sm:w-[100%] w-[74%]">
                <div className="flex flex-col items-center justify-start mt-[2px] md:w-[100%] sm:w-[100%] w-[99%]">
                  <div className="bg-white_A700 flex flex-col gap-[124px] md:gap-[40px] sm:gap-[40px] items-center justify-start p-[15px] rounded-radius20 shadow-bs8 w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col items-start justify-start pr-[3px] py-[3px] md:w-[100%] sm:w-[100%] w-[97%]"
                      style={{
                        backgroundImage: "url('images/img_frame109.svg')",
                      }}
                    >
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Recent referrals
                      </Text>
                    </div>
                    <Text
                      className="font-medium mb-[150px] text-gray_600 text-left w-[auto]"
                      variant="body12"
                    >
                      No recent referrals
                    </Text>
                  </div>
                </div>
                <div className="md:h-[343px] sm:h-[343px] h-[347px] relative md:w-[100%] sm:w-[100%] w-[99%]">
                  <div className="absolute bg-white_A700 flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] p-[15px] rounded-radius20 shadow-bs8 w-[100%]">
                    <div className="flex flex-col items-center justify-start mb-[268px] md:w-[100%] sm:w-[100%] w-[97%]">
                      <div className="flex flex-row items-center justify-between mb-[21px] w-[100%]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Recent referrals
                        </Text>
                        <Img
                          src="images/img_close_gray_900.svg"
                          className="h-[24px] w-[24px]"
                          alt="close One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="overflow-auto absolute bottom-[0] inset-x-[0] mx-[auto] w-[86%]">
                    <ReactTable
                      columns={column}
                      data={tableData.current}
                      rowClass={"border-bw"}
                      headerClass="border-bw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
            <div className="border border-deep_purple_A200 border-solid flex flex-col md:gap-[40px] sm:gap-[40px] gap-[88px] items-center justify-start p-[20px] rounded-radius5 w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[28px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[14px] items-center justify-start mb-[12px] md:w-[100%] sm:w-[100%] w-[95%]">
                    <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                      <div className="bg-gradient2  flex md:w-[100%] p-[3px] relative rounded-radius29 sm:w-[100%] w-[43%] ">
                        <div className="bg-white_A700 border-solid flex md:h-[44px] sm:h-[44px] h-[58px] p-[7px] relative rounded-radius29 sm:w-[100%]">
                          <div className="bg-gradient2  h-[44px] my-[auto] rounded-radius22 w-[30%]"></div>
                          <div className="flex flex-row gap-[58px] items-start justify-between ml-[-112px] mr-[auto] my-[auto] w-[auto] z-[1]">
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body12"
                            >
                              Referral list
                            </Text>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Farms
                            </Text>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Pools
                            </Text>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Links
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body7"
                          >
                            Referral list
                          </Text>
                          <Text
                            className="font-medium mt-[3px] text-gray_600 text-left w-[auto]"
                            variant="body14"
                          >
                            List of all your referrals
                          </Text>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[11px] w-[auto]"
                          style={{
                            backgroundImage: "url('images/img_group4.svg')",
                          }}
                        >
                          <div className="flex flex-row gap-[6px] items-start justify-start pr-[4px] w-[auto]">
                            <Img
                              src="images/img_search.svg"
                              className="h-[24px] w-[24px]"
                              alt="search One"
                            />
                            <Text
                              className="font-medium text-gray_900_87 text-left w-[auto]"
                              variant="body12"
                            >
                              Search referrals
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-indigo_50 flex flex-col items-center justify-end p-[213px] sm:px-[20px] md:px-[40px] rounded-radius15 w-[100%]">
                      <div className="flex flex-col gap-[6px] items-center justify-start mt-[6px] md:w-[100%] sm:w-[100%] w-[15%]">
                        <Img
                          src="images/img_calendar_gray_601.svg"
                          className="h-[50px] w-[50px]"
                          alt="calendar"
                        />
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body12"
                        >
                          No referrals
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[28px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[10px] items-center justify-start mb-[12px] md:w-[100%] sm:w-[100%] w-[95%]">
                    <div className="bg-gradient2  flex md:w-[100%] p-[3px] relative rounded-radius29 sm:w-[100%] w-[43%] ">
                      <div className="bg-white_A700 border-solid flex md:h-[44px] sm:h-[44px] h-[58px] p-[7px] relative rounded-radius29 sm:w-[100%]">
                        <div className="bg-gradient2  h-[44px] my-[auto] rounded-radius22 w-[30%]"></div>
                        <div className="flex flex-row gap-[58px] items-start justify-between ml-[-112px] mr-[auto] my-[auto] w-[auto] z-[1]">
                          <Text
                            className="font-medium text-left text-white_A700 w-[auto]"
                            variant="body12"
                          >
                            Referral list
                          </Text>
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body12"
                          >
                            Farms
                          </Text>
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body12"
                          >
                            Pools
                          </Text>
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body12"
                          >
                            Links
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body7"
                          >
                            Referral list
                          </Text>
                          <Text
                            className="font-medium mt-[3px] text-gray_600 text-left w-[auto]"
                            variant="body14"
                          >
                            List of all your referrals
                          </Text>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[11px] w-[auto]"
                          style={{
                            backgroundImage: "url('images/img_group4.svg')",
                          }}
                        >
                          <div className="flex flex-row gap-[6px] items-start justify-start pr-[4px] w-[auto]">
                            <Img
                              src="images/img_search.svg"
                              className="h-[24px] w-[24px]"
                              alt="search Two"
                            />
                            <Text
                              className="font-medium text-gray_900_87 text-left w-[auto]"
                              variant="body12"
                            >
                              Search referrals
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between mt-[34px] md:w-[100%] sm:w-[100%] w-[92%]">
                        <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            Date
                          </Text>
                          <Img
                            src="images/img_arrowup_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowup"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[151px] sm:gap-[40px] items-start justify-between md:w-[100%] sm:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-gray_600 text-left w-[auto]"
                            variant="body14"
                          >
                            Wallet adress
                          </Text>
                          <Text
                            className="font-medium text-gray_600 text-left w-[auto]"
                            variant="body14"
                          >
                            Farm liquidity
                          </Text>
                          <Text
                            className="font-medium text-gray_600 text-left w-[auto]"
                            variant="body14"
                          >
                            Staked in pools
                          </Text>
                          <Text
                            className="font-medium text-gray_600 text-left w-[auto]"
                            variant="body14"
                          >
                            Total earned
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start mt-[10px] md:w-[100%] sm:w-[100%] w-[91%]">
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body9"
                        >
                          12/17/22
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[49px] text-gray_900 text-left w-[auto]"
                          variant="body9"
                        >
                          0x573282...
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[149px] text-gray_900 text-left w-[auto]"
                          variant="body9"
                        >
                          $52.78
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[196px] text-gray_900 text-left"
                          variant="body9"
                        >
                          <span className="text-gray_900 text-[18px] font-poppins">
                            46 SWPT
                            <br />
                          </span>
                          <span className="text-gray_600 text-[14px] font-poppins">
                            $36.54
                          </span>
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[182px] text-gray_900 text-left"
                          variant="body9"
                        >
                          <span className="text-gray_900 text-[18px] font-poppins">
                            46 SWPT
                            <br />
                          </span>
                          <span className="text-gray_600 text-[14px] font-poppins">
                            $36.54
                          </span>
                        </Text>
                      </div>
                      <div className="bg-teal_50 md:h-[311px] sm:h-[311px] h-[57px] mt-[7px] relative w-[100%]">
                        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] h-[100%] items-center justify-start m-[auto] w-[91%]">
                          <Text
                            className="font-medium text-gray_600 text-left w-[auto]"
                            variant="body9"
                          >
                            12/17/22
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[49px] text-gray_600 text-left w-[auto]"
                            variant="body9"
                          >
                            0x573282...
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[83px] text-gray_900 text-left w-[auto]"
                            variant="body9"
                          >
                            $52.78
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[131px] text-gray_900 text-left"
                            variant="body9"
                          >
                            <span className="text-gray_900 text-[18px] font-poppins">
                              46 SWPT
                              <br />
                            </span>
                            <span className="text-gray_600 text-[14px] font-poppins">
                              $36.54
                            </span>
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[116px] text-gray_900 text-left"
                            variant="body9"
                          >
                            <span className="text-gray_900 text-[18px] font-poppins">
                              46 SWPT
                              <br />
                            </span>
                            <span className="text-gray_600 text-[14px] font-poppins">
                              $36.54
                            </span>
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[119px] text-gray_900 text-left"
                            variant="body9"
                          >
                            <span className="text-gray_900 text-[18px] font-poppins">
                              46 SWPT
                              <br />
                            </span>
                            <span className="text-gray_600 text-[14px] font-poppins">
                              $36.54
                            </span>
                          </Text>
                        </div>
                        <div className="absolute bg-indigo_50 flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] p-[5px] w-[100%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[49px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[149px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[196px] text-gray_900 text-left"
                              variant="body9"
                            >
                              <span className="text-gray_900 text-[18px] font-poppins">
                                46 SWPT
                                <br />
                              </span>
                              <span className="text-gray_600 text-[14px] font-poppins">
                                $36.54
                              </span>
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[182px] text-gray_900 text-left"
                              variant="body9"
                            >
                              <span className="text-gray_900 text-[18px] font-poppins">
                                46 SWPT
                                <br />
                              </span>
                              <span className="text-gray_600 text-[14px] font-poppins">
                                $36.54
                              </span>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <List
                        className="flex-col gap-[1px] grid items-center w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-col items-center justify-start my-[0] p-[5px] w-[100%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[49px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[149px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[196px] text-gray_900 text-left"
                              variant="body9"
                            >
                              <span className="text-gray_900 text-[18px] font-poppins">
                                46 SWPT
                                <br />
                              </span>
                              <span className="text-gray_600 text-[14px] font-poppins">
                                $36.54
                              </span>
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[182px] text-gray_900 text-left"
                              variant="body9"
                            >
                              <span className="text-gray_900 text-[18px] font-poppins">
                                46 SWPT
                                <br />
                              </span>
                              <span className="text-gray_600 text-[14px] font-poppins">
                                $36.54
                              </span>
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo_50 flex flex-1 flex-col items-center justify-start my-[0] p-[5px] w-[100%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[49px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[149px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[196px] text-gray_900 text-left"
                              variant="body9"
                            >
                              <span className="text-gray_900 text-[18px] font-poppins">
                                46 SWPT
                                <br />
                              </span>
                              <span className="text-gray_600 text-[14px] font-poppins">
                                $36.54
                              </span>
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[182px] text-gray_900 text-left"
                              variant="body9"
                            >
                              <span className="text-gray_900 text-[18px] font-poppins">
                                46 SWPT
                                <br />
                              </span>
                              <span className="text-gray_600 text-[14px] font-poppins">
                                $36.54
                              </span>
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start my-[0] p-[5px] w-[100%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[49px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[149px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[196px] text-gray_900 text-left"
                              variant="body9"
                            >
                              <span className="text-gray_900 text-[18px] font-poppins">
                                46 SWPT
                                <br />
                              </span>
                              <span className="text-gray_600 text-[14px] font-poppins">
                                $36.54
                              </span>
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[182px] text-gray_900 text-left"
                              variant="body9"
                            >
                              <span className="text-gray_900 text-[18px] font-poppins">
                                46 SWPT
                                <br />
                              </span>
                              <span className="text-gray_600 text-[14px] font-poppins">
                                $36.54
                              </span>
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo_50 flex flex-1 flex-col items-center justify-start my-[0] p-[5px] w-[100%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[49px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[149px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[196px] text-gray_900 text-left"
                              variant="body9"
                            >
                              <span className="text-gray_900 text-[18px] font-poppins">
                                46 SWPT
                                <br />
                              </span>
                              <span className="text-gray_600 text-[14px] font-poppins">
                                $36.54
                              </span>
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[182px] text-gray_900 text-left"
                              variant="body9"
                            >
                              <span className="text-gray_900 text-[18px] font-poppins">
                                46 SWPT
                                <br />
                              </span>
                              <span className="text-gray_600 text-[14px] font-poppins">
                                $36.54
                              </span>
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start my-[0] p-[5px] w-[100%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[49px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[149px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[196px] text-gray_900 text-left"
                              variant="body9"
                            >
                              <span className="text-gray_900 text-[18px] font-poppins">
                                46 SWPT
                                <br />
                              </span>
                              <span className="text-gray_600 text-[14px] font-poppins">
                                $36.54
                              </span>
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[182px] text-gray_900 text-left"
                              variant="body9"
                            >
                              <span className="text-gray_900 text-[18px] font-poppins">
                                46 SWPT
                                <br />
                              </span>
                              <span className="text-gray_600 text-[14px] font-poppins">
                                $36.54
                              </span>
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo_50 flex flex-1 flex-col items-center justify-start my-[0] p-[5px] rounded-bl-[15px] rounded-br-[15px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[49px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[149px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[196px] text-gray_900 text-left"
                              variant="body9"
                            >
                              <span className="text-gray_900 text-[18px] font-poppins">
                                46 SWPT
                                <br />
                              </span>
                              <span className="text-gray_600 text-[14px] font-poppins">
                                $36.54
                              </span>
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[182px] text-gray_900 text-left"
                              variant="body9"
                            >
                              <span className="text-gray_900 text-[18px] font-poppins">
                                46 SWPT
                                <br />
                              </span>
                              <span className="text-gray_600 text-[14px] font-poppins">
                                $36.54
                              </span>
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="flex-col md:gap-[40px] sm:gap-[40px] gap-[88px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-[28px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[20px] items-center justify-start mb-[14px] md:w-[100%] sm:w-[100%] w-[95%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="bg-gradient2  md:w-[100%] p-[3px] relative rounded-radius29 sm:w-[100%] w-[43%] ">
                        <div className="bg-white_A700 border-solid md:h-[44px] sm:h-[44px] h-[58px] p-[7px] relative rounded-radius29 sm:w-[100%]">
                          <div className="absolute bg-gradient2  h-[44px] inset-y-[0] left-[34%] my-[auto] rounded-radius22 w-[22%]"></div>
                          <div className="absolute flex flex-row gap-[58px] h-[max-content] inset-[0] items-start justify-between m-[auto] w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Referral list
                            </Text>
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body12"
                            >
                              Farms
                            </Text>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Pools
                            </Text>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Links
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[12px] w-[100%]">
                        <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start md:mt-[0] sm:mt-[0] mt-[2px] md:w-[100%] sm:w-[100%] w-[23%]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body7"
                          >
                            Referral Farm rewards
                          </Text>
                          <Text
                            className="font-medium mt-[3px] text-gray_600 text-left w-[auto]"
                            variant="body14"
                          >
                            Rewards history for farming
                          </Text>
                        </div>
                        <div className="bg-indigo_50 flex md:flex-1 sm:flex-1 flex-row gap-[12px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[463px] md:mt-[0] sm:mt-[0] my-[7px] pr-[20px] rounded-radius16 md:w-[100%] sm:w-[100%] w-[15%]">
                          <Button
                            className="cursor-pointer font-medium leading-[normal] text-[14px] text-center text-white_A700 w-[68px]"
                            shape="RoundedBorder13"
                            size="4xl"
                            variant="GradientBlueA200DeeppurpleA700"
                          >
                            All
                          </Button>
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            Shared
                          </Text>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] p-[11px] md:w-[100%] sm:w-[100%] w-[20%]"
                          style={{
                            backgroundImage: "url('images/img_group4.svg')",
                          }}
                        >
                          <div className="flex flex-row gap-[6px] items-start justify-start pr-[4px] w-[auto]">
                            <Img
                              src="images/img_search.svg"
                              className="h-[24px] w-[24px]"
                              alt="search Three"
                            />
                            <Text
                              className="font-medium text-gray_900_87 text-left w-[auto]"
                              variant="body12"
                            >
                              Search referrals
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[34px] md:w-[100%] sm:w-[100%] w-[91%]">
                        <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            Date
                          </Text>
                          <Img
                            src="images/img_arrowup_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowup One"
                          />
                        </div>
                        <Text
                          className="font-medium mt-[2px] text-gray_600 text-left w-[auto]"
                          variant="body14"
                        >
                          Wallet adress
                        </Text>
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body14"
                        >
                          Referral earnings
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_600 text-left w-[auto]"
                          variant="body14"
                        >
                          My earnings
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[17px] items-center justify-start w-[100%]">
                        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[88%]">
                          <Text
                            className="font-medium text-gray_600 text-left w-[auto]"
                            variant="body9"
                          >
                            12/17/22
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[187px] text-gray_900 text-left w-[auto]"
                            variant="body9"
                          >
                            0x573282...
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[203px] text-gray_900 text-left w-[auto]"
                            variant="body9"
                          >
                            $52.78
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[248px] text-gray_900 text-left w-[auto]"
                            variant="body9"
                          >
                            $52.78
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                          <div className="bg-indigo_50 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[15px] w-[100%]">
                            <Text
                              className="font-medium sm:ml-[0] ml-[30px] text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[187px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[203px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[248px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                          </div>
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[88%]">
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[187px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[203px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[248px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                          </div>
                          <div className="bg-indigo_50 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[15px] w-[100%]">
                            <Text
                              className="font-medium sm:ml-[0] ml-[30px] text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[187px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[203px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[248px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                          </div>
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[88%]">
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[187px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[203px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[248px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                          </div>
                          <div className="bg-indigo_50 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[15px] w-[100%]">
                            <Text
                              className="font-medium sm:ml-[0] ml-[30px] text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[187px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[203px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[248px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                          </div>
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[88%]">
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[187px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[203px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[248px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                          </div>
                          <div className="bg-indigo_50 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[15px] rounded-bl-[15px] rounded-br-[15px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <Text
                              className="font-medium sm:ml-[0] ml-[30px] text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[187px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[203px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[248px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-[28px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[20px] items-center justify-start mb-[14px] md:w-[100%] sm:w-[100%] w-[95%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="bg-gradient2  md:w-[100%] p-[3px] relative rounded-radius29 sm:w-[100%] w-[43%] ">
                        <div className="bg-white_A700 border-solid md:h-[44px] sm:h-[44px] h-[58px] p-[7px] relative rounded-radius29 sm:w-[100%]">
                          <div className="absolute bg-gradient2  h-[44px] inset-y-[0] my-[auto] right-[22%] rounded-radius22 w-[20%]"></div>
                          <div className="absolute flex flex-row gap-[58px] h-[max-content] inset-[0] items-start justify-between m-[auto] w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Referral list
                            </Text>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Farms
                            </Text>
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body12"
                            >
                              Pools
                            </Text>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body12"
                            >
                              Links
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[12px] w-[100%]">
                        <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:mt-[0] sm:mt-[0] mt-[2px] md:w-[100%] sm:w-[100%] w-[23%]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body7"
                          >
                            Referral Pool rewards
                          </Text>
                          <Text
                            className="font-medium mt-[3px] text-gray_600 text-left w-[auto]"
                            variant="body14"
                          >
                            Rewards history for Pools usage
                          </Text>
                        </div>
                        <div className="bg-indigo_50 flex md:flex-1 sm:flex-1 flex-row gap-[12px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[469px] md:mt-[0] sm:mt-[0] my-[7px] pr-[20px] rounded-radius16 md:w-[100%] sm:w-[100%] w-[15%]">
                          <Button
                            className="cursor-pointer font-medium leading-[normal] text-[14px] text-center text-white_A700 w-[68px]"
                            shape="RoundedBorder13"
                            size="4xl"
                            variant="GradientBlueA200DeeppurpleA700"
                          >
                            All
                          </Button>
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            Shared
                          </Text>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] p-[11px] md:w-[100%] sm:w-[100%] w-[20%]"
                          style={{
                            backgroundImage: "url('images/img_group4.svg')",
                          }}
                        >
                          <div className="flex flex-row gap-[6px] items-start justify-start pr-[4px] w-[auto]">
                            <Img
                              src="images/img_search.svg"
                              className="h-[24px] w-[24px]"
                              alt="search Four"
                            />
                            <Text
                              className="font-medium text-gray_900_87 text-left w-[auto]"
                              variant="body12"
                            >
                              Search referrals
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[34px] md:w-[100%] sm:w-[100%] w-[91%]">
                        <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            Date
                          </Text>
                          <Img
                            src="images/img_arrowup_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowup Two"
                          />
                        </div>
                        <Text
                          className="font-medium mt-[2px] text-gray_600 text-left w-[auto]"
                          variant="body14"
                        >
                          Wallet adress
                        </Text>
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body14"
                        >
                          Referral earnings
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_600 text-left w-[auto]"
                          variant="body14"
                        >
                          My earnings
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[17px] items-center justify-start w-[100%]">
                        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[88%]">
                          <Text
                            className="font-medium text-gray_600 text-left w-[auto]"
                            variant="body9"
                          >
                            12/17/22
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[187px] text-gray_900 text-left w-[auto]"
                            variant="body9"
                          >
                            0x573282...
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[203px] text-gray_900 text-left w-[auto]"
                            variant="body9"
                          >
                            $52.78
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] sm:ml-[0] ml-[248px] text-gray_900 text-left w-[auto]"
                            variant="body9"
                          >
                            $52.78
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                          <div className="bg-indigo_50 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[15px] w-[100%]">
                            <Text
                              className="font-medium sm:ml-[0] ml-[30px] text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[187px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[203px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[248px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                          </div>
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[88%]">
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[187px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[203px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[248px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                          </div>
                          <div className="bg-indigo_50 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[15px] w-[100%]">
                            <Text
                              className="font-medium sm:ml-[0] ml-[30px] text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[187px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[203px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[248px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                          </div>
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[88%]">
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[187px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[203px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[248px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                          </div>
                          <div className="bg-indigo_50 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[15px] w-[100%]">
                            <Text
                              className="font-medium sm:ml-[0] ml-[30px] text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[187px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[203px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[248px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                          </div>
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[88%]">
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[187px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[203px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] sm:ml-[0] ml-[248px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                          </div>
                          <div className="bg-indigo_50 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[15px] rounded-bl-[15px] rounded-br-[15px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <Text
                              className="font-medium sm:ml-[0] ml-[30px] text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              12/17/22
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[187px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              0x573282...
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[203px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                            <Text
                              className="font-medium sm:ml-[0] ml-[248px] text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              $52.78
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[28px] sm:px-[20px] rounded-radius20 shadow-bs2 w-[100%]">
                  <div className="flex flex-col gap-[10px] items-center justify-start mb-[356px] md:w-[100%] sm:w-[100%] w-[95%]">
                    <div className="bg-gradient2  md:w-[100%] p-[3px] relative rounded-radius29 sm:w-[100%] w-[43%] ">
                      <div className="bg-white_A700 border-solid md:h-[44px] sm:h-[44px] h-[58px] p-[7px] relative rounded-radius29 sm:w-[100%]">
                        <div className="absolute bg-gradient2  h-[44px] inset-y-[0] my-[auto] right-[12%] rounded-radius22 w-[17%]"></div>
                        <div className="absolute flex flex-row gap-[58px] h-[max-content] inset-[0] items-start justify-between m-[auto] w-[auto]">
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body12"
                          >
                            Referral list
                          </Text>
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body12"
                          >
                            Farms
                          </Text>
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body12"
                          >
                            Pools
                          </Text>
                          <Text
                            className="font-medium text-left text-white_A700 w-[auto]"
                            variant="body12"
                          >
                            Links
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                        <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            variant="body7"
                          >
                            Referral list
                          </Text>
                          <Text
                            className="font-medium mt-[3px] text-gray_600 text-left w-[auto]"
                            variant="body14"
                          >
                            List of all your referrals
                          </Text>
                        </div>
                        <div className="bg-indigo_50 flex md:flex-1 sm:flex-1 flex-row gap-[12px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[535px] md:mt-[0] sm:mt-[0] my-[8px] pr-[20px] rounded-radius16 md:w-[100%] sm:w-[100%] w-[15%]">
                          <Button
                            className="cursor-pointer font-medium leading-[normal] text-[14px] text-center text-white_A700 w-[68px]"
                            shape="RoundedBorder13"
                            size="4xl"
                            variant="GradientBlueA200DeeppurpleA700"
                          >
                            All
                          </Button>
                          <Text
                            className="font-medium text-gray_900 text-left w-[auto]"
                            variant="body14"
                          >
                            Shared
                          </Text>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] p-[11px] md:w-[100%] sm:w-[100%] w-[20%]"
                          style={{
                            backgroundImage: "url('images/img_group4.svg')",
                          }}
                        >
                          <div className="flex flex-row gap-[6px] items-start justify-start pr-[4px] w-[auto]">
                            <Img
                              src="images/img_search.svg"
                              className="h-[24px] w-[24px]"
                              alt="search Five"
                            />
                            <Text
                              className="font-medium text-gray_900_87 text-left w-[auto]"
                              variant="body12"
                            >
                              Search referrals
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:h-[369px] sm:h-[369px] h-[68px] justify-end mt-[34px] relative md:w-[100%] sm:w-[100%] w-[90%]">
                        <Img
                          src="images/img_videocamera.svg"
                          className="h-[16px] mb-[5px] ml-[138px] mt-[auto] w-[16px]"
                          alt="videocamera Two"
                        />
                        <div className="absolute flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] h-[max-content] inset-[0] items-start justify-center m-[auto] w-[100%]">
                          <div className="flex flex-col font-poppins gap-[20px] items-start justify-start w-[auto]">
                            <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                              <Text
                                className="font-medium text-gray_900 text-left w-[auto]"
                                variant="body14"
                              >
                                Referral link
                              </Text>
                              <Img
                                src="images/img_arrowup_gray_900.svg"
                                className="h-[16px] w-[16px]"
                                alt="arrowup Three"
                              />
                            </div>
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body9"
                            >
                              https:...ref0567
                            </Text>
                          </div>
                          <div className="flex flex-col font-poppins gap-[20px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[81px] w-[auto]">
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body14"
                            >
                              Interest rate
                            </Text>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              100% / 0%
                            </Text>
                          </div>
                          <div className="flex flex-col font-poppins gap-[20px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[91px] w-[auto]">
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body14"
                            >
                              Referrals
                            </Text>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              7
                            </Text>
                          </div>
                          <div className="flex flex-col font-poppins gap-[20px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[122px] w-[auto]">
                            <Text
                              className="font-medium text-gray_600 text-left w-[auto]"
                              variant="body14"
                            >
                              Note
                            </Text>
                            <Text
                              className="font-medium text-gray_900 text-left w-[auto]"
                              variant="body9"
                            >
                              My youtube subscribers
                            </Text>
                          </div>
                          <Text
                            className="bg-green_A700 font-bold font-inter justify-center mb-[3px] md:ml-[0] sm:ml-[0] ml-[82px] md:mt-[0] sm:mt-[0] mt-[42px] px-[10px] py-[3px] rounded-radius11 text-left text-white_A700 w-[auto]"
                            variant="body14"
                          >
                            Default
                          </Text>
                        </div>
                      </div>
                      <div className="bg-indigo_50 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start mt-[17px] p-[15px] w-[100%]">
                        <Text
                          className="font-medium font-poppins md:ml-[0] sm:ml-[0] ml-[30px] text-gray_600 text-left w-[auto]"
                          variant="body9"
                        >
                          https:...ref0567
                        </Text>
                        <Img
                          src="images/img_videocamera.svg"
                          className="h-[16px] md:ml-[0] sm:ml-[0] ml-[5px] w-[16px]"
                          alt="videocamera Three"
                        />
                        <Text
                          className="font-medium font-poppins md:ml-[0] sm:ml-[0] ml-[60px] text-gray_900 text-left w-[auto]"
                          variant="body9"
                        >
                          75% / 20%
                        </Text>
                        <Text
                          className="font-medium font-poppins md:ml-[0] sm:ml-[0] ml-[89px] text-gray_900 text-left w-[auto]"
                          variant="body9"
                        >
                          4
                        </Text>
                        <Text
                          className="font-medium font-poppins md:ml-[0] sm:ml-[0] ml-[173px] text-gray_600 text-left w-[auto]"
                          variant="body9"
                        >
                          -
                        </Text>
                        <Text
                          className="font-bold font-inter md:ml-[0] sm:ml-[0] ml-[264px] text-blue_A201 text-left w-[auto]"
                          variant="body14"
                        >
                          Set as default{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UikitreferralpagePage;
