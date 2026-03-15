'use client';

import s from "./MainText.module.scss";
import { useTranslations } from "next-intl";

const MainText = () => {
  const t = useTranslations();

  return (
    <div className={s.mainText}>
      <div className={s.title}>{t('mainText.title')}</div>
      <div className={s.description}>{t('mainText.description')}</div>
    </div>
  );
};

export default MainText;
