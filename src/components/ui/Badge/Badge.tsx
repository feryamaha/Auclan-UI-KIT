"use client";

import React from "react";

type BadgeVariant =
  | "badgeDefault"
  | "badgeDefaultOff"
  | "onlyDoubleArrow"
  | "onlyDoubleArrowOff"
  | "number"
  | "numberOff"
  | "badgeStatus"
  | "badgeStatusArrow"
  | "badgeStatusArrowGap";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  variant?: BadgeVariant;
}

export function Badge({
  className = "",
  children,
  variant = "badgeDefault",
  ...props
}: BadgeProps) {
  const variantStyles = {
    badgeDefault: "BadgeDefault",
    badgeDefaultOff: "BadgeDefaultOFF",
    onlyDoubleArrow: "OnlyDoubleArrow",
    onlyDoubleArrowOff: "OnlyDoubleArrowOFF",
    number: "OnlyDoubleArrow TypInter12w400",
    numberOff: "OnlyDoubleArrowOFF TypInter12w400off",
    badgeStatus: "BadgeStatus",
    badgeStatusArrow: "BadgeStatusArrow",
    badgeStatusArrowGap: "BadgeStatusArrow gap-4",
  };

  return (
    <span
      className={`${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}