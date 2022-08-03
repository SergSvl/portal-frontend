import bboard from '@/assets/img/bboard.jpg';
import tabel from '@/assets/img/tabel.jpg';
import archive from '@/assets/img/archive.jpg';
import arrival from '@/assets/img/arrival.jpg';
import kabel from '@/assets/img/kabel.jpg';
import btk from '@/assets/img/btk.jpg';
import smk from '@/assets/img/smk.jpg';
import worders from '@/assets/img/worders.jpg';
import tools from '@/assets/img/tools.jpg';

const buttonsData = [
  {
    title: 'Объявления',
    image: bboard,
    link: '',
    url: '',
    isActive: true,
  },
  {
    title: 'Персонал',
    image: tabel,
    link: '',
    url: '',
    isActive: false
  },
  {
    title: 'Архив РКД',
    image: archive,
    link: '',
    url: '',
    isActive: true
  },
  {
    title: 'Поступление кабеля',
    image: arrival,
    link: '',
    url: '',
    isActive: true
  },
  {
    title: 'Склад кабеля',
    image: kabel,
    link: '',
    url: '/kabel/login',
    isActive: true
  },
  {
    title: 'БТК',
    image: btk,
    link: '',
    url: 'https://docs.google.com/spreadsheets/d/1dymxvBDsRDhEANk9sz0604ZPVzsx4zRtSWcf6GrM_kc/edit',
    isActive: true
  },
  {
    title: 'Документы СМК',
    image: smk,
    link: '',
    url: 'https://cloud.baltalm.ru/index.php/f/39442',
    isActive: true
  },
  {
    title: 'Закрытие нарядов',
    image: worders,
    link: '',
    url: '',
    isActive: true
  },
  {
    title: 'Склад инструмента',
    image: tools,
    link: '',
    url: '',
    isActive: true
  },
];

export default buttonsData;