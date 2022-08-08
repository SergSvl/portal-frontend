import portaladmin from "@/assets/img/user.png";
import bboard from "@/assets/img/bboard.jpg";
import tabel from "@/assets/img/tabel.jpg";
import archive from "@/assets/img/archive.jpg";
import arrival from "@/assets/img/arrival.jpg";
import kabel from "@/assets/img/kabel.jpg";
import btk from "@/assets/img/btk.jpg";
import smk from "@/assets/img/smk.jpg";
import worders from "@/assets/img/worders.jpg";
import tools from "@/assets/img/tools.jpg";
// import osolutions from "@/assets/img/osolutions.jpg";

/**
 * Список кнопок задач на главной портала.
 * Публичные задачи (public: true) отображаются на главной в любом случае (авторизован юзер или нет).
 * Приватные задачи - только после авторизации юзера и отображаются кнопки только тех задач, в которых у него прописан его емейл (с любыми правами).
 * Неактивные кнопки (isActive: false) не выводятся на главной.
 * Для публичной и приватной части задачи нужно создать отдельную запись в этом списке с разными заголовками и ссылками (get). Пояснение: т.к. здесь смешаны разные технологии (js и php), то главная страница портала служит объединяющим их приложением и содержит такие сылки на задачи, которые правильно адресуют их. Например, задачи табеля и кабеля написаны на php и для входа в них нужна ссылка из формы по кнопке с типом submit, чтобы сразу передавать логин и пароль и переходить к их проверке на бэке и авто-переходом на саму задачу. Иначе это не сделать, если нужно вводить логин и пароль в форму только один раз.
 */
const buttonsData = [
  {
    id: "portaladmin",
    title: "Админ портала",
    image: portaladmin,
    link: "",
    get: "",
    post: `${process.env.REACT_APP_PORTAL_ADMIN_URL}${"/login/in"}`,
    isActive: true,
    public: false
  },
  {
    id: "bboard",
    title: "Объявления",
    image: bboard,
    link: "",
    get: `${process.env.REACT_APP_PORTAL_BBOARD_URL}/bboard`,
    post: "",
    isActive: true,
    public: true
  },
  {
    id: "bboard",
    title: "Админ объявлений",
    image: bboard,
    link: "",
    get: `${process.env.REACT_APP_PORTAL_BBOARD_URL}/bboard/edit`,
    post: "",
    isActive: true,
    public: false
  },
  {
    id: "tabel",
    title: "Персонал",
    image: tabel,
    link: "",
    get: "",
    post: `${process.env.REACT_APP_TABEL_URL}${"/login/in"}`,
    isActive: true,
    public: false
  },
  {
    id: "archive",
    title: "Архив РКД",
    image: archive,
    link: "#",
    get: "",
    post: "",
    isActive: true,
    public: false
  },
  {
    id: "arrival",
    title: "Поступление кабеля",
    image: arrival,
    link: "#",
    get: "",
    post: "",
    isActive: true,
    public: false
  },
  {
    id: "kabel",
    title: "Склад кабеля",
    image: kabel,
    link: "",
    get: "",
    post: `${process.env.REACT_APP_KABEL_URL}${"/login/in"}`,
    isActive: true,
    public: false
  },
  {
    id: "btk",
    title: "БТК",
    image: btk,
    link: "",
    get: "https://docs.google.com/spreadsheets/d/1dymxvBDsRDhEANk9sz0604ZPVzsx4zRtSWcf6GrM_kc/edit",
    post: "",
    isActive: true,
    public: false
  },
  {
    id: "smk",
    title: "Документы СМК",
    image: smk,
    link: "",
    get: "https://cloud.baltalm.ru/index.php/f/39442",
    post: "",
    isActive: true,
    public: false
  },
  {
    id: "worders",
    title: "Закрытие нарядов",
    image: worders,
    link: "#",
    get: "",
    post: "",
    isActive: true,
    public: false
  },
  {
    id: "tools",
    title: "Склад инструмента",
    image: tools,
    link: "#",
    get: "",
    post: "",
    isActive: true,
    public: true
  },
  {
    id: "tools",
    title: "Админ склада инструмента",
    image: tools,
    link: "#",
    get: "",
    post: "",
    isActive: true,
    public: false
  },
  // {
  //   id: "osolutions",
  //   title: "Оперативные решения",
  //   image: osolutions,
  //   link: "#",
  //   get: "",
  //   post: "",
  //   isActive: false,
  //   public: false
  // }
];

export const taskNames = buttonsData.map((task) => task.id);
export default buttonsData;
