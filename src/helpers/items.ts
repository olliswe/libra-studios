import AquiImg from "assets/images/aqui.jpeg";
import CitaImg from "assets/images/cita.jpg";
import DetrasImg from "assets/images/detras.jpg";
import LaventanaImg from "assets/images/laventana.jpg";
import SolaImg from "assets/images/sola.jpg";
import DunasImg from "assets/images/dunas.jpg";

interface IIitem {
  css: string;
  label: string;
  mp3: string;
  id: string;
}

export const items: IIitem[] = [
  {
    css: `url(${AquiImg})`,
    label: "Aqui",
    mp3: "/songs/Aqui.mp3",
    id: "aqui",
  },
  {
    css: `url(${CitaImg})`,
    label: "Cita",
    mp3: "/songs/Cita.mp3",
    id: "cita",
  },
  {
    css: `url(${DetrasImg})`,
    label: "DETRÁS DEL MURO",
    mp3: "/songs/DetrasdelMuro.mp3",
    id: "detrasdelmuro",
  },
  {
    css: `url(${LaventanaImg})`,
    label: "La Ventana",
    mp3: "/songs/LaVentana.mp3",
    id: "laventana",
  },
  {
    css: `url(${SolaImg})`,
    label: "Sola",
    mp3: "/songs/Dunas.mp3",
    id: "sola",
  },
  {
    css: `url(${DunasImg})`,
    label: "Dunas",
    mp3: "/songs/Dunas.mp3",
    id: "dunas",
  },
];
