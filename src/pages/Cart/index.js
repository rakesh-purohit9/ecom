import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Line } from "components/Line";
import { List } from "components/List";
import { Stack } from "components/Stack";
import { Input } from "components/Input";

const CartPage = () => {
  return (
    <Column className="bg-white_A700 font-poppins justify-start ml-[auto] mr-[auto] w-[100%]">
      <div className="self-stretch w-[100%]">
        <Column className="bg-white_A700 font-poppins items-center justify-end self-stretch w-[100%]">
          <Row className="2xl:mt-[18px] 3xl:mt-[21px] items-center justify-end lg:mt-[14px] mt-[24px] self-stretch w-[100%] xl:mt-[16px]">
            <Image
              src="img_group19.svg"
              className="2xl:h-[19px] 2xl:ml-[678px] 2xl:my-[9px] 3xl:h-[22px] 3xl:ml-[814px] 3xl:my-[10px] h-[24px] lg:h-[14px] lg:ml-[527px] lg:my-[7px] ml-[904px] my-[12px] object-contain w-[2%] xl:h-[17px] xl:ml-[603px] xl:my-[8px]"
              alt="Group19"
            />
            <Text className="2xl:ml-[6px] 2xl:my-[4px] 2xl:text-fs18 3xl:ml-[7px] 3xl:my-[5px] 3xl:text-fs21 font-bold lg:ml-[4px] lg:my-[3px] lg:text-fs14 ml-[8px] my-[6px] text-fs24 text-gray_800 text-left xl:ml-[5px] xl:my-[4px] xl:text-fs16">{`Elliye`}</Text>
            <Image
              src="img_icon_5.svg"
              className="2xl:h-[19px] 2xl:ml-[406px] 2xl:my-[9px] 3xl:h-[22px] 3xl:ml-[487px] 3xl:my-[10px] h-[24px] lg:h-[14px] lg:ml-[315px] lg:my-[7px] ml-[541px] my-[12px] object-contain w-[4%] xl:h-[17px] xl:ml-[360px] xl:my-[8px]"
              alt="icon"
            />
            <Button className="2xl:ml-[24px] 2xl:mr-[108px] 2xl:px-[21px] 2xl:py-[9px] 2xl:text-fs13 3xl:ml-[28px] 3xl:mr-[129px] 3xl:px-[26px] 3xl:py-[10px] 3xl:text-fs16 bg-gray_800 border-bw font-medium lg:ml-[18px] lg:mr-[84px] lg:px-[16px] lg:py-[7px] lg:text-fs10 ml-[32px] mr-[144px] px-[29px] py-[12.045px] text-center text-fs18 text-white_A700 w-[6%] xl:ml-[21px] xl:mr-[96px] xl:px-[19px] xl:py-[8px] xl:text-fs12">{`Login`}</Button>
          </Row>
          <Line className="2xl:mt-[18px] 3xl:mt-[21px] bg-gray_100 h-[1px] lg:mt-[14px] mt-[24px] mx-[auto] w-[85%] xl:mt-[16px]" />
        </Column>
      </div>
      <Column className="2xl:mt-[24px] 3xl:mt-[28px] lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:mt-[21px]">
        <Row className="2xl:mx-[108px] 3xl:mx-[129px] font-poppins items-center justify-start lg:mx-[84px] mx-[144px] w-[12%] xl:mx-[96px]">
          <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_500 text-left xl:text-fs12">{`Home`}</Text>
          <Text className="2xl:ml-[12px] 2xl:text-fs13 3xl:ml-[14px] 3xl:text-fs16 font-medium lg:ml-[9px] lg:text-fs10 ml-[16px] text-bluegray_100 text-fs18 text-left xl:ml-[10px] xl:text-fs12">{`>`}</Text>
          <Text className="2xl:ml-[12px] 2xl:text-fs13 3xl:ml-[14px] 3xl:text-fs16 font-medium lg:ml-[9px] lg:text-fs10 ml-[16px] text-fs18 text-gray_800 text-left xl:ml-[10px] xl:text-fs12">{`Shopping Cart`}</Text>
        </Row>
      </Column>
      <Text className="2xl:mt-[30px] 2xl:text-fs27 3xl:mt-[36px] 3xl:text-fs32 font-bold lg:mt-[23px] lg:text-fs21 mt-[41px] mx-[auto] text-fs36 text-gray_800 text-left xl:mt-[27px] xl:text-fs24">{`Shopping Cart`}</Text>
      <Row className="2xl:mt-[75px] 3xl:mt-[90px] items-center justify-start lg:mt-[58px] mt-[100px] mx-[auto] w-[84%] xl:mt-[66px]">
        <Row className="font-poppins items-center justify-between px-[0] w-[41%]">
          <Row className="items-center justify-start w-[39%]">
            <Column className="border-2 border-gray_800 border-solid items-center justify-start rounded-radius50 w-[22%]">
              <Text className="2xl:my-[7px] 2xl:text-fs18 3xl:my-[9px] 3xl:text-fs21 font-medium lg:my-[5px] lg:text-fs14 mx-[auto] my-[10px] text-fs24 text-gray_800 text-left xl:my-[6px] xl:text-fs16">{`1`}</Text>
            </Column>
            <Text className="2xl:ml-[18px] 2xl:my-[7px] 2xl:text-fs18 3xl:ml-[21px] 3xl:my-[9px] 3xl:text-fs21 font-medium lg:ml-[14px] lg:my-[5px] lg:text-fs14 ml-[24px] my-[10px] text-fs24 text-gray_800 text-left xl:ml-[16px] xl:my-[6px] xl:text-fs16">{`Shopping Cart`}</Text>
          </Row>
          <Line className="2xl:mb-[19px] 2xl:mt-[21px] 3xl:mb-[23px] 3xl:mt-[25px] bg-gray_800 h-[2px] lg:mb-[15px] lg:mt-[16px] mb-[26px] mt-[28px] w-[58%] xl:mb-[17px] xl:mt-[18px]" />
        </Row>
        <Row className="2xl:ml-[42px] 3xl:ml-[51px] font-poppins items-center justify-center lg:ml-[33px] ml-[57px] w-[40%] xl:ml-[38px]">
          <Row className="items-center justify-start w-[31%]">
            <Column className="border-2 border-bluegray_100 border-solid items-center justify-start rounded-radius50 w-[28%]">
              <Text className="2xl:my-[7px] 2xl:text-fs18 3xl:my-[9px] 3xl:text-fs21 font-medium lg:my-[5px] lg:text-fs14 mx-[auto] my-[10px] text-bluegray_100 text-fs24 text-left xl:my-[6px] xl:text-fs16">{`2`}</Text>
            </Column>
            <Text className="2xl:ml-[18px] 2xl:my-[7px] 2xl:text-fs18 3xl:ml-[21px] 3xl:my-[9px] 3xl:text-fs21 font-medium lg:ml-[14px] lg:my-[5px] lg:text-fs14 ml-[24px] my-[10px] text-bluegray_100 text-fs24 text-left xl:ml-[16px] xl:my-[6px] xl:text-fs16">{`Checkout`}</Text>
          </Row>
          <Line className="2xl:mb-[19px] 2xl:ml-[42px] 2xl:mt-[21px] 3xl:mb-[23px] 3xl:ml-[50px] 3xl:mt-[25px] bg-bluegray_100 h-[2px] lg:mb-[15px] lg:ml-[32px] lg:mt-[16px] mb-[26px] ml-[56px] mt-[28px] w-[60%] xl:mb-[17px] xl:ml-[37px] xl:mt-[18px]" />
        </Row>
        <Row className="2xl:ml-[24px] 3xl:ml-[28px] font-poppins items-center justify-start lg:ml-[18px] ml-[32px] w-[14%] xl:ml-[21px]">
          <Column className="border-2 border-bluegray_100 border-solid items-center justify-start rounded-radius50 w-[26%]">
            <Text className="2xl:my-[7px] 2xl:text-fs18 3xl:my-[9px] 3xl:text-fs21 font-medium lg:my-[5px] lg:text-fs14 mx-[auto] my-[10px] text-bluegray_100 text-fs24 text-left xl:my-[6px] xl:text-fs16">{`3`}</Text>
          </Column>
          <Text className="2xl:ml-[18px] 2xl:my-[7px] 2xl:text-fs18 3xl:ml-[21px] 3xl:my-[9px] 3xl:text-fs21 font-medium lg:ml-[14px] lg:my-[5px] lg:text-fs14 ml-[24px] my-[10px] text-bluegray_100 text-fs24 text-left xl:ml-[16px] xl:my-[6px] xl:text-fs16">{`Completed`}</Text>
        </Row>
      </Row>
      <Column className="2xl:mt-[60px] 3xl:mt-[72px] justify-start lg:mt-[46px] mt-[80px] mx-[auto] w-[85%] xl:mt-[53px]">
        <Column className="items-center self-stretch w-[100%]">
          <Column className="items-center justify-start self-stretch w-[100%]">
            <Column className="items-center justify-start self-stretch w-[100%]">
              <Column className="font-poppins items-center justify-start self-stretch w-[100%]">
                <Row className="justify-between px-[0] self-stretch w-[100%]">
                  <Text className="2xl:mb-[3px] 2xl:text-fs13 3xl:mb-[3px] 3xl:text-fs16 font-medium lg:mb-[2px] lg:text-fs10 mb-[4px] text-fs18 text-gray_500 text-left xl:mb-[2px] xl:text-fs12">{`Product`}</Text>
                  <Row className="2xl:mr-[253px] 2xl:mt-[3px] 3xl:mr-[304px] 3xl:mt-[3px] font-poppins items-center justify-center lg:mr-[197px] lg:mt-[2px] mr-[338px] mt-[4px] w-[39%] xl:mr-[225px] xl:mt-[2px]">
                    <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_500 text-left xl:text-fs12">{`Quantity`}</Text>
                    <Text className="2xl:ml-[173px] 2xl:text-fs13 3xl:ml-[208px] 3xl:text-fs16 font-medium lg:ml-[134px] lg:text-fs10 ml-[231px] text-fs18 text-gray_500 text-left xl:ml-[154px] xl:text-fs12">{`Price`}</Text>
                    <Text className="2xl:ml-[174px] 2xl:text-fs13 3xl:ml-[208px] 3xl:text-fs16 font-medium lg:ml-[135px] lg:text-fs10 ml-[232px] text-fs18 text-gray_500 text-left xl:ml-[154px] xl:text-fs12">{`Total`}</Text>
                  </Row>
                </Row>
                <Line className="2xl:mt-[24px] 3xl:mt-[28px] bg-bluegray_100 h-[1px] lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:mt-[21px]" />
              </Column>
              <List
                className="2xl:mt-[24px] 3xl:mt-[28px] flex-wrap gap-[0] lg:mt-[18px] min-h-[auto] mt-[32px] self-stretch w-[100%] xl:mt-[21px]"
                orientation="vertical"
              >
                <Column className="2xl:my-[12px] 3xl:my-[14px] font-poppins items-center justify-start lg:my-[9px] my-[16px] self-stretch w-[100%] xl:my-[10px]">
                  <Row className="items-center justify-start w-[100%]">
                    <Stack className="2xl:h-[151px] 2xl:w-[150px] 3xl:h-[181px] 3xl:w-[180px] border border-bluegray_100 border-solid h-[200px] lg:h-[117px] lg:w-[116px] w-[200px] xl:h-[134px] xl:w-[133px]">
                      <Image
                        src="img_placeholder_59.png"
                        className="2xl:h-[136px] 2xl:w-[135px] 3xl:h-[163px] 3xl:w-[162px] absolute h-[180px] inset-[0] justify-center lg:h-[105px] lg:w-[105px] m-[auto] object-contain w-[180px] xl:h-[121px] xl:w-[120px]"
                        alt="placeholder"
                      />
                    </Stack>
                    <Text className="2xl:ml-[49px] 2xl:my-[61px] 2xl:text-fs18 3xl:ml-[59px] 3xl:my-[73px] 3xl:text-fs21 font-medium lg:ml-[38px] lg:my-[47px] lg:text-fs14 ml-[66px] my-[82px] text-fs24 text-gray_800 text-left xl:ml-[44px] xl:my-[54px] xl:text-fs16">{`Gray T-shirt`}</Text>
                    <Stack className="2xl:h-[37px] 2xl:ml-[187px] 2xl:my-[57px] 3xl:h-[44px] 3xl:ml-[225px] 3xl:my-[68px] h-[48px] lg:h-[28px] lg:ml-[145px] lg:my-[44px] ml-[250px] my-[76px] w-[10%] xl:h-[33px] xl:ml-[166px] xl:my-[50px]">
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
                    <Text className="2xl:ml-[104px] 2xl:my-[61px] 2xl:text-fs18 3xl:ml-[125px] 3xl:my-[73px] 3xl:text-fs21 font-medium lg:ml-[81px] lg:my-[47px] lg:text-fs14 ml-[139px] my-[82px] text-fs24 text-gray_800 text-left xl:ml-[92px] xl:my-[54px] xl:text-fs16">{`$100.99`}</Text>
                    <Text className="2xl:ml-[139px] 2xl:my-[61px] 2xl:text-fs18 3xl:ml-[167px] 3xl:my-[73px] 3xl:text-fs21 font-medium lg:ml-[108px] lg:my-[47px] lg:text-fs14 ml-[186px] my-[82px] text-fs24 text-gray_800 text-left xl:ml-[124px] xl:my-[54px] xl:text-fs16">{`$100.99`}</Text>
                    <Image
                      src="img_.svg"
                      className="2xl:h-[26px] 2xl:mb-[61px] 2xl:ml-[192px] 2xl:mt-[63px] 2xl:w-[25px] 3xl:h-[31px] 3xl:mb-[73px] 3xl:ml-[231px] 3xl:mt-[75px] 3xl:w-[30px] h-[33.94px] lg:h-[20px] lg:mb-[47px] lg:ml-[149px] lg:mt-[49px] lg:w-[19px] mb-[82.06px] ml-[257px] mt-[84px] object-contain w-[33.94px] xl:h-[23px] xl:mb-[54px] xl:ml-[171px] xl:mt-[56px] xl:w-[22px]"
                      alt=""
                    />
                  </Row>
                  <Line className="2xl:mt-[24px] 3xl:mt-[28px] bg-bluegray_100 h-[1px] lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:mt-[21px]" />
                </Column>
                <Column className="2xl:my-[12px] 3xl:my-[14px] font-poppins items-center justify-start lg:my-[9px] my-[16px] self-stretch w-[100%] xl:my-[10px]">
                  <Row className="items-center justify-start w-[100%]">
                    <Stack className="2xl:h-[151px] 2xl:w-[150px] 3xl:h-[181px] 3xl:w-[180px] border border-bluegray_100 border-solid h-[200px] lg:h-[117px] lg:w-[116px] w-[200px] xl:h-[134px] xl:w-[133px]">
                      <Image
                        src="img_placeholder_60.png"
                        className="2xl:h-[136px] 2xl:w-[135px] 3xl:h-[163px] 3xl:w-[162px] absolute h-[180px] inset-[0] justify-center lg:h-[105px] lg:w-[105px] m-[auto] object-contain w-[180px] xl:h-[121px] xl:w-[120px]"
                        alt="placeholder"
                      />
                    </Stack>
                    <Text className="2xl:ml-[49px] 2xl:my-[61px] 2xl:text-fs18 3xl:ml-[59px] 3xl:my-[73px] 3xl:text-fs21 font-medium lg:ml-[38px] lg:my-[47px] lg:text-fs14 ml-[66px] my-[82px] text-fs24 text-gray_800 text-left xl:ml-[44px] xl:my-[54px] xl:text-fs16">{`Red Flannel`}</Text>
                    <Stack className="2xl:h-[37px] 2xl:ml-[191px] 2xl:my-[57px] 3xl:h-[44px] 3xl:ml-[229px] 3xl:my-[68px] h-[48px] lg:h-[28px] lg:ml-[148px] lg:my-[44px] ml-[255px] my-[76px] w-[10%] xl:h-[33px] xl:ml-[170px] xl:my-[50px]">
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
                    <Text className="2xl:ml-[104px] 2xl:my-[61px] 2xl:text-fs18 3xl:ml-[125px] 3xl:my-[73px] 3xl:text-fs21 font-medium lg:ml-[81px] lg:my-[47px] lg:text-fs14 ml-[139px] my-[82px] text-fs24 text-gray_800 text-left xl:ml-[92px] xl:my-[54px] xl:text-fs16">{`$100.99`}</Text>
                    <Text className="2xl:ml-[139px] 2xl:my-[61px] 2xl:text-fs18 3xl:ml-[167px] 3xl:my-[73px] 3xl:text-fs21 font-medium lg:ml-[108px] lg:my-[47px] lg:text-fs14 ml-[186px] my-[82px] text-fs24 text-gray_800 text-left xl:ml-[124px] xl:my-[54px] xl:text-fs16">{`$100.99`}</Text>
                    <Image
                      src="img_.svg"
                      className="2xl:h-[26px] 2xl:ml-[192px] 2xl:my-[62px] 2xl:w-[25px] 3xl:h-[31px] 3xl:ml-[231px] 3xl:my-[74px] 3xl:w-[30px] h-[33.94px] lg:h-[20px] lg:ml-[149px] lg:my-[48px] lg:w-[19px] mb-[83.06px] ml-[257px] mt-[83px] object-contain w-[33.94px] xl:h-[23px] xl:ml-[171px] xl:my-[55px] xl:w-[22px]"
                      alt=""
                    />
                  </Row>
                  <Line className="2xl:mt-[24px] 3xl:mt-[28px] bg-bluegray_100 h-[1px] lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:mt-[21px]" />
                </Column>
              </List>
            </Column>
            <Row className="2xl:mt-[24px] 3xl:mt-[28px] justify-between lg:mt-[18px] mt-[32px] px-[0] self-stretch w-[100%] xl:mt-[21px]">
              <Stack className="2xl:h-[46px] 2xl:mb-[27px] 3xl:h-[55px] 3xl:mb-[33px] font-poppins h-[60px] lg:h-[35px] lg:mb-[21px] mb-[37px] w-[28%] xl:h-[41px] xl:mb-[24px]">
                <Input
                  className="2xl:pl-[12px] 2xl:py-[13px] 2xl:text-fs13 3xl:pb-[16px] 3xl:pl-[14px] 3xl:pt-[15px] 3xl:text-fs16 absolute bg-transparent border border-bluegray_100 border-solid font-normal inset-[0] lg:pl-[9px] lg:py-[10px] lg:text-fs10 pb-[18.545px] pl-[16px] placeholder:bg-transparent placeholder:text-gray_500_87 pt-[17.545px] self-stretch text-fs18 text-gray_500_87 text-left tracking-ls1 w-[100%] xl:pb-[12px] xl:pl-[10px] xl:pt-[11px] xl:text-fs12"
                  name="Enter coupon co"
                  placeholder={`Enter coupon code`}
                ></Input>
                <Button className="2xl:px-[12px] 2xl:py-[13px] 2xl:text-fs13 3xl:px-[14px] 3xl:py-[16px] 3xl:text-fs16 absolute bg-gray_800 border-bw font-normal lg:px-[9px] lg:py-[10px] lg:text-fs10 px-[16px] py-[18.045px] right-[0] text-center text-fs18 text-white_A700 w-[30%] xl:px-[10px] xl:py-[12px] xl:text-fs12">{`Apply Code`}</Button>
              </Stack>
              <Column className="font-poppins justify-start w-[9%]">
                <Text className="2xl:ml-[72px] 2xl:mr-[2px] 2xl:text-fs13 3xl:ml-[87px] 3xl:mr-[2px] 3xl:text-fs16 font-medium lg:ml-[56px] lg:mr-[1px] lg:text-fs10 ml-[97px] mr-[3px] text-fs18 text-gray_500 text-left xl:ml-[64px] xl:mr-[2px] xl:text-fs12">{`Total`}</Text>
                <Column className="2xl:mt-[12px] 3xl:mt-[14px] font-poppins lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px]">
                  <Text className="2xl:text-fs27 3xl:text-fs32 font-bold lg:text-fs21 self-stretch text-fs36 text-gray_800 text-left xl:text-fs24">{`$202.00`}</Text>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
        <Row className="2xl:ml-[7px] 2xl:mt-[60px] 3xl:ml-[9px] 3xl:mt-[72px] font-poppins items-center justify-end lg:ml-[5px] lg:mt-[46px] ml-[10px] mt-[80px] w-[25%] xl:ml-[6px] xl:mt-[53px]">
          <Button className="2xl:px-[12px] 2xl:py-[9px] 2xl:text-fs13 3xl:px-[14px] 3xl:py-[10px] 3xl:text-fs16 bg-transparent border border-gray_800 border-solid font-medium lg:px-[9px] lg:py-[7px] lg:text-fs10 px-[16px] py-[12.045px] text-center text-fs18 text-gray_800 w-[50%] xl:px-[10px] xl:py-[8px] xl:text-fs12">{`Continue Shopping`}</Button>
          <Button className="2xl:ml-[24px] 2xl:px-[26px] 2xl:py-[9px] 2xl:text-fs13 3xl:ml-[28px] 3xl:px-[31px] 3xl:py-[10px] 3xl:text-fs16 bg-gray_800 border-bw font-medium lg:ml-[18px] lg:px-[20px] lg:py-[7px] lg:text-fs10 ml-[32px] px-[35px] py-[12.045px] text-center text-fs18 text-white_A700 w-[42%] xl:ml-[21px] xl:px-[23px] xl:py-[8px] xl:text-fs12">{`Checkout`}</Button>
        </Row>
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

export default CartPage;
