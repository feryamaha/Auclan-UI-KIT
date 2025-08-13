// src/components/ui/Button/SectionButton.tsx

import { Icon } from "@/scripts/Icon";
import { Button } from "./Button";

export function SectionButton() {
  return (
    <div className="w-full h-[82.5vh] flex flex-col items-center justify-around gap-2">
      {/* primary button */}
      <div className="w-full items-center flex justify-around">
        <div className="h-full justify-between flex gap-4">
          <div className="w-max h-max flex flex-col gap-4 ">
            <Button
              variant="btnPrimary"
              className="hover:bg-red700 w-full pBTN"
            >
              Primary button
            </Button>
            <Button
              variant="btnPrimaryMD"
              className="hover:bg-red700 w-full pBTN"
            >
              Primary button
            </Button>
            <Button
              variant="btnPrimarySM"
              className="hover:bg-red700 w-full pBTN"
            >
              Primary button
            </Button>
          </div>
          {/* add buttons disabled */}
          <div className="w-max h-max flex flex-col gap-4 ">
            <Button
              variant="btnPrimaryOFF"
              className="w-full pBTN cursor-not-allowed"
            >
              Primary button
            </Button>
            <Button
              variant="btnPrimaryOFFmd"
              className="w-full pBTN cursor-not-allowed"
            >
              Primary button
            </Button>
            <Button
              variant="btnPrimaryOFFsm"
              className="w-full pBTN cursor-not-allowed"
            >
              Primary button
            </Button>
          </div>
        </div>

        <div className="h-full justify-evenly flex gap-4">
          <div className="w-max h-max flex flex-col gap-4 ">
            <Button
              variant="btnPrimary"
              className="hover:bg-red700 w-full pBTNAddRight"
            >
              Primary button
              <Icon name="IconAddBTNprimary" />
            </Button>
            <Button
              variant="btnPrimaryMD"
              className="hover:bg-red700 w-full pBTNAddRight"
            >
              Primary button
              <Icon name="IconAddBTNprimary" />
            </Button>
            <Button
              variant="btnPrimarySM"
              className="hover:bg-red700 w-full pBTNAddRight"
            >
              Primary button
              <Icon name="IconAddBTNprimary" />
            </Button>
          </div>

          <div className="w-max h-max flex flex-col gap-4 ">
            <Button
              variant="btnPrimaryOFF"
              className="w-full pBTNAddRight cursor-not-allowed"
            >
              Primary button
              <Icon name="IconAddBTNprimaryOFF" />
            </Button>
            <Button
              variant="btnPrimaryOFFmd"
              className="w-full pBTNAddRight cursor-not-allowed"
            >
              Primary button
              <Icon name="IconAddBTNprimaryOFF" />
            </Button>
            <Button
              variant="btnPrimaryOFFsm"
              className="w-full pBTNAddRight cursor-not-allowed"
            >
              Primary button
              <Icon name="IconAddBTNprimaryOFF" />
            </Button>
          </div>
        </div>

        <div className="h-full justify-evenly flex gap-4">
          {/* add buttons left */}
          <div className="w-max h-max flex flex-col gap-4 ">
            <Button
              variant="btnPrimary"
              className="hover:bg-red700 w-max pBTNAddLeft"
            >
              <Icon name="IconAddBTNprimary" />
              Primary button
            </Button>
            <Button
              variant="btnPrimaryMD"
              className="hover:bg-red700 w-max pBTNAddLeft"
            >
              <Icon name="IconAddBTNprimary" />
              Primary button
            </Button>
            <Button
              variant="btnPrimarySM"
              className="hover:bg-red700 w-max pBTNAddLeft"
            >
              <Icon name="IconAddBTNprimary" />
              Primary button
            </Button>
          </div>
          <div className="w-max h-max flex flex-col gap-4 ">
            <Button
              variant="btnPrimaryOFF"
              className="w-max pBTNAddLeft cursor-not-allowed"
            >
              <Icon name="IconAddBTNprimaryOFF" />
              Primary button
            </Button>
            <Button
              variant="btnPrimaryOFFmd"
              className="w-max pBTNAddLeft cursor-not-allowed"
            >
              <Icon name="IconAddBTNprimaryOFF" />
              Primary button
            </Button>
            <Button
              variant="btnPrimaryOFFsm"
              className="w-max pBTNAddLeft cursor-not-allowed"
            >
              <Icon name="IconAddBTNprimaryOFF" />
              Primary button
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-full justify-evenly flex gap-4">
            <Button
              variant="btnPrimaryADD"
              className="bg-red500 hover:bg-red700 w-max"
            >
              <Icon name="IconAddBTNprimary" />
            </Button>
          </div>
          <div className="h-full justify-evenly flex gap-4">
            <Button
              variant="btnPrimaryADDmd"
              className="bg-red500 hover:bg-red700 w-max"
            >
              <Icon name="IconAddBTNprimary" />
            </Button>
          </div>
          <div className="h-full justify-evenly flex gap-4">
            <Button
              variant="btnPrimaryADDsm"
              className="bg-red500 hover:bg-red700 w-max"
            >
              <Icon name="IconAddBTNprimary" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-full justify-evenly flex gap-4">
            <Button
              variant="btnPrimaryADD"
              className="bg-gray200 w-max cursor-not-allowed"
            >
              <Icon name="IconAddBTNprimaryOFF" />
            </Button>
          </div>
          <div className="h-full justify-evenly flex gap-4">
            <Button
              variant="btnPrimaryADDmd"
              className="bg-gray200 w-max cursor-not-allowed"
            >
              <Icon name="IconAddBTNprimaryOFF" />
            </Button>
          </div>
          <div className="h-full justify-evenly flex gap-4">
            <Button
              variant="btnPrimaryADDsm"
              className="bg-gray200 w-max cursor-not-allowed"
            >
              <Icon name="IconAddBTNprimaryOFF" />
            </Button>
          </div>
        </div>
      </div>
      {/* secondary button */}
      <div className="w-full items-center flex justify-around">
        <div className="h-full justify-between flex gap-2">
          <div className="w-max h-max flex flex-col gap-2 ">
            <Button
              variant="btnSecondary"
              className="hover:bg-gray50 w-full pBTN"
            >
              Secondary button
            </Button>
            <Button
              variant="btnSecondaryMD"
              className="hover:bg-gray50 w-full pBTN"
            >
              Secondary button
            </Button>
            <Button
              variant="btnSecondarySM"
              className="hover:bg-gray50 w-full pBTN"
            >
              Secondary button
            </Button>
          </div>
          <div className="w-max h-max flex flex-col gap-2 ">
            <Button
              variant="btnSecondaryOFF"
              className="w-full pBTN cursor-not-allowed"
            >
              Secondary button
            </Button>
            <Button
              variant="btnSecondaryOFFmd"
              className="w-full pBTN cursor-not-allowed"
            >
              Secondary button
            </Button>
            <Button
              variant="btnSecondaryOFFsm"
              className="w-full pBTN cursor-not-allowed"
            >
              Secondary button
            </Button>
          </div>
        </div>
        <div className="h-full justify-between flex gap-2">
          <div className="w-max h-max flex flex-col gap-2">
            <Button
              variant="btnSecondary"
              className="hover:bg-gray50 w-full pBTNAddRight"
            >
              Secondary button
              <Icon name="IconAddBTNsecondary" />
            </Button>
            <Button
              variant="btnSecondaryMD"
              className="hover:bg-gray50 w-full pBTNAddRight"
            >
              Secondary button
              <Icon name="IconAddBTNsecondary" />
            </Button>
            <Button
              variant="btnSecondarySM"
              className="hover:bg-gray50 w-full pBTNAddRight"
            >
              Secondary button
              <Icon name="IconAddBTNsecondary" />
            </Button>
          </div>
          <div className="w-max h-max flex flex-col gap-2">
            <Button
              variant="btnSecondaryOFF"
              className="w-full pBTNAddRight cursor-not-allowed"
            >
              Secondary button
              <Icon name="IconAddBTNsecondaryOFF" />
            </Button>
            <Button
              variant="btnSecondaryOFFmd"
              className="w-full pBTNAddRight cursor-not-allowed"
            >
              Secondary button
              <Icon name="IconAddBTNsecondaryOFF" />
            </Button>
            <Button
              variant="btnSecondaryOFFsm"
              className="w-full pBTNAddRight cursor-not-allowed"
            >
              Secondary button
              <Icon name="IconAddBTNsecondaryOFF" />
            </Button>
          </div>
        </div>
        <div className="h-full justify-between flex gap-2">
          <div className="w-max h-max flex flex-col gap-2 ">
            <Button
              variant="btnSecondary"
              className="hover:bg-gray50 w-max pBTNAddLeft"
            >
              <Icon name="IconAddBTNsecondary" />
              Secondary button
            </Button>
            <Button
              variant="btnSecondaryMD"
              className="hover:bg-gray50 w-max pBTNAddLeft"
            >
              <Icon name="IconAddBTNsecondary" />
              Secondary button
            </Button>
            <Button
              variant="btnSecondarySM"
              className="hover:bg-gray50 w-max pBTNAddLeft"
            >
              <Icon name="IconAddBTNsecondary" />
              Secondary button
            </Button>
          </div>
          <div className="w-max h-max flex flex-col gap-2 ">
            <Button
              variant="btnSecondaryOFF"
              className="w-max pBTNAddLeft cursor-not-allowed"
            >
              <Icon name="IconAddBTNsecondaryOFF" />
              Secondary button
            </Button>
            <Button
              variant="btnSecondaryOFFmd"
              className="w-max pBTNAddLeft cursor-not-allowed"
            >
              <Icon name="IconAddBTNsecondaryOFF" />
              Secondary button
            </Button>
            <Button
              variant="btnSecondaryOFFsm"
              className="w-max pBTNAddLeft cursor-not-allowed"
            >
              <Icon name="IconAddBTNsecondaryOFF" />
              Secondary button
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button
            variant="btnPrimaryADD"
            className="bg-white border hover:bg-gray100 w-max"
          >
            <Icon name="IconAddBTNprimaryOFF" />
          </Button>
          <Button
            variant="btnPrimaryADDmd"
            className="bg-white border hover:bg-gray100 w-max"
          >
            <Icon name="IconAddBTNprimaryOFF" />
          </Button>
          <Button
            variant="btnPrimaryADDsm"
            className="bg-white border hover:bg-gray100 w-max"
          >
            <Icon name="IconAddBTNprimaryOFF" />
          </Button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button
            variant="btnAddOFF"
            className="bg-white border w-max cursor-not-allowed"
          >
            <Icon name="IconAddBTNsecondaryOFF" />
          </Button>
          <Button
            variant="btnAddOFFmd"
            className="bg-white border w-max cursor-not-allowed"
          >
            <Icon name="IconAddBTNsecondaryOFF" />
          </Button>
          <Button
            variant="btnAddOFFsm"
            className="bg-white border w-max cursor-not-allowed"
          >
            <Icon name="IconAddBTNsecondaryOFF" />
          </Button>
        </div>
      </div>
      {/* tertiary button */}
      <div className="w-full items-center flex justify-around">
        <div className="h-full justify-between flex gap-16">
          <div className="w-max h-max flex flex-col gap-8 items-center">
            <Button variant="btnTertiary" className="hover:underline w-full">
              Tertiary button
            </Button>
            <Button variant="btnTertiary" className="hover:underline w-full">
              Tertiary button
            </Button>
            <Button variant="btnTertiary" className="hover:underline w-full">
              Tertiary button
            </Button>
          </div>
          <div className="w-max h-max flex flex-col gap-8 items-center">
            <Button
              variant="btnTertiaryOFF"
              className="w-full cursor-not-allowed"
            >
              Tertiary button
            </Button>
            <Button
              variant="btnTertiaryOFF"
              className="w-full cursor-not-allowed"
            >
              Tertiary button
            </Button>
            <Button
              variant="btnTertiaryOFF"
              className="w-full cursor-not-allowed"
            >
              Tertiary button
            </Button>
          </div>
        </div>
        <div className="h-full justify-between flex gap-16">
          <div className="w-max h-max flex flex-col gap-8 ">
            <Button variant="btnTertiary" className="hover:underline w-full">
              Tertiary button
              <Icon name="IconAddBTNsecondary" />
            </Button>
            <Button variant="btnTertiary" className="hover:underline w-full">
              Tertiary button
              <Icon name="IconAddBTNsecondary" />
            </Button>
            <Button variant="btnTertiary" className="hover:underline w-full">
              Tertiary button
              <Icon name="IconAddBTNsecondary" />
            </Button>
          </div>
          <div className="w-max h-max flex flex-col gap-8 ">
            <Button
              variant="btnTertiaryOFF"
              className="w-full cursor-not-allowed"
            >
              Tertiary button
              <Icon name="IconAddBTNsecondaryOFF" />
            </Button>
            <Button
              variant="btnTertiaryOFF"
              className="w-full cursor-not-allowed"
            >
              Tertiary button
              <Icon name="IconAddBTNsecondaryOFF" />
            </Button>
            <Button
              variant="btnTertiaryOFF"
              className="w-full cursor-not-allowed"
            >
              Tertiary button
              <Icon name="IconAddBTNsecondaryOFF" />
            </Button>
          </div>
        </div>
        <div className="h-full justify-between flex gap-16">
          <div className="w-max h-max flex flex-col gap-8 ">
            <Button variant="btnTertiary" className="hover:underline w-full">
              <Icon name="IconAddBTNsecondary" />
              Tertiary button
            </Button>
            <Button variant="btnTertiary" className="hover:underline w-full">
              <Icon name="IconAddBTNsecondary" />
              Tertiary button
            </Button>
            <Button variant="btnTertiary" className="hover:underline w-full">
              <Icon name="IconAddBTNsecondary" />
              Tertiary button
            </Button>
          </div>
          <div className="w-max h-max flex flex-col gap-8 ">
            <Button
              variant="btnTertiaryOFF"
              className="w-full cursor-not-allowed"
            >
              <Icon name="IconAddBTNsecondaryOFF" />
              Tertiary button
            </Button>
            <Button
              variant="btnTertiaryOFF"
              className="w-full cursor-not-allowed"
            >
              <Icon name="IconAddBTNsecondaryOFF" />
              Tertiary button
            </Button>
            <Button
              variant="btnTertiaryOFF"
              className="w-full cursor-not-allowed"
            >
              <Icon name="IconAddBTNsecondaryOFF" />
              Tertiary button
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button
            variant="btnAddDefault"
            className="bg-white hover:bg-gray50 hover:border hover:rounded-md w-max"
          >
            <Icon name="IconAddBTNsecondary" />
          </Button>
          <Button
            variant="btnAddDefaultMD"
            className="bg-white hover:bg-gray50 hover:border hover:rounded-md w-max"
          >
            <Icon name="IconAddBTNsecondary" />
          </Button>
          <Button
            variant="btnAddDefaultSM"
            className="bg-white hover:bg-gray50 hover:border hover:rounded-md w-max"
          >
            <Icon name="IconAddBTNsecondary" />
          </Button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button
            variant="btnAddDefaultOFF"
            className="w-max cursor-not-allowed"
          >
            <Icon name="IconAddBTNsecondaryOFF" />
          </Button>
          <Button
            variant="btnAddDefaultOFFmd"
            className="w-max cursor-not-allowed"
          >
            <Icon name="IconAddBTNsecondaryOFF" />
          </Button>
          <Button
            variant="btnAddDefaultOFFsm"
            className="w-max cursor-not-allowed"
          >
            <Icon name="IconAddBTNsecondaryOFF" />
          </Button>
        </div>
      </div>
    </div>
  );
}
