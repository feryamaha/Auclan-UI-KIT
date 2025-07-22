"use client";

import Image from "next/image";
import { Icon } from "@/scripts/Icon";
import Link from "next/link";
import { useState, ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { Button } from "@/components/ui/Button";
import { menuItems } from "./menuConfig";

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="relative w-full h-[72px] flex items-center bg-white z-40 border-b  ">
      <Container>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-10">
              <a href="/" className="w-[154px] h-[24px]">
                <Icon name="IconLogoinstitucional" className="w-full h-full " />
              </a>

              <nav className="flex items-center gap-4 hidden @tablet:flex ">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className="flex items-center TypographyNavHeader subpixel-antialiased hover:TypographyNavHeaderHover"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <button
              className="block @tablet:hidden "
              onClick={() => setIsSidebarOpen(true)}
            >
              <span className="text-2xl text-gray950">☰</span>
            </button>

            <div className="hidden @tablet:flex">
              <a href="/page/contractPlans">
                <Button variant="btnPrimary" className="hover:bg-red700">
                  Contratar agora
                </Button>
              </a>
            </div>
          </div>
        </div>
        {isSidebarOpen && <MobileMenu setIsSidebarOpen={setIsSidebarOpen} />}
      </Container>
      {children}
    </header>
  );
}
