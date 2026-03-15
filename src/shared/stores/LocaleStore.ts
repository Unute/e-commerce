import { makeAutoObservable } from 'mobx';

type Locale = 'en' | 'ru';

export class LocaleStore {
  locale: Locale = 'en';

  constructor() {
    makeAutoObservable(this);
  }

  init() {
    const saved = localStorage.getItem('lang') as Locale | null;
    if (saved === 'en' || saved === 'ru') {
      this.locale = saved;
    }
  }

  toggle() {
    this.locale = this.locale === 'en' ? 'ru' : 'en';
    localStorage.setItem('lang', this.locale);
  }
}
