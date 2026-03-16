
import s from "./AboutUs.module.scss";

const features = [
  {
    icon: "🛍️",
    title: "Каталог товаров",
    desc: "Просматривайте товары с фильтрацией по категориям, поиском и сортировкой по цене.",
  },
  {
    icon: "🗂️",
    title: "Категории",
    desc: "Визуальная страница категорий с фотографиями — быстро найдите нужный раздел.",
  },
  {
    icon: "🛒",
    title: "Корзина",
    desc: "Добавляйте товары, изменяйте количество и оформляйте заказ в удобной корзине.",
  },
  {
    icon: "🗺️",
    title: "Карта доставки",
    desc: "При оформлении заказа выбирайте точку доставки прямо на интерактивной карте.",
  },
  {
    icon: "📊",
    title: "Статистика профиля",
    desc: "В личном кабинете отображается история заказов и персональная статистика покупок.",
  },
  {
    icon: "🔐",
    title: "Авторизация",
    desc: "Безопасная система регистрации и входа с хранением сессии пользователя.",
  },
];

const TOTAL_FILES = 147;
const stack = [
  { name: "TypeScript (.ts)", files: 52, color: "#518581" },
  { name: "React компоненты (.tsx)", files: 54, color: "#AD7E5C" },
  { name: "Стили (.scss)", files: 30, color: "#A6D8D1" },
  { name: "CSS (.css)", files: 7, color: "#86AAA7" },
  { name: "Конфиги (.json)", files: 4, color: "#AFADB5" },
];

const AboutUs = () => {
  return (
    <div className={s.page}>

      <section className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.badge}>Учебный проект</div>
          <h1 className={s.heroTitle}>Lalasia Store</h1>
          <p className={s.heroSubtitle}>
            Современный e-commerce на React, Next.js и MobX — с полным циклом
            от каталога до оформления заказа с выбором точки доставки на карте.
          </p>
        </div>
      </section>

      <section className={s.section}>
        <h2 className={s.sectionTitle}>Возможности</h2>
        <div className={s.featuresGrid}>
          {features.map((f) => (
            <div className={s.featureCard} key={f.title}>
              <div className={s.featureIcon}>{f.icon}</div>
              <h3 className={s.featureTitle}>{f.title}</h3>
              <p className={s.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={s.section}>
        <h2 className={s.sectionTitle}>Состав кодовой базы</h2>
        <div className={s.stackList}>
          {stack.map((item) => (
            <div className={s.stackItem} key={item.name}>
              <div className={s.stackMeta}>
                <span className={s.stackName}>{item.name}</span>
                <span className={s.stackPercent}>{item.files} файлов</span>
              </div>
              <div className={s.stackTrack}>
                <div
                  className={s.stackBar}
                  style={{
                    width: `${Math.round((item.files / TOTAL_FILES) * 100)}%`,
                    background: item.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
