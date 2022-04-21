import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Line } from "components/Line";
import { Input } from "components/Input";

const CheckoutPage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="justify-start self-stretch w-[100%]">
        <Column className="items-center self-stretch w-[100%]">
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
        </Column>
        <Row className="2xl:mt-[24px] 2xl:mx-[108px] 3xl:mt-[28px] 3xl:mx-[129px] font-poppins items-center justify-start lg:mt-[18px] lg:mx-[84px] mt-[32px] mx-[144px] w-[19%] xl:mt-[21px] xl:mx-[96px]">
          <Text className="2xl:text-fs13 3xl:text-fs16 font-medium lg:text-fs10 text-fs18 text-gray_500 text-left xl:text-fs12">{`Home`}</Text>
          <Text className="2xl:ml-[12px] 2xl:text-fs13 3xl:ml-[14px] 3xl:text-fs16 font-medium lg:ml-[9px] lg:text-fs10 ml-[16px] text-bluegray_100 text-fs18 text-left xl:ml-[10px] xl:text-fs12">{`>`}</Text>
          <Text className="2xl:ml-[12px] 2xl:text-fs13 3xl:ml-[14px] 3xl:text-fs16 font-medium lg:ml-[9px] lg:text-fs10 ml-[16px] text-fs18 text-gray_500 text-left xl:ml-[10px] xl:text-fs12">{`Shopping Cart`}</Text>
          <Text className="2xl:ml-[12px] 2xl:text-fs13 3xl:ml-[14px] 3xl:text-fs16 font-medium lg:ml-[9px] lg:text-fs10 ml-[16px] text-bluegray_100 text-fs18 text-left xl:ml-[10px] xl:text-fs12">{`>`}</Text>
          <Text className="2xl:ml-[12px] 2xl:text-fs13 3xl:ml-[14px] 3xl:text-fs16 font-medium lg:ml-[9px] lg:text-fs10 ml-[16px] text-fs18 text-gray_800 text-left xl:ml-[10px] xl:text-fs12">{`Checkout`}</Text>
        </Row>
        <Column className="2xl:mt-[30px] 3xl:mt-[36px] font-poppins items-center lg:mt-[23px] mt-[41px] self-stretch w-[100%] xl:mt-[27px]">
          <Text className="2xl:text-fs27 3xl:text-fs32 font-bold lg:text-fs21 mx-[auto] text-fs36 text-gray_800 text-left xl:text-fs24">{`Checkout`}</Text>
          <Row className="2xl:mt-[75px] 3xl:mt-[90px] items-center justify-start lg:mt-[58px] mt-[100px] mx-[auto] w-[84%] xl:mt-[66px]">
            <Row className="font-poppins items-center justify-start w-[16%]">
              <Column className="border-2 border-gray_800 border-solid items-center justify-start rounded-radius50 w-[22%]">
                <Text className="2xl:my-[7px] 2xl:text-fs18 3xl:my-[9px] 3xl:text-fs21 font-medium lg:my-[5px] lg:text-fs14 mx-[auto] my-[10px] text-fs24 text-gray_800 text-left xl:my-[6px] xl:text-fs16">{`1`}</Text>
              </Column>
              <Text className="2xl:ml-[18px] 2xl:my-[7px] 2xl:text-fs18 3xl:ml-[21px] 3xl:my-[9px] 3xl:text-fs21 font-medium lg:ml-[14px] lg:my-[5px] lg:text-fs14 ml-[24px] my-[10px] text-fs24 text-gray_800 text-left xl:ml-[16px] xl:my-[6px] xl:text-fs16">{`Shopping Cart`}</Text>
            </Row>
            <Row className="2xl:ml-[15px] 3xl:ml-[18px] font-poppins items-center justify-center lg:ml-[12px] ml-[21px] w-[67%] xl:ml-[14px]">
              <Line className="2xl:mb-[19px] 2xl:mt-[21px] 3xl:mb-[23px] 3xl:mt-[25px] bg-gray_800 h-[2px] lg:mb-[15px] lg:mt-[16px] mb-[26px] mt-[28px] w-[36%] xl:mb-[17px] xl:mt-[18px]" />
              <Row className="2xl:ml-[42px] 3xl:ml-[51px] items-center justify-center lg:ml-[33px] ml-[57px] w-[18%] xl:ml-[38px]">
                <Column className="border-2 border-gray_800 border-solid items-center justify-start rounded-radius50 w-[28%]">
                  <Text className="2xl:my-[7px] 2xl:text-fs18 3xl:my-[9px] 3xl:text-fs21 font-medium lg:my-[5px] lg:text-fs14 mx-[auto] my-[10px] text-fs24 text-gray_800 text-left xl:my-[6px] xl:text-fs16">{`2`}</Text>
                </Column>
                <Text className="2xl:ml-[18px] 2xl:my-[7px] 2xl:text-fs18 3xl:ml-[21px] 3xl:my-[9px] 3xl:text-fs21 font-medium lg:ml-[14px] lg:my-[5px] lg:text-fs14 ml-[24px] my-[10px] text-fs24 text-gray_800 text-left xl:ml-[16px] xl:my-[6px] xl:text-fs16">{`Checkout`}</Text>
              </Row>
              <Line className="2xl:mb-[19px] 2xl:ml-[42px] 2xl:mt-[21px] 3xl:mb-[23px] 3xl:ml-[50px] 3xl:mt-[25px] bg-bluegray_100 h-[2px] lg:mb-[15px] lg:ml-[32px] lg:mt-[16px] mb-[26px] ml-[56px] mt-[28px] w-[36%] xl:mb-[17px] xl:ml-[37px] xl:mt-[18px]" />
            </Row>
            <Row className="2xl:ml-[24px] 3xl:ml-[28px] font-poppins items-center justify-start lg:ml-[18px] ml-[32px] w-[14%] xl:ml-[21px]">
              <Column className="border-2 border-bluegray_100 border-solid items-center justify-start rounded-radius50 w-[26%]">
                <Text className="2xl:my-[7px] 2xl:text-fs18 3xl:my-[9px] 3xl:text-fs21 font-medium lg:my-[5px] lg:text-fs14 mx-[auto] my-[10px] text-bluegray_100 text-fs24 text-left xl:my-[6px] xl:text-fs16">{`3`}</Text>
              </Column>
              <Text className="2xl:ml-[18px] 2xl:my-[7px] 2xl:text-fs18 3xl:ml-[21px] 3xl:my-[9px] 3xl:text-fs21 font-medium lg:ml-[14px] lg:my-[5px] lg:text-fs14 ml-[24px] my-[10px] text-bluegray_100 text-fs24 text-left xl:ml-[16px] xl:my-[6px] xl:text-fs16">{`Completed`}</Text>
            </Row>
          </Row>
          <Row className="2xl:mt-[60px] 3xl:mt-[72px] items-center justify-between lg:mt-[46px] mt-[80px] px-[0] self-stretch w-[100%] xl:mt-[53px]">
            <Column className="2xl:ml-[108px] 3xl:ml-[129px] font-poppins justify-start lg:ml-[84px] ml-[144px] w-[34%] xl:ml-[96px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-medium lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_800 text-left xl:mr-[6px] xl:text-fs12">{`Buyer Info`}</Text>
              <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:mt-[21px]">
                <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                <Column className="2xl:mt-[23px] 3xl:mt-[27px] font-poppins justify-start lg:mt-[18px] mt-[31px] w-[100%] xl:mt-[20px]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:text-fs12">{`Full Name`}</Text>
                  <Input
                    className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border border-bluegray_100 border-solid lg:mt-[9px] mt-[16px] placeholder:bg-transparent placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[10px]"
                    name="Full Name"
                    placeholder={`Full Name`}
                  ></Input>
                </Column>
                <Column className="2xl:mt-[24px] 3xl:mt-[28px] font-poppins justify-start lg:mt-[18px] mt-[32px] w-[100%] xl:mt-[21px]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-center text-fs18 text-gray_500 xl:mr-[6px] xl:text-fs12">{`Address`}</Text>
                  <Input
                    className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border border-bluegray_100 border-solid lg:mt-[9px] mt-[16px] placeholder:bg-transparent placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[10px]"
                    name="Address"
                    placeholder={`Address`}
                  ></Input>
                </Column>
                <Column className="2xl:mt-[24px] 3xl:mt-[28px] font-poppins justify-start lg:mt-[18px] mt-[32px] w-[100%] xl:mt-[21px]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-center text-fs18 text-gray_500 xl:mr-[6px] xl:text-fs12">{`Contact`}</Text>
                  <Input
                    className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border border-bluegray_100 border-solid lg:mt-[9px] mt-[16px] placeholder:bg-transparent placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[10px]"
                    name="Contact"
                    placeholder={`Contact`}
                  ></Input>
                </Column>
                <Column className="2xl:mt-[24px] 3xl:mt-[28px] font-poppins justify-start lg:mt-[18px] mt-[32px] w-[100%] xl:mt-[21px]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-center text-fs18 text-gray_500 xl:mr-[6px] xl:text-fs12">{`City`}</Text>
                  <Input
                    className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border border-bluegray_100 border-solid lg:mt-[9px] mt-[16px] placeholder:bg-transparent placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[10px]"
                    name="City"
                    placeholder={`City`}
                  ></Input>
                </Column>
                <Row className="2xl:mt-[24px] 3xl:mt-[28px] items-center justify-between lg:mt-[18px] mt-[32px] px-[0] self-stretch w-[100%] xl:mt-[21px]">
                  <Column className="font-poppins justify-start w-[58%]">
                    <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-center text-fs18 text-gray_500 xl:mr-[6px] xl:text-fs12">{`State`}</Text>
                    <div className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border-bw lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px] input-wrap">
                      <Image
                        src="img_chevrondown.svg"
                        className="absolute top-[17.545px] bottom-[18.545px] right-[32px] border-bw bg-transparent lg:right-[18px] lg:inset-y-[10px] xl:top-[11px] xl:bottom-[12px] xl:right-[21px] 2xl:right-[24px] 2xl:inset-y-[13px] 3xl:top-[15px] 3xl:bottom-[16px] 3xl:right-[28px]"
                        alt="chevron-down"
                      />
                      <Button className="2xl:pl-[24px] 2xl:pr-[49px] 2xl:py-[13px] 2xl:text-fs13 3xl:pb-[16px] 3xl:pl-[28px] 3xl:pr-[59px] 3xl:pt-[15px] 3xl:text-fs16 bg-transparent border border-bluegray_100 border-solid font-normal lg:pl-[18px] lg:pr-[38px] lg:py-[10px] lg:text-fs10 pb-[18.545px] pl-[32px] pr-[66px] pt-[17.545px] text-fs18 text-gray_500 text-left w-[100%] xl:pb-[12px] xl:pl-[21px] xl:pr-[44px] xl:pt-[11px] xl:text-fs12">{`Select State`}</Button>
                    </div>
                  </Column>
                  <Column className="font-poppins justify-start mr-[1px] w-[37%]">
                    <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-center text-fs18 text-gray_500 xl:mr-[6px] xl:text-fs12">{`Zip Code`}</Text>
                    <Input
                      className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border border-bluegray_100 border-solid lg:mt-[9px] mt-[16px] placeholder:bg-transparent placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[10px]"
                      name="Zip Code"
                      placeholder={`Zip Code`}
                    ></Input>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column className="2xl:mr-[108px] 3xl:mr-[129px] font-poppins justify-start lg:mr-[84px] mr-[144px] w-[42%] xl:mr-[96px]">
              <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-medium lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_800 text-left xl:mr-[6px] xl:text-fs12">{`Payment Method`}</Text>
              <Column className="2xl:mt-[24px] 3xl:mt-[28px] items-center lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:mt-[21px]">
                <Line className="bg-bluegray_100 h-[1px] self-stretch w-[100%]" />
                <Row className="2xl:gap-[24px] 2xl:mt-[23px] 3xl:gap-[29px] 3xl:mt-[27px] font-poppins gap-[33px] grid grid-cols-3 items-center justify-between lg:gap-[19px] lg:mt-[18px] mt-[31px] self-stretch w-[100%] xl:gap-[22px] xl:mt-[20px]">
                  <Row className="border border-bluegray_100 border-solid items-center justify-center w-[100%]">
                    <Image
                      src="img_card_2.svg"
                      className="2xl:h-[31px] 2xl:mb-[23px] 2xl:ml-[31px] 2xl:mt-[24px] 2xl:w-[30px] 3xl:h-[37px] 3xl:mb-[27px] 3xl:ml-[37px] 3xl:mt-[28px] 3xl:w-[36px] h-[40px] lg:h-[24px] lg:ml-[24px] lg:my-[18px] lg:w-[23px] mb-[31px] ml-[42px] mt-[32px] object-contain w-[40px] xl:h-[27px] xl:mb-[20px] xl:ml-[28px] xl:mt-[21px] xl:w-[26px]"
                      alt="Card"
                    />
                    <Text className="2xl:mb-[27px] 2xl:ml-[12px] 2xl:mr-[31px] 2xl:mt-[29px] 2xl:text-fs13 3xl:mb-[33px] 3xl:ml-[14px] 3xl:mr-[37px] 3xl:mt-[35px] 3xl:text-fs16 font-normal lg:mb-[21px] lg:ml-[9px] lg:mr-[24px] lg:mt-[22px] lg:text-fs10 mb-[37px] ml-[16px] mr-[42px] mt-[39px] text-fs18 text-gray_800 text-left xl:mb-[24px] xl:ml-[10px] xl:mr-[28px] xl:mt-[26px] xl:text-fs12">{`Credit Card`}</Text>
                  </Row>
                  <div className="bg-transparent border-0 w-[100%] input-wrap">
                    <Image
                      src="img_transfer.svg"
                      className="absolute top-[33.545px] bottom-[32.545px] left-[33px] bg-transparent border-0 lg:top-[19px] lg:bottom-[18px] lg:left-[19px] xl:top-[22px] xl:bottom-[21px] xl:left-[22px] 2xl:top-[25px] 2xl:bottom-[24px] 2xl:left-[24px] 3xl:top-[30px] 3xl:bottom-[29px] 3xl:left-[29px]"
                      alt="transfer"
                    />
                    <Input
                      className="2xl:pb-[24px] 2xl:pl-[62px] 2xl:pt-[25px] 2xl:text-fs13 3xl:pb-[29px] 3xl:pl-[74px] 3xl:pt-[30px] 3xl:text-fs16 bg-gray_800 border border-bluegray_100 border-solid font-normal lg:pb-[18px] lg:pl-[48px] lg:pt-[19px] lg:text-fs10 pb-[32.545px] pl-[83px] placeholder:bg-transparent placeholder:text-white_A700 pt-[33.545px] text-fs18 text-left text-white_A700 w-[100%] xl:pb-[21px] xl:pl-[55px] xl:pt-[22px] xl:text-fs12"
                      name="Bank Transfer"
                      placeholder={`Bank Transfer`}
                    ></Input>
                  </div>
                  <div className="bg-transparent border-bw w-[100%] input-wrap">
                    <Image
                      src="img_paypal.svg"
                      className="absolute top-[33.545px] bottom-[32.545px] left-[64px] border-bw bg-transparent lg:top-[19px] lg:bottom-[18px] lg:left-[37px] xl:top-[22px] xl:bottom-[21px] xl:left-[42px] 2xl:top-[25px] 2xl:bottom-[24px] 2xl:left-[48px] 3xl:top-[30px] 3xl:bottom-[29px] 3xl:left-[57px]"
                      alt="paypal"
                    />
                    <Button className="2xl:pb-[24px] 2xl:pl-[85px] 2xl:pt-[25px] 2xl:text-fs13 3xl:pb-[29px] 3xl:pl-[102px] 3xl:pt-[30px] 3xl:text-fs16 bg-transparent border border-bluegray_100 border-solid font-normal lg:pb-[18px] lg:pl-[66px] lg:pt-[19px] lg:text-fs10 pb-[32.545px] pl-[114px] pt-[33.545px] text-fs18 text-gray_800 text-left w-[100%] xl:pb-[21px] xl:pl-[76px] xl:pt-[22px] xl:text-fs12">{`Paypal`}</Button>
                  </div>
                </Row>
                <Column className="2xl:mt-[24px] 3xl:mt-[28px] font-poppins justify-start lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:mt-[21px]">
                  <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:text-fs12">{`Name on Card`}</Text>
                  <Input
                    className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border border-bluegray_100 border-solid lg:mt-[9px] mt-[16px] placeholder:bg-transparent placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[10px]"
                    name="Name on Card"
                    placeholder={`Name on Card`}
                  ></Input>
                </Column>
                <Row className="2xl:mt-[24px] 3xl:mt-[28px] items-center justify-between lg:mt-[18px] mt-[32px] px-[0] self-stretch w-[100%] xl:mt-[21px]">
                  <Column className="font-poppins justify-start w-[65%]">
                    <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:text-fs12">{`Card Number`}</Text>
                    <Input
                      className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border border-bluegray_100 border-solid lg:mt-[9px] mt-[16px] placeholder:bg-transparent placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[10px]"
                      name="Card Number"
                      placeholder={`Card Number`}
                    ></Input>
                  </Column>
                  <Column className="font-poppins justify-start w-[31%]">
                    <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:text-fs12">{`CVV`}</Text>
                    <Input
                      className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border border-bluegray_100 border-solid lg:mt-[9px] mt-[16px] placeholder:bg-transparent placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[10px]"
                      name="CVV"
                      placeholder={`CVV`}
                    ></Input>
                  </Column>
                </Row>
                <Row className="2xl:gap-[24px] 2xl:mt-[24px] 3xl:gap-[28px] 3xl:mt-[28px] gap-[32px] grid grid-cols-2 items-center justify-between lg:gap-[18px] lg:mt-[18px] mt-[32px] self-stretch w-[100%] xl:gap-[21px] xl:mt-[21px]">
                  <Column className="font-poppins justify-start w-[100%]">
                    <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:text-fs12">{`Month`}</Text>
                    <div className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border-bw lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px] input-wrap">
                      <Image
                        src="img_chevrondown.svg"
                        className="absolute top-[17.545px] bottom-[18.545px] right-[32px] border-bw bg-transparent lg:right-[18px] lg:inset-y-[10px] xl:top-[11px] xl:bottom-[12px] xl:right-[21px] 2xl:right-[24px] 2xl:inset-y-[13px] 3xl:top-[15px] 3xl:bottom-[16px] 3xl:right-[28px]"
                        alt="chevron-down"
                      />
                      <Button className="2xl:pl-[24px] 2xl:pr-[49px] 2xl:py-[13px] 2xl:text-fs13 3xl:pb-[16px] 3xl:pl-[28px] 3xl:pr-[59px] 3xl:pt-[15px] 3xl:text-fs16 bg-transparent border border-bluegray_100 border-solid font-normal lg:pl-[18px] lg:pr-[38px] lg:py-[10px] lg:text-fs10 pb-[18.545px] pl-[32px] pr-[66px] pt-[17.545px] text-fs18 text-gray_500 text-left w-[100%] xl:pb-[12px] xl:pl-[21px] xl:pr-[44px] xl:pt-[11px] xl:text-fs12">{`Select Month`}</Button>
                    </div>
                  </Column>
                  <Column className="font-poppins justify-start w-[100%]">
                    <Text className="2xl:mr-[7px] 2xl:text-fs13 3xl:mr-[9px] 3xl:text-fs16 font-normal lg:mr-[5px] lg:text-fs10 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[6px] xl:text-fs12">{`Year`}</Text>
                    <div className="2xl:mt-[12px] 3xl:mt-[14px] bg-transparent border-bw lg:mt-[9px] mt-[16px] self-stretch w-[100%] xl:mt-[10px] input-wrap">
                      <Image
                        src="img_chevrondown.svg"
                        className="absolute top-[18.545px] bottom-[17.545px] right-[32px] border-bw bg-transparent lg:right-[18px] lg:inset-y-[10px] xl:top-[12px] xl:bottom-[11px] xl:right-[21px] 2xl:right-[24px] 2xl:inset-y-[13px] 3xl:top-[16px] 3xl:bottom-[15px] 3xl:right-[28px]"
                        alt="chevron-down"
                      />
                      <Button className="2xl:pl-[24px] 2xl:pr-[49px] 2xl:py-[13px] 2xl:text-fs13 3xl:pb-[15px] 3xl:pl-[28px] 3xl:pr-[59px] 3xl:pt-[16px] 3xl:text-fs16 bg-transparent border border-bluegray_100 border-solid font-normal lg:pl-[18px] lg:pr-[38px] lg:py-[10px] lg:text-fs10 pb-[17.545px] pl-[32px] pr-[66px] pt-[18.545px] text-fs18 text-gray_500 text-left w-[100%] xl:pb-[11px] xl:pl-[21px] xl:pr-[44px] xl:pt-[12px] xl:text-fs12">{`Select Year`}</Button>
                    </div>
                  </Column>
                </Row>
              </Column>
              <Column className="2xl:mt-[56px] 3xl:mt-[67px] font-poppins items-end lg:mt-[43px] mt-[75px] self-stretch w-[100%] xl:mt-[50px]">
                <Button className="2xl:ml-[7px] 2xl:px-[26px] 2xl:py-[13px] 2xl:text-fs13 3xl:ml-[9px] 3xl:px-[31px] 3xl:py-[16px] 3xl:text-fs16 bg-gray_800 border-bw font-medium lg:ml-[5px] lg:px-[20px] lg:py-[10px] lg:text-fs10 ml-[10px] px-[35px] py-[18.045px] text-center text-fs18 text-white_A700 w-[31%] xl:ml-[6px] xl:px-[23px] xl:py-[12px] xl:text-fs12">{`Checkout`}</Button>
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
      </Column>
    </Column>
  );
};

export default CheckoutPage;
