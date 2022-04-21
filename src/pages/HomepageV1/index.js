import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Slider } from "components/Slider";
import { Grid } from "components/Grid";
import { List } from "components/List";
import { RatingBar } from "components/RatingBar";

const HomepageV1Page = () => {
  const navigate = useNavigate();

  const handleNavigate1 = () => navigate("/homepagev2");

  const ref = React.useRef();

  return (
    <Column className="bg-white_A700 font-poppins items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <div className="self-stretch w-[100%]">
        <Stack className="2xl:h-[72px] 3xl:h-[86px] h-[95px] lg:h-[56px] self-stretch w-[100%] xl:h-[64px]">
          <Image
            src="img_background.svg"
            className="2xl:h-[72px] 3xl:h-[86px] absolute h-[95px] inset-[0] lg:h-[56px] object-cover self-stretch w-[100%] xl:h-[64px]"
            alt="background"
          />
          <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[85%]">
            <Row className="2xl:mb-[9px] 2xl:mt-[8px] 3xl:mb-[11px] 3xl:mt-[9px] font-poppins items-center justify-start lg:mb-[7px] lg:mt-[6px] mb-[13px] mt-[11px] w-[7%] xl:mb-[8px] xl:mt-[7px]">
              <Image
                src="img_group19.svg"
                className="2xl:h-[19px] 2xl:my-[4px] 3xl:h-[22px] 3xl:my-[5px] h-[24px] lg:h-[14px] lg:my-[3px] my-[6px] object-contain w-[35%] xl:h-[17px] xl:my-[4px]"
                alt="Group19"
              />
              <Text className="2xl:ml-[6px] 2xl:text-fs18 3xl:ml-[7px] 3xl:text-fs21 font-bold lg:ml-[4px] lg:text-fs14 ml-[8px] text-fs24 text-gray_800 text-left xl:ml-[5px] xl:text-fs16">{`Elliye`}</Text>
            </Row>
            <Row className="2xl:ml-[294px] 2xl:my-[12px] 3xl:mb-[15px] 3xl:ml-[353px] 3xl:mt-[14px] font-poppins items-center justify-center lg:ml-[228px] lg:my-[9px] mb-[17px] ml-[392px] mt-[16px] w-[38%] xl:mb-[11px] xl:ml-[261px] xl:mt-[10px]">
              <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`Categories`}</Text>
              <Text className="2xl:ml-[60px] 2xl:text-fs13 3xl:ml-[72px] 3xl:text-fs16 font-medium lg:ml-[46px] lg:text-fs10 ml-[80px] text-fs18 text-gray_800 text-left xl:ml-[53px] xl:text-fs12">{`New Arrival`}</Text>
              <Text className="2xl:ml-[60px] 2xl:text-fs13 3xl:ml-[72px] 3xl:text-fs16 font-medium lg:ml-[46px] lg:text-fs10 ml-[80px] text-fs18 text-gray_800 text-left xl:ml-[53px] xl:text-fs12">{`Features`}</Text>
              <Text className="2xl:ml-[60px] 2xl:text-fs13 3xl:ml-[72px] 3xl:text-fs16 font-medium lg:ml-[46px] lg:text-fs10 ml-[80px] text-fs18 text-gray_800 text-left xl:ml-[53px] xl:text-fs12">{`Collections`}</Text>
            </Row>
            <Row className="2xl:ml-[194px] 3xl:ml-[233px] font-poppins items-center justify-between lg:ml-[151px] ml-[259px] px-[0] w-[15%] xl:ml-[172px]">
              <Image
                src="img_icon.svg"
                className="2xl:h-[19px] 2xl:my-[13px] 3xl:h-[22px] 3xl:my-[16px] h-[24px] lg:h-[14px] lg:my-[10px] my-[18px] object-contain w-[33%] xl:h-[17px] xl:my-[12px]"
                alt="icon"
              />
              <Button
                className="common-pointer 2xl:px-[21px] 2xl:py-[13px] 2xl:text-fs13 3xl:px-[25px] 3xl:py-[16px] 3xl:text-fs16 bg-gray_800 border-bw font-bold lg:px-[16px] lg:py-[10px] lg:text-fs10 px-[28.5px] py-[18.045px] text-center text-fs18 text-white_A700 w-[44%] xl:px-[19px] xl:py-[12px] xl:text-fs12"
                onClick={handleNavigate1}
              >{`Login`}</Button>
            </Row>
          </Row>
        </Stack>
      </div>
      <Stack className="2xl:h-[526px] 3xl:h-[631px] h-[700px] lg:h-[409px] self-stretch w-[100%] xl:h-[468px]">
        <Slider
          infinite
          mouseTracking
          disableButtonsControls
          responsive={{
            0: { items: 1 },
            568: { items: 1 },
            1024: { items: 1 },
          }}
          ref={ref}
          className="absolute inset-[0] self-stretch w-[100%]"
          renderDotsItem={({ isActive }) => {
            if (isActive) {
              return (
                <div className="inline-block m-[8px] rounded-radius50 w-[12px] h-[12px] bg-gray_800 lg:mx-[2px] xl:mx-[2px] 2xl:mx-[3px] 3xl:mx-[3px] mx-[4px]" />
              );
            }
            return (
              <div
                className="inline-block m-[8px] rounded-radius50 w-[12px] h-[12px] bg-white_A700 lg:mx-[2px] xl:mx-[2px] 2xl:mx-[3px] 3xl:mx-[3px] mx-[4px]"
                role="button"
                tabIndex={0}
              />
            );
          }}
          items={[
            <Row className="bg-gray_100 items-center justify-end self-stretch">
              <Stack className="2xl:h-[526px] 2xl:ml-[108px] 3xl:h-[631px] 3xl:ml-[129px] h-[700px] lg:h-[409px] lg:ml-[84px] ml-[144px] w-[49%] xl:h-[468px] xl:ml-[96px]">
                <Image
                  src="img_placeholder.png"
                  className="2xl:h-[253px] 3xl:h-[303px] absolute bottom-[0] h-[336px] lg:h-[196px] object-contain right-[0] w-[41%] xl:h-[225px]"
                  alt="placeholder"
                />
                <Image
                  src="img_placeholder_1.png"
                  className="2xl:h-[274px] 3xl:h-[328px] absolute h-[364px] lg:h-[213px] object-contain right-[0] top-[0] w-[41%] xl:h-[243px]"
                  alt="placeholder"
                />
                <Column className="absolute font-playfairdisplay h-[max-content] inset-y-[0] justify-start left-[0] my-[auto] w-[70%]">
                  <Text className="2xl:text-fs72 3xl:text-fs86 font-normal font-playfairdisplay lg:text-fs56 self-stretch text-fs96 text-gray_800 text-left xl:text-fs64">{`Summer Sale`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs48 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs57 font-bold font-poppins lg:mr-[5px] lg:mt-[4px] lg:text-fs37 mr-[10px] mt-[8px] text-fs64 text-gray_800 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs42">{`50% Off`}</Text>
                  <Text className="2xl:leading-lh24 2xl:mr-[7px] 2xl:mt-[24px] 2xl:text-fs13 3xl:leading-lh28 3xl:mr-[9px] 3xl:mt-[28px] 3xl:text-fs16 font-normal font-poppins leading-lh3200 lg:leading-lh18 lg:mr-[5px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[32px] text-fs18 text-gray_800 text-left w-[79%] xl:leading-lh21 xl:mr-[6px] xl:mt-[21px] xl:text-fs12">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                  <Row className="2xl:mr-[7px] 2xl:mt-[42px] 3xl:mr-[9px] 3xl:mt-[50px] bg-gray_800 font-poppins items-center justify-start lg:mr-[5px] lg:mt-[32px] mr-[10px] mt-[56px] w-[37%] xl:mr-[6px] xl:mt-[37px]">
                    <Text className="2xl:ml-[24px] 2xl:my-[9px] 2xl:text-fs18 3xl:ml-[29px] 3xl:my-[10px] 3xl:text-fs21 font-medium lg:ml-[19px] lg:my-[7px] lg:text-fs14 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[22px] xl:my-[8px] xl:text-fs16">{`Shop Now`}</Text>
                    <Image
                      src="img_arrow.svg"
                      className="2xl:h-[37px] 2xl:ml-[7px] 2xl:mr-[24px] 2xl:my-[4px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[9px] 3xl:mr-[29px] 3xl:my-[5px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[5px] lg:mr-[19px] lg:my-[3px] lg:w-[28px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[33px] xl:ml-[6px] xl:mr-[22px] xl:my-[4px] xl:w-[32px]"
                      alt="Arrow"
                    />
                  </Row>
                </Column>
              </Stack>
              <Column className="items-center justify-start w-[44%]">
                <Image
                  src="img_placeholder_2.png"
                  className="2xl:h-[274px] 3xl:h-[328px] h-[364px] lg:h-[213px] object-cover self-stretch w-[100%] xl:h-[243px]"
                  alt="placeholder"
                />
                <Row className="items-center justify-evenly px-[0] self-stretch w-[100%]">
                  <Image
                    src="img_placeholder_3.png"
                    className="2xl:h-[253px] 3xl:h-[303px] h-[336px] lg:h-[196px] object-contain w-[46%] xl:h-[225px]"
                    alt="placeholder"
                  />
                  <Stack className="2xl:h-[253px] 3xl:h-[303px] h-[336px] lg:h-[196px] w-[54%] xl:h-[225px]">
                    <Image
                      src="img_placeholder_4.png"
                      className="2xl:h-[253px] 3xl:h-[303px] absolute h-[336px] inset-[0] lg:h-[196px] object-cover self-stretch w-[100%] xl:h-[225px]"
                      alt="placeholder"
                    />
                    <Image
                      src="img_button.svg"
                      className="2xl:h-[37px] 3xl:h-[44px] absolute bottom-[0] h-[48px] inset-x-[0] lg:h-[28px] mx-[auto] object-contain w-[35%] xl:h-[33px]"
                      alt="button"
                    />
                  </Stack>
                </Row>
              </Column>
            </Row>,

            <Row className="bg-gray_100 items-center justify-end self-stretch">
              <Stack className="2xl:h-[526px] 2xl:ml-[108px] 3xl:h-[631px] 3xl:ml-[129px] h-[700px] lg:h-[409px] lg:ml-[84px] ml-[144px] w-[49%] xl:h-[468px] xl:ml-[96px]">
                <Image
                  src="img_placeholder.png"
                  className="2xl:h-[253px] 3xl:h-[303px] absolute bottom-[0] h-[336px] lg:h-[196px] object-contain right-[0] w-[41%] xl:h-[225px]"
                  alt="placeholder"
                />
                <Image
                  src="img_placeholder_1.png"
                  className="2xl:h-[274px] 3xl:h-[328px] absolute h-[364px] lg:h-[213px] object-contain right-[0] top-[0] w-[41%] xl:h-[243px]"
                  alt="placeholder"
                />
                <Column className="absolute font-playfairdisplay h-[max-content] inset-y-[0] justify-start left-[0] my-[auto] w-[70%]">
                  <Text className="2xl:text-fs72 3xl:text-fs86 font-normal font-playfairdisplay lg:text-fs56 self-stretch text-fs96 text-gray_800 text-left xl:text-fs64">{`Summer Sale`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs48 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs57 font-bold font-poppins lg:mr-[5px] lg:mt-[4px] lg:text-fs37 mr-[10px] mt-[8px] text-fs64 text-gray_800 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs42">{`50% Off`}</Text>
                  <Text className="2xl:leading-lh24 2xl:mr-[7px] 2xl:mt-[24px] 2xl:text-fs13 3xl:leading-lh28 3xl:mr-[9px] 3xl:mt-[28px] 3xl:text-fs16 font-normal font-poppins leading-lh3200 lg:leading-lh18 lg:mr-[5px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[32px] text-fs18 text-gray_800 text-left w-[79%] xl:leading-lh21 xl:mr-[6px] xl:mt-[21px] xl:text-fs12">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                  <Row className="2xl:mr-[7px] 2xl:mt-[42px] 3xl:mr-[9px] 3xl:mt-[50px] bg-gray_800 font-poppins items-center justify-start lg:mr-[5px] lg:mt-[32px] mr-[10px] mt-[56px] w-[37%] xl:mr-[6px] xl:mt-[37px]">
                    <Text className="2xl:ml-[24px] 2xl:my-[9px] 2xl:text-fs18 3xl:ml-[29px] 3xl:my-[10px] 3xl:text-fs21 font-medium lg:ml-[19px] lg:my-[7px] lg:text-fs14 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[22px] xl:my-[8px] xl:text-fs16">{`Shop Now`}</Text>
                    <Image
                      src="img_arrow.svg"
                      className="2xl:h-[37px] 2xl:ml-[7px] 2xl:mr-[24px] 2xl:my-[4px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[9px] 3xl:mr-[29px] 3xl:my-[5px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[5px] lg:mr-[19px] lg:my-[3px] lg:w-[28px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[33px] xl:ml-[6px] xl:mr-[22px] xl:my-[4px] xl:w-[32px]"
                      alt="Arrow"
                    />
                  </Row>
                </Column>
              </Stack>
              <Column className="items-center justify-start w-[44%]">
                <Image
                  src="img_placeholder_2.png"
                  className="2xl:h-[274px] 3xl:h-[328px] h-[364px] lg:h-[213px] object-cover self-stretch w-[100%] xl:h-[243px]"
                  alt="placeholder"
                />
                <Row className="items-center justify-evenly px-[0] self-stretch w-[100%]">
                  <Image
                    src="img_placeholder_3.png"
                    className="2xl:h-[253px] 3xl:h-[303px] h-[336px] lg:h-[196px] object-contain w-[46%] xl:h-[225px]"
                    alt="placeholder"
                  />
                  <Stack className="2xl:h-[253px] 3xl:h-[303px] h-[336px] lg:h-[196px] w-[54%] xl:h-[225px]">
                    <Image
                      src="img_placeholder_4.png"
                      className="2xl:h-[253px] 3xl:h-[303px] absolute h-[336px] inset-[0] lg:h-[196px] object-cover self-stretch w-[100%] xl:h-[225px]"
                      alt="placeholder"
                    />
                    <Image
                      src="img_button.svg"
                      className="2xl:h-[37px] 3xl:h-[44px] absolute bottom-[0] h-[48px] inset-x-[0] lg:h-[28px] mx-[auto] object-contain w-[35%] xl:h-[33px]"
                      alt="button"
                    />
                  </Stack>
                </Row>
              </Column>
            </Row>,

            <Row className="bg-gray_100 items-center justify-end self-stretch">
              <Stack className="2xl:h-[526px] 2xl:ml-[108px] 3xl:h-[631px] 3xl:ml-[129px] h-[700px] lg:h-[409px] lg:ml-[84px] ml-[144px] w-[49%] xl:h-[468px] xl:ml-[96px]">
                <Image
                  src="img_placeholder.png"
                  className="2xl:h-[253px] 3xl:h-[303px] absolute bottom-[0] h-[336px] lg:h-[196px] object-contain right-[0] w-[41%] xl:h-[225px]"
                  alt="placeholder"
                />
                <Image
                  src="img_placeholder_1.png"
                  className="2xl:h-[274px] 3xl:h-[328px] absolute h-[364px] lg:h-[213px] object-contain right-[0] top-[0] w-[41%] xl:h-[243px]"
                  alt="placeholder"
                />
                <Column className="absolute font-playfairdisplay h-[max-content] inset-y-[0] justify-start left-[0] my-[auto] w-[70%]">
                  <Text className="2xl:text-fs72 3xl:text-fs86 font-normal font-playfairdisplay lg:text-fs56 self-stretch text-fs96 text-gray_800 text-left xl:text-fs64">{`Summer Sale`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs48 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs57 font-bold font-poppins lg:mr-[5px] lg:mt-[4px] lg:text-fs37 mr-[10px] mt-[8px] text-fs64 text-gray_800 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs42">{`50% Off`}</Text>
                  <Text className="2xl:leading-lh24 2xl:mr-[7px] 2xl:mt-[24px] 2xl:text-fs13 3xl:leading-lh28 3xl:mr-[9px] 3xl:mt-[28px] 3xl:text-fs16 font-normal font-poppins leading-lh3200 lg:leading-lh18 lg:mr-[5px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[32px] text-fs18 text-gray_800 text-left w-[79%] xl:leading-lh21 xl:mr-[6px] xl:mt-[21px] xl:text-fs12">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                  <Row className="2xl:mr-[7px] 2xl:mt-[42px] 3xl:mr-[9px] 3xl:mt-[50px] bg-gray_800 font-poppins items-center justify-start lg:mr-[5px] lg:mt-[32px] mr-[10px] mt-[56px] w-[37%] xl:mr-[6px] xl:mt-[37px]">
                    <Text className="2xl:ml-[24px] 2xl:my-[9px] 2xl:text-fs18 3xl:ml-[29px] 3xl:my-[10px] 3xl:text-fs21 font-medium lg:ml-[19px] lg:my-[7px] lg:text-fs14 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[22px] xl:my-[8px] xl:text-fs16">{`Shop Now`}</Text>
                    <Image
                      src="img_arrow.svg"
                      className="2xl:h-[37px] 2xl:ml-[7px] 2xl:mr-[24px] 2xl:my-[4px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[9px] 3xl:mr-[29px] 3xl:my-[5px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[5px] lg:mr-[19px] lg:my-[3px] lg:w-[28px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[33px] xl:ml-[6px] xl:mr-[22px] xl:my-[4px] xl:w-[32px]"
                      alt="Arrow"
                    />
                  </Row>
                </Column>
              </Stack>
              <Column className="items-center justify-start w-[44%]">
                <Image
                  src="img_placeholder_2.png"
                  className="2xl:h-[274px] 3xl:h-[328px] h-[364px] lg:h-[213px] object-cover self-stretch w-[100%] xl:h-[243px]"
                  alt="placeholder"
                />
                <Row className="items-center justify-evenly px-[0] self-stretch w-[100%]">
                  <Image
                    src="img_placeholder_3.png"
                    className="2xl:h-[253px] 3xl:h-[303px] h-[336px] lg:h-[196px] object-contain w-[46%] xl:h-[225px]"
                    alt="placeholder"
                  />
                  <Stack className="2xl:h-[253px] 3xl:h-[303px] h-[336px] lg:h-[196px] w-[54%] xl:h-[225px]">
                    <Image
                      src="img_placeholder_4.png"
                      className="2xl:h-[253px] 3xl:h-[303px] absolute h-[336px] inset-[0] lg:h-[196px] object-cover self-stretch w-[100%] xl:h-[225px]"
                      alt="placeholder"
                    />
                    <Image
                      src="img_button.svg"
                      className="2xl:h-[37px] 3xl:h-[44px] absolute bottom-[0] h-[48px] inset-x-[0] lg:h-[28px] mx-[auto] object-contain w-[35%] xl:h-[33px]"
                      alt="button"
                    />
                  </Stack>
                </Row>
              </Column>
            </Row>,

            <Row className="bg-gray_100 items-center justify-end self-stretch">
              <Stack className="2xl:h-[526px] 2xl:ml-[108px] 3xl:h-[631px] 3xl:ml-[129px] h-[700px] lg:h-[409px] lg:ml-[84px] ml-[144px] w-[49%] xl:h-[468px] xl:ml-[96px]">
                <Image
                  src="img_placeholder.png"
                  className="2xl:h-[253px] 3xl:h-[303px] absolute bottom-[0] h-[336px] lg:h-[196px] object-contain right-[0] w-[41%] xl:h-[225px]"
                  alt="placeholder"
                />
                <Image
                  src="img_placeholder_1.png"
                  className="2xl:h-[274px] 3xl:h-[328px] absolute h-[364px] lg:h-[213px] object-contain right-[0] top-[0] w-[41%] xl:h-[243px]"
                  alt="placeholder"
                />
                <Column className="absolute font-playfairdisplay h-[max-content] inset-y-[0] justify-start left-[0] my-[auto] w-[70%]">
                  <Text className="2xl:text-fs72 3xl:text-fs86 font-normal font-playfairdisplay lg:text-fs56 self-stretch text-fs96 text-gray_800 text-left xl:text-fs64">{`Summer Sale`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs48 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs57 font-bold font-poppins lg:mr-[5px] lg:mt-[4px] lg:text-fs37 mr-[10px] mt-[8px] text-fs64 text-gray_800 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs42">{`50% Off`}</Text>
                  <Text className="2xl:leading-lh24 2xl:mr-[7px] 2xl:mt-[24px] 2xl:text-fs13 3xl:leading-lh28 3xl:mr-[9px] 3xl:mt-[28px] 3xl:text-fs16 font-normal font-poppins leading-lh3200 lg:leading-lh18 lg:mr-[5px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[32px] text-fs18 text-gray_800 text-left w-[79%] xl:leading-lh21 xl:mr-[6px] xl:mt-[21px] xl:text-fs12">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                  <Row className="2xl:mr-[7px] 2xl:mt-[42px] 3xl:mr-[9px] 3xl:mt-[50px] bg-gray_800 font-poppins items-center justify-start lg:mr-[5px] lg:mt-[32px] mr-[10px] mt-[56px] w-[37%] xl:mr-[6px] xl:mt-[37px]">
                    <Text className="2xl:ml-[24px] 2xl:my-[9px] 2xl:text-fs18 3xl:ml-[29px] 3xl:my-[10px] 3xl:text-fs21 font-medium lg:ml-[19px] lg:my-[7px] lg:text-fs14 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[22px] xl:my-[8px] xl:text-fs16">{`Shop Now`}</Text>
                    <Image
                      src="img_arrow.svg"
                      className="2xl:h-[37px] 2xl:ml-[7px] 2xl:mr-[24px] 2xl:my-[4px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[9px] 3xl:mr-[29px] 3xl:my-[5px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[5px] lg:mr-[19px] lg:my-[3px] lg:w-[28px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[33px] xl:ml-[6px] xl:mr-[22px] xl:my-[4px] xl:w-[32px]"
                      alt="Arrow"
                    />
                  </Row>
                </Column>
              </Stack>
              <Column className="items-center justify-start w-[44%]">
                <Image
                  src="img_placeholder_2.png"
                  className="2xl:h-[274px] 3xl:h-[328px] h-[364px] lg:h-[213px] object-cover self-stretch w-[100%] xl:h-[243px]"
                  alt="placeholder"
                />
                <Row className="items-center justify-evenly px-[0] self-stretch w-[100%]">
                  <Image
                    src="img_placeholder_3.png"
                    className="2xl:h-[253px] 3xl:h-[303px] h-[336px] lg:h-[196px] object-contain w-[46%] xl:h-[225px]"
                    alt="placeholder"
                  />
                  <Stack className="2xl:h-[253px] 3xl:h-[303px] h-[336px] lg:h-[196px] w-[54%] xl:h-[225px]">
                    <Image
                      src="img_placeholder_4.png"
                      className="2xl:h-[253px] 3xl:h-[303px] absolute h-[336px] inset-[0] lg:h-[196px] object-cover self-stretch w-[100%] xl:h-[225px]"
                      alt="placeholder"
                    />
                    <Image
                      src="img_button.svg"
                      className="2xl:h-[37px] 3xl:h-[44px] absolute bottom-[0] h-[48px] inset-x-[0] lg:h-[28px] mx-[auto] object-contain w-[35%] xl:h-[33px]"
                      alt="button"
                    />
                  </Stack>
                </Row>
              </Column>
            </Row>,

            <Row className="bg-gray_100 items-center justify-end self-stretch">
              <Stack className="2xl:h-[526px] 2xl:ml-[108px] 3xl:h-[631px] 3xl:ml-[129px] h-[700px] lg:h-[409px] lg:ml-[84px] ml-[144px] w-[49%] xl:h-[468px] xl:ml-[96px]">
                <Image
                  src="img_placeholder.png"
                  className="2xl:h-[253px] 3xl:h-[303px] absolute bottom-[0] h-[336px] lg:h-[196px] object-contain right-[0] w-[41%] xl:h-[225px]"
                  alt="placeholder"
                />
                <Image
                  src="img_placeholder_1.png"
                  className="2xl:h-[274px] 3xl:h-[328px] absolute h-[364px] lg:h-[213px] object-contain right-[0] top-[0] w-[41%] xl:h-[243px]"
                  alt="placeholder"
                />
                <Column className="absolute font-playfairdisplay h-[max-content] inset-y-[0] justify-start left-[0] my-[auto] w-[70%]">
                  <Text className="2xl:text-fs72 3xl:text-fs86 font-normal font-playfairdisplay lg:text-fs56 self-stretch text-fs96 text-gray_800 text-left xl:text-fs64">{`Summer Sale`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs48 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs57 font-bold font-poppins lg:mr-[5px] lg:mt-[4px] lg:text-fs37 mr-[10px] mt-[8px] text-fs64 text-gray_800 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs42">{`50% Off`}</Text>
                  <Text className="2xl:leading-lh24 2xl:mr-[7px] 2xl:mt-[24px] 2xl:text-fs13 3xl:leading-lh28 3xl:mr-[9px] 3xl:mt-[28px] 3xl:text-fs16 font-normal font-poppins leading-lh3200 lg:leading-lh18 lg:mr-[5px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[32px] text-fs18 text-gray_800 text-left w-[79%] xl:leading-lh21 xl:mr-[6px] xl:mt-[21px] xl:text-fs12">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                  <Row className="2xl:mr-[7px] 2xl:mt-[42px] 3xl:mr-[9px] 3xl:mt-[50px] bg-gray_800 font-poppins items-center justify-start lg:mr-[5px] lg:mt-[32px] mr-[10px] mt-[56px] w-[37%] xl:mr-[6px] xl:mt-[37px]">
                    <Text className="2xl:ml-[24px] 2xl:my-[9px] 2xl:text-fs18 3xl:ml-[29px] 3xl:my-[10px] 3xl:text-fs21 font-medium lg:ml-[19px] lg:my-[7px] lg:text-fs14 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[22px] xl:my-[8px] xl:text-fs16">{`Shop Now`}</Text>
                    <Image
                      src="img_arrow.svg"
                      className="2xl:h-[37px] 2xl:ml-[7px] 2xl:mr-[24px] 2xl:my-[4px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[9px] 3xl:mr-[29px] 3xl:my-[5px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[5px] lg:mr-[19px] lg:my-[3px] lg:w-[28px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[33px] xl:ml-[6px] xl:mr-[22px] xl:my-[4px] xl:w-[32px]"
                      alt="Arrow"
                    />
                  </Row>
                </Column>
              </Stack>
              <Column className="items-center justify-start w-[44%]">
                <Image
                  src="img_placeholder_2.png"
                  className="2xl:h-[274px] 3xl:h-[328px] h-[364px] lg:h-[213px] object-cover self-stretch w-[100%] xl:h-[243px]"
                  alt="placeholder"
                />
                <Row className="items-center justify-evenly px-[0] self-stretch w-[100%]">
                  <Image
                    src="img_placeholder_3.png"
                    className="2xl:h-[253px] 3xl:h-[303px] h-[336px] lg:h-[196px] object-contain w-[46%] xl:h-[225px]"
                    alt="placeholder"
                  />
                  <Stack className="2xl:h-[253px] 3xl:h-[303px] h-[336px] lg:h-[196px] w-[54%] xl:h-[225px]">
                    <Image
                      src="img_placeholder_4.png"
                      className="2xl:h-[253px] 3xl:h-[303px] absolute h-[336px] inset-[0] lg:h-[196px] object-cover self-stretch w-[100%] xl:h-[225px]"
                      alt="placeholder"
                    />
                    <Image
                      src="img_button.svg"
                      className="2xl:h-[37px] 3xl:h-[44px] absolute bottom-[0] h-[48px] inset-x-[0] lg:h-[28px] mx-[auto] object-contain w-[35%] xl:h-[33px]"
                      alt="button"
                    />
                  </Stack>
                </Row>
              </Column>
            </Row>,

            <Row className="bg-gray_100 items-center justify-end self-stretch">
              <Stack className="2xl:h-[526px] 2xl:ml-[108px] 3xl:h-[631px] 3xl:ml-[129px] h-[700px] lg:h-[409px] lg:ml-[84px] ml-[144px] w-[49%] xl:h-[468px] xl:ml-[96px]">
                <Image
                  src="img_placeholder.png"
                  className="2xl:h-[253px] 3xl:h-[303px] absolute bottom-[0] h-[336px] lg:h-[196px] object-contain right-[0] w-[41%] xl:h-[225px]"
                  alt="placeholder"
                />
                <Image
                  src="img_placeholder_1.png"
                  className="2xl:h-[274px] 3xl:h-[328px] absolute h-[364px] lg:h-[213px] object-contain right-[0] top-[0] w-[41%] xl:h-[243px]"
                  alt="placeholder"
                />
                <Column className="absolute font-playfairdisplay h-[max-content] inset-y-[0] justify-start left-[0] my-[auto] w-[70%]">
                  <Text className="2xl:text-fs72 3xl:text-fs86 font-normal font-playfairdisplay lg:text-fs56 self-stretch text-fs96 text-gray_800 text-left xl:text-fs64">{`Summer Sale`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs48 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs57 font-bold font-poppins lg:mr-[5px] lg:mt-[4px] lg:text-fs37 mr-[10px] mt-[8px] text-fs64 text-gray_800 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs42">{`50% Off`}</Text>
                  <Text className="2xl:leading-lh24 2xl:mr-[7px] 2xl:mt-[24px] 2xl:text-fs13 3xl:leading-lh28 3xl:mr-[9px] 3xl:mt-[28px] 3xl:text-fs16 font-normal font-poppins leading-lh3200 lg:leading-lh18 lg:mr-[5px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[32px] text-fs18 text-gray_800 text-left w-[79%] xl:leading-lh21 xl:mr-[6px] xl:mt-[21px] xl:text-fs12">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                  <Row className="2xl:mr-[7px] 2xl:mt-[42px] 3xl:mr-[9px] 3xl:mt-[50px] bg-gray_800 font-poppins items-center justify-start lg:mr-[5px] lg:mt-[32px] mr-[10px] mt-[56px] w-[37%] xl:mr-[6px] xl:mt-[37px]">
                    <Text className="2xl:ml-[24px] 2xl:my-[9px] 2xl:text-fs18 3xl:ml-[29px] 3xl:my-[10px] 3xl:text-fs21 font-medium lg:ml-[19px] lg:my-[7px] lg:text-fs14 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[22px] xl:my-[8px] xl:text-fs16">{`Shop Now`}</Text>
                    <Image
                      src="img_arrow.svg"
                      className="2xl:h-[37px] 2xl:ml-[7px] 2xl:mr-[24px] 2xl:my-[4px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[9px] 3xl:mr-[29px] 3xl:my-[5px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[5px] lg:mr-[19px] lg:my-[3px] lg:w-[28px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[33px] xl:ml-[6px] xl:mr-[22px] xl:my-[4px] xl:w-[32px]"
                      alt="Arrow"
                    />
                  </Row>
                </Column>
              </Stack>
              <Column className="items-center justify-start w-[44%]">
                <Image
                  src="img_placeholder_2.png"
                  className="2xl:h-[274px] 3xl:h-[328px] h-[364px] lg:h-[213px] object-cover self-stretch w-[100%] xl:h-[243px]"
                  alt="placeholder"
                />
                <Row className="items-center justify-evenly px-[0] self-stretch w-[100%]">
                  <Image
                    src="img_placeholder_3.png"
                    className="2xl:h-[253px] 3xl:h-[303px] h-[336px] lg:h-[196px] object-contain w-[46%] xl:h-[225px]"
                    alt="placeholder"
                  />
                  <Stack className="2xl:h-[253px] 3xl:h-[303px] h-[336px] lg:h-[196px] w-[54%] xl:h-[225px]">
                    <Image
                      src="img_placeholder_4.png"
                      className="2xl:h-[253px] 3xl:h-[303px] absolute h-[336px] inset-[0] lg:h-[196px] object-cover self-stretch w-[100%] xl:h-[225px]"
                      alt="placeholder"
                    />
                    <Image
                      src="img_button.svg"
                      className="2xl:h-[37px] 3xl:h-[44px] absolute bottom-[0] h-[48px] inset-x-[0] lg:h-[28px] mx-[auto] object-contain w-[35%] xl:h-[33px]"
                      alt="button"
                    />
                  </Stack>
                </Row>
              </Column>
            </Row>,
          ]}
        />
      </Stack>
      <Column className="2xl:mt-[75px] 3xl:mt-[90px] items-center justify-start lg:mt-[58px] mt-[100px] mx-[auto] w-[85%] xl:mt-[66px]">
        <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
          <Text className="2xl:text-fs27 3xl:text-fs32 font-bold lg:text-fs21 text-fs36 text-gray_800 text-left xl:text-fs24">{`Categories`}</Text>
          <Row className="2xl:mb-[9px] 2xl:mt-[8px] 3xl:mb-[10px] 3xl:mt-[9px] font-poppins items-center justify-between lg:mb-[7px] lg:mt-[6px] mb-[12px] mt-[11px] px-[0] w-[7%] xl:mb-[8px] xl:mt-[7px]">
            <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 my-[1px] text-fs18 text-gray_800 text-left xl:text-fs12">{`View all`}</Text>
            <Image
              src="img_arrow_1.svg"
              className="2xl:h-[24px] 3xl:h-[28px] h-[31px] lg:h-[19px] object-contain w-[29%] xl:h-[21px]"
              alt="Arrow"
            />
          </Row>
        </Row>
        <Row className="2xl:mt-[24px] 3xl:mt-[28px] items-center justify-between lg:mt-[18px] mt-[32px] px-[0] self-stretch w-[100%] xl:mt-[21px]">
          <Column className="bg-gray_100 font-poppins items-center justify-center w-[15%]">
            <Image
              src="img_sweater.svg"
              className="2xl:h-[73px] 2xl:mt-[27px] 2xl:w-[72px] 3xl:h-[87px] 3xl:mt-[32px] 3xl:w-[86px] h-[96px] lg:h-[56px] lg:mt-[21px] lg:w-[56px] mt-[36px] mx-[auto] object-contain w-[96px] xl:h-[65px] xl:mt-[24px] xl:w-[64px]"
              alt="Sweater"
            />
            <Text className="2xl:mb-[34px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[41px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[26px] lg:mt-[4px] lg:text-fs10 mb-[46px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[30px] xl:mt-[5px] xl:text-fs12">{`Jacket`}</Text>
          </Column>
          <Column className="bg-gray_100 font-poppins items-center justify-center w-[15%]">
            <Image
              src="img_tshirt.svg"
              className="2xl:h-[73px] 2xl:mt-[27px] 2xl:w-[72px] 3xl:h-[87px] 3xl:mt-[32px] 3xl:w-[86px] h-[96px] lg:h-[56px] lg:mt-[21px] lg:w-[56px] mt-[36px] mx-[auto] object-contain w-[96px] xl:h-[65px] xl:mt-[24px] xl:w-[64px]"
              alt="Tshirt"
            />
            <Text className="2xl:mb-[34px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[41px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[26px] lg:mt-[4px] lg:text-fs10 mb-[46px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[30px] xl:mt-[5px] xl:text-fs12">{`Shirt`}</Text>
          </Column>
          <Column className="bg-gray_100 font-poppins items-center justify-center w-[15%]">
            <Image
              src="img_pants.svg"
              className="2xl:h-[73px] 2xl:mt-[27px] 2xl:w-[72px] 3xl:h-[87px] 3xl:mt-[32px] 3xl:w-[86px] h-[96px] lg:h-[56px] lg:mt-[21px] lg:w-[56px] mt-[36px] mx-[auto] object-contain w-[96px] xl:h-[65px] xl:mt-[24px] xl:w-[64px]"
              alt="Pants"
            />
            <Text className="2xl:mb-[34px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[41px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[26px] lg:mt-[4px] lg:text-fs10 mb-[46px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[30px] xl:mt-[5px] xl:text-fs12">{`Pants`}</Text>
          </Column>
          <Column className="bg-gray_800 font-poppins items-center justify-center w-[15%]">
            <Image
              src="img_boot.svg"
              className="2xl:h-[73px] 2xl:mt-[27px] 2xl:w-[72px] 3xl:h-[87px] 3xl:mt-[32px] 3xl:w-[86px] h-[96px] lg:h-[56px] lg:mt-[21px] lg:w-[56px] mt-[36px] mx-[auto] object-contain w-[96px] xl:h-[65px] xl:mt-[24px] xl:w-[64px]"
              alt="Boot"
            />
            <Text className="2xl:mb-[34px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[41px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[26px] lg:mt-[4px] lg:text-fs10 mb-[46px] mt-[8px] mx-[auto] text-fs18 text-left text-white_A700 xl:mb-[30px] xl:mt-[5px] xl:text-fs12">{`Shoes`}</Text>
          </Column>
          <Column className="bg-gray_100 font-poppins items-center justify-center w-[15%]">
            <Image
              src="img_dress.svg"
              className="2xl:h-[73px] 2xl:mt-[27px] 2xl:w-[72px] 3xl:h-[87px] 3xl:mt-[32px] 3xl:w-[86px] h-[96px] lg:h-[56px] lg:mt-[21px] lg:w-[56px] mt-[36px] mx-[auto] object-contain w-[96px] xl:h-[65px] xl:mt-[24px] xl:w-[64px]"
              alt="Dress"
            />
            <Text className="2xl:mb-[34px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[41px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[26px] lg:mt-[4px] lg:text-fs10 mb-[46px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[30px] xl:mt-[5px] xl:text-fs12">{`Dress`}</Text>
          </Column>
          <Column className="bg-gray_100 font-poppins items-center justify-center w-[15%]">
            <Image
              src="img_belt.svg"
              className="2xl:h-[73px] 2xl:mt-[27px] 2xl:w-[72px] 3xl:h-[87px] 3xl:mt-[32px] 3xl:w-[86px] h-[96px] lg:h-[56px] lg:mt-[21px] lg:w-[56px] mt-[36px] mx-[auto] object-contain w-[96px] xl:h-[65px] xl:mt-[24px] xl:w-[64px]"
              alt="Belt"
            />
            <Text className="2xl:mb-[34px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[41px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[26px] lg:mt-[4px] lg:text-fs10 mb-[46px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[30px] xl:mt-[5px] xl:text-fs12">{`Accesories`}</Text>
          </Column>
        </Row>
      </Column>
      <Column className="2xl:mt-[75px] 3xl:mt-[90px] items-center justify-start lg:mt-[58px] mt-[100px] self-stretch w-[100%] xl:mt-[66px]">
        <Row className="font-poppins items-center justify-between mx-[auto] px-[0] w-[85%]">
          <Text className="2xl:text-fs27 3xl:text-fs32 font-bold lg:text-fs21 text-fs36 text-gray_800 text-left xl:text-fs24">{`New Arrivals`}</Text>
          <Row className="2xl:mb-[9px] 2xl:mt-[8px] 3xl:mb-[10px] 3xl:mt-[9px] font-poppins items-center justify-between lg:mb-[7px] lg:mt-[6px] mb-[12px] mt-[11px] px-[0] w-[7%] xl:mb-[8px] xl:mt-[7px]">
            <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 my-[1px] text-fs18 text-gray_800 text-left xl:text-fs12">{`View all`}</Text>
            <Image
              src="img_arrow_2.svg"
              className="2xl:h-[24px] 3xl:h-[28px] h-[31px] lg:h-[19px] object-contain w-[29%] xl:h-[21px]"
              alt="Arrow"
            />
          </Row>
        </Row>
        <Row className="2xl:gap-[24px] 2xl:mt-[24px] 2xl:px-[108px] 3xl:gap-[28px] 3xl:mt-[28px] 3xl:px-[129px] gap-[32px] grid grid-cols-2 items-center justify-start lg:gap-[18px] lg:mt-[18px] lg:px-[84px] mt-[32px] px-[144px] self-stretch w-[100%] xl:gap-[21px] xl:mt-[21px] xl:px-[96px]">
          <Row className="bg-gray_100 items-center justify-center w-[100%]">
            <Image
              src="img_placeholder_5.png"
              className="2xl:h-[474px] 2xl:ml-[46px] 2xl:my-[21px] 3xl:h-[569px] 3xl:ml-[55px] 3xl:my-[25px] h-[631px] lg:h-[369px] lg:ml-[35px] lg:my-[16px] ml-[61.5px] my-[28.5px] object-contain w-[48%] xl:h-[421px] xl:ml-[41px] xl:my-[19px]"
              alt="placeholder"
            />
            <Column className="2xl:ml-[36px] 2xl:mr-[46px] 2xl:my-[200px] 3xl:ml-[43px] 3xl:mr-[55px] 3xl:my-[239px] font-poppins items-center justify-start lg:ml-[28px] lg:mr-[35px] lg:my-[155px] ml-[48px] mr-[61.5px] my-[266.5px] w-[31%] xl:ml-[32px] xl:mr-[41px] xl:my-[177px]">
              <Column className="items-center justify-start self-stretch w-[100%]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Purple Warm Jacket`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
              <Button className="2xl:mt-[18px] 2xl:px-[26px] 2xl:py-[13px] 2xl:text-fs13 3xl:mt-[21px] 3xl:px-[31px] 3xl:py-[16px] 3xl:text-fs16 bg-gray_800 border-bw font-bold lg:mt-[14px] lg:px-[20px] lg:py-[10px] lg:text-fs10 mt-[24px] mx-[auto] px-[35px] py-[18.045px] text-center text-fs18 text-white_A700 w-[82%] xl:mt-[16px] xl:px-[23px] xl:py-[12px] xl:text-fs12">{`Add to Cart`}</Button>
            </Column>
          </Row>
          <Grid className="2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 lg:gap-[18px] w-[100%] xl:gap-[21px]">
            <Column className="bg-gray_100 font-poppins items-center justify-center w-[100%]">
              <Image
                src="img_placeholder_6.png"
                className="2xl:h-[133px] 2xl:mt-[24px] 2xl:w-[132px] 3xl:h-[160px] 3xl:mt-[28px] 3xl:w-[159px] h-[177px] lg:h-[104px] lg:mt-[18px] lg:w-[103px] mt-[32px] mx-[auto] object-contain w-[177px] xl:h-[119px] xl:mt-[21px] xl:w-[118px]"
                alt="placeholder"
              />
              <Text className="2xl:mt-[12px] 2xl:mx-[37px] 2xl:text-fs18 3xl:mt-[14px] 3xl:mx-[45px] 3xl:text-fs21 font-medium lg:mt-[9px] lg:mx-[29px] lg:text-fs14 mt-[16px] mx-[50.5px] text-fs24 text-gray_800 text-left xl:mt-[10px] xl:mx-[33px] xl:text-fs16">{`Blue Grey Warm Jacket`}</Text>
              <Text className="2xl:mb-[24px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[28px] 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mb-[18px] lg:mt-[4px] lg:text-fs10 mb-[32px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[21px] xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
            </Column>
            <Column className="bg-gray_100 font-poppins items-center justify-center w-[100%]">
              <Image
                src="img_placeholder_7.png"
                className="2xl:h-[133px] 2xl:mt-[24px] 2xl:w-[132px] 3xl:h-[160px] 3xl:mt-[28px] 3xl:w-[159px] h-[177px] lg:h-[104px] lg:mt-[18px] lg:w-[103px] mt-[32px] mx-[auto] object-contain w-[177px] xl:h-[119px] xl:mt-[21px] xl:w-[118px]"
                alt="placeholder"
              />
              <Text className="2xl:mt-[12px] 2xl:text-fs18 3xl:mt-[14px] 3xl:text-fs21 font-medium lg:mt-[9px] lg:text-fs14 mt-[16px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[10px] xl:text-fs16">{`Denim Jacket`}</Text>
              <Text className="2xl:mb-[24px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[28px] 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mb-[18px] lg:mt-[4px] lg:text-fs10 mb-[32px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[21px] xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
            </Column>
            <Column className="bg-gray_100 font-poppins items-center justify-center w-[100%]">
              <Image
                src="img_placeholder_8.png"
                className="2xl:h-[133px] 2xl:mt-[24px] 2xl:w-[132px] 3xl:h-[160px] 3xl:mt-[28px] 3xl:w-[159px] h-[177px] lg:h-[104px] lg:mt-[18px] lg:w-[103px] mt-[32px] mx-[auto] object-contain w-[177px] xl:h-[119px] xl:mt-[21px] xl:w-[118px]"
                alt="placeholder"
              />
              <Text className="2xl:mt-[12px] 2xl:text-fs18 3xl:mt-[14px] 3xl:text-fs21 font-medium lg:mt-[9px] lg:text-fs14 mt-[16px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[10px] xl:text-fs16">{`Black Jacket`}</Text>
              <Text className="2xl:mb-[24px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[28px] 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mb-[18px] lg:mt-[4px] lg:text-fs10 mb-[32px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[21px] xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
            </Column>
            <Column className="bg-gray_100 font-poppins items-center justify-center w-[100%]">
              <Image
                src="img_placeholder_9.png"
                className="2xl:h-[133px] 2xl:mt-[24px] 2xl:w-[132px] 3xl:h-[160px] 3xl:mt-[28px] 3xl:w-[159px] h-[177px] lg:h-[104px] lg:mt-[18px] lg:w-[103px] mt-[32px] mx-[auto] object-contain w-[177px] xl:h-[119px] xl:mt-[21px] xl:w-[118px]"
                alt="placeholder"
              />
              <Text className="2xl:mt-[12px] 2xl:text-fs18 3xl:mt-[14px] 3xl:text-fs21 font-medium lg:mt-[9px] lg:text-fs14 mt-[16px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[10px] xl:text-fs16">{`Green Polar Jacket`}</Text>
              <Text className="2xl:mb-[24px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[28px] 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mb-[18px] lg:mt-[4px] lg:text-fs10 mb-[32px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[21px] xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Grid>
        </Row>
      </Column>
      <Column className="2xl:mt-[75px] 3xl:mt-[90px] items-center justify-start lg:mt-[58px] mt-[100px] mx-[auto] w-[85%] xl:mt-[66px]">
        <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
          <Text className="2xl:text-fs27 3xl:text-fs32 font-bold lg:text-fs21 text-fs36 text-gray_800 text-left xl:text-fs24">{`Featured`}</Text>
          <Row className="2xl:mb-[9px] 2xl:mt-[8px] 3xl:mb-[10px] 3xl:mt-[9px] font-poppins items-center justify-between lg:mb-[7px] lg:mt-[6px] mb-[12px] mt-[11px] px-[0] w-[7%] xl:mb-[8px] xl:mt-[7px]">
            <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 my-[1px] text-fs18 text-gray_800 text-left xl:text-fs12">{`View all`}</Text>
            <Image
              src="img_arrow_2.svg"
              className="2xl:h-[24px] 3xl:h-[28px] h-[31px] lg:h-[19px] object-contain w-[29%] xl:h-[21px]"
              alt="Arrow"
            />
          </Row>
        </Row>
        <List
          className="2xl:mt-[24px] 3xl:mt-[28px] flex-wrap gap-[0] lg:mt-[18px] min-h-[auto] mt-[32px] self-stretch w-[100%] xl:mt-[21px]"
          orientation="vertical"
        >
          <Row className="2xl:my-[12px] 3xl:my-[14px] items-center justify-between lg:my-[9px] my-[16px] px-[0] self-stretch w-[100%] xl:my-[10px]">
            <Column className="border-2 border-gray_800 border-solid font-poppins items-center justify-center w-[24%]">
              <Image
                src="img_placeholder_10.png"
                className="2xl:h-[188px] 2xl:mt-[32px] 2xl:w-[187px] 3xl:h-[226px] 3xl:mt-[39px] 3xl:w-[225px] h-[250px] lg:h-[146px] lg:mt-[25px] lg:w-[145px] mt-[43.5px] mx-[auto] object-contain w-[250px] xl:h-[167px] xl:mt-[29px] xl:w-[166px]"
                alt="placeholder"
              />
              <Text className="2xl:mt-[12px] 2xl:text-fs18 3xl:mt-[14px] 3xl:text-fs21 font-medium lg:mt-[9px] lg:text-fs14 mt-[16px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[10px] xl:text-fs16">{`Black Briefcase`}</Text>
              <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              <Button className="2xl:mb-[32px] 2xl:mt-[12px] 2xl:px-[26px] 2xl:py-[13px] 2xl:text-fs13 3xl:mb-[39px] 3xl:mt-[14px] 3xl:px-[31px] 3xl:py-[16px] 3xl:text-fs16 bg-gray_800 border-bw font-bold lg:mb-[25px] lg:mt-[9px] lg:px-[20px] lg:py-[10px] lg:text-fs10 mb-[43.5px] mt-[16px] mx-[auto] px-[35px] py-[18.045px] text-center text-fs18 text-white_A700 w-[52%] xl:mb-[29px] xl:mt-[10px] xl:px-[23px] xl:py-[12px] xl:text-fs12">{`Add to Cart`}</Button>
            </Column>
            <Column className="items-center justify-center w-[24%]">
              <Image
                src="img_placeholder_11.png"
                className="2xl:h-[188px] 2xl:mt-[61px] 2xl:w-[187px] 3xl:h-[226px] 3xl:mt-[73px] 3xl:w-[225px] h-[250px] lg:h-[146px] lg:mt-[47px] lg:w-[145px] mt-[81.5px] mx-[auto] object-contain w-[250px] xl:h-[167px] xl:mt-[54px] xl:w-[166px]"
                alt="placeholder"
              />
              <Column className="2xl:mb-[61px] 2xl:mt-[12px] 3xl:mb-[73px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81.5px] mt-[16px] mx-[auto] w-[29%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Pink Shirt`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center mb-[1px] w-[24%]">
              <Image
                src="img_placeholder_12.png"
                className="2xl:h-[188px] 2xl:mt-[60px] 2xl:w-[187px] 3xl:h-[226px] 3xl:mt-[72px] 3xl:w-[225px] h-[250px] lg:h-[146px] lg:mt-[47px] lg:w-[145px] mt-[81px] mx-[auto] object-contain w-[250px] xl:h-[167px] xl:mt-[54px] xl:w-[166px]"
                alt="placeholder"
              />
              <Column className="2xl:mb-[60px] 2xl:mt-[12px] 3xl:mb-[72px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81px] mt-[16px] mx-[auto] w-[38%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Gray T-shirt`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center mt-[1px] w-[24%]">
              <Image
                src="img_placeholder_13.png"
                className="2xl:h-[188px] 2xl:mt-[60px] 2xl:w-[187px] 3xl:h-[226px] 3xl:mt-[72px] 3xl:w-[225px] h-[250px] lg:h-[146px] lg:mt-[47px] lg:w-[145px] mt-[81px] mx-[auto] object-contain w-[250px] xl:h-[167px] xl:mt-[54px] xl:w-[166px]"
                alt="placeholder"
              />
              <Column className="2xl:mb-[60px] 2xl:mt-[12px] 3xl:mb-[72px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81px] mt-[16px] mx-[auto] w-[36%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Red Flannel`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
          </Row>
          <Row className="2xl:my-[12px] 3xl:my-[14px] items-center justify-between lg:my-[9px] my-[16px] px-[0] self-stretch w-[100%] xl:my-[10px]">
            <Column className="items-center justify-center w-[24%]">
              <Image
                src="img_stylishblacks.png"
                className="2xl:h-[188px] 2xl:mt-[61px] 2xl:w-[187px] 3xl:h-[226px] 3xl:mt-[73px] 3xl:w-[225px] h-[250px] lg:h-[146px] lg:mt-[47px] lg:w-[145px] mt-[81.5px] mx-[auto] object-contain w-[250px] xl:h-[167px] xl:mt-[54px] xl:w-[166px]"
                alt="stylishblacks"
              />
              <Column className="2xl:mb-[61px] 2xl:mt-[12px] 3xl:mb-[73px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81.5px] mt-[16px] mx-[auto] w-[50%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Black Highheels`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center w-[24%]">
              <Image
                src="img_casualfabrics.png"
                className="2xl:h-[188px] 2xl:mt-[61px] 2xl:w-[187px] 3xl:h-[226px] 3xl:mt-[73px] 3xl:w-[225px] h-[250px] lg:h-[146px] lg:mt-[47px] lg:w-[145px] mt-[81.5px] mx-[auto] object-contain w-[250px] xl:h-[167px] xl:mt-[54px] xl:w-[166px]"
                alt="casualfabrics"
              />
              <Column className="2xl:mb-[61px] 2xl:mt-[12px] 3xl:mb-[73px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81.5px] mt-[16px] mx-[auto] w-[59%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Casual Grey Shoes`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center w-[24%]">
              <Image
                src="img_shoesisolated.png"
                className="2xl:h-[188px] 2xl:mt-[61px] 2xl:w-[187px] 3xl:h-[226px] 3xl:mt-[73px] 3xl:w-[225px] h-[250px] lg:h-[146px] lg:mt-[47px] lg:w-[145px] mt-[81.5px] mx-[auto] object-contain w-[250px] xl:h-[167px] xl:mt-[54px] xl:w-[166px]"
                alt="shoesisolated"
              />
              <Column className="2xl:mb-[61px] 2xl:mt-[12px] 3xl:mb-[73px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81.5px] mt-[16px] mx-[auto] w-[40%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Brown Shoes`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center mt-[1px] w-[24%]">
              <Image
                src="img_businessshirt.png"
                className="2xl:h-[188px] 2xl:mt-[60px] 2xl:w-[187px] 3xl:h-[226px] 3xl:mt-[72px] 3xl:w-[225px] h-[250px] lg:h-[146px] lg:mt-[47px] lg:w-[145px] mt-[81px] mx-[auto] object-contain w-[250px] xl:h-[167px] xl:mt-[54px] xl:w-[166px]"
                alt="businessshirt"
              />
              <Column className="2xl:mb-[60px] 2xl:mt-[12px] 3xl:mb-[72px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81px] mt-[16px] mx-[auto] w-[43%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Business Shirt`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
          </Row>
          <Row className="2xl:my-[12px] 3xl:my-[14px] items-center justify-between lg:my-[9px] my-[16px] px-[0] self-stretch w-[100%] xl:my-[10px]">
            <Column className="items-center justify-center w-[24%]">
              <Image
                src="img_warmpantspxl7.png"
                className="2xl:h-[188px] 2xl:mt-[61px] 2xl:w-[187px] 3xl:h-[226px] 3xl:mt-[73px] 3xl:w-[225px] h-[250px] lg:h-[146px] lg:mt-[47px] lg:w-[145px] mt-[81.5px] mx-[auto] object-contain w-[250px] xl:h-[167px] xl:mt-[54px] xl:w-[166px]"
                alt="warmpantsPXL7"
              />
              <Column className="2xl:mb-[61px] 2xl:mt-[12px] 3xl:mb-[73px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81.5px] mt-[16px] mx-[auto] w-[55%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Grey Warm Pants`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center w-[24%]">
              <Image
                src="img_sportj9bzxuy.png"
                className="2xl:h-[188px] 2xl:mt-[61px] 2xl:w-[187px] 3xl:h-[226px] 3xl:mt-[73px] 3xl:w-[225px] h-[250px] lg:h-[146px] lg:mt-[47px] lg:w-[145px] mt-[81.5px] mx-[auto] object-contain w-[250px] xl:h-[167px] xl:mt-[54px] xl:w-[166px]"
                alt="sportJ9BZXUY"
              />
              <Column className="2xl:mb-[61px] 2xl:mt-[12px] 3xl:mb-[73px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81.5px] mt-[16px] mx-[auto] w-[60%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Green Sport Jacket`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center mb-[1px] w-[24%]">
              <Image
                src="img_travel8v7cnke.png"
                className="2xl:h-[188px] 2xl:mt-[60px] 2xl:w-[187px] 3xl:h-[226px] 3xl:mt-[72px] 3xl:w-[225px] h-[250px] lg:h-[146px] lg:mt-[47px] lg:w-[145px] mt-[81px] mx-[auto] object-contain w-[250px] xl:h-[167px] xl:mt-[54px] xl:w-[166px]"
                alt="travel8V7CNKE"
              />
              <Column className="2xl:mb-[60px] 2xl:mt-[12px] 3xl:mb-[72px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81px] mt-[16px] mx-[auto] w-[64%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Purple Warm Jacket`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center mt-[1px] w-[24%]">
              <Image
                src="img_womensdenimsk.png"
                className="2xl:h-[188px] 2xl:mt-[60px] 2xl:w-[187px] 3xl:h-[226px] 3xl:mt-[72px] 3xl:w-[225px] h-[250px] lg:h-[146px] lg:mt-[47px] lg:w-[145px] mt-[81px] mx-[auto] object-contain w-[250px] xl:h-[167px] xl:mt-[54px] xl:w-[166px]"
                alt="womensdenimsk"
              />
              <Column className="2xl:mb-[60px] 2xl:mt-[12px] 3xl:mb-[72px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81px] mt-[16px] mx-[auto] w-[63%] xl:mb-[54px] xl:mt-[10px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Woman Denim Skirt`}</Text>
                <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
              </Column>
            </Column>
          </Row>
        </List>
      </Column>
      <Stack className="2xl:h-[409px] 2xl:mt-[55px] 3xl:h-[490px] 3xl:mt-[66px] h-[544px] lg:h-[318px] lg:mt-[43px] mt-[74px] self-stretch w-[100%] xl:h-[363px] xl:mt-[49px]">
        <Column className="absolute bg-gray_800 font-poppins items-center justify-start self-stretch top-[0] w-[100%]">
          <Text className="2xl:mb-[245px] 2xl:mt-[33px] 2xl:mx-[108px] 2xl:text-fs27 3xl:mb-[294px] 3xl:mt-[40px] 3xl:mx-[129px] 3xl:text-fs32 font-bold lg:mb-[190px] lg:mt-[26px] lg:mx-[84px] lg:text-fs21 mb-[327px] mt-[45px] mx-[144px] text-fs36 text-left text-white_A700 xl:mb-[218px] xl:mt-[30px] xl:mx-[96px] xl:text-fs24">{`Summer Collections`}</Text>
        </Column>
        <Stack className="2xl:h-[301px] 3xl:h-[361px] absolute bottom-[0] h-[400px] inset-x-[0] lg:h-[234px] mx-[auto] w-[87%] xl:h-[267px]">
          <Row className="2xl:gap-[24px] 2xl:right-[22px] 3xl:gap-[28px] 3xl:right-[27px] absolute gap-[32px] grid grid-cols-3 inset-y-[0] items-center justify-between left-[0] lg:gap-[18px] lg:right-[17px] right-[30px] w-[98%] xl:gap-[21px] xl:right-[20px]">
            <Stack className="2xl:h-[301px] 3xl:h-[361px] bg-bluegray_100 font-poppins h-[400px] lg:h-[234px] w-[100%] xl:h-[267px]">
              <Image
                src="img_image2.png"
                className="2xl:h-[301px] 3xl:h-[361px] absolute h-[400px] inset-[0] lg:h-[234px] object-cover self-stretch w-[100%] xl:h-[267px]"
                alt="image2"
              />
              <Text className="2xl:left-[44px] 2xl:text-fs27 3xl:left-[53px] 3xl:text-fs32 absolute font-normal h-[max-content] inset-y-[0] leading-lh left-[59px] lg:left-[34px] lg:text-fs21 my-[auto] text-fs36 text-gray_800 text-left w-[36%] xl:left-[39px] xl:text-fs24">
                <span className="text-gray_800 text-fs36 font-poppins text-left font-normal lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                  <>
                    {`Summer `}
                    <br />
                    {``}
                  </>
                </span>
                <span className="text-gray_800 text-fs36 font-poppins text-left font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                  <>{`Collection`}</>
                </span>
              </Text>
            </Stack>
            <Stack className="2xl:h-[301px] 3xl:h-[361px] bg-bluegray_100 font-poppins h-[400px] lg:h-[234px] w-[100%] xl:h-[267px]">
              <Image
                src="img_image3.png"
                className="2xl:h-[301px] 3xl:h-[361px] absolute h-[400px] inset-[0] lg:h-[234px] object-cover self-stretch w-[100%] xl:h-[267px]"
                alt="image3"
              />
              <Text className="2xl:left-[39px] 2xl:text-fs27 3xl:left-[47px] 3xl:text-fs32 absolute font-normal h-[max-content] inset-y-[0] leading-lh left-[53px] lg:left-[30px] lg:text-fs21 my-[auto] text-fs36 text-left text-white_A700 w-[36%] xl:left-[35px] xl:text-fs24">
                <span className="text-white_A700 text-fs36 font-poppins text-left font-normal lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                  <>
                    {`Casual `}
                    <br />
                    {``}
                  </>
                </span>
                <span className="text-white_A700 text-fs36 font-poppins text-left font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                  <>{`Collection`}</>
                </span>
              </Text>
            </Stack>
            <Stack className="2xl:h-[301px] 3xl:h-[361px] bg-bluegray_100 font-poppins h-[400px] lg:h-[234px] w-[100%] xl:h-[267px]">
              <Image
                src="img_image4.png"
                className="2xl:h-[301px] 3xl:h-[361px] absolute h-[400px] inset-[0] lg:h-[234px] object-cover self-stretch w-[100%] xl:h-[267px]"
                alt="image4"
              />
              <Text className="2xl:left-[39px] 2xl:text-fs27 3xl:left-[46px] 3xl:text-fs32 absolute font-normal h-[max-content] inset-y-[0] leading-lh left-[52px] lg:left-[30px] lg:text-fs21 my-[auto] text-fs36 text-left text-white_A700 w-[36%] xl:left-[34px] xl:text-fs24">
                <span className="text-white_A700 text-fs36 font-poppins text-left font-normal lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                  <>
                    {`Big Vibe `}
                    <br />
                    {``}
                  </>
                </span>
                <span className="text-white_A700 text-fs36 font-poppins text-left font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                  <>{`Collection`}</>
                </span>
              </Text>
            </Stack>
          </Row>
          <Image
            src="img_next.svg"
            className="2xl:h-[46px] 2xl:w-[45px] 3xl:h-[55px] 3xl:w-[54px] absolute h-[60px] inset-y-[0] lg:h-[35px] lg:w-[35px] my-[auto] object-contain right-[0] w-[60px] xl:h-[41px] xl:w-[40px]"
            alt="next"
          />
        </Stack>
      </Stack>
      <Column className="2xl:mt-[75px] 3xl:mt-[90px] items-center justify-start lg:mt-[58px] mt-[100px] mx-[auto] w-[85%] xl:mt-[66px]">
        <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
          <Text className="2xl:text-fs27 3xl:text-fs32 font-bold lg:text-fs21 text-fs36 text-gray_800 text-left xl:text-fs24">{`Popular This Week`}</Text>
          <Row className="2xl:mb-[9px] 2xl:mt-[8px] 3xl:mb-[10px] 3xl:mt-[9px] font-poppins items-center justify-between lg:mb-[7px] lg:mt-[6px] mb-[12px] mt-[11px] px-[0] w-[7%] xl:mb-[8px] xl:mt-[7px]">
            <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 my-[1px] text-fs18 text-gray_800 text-left xl:text-fs12">{`View all`}</Text>
            <Image
              src="img_arrow_3.svg"
              className="2xl:h-[24px] 3xl:h-[28px] h-[31px] lg:h-[19px] object-contain w-[29%] xl:h-[21px]"
              alt="Arrow"
            />
          </Row>
        </Row>
        <Grid className="2xl:gap-[24px] 2xl:mt-[24px] 3xl:gap-[28px] 3xl:mt-[28px] gap-[32px] grid grid-cols-3 lg:gap-[18px] lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:gap-[21px] xl:mt-[21px]">
          <Row className="items-center justify-start w-[100%]">
            <Image
              src="img_placeholder_14.png"
              className="2xl:h-[132px] 2xl:ml-[18px] 2xl:my-[16px] 3xl:h-[158px] 3xl:ml-[21px] 3xl:my-[20px] h-[175px] lg:h-[103px] lg:ml-[14px] lg:my-[13px] ml-[24px] my-[22.5px] object-contain w-[43%] xl:h-[117px] xl:ml-[16px] xl:my-[15px]"
              alt="placeholder"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[28px] 2xl:my-[37px] 3xl:ml-[14px] 3xl:mr-[34px] 3xl:my-[45px] justify-start lg:ml-[9px] lg:mr-[22px] lg:my-[29px] ml-[16px] mr-[38px] my-[50px] w-[42%] xl:ml-[10px] xl:mr-[25px] xl:my-[33px]">
              <Column className="items-center self-stretch w-[100%]">
                <Column className="font-poppins justify-start self-stretch w-[100%]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Checkered Jacket`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
              </Column>
              <RatingBar
                className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] xl:mr-[6px] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
          </Row>
          <Row className="items-center justify-center w-[100%]">
            <Image
              src="img_placeholder_15.png"
              className="2xl:h-[132px] 2xl:ml-[18px] 2xl:my-[16px] 3xl:h-[158px] 3xl:ml-[21px] 3xl:my-[20px] h-[175px] lg:h-[103px] lg:ml-[14px] lg:my-[13px] ml-[24px] my-[22.5px] object-contain w-[43%] xl:h-[117px] xl:ml-[16px] xl:my-[15px]"
              alt="placeholder"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[58px] 2xl:my-[37px] 3xl:ml-[14px] 3xl:mr-[70px] 3xl:my-[45px] justify-start lg:ml-[9px] lg:mr-[45px] lg:my-[29px] ml-[16px] mr-[78px] my-[50px] w-[34%] xl:ml-[10px] xl:mr-[52px] xl:my-[33px]">
              <Column className="items-center self-stretch w-[100%]">
                <Column className="font-poppins justify-start self-stretch w-[100%]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Elegant Jacket`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
              </Column>
              <RatingBar
                className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] xl:mr-[6px] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
          </Row>
          <Row className="items-center justify-center w-[100%]">
            <Image
              src="img_placeholder_16.png"
              className="2xl:h-[132px] 2xl:ml-[18px] 2xl:my-[16px] 3xl:h-[158px] 3xl:ml-[21px] 3xl:my-[20px] h-[175px] lg:h-[103px] lg:ml-[14px] lg:my-[13px] ml-[24px] my-[22.5px] object-contain w-[43%] xl:h-[117px] xl:ml-[16px] xl:my-[15px]"
              alt="placeholder"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[13px] 2xl:my-[37px] 3xl:ml-[14px] 3xl:mr-[16px] 3xl:my-[45px] justify-start lg:ml-[9px] lg:mr-[10px] lg:my-[29px] ml-[16px] mr-[18px] my-[50px] w-[46%] xl:ml-[10px] xl:mr-[12px] xl:my-[33px]">
              <Column className="items-center self-stretch w-[100%]">
                <Column className="font-poppins justify-start self-stretch w-[100%]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Blue Woman Denim`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
              </Column>
              <RatingBar
                className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] xl:mr-[6px] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
          </Row>
          <Row className="items-center justify-start w-[100%]">
            <Image
              src="img_placeholder_17.png"
              className="2xl:h-[132px] 2xl:ml-[18px] 2xl:my-[16px] 3xl:h-[158px] 3xl:ml-[21px] 3xl:my-[20px] h-[175px] lg:h-[103px] lg:ml-[14px] lg:my-[13px] ml-[24px] my-[22.5px] object-contain w-[43%] xl:h-[117px] xl:ml-[16px] xl:my-[15px]"
              alt="placeholder"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[65px] 2xl:my-[37px] 3xl:ml-[14px] 3xl:mr-[78px] 3xl:my-[45px] justify-start lg:ml-[9px] lg:mr-[50px] lg:my-[29px] ml-[16px] mr-[87px] my-[50px] w-[33%] xl:ml-[10px] xl:mr-[58px] xl:my-[33px]">
              <Column className="items-center self-stretch w-[100%]">
                <Column className="font-poppins justify-start self-stretch w-[100%]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Orange Jeans`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
              </Column>
              <RatingBar
                className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] xl:mr-[6px] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
          </Row>
          <Row className="items-center justify-center w-[100%]">
            <Image
              src="img_placeholder_18.png"
              className="2xl:h-[132px] 2xl:ml-[18px] 2xl:my-[16px] 3xl:h-[158px] 3xl:ml-[21px] 3xl:my-[20px] h-[175px] lg:h-[103px] lg:ml-[14px] lg:my-[13px] ml-[24px] my-[22.5px] object-contain w-[43%] xl:h-[117px] xl:ml-[16px] xl:my-[15px]"
              alt="placeholder"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[78px] 2xl:my-[37px] 3xl:ml-[14px] 3xl:mr-[94px] 3xl:my-[45px] justify-start lg:ml-[9px] lg:mr-[61px] lg:my-[29px] ml-[16px] mr-[105px] my-[50px] w-[29%] xl:ml-[10px] xl:mr-[70px] xl:my-[33px]">
              <Column className="2xl:mr-[7px] 3xl:mr-[9px] font-poppins justify-start lg:mr-[5px] mr-[10px] w-[87%] xl:mr-[6px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Blue Jeans`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
              </Column>
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] items-center lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px]">
                <RatingBar
                  className="mx-[auto] self-stretch"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Column>
            </Column>
          </Row>
          <Row className="items-center justify-center w-[100%]">
            <Image
              src="img_placeholder_19.png"
              className="2xl:h-[132px] 2xl:ml-[18px] 2xl:my-[16px] 3xl:h-[158px] 3xl:ml-[21px] 3xl:my-[20px] h-[175px] lg:h-[103px] lg:ml-[14px] lg:my-[13px] ml-[24px] my-[22.5px] object-contain w-[43%] xl:h-[117px] xl:ml-[16px] xl:my-[15px]"
              alt="placeholder"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[79px] 2xl:my-[37px] 3xl:ml-[14px] 3xl:mr-[95px] 3xl:my-[45px] justify-start lg:ml-[9px] lg:mr-[61px] lg:my-[29px] ml-[16px] mr-[106px] my-[50px] w-[29%] xl:ml-[10px] xl:mr-[70px] xl:my-[33px]">
              <Column className="2xl:mr-[6px] 3xl:mr-[7px] font-poppins justify-start lg:mr-[4px] mr-[8px] w-[95%] xl:mr-[5px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Gray Watch`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
              </Column>
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] items-center lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px]">
                <RatingBar
                  className="mx-[auto] self-stretch"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Column>
            </Column>
          </Row>
          <Row className="items-center justify-start w-[100%]">
            <Image
              src="img_placeholder_20.png"
              className="2xl:h-[132px] 2xl:ml-[18px] 2xl:my-[16px] 3xl:h-[158px] 3xl:ml-[21px] 3xl:my-[20px] h-[175px] lg:h-[103px] lg:ml-[14px] lg:my-[13px] ml-[24px] my-[22.5px] object-contain w-[43%] xl:h-[117px] xl:ml-[16px] xl:my-[15px]"
              alt="placeholder"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[25px] 2xl:my-[37px] 3xl:ml-[14px] 3xl:mr-[30px] 3xl:my-[45px] justify-start lg:ml-[9px] lg:mr-[19px] lg:my-[29px] ml-[16px] mr-[34px] my-[50px] w-[43%] xl:ml-[10px] xl:mr-[22px] xl:my-[33px]">
              <Column className="items-center self-stretch w-[100%]">
                <Column className="font-poppins justify-start self-stretch w-[100%]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Black Sport Jacket`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
              </Column>
              <RatingBar
                className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] xl:mr-[6px] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
          </Row>
          <Row className="items-center justify-center w-[100%]">
            <Image
              src="img_placeholder_21.png"
              className="2xl:h-[132px] 2xl:ml-[18px] 2xl:my-[16px] 3xl:h-[158px] 3xl:ml-[21px] 3xl:my-[20px] h-[175px] lg:h-[103px] lg:ml-[14px] lg:my-[13px] ml-[24px] my-[22.5px] object-contain w-[43%] xl:h-[117px] xl:ml-[16px] xl:my-[15px]"
              alt="placeholder"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[78px] 2xl:my-[37px] 3xl:ml-[14px] 3xl:mr-[94px] 3xl:my-[45px] justify-start lg:ml-[9px] lg:mr-[61px] lg:my-[29px] ml-[16px] mr-[105px] my-[50px] w-[29%] xl:ml-[10px] xl:mr-[70px] xl:my-[33px]">
              <Column className="2xl:mr-[7px] 3xl:mr-[9px] font-poppins justify-start lg:mr-[5px] mr-[10px] w-[90%] xl:mr-[6px]">
                <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Wristwatch`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
              </Column>
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] items-center lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px]">
                <RatingBar
                  className="mx-[auto] self-stretch"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Column>
            </Column>
          </Row>
          <Row className="items-center justify-center w-[100%]">
            <Image
              src="img_placeholder_22.png"
              className="2xl:h-[132px] 2xl:ml-[18px] 2xl:my-[16px] 3xl:h-[158px] 3xl:ml-[21px] 3xl:my-[20px] h-[175px] lg:h-[103px] lg:ml-[14px] lg:my-[13px] ml-[24px] my-[22.5px] object-contain w-[43%] xl:h-[117px] xl:ml-[16px] xl:my-[15px]"
              alt="placeholder"
            />
            <Column className="2xl:ml-[12px] 2xl:mr-[63px] 2xl:my-[37px] 3xl:ml-[14px] 3xl:mr-[76px] 3xl:my-[45px] justify-start lg:ml-[9px] lg:mr-[49px] lg:my-[29px] ml-[16px] mr-[85px] my-[50px] w-[33%] xl:ml-[10px] xl:mr-[56px] xl:my-[33px]">
              <Column className="items-center self-stretch w-[100%]">
                <Column className="font-poppins justify-start self-stretch w-[100%]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Classic Watch`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
              </Column>
              <RatingBar
                className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] xl:mr-[6px] xl:mt-[10px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
          </Row>
        </Grid>
      </Column>
      <Column className="2xl:mt-[75px] 3xl:mt-[90px] justify-start lg:mt-[58px] mt-[100px] self-stretch w-[100%] xl:mt-[66px]">
        <Text className="2xl:mx-[108px] 2xl:text-fs27 3xl:mx-[129px] 3xl:text-fs32 font-bold lg:mx-[84px] lg:text-fs21 mx-[144px] text-fs36 text-gray_800 text-left xl:mx-[96px] xl:text-fs24">{`Why Choose Us`}</Text>
        <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:mt-[21px]">
          <Column className="bg-gray_100 items-center justify-start self-stretch w-[100%]">
            <List
              className="2xl:gap-[24px] 3xl:gap-[28px] flex-wrap gap-[32px] grid grid-cols-4 lg:gap-[18px] min-h-[auto] mx-[auto] w-[85%] xl:gap-[21px]"
              orientation="horizontal"
            >
              <Column className="items-center justify-center w-[100%]">
                <Image
                  src="img_icon_1.svg"
                  className="2xl:h-[91px] 2xl:mt-[47px] 2xl:w-[90px] 3xl:h-[109px] 3xl:mt-[56px] 3xl:w-[108px] h-[120px] lg:h-[70px] lg:mt-[36px] lg:w-[70px] mt-[63px] mx-[auto] object-contain w-[120px] xl:h-[81px] xl:mt-[42px] xl:w-[80px]"
                  alt="icon"
                />
                <Column className="2xl:mb-[47px] 2xl:mt-[24px] 3xl:mb-[56px] 3xl:mt-[28px] font-poppins justify-start lg:mb-[36px] lg:mt-[18px] mb-[63px] mt-[32px] mx-[auto] w-[55%] xl:mb-[42px] xl:mt-[21px]">
                  <Column className="self-stretch w-[100%]">
                    <Text className="2xl:mx-[19px] 2xl:text-fs18 3xl:mx-[22px] 3xl:text-fs21 font-bold lg:mx-[14px] lg:text-fs14 mx-[25.5px] text-fs24 text-gray_800 text-left xl:mx-[17px] xl:text-fs16">{`Free Delivery`}</Text>
                  </Column>
                  <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal leading-lh lg:mt-[9px] lg:text-fs10 mt-[16px] self-stretch text-center text-fs18 text-gray_500 w-[100%] xl:mt-[10px] xl:text-fs12">
                    {
                      <>
                        {`This free shipping`}
                        <br />
                        {`only for selected region`}
                      </>
                    }
                  </Text>
                </Column>
              </Column>
              <Column className="items-center justify-center w-[100%]">
                <Image
                  src="img_icon_2.svg"
                  className="2xl:h-[91px] 2xl:mt-[47px] 2xl:w-[90px] 3xl:h-[109px] 3xl:mt-[56px] 3xl:w-[108px] h-[120px] lg:h-[70px] lg:mt-[36px] lg:w-[70px] mt-[63px] mx-[auto] object-contain w-[120px] xl:h-[81px] xl:mt-[42px] xl:w-[80px]"
                  alt="icon"
                />
                <Column className="2xl:mb-[47px] 2xl:mt-[24px] 3xl:mb-[56px] 3xl:mt-[28px] font-poppins justify-start lg:mb-[36px] lg:mt-[18px] mb-[63px] mt-[32px] mx-[auto] w-[55%] xl:mb-[42px] xl:mt-[21px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-bold lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Payment Method`}</Text>
                  <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px]">
                    <Text className="2xl:text-fs13 3xl:text-fs16 font-normal leading-lh lg:text-fs10 text-center text-fs18 text-gray_500 w-[100%] xl:text-fs12">
                      {
                        <>
                          {`This free shipping`}
                          <br />
                          {`only for selected region`}
                        </>
                      }
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="items-center justify-center w-[100%]">
                <Image
                  src="img_icon_3.svg"
                  className="2xl:h-[91px] 2xl:mt-[47px] 2xl:w-[90px] 3xl:h-[109px] 3xl:mt-[56px] 3xl:w-[108px] h-[120px] lg:h-[70px] lg:mt-[36px] lg:w-[70px] mt-[63px] mx-[auto] object-contain w-[120px] xl:h-[81px] xl:mt-[42px] xl:w-[80px]"
                  alt="icon"
                />
                <Column className="2xl:mb-[47px] 2xl:mt-[24px] 3xl:mb-[56px] 3xl:mt-[28px] font-poppins items-center justify-start lg:mb-[36px] lg:mt-[18px] mb-[63px] mt-[32px] mx-[auto] w-[55%] xl:mb-[42px] xl:mt-[21px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-bold lg:text-fs14 mx-[auto] text-fs24 text-gray_800 text-left xl:text-fs16">{`Warranty`}</Text>
                  <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal leading-lh lg:mt-[9px] lg:text-fs10 mt-[16px] self-stretch text-center text-fs18 text-gray_500 w-[100%] xl:mt-[10px] xl:text-fs12">
                    {
                      <>
                        {`This free shipping`}
                        <br />
                        {`only for selected region`}
                      </>
                    }
                  </Text>
                </Column>
              </Column>
              <Column className="items-center justify-center w-[100%]">
                <Image
                  src="img_icon_4.svg"
                  className="2xl:h-[91px] 2xl:mt-[47px] 2xl:w-[90px] 3xl:h-[109px] 3xl:mt-[56px] 3xl:w-[108px] h-[120px] lg:h-[70px] lg:mt-[36px] lg:w-[70px] mt-[63px] mx-[auto] object-contain w-[120px] xl:h-[81px] xl:mt-[42px] xl:w-[80px]"
                  alt="icon"
                />
                <Column className="2xl:mb-[47px] 2xl:mt-[24px] 3xl:mb-[56px] 3xl:mt-[28px] font-poppins justify-start lg:mb-[36px] lg:mt-[18px] mb-[63px] mt-[32px] mx-[auto] w-[59%] xl:mb-[42px] xl:mt-[21px]">
                  <Column className="self-stretch w-[100%]">
                    <Text className="2xl:text-fs18 3xl:text-fs21 font-bold lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Customer Support`}</Text>
                  </Column>
                  <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal leading-lh lg:mt-[9px] lg:text-fs10 mt-[16px] mx-[auto] text-center text-fs18 text-gray_500 w-[93%] xl:mt-[10px] xl:text-fs12">
                    {
                      <>
                        {`This free shipping`}
                        <br />
                        {`only for selected region`}
                      </>
                    }
                  </Text>
                </Column>
              </Column>
            </List>
          </Column>
        </Column>
      </Column>
      <Image
        src="img_brand.svg"
        className="2xl:h-[52px] 2xl:mt-[75px] 3xl:h-[62px] 3xl:mt-[90px] h-[68.29px] lg:h-[40px] lg:mt-[58px] mt-[100px] mx-[auto] object-contain w-[50%] xl:h-[46px] xl:mt-[66px]"
        alt="brand"
      />
      <div className="2xl:mt-[75px] 3xl:mt-[90px] lg:mt-[58px] mt-[100px] self-stretch w-[100%] xl:mt-[66px]">
        <Column className="bg-gray_800 font-poppins items-center justify-end self-stretch w-[100%]">
          <Row className="2xl:mt-[48px] 3xl:mt-[57px] justify-evenly lg:mt-[37px] mt-[64px] px-[0] self-stretch w-[100%] xl:mt-[42px]">
            <Column className="2xl:mb-[19px] 3xl:mb-[23px] font-poppins justify-start lg:mb-[15px] mb-[26px] w-[22%] xl:mb-[17px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`Join our Newsletter`}</Text>
              <Text className="2xl:mt-[18px] 2xl:text-fs13 3xl:mt-[21px] 3xl:text-fs16 font-normal leading-lh lg:mt-[14px] lg:text-fs10 mt-[24px] self-stretch text-fs18 text-left text-white_A700 w-[100%] xl:mt-[16px] xl:text-fs12">
                {
                  <>
                    {`Drop your email below to get update about us, `}
                    <br />
                    {`lastest news, tips, and more!`}
                  </>
                }
              </Text>
              <div className="2xl:mr-[7px] 2xl:mt-[26px] 3xl:mr-[9px] 3xl:mt-[31px] bg-transparent border-bw lg:mr-[5px] lg:mt-[20px] mr-[10px] mt-[35px] w-[91%] xl:mr-[6px] xl:mt-[23px] input-wrap">
                <Image
                  src="img_arrow_4.svg"
                  className="absolute top-[17.545px] bottom-[18.545px] right-[16px] border-bw bg-transparent lg:right-[9px] lg:inset-y-[10px] xl:top-[11px] xl:bottom-[12px] xl:right-[10px] 2xl:right-[12px] 2xl:inset-y-[13px] 3xl:top-[15px] 3xl:bottom-[16px] 3xl:right-[14px]"
                  alt="Arrow"
                />
                <Button className="2xl:pl-[18px] 2xl:pr-[43px] 2xl:py-[13px] 2xl:text-fs13 3xl:pb-[16px] 3xl:pl-[21px] 3xl:pr-[52px] 3xl:pt-[15px] 3xl:text-fs16 bg-white_A700 border-bw font-normal lg:pl-[14px] lg:pr-[33px] lg:py-[10px] lg:text-fs10 pb-[18.545px] pl-[24px] pr-[58px] pt-[17.545px] text-fs18 text-gray_500_87 text-left tracking-ls1 w-[100%] xl:pb-[12px] xl:pl-[16px] xl:pr-[38px] xl:pt-[11px] xl:text-fs12">{`Enter your email`}</Button>
              </div>
            </Column>
            <Column className="2xl:mb-[14px] 3xl:mb-[17px] font-poppins justify-start lg:mb-[11px] mb-[19px] w-[9%] xl:mb-[12px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-bold lg:text-fs14 self-stretch text-fs24 text-left text-white_A700 xl:text-fs16">{`Product Links`}</Text>
              <Column className="2xl:mr-[7px] 2xl:mt-[18px] 3xl:mr-[9px] 3xl:mt-[21px] font-poppins justify-start lg:mr-[5px] lg:mt-[14px] mr-[10px] mt-[24px] w-[61%] xl:mr-[6px] xl:mt-[16px]">
                <Text className="2xl:text-fs13 3xl:text-fs16 font-normal lg:text-fs10 mr-[1px] text-fs18 text-left text-white_A700 xl:text-fs12">{`Categories`}</Text>
                <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mt-[9px] lg:text-fs10 mt-[16px] self-stretch text-fs18 text-left text-white_A700 xl:mt-[10px] xl:text-fs12">{`New Arrival`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-left text-white_A700 xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`Features`}</Text>
                <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mt-[9px] lg:text-fs10 mr-[1px] mt-[16px] text-fs18 text-left text-white_A700 xl:mt-[10px] xl:text-fs12">{`Collections`}</Text>
              </Column>
            </Column>
            <Column className="font-poppins justify-start w-[6%]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-bold lg:text-fs14 self-stretch text-fs24 text-left text-white_A700 xl:text-fs16">{`Company`}</Text>
              <Column className="2xl:mr-[7px] 2xl:mt-[18px] 3xl:mr-[9px] 3xl:mt-[21px] font-poppins justify-start lg:mr-[5px] lg:mt-[14px] mr-[10px] mt-[24px] w-[61%] xl:mr-[6px] xl:mt-[16px]">
                <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-left text-white_A700 xl:mr-[6px] xl:text-fs12">{`About`}</Text>
                <Text className="2xl:mr-[7px] 2xl:mt-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[5px] lg:text-fs10 mr-[10px] mt-[10px] text-fs18 text-left text-white_A700 xl:mr-[6px] xl:mt-[6px] xl:text-fs12">{`Blog`}</Text>
                <Text className="2xl:mr-[2px] 2xl:mt-[7px] 2xl:text-fs13 3xl:mr-[2px] 3xl:mt-[9px] 3xl:text-fs16 font-normal lg:mr-[1px] lg:mt-[5px] lg:text-fs10 mr-[3px] mt-[10px] text-fs18 text-left text-white_A700 xl:mr-[2px] xl:mt-[6px] xl:text-fs12">{`Careers`}</Text>
                <Text className="2xl:mt-[7px] 2xl:text-fs13 3xl:mt-[9px] 3xl:text-fs16 font-normal lg:mt-[5px] lg:text-fs10 mr-[1px] mt-[10px] text-fs18 text-left text-white_A700 xl:mt-[6px] xl:text-fs12">{`Contact`}</Text>
                <Text className="2xl:mt-[7px] 2xl:text-fs13 3xl:mt-[9px] 3xl:text-fs16 font-normal lg:mt-[5px] lg:text-fs10 mt-[10px] self-stretch text-fs18 text-left text-white_A700 xl:mt-[6px] xl:text-fs12">{`Services`}</Text>
              </Column>
            </Column>
            <Column className="2xl:mb-[27px] 3xl:mb-[33px] font-poppins justify-start lg:mb-[21px] mb-[37px] w-[8%] xl:mb-[24px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`Support`}</Text>
              <Column className="2xl:mt-[18px] 3xl:mt-[21px] items-center lg:mt-[14px] mt-[24px] self-stretch w-[100%] xl:mt-[16px]">
                <Column className="font-poppins justify-start self-stretch w-[100%]">
                  <Text className="2xl:mr-[6px] 2xl:text-fs13 3xl:mr-[8px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[9px] text-fs18 text-left text-white_A700 xl:mr-[6px] xl:text-fs12">{`Support Center`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[5px] lg:text-fs10 mr-[10px] mt-[10px] text-fs18 text-left text-white_A700 xl:mr-[6px] xl:mt-[6px] xl:text-fs12">{`FAQ`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[5px] lg:text-fs10 mr-[10px] mt-[10px] text-fs18 text-left text-white_A700 xl:mr-[6px] xl:mt-[6px] xl:text-fs12">{`Privacy Policy`}</Text>
                  <Text className="2xl:mt-[7px] 2xl:text-fs13 3xl:mt-[9px] 3xl:text-fs16 font-normal lg:mt-[5px] lg:text-fs10 mt-[10px] self-stretch text-fs18 text-left text-white_A700 xl:mt-[6px] xl:text-fs12">{`Terms of service`}</Text>
                </Column>
              </Column>
            </Column>
            <Column className="2xl:mb-[113px] 3xl:mb-[135px] font-poppins justify-start lg:mb-[88px] mb-[151px] w-[8%] xl:mb-[100px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-bold lg:text-fs14 self-stretch text-fs24 text-left text-white_A700 xl:text-fs16">{`Get In Touch`}</Text>
              <Image
                src="img_sosmedia.svg"
                className="2xl:h-[19px] 2xl:mr-[7px] 2xl:mt-[18px] 3xl:h-[22px] 3xl:mr-[9px] 3xl:mt-[21px] h-[24px] lg:h-[14px] lg:mr-[5px] lg:mt-[14px] mr-[10px] mt-[24px] object-contain w-[78%] xl:h-[17px] xl:mr-[6px] xl:mt-[16px]"
                alt="sosmedia"
              />
            </Column>
          </Row>
          <Text className="2xl:mb-[24px] 2xl:mt-[60px] 2xl:text-fs10 3xl:mb-[28px] 3xl:mt-[72px] 3xl:text-fs12 font-normal lg:mb-[18px] lg:mt-[47px] lg:text-fs8 mb-[32px] mt-[81px] mx-[auto] text-fs14 text-left text-white_A700 xl:mb-[21px] xl:mt-[54px] xl:text-fs9">{`Copyright © 2021 Elliye. All Right Reseved`}</Text>
        </Column>
      </div>
    </Column>
  );
};

export default HomepageV1Page;
