"use client";
import Link from "next/link";
import Image from "next/image";
import { headerMenu } from "@/data/headerMenu";

export function Header() {
  return (
    <header className="fixed w-full top-0 left-0 bg-white border-b h-16 flex items-center py-4 px-6 z-50">
      <div className="w-max px-4 flex items-center justify-center">
        <div className="w-max bg-white flex items-center gap-2">
          <Image
            src="/assets/img/logo.png"
            alt="Logo"
            width={100}
            height={20}
          />
          <span className="TypLato14w600">Auclan UI KIT</span>
        </div>
      </div>
      <div className="w-full flex justify-end items-center gap-8 flex-1 pr-8">
        <nav>
          <ul className="flex gap-6 ml-4">
            {headerMenu.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
