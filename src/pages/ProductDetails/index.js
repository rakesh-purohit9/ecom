import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { List } from "components/List";

const ProductDetailsPage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
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
      <Row className="2xl:mt-[24px] 3xl:mt-[28px] items-center justify-start lg:mt-[18px] mt-[32px] mx-[auto] w-[85%] xl:mt-[21px]">
        <Column className="2xl:mb-[3px] 3xl:mb-[4px] items-center justify-start lg:mb-[2px] mb-[5px] w-[49%] xl:mb-[3px]">
          <Image
            src="img_placeholder_53.png"
            className="2xl:h-[393px] 3xl:h-[471px] h-[523px] lg:h-[306px] object-cover self-stretch w-[100%] xl:h-[349px]"
            alt="placeholder"
          />
          <Row className="2xl:gap-[24px] 2xl:mt-[24px] 3xl:gap-[28px] 3xl:mt-[28px] gap-[32px] grid grid-cols-3 items-center justify-center lg:gap-[18px] lg:mt-[18px] mt-[32px] mx-[auto] w-[60%] xl:gap-[21px] xl:mt-[21px]">
            <Image
              src="img_placeholder_54.png"
              className="2xl:h-[103px] 3xl:h-[124px] h-[137px] lg:h-[80px] object-contain w-[100%] xl:h-[92px]"
              alt="placeholder"
            />
            <Image
              src="img_placeholder_55.png"
              className="2xl:h-[103px] 3xl:h-[124px] h-[137px] lg:h-[80px] object-contain w-[100%] xl:h-[92px]"
              alt="placeholder"
            />
            <Image
              src="img_placeholder_56.png"
              className="2xl:h-[103px] 3xl:h-[124px] h-[137px] lg:h-[80px] object-contain w-[100%] xl:h-[92px]"
              alt="placeholder"
            />
          </Row>
        </Column>
        <Column className="2xl:ml-[24px] 3xl:ml-[28px] font-poppins justify-start lg:ml-[18px] ml-[32px] w-[49%] xl:ml-[21px]">
          <Column className="items-center self-stretch w-[100%]">
            <Column className="justify-start self-stretch w-[100%]">
              <Row className="2xl:mr-[7px] 3xl:mr-[9px] font-poppins items-center justify-start lg:mr-[5px] mr-[10px] w-[39%] xl:mr-[6px]">
                <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_500 text-left xl:text-fs12">{`Featured`}</Text>
                <Text className="2xl:ml-[12px] 2xl:text-fs13 3xl:ml-[14px] 3xl:text-fs16 font-medium lg:ml-[9px] lg:text-fs10 ml-[16px] text-bluegray_100 text-fs18 text-left xl:ml-[10px] xl:text-fs12">{`>`}</Text>
                <Text className="2xl:ml-[12px] 2xl:text-fs13 3xl:ml-[14px] 3xl:text-fs16 font-medium lg:ml-[9px] lg:text-fs10 ml-[16px] text-fs18 text-gray_500 text-left xl:ml-[10px] xl:text-fs12">{`Purple Warm Jacket`}</Text>
              </Row>
              <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:mt-[21px]">
                <Column className="font-poppins justify-start self-stretch w-[100%]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs42 3xl:mr-[9px] 3xl:text-fs50 font-bold leading-lh lg:mr-[5px] lg:text-fs32 mr-[10px] text-fs56 text-gray_800 text-left w-[49%] xl:mr-[6px] xl:text-fs37">
                    {
                      <>
                        {`Purple Warm `}
                        <br />
                        {`Zip Jacket`}
                      </>
                    }
                  </Text>
                  <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:mt-[21px]">
                    <Column className="font-poppins justify-start self-stretch w-[100%]">
                      <Text className="2xl:mr-[7px] 2xl:text-fs27 3xl:mr-[9px] 3xl:text-fs32 font-normal lg:mr-[5px] lg:text-fs21 mr-[10px] text-fs36 text-gray_500 text-left xl:mr-[6px] xl:text-fs24">{`$299`}</Text>
                      <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:mt-[21px]">
                        <Line className="bg-bluegray_100 h-[1px] self-stretch w-[100%]" />
                      </Column>
                    </Column>
                  </Column>
                  <Text className="2xl:leading-lh24 2xl:mt-[23px] 2xl:text-fs13 3xl:leading-lh28 3xl:mt-[27px] 3xl:text-fs16 font-normal leading-lh3200 lg:leading-lh18 lg:mt-[18px] lg:text-fs10 mt-[31px] self-stretch text-fs18 text-gray_500 text-left w-[100%] xl:leading-lh21 xl:mt-[20px] xl:text-fs12">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
                </Column>
              </Column>
            </Column>
          </Column>
          <Row className="2xl:mr-[7px] 2xl:mt-[42px] 3xl:mr-[9px] 3xl:mt-[50px] items-center justify-start lg:mr-[5px] lg:mt-[32px] mr-[10px] mt-[56px] w-[34%] xl:mr-[6px] xl:mt-[37px]">
            <Text className="2xl:mb-[8px] 2xl:mt-[7px] 2xl:text-fs13 3xl:my-[9px] 3xl:text-fs16 font-medium lg:mb-[6px] lg:mt-[5px] lg:text-fs10 mb-[11px] mt-[10px] text-fs18 text-gray_800 text-left xl:mb-[7px] xl:mt-[6px] xl:text-fs12">{`Quantity`}</Text>
            <Stack className="2xl:h-[37px] 2xl:ml-[18px] 3xl:h-[44px] 3xl:ml-[21px] font-poppins h-[48px] lg:h-[28px] lg:ml-[14px] ml-[24px] w-[62%] xl:h-[33px] xl:ml-[16px]">
              <Image
                src="img_increase.svg"
                className="2xl:h-[37px] 2xl:w-[36px] 3xl:h-[44px] 3xl:w-[43px] absolute h-[48px] lg:h-[28px] lg:w-[28px] object-contain right-[0] w-[48px] xl:h-[33px] xl:w-[32px]"
                alt="increase"
              />
              <Image
                src="img_decrease.svg"
                className="2xl:h-[37px] 2xl:w-[36px] 3xl:h-[44px] 3xl:w-[43px] absolute h-[48px] left-[0] lg:h-[28px] lg:w-[28px] object-contain w-[48px] xl:h-[33px] xl:w-[32px]"
                alt="decrease"
              />
              <Button className="2xl:px-[26px] 2xl:py-[9px] 2xl:text-fs13 3xl:px-[31px] 3xl:py-[10px] 3xl:text-fs16 absolute bg-transparent border border-bluegray_100 border-solid font-medium inset-[0] lg:px-[20px] lg:py-[7px] lg:text-fs10 px-[35px] py-[12.045px] self-stretch text-center text-fs18 text-gray_800 w-[100%] xl:px-[23px] xl:py-[8px] xl:text-fs12">{`1`}</Button>
            </Stack>
          </Row>
          <div className="2xl:mr-[7px] 2xl:mt-[42px] 3xl:mr-[9px] 3xl:mt-[50px] bg-transparent border-bw lg:mr-[5px] lg:mt-[32px] mr-[10px] mt-[56px] w-[31%] xl:mr-[6px] xl:mt-[37px] input-wrap">
            <Image
              src="img_cart.svg"
              className="absolute right-[45.5px] border-bw bg-transparent lg:right-[26px] lg:inset-y-[11px] xl:right-[30px] xl:inset-y-[13px] 2xl:right-[34px] 2xl:inset-y-[15px] 3xl:right-[40px] 3xl:inset-y-[18px] inset-y-[20.045px]"
              alt="Cart"
            />
            <Button className="2xl:pl-[26px] 2xl:pr-[65px] 2xl:py-[15px] 2xl:text-fs13 3xl:pl-[31px] 3xl:pr-[78px] 3xl:py-[18px] 3xl:text-fs16 bg-gray_800 border-bw font-bold lg:pl-[20px] lg:pr-[51px] lg:py-[11px] lg:text-fs10 pl-[35px] pr-[87.5px] py-[20.045px] text-fs18 text-left text-white_A700 w-[100%] xl:pl-[23px] xl:pr-[58px] xl:py-[13px] xl:text-fs12">{`Add to Cart`}</Button>
          </div>
        </Column>
      </Row>
      <Column className="2xl:mt-[137px] 3xl:mt-[164px] items-center justify-start lg:mt-[106px] mt-[183px] mx-[auto] w-[85%] xl:mt-[122px]">
        <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
          <Row className="items-center justify-between px-[0] w-[24%]">
            <Text className="2xl:text-fs27 3xl:text-fs32 font-bold lg:text-fs21 text-fs36 text-gray_800 text-left xl:text-fs24">{`Similiar Product`}</Text>
            <Text className="2xl:mb-[10px] 2xl:mt-[9px] 2xl:text-fs13 3xl:mb-[12px] 3xl:mt-[11px] 3xl:text-fs16 font-medium lg:mb-[8px] lg:mt-[7px] lg:text-fs10 mb-[14px] mt-[13px] text-fs18 text-gray_500 text-left xl:mb-[9px] xl:mt-[8px] xl:text-fs12">{`View all`}</Text>
          </Row>
          <Image
            src="img_button_1.svg"
            className="2xl:h-[37px] 2xl:my-[2px] 3xl:h-[44px] 3xl:my-[2px] h-[48px] lg:h-[28px] lg:my-[1px] my-[3px] object-contain w-[7%] xl:h-[33px] xl:my-[2px]"
            alt="button"
          />
        </Row>
        <List
          className="2xl:gap-[24px] 2xl:mt-[24px] 3xl:gap-[28px] 3xl:mt-[28px] flex-wrap gap-[32px] grid grid-cols-4 lg:gap-[18px] lg:mt-[18px] min-h-[auto] mt-[32px] self-stretch w-[100%] xl:gap-[21px] xl:mt-[21px]"
          orientation="horizontal"
        >
          <Column className="items-center justify-center w-[100%]">
            <Image
              src="img_womensdenimsk.png"
              className="2xl:h-[188px] 2xl:mt-[61px] 2xl:w-[187px] 3xl:h-[226px] 3xl:mt-[73px] 3xl:w-[225px] h-[250px] lg:h-[146px] lg:mt-[47px] lg:w-[145px] mt-[81.5px] mx-[auto] object-contain w-[250px] xl:h-[167px] xl:mt-[54px] xl:w-[166px]"
              alt="placeholder"
            />
            <Column className="2xl:mb-[61px] 2xl:mt-[12px] 3xl:mb-[73px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81.5px] mt-[16px] mx-[auto] w-[48%] xl:mb-[54px] xl:mt-[10px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Black Briefcase`}</Text>
              <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
          <Column className="items-center justify-center w-[100%]">
            <Image
              src="img_placeholder_57.png"
              className="2xl:h-[188px] 2xl:mt-[61px] 2xl:w-[187px] 3xl:h-[226px] 3xl:mt-[73px] 3xl:w-[225px] h-[250px] lg:h-[146px] lg:mt-[47px] lg:w-[145px] mt-[81.5px] mx-[auto] object-contain w-[250px] xl:h-[167px] xl:mt-[54px] xl:w-[166px]"
              alt="placeholder"
            />
            <Column className="2xl:mb-[61px] 2xl:mt-[12px] 3xl:mb-[73px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81.5px] mt-[16px] mx-[auto] w-[29%] xl:mb-[54px] xl:mt-[10px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Pink Shirt`}</Text>
              <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
          <Column className="items-center justify-center mb-[1px] w-[100%]">
            <Image
              src="img_travel8v7cnke.png"
              className="2xl:h-[188px] 2xl:mt-[60px] 2xl:w-[187px] 3xl:h-[226px] 3xl:mt-[72px] 3xl:w-[225px] h-[250px] lg:h-[146px] lg:mt-[47px] lg:w-[145px] mt-[81px] mx-[auto] object-contain w-[250px] xl:h-[167px] xl:mt-[54px] xl:w-[166px]"
              alt="placeholder"
            />
            <Column className="2xl:mb-[60px] 2xl:mt-[12px] 3xl:mb-[72px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[47px] lg:mt-[9px] mb-[81px] mt-[16px] mx-[auto] w-[38%] xl:mb-[54px] xl:mt-[10px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Gray T-shirt`}</Text>
              <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
          <Column className="items-center justify-center mt-[1px] w-[100%]">
            <Image
              src="img_placeholder_58.png"
              className="2xl:h-[188px] 2xl:mt-[60px] 2xl:w-[187px] 3xl:h-[226px] 3xl:mt-[72px] 3xl:w-[225px] h-[250px] lg:h-[146px] lg:mt-[47px] lg:w-[145px] mt-[81px] mx-[auto] object-contain w-[250px] xl:h-[167px] xl:mt-[54px] xl:w-[166px]"
              alt="placeholder"
            />
            <Column className="2xl:mb-[15px] 2xl:mt-[12px] 3xl:mb-[18px] 3xl:mt-[14px] font-poppins items-center justify-start lg:mb-[11px] lg:mt-[9px] mb-[20px] mt-[16px] mx-[auto] w-[36%] xl:mb-[13px] xl:mt-[10px]">
              <Text className="2xl:text-fs18 3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-fs24 text-gray_800 text-left xl:text-fs16">{`Red Flannel`}</Text>
              <Text className="2xl:mt-[6px] 2xl:text-fs13 3xl:mt-[7px] 3xl:text-fs16 font-medium lg:mt-[4px] lg:text-fs10 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[5px] xl:text-fs12">{`$299`}</Text>
            </Column>
          </Column>
        </List>
      </Column>
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

export default ProductDetailsPage;
