import { Model as CompasModel } from "../components/models/Compas";
import { Model as EarthModel } from "../components/models/Earth";
import { Model as HeartModel } from "../components/models/Heart";
import { Model as MapModel } from "../components/models/Map";
import type { ComponentType } from "react";

interface Images {
  source: string;
  alt: string;
  id: number;
  classes: string;
}

interface CardsInfo {
  title: string;
  description: string;
  id: number;
  model: ComponentType<any>;
  scale: number;
  position: [number, number, number];
}
export const images: Images[] = [
  {
    source: "/img/nat-1",
    alt: "Photo 1",
    id: 1,
    classes: "left-0 top-0 md:top-5 z-10",
  },
  {
    source: "/img/nat-2",
    alt: "Photo 2",
    id: 2,
    classes: "right-0 top-2 md:top-0 z-20 md:scale-110",
  },
  {
    source: "/img/nat-3",
    alt: "Photo 3",
    id: 3,
    classes: "left-[15%] top-10 md:left-1/4 md:top-12 z-10 md:scale-110",
  },
];

export const cards: CardsInfo[] = [
  {
    id: 1,
    title: "Explore the world",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    model: EarthModel,
    scale: 0.2,
    position: [0, 0, 0],
  },
  {
    id: 2,
    title: "Meet nature",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    model: MapModel,
    scale: 0.025,
    position: [0, 0, 0],
  },
  {
    id: 3,
    title: "Find your way",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    model: CompasModel,
    scale: 0.18,
    position: [1, 3, 0],
  },
  {
    id: 4,
    title: "Live a healthier life",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    model: HeartModel,
    scale: 0.015,
    position: [0, 0.5, 0],
  },
];
