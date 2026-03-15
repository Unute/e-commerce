'use client'

import Button from "@UI/Button";
import Input from "@UI/Input";
import s from "./FormAuth.module.scss";
import { useStore } from "@stores/context";
import { observer } from "mobx-react-lite";
import { RegisterStore } from "./../../store/RegisterStore";
import { useLocalObservable } from "mobx-react-lite";
import { useTranslations } from "next-intl";

const FormAuth = observer(() => {
  const { authStore } = useStore();
  const formStore = useLocalObservable(() => new RegisterStore());
  const t = useTranslations();
  return (
    <>
      <div className={s.form}>
        {formStore.isRegister &&
          <Input
            className={s.input}
            placeholder={t('auth.username')}
            value={formStore.username}
            onChange={(e) => formStore.setUsername(e)}
          />
        }
        <Input
          className={s.input}
          placeholder={t('auth.email')}
          value={formStore.email}
          onChange={(e) => formStore.setEmail(e)}
        />
        <Input
          className={s.input}
          placeholder={t('auth.password')}
          type="password"
          value={formStore.password}
          onChange={(e) => formStore.setPassword(e)}
        />

        <Button className={s.button} onClick={() => {
          if (formStore.isRegister) {
            authStore.register(formStore.username, formStore.email, formStore.password);
          } else {
            authStore.login(formStore.email, formStore.password);
          }
        }}>
          {formStore.isRegister ? t('auth.register') : t('auth.login')}
        </Button>
        {authStore.error && <div className={s.error}>{authStore.error}</div>}
      </div>

      <div className={s.toggle} onClick={() => {
        formStore.setIsRegister(!formStore.isRegister);
      }}>
        <span>
          {formStore.isRegister ? t('auth.loginLink') : t('auth.registerLink')}
        </span>
      </div>
    </>
  )
})

export default FormAuth