import AquiImg from "assets/images/aqui.jpeg";
import CitaImg from "assets/images/cita.jpg";
import DetrasImg from "assets/images/detras.jpg";
import LaventanaImg from "assets/images/laventana.jpg";
import SolaImg from "assets/images/sola.jpg";
import DunasImg from "assets/images/dunas.jpg";
import AquiTxt from "assets/images/songNames/aqui.png";
import CitaTxt from "assets/images/songNames/cita.png";
import LaventTxt from "assets/images/songNames/laventana.png";
import DetrasTxt from "assets/images/songNames/detras.png";
import SolaTxt from "assets/images/songNames/sola.png";
import DunasTxt from "assets/images/songNames/dunas.png";

interface IIitem {
  css: string;
  label: string;
  mp3: string;
  id: string;
  nameImg: any;
  nameHeight: string;
}

export const items: IIitem[] = [
  {
    css: `url(${LaventanaImg})`,
    label: "La Ventana",
    mp3:
      "https://firebasestorage.googleapis.com/v0/b/nick-malmestrom.appspot.com/o/Encoded_LaVentana.mp3?alt=media",
    id: "laventana",
    nameImg: LaventTxt,
    nameHeight: "4rem",
  },
  {
    css: `url(${AquiImg})`,
    label: "Aqui",
    mp3:
      "https://firebasestorage.googleapis.com/v0/b/nick-malmestrom.appspot.com/o/Encoded_Aqui.mp3?alt=media",
    id: "aqui",
    nameImg: AquiTxt,
    nameHeight: "6rem",
  },
  {
    css: `url(${CitaImg})`,
    label: "Cita",
    mp3:
      "https://firebasestorage.googleapis.com/v0/b/nick-malmestrom.appspot.com/o/Encoded_Cita.mp3?alt=media",
    id: "cita",
    nameImg: CitaTxt,
    nameHeight: "4.5rem",
  },
  {
    css: `url(${DetrasImg})`,
    label: "DETRÁS DEL MURO",
    mp3:
      "https://firebasestorage.googleapis.com/v0/b/nick-malmestrom.appspot.com/o/Encoded_Detras.mp3?alt=media",
    id: "detrasdelmuro",
    nameImg: DetrasTxt,
    nameHeight: "4rem",
  },

  {
    css: `url(${SolaImg})`,
    label: "Sola",
    mp3:
      "https://firebasestorage.googleapis.com/v0/b/nick-malmestrom.appspot.com/o/Encoded_Sola.mp3?alt=media",
    id: "sola",
    nameImg: SolaTxt,
    nameHeight: "4.3rem",
  },
  {
    css: `url(${DunasImg})`,
    label: "Dunas",
    mp3:
      "https://firebasestorage.googleapis.com/v0/b/nick-malmestrom.appspot.com/o/Encoded_Dunas.mp3?alt=media",
    id: "dunas",
    nameImg: DunasTxt,
    nameHeight: "4rem",
  },
];
