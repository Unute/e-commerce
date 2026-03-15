'use client';

import { observer } from 'mobx-react-lite';
import { useStore } from '@stores/context';
import s from './LanguageToggle.module.scss';

type LanguageToggleProps = {
  showLabel?: boolean;
  onClose?: () => void;
};

const LanguageToggle = observer(({ showLabel, onClose }: LanguageToggleProps) => {
  const { localeStore } = useStore();
  const isRu = localeStore.locale === 'ru';

  const handleClick = () => {
    localeStore.toggle();
    if (onClose) onClose();
  };

  return (
    <button
      className={`${s.langBtn} ${showLabel ? s.withLabel : ''}`}
      onClick={handleClick}
      aria-label={isRu ? 'Switch to English' : 'Переключить на русский'}
    >
      <span className={s.flag}>{isRu ? 'en' : 'ru'}</span>
      {showLabel && (
        <span className={s.label}>{isRu ? 'English' : 'Русский'}</span>
      )}
    </button>
  );
});

export default LanguageToggle;
