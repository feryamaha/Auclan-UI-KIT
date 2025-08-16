import React from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";

// ------- SHOWCASE --------
export function UIKitButtonShowcase() {
  return (
    <div className="w-full h-[82.5vh] flex flex-col items-center justify-around gap-2">
      {/* Primary button */}
      <div className="w-full flex justify-around">
        <div className="h-full flex gap-2">
          <div className="flex flex-col gap-4">
            <Button variant="btnPrimary">Primary button</Button>
            <Button variant="btnPrimaryMD">Primary button</Button>
            <Button variant="btnPrimarySM">Primary button</Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button variant="btnPrimaryOFF">Primary button</Button>
            <Button variant="btnPrimaryOFFmd">Primary button</Button>
            <Button variant="btnPrimaryOFFsm">Primary button</Button>
          </div>
        </div>
        <div className="h-full flex gap-4">
          <div className="flex flex-col gap-4">
            <Button variant="btnPrimaryAddRight">
              Primary button <Icon name="IconAddBTNprimary" />
            </Button>
            <Button variant="btnPrimaryAddRightMD">
              Primary button <Icon name="IconAddBTNprimary" />
            </Button>
            <Button variant="btnPrimaryAddRightSM">
              Primary button <Icon name="IconAddBTNprimary" />
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button variant="btnPrimaryAddRightOFF">
              Primary button <Icon name="IconAddBTNprimaryOFF" />
            </Button>
            <Button variant="btnPrimaryAddRightOFFmd">
              Primary button <Icon name="IconAddBTNprimaryOFF" />
            </Button>
            <Button variant="btnPrimaryAddRightOFFsm">
              Primary button <Icon name="IconAddBTNprimaryOFF" />
            </Button>
          </div>
        </div>
        <div className="h-full flex gap-2">
          <div className="flex flex-col gap-4">
            <Button variant="btnPrimaryAddLeft">
              <Icon name="IconAddBTNprimary" />
              Primary button
            </Button>
            <Button variant="btnPrimaryAddLeftMD">
              <Icon name="IconAddBTNprimary" />
              Primary button
            </Button>
            <Button variant="btnPrimaryAddLeftSM">
              <Icon name="IconAddBTNprimary" />
              Primary button
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button variant="btnPrimaryAddLeftOFF">
              <Icon name="IconAddBTNprimaryOFF" />
              Primary button
            </Button>
            <Button variant="btnPrimaryAddLeftOFFmd">
              <Icon name="IconAddBTNprimaryOFF" />
              Primary button
            </Button>
            <Button variant="btnPrimaryAddLeftOFFsm">
              <Icon name="IconAddBTNprimaryOFF" />
              Primary button
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Button variant="btnPrimaryADD">
            <Icon name="IconAddBTNprimary" />
          </Button>
          <Button variant="btnPrimaryADDmd">
            <Icon name="IconAddBTNprimary" />
          </Button>
          <Button variant="btnPrimaryADDsm">
            <Icon name="IconAddBTNprimary" />
          </Button>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Button variant="btnPrimaryADDOFF">
            <Icon name="IconAddBTNprimaryOFF" />
          </Button>
          <Button variant="btnPrimaryADDOFFmd">
            <Icon name="IconAddBTNprimaryOFF" />
          </Button>
          <Button variant="btnPrimaryADDOFFsm">
            <Icon name="IconAddBTNprimaryOFF" />
          </Button>
        </div>
      </div>

      {/* Secondary button */}
      <div className="w-full flex justify-around">
        <div className="h-full flex gap-2">
          <div className="flex flex-col gap-4">
            <Button variant="btnSecondary">Secondary button</Button>
            <Button variant="btnSecondaryMD">Secondary button</Button>
            <Button variant="btnSecondarySM">Secondary button</Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button variant="btnSecondaryOFF">Secondary button</Button>
            <Button variant="btnSecondaryOFFmd">Secondary button</Button>
            <Button variant="btnSecondaryOFFsm">Secondary button</Button>
          </div>
        </div>
        <div className="h-full flex gap-2">
          <div className="flex flex-col gap-4">
            <Button variant="btnSecondaryAddRight">
              Secondary button <Icon name="IconAddBTNsecondary" />
            </Button>
            <Button variant="btnSecondaryAddRightMD">
              Secondary button <Icon name="IconAddBTNsecondary" />
            </Button>
            <Button variant="btnSecondaryAddRightSM">
              Secondary button <Icon name="IconAddBTNsecondary" />
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button variant="btnSecondaryAddRightOFF">
              Secondary button <Icon name="IconAddBTNsecondaryOFF" />
            </Button>
            <Button variant="btnSecondaryAddRightOFFmd">
              Secondary button <Icon name="IconAddBTNsecondaryOFF" />
            </Button>
            <Button variant="btnSecondaryAddRightOFFsm">
              Secondary button <Icon name="IconAddBTNsecondaryOFF" />
            </Button>
          </div>
        </div>

        <div className="h-full flex gap-4">
          <div className="flex flex-col gap-4">
            <Button variant="btnSecondaryAddLeft">
              <Icon name="IconAddBTNsecondary" /> Secondary button
            </Button>
            <Button variant="btnSecondaryAddLeftMD">
              <Icon name="IconAddBTNsecondary" /> Secondary button
            </Button>
            <Button variant="btnSecondaryAddLeftSM">
              <Icon name="IconAddBTNsecondary" /> Secondary button
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button variant="btnSecondaryAddLeftOFF">
              <Icon name="IconAddBTNsecondaryOFF" /> Secondary button
            </Button>
            <Button variant="btnSecondaryAddLeftOFFmd">
              <Icon name="IconAddBTNsecondaryOFF" /> Secondary button
            </Button>
            <Button variant="btnSecondaryAddLeftOFFsm">
              <Icon name="IconAddBTNsecondaryOFF" /> Secondary button
            </Button>
          </div>
        </div>
        {/* Estamos aqui */}
        <div className="flex flex-col gap-4 items-center">
          <Button variant="btnSecondaryADD">
            <Icon name="IconAddBTNsecondary" />
          </Button>
          <Button variant="btnSecondaryADDmd">
            <Icon name="IconAddBTNsecondary" />
          </Button>
          <Button variant="btnSecondaryADDsm">
            <Icon name="IconAddBTNsecondary" />
          </Button>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Button variant="btnSecondaryADDOFF">
            <Icon name="IconAddBTNsecondaryOFF" />
          </Button>
          <Button variant="btnSecondaryADDOFFmd">
            <Icon name="IconAddBTNsecondaryOFF" />
          </Button>
          <Button variant="btnSecondaryADDOFFsm">
            <Icon name="IconAddBTNsecondaryOFF" />
          </Button>
        </div>
      </div>
      {/* Tertiary button */}
      <div className="w-full flex justify-around">
        <div className="h-full flex gap-16">
          <div className="flex flex-col gap-8 items-center">
            <Button variant="btnTertiary">Tertiary button </Button>
            <Button variant="btnTertiary">Tertiary button </Button>
            <Button variant="btnTertiary">Tertiary button </Button>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <Button variant="btnTertiaryOFF">Tertiary button </Button>
            <Button variant="btnTertiaryOFF">Tertiary button </Button>
            <Button variant="btnTertiaryOFF">Tertiary button </Button>
          </div>
        </div>
        <div className="h-full flex gap-8">
          <div className="flex flex-col gap-8">
            <Button variant="btnTertiary">
              Tertiary button <Icon name="IconAddBTNsecondary" />
            </Button>
            <Button variant="btnTertiary">
              Tertiary button <Icon name="IconAddBTNsecondary" />
            </Button>
            <Button variant="btnTertiary">
              Tertiary button <Icon name="IconAddBTNsecondary" />
            </Button>
          </div>
          <div className="flex flex-col gap-8">
            <Button variant="btnTertiaryOFF">
              Tertiary button <Icon name="IconAddBTNsecondaryOFF" />
            </Button>
            <Button variant="btnTertiaryOFF">
              Tertiary button <Icon name="IconAddBTNsecondaryOFF" />
            </Button>
            <Button variant="btnTertiaryOFF">
              Tertiary button <Icon name="IconAddBTNsecondaryOFF" />
            </Button>
          </div>
        </div>
        <div className="h-full flex gap-8">
          <div className="flex flex-col gap-8">
            <Button variant="btnTertiary">
              <Icon name="IconAddBTNsecondary" /> Tertiary button
            </Button>
            <Button variant="btnTertiary">
              <Icon name="IconAddBTNsecondary" /> Tertiary button
            </Button>
            <Button variant="btnTertiary">
              <Icon name="IconAddBTNsecondary" /> Tertiary button
            </Button>
          </div>
          <div className="flex flex-col gap-8">
            <Button variant="btnTertiaryOFF">
              <Icon name="IconAddBTNsecondaryOFF" /> Tertiary button
            </Button>
            <Button variant="btnTertiaryOFF">
              <Icon name="IconAddBTNsecondaryOFF" /> Tertiary button
            </Button>
            <Button variant="btnTertiaryOFF">
              <Icon name="IconAddBTNsecondaryOFF" /> Tertiary button
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <Icon name="IconAddBTNsecondary" />
          <Icon name="IconAddBTNsecondary" />
          <Icon name="IconAddBTNsecondary" />
        </div>
        <div className="flex flex-col items-center gap-8">
          <Icon name="IconAddBTNsecondaryOFF" />
          <Icon name="IconAddBTNsecondaryOFF" />
          <Icon name="IconAddBTNsecondaryOFF" />
        </div>
        <div className="flex flex-col items-center gap-3">
          <Icon name="IconAddHoverTertiaryLG" />
          <Icon name="IconAddHoverTertiaryMD" />
          <Icon name="IconAddHoverTertiarySM" />
        </div>
      </div>
    </div>
  );
}
