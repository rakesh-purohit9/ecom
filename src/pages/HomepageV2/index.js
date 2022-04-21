import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { Slider } from "components/Slider";
import { List } from "components/List";
import { RatingBar } from "components/RatingBar";

const HomepageV2Page = () => {
  const ref = React.useRef();

  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <div className="self-stretch w-[100%]">
        <Column className="bg-white_A700 font-poppins items-center justify-start self-stretch w-[100%]">
          <Row className="2xl:mt-[18px] 3xl:mt-[21px] items-center justify-start lg:mt-[14px] mt-[24px] mx-[auto] w-[85%] xl:mt-[16px]">
            <Row className="2xl:mb-[8px] 2xl:mt-[4px] 3xl:mb-[9px] 3xl:mt-[5px] items-center justify-start lg:mb-[6px] lg:mt-[3px] mb-[11px] mt-[6px] w-[7%] xl:mb-[7px] xl:mt-[4px]">
              <Image
                src="img_group19.svg"
                className="2xl:h-[19px] 2xl:my-[4px] 3xl:h-[22px] 3xl:my-[5px] h-[24px] lg:h-[14px] lg:my-[3px] my-[6px] object-contain w-[35%] xl:h-[17px] xl:my-[4px]"
                alt="Group19"
              />
              <Text className="2xl:ml-[6px] 2xl:text-fs18 3xl:ml-[7px] 3xl:text-fs21 font-bold lg:ml-[4px] lg:text-fs14 ml-[8px] text-fs24 text-gray_800 text-left xl:ml-[5px] xl:text-fs16">{`Elliye`}</Text>
            </Row>
            <Row className="2xl:mb-[3px] 2xl:ml-[308px] 3xl:mb-[4px] 3xl:ml-[370px] bg-white_A700 border-2 border-gray_100 border-solid items-center justify-center lg:mb-[2px] lg:ml-[239px] mb-[5px] ml-[411px] w-[36%] xl:mb-[3px] xl:ml-[274px]">
              <Text className="2xl:mb-[8px] 2xl:ml-[24px] 2xl:mt-[7px] 2xl:text-fs13 3xl:ml-[28px] 3xl:my-[9px] 3xl:text-fs16 font-normal lg:mb-[6px] lg:ml-[18px] lg:mt-[5px] lg:text-fs10 mb-[11px] ml-[32px] mt-[10px] opacity-op5 text-center text-fs18 text-gray_500_87 xl:mb-[7px] xl:ml-[21px] xl:mt-[6px] xl:text-fs12">{`Search here`}</Text>
              <Image
                src="img_search.svg"
                className="2xl:h-[37px] 2xl:ml-[297px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[357px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[231px] lg:w-[28px] ml-[397px] object-contain w-[48px] xl:h-[33px] xl:ml-[264px] xl:w-[32px]"
                alt="search"
              />
            </Row>
            <Image
              src="img_icon_5.svg"
              className="2xl:h-[19px] 2xl:mb-[12px] 2xl:ml-[228px] 2xl:mt-[9px] 3xl:h-[22px] 3xl:mb-[15px] 3xl:ml-[273px] 3xl:mt-[10px] h-[24px] lg:h-[14px] lg:mb-[9px] lg:ml-[177px] lg:mt-[7px] mb-[17px] ml-[304px] mt-[12px] object-contain w-[5%] xl:h-[17px] xl:mb-[11px] xl:ml-[202px] xl:mt-[8px]"
              alt="icon"
            />
            <Button className="2xl:ml-[24px] 2xl:px-[25px] 2xl:py-[12px] 2xl:text-fs10 3xl:ml-[28px] 3xl:px-[30px] 3xl:py-[15px] 3xl:text-fs12 bg-gray_800 border-bw font-bold lg:ml-[18px] lg:px-[19px] lg:py-[10px] lg:text-fs8 ml-[32px] px-[34px] py-[17.205px] text-center text-fs14 text-white_A700 w-[7%] xl:ml-[21px] xl:px-[22px] xl:py-[11px] xl:text-fs9">{`Login`}</Button>
          </Row>
          <Line className="2xl:mt-[14px] 3xl:mt-[17px] bg-gray_100 h-[1px] lg:mt-[11px] mt-[19px] mx-[auto] w-[85%] xl:mt-[12px]" />
          <Row className="2xl:mb-[18px] 2xl:mt-[17px] 3xl:mb-[21px] 3xl:mt-[20px] font-poppins items-center justify-center lg:mb-[14px] lg:mt-[13px] mb-[24px] mt-[23px] mx-[auto] w-[41%] xl:mb-[16px] xl:mt-[15px]">
            <Text className="2xl:text-fs13 3xl:text-fs16 font-normal lg:text-fs10 text-fs18 text-gray_800 text-left xl:text-fs12">{`Categories`}</Text>
            <Text className="2xl:ml-[60px] 2xl:text-fs13 3xl:ml-[72px] 3xl:text-fs16 font-normal lg:ml-[46px] lg:text-fs10 ml-[80px] text-fs18 text-gray_800 text-left xl:ml-[53px] xl:text-fs12">{`New Arrival`}</Text>
            <Text className="2xl:ml-[60px] 2xl:text-fs13 3xl:ml-[72px] 3xl:text-fs16 font-normal lg:ml-[46px] lg:text-fs10 ml-[80px] text-fs18 text-gray_800 text-left xl:ml-[53px] xl:text-fs12">{`Features`}</Text>
            <Text className="2xl:ml-[60px] 2xl:text-fs13 3xl:ml-[72px] 3xl:text-fs16 font-normal lg:ml-[46px] lg:text-fs10 ml-[80px] text-fs18 text-gray_800 text-left xl:ml-[53px] xl:text-fs12">{`Collections`}</Text>
            <Text className="2xl:ml-[60px] 2xl:text-fs13 3xl:ml-[72px] 3xl:text-fs16 font-normal lg:ml-[46px] lg:text-fs10 ml-[80px] text-fs18 text-gray_800 text-left xl:ml-[53px] xl:text-fs12">{`Discount`}</Text>
          </Row>
        </Column>
      </div>
      <Stack className="2xl:h-[563px] 3xl:h-[676px] h-[750px] lg:h-[438px] self-stretch w-[100%] xl:h-[501px]">
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
            <Stack className="2xl:h-[563px] 3xl:h-[676px] h-[750px] lg:h-[438px] self-stretch xl:h-[501px]">
              <Image
                src="img_image1.png"
                className="2xl:h-[563px] 3xl:h-[676px] absolute h-[750px] inset-[0] lg:h-[438px] object-cover self-stretch w-[100%] xl:h-[501px]"
                alt="image1"
              />
              <Column className="absolute bg-black_900_68 inset-[0] justify-end self-stretch w-[100%]">
                <Column className="2xl:mt-[88px] 2xl:mx-[108px] 3xl:mt-[106px] 3xl:mx-[129px] font-poppins justify-start lg:mt-[68px] lg:mx-[84px] mt-[118px] mx-[144px] w-[42%] xl:mt-[78px] xl:mx-[96px]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-medium font-poppins lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`50% Off Limited Offer`}</Text>
                  <Text className="2xl:mt-[6px] 2xl:text-fs96 3xl:mt-[7px] 3xl:text-fs115 font-bold font-playfairdisplay lg:mt-[4px] lg:text-fs74 mt-[8px] self-stretch text-fs128 text-left text-white_A700 xl:mt-[5px] xl:text-fs85">
                    {
                      <>
                        {`Summer `}
                        <br />
                        {`Collection`}
                      </>
                    }
                  </Text>
                </Column>
                <Row className="2xl:mt-[60px] 2xl:mx-[108px] 3xl:mt-[72px] 3xl:mx-[129px] bg-gray_800 font-poppins items-center justify-start lg:mt-[46px] lg:mx-[84px] mt-[80px] mx-[144px] w-[13%] xl:mt-[53px] xl:mx-[96px]">
                  <Text className="2xl:ml-[24px] 2xl:my-[9px] 2xl:text-fs18 3xl:ml-[29px] 3xl:my-[10px] 3xl:text-fs21 font-medium lg:ml-[19px] lg:my-[7px] lg:text-fs14 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[22px] xl:my-[8px] xl:text-fs16">{`Shop Now`}</Text>
                  <Image
                    src="img_arrow.svg"
                    className="2xl:h-[37px] 2xl:ml-[7px] 2xl:mr-[24px] 2xl:my-[4px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[9px] 3xl:mr-[29px] 3xl:my-[5px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[5px] lg:mr-[19px] lg:my-[3px] lg:w-[28px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[33px] xl:ml-[6px] xl:mr-[22px] xl:my-[4px] xl:w-[32px]"
                    alt="Arrow"
                  />
                </Row>
                <Column className="2xl:mb-[24px] 3xl:mb-[28px] items-end lg:mb-[18px] mb-[32px] self-stretch w-[100%] xl:mb-[21px]">
                  <Row className="2xl:ml-[7px] 3xl:ml-[9px] items-center justify-end lg:ml-[5px] ml-[10px] shadow-bs w-[56%] xl:ml-[6px]">
                    <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                      <Image
                        src="img_sweater_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Sweater"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Jacket`}</Text>
                    </Column>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                      <Image
                        src="img_tshirt_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Tshirt"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Shirt`}</Text>
                    </Column>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                      <Image
                        src="img_pants_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Pants"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Pants`}</Text>
                    </Column>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-gray_800 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                      <Image
                        src="img_boot_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Boot"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-left text-white_A700 xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Shoes`}</Text>
                    </Column>
                    <Row className="2xl:gap-[12px] 2xl:ml-[12px] 3xl:gap-[14px] 3xl:ml-[14px] gap-[16px] grid grid-cols-2 items-center justify-center lg:gap-[9px] lg:ml-[9px] ml-[16px] w-[31%] xl:gap-[10px] xl:ml-[10px]">
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                        <Image
                          src="img_dress_1.svg"
                          className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                          alt="Dress"
                        />
                        <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Dress`}</Text>
                      </Column>
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                        <Image
                          src="img_belt_1.svg"
                          className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                          alt="Belt"
                        />
                        <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Accesories`}</Text>
                      </Column>
                    </Row>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-end justify-center lg:ml-[9px] ml-[16px] overflow-auto w-[2%] xl:ml-[10px]">
                      <Line className="2xl:h-[43px] 2xl:ml-[7px] 2xl:mt-[23px] 3xl:h-[51px] 3xl:ml-[9px] 3xl:mt-[27px] h-[56px] lg:h-[33px] lg:ml-[5px] lg:mt-[18px] ml-[10px] mt-[31px] w-[1px] xl:h-[38px] xl:ml-[6px] xl:mt-[20px]" />
                      <Text className="2xl:mb-[22px] 2xl:ml-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:ml-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:ml-[5px] lg:mt-[9px] lg:text-fs10 mb-[30px] ml-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:ml-[6px] xl:mt-[10px] xl:text-fs12">{`Skirt`}</Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Stack>,

            <Stack className="2xl:h-[563px] 3xl:h-[676px] h-[750px] lg:h-[438px] self-stretch xl:h-[501px]">
              <Image
                src="img_image1.png"
                className="2xl:h-[563px] 3xl:h-[676px] absolute h-[750px] inset-[0] lg:h-[438px] object-cover self-stretch w-[100%] xl:h-[501px]"
                alt="image1"
              />
              <Column className="absolute bg-black_900_68 inset-[0] justify-end self-stretch w-[100%]">
                <Column className="2xl:mt-[88px] 2xl:mx-[108px] 3xl:mt-[106px] 3xl:mx-[129px] font-poppins justify-start lg:mt-[68px] lg:mx-[84px] mt-[118px] mx-[144px] w-[42%] xl:mt-[78px] xl:mx-[96px]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-medium font-poppins lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`50% Off Limited Offer`}</Text>
                  <Text className="2xl:mt-[6px] 2xl:text-fs96 3xl:mt-[7px] 3xl:text-fs115 font-bold font-playfairdisplay lg:mt-[4px] lg:text-fs74 mt-[8px] self-stretch text-fs128 text-left text-white_A700 xl:mt-[5px] xl:text-fs85">
                    {
                      <>
                        {`Summer `}
                        <br />
                        {`Collection`}
                      </>
                    }
                  </Text>
                </Column>
                <Row className="2xl:mt-[60px] 2xl:mx-[108px] 3xl:mt-[72px] 3xl:mx-[129px] bg-gray_800 font-poppins items-center justify-start lg:mt-[46px] lg:mx-[84px] mt-[80px] mx-[144px] w-[13%] xl:mt-[53px] xl:mx-[96px]">
                  <Text className="2xl:ml-[24px] 2xl:my-[9px] 2xl:text-fs18 3xl:ml-[29px] 3xl:my-[10px] 3xl:text-fs21 font-medium lg:ml-[19px] lg:my-[7px] lg:text-fs14 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[22px] xl:my-[8px] xl:text-fs16">{`Shop Now`}</Text>
                  <Image
                    src="img_arrow.svg"
                    className="2xl:h-[37px] 2xl:ml-[7px] 2xl:mr-[24px] 2xl:my-[4px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[9px] 3xl:mr-[29px] 3xl:my-[5px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[5px] lg:mr-[19px] lg:my-[3px] lg:w-[28px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[33px] xl:ml-[6px] xl:mr-[22px] xl:my-[4px] xl:w-[32px]"
                    alt="Arrow"
                  />
                </Row>
                <Column className="2xl:mb-[24px] 3xl:mb-[28px] items-end lg:mb-[18px] mb-[32px] self-stretch w-[100%] xl:mb-[21px]">
                  <Row className="2xl:ml-[7px] 3xl:ml-[9px] items-center justify-end lg:ml-[5px] ml-[10px] shadow-bs w-[56%] xl:ml-[6px]">
                    <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                      <Image
                        src="img_sweater_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Sweater"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Jacket`}</Text>
                    </Column>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                      <Image
                        src="img_tshirt_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Tshirt"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Shirt`}</Text>
                    </Column>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                      <Image
                        src="img_pants_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Pants"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Pants`}</Text>
                    </Column>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-gray_800 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                      <Image
                        src="img_boot_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Boot"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-left text-white_A700 xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Shoes`}</Text>
                    </Column>
                    <Row className="2xl:gap-[12px] 2xl:ml-[12px] 3xl:gap-[14px] 3xl:ml-[14px] gap-[16px] grid grid-cols-2 items-center justify-center lg:gap-[9px] lg:ml-[9px] ml-[16px] w-[31%] xl:gap-[10px] xl:ml-[10px]">
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                        <Image
                          src="img_dress_1.svg"
                          className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                          alt="Dress"
                        />
                        <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Dress`}</Text>
                      </Column>
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                        <Image
                          src="img_belt_1.svg"
                          className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                          alt="Belt"
                        />
                        <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Accesories`}</Text>
                      </Column>
                    </Row>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-end justify-center lg:ml-[9px] ml-[16px] overflow-auto w-[2%] xl:ml-[10px]">
                      <Line className="2xl:h-[43px] 2xl:ml-[7px] 2xl:mt-[23px] 3xl:h-[51px] 3xl:ml-[9px] 3xl:mt-[27px] h-[56px] lg:h-[33px] lg:ml-[5px] lg:mt-[18px] ml-[10px] mt-[31px] w-[1px] xl:h-[38px] xl:ml-[6px] xl:mt-[20px]" />
                      <Text className="2xl:mb-[22px] 2xl:ml-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:ml-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:ml-[5px] lg:mt-[9px] lg:text-fs10 mb-[30px] ml-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:ml-[6px] xl:mt-[10px] xl:text-fs12">{`Skirt`}</Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Stack>,

            <Stack className="2xl:h-[563px] 3xl:h-[676px] h-[750px] lg:h-[438px] self-stretch xl:h-[501px]">
              <Image
                src="img_image1.png"
                className="2xl:h-[563px] 3xl:h-[676px] absolute h-[750px] inset-[0] lg:h-[438px] object-cover self-stretch w-[100%] xl:h-[501px]"
                alt="image1"
              />
              <Column className="absolute bg-black_900_68 inset-[0] justify-end self-stretch w-[100%]">
                <Column className="2xl:mt-[88px] 2xl:mx-[108px] 3xl:mt-[106px] 3xl:mx-[129px] font-poppins justify-start lg:mt-[68px] lg:mx-[84px] mt-[118px] mx-[144px] w-[42%] xl:mt-[78px] xl:mx-[96px]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-medium font-poppins lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`50% Off Limited Offer`}</Text>
                  <Text className="2xl:mt-[6px] 2xl:text-fs96 3xl:mt-[7px] 3xl:text-fs115 font-bold font-playfairdisplay lg:mt-[4px] lg:text-fs74 mt-[8px] self-stretch text-fs128 text-left text-white_A700 xl:mt-[5px] xl:text-fs85">
                    {
                      <>
                        {`Summer `}
                        <br />
                        {`Collection`}
                      </>
                    }
                  </Text>
                </Column>
                <Row className="2xl:mt-[60px] 2xl:mx-[108px] 3xl:mt-[72px] 3xl:mx-[129px] bg-gray_800 font-poppins items-center justify-start lg:mt-[46px] lg:mx-[84px] mt-[80px] mx-[144px] w-[13%] xl:mt-[53px] xl:mx-[96px]">
                  <Text className="2xl:ml-[24px] 2xl:my-[9px] 2xl:text-fs18 3xl:ml-[29px] 3xl:my-[10px] 3xl:text-fs21 font-medium lg:ml-[19px] lg:my-[7px] lg:text-fs14 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[22px] xl:my-[8px] xl:text-fs16">{`Shop Now`}</Text>
                  <Image
                    src="img_arrow.svg"
                    className="2xl:h-[37px] 2xl:ml-[7px] 2xl:mr-[24px] 2xl:my-[4px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[9px] 3xl:mr-[29px] 3xl:my-[5px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[5px] lg:mr-[19px] lg:my-[3px] lg:w-[28px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[33px] xl:ml-[6px] xl:mr-[22px] xl:my-[4px] xl:w-[32px]"
                    alt="Arrow"
                  />
                </Row>
                <Column className="2xl:mb-[24px] 3xl:mb-[28px] items-end lg:mb-[18px] mb-[32px] self-stretch w-[100%] xl:mb-[21px]">
                  <Row className="2xl:ml-[7px] 3xl:ml-[9px] items-center justify-end lg:ml-[5px] ml-[10px] shadow-bs w-[56%] xl:ml-[6px]">
                    <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                      <Image
                        src="img_sweater_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Sweater"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Jacket`}</Text>
                    </Column>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                      <Image
                        src="img_tshirt_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Tshirt"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Shirt`}</Text>
                    </Column>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                      <Image
                        src="img_pants_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Pants"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Pants`}</Text>
                    </Column>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-gray_800 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                      <Image
                        src="img_boot_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Boot"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-left text-white_A700 xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Shoes`}</Text>
                    </Column>
                    <Row className="2xl:gap-[12px] 2xl:ml-[12px] 3xl:gap-[14px] 3xl:ml-[14px] gap-[16px] grid grid-cols-2 items-center justify-center lg:gap-[9px] lg:ml-[9px] ml-[16px] w-[31%] xl:gap-[10px] xl:ml-[10px]">
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                        <Image
                          src="img_dress_1.svg"
                          className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                          alt="Dress"
                        />
                        <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Dress`}</Text>
                      </Column>
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                        <Image
                          src="img_belt_1.svg"
                          className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                          alt="Belt"
                        />
                        <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Accesories`}</Text>
                      </Column>
                    </Row>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-end justify-center lg:ml-[9px] ml-[16px] overflow-auto w-[2%] xl:ml-[10px]">
                      <Line className="2xl:h-[43px] 2xl:ml-[7px] 2xl:mt-[23px] 3xl:h-[51px] 3xl:ml-[9px] 3xl:mt-[27px] h-[56px] lg:h-[33px] lg:ml-[5px] lg:mt-[18px] ml-[10px] mt-[31px] w-[1px] xl:h-[38px] xl:ml-[6px] xl:mt-[20px]" />
                      <Text className="2xl:mb-[22px] 2xl:ml-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:ml-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:ml-[5px] lg:mt-[9px] lg:text-fs10 mb-[30px] ml-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:ml-[6px] xl:mt-[10px] xl:text-fs12">{`Skirt`}</Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Stack>,

            <Stack className="2xl:h-[563px] 3xl:h-[676px] h-[750px] lg:h-[438px] self-stretch xl:h-[501px]">
              <Image
                src="img_image1.png"
                className="2xl:h-[563px] 3xl:h-[676px] absolute h-[750px] inset-[0] lg:h-[438px] object-cover self-stretch w-[100%] xl:h-[501px]"
                alt="image1"
              />
              <Column className="absolute bg-black_900_68 inset-[0] justify-end self-stretch w-[100%]">
                <Column className="2xl:mt-[88px] 2xl:mx-[108px] 3xl:mt-[106px] 3xl:mx-[129px] font-poppins justify-start lg:mt-[68px] lg:mx-[84px] mt-[118px] mx-[144px] w-[42%] xl:mt-[78px] xl:mx-[96px]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-medium font-poppins lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`50% Off Limited Offer`}</Text>
                  <Text className="2xl:mt-[6px] 2xl:text-fs96 3xl:mt-[7px] 3xl:text-fs115 font-bold font-playfairdisplay lg:mt-[4px] lg:text-fs74 mt-[8px] self-stretch text-fs128 text-left text-white_A700 xl:mt-[5px] xl:text-fs85">
                    {
                      <>
                        {`Summer `}
                        <br />
                        {`Collection`}
                      </>
                    }
                  </Text>
                </Column>
                <Row className="2xl:mt-[60px] 2xl:mx-[108px] 3xl:mt-[72px] 3xl:mx-[129px] bg-gray_800 font-poppins items-center justify-start lg:mt-[46px] lg:mx-[84px] mt-[80px] mx-[144px] w-[13%] xl:mt-[53px] xl:mx-[96px]">
                  <Text className="2xl:ml-[24px] 2xl:my-[9px] 2xl:text-fs18 3xl:ml-[29px] 3xl:my-[10px] 3xl:text-fs21 font-medium lg:ml-[19px] lg:my-[7px] lg:text-fs14 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[22px] xl:my-[8px] xl:text-fs16">{`Shop Now`}</Text>
                  <Image
                    src="img_arrow.svg"
                    className="2xl:h-[37px] 2xl:ml-[7px] 2xl:mr-[24px] 2xl:my-[4px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[9px] 3xl:mr-[29px] 3xl:my-[5px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[5px] lg:mr-[19px] lg:my-[3px] lg:w-[28px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[33px] xl:ml-[6px] xl:mr-[22px] xl:my-[4px] xl:w-[32px]"
                    alt="Arrow"
                  />
                </Row>
                <Column className="2xl:mb-[24px] 3xl:mb-[28px] items-end lg:mb-[18px] mb-[32px] self-stretch w-[100%] xl:mb-[21px]">
                  <Row className="2xl:ml-[7px] 3xl:ml-[9px] items-center justify-end lg:ml-[5px] ml-[10px] shadow-bs w-[56%] xl:ml-[6px]">
                    <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                      <Image
                        src="img_sweater_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Sweater"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Jacket`}</Text>
                    </Column>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                      <Image
                        src="img_tshirt_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Tshirt"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Shirt`}</Text>
                    </Column>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                      <Image
                        src="img_pants_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Pants"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Pants`}</Text>
                    </Column>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-gray_800 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                      <Image
                        src="img_boot_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Boot"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-left text-white_A700 xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Shoes`}</Text>
                    </Column>
                    <Row className="2xl:gap-[12px] 2xl:ml-[12px] 3xl:gap-[14px] 3xl:ml-[14px] gap-[16px] grid grid-cols-2 items-center justify-center lg:gap-[9px] lg:ml-[9px] ml-[16px] w-[31%] xl:gap-[10px] xl:ml-[10px]">
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                        <Image
                          src="img_dress_1.svg"
                          className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                          alt="Dress"
                        />
                        <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Dress`}</Text>
                      </Column>
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                        <Image
                          src="img_belt_1.svg"
                          className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                          alt="Belt"
                        />
                        <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Accesories`}</Text>
                      </Column>
                    </Row>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-end justify-center lg:ml-[9px] ml-[16px] overflow-auto w-[2%] xl:ml-[10px]">
                      <Line className="2xl:h-[43px] 2xl:ml-[7px] 2xl:mt-[23px] 3xl:h-[51px] 3xl:ml-[9px] 3xl:mt-[27px] h-[56px] lg:h-[33px] lg:ml-[5px] lg:mt-[18px] ml-[10px] mt-[31px] w-[1px] xl:h-[38px] xl:ml-[6px] xl:mt-[20px]" />
                      <Text className="2xl:mb-[22px] 2xl:ml-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:ml-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:ml-[5px] lg:mt-[9px] lg:text-fs10 mb-[30px] ml-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:ml-[6px] xl:mt-[10px] xl:text-fs12">{`Skirt`}</Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Stack>,

            <Stack className="2xl:h-[563px] 3xl:h-[676px] h-[750px] lg:h-[438px] self-stretch xl:h-[501px]">
              <Image
                src="img_image1.png"
                className="2xl:h-[563px] 3xl:h-[676px] absolute h-[750px] inset-[0] lg:h-[438px] object-cover self-stretch w-[100%] xl:h-[501px]"
                alt="image1"
              />
              <Column className="absolute bg-black_900_68 inset-[0] justify-end self-stretch w-[100%]">
                <Column className="2xl:mt-[88px] 2xl:mx-[108px] 3xl:mt-[106px] 3xl:mx-[129px] font-poppins justify-start lg:mt-[68px] lg:mx-[84px] mt-[118px] mx-[144px] w-[42%] xl:mt-[78px] xl:mx-[96px]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-medium font-poppins lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`50% Off Limited Offer`}</Text>
                  <Text className="2xl:mt-[6px] 2xl:text-fs96 3xl:mt-[7px] 3xl:text-fs115 font-bold font-playfairdisplay lg:mt-[4px] lg:text-fs74 mt-[8px] self-stretch text-fs128 text-left text-white_A700 xl:mt-[5px] xl:text-fs85">
                    {
                      <>
                        {`Summer `}
                        <br />
                        {`Collection`}
                      </>
                    }
                  </Text>
                </Column>
                <Row className="2xl:mt-[60px] 2xl:mx-[108px] 3xl:mt-[72px] 3xl:mx-[129px] bg-gray_800 font-poppins items-center justify-start lg:mt-[46px] lg:mx-[84px] mt-[80px] mx-[144px] w-[13%] xl:mt-[53px] xl:mx-[96px]">
                  <Text className="2xl:ml-[24px] 2xl:my-[9px] 2xl:text-fs18 3xl:ml-[29px] 3xl:my-[10px] 3xl:text-fs21 font-medium lg:ml-[19px] lg:my-[7px] lg:text-fs14 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[22px] xl:my-[8px] xl:text-fs16">{`Shop Now`}</Text>
                  <Image
                    src="img_arrow.svg"
                    className="2xl:h-[37px] 2xl:ml-[7px] 2xl:mr-[24px] 2xl:my-[4px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[9px] 3xl:mr-[29px] 3xl:my-[5px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[5px] lg:mr-[19px] lg:my-[3px] lg:w-[28px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[33px] xl:ml-[6px] xl:mr-[22px] xl:my-[4px] xl:w-[32px]"
                    alt="Arrow"
                  />
                </Row>
                <Column className="2xl:mb-[24px] 3xl:mb-[28px] items-end lg:mb-[18px] mb-[32px] self-stretch w-[100%] xl:mb-[21px]">
                  <Row className="2xl:ml-[7px] 3xl:ml-[9px] items-center justify-end lg:ml-[5px] ml-[10px] shadow-bs w-[56%] xl:ml-[6px]">
                    <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                      <Image
                        src="img_sweater_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Sweater"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Jacket`}</Text>
                    </Column>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                      <Image
                        src="img_tshirt_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Tshirt"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Shirt`}</Text>
                    </Column>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                      <Image
                        src="img_pants_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Pants"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Pants`}</Text>
                    </Column>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-gray_800 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                      <Image
                        src="img_boot_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Boot"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-left text-white_A700 xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Shoes`}</Text>
                    </Column>
                    <Row className="2xl:gap-[12px] 2xl:ml-[12px] 3xl:gap-[14px] 3xl:ml-[14px] gap-[16px] grid grid-cols-2 items-center justify-center lg:gap-[9px] lg:ml-[9px] ml-[16px] w-[31%] xl:gap-[10px] xl:ml-[10px]">
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                        <Image
                          src="img_dress_1.svg"
                          className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                          alt="Dress"
                        />
                        <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Dress`}</Text>
                      </Column>
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                        <Image
                          src="img_belt_1.svg"
                          className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                          alt="Belt"
                        />
                        <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Accesories`}</Text>
                      </Column>
                    </Row>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-end justify-center lg:ml-[9px] ml-[16px] overflow-auto w-[2%] xl:ml-[10px]">
                      <Line className="2xl:h-[43px] 2xl:ml-[7px] 2xl:mt-[23px] 3xl:h-[51px] 3xl:ml-[9px] 3xl:mt-[27px] h-[56px] lg:h-[33px] lg:ml-[5px] lg:mt-[18px] ml-[10px] mt-[31px] w-[1px] xl:h-[38px] xl:ml-[6px] xl:mt-[20px]" />
                      <Text className="2xl:mb-[22px] 2xl:ml-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:ml-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:ml-[5px] lg:mt-[9px] lg:text-fs10 mb-[30px] ml-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:ml-[6px] xl:mt-[10px] xl:text-fs12">{`Skirt`}</Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Stack>,

            <Stack className="2xl:h-[563px] 3xl:h-[676px] h-[750px] lg:h-[438px] self-stretch xl:h-[501px]">
              <Image
                src="img_image1.png"
                className="2xl:h-[563px] 3xl:h-[676px] absolute h-[750px] inset-[0] lg:h-[438px] object-cover self-stretch w-[100%] xl:h-[501px]"
                alt="image1"
              />
              <Column className="absolute bg-black_900_68 inset-[0] justify-end self-stretch w-[100%]">
                <Column className="2xl:mt-[88px] 2xl:mx-[108px] 3xl:mt-[106px] 3xl:mx-[129px] font-poppins justify-start lg:mt-[68px] lg:mx-[84px] mt-[118px] mx-[144px] w-[42%] xl:mt-[78px] xl:mx-[96px]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-medium font-poppins lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`50% Off Limited Offer`}</Text>
                  <Text className="2xl:mt-[6px] 2xl:text-fs96 3xl:mt-[7px] 3xl:text-fs115 font-bold font-playfairdisplay lg:mt-[4px] lg:text-fs74 mt-[8px] self-stretch text-fs128 text-left text-white_A700 xl:mt-[5px] xl:text-fs85">
                    {
                      <>
                        {`Summer `}
                        <br />
                        {`Collection`}
                      </>
                    }
                  </Text>
                </Column>
                <Row className="2xl:mt-[60px] 2xl:mx-[108px] 3xl:mt-[72px] 3xl:mx-[129px] bg-gray_800 font-poppins items-center justify-start lg:mt-[46px] lg:mx-[84px] mt-[80px] mx-[144px] w-[13%] xl:mt-[53px] xl:mx-[96px]">
                  <Text className="2xl:ml-[24px] 2xl:my-[9px] 2xl:text-fs18 3xl:ml-[29px] 3xl:my-[10px] 3xl:text-fs21 font-medium lg:ml-[19px] lg:my-[7px] lg:text-fs14 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[22px] xl:my-[8px] xl:text-fs16">{`Shop Now`}</Text>
                  <Image
                    src="img_arrow.svg"
                    className="2xl:h-[37px] 2xl:ml-[7px] 2xl:mr-[24px] 2xl:my-[4px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[9px] 3xl:mr-[29px] 3xl:my-[5px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[5px] lg:mr-[19px] lg:my-[3px] lg:w-[28px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[33px] xl:ml-[6px] xl:mr-[22px] xl:my-[4px] xl:w-[32px]"
                    alt="Arrow"
                  />
                </Row>
                <Column className="2xl:mb-[24px] 3xl:mb-[28px] items-end lg:mb-[18px] mb-[32px] self-stretch w-[100%] xl:mb-[21px]">
                  <Row className="2xl:ml-[7px] 3xl:ml-[9px] items-center justify-end lg:ml-[5px] ml-[10px] shadow-bs w-[56%] xl:ml-[6px]">
                    <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                      <Image
                        src="img_sweater_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Sweater"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Jacket`}</Text>
                    </Column>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                      <Image
                        src="img_tshirt_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Tshirt"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Shirt`}</Text>
                    </Column>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                      <Image
                        src="img_pants_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Pants"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Pants`}</Text>
                    </Column>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-gray_800 font-poppins items-center justify-center lg:ml-[9px] ml-[16px] w-[15%] xl:ml-[10px]">
                      <Image
                        src="img_boot_1.svg"
                        className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                        alt="Boot"
                      />
                      <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-left text-white_A700 xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Shoes`}</Text>
                    </Column>
                    <Row className="2xl:gap-[12px] 2xl:ml-[12px] 3xl:gap-[14px] 3xl:ml-[14px] gap-[16px] grid grid-cols-2 items-center justify-center lg:gap-[9px] lg:ml-[9px] ml-[16px] w-[31%] xl:gap-[10px] xl:ml-[10px]">
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                        <Image
                          src="img_dress_1.svg"
                          className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                          alt="Dress"
                        />
                        <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Dress`}</Text>
                      </Column>
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                        <Image
                          src="img_belt_1.svg"
                          className="2xl:h-[43px] 2xl:mt-[23px] 2xl:w-[42px] 3xl:h-[51px] 3xl:mt-[27px] 3xl:w-[50px] h-[56px] lg:h-[33px] lg:mt-[18px] lg:w-[32px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[38px] xl:mt-[20px] xl:w-[37px]"
                          alt="Belt"
                        />
                        <Text className="2xl:mb-[22px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:mt-[9px] lg:text-fs10 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:mt-[10px] xl:text-fs12">{`Accesories`}</Text>
                      </Column>
                    </Row>
                    <Column className="2xl:ml-[12px] 3xl:ml-[14px] bg-white_A700 font-poppins items-end justify-center lg:ml-[9px] ml-[16px] overflow-auto w-[2%] xl:ml-[10px]">
                      <Line className="2xl:h-[43px] 2xl:ml-[7px] 2xl:mt-[23px] 3xl:h-[51px] 3xl:ml-[9px] 3xl:mt-[27px] h-[56px] lg:h-[33px] lg:ml-[5px] lg:mt-[18px] ml-[10px] mt-[31px] w-[1px] xl:h-[38px] xl:ml-[6px] xl:mt-[20px]" />
                      <Text className="2xl:mb-[22px] 2xl:ml-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mb-[27px] 3xl:ml-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mb-[17px] lg:ml-[5px] lg:mt-[9px] lg:text-fs10 mb-[30px] ml-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mb-[20px] xl:ml-[6px] xl:mt-[10px] xl:text-fs12">{`Skirt`}</Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Stack>,
          ]}
        />
      </Stack>
      <Image
        src="img_brands.svg"
        className="2xl:h-[76px] 2xl:mt-[75px] 3xl:h-[91px] 3xl:mt-[90px] h-[100px] lg:h-[59px] lg:mt-[58px] mt-[100px] mx-[auto] object-contain w-[56%] xl:h-[67px] xl:mt-[66px]"
        alt="brands"
      />
      <Row className="2xl:mt-[75px] 3xl:mt-[90px] items-center justify-start lg:mt-[58px] mt-[100px] mx-[auto] w-[85%] xl:mt-[66px]">
        <Column className="items-center justify-start w-[49%]">
          <Stack className="2xl:h-[301px] 3xl:h-[361px] font-poppins h-[400px] lg:h-[234px] self-stretch w-[100%] xl:h-[267px]">
            <Image
              src="img_placeholder_23.png"
              className="2xl:h-[301px] 3xl:h-[361px] absolute h-[400px] inset-[0] lg:h-[234px] object-cover self-stretch w-[100%] xl:h-[267px]"
              alt="placeholder"
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
          <Stack className="2xl:h-[301px] 2xl:mt-[24px] 3xl:h-[361px] 3xl:mt-[28px] font-poppins h-[400px] lg:h-[234px] lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:h-[267px] xl:mt-[21px]">
            <Image
              src="img_placeholder_24.png"
              className="2xl:h-[301px] 3xl:h-[361px] absolute h-[400px] inset-[0] lg:h-[234px] object-cover self-stretch w-[100%] xl:h-[267px]"
              alt="placeholder"
            />
            <Text className="2xl:left-[67px] 2xl:text-fs27 3xl:left-[81px] 3xl:text-fs32 absolute font-normal h-[max-content] inset-y-[0] leading-lh left-[90.25px] lg:left-[52px] lg:text-fs21 my-[auto] text-fs36 text-gray_800 text-left w-[28%] xl:left-[60px] xl:text-fs24">
              <span className="text-gray_800 text-fs36 font-poppins text-left font-normal lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                <>
                  {`Summer `}
                  <br />
                  {``}
                </>
              </span>
              <span className="text-gray_800 text-fs48 font-playfairdisplay text-left font-bold lg:text-fs28 xl:text-fs32 2xl:text-fs36 3xl:text-fs43">
                <>{`Collection`}</>
              </span>
            </Text>
          </Stack>
        </Column>
        <Stack className="2xl:h-[625px] 2xl:ml-[24px] 3xl:h-[750px] 3xl:ml-[28px] font-poppins h-[832px] lg:h-[486px] lg:ml-[18px] ml-[32px] w-[49%] xl:h-[556px] xl:ml-[21px]">
          <Image
            src="img_placeholder_25.png"
            className="2xl:h-[625px] 3xl:h-[750px] absolute h-[832px] inset-[0] lg:h-[486px] object-cover self-stretch w-[100%] xl:h-[556px]"
            alt="placeholder"
          />
          <Text className="2xl:left-[59px] 2xl:text-fs27 2xl:top-[227px] 3xl:left-[71px] 3xl:text-fs32 3xl:top-[273px] absolute font-normal leading-lh left-[79.64px] lg:left-[46px] lg:text-fs21 lg:top-[177px] text-fs36 text-left text-white_A700 top-[303.68px] w-[28%] xl:left-[53px] xl:text-fs24 xl:top-[202px]">
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
      <Column className="2xl:mt-[75px] 3xl:mt-[90px] items-center justify-start lg:mt-[58px] mt-[100px] mx-[auto] w-[85%] xl:mt-[66px]">
        <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
          <Text className="2xl:text-fs27 3xl:text-fs32 font-bold lg:text-fs21 text-fs36 text-gray_800 text-left xl:text-fs24">{`Featured`}</Text>
          <Row className="2xl:mb-[9px] 2xl:mt-[8px] 3xl:mb-[10px] 3xl:mt-[9px] font-poppins items-center justify-between lg:mb-[7px] lg:mt-[6px] mb-[12px] mt-[11px] px-[0] w-[7%] xl:mb-[8px] xl:mt-[7px]">
            <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 my-[1px] text-fs18 text-gray_800 text-left xl:text-fs12">{`View all`}</Text>
            <Image
              src="img_arrow_5.svg"
              className="2xl:h-[24px] 3xl:h-[28px] h-[31px] lg:h-[19px] object-contain w-[29%] xl:h-[21px]"
              alt="Arrow"
            />
          </Row>
        </Row>
        <Row className="2xl:mt-[23px] 3xl:mt-[27px] items-center justify-between lg:mt-[18px] mt-[31px] px-[0] self-stretch w-[100%] xl:mt-[20px]">
          <Stack className="2xl:h-[572px] 2xl:mb-[5px] 3xl:h-[686px] 3xl:mb-[6px] font-poppins h-[761px] lg:h-[444px] lg:mb-[4px] mb-[7px] w-[32%] xl:h-[508px] xl:mb-[4px]">
            <Image
              src="img_placeholder_26.png"
              className="2xl:h-[572px] 3xl:h-[686px] absolute h-[761px] inset-[0] lg:h-[444px] object-cover self-stretch w-[100%] xl:h-[508px]"
              alt="placeholder"
            />
            <Text className="2xl:text-fs27 2xl:top-[42px] 3xl:text-fs32 3xl:top-[50px] absolute font-normal inset-x-[0] leading-lh lg:text-fs21 lg:top-[32px] mx-[auto] text-center text-fs36 text-gray_800 top-[56px] w-[max-content] xl:text-fs24 xl:top-[37px]">
              <span className="text-gray_800 text-fs36 font-poppins text-center font-normal lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                <>
                  {`Discover Our `}
                  <br />
                  {``}
                </>
              </span>
              <span className="text-gray_800 text-fs36 font-poppins text-center font-bold lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
                <>{`Featured Product`}</>
              </span>
            </Text>
          </Stack>
          <List
            className="flex-wrap gap-[0] min-h-[auto] w-[66%]"
            orientation="vertical"
          >
            <Row className="2xl:gap-[24px] 2xl:my-[12px] 3xl:gap-[28px] 3xl:my-[14px] gap-[32px] grid grid-cols-4 items-center justify-between lg:gap-[18px] lg:my-[9px] my-[16px] self-stretch w-[100%] xl:gap-[21px] xl:my-[10px]">
              <Column className="items-center justify-start w-[100%]">
                <Image
                  src="img_rectangle39.png"
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
                  src="img_rectangle39_1.png"
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
                  src="img_rectangle39_2.png"
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
                  src="img_rectangle39_3.png"
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
            </Row>
            <Row className="2xl:my-[12px] 3xl:my-[14px] justify-between lg:my-[9px] my-[16px] px-[0] self-stretch w-[100%] xl:my-[10px]">
              <Column className="items-center justify-start w-[23%]">
                <Image
                  src="img_rectangle39_4.png"
                  className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                  alt="Rectangle39"
                />
                <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[45%] xl:mt-[10px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                    {
                      <>
                        {`Casual `}
                        <br />
                        {`Pink Shirt`}
                      </>
                    }
                  </Text>
                  <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="2xl:mb-[27px] 3xl:mb-[32px] items-center justify-start lg:mb-[21px] mb-[36px] w-[23%] xl:mb-[24px]">
                <Image
                  src="img_rectangle39_5.png"
                  className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                  alt="Rectangle39"
                />
                <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[59%] xl:mt-[10px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 xl:text-fs16">{`Gray T-shirt`}</Text>
                  <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[23%]">
                <Image
                  src="img_rectangle39_6.png"
                  className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                  alt="Rectangle39"
                />
                <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[66%] xl:mt-[10px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                    {
                      <>
                        {`Purple `}
                        <br />
                        {`Warm Jacket`}
                      </>
                    }
                  </Text>
                  <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                </Column>
              </Column>
              <Column className="2xl:mb-[27px] 3xl:mb-[32px] items-center justify-start lg:mb-[21px] mb-[36px] w-[23%] xl:mb-[24px]">
                <Image
                  src="img_rectangle39_4.png"
                  className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                  alt="Rectangle39"
                />
                <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[57%] xl:mt-[10px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Red Flannel`}</Text>
                  <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                </Column>
              </Column>
            </Row>
          </List>
        </Row>
      </Column>
      <Stack className="2xl:h-[435px] 2xl:mt-[75px] 3xl:h-[522px] 3xl:mt-[90px] h-[579px] lg:h-[338px] lg:mt-[58px] mt-[100px] self-stretch w-[100%] xl:h-[387px] xl:mt-[66px]">
        <Column className="absolute bg-gray_800 font-poppins items-center justify-start self-stretch top-[0] w-[100%]">
          <Text className="2xl:mb-[235px] 2xl:mt-[33px] 2xl:mx-[108px] 2xl:text-fs27 3xl:mb-[282px] 3xl:mt-[40px] 3xl:mx-[129px] 3xl:text-fs32 font-bold lg:mb-[183px] lg:mt-[26px] lg:mx-[84px] lg:text-fs21 mb-[314px] mt-[45px] mx-[144px] text-fs36 text-left text-white_A700 xl:mb-[209px] xl:mt-[30px] xl:mx-[96px] xl:text-fs24">{`Limited Offer`}</Text>
        </Column>
        <List
          className="2xl:gap-[24px] 3xl:gap-[28px] absolute bottom-[0] flex-wrap gap-[32px] grid grid-cols-2 inset-x-[0] lg:gap-[18px] min-h-[auto] mx-[auto] w-[85%] xl:gap-[21px]"
          orientation="horizontal"
        >
          <Row className="bg-gray_100 items-center justify-start shadow-bs1 w-[100%]">
            <Column className="2xl:ml-[24px] 2xl:my-[24px] 3xl:ml-[28px] 3xl:my-[28px] font-poppins items-center justify-start lg:ml-[18px] lg:my-[18px] ml-[32px] my-[32px] w-[35%] xl:ml-[21px] xl:my-[21px]">
              <Image
                src="img_rectangle45.png"
                className="2xl:h-[210px] 2xl:w-[209px] 3xl:h-[252px] 3xl:w-[251px] h-[279px] lg:h-[163px] lg:w-[162px] mx-[auto] object-cover self-stretch w-[279px] xl:h-[187px] xl:w-[186px]"
                alt="Rectangle45"
              />
              <Button className="2xl:mt-[24px] 2xl:px-[26px] 2xl:py-[13px] 2xl:text-fs13 3xl:mt-[28px] 3xl:px-[31px] 3xl:py-[16px] 3xl:text-fs16 bg-gray_800 border-bw font-bold lg:mt-[18px] lg:px-[20px] lg:py-[10px] lg:text-fs10 mt-[32px] mx-[auto] px-[35px] py-[18.045px] text-center text-fs18 text-white_A700 w-[72%] xl:mt-[21px] xl:px-[23px] xl:py-[12px] xl:text-fs12">{`Add to Cart`}</Button>
            </Column>
            <Column className="2xl:ml-[36px] 2xl:mr-[42px] 2xl:my-[58px] 3xl:ml-[43px] 3xl:mr-[50px] 3xl:my-[70px] font-poppins justify-start lg:ml-[28px] lg:mr-[32px] lg:my-[45px] ml-[48px] mr-[56px] my-[78px] w-[48%] xl:ml-[32px] xl:mr-[37px] xl:my-[52px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-normal lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-gray_800 text-left xl:mr-[6px] xl:text-fs16">{`Limited Deals`}</Text>
              <Column className="2xl:mt-[18px] 3xl:mt-[21px] items-center lg:mt-[14px] mt-[24px] self-stretch w-[100%] xl:mt-[16px]">
                <Row className="2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 items-center justify-between lg:gap-[18px] self-stretch w-[100%] xl:gap-[21px]">
                  <Column className="border border-gray_500 border-solid font-poppins items-center justify-center w-[100%]">
                    <Text className="2xl:mt-[13px] 2xl:text-fs18 3xl:mt-[16px] 3xl:text-fs21 font-medium lg:mt-[10px] lg:text-fs14 mt-[18px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[12px] xl:text-fs16">{`08`}</Text>
                    <Text className="2xl:mb-[13px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[16px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[10px] lg:mt-[4px] lg:text-fs10 mb-[18px] mt-[8px] mx-[auto] text-fs18 text-gray_800 text-left xl:mb-[12px] xl:mt-[5px] xl:text-fs12">{`Hours`}</Text>
                  </Column>
                  <Column className="border border-gray_500 border-solid font-poppins items-center justify-center w-[100%]">
                    <Text className="2xl:mt-[13px] 2xl:text-fs18 3xl:mt-[16px] 3xl:text-fs21 font-medium lg:mt-[10px] lg:text-fs14 mt-[18px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[12px] xl:text-fs16">{`58`}</Text>
                    <Text className="2xl:mb-[13px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[16px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[10px] lg:mt-[4px] lg:text-fs10 mb-[18px] mt-[8px] mx-[auto] text-fs18 text-gray_800 text-left xl:mb-[12px] xl:mt-[5px] xl:text-fs12">{`Minutes`}</Text>
                  </Column>
                  <Column className="border border-gray_500 border-solid font-poppins items-center justify-center w-[100%]">
                    <Text className="2xl:mt-[13px] 2xl:text-fs18 3xl:mt-[16px] 3xl:text-fs21 font-medium lg:mt-[10px] lg:text-fs14 mt-[18px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[12px] xl:text-fs16">{`18`}</Text>
                    <Text className="2xl:mb-[13px] 2xl:ml-[11px] 2xl:mr-[10px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[16px] 3xl:ml-[13px] 3xl:mr-[12px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[10px] lg:mt-[4px] lg:mx-[8px] lg:text-fs10 mb-[18px] ml-[15px] mr-[14px] mt-[8px] text-fs18 text-gray_800 text-left xl:mb-[12px] xl:ml-[10px] xl:mr-[9px] xl:mt-[5px] xl:text-fs12">{`Seconds`}</Text>
                  </Column>
                </Row>
              </Column>
              <Text className="2xl:mr-[7px] 2xl:mt-[18px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[21px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:mt-[14px] lg:text-fs14 mr-[10px] mt-[24px] text-fs24 text-gray_800 text-left xl:mr-[6px] xl:mt-[16px] xl:text-fs16">{`Black Warm Jacket`}</Text>
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] items-center lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px]">
                <Row className="font-poppins items-center justify-start self-stretch w-[100%]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-normal lg:text-fs14 line-through text-fs24 text-gray_500 text-left xl:text-fs16">{`$299`}</Text>
                  <Text className="2xl:ml-[18px] 2xl:mr-[185px] 2xl:text-fs18 3xl:ml-[21px] 3xl:mr-[222px] 3xl:text-fs21 font-medium lg:ml-[14px] lg:mr-[144px] lg:text-fs14 ml-[24px] mr-[247px] text-fs24 text-gray_800 text-left xl:ml-[16px] xl:mr-[164px] xl:text-fs16">{`$199`}</Text>
                </Row>
              </Column>
            </Column>
          </Row>
          <Row className="bg-gray_100 items-center justify-center shadow-bs1 w-[100%]">
            <Column className="2xl:ml-[24px] 2xl:my-[24px] 3xl:ml-[28px] 3xl:my-[28px] font-poppins items-center justify-start lg:ml-[18px] lg:my-[18px] ml-[32px] my-[32px] w-[35%] xl:ml-[21px] xl:my-[21px]">
              <Image
                src="img_rectangle45_1.png"
                className="2xl:h-[210px] 2xl:w-[209px] 3xl:h-[252px] 3xl:w-[251px] h-[279px] lg:h-[163px] lg:w-[162px] mx-[auto] object-cover self-stretch w-[279px] xl:h-[187px] xl:w-[186px]"
                alt="Rectangle45"
              />
              <Button className="2xl:mt-[24px] 2xl:px-[26px] 2xl:py-[13px] 2xl:text-fs13 3xl:mt-[28px] 3xl:px-[31px] 3xl:py-[16px] 3xl:text-fs16 bg-gray_800 border-bw font-bold lg:mt-[18px] lg:px-[20px] lg:py-[10px] lg:text-fs10 mt-[32px] mx-[auto] px-[35px] py-[18.045px] text-center text-fs18 text-white_A700 w-[72%] xl:mt-[21px] xl:px-[23px] xl:py-[12px] xl:text-fs12">{`Add to Cart`}</Button>
            </Column>
            <Column className="2xl:ml-[36px] 2xl:mr-[42px] 2xl:my-[58px] 3xl:ml-[43px] 3xl:mr-[50px] 3xl:my-[70px] font-poppins justify-start lg:ml-[28px] lg:mr-[32px] lg:my-[45px] ml-[48px] mr-[56px] my-[78px] w-[48%] xl:ml-[32px] xl:mr-[37px] xl:my-[52px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-normal lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-gray_800 text-left xl:mr-[6px] xl:text-fs16">{`Limited Deals`}</Text>
              <Column className="2xl:mt-[18px] 3xl:mt-[21px] items-center lg:mt-[14px] mt-[24px] self-stretch w-[100%] xl:mt-[16px]">
                <Row className="2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 items-center justify-between lg:gap-[18px] self-stretch w-[100%] xl:gap-[21px]">
                  <Column className="border border-gray_500 border-solid font-poppins items-center justify-center w-[100%]">
                    <Text className="2xl:mt-[13px] 2xl:text-fs18 3xl:mt-[16px] 3xl:text-fs21 font-medium lg:mt-[10px] lg:text-fs14 mt-[18px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[12px] xl:text-fs16">{`08`}</Text>
                    <Text className="2xl:mb-[13px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[16px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[10px] lg:mt-[4px] lg:text-fs10 mb-[18px] mt-[8px] mx-[auto] text-fs18 text-gray_800 text-left xl:mb-[12px] xl:mt-[5px] xl:text-fs12">{`Hours`}</Text>
                  </Column>
                  <Column className="border border-gray_500 border-solid font-poppins items-center justify-center w-[100%]">
                    <Text className="2xl:mt-[13px] 2xl:text-fs18 3xl:mt-[16px] 3xl:text-fs21 font-medium lg:mt-[10px] lg:text-fs14 mt-[18px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[12px] xl:text-fs16">{`58`}</Text>
                    <Text className="2xl:mb-[13px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[16px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[10px] lg:mt-[4px] lg:text-fs10 mb-[18px] mt-[8px] mx-[auto] text-fs18 text-gray_800 text-left xl:mb-[12px] xl:mt-[5px] xl:text-fs12">{`Minutes`}</Text>
                  </Column>
                  <Column className="border border-gray_500 border-solid font-poppins items-center justify-center w-[100%]">
                    <Text className="2xl:mt-[13px] 2xl:text-fs18 3xl:mt-[16px] 3xl:text-fs21 font-medium lg:mt-[10px] lg:text-fs14 mt-[18px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[12px] xl:text-fs16">{`18`}</Text>
                    <Text className="2xl:mb-[13px] 2xl:ml-[11px] 2xl:mr-[10px] 2xl:mt-[6px] 2xl:text-fs13 3xl:mb-[16px] 3xl:ml-[13px] 3xl:mr-[12px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mb-[10px] lg:mt-[4px] lg:mx-[8px] lg:text-fs10 mb-[18px] ml-[15px] mr-[14px] mt-[8px] text-fs18 text-gray_800 text-left xl:mb-[12px] xl:ml-[10px] xl:mr-[9px] xl:mt-[5px] xl:text-fs12">{`Seconds`}</Text>
                  </Column>
                </Row>
              </Column>
              <Text className="2xl:mr-[7px] 2xl:mt-[18px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[21px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:mt-[14px] lg:text-fs14 mr-[10px] mt-[24px] text-fs24 text-gray_800 text-left xl:mr-[6px] xl:mt-[16px] xl:text-fs16">{`Casual Grey Shoes`}</Text>
              <Column className="2xl:mt-[12px] 3xl:mt-[14px] items-center lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px]">
                <Row className="font-poppins items-center justify-start self-stretch w-[100%]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-normal lg:text-fs14 line-through text-fs24 text-gray_500 text-left xl:text-fs16">{`$399`}</Text>
                  <Text className="2xl:ml-[17px] 2xl:mr-[185px] 2xl:text-fs18 3xl:ml-[20px] 3xl:mr-[222px] 3xl:text-fs21 font-medium lg:ml-[13px] lg:mr-[144px] lg:text-fs14 ml-[23px] mr-[247px] text-fs24 text-gray_800 text-left xl:ml-[15px] xl:mr-[164px] xl:text-fs16">{`$199`}</Text>
                </Row>
              </Column>
            </Column>
          </Row>
        </List>
      </Stack>
      <Row className="2xl:gap-[22px] 2xl:mt-[75px] 3xl:gap-[27px] 3xl:mt-[90px] gap-[30px] grid grid-cols-2 items-center justify-start lg:gap-[17px] lg:mt-[58px] mt-[100px] mx-[auto] w-[85%] xl:gap-[20px] xl:mt-[66px]">
        <Column className="font-poppins justify-start w-[100%]">
          <Text className="2xl:mr-[7px] 2xl:text-fs27 3xl:mr-[9px] 3xl:text-fs32 font-bold lg:mr-[5px] lg:text-fs21 mr-[10px] text-fs36 text-gray_800 text-left xl:mr-[6px] xl:text-fs24">{`New Arrival`}</Text>
          <Column className="2xl:mt-[58px] 3xl:mt-[70px] items-center lg:mt-[45px] mt-[78.5px] self-stretch w-[100%] xl:mt-[52px]">
            <List
              className="2xl:ml-[7px] 3xl:ml-[9px] flex-wrap gap-[0] lg:ml-[5px] min-h-[auto] ml-[10px] w-[97%] xl:ml-[6px]"
              orientation="vertical"
            >
              <Row className="2xl:my-[46px] 3xl:my-[56px] font-poppins items-center justify-start lg:my-[36px] my-[62.5px] self-stretch w-[100%] xl:my-[41px]">
                <Image
                  src="img_placeholder_27.png"
                  className="2xl:h-[81px] 2xl:w-[80px] 3xl:h-[97px] 3xl:w-[96px] h-[107px] lg:h-[63px] lg:w-[62px] object-contain w-[107px] xl:h-[72px] xl:w-[71px]"
                  alt="placeholder"
                />
                <Column className="2xl:ml-[12px] 2xl:my-[10px] 3xl:ml-[14px] 3xl:my-[12px] justify-start lg:ml-[9px] lg:my-[7px] ml-[16px] my-[13.5px] w-[28%] xl:ml-[10px] xl:my-[9px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Checkered Jacket`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
                <Image
                  src="img_placeholder_28.png"
                  className="2xl:h-[81px] 2xl:ml-[56px] 2xl:w-[80px] 3xl:h-[97px] 3xl:ml-[67px] 3xl:w-[96px] h-[107px] lg:h-[63px] lg:ml-[43px] lg:w-[62px] ml-[75px] object-contain w-[107px] xl:h-[72px] xl:ml-[50px] xl:w-[71px]"
                  alt="placeholder"
                />
                <Column className="2xl:ml-[12px] 2xl:my-[10px] 3xl:ml-[14px] 3xl:my-[12px] font-poppins justify-start lg:ml-[9px] lg:my-[7px] ml-[16px] my-[13.5px] w-[30%] xl:ml-[10px] xl:my-[9px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Blue Woman Denim`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
              </Row>
              <Row className="2xl:mr-[48px] 2xl:my-[46px] 3xl:mr-[57px] 3xl:my-[56px] font-poppins items-center justify-start lg:mr-[37px] lg:my-[36px] mr-[64px] my-[62.5px] w-[92%] xl:mr-[42px] xl:my-[41px]">
                <Image
                  src="img_placeholder_29.png"
                  className="2xl:h-[81px] 2xl:w-[80px] 3xl:h-[97px] 3xl:w-[96px] h-[107px] lg:h-[63px] lg:w-[62px] object-contain w-[107px] xl:h-[72px] xl:w-[71px]"
                  alt="placeholder"
                />
                <Column className="2xl:ml-[12px] 2xl:my-[10px] 3xl:ml-[14px] 3xl:my-[12px] justify-start lg:ml-[9px] lg:my-[7px] ml-[16px] my-[13.5px] w-[24%] xl:ml-[10px] xl:my-[9px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Orange Jeans`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
                <Image
                  src="img_placeholder_30.png"
                  className="2xl:h-[81px] 2xl:ml-[93px] 2xl:w-[80px] 3xl:h-[97px] 3xl:ml-[111px] 3xl:w-[96px] h-[107px] lg:h-[63px] lg:ml-[72px] lg:w-[62px] ml-[124px] object-contain w-[107px] xl:h-[72px] xl:ml-[82px] xl:w-[71px]"
                  alt="placeholder"
                />
                <Column className="2xl:ml-[12px] 2xl:my-[10px] 3xl:ml-[14px] 3xl:my-[12px] font-poppins justify-start lg:ml-[9px] lg:my-[7px] ml-[16px] my-[13.5px] w-[24%] xl:ml-[10px] xl:my-[9px]">
                  <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Classic Watch`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                </Column>
              </Row>
            </List>
            <Row className="2xl:mt-[58px] 3xl:mt-[70px] font-poppins items-center justify-center lg:mt-[45px] mt-[78.5px] mx-[auto] w-[14%] xl:mt-[52px]">
              <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 my-[1px] text-fs18 text-gray_800 text-left xl:text-fs12">{`View all`}</Text>
              <Image
                src="img_arrow_3.svg"
                className="2xl:h-[24px] 2xl:ml-[6px] 3xl:h-[28px] 3xl:ml-[7px] h-[31px] lg:h-[19px] lg:ml-[4px] ml-[8px] object-contain w-[29%] xl:h-[21px] xl:ml-[5px]"
                alt="Arrow"
              />
            </Row>
          </Column>
        </Column>
        <Column className="font-poppins justify-start w-[100%]">
          <Text className="2xl:mr-[7px] 2xl:text-fs27 3xl:mr-[9px] 3xl:text-fs32 font-bold lg:mr-[5px] lg:text-fs21 mr-[10px] text-fs36 text-gray_800 text-left xl:mr-[6px] xl:text-fs24">{`Popular This Week`}</Text>
          <List
            className="2xl:mt-[57px] 2xl:mx-[18px] 3xl:mt-[68px] 3xl:mx-[21px] flex-wrap gap-[0] lg:mt-[44px] lg:mx-[14px] min-h-[auto] mt-[76px] mx-[24px] w-[85%] xl:mt-[50px] xl:mx-[16px]"
            orientation="vertical"
          >
            <Row className="2xl:mr-[5px] 2xl:my-[45px] 3xl:mr-[6px] 3xl:my-[54px] items-center justify-start lg:mr-[4px] lg:my-[35px] mr-[7px] my-[60px] w-[99%] xl:mr-[4px] xl:my-[40px]">
              <Image
                src="img_placeholder_31.png"
                className="2xl:h-[81px] 2xl:my-[1px] 2xl:w-[80px] 3xl:h-[97px] 3xl:my-[2px] 3xl:w-[96px] h-[107px] lg:h-[63px] lg:my-[1px] lg:w-[62px] my-[2.5px] object-contain w-[107px] xl:h-[72px] xl:my-[1px] xl:w-[71px]"
                alt="placeholder"
              />
              <Column className="2xl:ml-[12px] 3xl:ml-[14px] justify-start lg:ml-[9px] ml-[16px] w-[19%] xl:ml-[10px]">
                <Column className="items-center self-stretch w-[100%]">
                  <Column className="font-poppins justify-start self-stretch w-[100%]">
                    <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Blue Jeans`}</Text>
                    <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                  </Column>
                </Column>
                <RatingBar
                  className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] xl:mr-[6px] xl:mt-[10px]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
              </Column>
              <Image
                src="img_placeholder_32.png"
                className="2xl:h-[81px] 2xl:ml-[122px] 2xl:my-[1px] 2xl:w-[80px] 3xl:h-[97px] 3xl:ml-[146px] 3xl:my-[2px] 3xl:w-[96px] h-[107px] lg:h-[63px] lg:ml-[95px] lg:my-[1px] lg:w-[62px] ml-[163px] my-[2.5px] object-contain w-[107px] xl:h-[72px] xl:ml-[108px] xl:my-[1px] xl:w-[71px]"
                alt="placeholder"
              />
              <Column className="2xl:ml-[12px] 3xl:ml-[14px] justify-start lg:ml-[9px] ml-[16px] w-[20%] xl:ml-[10px]">
                <Column className="items-center self-stretch w-[100%]">
                  <Column className="font-poppins justify-start self-stretch w-[100%]">
                    <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Wristwatch`}</Text>
                    <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                  </Column>
                </Column>
                <RatingBar
                  className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] xl:mr-[6px] xl:mt-[10px]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
              </Column>
            </Row>
            <Row className="2xl:my-[45px] 3xl:my-[54px] items-center justify-start lg:my-[35px] my-[60px] self-stretch w-[100%] xl:my-[40px]">
              <Image
                src="img_placeholder_33.png"
                className="2xl:h-[81px] 2xl:my-[1px] 2xl:w-[80px] 3xl:h-[97px] 3xl:my-[2px] 3xl:w-[96px] h-[107px] lg:h-[63px] lg:my-[1px] lg:w-[62px] my-[2.5px] object-contain w-[107px] xl:h-[72px] xl:my-[1px] xl:w-[71px]"
                alt="placeholder"
              />
              <Column className="2xl:ml-[12px] 3xl:ml-[14px] justify-start lg:ml-[9px] ml-[16px] w-[26%] xl:ml-[10px]">
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
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
              </Column>
              <Image
                src="img_placeholder_34.png"
                className="2xl:h-[81px] 2xl:ml-[87px] 2xl:my-[1px] 2xl:w-[80px] 3xl:h-[97px] 3xl:ml-[104px] 3xl:my-[2px] 3xl:w-[96px] h-[107px] lg:h-[63px] lg:ml-[67px] lg:my-[1px] lg:w-[62px] ml-[116px] my-[2.5px] object-contain w-[107px] xl:h-[72px] xl:ml-[77px] xl:my-[1px] xl:w-[71px]"
                alt="placeholder"
              />
              <Column className="2xl:ml-[12px] 3xl:ml-[14px] justify-start lg:ml-[9px] ml-[16px] w-[21%] xl:ml-[10px]">
                <Column className="items-center self-stretch w-[100%]">
                  <Column className="font-poppins justify-start self-stretch w-[100%]">
                    <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Gray Watch`}</Text>
                    <Text className="2xl:mr-[7px] 2xl:mt-[6px] 2xl:text-fs18 3xl:mr-[9px] 3xl:mt-[7px] 3xl:text-fs21 font-medium lg:mr-[5px] lg:mt-[4px] lg:text-fs14 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[6px] xl:mt-[5px] xl:text-fs16">{`$299`}</Text>
                  </Column>
                </Column>
                <RatingBar
                  className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] xl:mr-[6px] xl:mt-[10px]"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
              </Column>
            </Row>
          </List>
          <Column className="2xl:mt-[57px] 3xl:mt-[68px] items-center lg:mt-[44px] mt-[76px] self-stretch w-[100%] xl:mt-[50px]">
            <Row className="font-poppins items-center justify-center mx-[auto] w-[14%]">
              <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 my-[1px] text-fs18 text-gray_800 text-left xl:text-fs12">{`View all`}</Text>
              <Image
                src="img_arrow_3.svg"
                className="2xl:h-[24px] 2xl:ml-[6px] 3xl:h-[28px] 3xl:ml-[7px] h-[31px] lg:h-[19px] lg:ml-[4px] ml-[8px] object-contain w-[29%] xl:h-[21px] xl:ml-[5px]"
                alt="Arrow"
              />
            </Row>
          </Column>
        </Column>
      </Row>
      <Row className="2xl:mt-[75px] 3xl:mt-[90px] bg-gray_100 font-poppins items-center justify-start lg:mt-[58px] mt-[100px] self-stretch w-[100%] xl:mt-[66px]">
        <Image
          src="img_truck.svg"
          className="2xl:h-[37px] 2xl:ml-[108px] 2xl:my-[63px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[129px] 3xl:my-[76px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[84px] lg:my-[49px] lg:w-[28px] ml-[144px] my-[84.5px] object-contain w-[48px] xl:h-[33px] xl:ml-[96px] xl:my-[56px] xl:w-[32px]"
          alt="Truck"
        />
        <Column className="2xl:ml-[24px] 2xl:my-[48px] 3xl:ml-[28px] 3xl:my-[57px] justify-start lg:ml-[18px] lg:my-[37px] ml-[32px] my-[64px] w-[11%] xl:ml-[21px] xl:my-[42px]">
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
        <Image
          src="img_card.svg"
          className="2xl:h-[37px] 2xl:ml-[93px] 2xl:my-[63px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[112px] 3xl:my-[76px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[72px] lg:my-[49px] lg:w-[28px] ml-[125px] my-[84.5px] object-contain w-[48px] xl:h-[33px] xl:ml-[83px] xl:my-[56px] xl:w-[32px]"
          alt="Card"
        />
        <Column className="2xl:ml-[24px] 2xl:my-[48px] 3xl:ml-[28px] 3xl:my-[57px] justify-start lg:ml-[18px] lg:my-[37px] ml-[32px] my-[64px] w-[11%] xl:ml-[21px] xl:my-[42px]">
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
        <Image
          src="img_broken.svg"
          className="2xl:h-[37px] 2xl:ml-[93px] 2xl:my-[63px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[112px] 3xl:my-[76px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[72px] lg:my-[49px] lg:w-[28px] ml-[125px] my-[84.5px] object-contain w-[48px] xl:h-[33px] xl:ml-[83px] xl:my-[56px] xl:w-[32px]"
          alt="Broken"
        />
        <Column className="2xl:ml-[24px] 2xl:my-[48px] 3xl:ml-[28px] 3xl:my-[57px] justify-start lg:ml-[18px] lg:my-[37px] ml-[32px] my-[64px] w-[11%] xl:ml-[21px] xl:my-[42px]">
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
        <Image
          src="img_support.svg"
          className="2xl:h-[37px] 2xl:ml-[93px] 2xl:my-[63px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[112px] 3xl:my-[76px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[72px] lg:my-[49px] lg:w-[28px] ml-[125px] my-[84.5px] object-contain w-[48px] xl:h-[33px] xl:ml-[83px] xl:my-[56px] xl:w-[32px]"
          alt="Support"
        />
        <Column className="2xl:ml-[24px] 2xl:mr-[177px] 2xl:my-[48px] 3xl:ml-[28px] 3xl:mr-[213px] 3xl:my-[57px] font-poppins justify-start lg:ml-[18px] lg:mr-[138px] lg:my-[37px] ml-[32px] mr-[237px] my-[64px] w-[11%] xl:ml-[21px] xl:mr-[158px] xl:my-[42px]">
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
      <div className="self-stretch w-[100%]">
        <Column className="bg-gray_800 font-poppins items-center justify-end self-stretch w-[100%]">
          <Row className="2xl:mt-[48px] 3xl:mt-[57px] justify-evenly lg:mt-[37px] mt-[64px] px-[0] self-stretch w-[100%] xl:mt-[42px]">
            <Column className="2xl:mb-[27px] 3xl:mb-[32px] font-poppins justify-start lg:mb-[21px] mb-[36px] w-[22%] xl:mb-[24px]">
              <Row className="items-center justify-start self-stretch w-[100%]">
                <Image
                  src="img_group19_1.svg"
                  className="2xl:h-[19px] 2xl:my-[4px] 3xl:h-[22px] 3xl:my-[5px] h-[24px] lg:h-[14px] lg:my-[3px] my-[6px] object-contain w-[9%] xl:h-[17px] xl:my-[4px]"
                  alt="Group19"
                />
                <Text className="2xl:ml-[6px] 2xl:mr-[228px] 2xl:text-fs18 3xl:ml-[7px] 3xl:mr-[273px] 3xl:text-fs21 font-bold lg:ml-[4px] lg:mr-[177px] lg:text-fs14 ml-[8px] mr-[304px] text-fs24 text-left text-white_A700 xl:ml-[5px] xl:mr-[202px] xl:text-fs16">{`Elliye`}</Text>
              </Row>
              <Text className="2xl:leading-lh24 2xl:mr-[7px] 2xl:mt-[24px] 2xl:text-fs13 3xl:leading-lh28 3xl:mr-[9px] 3xl:mt-[28px] 3xl:text-fs16 font-normal leading-lh3200 lg:leading-lh18 lg:mr-[5px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[32px] text-fs18 text-gray_500 text-left w-[92%] xl:leading-lh21 xl:mr-[6px] xl:mt-[21px] xl:text-fs12">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .`}</Text>
              <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:mt-[21px]">
                <Column className="items-center justify-start self-stretch w-[100%]">
                  <Row className="font-poppins items-center justify-start self-stretch w-[100%]">
                    <Image
                      src="img_call.svg"
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
            </Column>
            <Row className="justify-center w-[56%]">
              <Column className="2xl:mb-[42px] 3xl:mb-[50px] font-poppins justify-start lg:mb-[32px] mb-[56px] w-[23%] xl:mb-[37px]">
                <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`Product Links`}</Text>
                <Column className="2xl:mr-[7px] 2xl:mt-[24px] 3xl:mr-[9px] 3xl:mt-[28px] font-poppins justify-start lg:mr-[5px] lg:mt-[18px] mr-[10px] mt-[32px] w-[41%] xl:mr-[6px] xl:mt-[21px]">
                  <Text className="2xl:text-fs13 3xl:text-fs16 font-normal lg:text-fs10 mr-[1px] text-fs18 text-gray_500 text-left xl:text-fs12">{`Categories`}</Text>
                  <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mt-[9px] lg:text-fs10 mt-[16px] self-stretch text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`New Arrival`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`Features`}</Text>
                  <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mt-[9px] lg:text-fs10 mr-[1px] mt-[16px] text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`Collections`}</Text>
                </Column>
              </Column>
              <Column className="2xl:ml-[24px] 3xl:ml-[28px] font-poppins justify-start lg:ml-[18px] ml-[32px] w-[23%] xl:ml-[21px]">
                <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`Company`}</Text>
                <Column className="2xl:mr-[7px] 2xl:mt-[24px] 3xl:mr-[9px] 3xl:mt-[28px] font-poppins justify-start lg:mr-[5px] lg:mt-[18px] mr-[10px] mt-[32px] w-[60%] xl:mr-[6px] xl:mt-[21px]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:text-fs12">{`About`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[5px] lg:text-fs10 mr-[10px] mt-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[6px] xl:text-fs12">{`Blog`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[5px] lg:text-fs10 mr-[10px] mt-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[6px] xl:text-fs12">{`Careers`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[5px] lg:text-fs10 mr-[10px] mt-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[6px] xl:text-fs12">{`Services`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[5px] lg:text-fs10 mr-[10px] mt-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[6px] xl:text-fs12">{`Privacy Policy`}</Text>
                  <Text className="2xl:mt-[7px] 2xl:text-fs13 3xl:mt-[9px] 3xl:text-fs16 font-normal lg:mt-[5px] lg:text-fs10 mt-[10px] self-stretch text-fs18 text-gray_500 text-left xl:mt-[6px] xl:text-fs12">{`Terms of service`}</Text>
                </Column>
              </Column>
              <Column className="2xl:mb-[53px] 2xl:ml-[24px] 2xl:mr-[108px] 3xl:mb-[63px] 3xl:ml-[28px] 3xl:mr-[129px] font-poppins justify-start lg:mb-[41px] lg:ml-[18px] lg:mr-[84px] mb-[71px] ml-[32px] mr-[144px] w-[35%] xl:mb-[47px] xl:ml-[21px] xl:mr-[96px]">
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
          </Row>
          <Text className="2xl:mb-[24px] 2xl:mt-[72px] 2xl:text-fs10 3xl:mb-[28px] 3xl:mt-[86px] 3xl:text-fs12 font-normal lg:mb-[18px] lg:mt-[56px] lg:text-fs8 mb-[32px] mt-[96px] mx-[auto] text-bluegray_100 text-fs14 text-left xl:mb-[21px] xl:mt-[64px] xl:text-fs9">{`Copyright © 2021 Elliye. All Right Reseved`}</Text>
        </Column>
      </div>
    </Column>
  );
};

export default HomepageV2Page;
