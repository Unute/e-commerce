"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import s from "./TextHeader.module.scss";

type TextHeaderProps = {
  onClose?: () => void;
};

const TextHeader = ({ onClose }: TextHeaderProps) => {
  const pathname = usePathname();
  const t = useTranslations();

  const navItems = [
    { label: t('nav.products'), to: "/" },
    { label: t('nav.categories'), to: "/categories" },
    { label: t('nav.aboutUs'), to: "/about-us" },
  ];

  return (
    <nav>
      <ul className={s.navList}>
        {navItems.map((item) => {
          const isActive = pathname === item.to;
          return (
            <Link
              key={item.to}
              href={item.to}
              className={`${s.navItem} ${isActive ? s.active : ""}`}
              onClick={onClose}
            >
              {item.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default TextHeader;
