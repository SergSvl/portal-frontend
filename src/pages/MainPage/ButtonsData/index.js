import bboard from "@/assets/img/bboard.jpg";
import tabel from "@/assets/img/tabel.jpg";
import archive from "@/assets/img/archive.jpg";
import arrival from "@/assets/img/arrival.jpg";
import kabel from "@/assets/img/kabel.jpg";
import btk from "@/assets/img/btk.jpg";
import smk from "@/assets/img/smk.jpg";
import worders from "@/assets/img/worders.jpg";
import tools from "@/assets/img/tools.jpg";

const buttonsData = [
  {
    title: "Объявления",
    image: bboard,
    link: "#",
    get: "",
    post: "",
    isActive: true
  },
  {
    title: "Персонал",
    image: tabel,
    link: "",
    get: "",
    post: `${process.env.REACT_APP_TABEL_URL}${"/login/in"}`,
    isActive: true
  },
  {
    title: "Архив РКД",
    image: archive,
    link: "#",
    get: "",
    post: "",
    isActive: true
  },
  {
    title: "Поступление кабеля",
    image: arrival,
    link: "#",
    get: "",
    post: "",
    isActive: true
  },
  {
    title: "Склад кабеля",
    image: kabel,
    link: "",
    get: "",
    post: `${process.env.REACT_APP_KABEL_URL}${"/login/in"}`,
    isActive: true
  },
  {
    title: "БТК",
    image: btk,
    link: "",
    get: "https://docs.google.com/spreadsheets/d/1dymxvBDsRDhEANk9sz0604ZPVzsx4zRtSWcf6GrM_kc/edit",
    post: "",
    isActive: true
  },
  {
    title: "Документы СМК",
    image: smk,
    link: "",
    get: "https://cloud.baltalm.ru/index.php/f/39442",
    post: "",
    isActive: true
  },
  {
    title: "Закрытие нарядов",
    image: worders,
    link: "#",
    get: "",
    post: "",
    isActive: true
  },
  {
    title: "Склад инструмента",
    image: tools,
    link: "#",
    get: "",
    post: "",
    isActive: true
  }
];

export default buttonsData;
