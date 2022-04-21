import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Stack } from "components/Stack";
import { Input } from "components/Input";
import { CheckBox } from "components/CheckBox";
import { Line } from "components/Line";
import { List } from "components/List";
import { RatingBar } from "components/RatingBar";
import { Grid } from "components/Grid";

const ProductListPage = () => {
  return (
    <Column className="bg-white_A700 font-poppins justify-start ml-[auto] mr-[auto] w-[100%]">
      <div className="self-stretch w-[100%]">
        <Row className="bg-white_A700 font-poppins items-center justify-start self-stretch w-[100%]">
          <Row className="2xl:ml-[108px] 2xl:my-[22px] 3xl:ml-[129px] 3xl:my-[27px] items-center justify-center lg:ml-[84px] lg:my-[17px] ml-[144px] my-[30px] w-[6%] xl:ml-[96px] xl:my-[20px]">
            <Image
              src="img_group19.svg"
              className="2xl:h-[19px] 2xl:my-[4px] 3xl:h-[22px] 3xl:my-[5px] h-[24px] lg:h-[14px] lg:my-[3px] my-[6px] object-contain w-[35%] xl:h-[17px] xl:my-[4px]"
              alt="Group19"
            />
            <Text className="2xl:ml-[6px] 2xl:text-fs18 3xl:ml-[7px] 3xl:text-fs21 font-bold lg:ml-[4px] lg:text-fs14 ml-[8px] text-fs24 text-gray_800 text-left xl:ml-[5px] xl:text-fs16">{`Elliye`}</Text>
          </Row>
          <Row className="2xl:ml-[308px] 2xl:my-[18px] 3xl:ml-[370px] 3xl:my-[21px] bg-white_A700 border-2 border-gray_100 border-solid items-center justify-center lg:ml-[239px] lg:my-[14px] ml-[411px] my-[24px] w-[31%] xl:ml-[274px] xl:my-[16px]">
            <Text className="2xl:mb-[8px] 2xl:ml-[24px] 2xl:mt-[7px] 2xl:text-fs13 3xl:ml-[28px] 3xl:my-[9px] 3xl:text-fs16 font-normal lg:mb-[6px] lg:ml-[18px] lg:mt-[5px] lg:text-fs10 mb-[11px] ml-[32px] mt-[10px] opacity-op5 text-center text-fs18 text-gray_500_87 xl:mb-[7px] xl:ml-[21px] xl:mt-[6px] xl:text-fs12">{`Search here`}</Text>
            <Image
              src="img_search.svg"
              className="2xl:h-[37px] 2xl:ml-[297px] 2xl:w-[36px] 3xl:h-[44px] 3xl:ml-[357px] 3xl:w-[43px] h-[48px] lg:h-[28px] lg:ml-[231px] lg:w-[28px] ml-[397px] object-contain w-[48px] xl:h-[33px] xl:ml-[264px] xl:w-[32px]"
              alt="button"
            />
          </Row>
          <Image
            src="img_icon_5.svg"
            className="2xl:h-[19px] 2xl:ml-[228px] 2xl:my-[27px] 3xl:h-[22px] 3xl:ml-[273px] 3xl:my-[32px] h-[24px] lg:h-[14px] lg:ml-[177px] lg:my-[21px] ml-[304px] my-[36px] object-contain w-[4%] xl:h-[17px] xl:ml-[202px] xl:my-[24px]"
            alt="icon"
          />
          <Button className="2xl:ml-[24px] 2xl:mr-[108px] 2xl:my-[18px] 2xl:px-[25px] 2xl:py-[11px] 2xl:text-fs10 3xl:ml-[28px] 3xl:mr-[129px] 3xl:my-[21px] 3xl:px-[30px] 3xl:py-[13px] 3xl:text-fs12 bg-gray_800 border-bw font-bold lg:ml-[18px] lg:mr-[84px] lg:my-[14px] lg:px-[19px] lg:py-[8px] lg:text-fs8 ml-[32px] mr-[144px] my-[24px] px-[34px] py-[14.705px] text-center text-fs14 text-white_A700 w-[6%] xl:ml-[21px] xl:mr-[96px] xl:my-[16px] xl:px-[22px] xl:py-[9px] xl:text-fs9">{`Login`}</Button>
        </Row>
      </div>
      <Column className="2xl:mt-[24px] 3xl:mt-[28px] lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:mt-[21px]">
        <Row className="2xl:mx-[108px] 3xl:mx-[129px] font-poppins items-center justify-start lg:mx-[84px] mx-[144px] w-[11%] xl:mx-[96px]">
          <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_500 text-left xl:text-fs12">{`Home`}</Text>
          <Text className="2xl:ml-[12px] 2xl:text-fs13 3xl:ml-[14px] 3xl:text-fs16 font-medium lg:ml-[9px] lg:text-fs10 ml-[16px] text-bluegray_100 text-fs18 text-left xl:ml-[10px] xl:text-fs12">{`>`}</Text>
          <Text className="2xl:ml-[12px] 2xl:text-fs13 3xl:ml-[14px] 3xl:text-fs16 font-medium lg:ml-[9px] lg:text-fs10 ml-[16px] text-fs18 text-gray_800 text-left xl:ml-[10px] xl:text-fs12">{`Product List`}</Text>
        </Row>
      </Column>
      <Text className="2xl:mt-[30px] 2xl:text-fs27 3xl:mt-[36px] 3xl:text-fs32 font-bold lg:mt-[23px] lg:text-fs21 mt-[41px] mx-[auto] text-fs36 text-gray_800 text-left xl:mt-[27px] xl:text-fs24">{`Product List`}</Text>
      <Row className="2xl:mt-[45px] 3xl:mt-[54px] justify-start lg:mt-[35px] mt-[60px] mx-[auto] w-[85%] xl:mt-[40px]">
        <Column className="2xl:mb-[422px] 3xl:mb-[506px] font-poppins justify-start lg:mb-[328px] mb-[563px] w-[15%] xl:mb-[375px]">
          <Column className="items-center self-stretch w-[100%]">
            <Stack className="2xl:h-[408px] 3xl:h-[489px] font-poppins h-[543px] lg:h-[317px] self-stretch w-[100%] xl:h-[363px]">
              <Column className="absolute justify-start self-stretch top-[0] w-[100%]">
                <Input
                  className="2xl:pb-[25px] 2xl:text-fs13 3xl:pb-[31px] 3xl:text-fs16 bg-transparent border-0 border-b-[1px] border-bluegray_100 border-solid font-medium lg:pb-[20px] lg:text-fs10 pb-[34.545px] pl-[0] placeholder:bg-transparent placeholder:text-gray_800 pt-[1px] self-stretch text-fs18 text-gray_800 text-left w-[100%] xl:pb-[23px] xl:text-fs12"
                  name="Categories"
                  placeholder={`Categories`}
                ></Input>
                <Column className="2xl:mr-[7px] 2xl:mt-[23px] 3xl:mr-[9px] 3xl:mt-[27px] justify-start lg:mr-[5px] lg:mt-[18px] mr-[10px] mt-[31px] w-[60%] xl:mr-[6px] xl:mt-[20px]">
                  <Row className="2xl:mr-[7px] 3xl:mr-[9px] font-poppins items-center justify-start lg:mr-[5px] mr-[10px] w-[74%] xl:mr-[6px]">
                    <Image
                      src="img_sweater_3.svg"
                      className="2xl:h-[25px] 2xl:w-[24px] 3xl:h-[29px] 3xl:w-[28px] h-[32px] lg:h-[19px] lg:w-[18px] object-contain w-[32px] xl:h-[22px] xl:w-[21px]"
                      alt="Sweater"
                    />
                    <Text className="2xl:ml-[12px] 2xl:my-[1px] 2xl:text-fs13 3xl:ml-[14px] 3xl:my-[2px] 3xl:text-fs16 font-normal lg:ml-[9px] lg:my-[1px] lg:text-fs10 ml-[16px] my-[2.5px] text-fs18 text-gray_500 text-left xl:ml-[10px] xl:my-[1px] xl:text-fs12">{`Jacket`}</Text>
                  </Row>
                  <Row className="2xl:mr-[7px] 2xl:mt-[18px] 3xl:mr-[9px] 3xl:mt-[21px] font-poppins items-center justify-start lg:mr-[5px] lg:mt-[14px] mr-[10px] mt-[24px] w-[60%] xl:mr-[6px] xl:mt-[16px]">
                    <Image
                      src="img_tshirt_3.svg"
                      className="2xl:h-[25px] 2xl:w-[24px] 3xl:h-[29px] 3xl:w-[28px] h-[32px] lg:h-[19px] lg:w-[18px] object-contain w-[32px] xl:h-[22px] xl:w-[21px]"
                      alt="Tshirt"
                    />
                    <Text className="2xl:ml-[12px] 2xl:my-[1px] 2xl:text-fs13 3xl:ml-[14px] 3xl:my-[2px] 3xl:text-fs16 font-normal lg:ml-[9px] lg:my-[1px] lg:text-fs10 ml-[16px] my-[2.5px] text-fs18 text-gray_800 text-left xl:ml-[10px] xl:my-[1px] xl:text-fs12">{`Shirt`}</Text>
                  </Row>
                  <Row className="2xl:mr-[7px] 2xl:mt-[18px] 3xl:mr-[9px] 3xl:mt-[21px] font-poppins items-center justify-start lg:mr-[5px] lg:mt-[14px] mr-[10px] mt-[24px] w-[68%] xl:mr-[6px] xl:mt-[16px]">
                    <Image
                      src="img_pants_3.svg"
                      className="2xl:h-[25px] 2xl:w-[24px] 3xl:h-[29px] 3xl:w-[28px] h-[32px] lg:h-[19px] lg:w-[18px] object-contain w-[32px] xl:h-[22px] xl:w-[21px]"
                      alt="Pants"
                    />
                    <Text className="2xl:ml-[12px] 2xl:my-[1px] 2xl:text-fs13 3xl:ml-[14px] 3xl:my-[2px] 3xl:text-fs16 font-normal lg:ml-[9px] lg:my-[1px] lg:text-fs10 ml-[16px] my-[2.5px] text-fs18 text-gray_500 text-left xl:ml-[10px] xl:my-[1px] xl:text-fs12">{`Pants`}</Text>
                  </Row>
                  <Row className="2xl:mr-[7px] 2xl:mt-[18px] 3xl:mr-[9px] 3xl:mt-[21px] font-poppins items-center justify-start lg:mr-[5px] lg:mt-[14px] mr-[10px] mt-[24px] w-[71%] xl:mr-[6px] xl:mt-[16px]">
                    <Image
                      src="img_boot_3.svg"
                      className="2xl:h-[25px] 2xl:w-[24px] 3xl:h-[29px] 3xl:w-[28px] h-[32px] lg:h-[19px] lg:w-[18px] object-contain w-[32px] xl:h-[22px] xl:w-[21px]"
                      alt="Boot"
                    />
                    <Text className="2xl:ml-[12px] 2xl:my-[1px] 2xl:text-fs13 3xl:ml-[14px] 3xl:my-[2px] 3xl:text-fs16 font-normal lg:ml-[9px] lg:my-[1px] lg:text-fs10 ml-[16px] my-[2.5px] text-fs18 text-gray_500 text-left xl:ml-[10px] xl:my-[1px] xl:text-fs12">{`Shoes`}</Text>
                  </Row>
                  <Row className="2xl:mr-[7px] 2xl:mt-[18px] 3xl:mr-[9px] 3xl:mt-[21px] font-poppins items-center justify-start lg:mr-[5px] lg:mt-[14px] mr-[10px] mt-[24px] w-[67%] xl:mr-[6px] xl:mt-[16px]">
                    <Image
                      src="img_dress_3.svg"
                      className="2xl:h-[25px] 2xl:w-[24px] 3xl:h-[29px] 3xl:w-[28px] h-[32px] lg:h-[19px] lg:w-[18px] object-contain w-[32px] xl:h-[22px] xl:w-[21px]"
                      alt="Dress"
                    />
                    <Text className="2xl:ml-[12px] 2xl:my-[1px] 2xl:text-fs13 3xl:ml-[14px] 3xl:my-[2px] 3xl:text-fs16 font-normal lg:ml-[9px] lg:my-[1px] lg:text-fs10 ml-[16px] my-[2.5px] text-fs18 text-gray_500 text-left xl:ml-[10px] xl:my-[1px] xl:text-fs12">{`Dress`}</Text>
                  </Row>
                  <Column className="2xl:mt-[18px] 3xl:mt-[21px] items-center lg:mt-[14px] mt-[24px] self-stretch w-[100%] xl:mt-[16px]">
                    <Row className="font-poppins items-center justify-start self-stretch w-[100%]">
                      <Image
                        src="img_belt_3.svg"
                        className="2xl:h-[25px] 2xl:w-[24px] 3xl:h-[29px] 3xl:w-[28px] h-[32px] lg:h-[19px] lg:w-[18px] object-contain w-[32px] xl:h-[22px] xl:w-[21px]"
                        alt="Belt"
                      />
                      <Text className="2xl:ml-[12px] 2xl:my-[1px] 2xl:text-fs13 3xl:ml-[14px] 3xl:my-[2px] 3xl:text-fs16 font-normal lg:ml-[9px] lg:my-[1px] lg:text-fs10 ml-[16px] my-[2.5px] text-fs18 text-gray_500 text-left xl:ml-[10px] xl:my-[1px] xl:text-fs12">{`Accesories`}</Text>
                    </Row>
                  </Column>
                  <Row className="2xl:mb-[38px] 2xl:mr-[7px] 2xl:mt-[18px] 3xl:mb-[45px] 3xl:mr-[9px] 3xl:mt-[21px] font-poppins items-center justify-start lg:mb-[29px] lg:mr-[5px] lg:mt-[14px] mb-[51px] mr-[10px] mt-[24px] w-[59%] xl:mb-[34px] xl:mr-[6px] xl:mt-[16px]">
                    <Image
                      src="img_skirt_1.svg"
                      className="2xl:h-[25px] 2xl:w-[24px] 3xl:h-[29px] 3xl:w-[28px] h-[32px] lg:h-[19px] lg:w-[18px] object-contain w-[32px] xl:h-[22px] xl:w-[21px]"
                      alt="Skirt"
                    />
                    <Text className="2xl:ml-[12px] 2xl:my-[1px] 2xl:text-fs13 3xl:ml-[14px] 3xl:my-[2px] 3xl:text-fs16 font-normal lg:ml-[9px] lg:my-[1px] lg:text-fs10 ml-[16px] my-[2.5px] text-fs18 text-gray_500 text-left xl:ml-[10px] xl:my-[1px] xl:text-fs12">{`Skirt`}</Text>
                  </Row>
                </Column>
              </Column>
              <div className="absolute bg-transparent border-0 bottom-[0] mb-[0] self-stretch w-[100%] input-wrap">
                <div className="input-wrap">
                  <Image
                    src="img_chevrondown.svg"
                    className="absolute top-[3.045px] bottom-[36.045px] left-[0] bg-transparent border-0 lg:top-[1px] lg:bottom-[21px] xl:top-[2px] xl:bottom-[24px] 2xl:top-[2px] 2xl:bottom-[27px] 3xl:top-[2px] 3xl:bottom-[32px]"
                    alt="chevron-down"
                  />
                  <Input
                    className="2xl:pb-[27px] 2xl:pl-[25px] 2xl:pt-[2px] 2xl:text-fs13 3xl:pb-[32px] 3xl:pl-[30px] 3xl:pt-[2px] 3xl:text-fs16 bg-transparent border-0 border-b-[1px] border-bluegray_100 border-solid font-normal inset-x-[0] lg:pb-[21px] lg:pl-[19px] lg:pt-[1px] lg:text-fs10 pb-[36.045px] pl-[34px] placeholder:bg-transparent placeholder:text-gray_500 pt-[3.045px] text-fs18 text-gray_500 text-left w-[100%] xl:pb-[24px] xl:pl-[22px] xl:pt-[2px] xl:text-fs12"
                    name="View more"
                    placeholder={`View more`}
                  ></Input>
                </div>
              </div>
            </Stack>
          </Column>
          <Text className="2xl:mr-[7px] 2xl:mt-[23px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[27px] 3xl:text-fs16 font-medium lg:mr-[5px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[31px] text-fs18 text-gray_800 text-left xl:mr-[6px] xl:mt-[20px] xl:text-fs12">{`Filter by Price`}</Text>
          <Column className="2xl:mr-[7px] 2xl:mt-[24px] 3xl:mr-[9px] 3xl:mt-[28px] justify-start lg:mr-[5px] lg:mt-[18px] mr-[10px] mt-[32px] w-[68%] xl:mr-[6px] xl:mt-[21px]">
            <CheckBox
              className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_500 text-left w-[66%] xl:mr-[6px] xl:text-fs12"
              inputClassName="border-bluegray_100 border-bw3 border-solid mr-[5px]"
              name="Group50"
              label={`All Price`}
            ></CheckBox>
            <Row className="2xl:mr-[7px] 2xl:mt-[18px] 3xl:mr-[9px] 3xl:mt-[21px] items-center justify-start lg:mr-[5px] lg:mt-[14px] mr-[10px] mt-[24px] w-[87%] xl:mr-[6px] xl:mt-[16px]">
              <Image
                src="img_checkedbox.svg"
                className="2xl:h-[19px] 2xl:w-[18px] 3xl:h-[22px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:w-[14px] my-[1px] object-contain w-[24px] xl:h-[17px] xl:w-[16px]"
                alt="Checkedbox"
              />
              <Text className="2xl:ml-[12px] 2xl:text-fs13 3xl:ml-[14px] 3xl:text-fs16 font-normal lg:ml-[9px] lg:text-fs10 ml-[16px] text-fs18 text-gray_800 text-left xl:ml-[10px] xl:text-fs12">{`$100 - $250`}</Text>
            </Row>
            <CheckBox
              className="2xl:mr-[7px] 2xl:mt-[18px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[21px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[14px] lg:text-fs10 mr-[10px] mt-[24px] text-fs18 text-gray_500 text-left w-[90%] xl:mr-[6px] xl:mt-[16px] xl:text-fs12"
              inputClassName="border-bluegray_100 border-bw3 border-solid mr-[5px]"
              name="Group51"
              label={`$250 - $500`}
            ></CheckBox>
            <CheckBox
              className="2xl:mr-[6px] 2xl:mt-[18px] 2xl:text-fs13 3xl:mr-[7px] 3xl:mt-[21px] 3xl:text-fs16 font-normal lg:mr-[4px] lg:mt-[14px] lg:text-fs10 mr-[8px] mt-[24px] text-fs18 text-gray_500 text-left w-[95%] xl:mr-[5px] xl:mt-[16px] xl:text-fs12"
              inputClassName="border-bluegray_100 border-bw3 border-solid mr-[5px]"
              name="Group52"
              label={`$750 - $1.000`}
            ></CheckBox>
            <Column className="2xl:mt-[18px] 3xl:mt-[21px] font-poppins items-center lg:mt-[14px] mt-[24px] self-stretch w-[100%] xl:mt-[16px]">
              <CheckBox
                className="2xl:text-fs13 3xl:text-fs16 font-normal lg:text-fs10 self-stretch text-fs18 text-gray_500 text-left w-[100%] xl:text-fs12"
                inputClassName="border-bluegray_100 border-bw3 border-solid mr-[5px]"
                name="Group53"
                label={`$1000 - $1.500`}
              ></CheckBox>
            </Column>
          </Column>
          <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:mt-[21px]">
            <Line className="bg-bluegray_100 h-[1px] self-stretch w-[100%]" />
          </Column>
          <Text className="2xl:mr-[7px] 2xl:mt-[23px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[27px] 3xl:text-fs16 font-medium lg:mr-[5px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[31px] text-fs18 text-gray_800 text-left xl:mr-[6px] xl:mt-[20px] xl:text-fs12">{`Filter by Rating`}</Text>
          <Column className="2xl:mr-[7px] 2xl:mt-[24px] 3xl:mr-[9px] 3xl:mt-[28px] justify-start lg:mr-[5px] lg:mt-[18px] mr-[10px] mt-[32px] w-[78%] xl:mr-[6px] xl:mt-[21px]">
            <Row className="2xl:gap-[12px] 2xl:mr-[7px] 3xl:gap-[14px] 3xl:mr-[9px] gap-[16px] grid grid-cols-2 items-center justify-start lg:gap-[9px] lg:mr-[5px] mr-[10px] w-[33%] xl:gap-[10px] xl:mr-[6px]">
              <Image
                src="img_checkbox.svg"
                className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] object-contain w-[100%] xl:h-[17px]"
                alt="Checkbox"
              />
              <Image
                src="img_star1.svg"
                className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] object-contain w-[100%] xl:h-[17px]"
                alt="Star1"
              />
            </Row>
            <Row className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] items-center justify-start lg:mr-[5px] lg:mt-[9px] mr-[10px] mt-[16px] w-[50%] xl:mr-[6px] xl:mt-[10px]">
              <Image
                src="img_checkbox.svg"
                className="2xl:h-[19px] 2xl:w-[18px] 3xl:h-[22px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:w-[14px] object-contain w-[24px] xl:h-[17px] xl:w-[16px]"
                alt="Checkbox"
              />
              <Row className="2xl:gap-[6px] 2xl:ml-[12px] 3xl:gap-[7px] 3xl:ml-[14px] gap-[8px] grid grid-cols-2 items-center justify-between lg:gap-[4px] lg:ml-[9px] ml-[16px] w-[58%] xl:gap-[5px] xl:ml-[10px]">
                <Image
                  src="img_star1.svg"
                  className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] object-contain w-[100%] xl:h-[17px]"
                  alt="Star1"
                />
                <Image
                  src="img_star1.svg"
                  className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] object-contain w-[100%] xl:h-[17px]"
                  alt="Star2"
                />
              </Row>
            </Row>
            <List
              className="2xl:mr-[7px] 2xl:mt-[12px] 3xl:mr-[9px] 3xl:mt-[14px] flex-wrap gap-[0] lg:mr-[5px] lg:mt-[9px] min-h-[auto] mr-[10px] mt-[16px] w-[83%] xl:mr-[6px] xl:mt-[10px]"
              orientation="vertical"
            >
              <Row className="2xl:mr-[24px] 2xl:my-[6px] 3xl:mr-[28px] 3xl:my-[7px] items-center justify-between lg:mr-[18px] lg:my-[4px] mr-[32px] my-[8px] px-[0] w-[80%] xl:mr-[21px] xl:my-[5px]">
                <Image
                  src="img_checkbox.svg"
                  className="2xl:h-[19px] 2xl:w-[18px] 3xl:h-[22px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:w-[14px] object-contain w-[24px] xl:h-[17px] xl:w-[16px]"
                  alt="Checkbox"
                />
                <Row className="2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-3 items-center justify-between lg:gap-[4px] w-[69%] xl:gap-[5px]">
                  <Image
                    src="img_star1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] object-contain w-[100%] xl:h-[17px]"
                    alt="Star1"
                  />
                  <Image
                    src="img_star1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] object-contain w-[100%] xl:h-[17px]"
                    alt="Star2"
                  />
                  <Image
                    src="img_star1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] object-contain w-[100%] xl:h-[17px]"
                    alt="Star3"
                  />
                </Row>
              </Row>
              <Row className="2xl:my-[6px] 3xl:my-[7px] items-center justify-between lg:my-[4px] my-[8px] px-[0] self-stretch w-[100%] xl:my-[5px]">
                <Image
                  src="img_checkedbox.svg"
                  className="2xl:h-[19px] 2xl:w-[18px] 3xl:h-[22px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:w-[14px] object-contain w-[24px] xl:h-[17px] xl:w-[16px]"
                  alt="Checkedbox"
                />
                <Row className="2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-4 items-center justify-between lg:gap-[4px] w-[75%] xl:gap-[5px]">
                  <Image
                    src="img_star1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] object-contain w-[100%] xl:h-[17px]"
                    alt="Star1"
                  />
                  <Image
                    src="img_star1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] object-contain w-[100%] xl:h-[17px]"
                    alt="Star2"
                  />
                  <Image
                    src="img_star1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] object-contain w-[100%] xl:h-[17px]"
                    alt="Star3"
                  />
                  <Image
                    src="img_star1.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:h-[14px] object-contain w-[100%] xl:h-[17px]"
                    alt="Star5"
                  />
                </Row>
              </Row>
            </List>
            <Column className="2xl:mt-[12px] 3xl:mt-[14px] items-center lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px]">
              <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                <Image
                  src="img_checkbox.svg"
                  className="2xl:h-[19px] 2xl:w-[18px] 3xl:h-[22px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:w-[14px] object-contain w-[24px] xl:h-[17px] xl:w-[16px]"
                  alt="Checkbox"
                />
                <RatingBar
                  className=""
                  selectedStarCount={5}
                  starCount={5}
                  color="var(--undefined)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Row>
            </Column>
          </Column>
        </Column>
        <Column className="2xl:ml-[24px] 3xl:ml-[28px] items-center justify-start lg:ml-[18px] ml-[32px] w-[83%] xl:ml-[21px]">
          <Row className="2xl:gap-[668px] 3xl:gap-[802px] font-poppins gap-[891px] grid grid-cols-2 items-center justify-between lg:gap-[519px] self-stretch w-[100%] xl:gap-[594px]">
            <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_500 text-left w-[100%] xl:text-fs12">
              <span className="text-gray_500 text-fs18 font-poppins text-left font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16">
                <>{`Viewing `}</>
              </span>
              <span className="text-gray_800 text-fs18 font-poppins text-left font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16">
                <>{`20`}</>
              </span>
              <span className="text-gray_500 text-fs18 font-poppins text-left font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16">
                <>{` of `}</>
              </span>
              <span className="text-gray_800 text-fs18 font-poppins text-left font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16">
                <>{`160`}</>
              </span>
              <span className="text-gray_500 text-fs18 font-poppins text-left font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16">
                <>{` product`}</>
              </span>
            </Text>
            <Row className="font-poppins items-center justify-between px-[0] w-[100%]">
              <Text className="2xl:text-fs13 3xl:text-fs16 font-normal lg:text-fs10 text-fs18 text-gray_500 text-left xl:text-fs12">
                <span className="text-gray_500 text-fs18 font-poppins text-left font-normal lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16">
                  <>{`Sort by: `}</>
                </span>
                <span className="text-gray_800 text-fs18 font-poppins text-left font-normal lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16">
                  <>{`Newest Items`}</>
                </span>
              </Text>
              <Image
                src="img_chevrondown_1.svg"
                className="2xl:h-[19px] 2xl:w-[18px] 3xl:h-[22px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:w-[14px] my-[1px] object-contain w-[24px] xl:h-[17px] xl:w-[16px]"
                alt="chevrondown"
              />
            </Row>
          </Row>
          <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center justify-start lg:mt-[18px] mt-[32px] w-[100%] xl:mt-[21px]">
            <Column className="items-center justify-start self-stretch w-[100%]">
              <List
                className="flex-wrap gap-[0] min-h-[auto] self-stretch w-[100%]"
                orientation="vertical"
              >
                <Row className="2xl:gap-[24px] 2xl:my-[12px] 3xl:gap-[28px] 3xl:my-[14px] gap-[32px] grid grid-cols-5 items-center justify-between lg:gap-[18px] lg:my-[9px] my-[16px] self-stretch w-[100%] xl:gap-[21px] xl:my-[10px]">
                  <Column className="items-center justify-start w-[100%]">
                    <Image
                      src="img_placeholder_42.png"
                      className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                      alt="placeholder"
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
                      src="img_rectangle39_9.png"
                      className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                      alt="placeholder"
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
                      src="img_placeholder_43.png"
                      className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                      alt="placeholder"
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
                      src="img_placeholder_44.png"
                      className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                      alt="placeholder"
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
                  <Column className="items-center justify-start w-[100%]">
                    <Image
                      src="img_placeholder_39.png"
                      className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                      alt="placeholder"
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
                </Row>
                <Row className="2xl:my-[12px] 3xl:my-[14px] justify-between lg:my-[9px] my-[16px] px-[0] self-stretch w-[100%] xl:my-[10px]">
                  <Column className="items-center justify-start w-[18%]">
                    <Image
                      src="img_placeholder_45.png"
                      className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                      alt="placeholder"
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
                  <Column className="2xl:mb-[27px] 3xl:mb-[32px] items-center justify-start lg:mb-[21px] mb-[36px] w-[18%] xl:mb-[24px]">
                    <Image
                      src="img_rectangle39_8.png"
                      className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                      alt="placeholder"
                    />
                    <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[59%] xl:mt-[10px]">
                      <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 xl:text-fs16">{`Gray T-shirt`}</Text>
                      <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                    </Column>
                  </Column>
                  <Column className="2xl:mb-[27px] 3xl:mb-[32px] items-center justify-start lg:mb-[21px] mb-[36px] w-[18%] xl:mb-[24px]">
                    <Image
                      src="img_placeholder_40.png"
                      className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                      alt="placeholder"
                    />
                    <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[57%] xl:mt-[10px]">
                      <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Red Flannel`}</Text>
                      <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                    </Column>
                  </Column>
                  <Column className="items-center justify-start w-[18%]">
                    <Image
                      src="img_rectangle39_10.png"
                      className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                      alt="placeholder"
                    />
                    <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[56%] xl:mt-[10px]">
                      <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                        {
                          <>
                            {`Casual `}
                            <br />
                            {`Grey Shoes`}
                          </>
                        }
                      </Text>
                      <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                    </Column>
                  </Column>
                  <Column className="2xl:mb-[27px] 3xl:mb-[32px] items-center justify-start lg:mb-[21px] mb-[36px] w-[18%] xl:mb-[24px]">
                    <Image
                      src="img_placeholder_46.png"
                      className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                      alt="placeholder"
                    />
                    <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[56%] xl:mt-[10px]">
                      <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 mx-[auto] self-stretch text-center text-fs24 text-gray_800 xl:text-fs16">{`Pink Jacket`}</Text>
                      <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                    </Column>
                  </Column>
                </Row>
              </List>
              <Grid className="2xl:gap-[24px] 2xl:mt-[24px] 3xl:gap-[28px] 3xl:mt-[28px] gap-[32px] grid grid-cols-5 lg:gap-[18px] lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:gap-[21px] xl:mt-[21px]">
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_placeholder_47.png"
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
                    src="img_placeholder_48.png"
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
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_placeholder_49.png"
                    className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                    alt="placeholder"
                  />
                  <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[76%] xl:mt-[10px]">
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
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_placeholder_36.png"
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
                    <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_placeholder_50.png"
                    className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                    alt="placeholder"
                  />
                  <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[71%] xl:mt-[10px]">
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
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_placeholder_51.png"
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
                    <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="justify-start w-[100%]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Image
                      src="img_placeholder_37.png"
                      className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                      alt="placeholder"
                    />
                  </Column>
                  <Column className="2xl:mt-[12px] 3xl:mt-[14px] items-end lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px]">
                    <Column className="2xl:mx-[28px] 3xl:mx-[34px] font-poppins items-center justify-start lg:mx-[22px] mx-[38px] w-[64%] xl:mx-[25px]">
                      <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                        {
                          <>
                            {`Black Formal`}
                            <br />
                            {`Highheels`}
                          </>
                        }
                      </Text>
                      <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_placeholder_41.png"
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
                    <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_rectangle39_7.png"
                    className="2xl:h-[184px] 2xl:w-[183px] 3xl:h-[221px] 3xl:w-[220px] h-[245px] lg:h-[143px] lg:w-[142px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[164px] xl:w-[163px]"
                    alt="placeholder"
                  />
                  <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mt-[9px] mt-[16px] mx-[auto] w-[52%] xl:mt-[10px]">
                    <Text className="2xl:text-fs18 3xl:text-fs21 font-medium leading-lh lg:text-fs14 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs16">
                      {
                        <>
                          {`Gray `}
                          <br />
                          {`Longpants`}
                        </>
                      }
                    </Text>
                    <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_placeholder_52.png"
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
                    <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
                  </Column>
                </Column>
              </Grid>
            </Column>
            <Row className="2xl:mt-[42px] 3xl:mt-[50px] font-poppins items-center justify-center lg:mt-[32px] mt-[56px] mx-[auto] w-[22%] xl:mt-[37px]">
              <Image
                src="img_chevrondown_2.svg"
                className="2xl:h-[19px] 2xl:my-[10px] 2xl:w-[18px] 3xl:h-[22px] 3xl:my-[12px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:my-[7px] lg:w-[14px] my-[13.5px] object-contain w-[24px] xl:h-[17px] xl:my-[9px] xl:w-[16px]"
                alt="chevrondown"
              />
              <Text className="2xl:ml-[18px] 2xl:pb-[9px] 2xl:pl-[16px] 2xl:pt-[8px] 2xl:text-fs13 3xl:ml-[21px] 3xl:pb-[10px] 3xl:pl-[19px] 3xl:pt-[9px] 3xl:text-fs16 bg-gray_800 font-normal leading-lh lg:ml-[14px] lg:pb-[7px] lg:pl-[12px] lg:pt-[6px] lg:text-fs10 ml-[24px] my-[1px] pb-[12px] pl-[22px] pt-[11px] text-fs18 text-left text-white_A700 w-[17%] xl:ml-[16px] xl:pb-[8px] xl:pl-[14px] xl:pt-[7px] xl:text-fs12">{`1`}</Text>
              <Text className="2xl:ml-[18px] 2xl:pl-[15px] 2xl:py-[9px] 2xl:text-fs13 3xl:ml-[21px] 3xl:pl-[18px] 3xl:py-[10px] 3xl:text-fs16 border-2 border-gray_500 border-solid font-normal leading-lh lg:ml-[14px] lg:pl-[11px] lg:py-[7px] lg:text-fs10 ml-[24px] pl-[20px] py-[12px] text-fs18 text-gray_500 text-left w-[17%] xl:ml-[16px] xl:pl-[13px] xl:py-[8px] xl:text-fs12">{`2`}</Text>
              <Text className="2xl:ml-[18px] 2xl:pl-[15px] 2xl:py-[9px] 2xl:text-fs13 3xl:ml-[21px] 3xl:pl-[18px] 3xl:py-[10px] 3xl:text-fs16 border-2 border-gray_500 border-solid font-normal leading-lh lg:ml-[14px] lg:pl-[11px] lg:py-[7px] lg:text-fs10 ml-[24px] pl-[20px] py-[12px] text-fs18 text-gray_500 text-left w-[17%] xl:ml-[16px] xl:pl-[13px] xl:py-[8px] xl:text-fs12">{`3`}</Text>
              <Image
                src="img_chevrondown_3.svg"
                className="2xl:h-[19px] 2xl:ml-[18px] 2xl:my-[10px] 2xl:w-[18px] 3xl:h-[22px] 3xl:ml-[21px] 3xl:my-[12px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:ml-[14px] lg:my-[7px] lg:w-[14px] ml-[24px] my-[13.5px] object-contain w-[24px] xl:h-[17px] xl:ml-[16px] xl:my-[9px] xl:w-[16px]"
                alt="chevrondown"
              />
            </Row>
          </Column>
        </Column>
      </Row>
      <div className="2xl:mt-[75px] 3xl:mt-[90px] lg:mt-[58px] mt-[100px] self-stretch w-[100%] xl:mt-[66px]">
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
            </Column>
            <Row className="justify-between px-[0] w-[56%]">
              <Column className="2xl:mb-[42px] 3xl:mb-[50px] font-poppins justify-start lg:mb-[32px] mb-[56px] w-[23%] xl:mb-[37px]">
                <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`Product Links`}</Text>
                <Column className="2xl:mr-[7px] 2xl:mt-[24px] 3xl:mr-[9px] 3xl:mt-[28px] font-poppins justify-start lg:mr-[5px] lg:mt-[18px] mr-[10px] mt-[32px] w-[41%] xl:mr-[6px] xl:mt-[21px]">
                  <Text className="2xl:text-fs13 3xl:text-fs16 font-normal lg:text-fs10 mr-[1px] text-fs18 text-gray_500 text-left xl:text-fs12">{`Categories`}</Text>
                  <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mt-[9px] lg:text-fs10 mt-[16px] self-stretch text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`New Arrival`}</Text>
                  <Text className="2xl:mr-[7px] 2xl:mt-[12px] 2xl:text-fs13 3xl:mr-[9px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:mt-[10px] xl:text-fs12">{`Features`}</Text>
                  <Text className="2xl:mt-[12px] 2xl:text-fs13 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:mt-[9px] lg:text-fs10 mr-[1px] mt-[16px] text-fs18 text-gray_500 text-left xl:mt-[10px] xl:text-fs12">{`Collections`}</Text>
                </Column>
              </Column>
              <Column className="font-poppins justify-start w-[23%]">
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
              <Column className="2xl:mb-[53px] 2xl:mr-[108px] 3xl:mb-[63px] 3xl:mr-[129px] font-poppins justify-start lg:mb-[41px] lg:mr-[84px] mb-[71px] mr-[144px] w-[35%] xl:mb-[47px] xl:mr-[96px]">
                <Text className="2xl:mr-[7px] 2xl:text-fs18 3xl:mr-[9px] 3xl:text-fs21 font-bold lg:mr-[5px] lg:text-fs14 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[6px] xl:text-fs16">{`Join our Newsletter`}</Text>
                <Text className="2xl:mt-[18px] 2xl:text-fs13 3xl:mt-[21px] 3xl:text-fs16 font-normal leading-lh lg:mt-[14px] lg:text-fs10 mt-[24px] self-stretch text-fs18 text-gray_500 text-left w-[100%] xl:mt-[16px] xl:text-fs12">{`Drop your email below to get update, promotions, coupons, and more!`}</Text>
                <Column className="2xl:mt-[26px] 3xl:mt-[31px] items-center lg:mt-[20px] mt-[35px] self-stretch w-[100%] xl:mt-[23px]">
                  <Row className="bg-gray_800 border border-solid border-white_A700 font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
                    <Text className="2xl:ml-[18px] 2xl:my-[12px] 2xl:text-fs13 3xl:mb-[15px] 3xl:ml-[21px] 3xl:mt-[14px] 3xl:text-fs16 font-normal lg:ml-[14px] lg:my-[9px] lg:text-fs10 mb-[17px] ml-[24px] mt-[16px] opacity-op5 text-bluegray_100_87 text-center text-fs18 tracking-ls1 xl:mb-[11px] xl:ml-[16px] xl:mt-[10px] xl:text-fs12">{`Enter your email`}</Text>
                    <Image
                      src="img_submit_1.svg"
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

export default ProductListPage;
