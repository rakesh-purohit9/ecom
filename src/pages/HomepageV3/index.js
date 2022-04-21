import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { Grid } from "components/Grid";
import { List } from "components/List";
import { RatingBar } from "components/RatingBar";

const HomepageV3Page = () => {
  return (
    <Column className="bg-white_A700 font-poppins items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center justify-start self-stretch w-[100%]">
        <Column className="font-poppins items-center justify-start self-stretch w-[100%]">
          <Row className="bg-white_A700 items-center justify-start self-stretch w-[100%]">
            <Row className="2xl:mb-[26px] 2xl:ml-[108px] 2xl:mt-[25px] 3xl:mb-[31px] 3xl:ml-[129px] 3xl:mt-[30px] items-center justify-center lg:mb-[20px] lg:ml-[84px] lg:mt-[19px] mb-[35px] ml-[144px] mt-[34px] w-[28%] xl:mb-[23px] xl:ml-[96px] xl:mt-[22px]">
              <Text className="2xl:text-fs13 3xl:text-fs16 font-normal lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`Categories`}</Text>
              <Text className="2xl:ml-[42px] 2xl:text-fs13 3xl:ml-[50px] 3xl:text-fs16 font-normal lg:ml-[32px] lg:text-fs10 ml-[56px] text-fs18 text-gray_800 text-left xl:ml-[37px] xl:text-fs12">{`New Arrival`}</Text>
              <Text className="2xl:ml-[42px] 2xl:text-fs13 3xl:ml-[50px] 3xl:text-fs16 font-normal lg:ml-[32px] lg:text-fs10 ml-[56px] text-fs18 text-gray_800 text-left xl:ml-[37px] xl:text-fs12">{`Features`}</Text>
              <Text className="2xl:ml-[42px] 2xl:text-fs13 3xl:ml-[50px] 3xl:text-fs16 font-normal lg:ml-[32px] lg:text-fs10 ml-[56px] text-fs18 text-gray_800 text-left xl:ml-[37px] xl:text-fs12">{`Collections`}</Text>
            </Row>
            <Image
              src="img_group19.svg"
              className="2xl:h-[19px] 2xl:ml-[159px] 2xl:my-[27px] 3xl:h-[22px] 3xl:ml-[191px] 3xl:my-[32px] h-[24px] lg:h-[14px] lg:ml-[124px] lg:my-[21px] ml-[213px] my-[36px] object-contain w-[2%] xl:h-[17px] xl:ml-[142px] xl:my-[24px]"
              alt="Group19"
            />
            <Text className="2xl:ml-[6px] 2xl:my-[22px] 2xl:text-fs18 3xl:ml-[7px] 3xl:my-[27px] 3xl:text-fs21 font-bold lg:ml-[4px] lg:my-[17px] lg:text-fs14 ml-[8px] my-[30px] text-fs24 text-gray_800 text-left xl:ml-[5px] xl:my-[20px] xl:text-fs16">{`Elliye`}</Text>
            <Image
              src="img_icon_6.svg"
              className="2xl:h-[19px] 2xl:ml-[444px] 2xl:mr-[108px] 2xl:my-[27px] 3xl:h-[22px] 3xl:ml-[533px] 3xl:mr-[129px] 3xl:my-[32px] h-[24px] lg:h-[14px] lg:ml-[345px] lg:mr-[84px] lg:my-[21px] ml-[592px] mr-[144px] my-[36px] object-contain w-[9%] xl:h-[17px] xl:ml-[394px] xl:mr-[96px] xl:my-[24px]"
              alt="icon"
            />
          </Row>
          <Line className="bg-gray_100 h-[1px] mx-[auto] w-[85%]" />
        </Column>
        <Row className="2xl:gap-[18px] 2xl:pl-[242px] 2xl:pr-[244px] 3xl:gap-[21px] 3xl:pl-[290px] 3xl:pr-[293px] bg-white_A700 gap-[24px] grid grid-cols-9 items-center justify-center lg:gap-[14px] lg:pl-[188px] lg:pr-[189px] pl-[322.5px] pr-[325.5px] self-stretch w-[100%] xl:gap-[16px] xl:pl-[215px] xl:pr-[217px]">
          <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
            <Image
              src="img_sweater_2.svg"
              className="2xl:h-[37px] 2xl:mt-[13px] 2xl:w-[36px] 3xl:h-[44px] 3xl:mt-[16px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:mt-[10px] lg:w-[28px] mt-[18px] mx-[auto] object-contain w-[48px] xl:h-[33px] xl:mt-[12px] xl:w-[32px]"
              alt="Sweater"
            />
            <Text className="2xl:mb-[14px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[17px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[11px] lg:mt-[4px] lg:text-fs10 mb-[19px] mt-[8px] mx-[auto] text-bluegray_100 text-fs18 text-left xl:mb-[12px] xl:mt-[5px] xl:text-fs12">{`Jacket`}</Text>
          </Column>
          <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
            <Image
              src="img_tshirt_2.svg"
              className="2xl:h-[37px] 2xl:mt-[13px] 2xl:w-[36px] 3xl:h-[44px] 3xl:mt-[16px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:mt-[10px] lg:w-[28px] mt-[18px] mx-[auto] object-contain w-[48px] xl:h-[33px] xl:mt-[12px] xl:w-[32px]"
              alt="Tshirt"
            />
            <Text className="2xl:mb-[14px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[17px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[11px] lg:mt-[4px] lg:text-fs10 mb-[19px] mt-[8px] mx-[auto] text-bluegray_100 text-fs18 text-left xl:mb-[12px] xl:mt-[5px] xl:text-fs12">{`Shirt`}</Text>
          </Column>
          <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
            <Image
              src="img_pants_2.svg"
              className="2xl:h-[37px] 2xl:mt-[13px] 2xl:w-[36px] 3xl:h-[44px] 3xl:mt-[16px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:mt-[10px] lg:w-[28px] mt-[18px] mx-[auto] object-contain w-[48px] xl:h-[33px] xl:mt-[12px] xl:w-[32px]"
              alt="Pants"
            />
            <Text className="2xl:mb-[14px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[17px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[11px] lg:mt-[4px] lg:text-fs10 mb-[19px] mt-[8px] mx-[auto] text-bluegray_100 text-fs18 text-left xl:mb-[12px] xl:mt-[5px] xl:text-fs12">{`Pants`}</Text>
          </Column>
          <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
            <Image
              src="img_boot_2.svg"
              className="2xl:h-[37px] 2xl:mt-[13px] 2xl:w-[36px] 3xl:h-[44px] 3xl:mt-[16px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:mt-[10px] lg:w-[28px] mt-[18px] mx-[auto] object-contain w-[48px] xl:h-[33px] xl:mt-[12px] xl:w-[32px]"
              alt="Boot"
            />
            <Text className="2xl:mb-[14px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[17px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[11px] lg:mt-[4px] lg:text-fs10 mb-[19px] mt-[8px] mx-[auto] text-fs18 text-gray_800 text-left xl:mb-[12px] xl:mt-[5px] xl:text-fs12">{`Shoes`}</Text>
          </Column>
          <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
            <Image
              src="img_dress_2.svg"
              className="2xl:h-[37px] 2xl:mt-[13px] 2xl:w-[36px] 3xl:h-[44px] 3xl:mt-[16px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:mt-[10px] lg:w-[28px] mt-[18px] mx-[auto] object-contain w-[48px] xl:h-[33px] xl:mt-[12px] xl:w-[32px]"
              alt="Dress"
            />
            <Text className="2xl:mb-[14px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[17px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[11px] lg:mt-[4px] lg:text-fs10 mb-[19px] mt-[8px] mx-[auto] text-bluegray_100 text-fs18 text-left xl:mb-[12px] xl:mt-[5px] xl:text-fs12">{`Dress`}</Text>
          </Column>
          <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
            <Image
              src="img_belt_2.svg"
              className="2xl:h-[37px] 2xl:mt-[13px] 2xl:w-[36px] 3xl:h-[44px] 3xl:mt-[16px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:mt-[10px] lg:w-[28px] mt-[18px] mx-[auto] object-contain w-[48px] xl:h-[33px] xl:mt-[12px] xl:w-[32px]"
              alt="Belt"
            />
            <Text className="2xl:mb-[14px] 2xl:mt-[6px] 2xl:mx-[8px] 2xl:text-fs13 3xl:mb-[17px] 3xl:mt-[7px] 3xl:mx-[9px] 3xl:text-fs16 font-normal lg:mb-[11px] lg:mt-[4px] lg:mx-[6px] lg:text-fs10 mb-[19px] mt-[8px] mx-[11px] text-bluegray_100 text-fs18 text-left xl:mb-[12px] xl:mt-[5px] xl:mx-[7px] xl:text-fs12">{`Accesories`}</Text>
          </Column>
          <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
            <Image
              src="img_skirt.svg"
              className="2xl:h-[37px] 2xl:mt-[13px] 2xl:w-[36px] 3xl:h-[44px] 3xl:mt-[16px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:mt-[10px] lg:w-[28px] mt-[18px] mx-[auto] object-contain w-[48px] xl:h-[33px] xl:mt-[12px] xl:w-[32px]"
              alt="Skirt"
            />
            <Text className="2xl:mb-[14px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[17px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[11px] lg:mt-[4px] lg:text-fs10 mb-[19px] mt-[8px] mx-[auto] text-bluegray_100 text-fs18 text-left xl:mb-[12px] xl:mt-[5px] xl:text-fs12">{`Skirt`}</Text>
          </Column>
          <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
            <Image
              src="img_bra.svg"
              className="2xl:h-[37px] 2xl:mt-[13px] 2xl:w-[36px] 3xl:h-[44px] 3xl:mt-[16px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:mt-[10px] lg:w-[28px] mt-[18px] mx-[auto] object-contain w-[48px] xl:h-[33px] xl:mt-[12px] xl:w-[32px]"
              alt="Bra"
            />
            <Text className="2xl:mb-[14px] 2xl:ml-[8px] 2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[17px] 3xl:mt-[7px] 3xl:mx-[9px] 3xl:text-fs16 font-normal lg:mb-[11px] lg:ml-[6px] lg:mr-[5px] lg:mt-[4px] lg:text-fs10 mb-[19px] ml-[11px] mr-[10px] mt-[8px] text-bluegray_100 text-fs18 text-left xl:mb-[12px] xl:ml-[7px] xl:mr-[6px] xl:mt-[5px] xl:text-fs12">{`Underwear`}</Text>
          </Column>
          <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
            <Image
              src="img_dot.svg"
              className="2xl:h-[37px] 2xl:mt-[13px] 2xl:w-[36px] 3xl:h-[44px] 3xl:mt-[16px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:mt-[10px] lg:w-[28px] mt-[18px] mx-[auto] object-contain w-[48px] xl:h-[33px] xl:mt-[12px] xl:w-[32px]"
              alt="Dot"
            />
            <Text className="2xl:mb-[14px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[17px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[11px] lg:mt-[4px] lg:text-fs10 mb-[19px] mt-[8px] mx-[auto] text-bluegray_100 text-fs18 text-left xl:mb-[12px] xl:mt-[5px] xl:text-fs12">{`More`}</Text>
          </Column>
        </Row>
      </Column>
      <Stack className="2xl:h-[539px] 3xl:h-[647px] h-[718px] lg:h-[419px] self-stretch w-[100%] xl:h-[480px]">
        <Image
          src="img_placeholder_35.png"
          className="2xl:h-[539px] 3xl:h-[647px] absolute h-[718px] inset-[0] lg:h-[419px] object-cover self-stretch w-[100%] xl:h-[480px]"
          alt="placeholder"
        />
        <Column className="absolute bg-white_A700_82 font-poppins inset-[0] justify-center self-stretch w-[100%]">
          <Button className="2xl:mt-[117px] 2xl:mx-[212px] 2xl:px-[7px] 2xl:py-[9px] 2xl:text-fs18 3xl:mt-[141px] 3xl:mx-[254px] 3xl:px-[9px] 3xl:py-[10px] 3xl:text-fs21 bg-white_A700 border-bw font-medium font-poppins lg:mt-[91px] lg:mx-[165px] lg:px-[5px] lg:py-[7px] lg:text-fs14 mt-[157px] mx-[283px] px-[10px] py-[12.06px] text-center text-fs24 text-gray_800 w-[14%] xl:mt-[104px] xl:mx-[188px] xl:px-[6px] xl:py-[8px] xl:text-fs16">{`50% Off Limited Offer`}</Button>
          <Text className="2xl:mt-[24px] 2xl:mx-[212px] 2xl:text-fs54 3xl:mt-[28px] 3xl:mx-[254px] 3xl:text-fs64 font-bold font-playfairdisplay lg:mt-[18px] lg:mx-[165px] lg:text-fs42 mt-[32px] mx-[283px] text-fs72 text-gray_800 text-left xl:mt-[21px] xl:mx-[188px] xl:text-fs48">{`Summer Collection`}</Text>
          <Text className="2xl:leading-lh24 2xl:mt-[30px] 2xl:mx-[212px] 2xl:text-fs13 3xl:leading-lh28 3xl:mt-[36px] 3xl:mx-[254px] 3xl:text-fs16 font-normal font-poppins leading-lh3200 lg:leading-lh18 lg:mt-[23px] lg:mx-[165px] lg:text-fs10 mt-[40px] mx-[283px] text-fs18 text-gray_800 text-left w-[35%] xl:leading-lh21 xl:mt-[26px] xl:mx-[188px] xl:text-fs12">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
          <Row className="2xl:mb-[117px] 2xl:mt-[60px] 2xl:mx-[212px] 3xl:mb-[141px] 3xl:mt-[72px] 3xl:mx-[254px] bg-gray_800 font-poppins items-center justify-start lg:mb-[91px] lg:mt-[46px] lg:mx-[165px] mb-[157px] mt-[80px] mx-[283px] w-[13%] xl:mb-[104px] xl:mt-[53px] xl:mx-[188px]">
            <Text className="2xl:ml-[24px] 2xl:my-[9px] 2xl:text-fs18 3xl:ml-[29px] 3xl:my-[10px] 3xl:text-fs21 font-medium lg:ml-[19px] lg:my-[7px] lg:text-fs14 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[22px] xl:my-[8px] xl:text-fs16">{`Shop Now`}</Text>
            <Image
              src="img_arrow_6.svg"
              className="2xl:h-[37px] 2xl:ml-[7px] 2xl:mr-[24px] 2xl:my-[4px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[9px] 3xl:mr-[29px] 3xl:my-[5px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[5px] lg:mr-[19px] lg:my-[3px] lg:w-[28px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[33px] xl:ml-[6px] xl:mr-[22px] xl:my-[4px] xl:w-[32px]"
              alt="Arrow"
            />
          </Row>
        </Column>
      </Stack>
      <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center justify-start lg:mt-[18px] mt-[32px] mx-[auto] w-[85%] xl:mt-[21px]">
        <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
          <Text className="2xl:text-fs27 3xl:text-fs32 font-bold lg:text-fs21 text-fs36 text-gray_800 text-left xl:text-fs24">{`Featured`}</Text>
          <Row className="2xl:mb-[9px] 2xl:mt-[8px] 3xl:mb-[10px] 3xl:mt-[9px] font-poppins items-center justify-between lg:mb-[7px] lg:mt-[6px] mb-[12px] mt-[11px] px-[0] w-[7%] xl:mb-[8px] xl:mt-[7px]">
            <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 my-[1px] text-fs18 text-gray_800 text-left xl:text-fs12">{`View all`}</Text>
            <Image
              src="img_arrow_7.svg"
              className="2xl:h-[24px] 3xl:h-[28px] h-[31px] lg:h-[19px] object-contain w-[29%] xl:h-[21px]"
              alt="Arrow"
            />
          </Row>
        </Row>
        <Row className="2xl:mt-[24px] 3xl:mt-[28px] items-center justify-between lg:mt-[18px] mt-[32px] px-[0] self-stretch w-[100%] xl:mt-[21px]">
          <Grid className="2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 lg:gap-[18px] w-[32%] xl:gap-[21px]">
            <Column className="items-center justify-start w-[100%]">
              <Image
                src="img_rectangle39_7.png"
                className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                alt="Rectangle39"
              />
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[66%] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                  {
                    <>
                      {`Green `}
                      <br />
                      {`Warm Jacket`}
                    </>
                  }
                </Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Image
                src="img_rectangle39_8.png"
                className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                alt="Rectangle39"
              />
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[66%] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                  {
                    <>
                      {`Black`}
                      <br />
                      {`Warm Jacket`}
                    </>
                  }
                </Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Image
                src="img_placeholder_36.png"
                className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                alt="placeholder"
              />
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[66%] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                  {
                    <>
                      {`Black `}
                      <br />
                      {`Warm Jacket`}
                    </>
                  }
                </Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Image
                src="img_placeholder_37.png"
                className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                alt="placeholder"
              />
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[50%] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                  {
                    <>
                      {`Black`}
                      <br />
                      {`Brief Case`}
                    </>
                  }
                </Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
          </Grid>
          <Column className="bg-gray_100 font-poppins items-center justify-start w-[32%]">
            <Image
              src="img_placeholder_38.png"
              className="2xl:h-[301px] 3xl:h-[361px] h-[400px] lg:h-[234px] object-cover self-stretch w-[100%] xl:h-[267px]"
              alt="placeholder"
            />
            <Text className="2xl:mt-[20px] 2xl:text-fs27 3xl:mt-[24px] 3xl:text-fs32 font-medium leading-lh lg:mt-[15px] lg:text-fs21 mt-[27px] mx-[auto] text-center text-fs36 text-gray_800 w-[55%] xl:mt-[18px] xl:text-fs24">
              {
                <>
                  {`Brown `}
                  <br />
                  {`Casual Sneaker`}
                </>
              }
            </Text>
            <Text className="2xl:mt-[12px] 2xl:text-fs27 3xl:mt-[14px] 3xl:text-fs32 font-medium lg:mt-[9px] lg:text-fs21 mt-[16px] mx-[auto] text-fs36 text-gray_500 text-left xl:mt-[10px] xl:text-fs24">{`$299`}</Text>
            <Button className="2xl:mb-[41px] 2xl:mt-[36px] 2xl:px-[26px] 2xl:py-[13px] 2xl:text-fs13 3xl:mb-[49px] 3xl:mt-[43px] 3xl:px-[31px] 3xl:py-[16px] 3xl:text-fs16 bg-gray_800 border-bw font-bold lg:mb-[32px] lg:mt-[28px] lg:px-[20px] lg:py-[10px] lg:text-fs10 mb-[55px] mt-[48px] mx-[auto] px-[35px] py-[18.045px] text-center text-fs18 text-white_A700 w-[38%] xl:mb-[36px] xl:mt-[32px] xl:px-[23px] xl:py-[12px] xl:text-fs12">{`Add to Cart`}</Button>
          </Column>
          <Grid className="2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 lg:gap-[18px] w-[32%] xl:gap-[21px]">
            <Column className="items-center justify-start w-[100%]">
              <Image
                src="img_rectangle39_9.png"
                className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                alt="Rectangle39"
              />
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[66%] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                  {
                    <>
                      {`Blue Grey `}
                      <br />
                      {`Warm Jacket`}
                    </>
                  }
                </Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Image
                src="img_rectangle39_10.png"
                className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                alt="Rectangle39"
              />
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[58%] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                  {
                    <>
                      {`Blue Denim `}
                      <br />
                      {`Jacket`}
                    </>
                  }
                </Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="justify-start w-[100%]">
              <Column className="items-center self-stretch w-[100%]">
                <Image
                  src="img_placeholder_39.png"
                  className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                  alt="placeholder"
                />
              </Column>
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] items-end lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px]">
                <Column className="2xl:mx-[12px] 3xl:mx-[14px] font-poppins items-center justify-start lg:mx-[9px] mx-[16px] w-[76%] xl:mx-[10px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                    {
                      <>
                        {`Modern Classic`}
                        <br />
                        {`Watch`}
                      </>
                    }
                  </Text>
                  <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                </Column>
              </Column>
            </Column>
            <Column className="justify-start w-[100%]">
              <Column className="items-center self-stretch w-[100%]">
                <Image
                  src="img_placeholder_40.png"
                  className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                  alt="placeholder"
                />
              </Column>
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] items-end lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px]">
                <Column className="2xl:mx-[22px] 3xl:mx-[27px] font-poppins items-center justify-start lg:mx-[17px] mx-[30px] w-[71%] xl:mx-[20px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                    {
                      <>
                        {`Casual `}
                        <br />
                        {`Classic Watch`}
                      </>
                    }
                  </Text>
                  <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                </Column>
              </Column>
            </Column>
          </Grid>
        </Row>
      </Column>
      <Stack className="2xl:h-[320px] 2xl:mt-[75px] 3xl:h-[384px] 3xl:mt-[90px] h-[426px] lg:h-[249px] lg:mt-[58px] mt-[100px] mx-[auto] w-[85%] xl:h-[285px] xl:mt-[66px]">
        <Column className="2xl:left-[24px] 2xl:top-[24px] 3xl:left-[28px] 3xl:top-[28px] absolute font-poppins justify-start left-[32px] lg:left-[18px] lg:top-[18px] top-[32px] w-[13%] xl:left-[21px] xl:top-[21px]">
          <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`New Arrival`}</Text>
          <Text className="2xl:leading-lh24 2xl:mt-[12px] 2xl:text-fs13 3xl:leading-lh28 3xl:mt-[14px] 3xl:text-fs16 font-normal leading-lh3200 lg:leading-lh18 lg:mt-[9px] lg:text-fs10 mt-[16px] self-stretch text-fs18 text-left text-white_A700 w-[100%] xl:leading-lh21 xl:mt-[10px] xl:text-fs12">{`Lorem ipsum dolor sit amet consectetur.`}</Text>
        </Column>
        <Stack className="2xl:h-[320px] 3xl:h-[384px] absolute h-[426px] inset-[0] lg:h-[249px] self-stretch w-[100%] xl:h-[285px]">
          <div className="2xl:h-[320px] 3xl:h-[384px] absolute bg-gray_800 h-[426px] left-[0] lg:h-[249px] w-[24%] xl:h-[285px]"></div>
          <List
            className="2xl:gap-[19px] 3xl:gap-[23px] absolute flex-wrap gap-[26.570007px] grid grid-cols-4 inset-y-[0] lg:gap-[15px] min-h-[auto] my-[auto] right-[0] w-[83%] xl:gap-[17px]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 font-poppins items-center justify-center shadow-bs2 w-[100%]">
              <Image
                src="img_blackbusiness.png"
                className="2xl:h-[151px] 2xl:mt-[28px] 2xl:w-[150px] 3xl:h-[181px] 3xl:mt-[33px] 3xl:w-[180px] h-[200px] lg:h-[117px] lg:mt-[21px] lg:w-[116px] mt-[37.5px] mx-[auto] object-contain w-[200px] xl:h-[134px] xl:mt-[25px] xl:w-[133px]"
                alt="blackbusiness"
              />
              <Text className="2xl:mt-[12px] 2xl:text-fs18 3xl:mt-[14px] 3xl:text-fs21 font-medium lg:mt-[9px] lg:text-fs14 mt-[16px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[10px] xl:text-fs16">{`Black Briefcase`}</Text>
              <Text className="2xl:mb-[28px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[33px] 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mb-[21px] lg:mt-[4px] lg:text-fs10 mb-[37.5px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[25px] xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
            </Column>
            <Column className="bg-white_A700 font-poppins items-center justify-center shadow-bs2 w-[100%]">
              <Image
                src="img_pink3tz3pbb1.png"
                className="2xl:h-[151px] 2xl:mt-[28px] 2xl:w-[150px] 3xl:h-[181px] 3xl:mt-[33px] 3xl:w-[180px] h-[200px] lg:h-[117px] lg:mt-[21px] lg:w-[116px] mt-[37.5px] mx-[auto] object-contain w-[200px] xl:h-[134px] xl:mt-[25px] xl:w-[133px]"
                alt="pink3TZ3PBB1"
              />
              <Text className="2xl:mt-[12px] 2xl:text-fs18 3xl:mt-[14px] 3xl:text-fs21 font-medium lg:mt-[9px] lg:text-fs14 mt-[16px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[10px] xl:text-fs16">{`Pink Shirt`}</Text>
              <Text className="2xl:mb-[28px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[33px] 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mb-[21px] lg:mt-[4px] lg:text-fs10 mb-[37.5px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[25px] xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
            </Column>
            <Column className="bg-white_A700 font-poppins items-center justify-center mb-[1px] shadow-bs2 w-[100%]">
              <Image
                src="img_graytshirtis.png"
                className="2xl:h-[151px] 2xl:mt-[27px] 2xl:w-[150px] 3xl:h-[181px] 3xl:mt-[33px] 3xl:w-[180px] h-[200px] lg:h-[117px] lg:mt-[21px] lg:w-[116px] mt-[37.140015px] mx-[auto] object-contain w-[200px] xl:h-[134px] xl:mt-[24px] xl:w-[133px]"
                alt="graytshirtis"
              />
              <Text className="2xl:mt-[12px] 2xl:text-fs18 3xl:mt-[14px] 3xl:text-fs21 font-medium lg:mt-[9px] lg:text-fs14 mt-[15.999756px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[10px] xl:text-fs16">{`Gray T-shirt`}</Text>
              <Text className="2xl:mb-[27px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[33px] 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mb-[21px] lg:mt-[4px] lg:text-fs10 mb-[37.140137px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[24px] xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
            </Column>
            <Column className="bg-white_A700 font-poppins items-center justify-center mt-[1px] shadow-bs2 w-[100%]">
              <Image
                src="img_redcheckereds.png"
                className="2xl:h-[151px] 2xl:mt-[27px] 2xl:w-[150px] 3xl:h-[181px] 3xl:mt-[33px] 3xl:w-[180px] h-[200px] lg:h-[117px] lg:mt-[21px] lg:w-[116px] mt-[37.140015px] mx-[auto] object-contain w-[200px] xl:h-[134px] xl:mt-[24px] xl:w-[133px]"
                alt="redcheckereds"
              />
              <Text className="2xl:mt-[12px] 2xl:text-fs18 3xl:mt-[14px] 3xl:text-fs21 font-medium lg:mt-[9px] lg:text-fs14 mt-[16.000244px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[10px] xl:text-fs16">{`Red Flannel`}</Text>
              <Text className="2xl:mb-[27px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[33px] 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mb-[21px] lg:mt-[4px] lg:text-fs10 mb-[37.139893px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[24px] xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </List>
        </Stack>
      </Stack>
      <Row className="2xl:mt-[75px] 3xl:mt-[90px] items-center justify-start lg:mt-[58px] mt-[100px] mx-[auto] w-[85%] xl:mt-[66px]">
        <Stack className="2xl:h-[301px] 3xl:h-[361px] font-poppins h-[400px] lg:h-[234px] w-[49%] xl:h-[267px]">
          <Image
            src="img_rectangle28.png"
            className="2xl:h-[301px] 3xl:h-[361px] absolute h-[400px] inset-[0] lg:h-[234px] object-cover self-stretch w-[100%] xl:h-[267px]"
            alt="Rectangle28"
          />
          <Text className="2xl:left-[61px] 2xl:text-fs27 3xl:left-[74px] 3xl:text-fs32 absolute font-normal h-[max-content] inset-y-[0] leading-lh left-[82.44px] lg:left-[48px] lg:text-fs21 my-[auto] text-fs36 text-left text-white_A700 w-[28%] xl:left-[55px] xl:text-fs24">
            <span className="text-white_A700 text-fs36 font-poppins text-left font-normal lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
              <>
                {`Casual`}
                <br />
                {``}
              </>
            </span>
            <span className="text-white_A700 text-fs48 font-playfairdisplay text-left font-bold lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43">
              <>{`Collection`}</>
            </span>
          </Text>
        </Stack>
        <Stack className="2xl:h-[301px] 2xl:ml-[24px] 3xl:h-[361px] 3xl:ml-[28px] font-poppins h-[400px] lg:h-[234px] lg:ml-[18px] ml-[32px] w-[49%] xl:h-[267px] xl:ml-[21px]">
          <Image
            src="img_rectangle29.png"
            className="2xl:h-[301px] 3xl:h-[361px] absolute h-[400px] inset-[0] lg:h-[234px] object-cover self-stretch w-[100%] xl:h-[267px]"
            alt="Rectangle29"
          />
          <Text className="2xl:left-[59px] 2xl:text-fs27 3xl:left-[71px] 3xl:text-fs32 absolute font-normal h-[max-content] inset-y-[0] leading-lh left-[79.64px] lg:left-[46px] lg:text-fs21 my-[auto] text-fs36 text-left text-white_A700 w-[28%] xl:left-[53px] xl:text-fs24">
            <span className="text-white_A700 text-fs36 font-poppins text-left font-normal lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
              <>
                {`Big Vibe `}
                <br />
                {``}
              </>
            </span>
            <span className="text-white_A700 text-fs48 font-playfairdisplay text-left font-bold lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43">
              <>{`Collection`}</>
            </span>
          </Text>
        </Stack>
      </Row>
      <Stack className="2xl:h-[272px] 2xl:mt-[75px] 3xl:h-[326px] 3xl:mt-[90px] h-[362px] lg:h-[212px] lg:mt-[58px] mt-[100px] self-stretch w-[100%] xl:h-[242px] xl:mt-[66px]">
        <Stack className="2xl:h-[272px] 3xl:h-[326px] absolute h-[362px] inset-[0] lg:h-[212px] self-stretch w-[100%] xl:h-[242px]">
          <div className="2xl:h-[232px] 3xl:h-[279px] absolute bg-gray_800 h-[309px] lg:h-[181px] self-stretch top-[0] w-[100%] xl:h-[207px]"></div>
          <List
            className="2xl:gap-[24px] 3xl:gap-[28px] absolute bottom-[0] flex-wrap gap-[32px] grid grid-cols-4 inset-x-[0] lg:gap-[18px] min-h-[auto] mx-[auto] w-[85%] xl:gap-[21px]"
            orientation="horizontal"
          >
            <Row className="bg-white_A700 items-center justify-start shadow-bs3 w-[100%]">
              <Image
                src="img_truck_1.svg"
                className="2xl:h-[37px] 2xl:ml-[34px] 2xl:my-[63px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[41px] 3xl:my-[76px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[27px] lg:my-[49px] lg:w-[28px] ml-[46.5px] my-[84.5px] object-contain w-[48px] xl:h-[33px] xl:ml-[31px] xl:my-[56px] xl:w-[32px]"
                alt="Truck"
              />
              <Column className="2xl:ml-[24px] 2xl:mr-[34px] 2xl:my-[48px] 3xl:ml-[28px] 3xl:mr-[41px] 3xl:my-[57px] font-poppins justify-start lg:ml-[18px] lg:mr-[27px] lg:my-[37px] ml-[32px] mr-[46.5px] my-[64px] w-[55%] xl:ml-[21px] xl:mr-[31px] xl:my-[42px]">
                <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-bold lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_800 text-left xl:mr-[6px] xl:text-fs12">{`Free Delivery`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-normal leading-lh lg:mt-[4px] lg:text-fs10 mt-[8px] self-stretch text-fs18 text-gray_500 text-left w-[100%] xl:mt-[5px] xl:text-fs12">
                  {
                    <>
                      {`This free shipping`}
                      <br />
                      {`only for selected region`}
                    </>
                  }
                </Text>
              </Column>
            </Row>
            <Row className="bg-white_A700 items-center justify-center shadow-bs3 w-[100%]">
              <Image
                src="img_card_1.svg"
                className="2xl:h-[37px] 2xl:ml-[34px] 2xl:my-[63px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[41px] 3xl:my-[76px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[27px] lg:my-[49px] lg:w-[28px] ml-[46.5px] my-[84.5px] object-contain w-[48px] xl:h-[33px] xl:ml-[31px] xl:my-[56px] xl:w-[32px]"
                alt="Card"
              />
              <Column className="2xl:ml-[24px] 2xl:mr-[34px] 2xl:my-[48px] 3xl:ml-[28px] 3xl:mr-[41px] 3xl:my-[57px] font-poppins justify-start lg:ml-[18px] lg:mr-[27px] lg:my-[37px] ml-[32px] mr-[46.5px] my-[64px] w-[55%] xl:ml-[21px] xl:mr-[31px] xl:my-[42px]">
                <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-bold lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_800 text-left xl:mr-[6px] xl:text-fs12">{`Payment Method`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-normal leading-lh lg:mt-[4px] lg:text-fs10 mt-[8px] self-stretch text-fs18 text-gray_500 text-left w-[100%] xl:mt-[5px] xl:text-fs12">
                  {
                    <>
                      {`This free shipping`}
                      <br />
                      {`only for selected region`}
                    </>
                  }
                </Text>
              </Column>
            </Row>
            <Row className="bg-white_A700 items-center justify-center shadow-bs3 w-[100%]">
              <Image
                src="img_broken_1.svg"
                className="2xl:h-[37px] 2xl:ml-[34px] 2xl:my-[63px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[41px] 3xl:my-[76px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[27px] lg:my-[49px] lg:w-[28px] ml-[46.5px] my-[84.5px] object-contain w-[48px] xl:h-[33px] xl:ml-[31px] xl:my-[56px] xl:w-[32px]"
                alt="Broken"
              />
              <Column className="2xl:ml-[24px] 2xl:mr-[34px] 2xl:my-[48px] 3xl:ml-[28px] 3xl:mr-[41px] 3xl:my-[57px] font-poppins justify-start lg:ml-[18px] lg:mr-[27px] lg:my-[37px] ml-[32px] mr-[46.5px] my-[64px] w-[55%] xl:ml-[21px] xl:mr-[31px] xl:my-[42px]">
                <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-bold lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_800 text-left xl:mr-[6px] xl:text-fs12">{`Warranty`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-normal leading-lh lg:mt-[4px] lg:text-fs10 mt-[8px] self-stretch text-fs18 text-gray_500 text-left w-[100%] xl:mt-[5px] xl:text-fs12">
                  {
                    <>
                      {`This free shipping`}
                      <br />
                      {`only for selected region`}
                    </>
                  }
                </Text>
              </Column>
            </Row>
            <Row className="bg-white_A700 items-center justify-center shadow-bs3 w-[100%]">
              <Image
                src="img_support_1.svg"
                className="2xl:h-[37px] 2xl:ml-[34px] 2xl:my-[63px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[41px] 3xl:my-[76px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[27px] lg:my-[49px] lg:w-[28px] ml-[46.5px] my-[84.5px] object-contain w-[48px] xl:h-[33px] xl:ml-[31px] xl:my-[56px] xl:w-[32px]"
                alt="Support"
              />
              <Column className="2xl:ml-[24px] 2xl:mr-[34px] 2xl:my-[48px] 3xl:ml-[28px] 3xl:mr-[41px] 3xl:my-[57px] font-poppins justify-start lg:ml-[18px] lg:mr-[27px] lg:my-[37px] ml-[32px] mr-[46.5px] my-[64px] w-[55%] xl:ml-[21px] xl:mr-[31px] xl:my-[42px]">
                <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-bold lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_800 text-left xl:mr-[6px] xl:text-fs12">{`Customer Support`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-normal leading-lh lg:mt-[4px] lg:text-fs10 mt-[8px] self-stretch text-fs18 text-gray_500 text-left w-[100%] xl:mt-[5px] xl:text-fs12">
                  {
                    <>
                      {`This free shipping`}
                      <br />
                      {`only for selected region`}
                    </>
                  }
                </Text>
              </Column>
            </Row>
          </List>
        </Stack>
        <Text className="2xl:left-[108px] 2xl:text-fs18 2xl:top-[41px] 3xl:left-[129px] 3xl:text-fs21 3xl:top-[49px] absolute font-bold left-[144px] lg:left-[84px] lg:text-fs14 lg:top-[32px] text-fs24 text-left text-white_A700 top-[55px] xl:left-[96px] xl:text-fs16 xl:top-[36px]">{`Why Choose Us`}</Text>
      </Stack>
      <Column className="2xl:mt-[75px] 3xl:mt-[90px] items-center justify-start lg:mt-[58px] mt-[100px] mx-[auto] w-[85%] xl:mt-[66px]">
        <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
          <Text className="2xl:text-fs27 3xl:text-fs32 font-bold lg:text-fs21 text-fs36 text-gray_800 text-left xl:text-fs24">{`Popular this Week`}</Text>
          <Row className="2xl:mb-[9px] 2xl:mt-[8px] 3xl:mb-[10px] 3xl:mt-[9px] font-poppins items-center justify-between lg:mb-[7px] lg:mt-[6px] mb-[12px] mt-[11px] px-[0] w-[7%] xl:mb-[8px] xl:mt-[7px]">
            <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 my-[1px] text-fs18 text-gray_800 text-left xl:text-fs12">{`View all`}</Text>
            <Image
              src="img_arrow_5.svg"
              className="2xl:h-[24px] 3xl:h-[28px] h-[31px] lg:h-[19px] object-contain w-[29%] xl:h-[21px]"
              alt="Arrow"
            />
          </Row>
        </Row>
        <List
          className="2xl:gap-[24px] 2xl:mt-[24px] 3xl:gap-[28px] 3xl:mt-[28px] flex-wrap gap-[32px] grid grid-cols-6 lg:gap-[18px] lg:mt-[18px] min-h-[auto] mt-[32px] w-[100%] xl:gap-[21px] xl:mt-[21px]"
          orientation="horizontal"
        >
          <Column className="items-center justify-start w-[100%]">
            <Image
              src="img_placeholder_37.png"
              className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
              alt="placeholder"
            />
            <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[81%] xl:mt-[10px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                {
                  <>
                    {`Black Adventure`}
                    <br />
                    {`Boots`}
                  </>
                }
              </Text>
              <RatingBar
                className="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] mx-[auto] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 16) / 1920}
              ></RatingBar>
              <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-medium lg:mt-[9px] lg:text-fs10 mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
          <Column className="items-center justify-start w-[100%]">
            <Image
              src="img_placeholder_36.png"
              className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
              alt="placeholder"
            />
            <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[64%] xl:mt-[10px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                {
                  <>
                    {`Black Formal`}
                    <br />
                    {`Highheels`}
                  </>
                }
              </Text>
              <RatingBar
                className="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] mx-[auto] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 16) / 1920}
              ></RatingBar>
              <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-medium lg:mt-[9px] lg:text-fs10 mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
          <Column className="items-center justify-start w-[100%]">
            <Image
              src="img_placeholder_40.png"
              className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
              alt="placeholder"
            />
            <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[68%] xl:mt-[10px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                {
                  <>
                    {`Brown `}
                    <br />
                    {`Casual Shoes`}
                  </>
                }
              </Text>
              <RatingBar
                className="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] mx-[auto] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 16) / 1920}
              ></RatingBar>
              <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-medium lg:mt-[9px] lg:text-fs10 mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
          <Column className="justify-start w-[100%]">
            <Column className="items-center self-stretch w-[100%]">
              <Image
                src="img_placeholder_41.png"
                className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                alt="placeholder"
              />
            </Column>
            <Column className="2xl:mt-[12px] 2xl:mx-[37px] 3xl:mt-[14px] 3xl:mx-[45px] font-poppins items-center justify-start lg:mt-[9px] lg:mx-[29px] mt-[16px] mx-[50px] w-[52%] xl:mt-[10px] xl:mx-[33px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                {
                  <>
                    {`Gray `}
                    <br />
                    {`Longpants`}
                  </>
                }
              </Text>
              <RatingBar
                className="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] mx-[auto] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 16) / 1920}
              ></RatingBar>
              <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-medium lg:mt-[9px] lg:text-fs10 mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
          <Column className="items-center justify-start w-[100%]">
            <Image
              src="img_placeholder_39.png"
              className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
              alt="placeholder"
            />
            <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[62%] xl:mt-[10px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                {
                  <>
                    {`Green`}
                    <br />
                    {`Sport Jacket`}
                  </>
                }
              </Text>
              <RatingBar
                className="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] mx-[auto] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 16) / 1920}
              ></RatingBar>
              <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-medium lg:mt-[9px] lg:text-fs10 mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
          <Column className="items-center justify-start w-[100%]">
            <Image
              src="img_placeholder_42.png"
              className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
              alt="placeholder"
            />
            <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[58%] xl:mt-[10px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                {
                  <>
                    {`Blue Denim `}
                    <br />
                    {`Skirt`}
                  </>
                }
              </Text>
              <RatingBar
                className="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] mx-[auto] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 16) / 1920}
              ></RatingBar>
              <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-medium lg:mt-[9px] lg:text-fs10 mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
        </List>
      </Column>
      <Image
        src="img_brand_1.svg"
        className="2xl:h-[52px] 2xl:mt-[75px] 3xl:h-[62px] 3xl:mt-[90px] h-[68.29px] lg:h-[40px] lg:mt-[58px] mt-[100px] mx-[auto] object-contain w-[50%] xl:h-[46px] xl:mt-[66px]"
        alt="brand"
      />
      <div className="2xl:mt-[75px] 3xl:mt-[90px] lg:mt-[58px] mt-[100px] self-stretch w-[100%] xl:mt-[66px]">
        <Column className="bg-gray_800 font-poppins items-center justify-end self-stretch w-[100%]">
          <Row className="2xl:mt-[48px] 3xl:mt-[57px] justify-evenly lg:mt-[37px] mt-[64px] px-[0] self-stretch w-[100%] xl:mt-[42px]">
            <Column className="2xl:mb-[16px] 3xl:mb-[19px] font-poppins justify-start lg:mb-[12px] mb-[22px] w-[13%] xl:mb-[14px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`Contacts`}</Text>
              <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:mt-[21px]">
                <Column className="items-center justify-start self-stretch w-[100%]">
                  <Row className="font-poppins items-center justify-start self-stretch w-[100%]">
                    <Image
                      src="img_call_1.svg"
                      className="2xl:h-[19px] 2xl:my-[3px] 2xl:w-[18px] 3xl:h-[22px] 3xl:my-[3px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:my-[2px] lg:w-[14px] my-[4px] object-contain w-[24px] xl:h-[17px] xl:my-[2px] xl:w-[16px]"
                      alt="Call"
                    />
                    <Text className="2xl:ml-[6px] 2xl:text-fs13 3xl:ml-[7px] 3xl:text-fs16 font-normal lg:ml-[4px] lg:text-fs10 ml-[8px] text-fs18 text-left text-white_A700 xl:ml-[5px] xl:text-fs12">{`+1234567890`}</Text>
                  </Row>
                  <Row className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px]">
                    <Image
                      src="img_email.svg"
                      className="2xl:h-[19px] 2xl:my-[3px] 2xl:w-[18px] 3xl:h-[22px] 3xl:my-[3px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:my-[2px] lg:w-[14px] my-[4px] object-contain w-[24px] xl:h-[17px] xl:my-[2px] xl:w-[16px]"
                      alt="Email"
                    />
                    <Text className="2xl:ml-[6px] 2xl:text-fs13 3xl:ml-[7px] 3xl:text-fs16 font-normal lg:ml-[4px] lg:text-fs10 ml-[8px] text-fs18 text-left text-white_A700 xl:ml-[5px] xl:text-fs12">{`elliye@support.com`}</Text>
                  </Row>
                </Column>
              </Column>
              <Text className="2xl:mr-[7px] 2xl:mt-[36px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[43px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:mt-[28px] lg:text-fs14 mr-[10px] mt-[48px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:mt-[32px] xl:text-fs16">{`Social Media`}</Text>
              <Image
                src="img_sosmedia_1.svg"
                className="2xl:h-[19px] 2xl:mr-[7px] 2xl:mt-[24px] 3xl:h-[22px] 3xl:mr-[9px] 3xl:mt-[28px] h-[24px] lg:h-[14px] lg:mr-[5px] lg:mt-[18px] mr-[10px] mt-[32px] object-contain w-[49%] xl:h-[17px] xl:mr-[6px] xl:mt-[21px]"
                alt="sosmedia"
              />
            </Column>
            <Column className="font-poppins justify-start w-[13%]">
              <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`Product Links`}</Text>
              <Column className="2xl:mr-[7px] 2xl:mt-[24px] 3xl:mr-[9px] 3xl:mt-[28px] font-poppins justify-start lg:mr-[5px] lg:mt-[18px] mr-[10px] mt-[32px] w-[47%] xl:mr-[6px] xl:mt-[21px]">
                <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:text-fs12">{`Categories`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`New Arrival`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`Features`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`Collections`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`Discount`}</Text>
                <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mt-[9px] lg:text-fs10 mt-[16px] self-stretch text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`Special Offer`}</Text>
              </Column>
            </Column>
            <Column className="font-poppins justify-start w-[13%]">
              <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`Company`}</Text>
              <Column className="2xl:mr-[7px] 2xl:mt-[24px] 3xl:mr-[9px] 3xl:mt-[28px] font-poppins justify-start lg:mr-[5px] lg:mt-[18px] mr-[10px] mt-[32px] w-[60%] xl:mr-[6px] xl:mt-[21px]">
                <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:text-fs12">{`About`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`Blog`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`Careers`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`Services`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`Privacy Policy`}</Text>
                <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mt-[9px] lg:text-fs10 mt-[16px] self-stretch text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`Terms of service`}</Text>
              </Column>
            </Column>
            <Column className="2xl:mb-[75px] 3xl:mb-[90px] font-poppins justify-start lg:mb-[58px] mb-[101px] w-[20%] xl:mb-[67px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`Join our Newsletter`}</Text>
              <Text className="2xl:mt-[18px] 2xl:text-fs13 3xl:mt-[21px] 3xl:text-fs16 font-normal leading-lh lg:mt-[14px] lg:text-fs10 mt-[24px] self-stretch text-fs18 text-gray_500 text-left w-[100%] xl:mt-[16px] xl:text-fs12">{`Drop your email below to get update, promotions, coupons, and more!`}</Text>
              <Column className="2xl:mt-[26px] 3xl:mt-[31px] items-center lg:mt-[20px] mt-[35px] self-stretch w-[100%] xl:mt-[23px]">
                <Row className="bg-gray_800 border border-solid border-white_A700 font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
                  <Text className="2xl:ml-[18px] 2xl:my-[12px] 2xl:text-fs13 3xl:mb-[15px] 3xl:ml-[21px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:ml-[14px] lg:my-[9px] lg:text-fs10 mb-[17px] ml-[24px] mt-[16px] opacity-op5 text-bluegray_100_87 text-center text-fs18 tracking-ls1 xl:mb-[11px] xl:ml-[16px] xl:mt-[10px] xl:text-fs12">{`Enter your email`}</Text>
                  <Image
                    src="img_submit.svg"
                    className="2xl:h-[46px] 2xl:w-[45px] 3xl:h-[55px] 3xl:w-[54px] h-[60px] lg:h-[35px] lg:w-[35px] object-contain w-[60px] xl:h-[41px] xl:w-[40px]"
                    alt="submit"
                  />
                </Row>
              </Column>
            </Column>
          </Row>
          <Text className="2xl:mb-[24px] 2xl:mt-[48px] 2xl:text-fs10 3xl:mb-[28px] 3xl:mt-[57px] 3xl:text-fs12 font-normal lg:mb-[18px] lg:mt-[37px] lg:text-fs8 mb-[32px] mt-[64px] mx-[auto] text-bluegray_100 text-fs14 text-left xl:mb-[21px] xl:mt-[42px] xl:text-fs9">{`Copyright © 2021 Elliye. All Right Reseved`}</Text>
        </Column>
      </div>
    </Column>
  );
};

export default HomepageV3Page;
