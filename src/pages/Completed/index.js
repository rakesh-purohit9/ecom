import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Line } from "components/Line";

const CompletedPage = () => {
  return (
    <Column className="bg-white_A700 justify-start ml-[auto] mr-[auto] w-[100%]">
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
      <Column className="2xl:mt-[75px] 3xl:mt-[90px] items-center lg:mt-[58px] mt-[100px] self-stretch w-[100%] xl:mt-[66px]">
        <Row className="items-center justify-start mx-[auto] w-[84%]">
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
            <Line className="2xl:mb-[19px] 2xl:ml-[42px] 2xl:mt-[21px] 3xl:mb-[23px] 3xl:ml-[50px] 3xl:mt-[25px] bg-gray_800 h-[2px] lg:mb-[15px] lg:ml-[32px] lg:mt-[16px] mb-[26px] ml-[56px] mt-[28px] w-[36%] xl:mb-[17px] xl:ml-[37px] xl:mt-[18px]" />
          </Row>
          <Row className="2xl:ml-[24px] 3xl:ml-[28px] font-poppins items-center justify-start lg:ml-[18px] ml-[32px] w-[14%] xl:ml-[21px]">
            <Column className="border-2 border-gray_800 border-solid items-center justify-start rounded-radius50 w-[26%]">
              <Text className="2xl:my-[7px] 2xl:text-fs18 3xl:my-[9px] 3xl:text-fs21 font-medium lg:my-[5px] lg:text-fs14 mx-[auto] my-[10px] text-fs24 text-gray_800 text-left xl:my-[6px] xl:text-fs16">{`3`}</Text>
            </Column>
            <Text className="2xl:ml-[18px] 2xl:my-[7px] 2xl:text-fs18 3xl:ml-[21px] 3xl:my-[9px] 3xl:text-fs21 font-medium lg:ml-[14px] lg:my-[5px] lg:text-fs14 ml-[24px] my-[10px] text-fs24 text-gray_800 text-left xl:ml-[16px] xl:my-[6px] xl:text-fs16">{`Completed`}</Text>
          </Row>
        </Row>
        <Column className="2xl:mt-[150px] 3xl:mt-[180px] font-poppins items-center justify-start lg:mt-[116px] mt-[200px] self-stretch w-[100%] xl:mt-[133px]">
          <Text className="2xl:text-fs48 3xl:text-fs57 font-bold lg:text-fs37 mx-[auto] text-fs64 text-gray_800 text-left xl:text-fs42">{`Checkout Complete!`}</Text>
          <Text className="2xl:leading-lh24 2xl:mt-[12px] 2xl:text-fs13 3xl:leading-lh28 3xl:mt-[14px] 3xl:text-fs16 font-normal leading-lh3200 lg:leading-lh18 lg:mt-[9px] lg:text-fs10 mt-[16px] mx-[auto] text-center text-fs18 text-gray_800 w-[35%] xl:leading-lh21 xl:mt-[10px] xl:text-fs12">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
          <Button className="2xl:mt-[48px] 2xl:px-[25px] 2xl:py-[13px] 2xl:text-fs13 3xl:mt-[57px] 3xl:px-[31px] 3xl:py-[16px] 3xl:text-fs16 bg-gray_800 border-bw font-medium lg:mt-[37px] lg:px-[20px] lg:py-[10px] lg:text-fs10 mt-[64px] mx-[auto] px-[34.5px] py-[18.045px] text-center text-fs18 text-white_A700 w-[13%] xl:mt-[42px] xl:px-[23px] xl:py-[12px] xl:text-fs12">{`Go Shopping Again`}</Button>
        </Column>
        <div className="2xl:mt-[150px] 3xl:mt-[180px] lg:mt-[116px] mt-[200px] self-stretch w-[100%] xl:mt-[133px]">
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
                        src="img_call_2.svg"
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
                        src="img_submit_2.svg"
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
  );
};

export default CompletedPage;
