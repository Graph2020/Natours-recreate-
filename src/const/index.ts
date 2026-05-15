interface Images {
  source: string;
  alt: string;
  id: number;
  classes: string;
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
