import { BannerInfoType, ButtonType } from "./enums";

export interface ButtonProps {
  type: ButtonType;
  label: string;
  iconOnStart: boolean;
  iconOnEnd: boolean;
  onClick?: () => void;
}

export interface BannerInfoProps {
  type: BannerInfoType;
  text: string;
}
