import { makeAutoObservable } from 'mobx';

type FormState = {
  name: string;
  address: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
};

type FormErrors = Partial<FormState>;

export class PurchaseFormStore {
  form: FormState = {
    name: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  };

  errors: FormErrors = {};
  mapOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  setField(field: keyof FormState, value: string) {
    this.form[field] = value;
  }

  setMapOpen(open: boolean) {
    this.mapOpen = open;
  }

  validate(msgs: { name: string; address: string; card: string; expiry: string; cvv: string }): boolean {
    const errors: FormErrors = {};

    // Валидация имени: только буквы, пробелы, дефисы и апострофы
    if (!this.form.name.trim()) {
      errors.name = msgs.name;
    } else if (!/^[a-zA-Zа-яА-ЯёЁ\s\-']+$/.test(this.form.name)) {
      errors.name = 'Name can only contain letters, spaces, hyphens and apostrophes';
    }

    if (!this.form.address.trim()) errors.address = msgs.address;
    if (this.form.cardNumber.replace(/\s/g, '').length < 16) errors.cardNumber = msgs.card;

    // Валидация срока действия: формат MM/YY и дата не должна быть в прошлом
    if (this.form.expiry.length < 5) {
      errors.expiry = msgs.expiry;
    } else {
      const [month, year] = this.form.expiry.split('/');
      const monthNum = parseInt(month, 10);
      const yearNum = parseInt('20' + year, 10);

      if (monthNum < 1 || monthNum > 12) {
        errors.expiry = 'Invalid month';
      } else {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        const expiryDate = new Date(yearNum, monthNum - 1);
        const currentDate = new Date(currentYear, currentMonth - 1);

        if (expiryDate < currentDate) {
          errors.expiry = 'Card has expired';
        }
      }
    }

    if (this.form.cvv.length < 3) errors.cvv = msgs.cvv;
    this.errors = errors;
    return Object.keys(errors).length === 0;
  }
}
