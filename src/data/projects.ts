// Art portfolio.
// `image` paths are relative to /public — so a file at
// public/images/chibi.png is written as '/images/chibi.png'.
// Filenames are case-sensitive once deployed. No spaces.

import type { ImageMetadata } from 'astro';

import yunomiPainting from '../assets/art/yunomi-painting.png';
import yunomiRef from '../assets/art/yunomi-ref.png';
import chibi from '../assets/art/chibi.png';
import chibi2 from '../assets/art/chibi2.png';
import celestial from '../assets/art/celestial.jpg';
 

export type Project = {
  title: string;
  kind: string;
  description: string;
  image: ImageMetadata;
  href?: string;
};

export const projects: Project[] = [
  {
    title: 'Yunomi',
    kind: 'Character painting',
    description: 'Painted fullbody of my OC Yunomi',
    image: yunomiPainting,
  },
  {
    title: 'Yunomi — Reference',
    kind: 'OC Character design',
    description: 'Fullbody ref sheet of Yunomi',
    image: yunomiRef,
  },  
  {
    title: 'Vienna',
    kind: 'Illustration',
    description: 'Fanart for C9 Vienna',
    image: celestial,
  },
  {
    title: 'Chibi Set',
    kind: 'Chibi drawings',
    description: '<3>',
    image: chibi,
  },
  {
    title: 'Chibi Set II',
    kind: 'Chibi drawings',
    description: '<3',
    image: chibi2,
  },

];