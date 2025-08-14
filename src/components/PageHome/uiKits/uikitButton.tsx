import React from 'react'
import { Icon } from '@/scripts/Icon'
import { Button } from '@/components/ui/Button'

// Define aqui o tipo das props, igual ao seu Button
type ButtonVariant =
  | 'btnPrimary'
  | 'btnPrimaryMD'
  | 'btnPrimarySM'
  | 'btnPrimaryOFF'
  | 'btnPrimaryOFFmd'
  | 'btnPrimaryOFFsm'
  | 'btnPrimaryADD'
  | 'btnPrimaryADDmd'
  | 'btnPrimaryADDsm'
  | 'btnAddOFF'
  | 'btnAddOFFmd'
  | 'btnAddOFFsm'
  | 'btnAddDefault'
  | 'btnAddDefaultMD'
  | 'btnAddDefaultSM'
  | 'btnAddDefaultOFF'
  | 'btnAddDefaultOFFmd'
  | 'btnAddDefaultOFFsm'
  | 'btnSecondary'
  | 'btnSecondaryMD'
  | 'btnSecondarySM'
  | 'btnSecondaryOFF'
  | 'btnSecondaryOFFmd'
  | 'btnSecondaryOFFsm'
  | 'btnTertiary'
  | 'btnTertiaryOFF'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  className?: string
  onClick?: () => void
  target?: string
  variant?: ButtonVariant
}

// ------- PRIMARY BUTTONS --------
export const ButtonPrimary = (props: ButtonProps) => (
  <Button
    variant="btnPrimary"
    className="hover:bg-red700 w-full pBTN"
    {...props}
  />
)
export const ButtonPrimaryMD = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryMD"
    className="hover:bg-red700 w-full pBTN"
    {...props}
  />
)
export const ButtonPrimarySM = (props: ButtonProps) => (
  <Button
    variant="btnPrimarySM"
    className="hover:bg-red700 w-full pBTN"
    {...props}
  />
)

export const ButtonPrimaryOFF = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryOFF"
    className="w-full pBTN cursor-not-allowed"
    {...props}
  />
)
export const ButtonPrimaryOFFMD = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryOFFmd"
    className="w-full pBTN cursor-not-allowed"
    {...props}
  />
)
export const ButtonPrimaryOFFSM = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryOFFsm"
    className="w-full pBTN cursor-not-allowed"
    {...props}
  />
)

export const ButtonPrimaryAddRight = (props: ButtonProps) => (
  <Button
    variant="btnPrimary"
    className="hover:bg-red700 w-full pBTNAddRight"
    {...props}
  >
    <Icon name="IconAddBTNprimary" />
    {props.children}
  </Button>
)
export const ButtonPrimaryMDAddRight = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryMD"
    className="hover:bg-red700 w-full pBTNAddRight"
    {...props}
  >
    <Icon name="IconAddBTNprimary" />
    {props.children}
  </Button>
)
export const ButtonPrimarySMAddRight = (props: ButtonProps) => (
  <Button
    variant="btnPrimarySM"
    className="hover:bg-red700 w-full pBTNAddRight"
    {...props}
  >
    <Icon name="IconAddBTNprimary" />
    {props.children}
  </Button>
)

export const ButtonPrimaryOFFAddRight = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryOFF"
    className="w-full pBTNAddRight cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNprimaryOFF" />
    {props.children}
  </Button>
)
export const ButtonPrimaryOFFMDAddRight = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryOFFmd"
    className="w-full pBTNAddRight cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNprimaryOFF" />
    {props.children}
  </Button>
)
export const ButtonPrimaryOFFSMAddRight = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryOFFsm"
    className="w-full pBTNAddRight cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNprimaryOFF" />
    {props.children}
  </Button>
)

export const ButtonPrimaryAddLeft = (props: ButtonProps) => (
  <Button
    variant="btnPrimary"
    className="hover:bg-red700 w-max pBTNAddLeft"
    {...props}
  >
    <Icon name="IconAddBTNprimary" />
    {props.children}
  </Button>
)
export const ButtonPrimaryMDAddLeft = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryMD"
    className="hover:bg-red700 w-max pBTNAddLeft"
    {...props}
  >
    <Icon name="IconAddBTNprimary" />
    {props.children}
  </Button>
)
export const ButtonPrimarySMAddLeft = (props: ButtonProps) => (
  <Button
    variant="btnPrimarySM"
    className="hover:bg-red700 w-max pBTNAddLeft"
    {...props}
  >
    <Icon name="IconAddBTNprimary" />
    {props.children}
  </Button>
)

export const ButtonPrimaryOFFAddLeft = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryOFF"
    className="w-max pBTNAddLeft cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNprimaryOFF" />
    {props.children}
  </Button>
)
export const ButtonPrimaryOFFMDAddLeft = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryOFFmd"
    className="w-max pBTNAddLeft cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNprimaryOFF" />
    {props.children}
  </Button>
)
export const ButtonPrimaryOFFSMAddLeft = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryOFFsm"
    className="w-max pBTNAddLeft cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNprimaryOFF" />
    {props.children}
  </Button>
)

export const ButtonPrimaryADD = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryADD"
    className="bg-red600 hover:bg-red700 w-max"
    {...props}
  >
    <Icon name="IconAddBTNprimary" />
  </Button>
)
export const ButtonPrimaryADDMD = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryADDmd"
    className="bg-red600 hover:bg-red700 w-max"
    {...props}
  >
    <Icon name="IconAddBTNprimary" />
  </Button>
)
export const ButtonPrimaryADDSM = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryADDsm"
    className="bg-red600 hover:bg-red700 w-max"
    {...props}
  >
    <Icon name="IconAddBTNprimary" />
  </Button>
)

export const ButtonPrimaryADDOFF = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryADD"
    className="bg-gray200 w-max cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNprimaryOFF" />
    {props.children}
  </Button>
)
export const ButtonPrimaryADDMDOFF = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryADDmd"
    className="bg-gray200 w-max cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNprimaryOFF" />
    {props.children}
  </Button>
)
export const ButtonPrimaryADDSMOFF = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryADDsm"
    className="bg-gray200 w-max cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNprimaryOFF" />
    {props.children}
  </Button>
)

// ------- SECONDARY BUTTONS --------
export const ButtonSecondary = (props: ButtonProps) => (
  <Button
    variant="btnSecondary"
    className="hover:bg-gray50 w-full pBTN"
    {...props}
  />
)
export const ButtonSecondaryMD = (props: ButtonProps) => (
  <Button
    variant="btnSecondaryMD"
    className="hover:bg-gray50 w-full pBTN"
    {...props}
  />
)
export const ButtonSecondarySM = (props: ButtonProps) => (
  <Button
    variant="btnSecondarySM"
    className="hover:bg-gray50 w-full pBTN"
    {...props}
  />
)
export const ButtonSecondaryOFF = (props: ButtonProps) => (
  <Button
    variant="btnSecondaryOFF"
    className="w-full pBTN cursor-not-allowed"
    {...props}
  />
)
export const ButtonSecondaryOFFMD = (props: ButtonProps) => (
  <Button
    variant="btnSecondaryOFFmd"
    className="w-full pBTN cursor-not-allowed"
    {...props}
  />
)
export const ButtonSecondaryOFFSM = (props: ButtonProps) => (
  <Button
    variant="btnSecondaryOFFsm"
    className="w-full pBTN cursor-not-allowed"
    {...props}
  />
)

export const ButtonSecondaryAddRight = (props: ButtonProps) => (
  <Button
    variant="btnSecondary"
    className="hover:bg-gray50 w-full pBTNAddRight"
    {...props}
  >
    <Icon name="IconAddBTNsecondary" />
    {props.children}
  </Button>
)
export const ButtonSecondaryMDAddRight = (props: ButtonProps) => (
  <Button
    variant="btnSecondaryMD"
    className="hover:bg-gray50 w-full pBTNAddRight"
    {...props}
  >
    <Icon name="IconAddBTNsecondary" />
    {props.children}
  </Button>
)
export const ButtonSecondarySMAddRight = (props: ButtonProps) => (
  <Button
    variant="btnSecondarySM"
    className="hover:bg-gray50 w-full pBTNAddRight"
    {...props}
  >
    <Icon name="IconAddBTNsecondary" />
    {props.children}
  </Button>
)

export const ButtonSecondaryOFFAddRight = (props: ButtonProps) => (
  <Button
    variant="btnSecondaryOFF"
    className="w-full pBTNAddRight cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNsecondaryOFF" />
    {props.children}
  </Button>
)
export const ButtonSecondaryOFFMDAddRight = (props: ButtonProps) => (
  <Button
    variant="btnSecondaryOFFmd"
    className="w-full pBTNAddRight cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNsecondaryOFF" />
    {props.children}
  </Button>
)
export const ButtonSecondaryOFFSMAddRight = (props: ButtonProps) => (
  <Button
    variant="btnSecondaryOFFsm"
    className="w-full pBTNAddRight cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNsecondaryOFF" />
    {props.children}
  </Button>
)

// AddLeft
export const ButtonSecondaryAddLeft = (props: ButtonProps) => (
  <Button
    variant="btnSecondary"
    className="hover:bg-gray50 w-max pBTNAddLeft"
    {...props}
  >
    <Icon name="IconAddBTNsecondary" />
    {props.children}
  </Button>
)
export const ButtonSecondaryMDAddLeft = (props: ButtonProps) => (
  <Button
    variant="btnSecondaryMD"
    className="hover:bg-gray50 w-max pBTNAddLeft"
    {...props}
  >
    <Icon name="IconAddBTNsecondary" />
    {props.children}
  </Button>
)
export const ButtonSecondarySMAddLeft = (props: ButtonProps) => (
  <Button
    variant="btnSecondarySM"
    className="hover:bg-gray50 w-max pBTNAddLeft"
    {...props}
  >
    <Icon name="IconAddBTNsecondary" />
    {props.children}
  </Button>
)
export const ButtonSecondaryOFFAddLeft = (props: ButtonProps) => (
  <Button
    variant="btnSecondaryOFF"
    className="w-max pBTNAddLeft cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNsecondaryOFF" />
    {props.children}
  </Button>
)
export const ButtonSecondaryOFFMDAddLeft = (props: ButtonProps) => (
  <Button
    variant="btnSecondaryOFFmd"
    className="w-max pBTNAddLeft cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNsecondaryOFF" />
    {props.children}
  </Button>
)
export const ButtonSecondaryOFFSMAddLeft = (props: ButtonProps) => (
  <Button
    variant="btnSecondaryOFFsm"
    className="w-max pBTNAddLeft cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNsecondaryOFF" />
    {props.children}
  </Button>
)

// Add-only icon branco
export const ButtonPrimaryADDWhite = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryADD"
    className="bg-white border hover:bg-gray50 w-max"
    {...props}
  >
    <Icon name="IconAddBTNsecondary" />
    {props.children}
  </Button>
)
export const ButtonPrimaryADDWhiteMD = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryADDmd"
    className="bg-white border hover:bg-gray50 w-max"
    {...props}
  >
    <Icon name="IconAddBTNsecondary" />
    {props.children}
  </Button>
)
export const ButtonPrimaryADDWhiteSM = (props: ButtonProps) => (
  <Button
    variant="btnPrimaryADDsm"
    className="bg-white border hover:bg-gray50 w-max"
    {...props}
  >
    <Icon name="IconAddBTNsecondary" />
    {props.children}
  </Button>
)

// Add-only icon OFF
export const ButtonAddOFF = (props: ButtonProps) => (
  <Button
    variant="btnAddOFF"
    className="bg-white border w-max cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNsecondaryOFF" />
    {props.children}
  </Button>
)
export const ButtonAddOFFMD = (props: ButtonProps) => (
  <Button
    variant="btnAddOFFmd"
    className="bg-white border w-max cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNsecondaryOFF" />
    {props.children}
  </Button>
)
export const ButtonAddOFFSM = (props: ButtonProps) => (
  <Button
    variant="btnAddOFFsm"
    className="bg-white border w-max cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNsecondaryOFF" />
    {props.children}
  </Button>
)

// ------- TERTIARY BUTTONS --------
export const ButtonTertiary = (props: ButtonProps) => (
  <Button variant="btnTertiary" className="hover:underline w-full" {...props} />
)
export const ButtonTertiaryOFF = (props: ButtonProps) => (
  <Button
    variant="btnTertiaryOFF"
    className="w-full cursor-not-allowed"
    {...props}
  />
)

// Right icon
export const ButtonTertiaryAddRight = (props: ButtonProps) => (
  <Button variant="btnTertiary" className="hover:underline w-full" {...props}>
    <Icon name="IconAddBTNsecondary" />
    {props.children}
  </Button>
)
export const ButtonTertiaryOFFAddRight = (props: ButtonProps) => (
  <Button
    variant="btnTertiaryOFF"
    className="w-full cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNsecondaryOFF" />
    {props.children}
  </Button>
)

// Left icon
export const ButtonTertiaryAddLeft = (props: ButtonProps) => (
  <Button variant="btnTertiary" className="hover:underline w-full" {...props}>
    <Icon name="IconAddBTNsecondary" />
    {props.children}
  </Button>
)
export const ButtonTertiaryOFFAddLeft = (props: ButtonProps) => (
  <Button
    variant="btnTertiaryOFF"
    className="w-full cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNsecondaryOFF" />
    {props.children}
  </Button>
)

// Add-only icon tertiary
export const ButtonAddDefault = (props: ButtonProps) => (
  <Button
    variant="btnAddDefault"
    className="bg-white hover:bg-gray50 hover:border hover:rounded-md w-max"
    {...props}
  >
    <Icon name="IconAddBTNsecondary" />
    {props.children}
  </Button>
)
export const ButtonAddDefaultMD = (props: ButtonProps) => (
  <Button
    variant="btnAddDefaultMD"
    className="bg-white hover:bg-gray50 hover:border hover:rounded-md w-max"
    {...props}
  >
    <Icon name="IconAddBTNsecondary" />
    {props.children}
  </Button>
)
export const ButtonAddDefaultSM = (props: ButtonProps) => (
  <Button
    variant="btnAddDefaultSM"
    className="bg-white hover:bg-gray50 hover:border hover:rounded-md w-max"
    {...props}
  >
    <Icon name="IconAddBTNsecondary" />
    {props.children}
  </Button>
)

// Add-only icon tertiary OFF
export const ButtonAddDefaultOFF = (props: ButtonProps) => (
  <Button
    variant="btnAddDefaultOFF"
    className="w-max cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNsecondaryOFF" />
    {props.children}
  </Button>
)
export const ButtonAddDefaultOFFMD = (props: ButtonProps) => (
  <Button
    variant="btnAddDefaultOFFmd"
    className="w-max cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNsecondaryOFF" />
    {props.children}
  </Button>
)
export const ButtonAddDefaultOFFSM = (props: ButtonProps) => (
  <Button
    variant="btnAddDefaultOFFsm"
    className="w-max cursor-not-allowed"
    {...props}
  >
    <Icon name="IconAddBTNsecondaryOFF" />
    {props.children}
  </Button>
)

// ------- SHOWCASE --------
export function UIKitButtonShowcase() {
  return (
    <div className="w-full h-[82.5vh] flex flex-col items-center justify-around gap-2">
      <div className="w-full flex justify-around">
        <div className="h-full flex gap-4">
          <div className="flex flex-col gap-4">
            <ButtonPrimary>Primary button</ButtonPrimary>
            <ButtonPrimaryMD>Primary button</ButtonPrimaryMD>
            <ButtonPrimarySM>Primary button</ButtonPrimarySM>
          </div>
          <div className="flex flex-col gap-4">
            <ButtonPrimaryOFF>Primary button</ButtonPrimaryOFF>
            <ButtonPrimaryOFFMD>Primary button</ButtonPrimaryOFFMD>
            <ButtonPrimaryOFFSM>Primary button</ButtonPrimaryOFFSM>
          </div>
        </div>
        <div className="h-full flex gap-4">
          <div className="flex flex-col gap-4">
            <ButtonPrimaryAddRight>Primary button</ButtonPrimaryAddRight>
            <ButtonPrimaryMDAddRight>Primary button</ButtonPrimaryMDAddRight>
            <ButtonPrimarySMAddRight>Primary button</ButtonPrimarySMAddRight>
          </div>
          <div className="flex flex-col gap-4">
            <ButtonPrimaryOFFAddRight>Primary button</ButtonPrimaryOFFAddRight>
            <ButtonPrimaryOFFMDAddRight>
              Primary button
            </ButtonPrimaryOFFMDAddRight>
            <ButtonPrimaryOFFSMAddRight>
              Primary button
            </ButtonPrimaryOFFSMAddRight>
          </div>
        </div>
        <div className="h-full flex gap-4">
          <div className="flex flex-col gap-4">
            <ButtonPrimaryAddLeft>Primary button</ButtonPrimaryAddLeft>
            <ButtonPrimaryMDAddLeft>Primary button</ButtonPrimaryMDAddLeft>
            <ButtonPrimarySMAddLeft>Primary button</ButtonPrimarySMAddLeft>
          </div>
          <div className="flex flex-col gap-4">
            <ButtonPrimaryOFFAddLeft>Primary button</ButtonPrimaryOFFAddLeft>
            <ButtonPrimaryOFFMDAddLeft>
              Primary button
            </ButtonPrimaryOFFMDAddLeft>
            <ButtonPrimaryOFFSMAddLeft>
              Primary button
            </ButtonPrimaryOFFSMAddLeft>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <ButtonPrimaryADD />
          <ButtonPrimaryADDMD />
          <ButtonPrimaryADDSM />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <ButtonPrimaryADDOFF />
          <ButtonPrimaryADDMDOFF />
          <ButtonPrimaryADDSMOFF />
        </div>
      </div>
      <div className="w-full flex justify-around">
        <div className="h-full flex gap-2">
          <div className="flex flex-col gap-2">
            <ButtonSecondary>Secondary button</ButtonSecondary>
            <ButtonSecondaryMD>Secondary button</ButtonSecondaryMD>
            <ButtonSecondarySM>Secondary button</ButtonSecondarySM>
          </div>
          <div className="flex flex-col gap-2">
            <ButtonSecondaryOFF>Secondary button</ButtonSecondaryOFF>
            <ButtonSecondaryOFFMD>Secondary button</ButtonSecondaryOFFMD>
            <ButtonSecondaryOFFSM>Secondary button</ButtonSecondaryOFFSM>
          </div>
        </div>
        <div className="h-full flex gap-2">
          <div className="flex flex-col gap-2">
            <ButtonSecondaryAddRight>Secondary button</ButtonSecondaryAddRight>
            <ButtonSecondaryMDAddRight>
              Secondary button
            </ButtonSecondaryMDAddRight>
            <ButtonSecondarySMAddRight>
              Secondary button
            </ButtonSecondarySMAddRight>
          </div>
          <div className="flex flex-col gap-2">
            <ButtonSecondaryOFFAddRight>
              Secondary button
            </ButtonSecondaryOFFAddRight>
            <ButtonSecondaryOFFMDAddRight>
              Secondary button
            </ButtonSecondaryOFFMDAddRight>
            <ButtonSecondaryOFFSMAddRight>
              Secondary button
            </ButtonSecondaryOFFSMAddRight>
          </div>
        </div>
        <div className="h-full flex gap-2">
          <div className="flex flex-col gap-2">
            <ButtonSecondaryAddLeft>Secondary button</ButtonSecondaryAddLeft>
            <ButtonSecondaryMDAddLeft>
              Secondary button
            </ButtonSecondaryMDAddLeft>
            <ButtonSecondarySMAddLeft>
              Secondary button
            </ButtonSecondarySMAddLeft>
          </div>
          <div className="flex flex-col gap-2">
            <ButtonSecondaryOFFAddLeft>
              Secondary button
            </ButtonSecondaryOFFAddLeft>
            <ButtonSecondaryOFFMDAddLeft>
              Secondary button
            </ButtonSecondaryOFFMDAddLeft>
            <ButtonSecondaryOFFSMAddLeft>
              Secondary button
            </ButtonSecondaryOFFSMAddLeft>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ButtonPrimaryADDWhite />
          <ButtonPrimaryADDWhiteMD />
          <ButtonPrimaryADDWhiteSM />
        </div>
        <div className="flex flex-col items-center gap-2">
          <ButtonAddOFF />
          <ButtonAddOFFMD />
          <ButtonAddOFFSM />
        </div>
      </div>
      <div className="w-full flex justify-around">
        <div className="h-full flex gap-16">
          <div className="flex flex-col gap-8 items-center">
            <ButtonTertiary>Tertiary button</ButtonTertiary>
            <ButtonTertiary>Tertiary button</ButtonTertiary>
            <ButtonTertiary>Tertiary button</ButtonTertiary>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <ButtonTertiaryOFF>Tertiary button</ButtonTertiaryOFF>
            <ButtonTertiaryOFF>Tertiary button</ButtonTertiaryOFF>
            <ButtonTertiaryOFF>Tertiary button</ButtonTertiaryOFF>
          </div>
        </div>
        <div className="h-full flex gap-16">
          <div className="flex flex-col gap-8">
            <ButtonTertiaryAddRight>Tertiary button</ButtonTertiaryAddRight>
            <ButtonTertiaryAddRight>Tertiary button</ButtonTertiaryAddRight>
            <ButtonTertiaryAddRight>Tertiary button</ButtonTertiaryAddRight>
          </div>
          <div className="flex flex-col gap-8">
            <ButtonTertiaryOFFAddRight>
              Tertiary button
            </ButtonTertiaryOFFAddRight>
            <ButtonTertiaryOFFAddRight>
              Tertiary button
            </ButtonTertiaryOFFAddRight>
            <ButtonTertiaryOFFAddRight>
              Tertiary button
            </ButtonTertiaryOFFAddRight>
          </div>
        </div>
        <div className="h-full flex gap-16">
          <div className="flex flex-col gap-8">
            <ButtonTertiaryAddLeft>Tertiary button</ButtonTertiaryAddLeft>
            <ButtonTertiaryAddLeft>Tertiary button</ButtonTertiaryAddLeft>
            <ButtonTertiaryAddLeft>Tertiary button</ButtonTertiaryAddLeft>
          </div>
          <div className="flex flex-col gap-8">
            <ButtonTertiaryOFFAddLeft>Tertiary button</ButtonTertiaryOFFAddLeft>
            <ButtonTertiaryOFFAddLeft>Tertiary button</ButtonTertiaryOFFAddLeft>
            <ButtonTertiaryOFFAddLeft>Tertiary button</ButtonTertiaryOFFAddLeft>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ButtonAddDefault />
          <ButtonAddDefaultMD />
          <ButtonAddDefaultSM />
        </div>
        <div className="flex flex-col items-center gap-2">
          <ButtonAddDefaultOFF />
          <ButtonAddDefaultOFFMD />
          <ButtonAddDefaultOFFSM />
        </div>
      </div>
    </div>
  )
}
