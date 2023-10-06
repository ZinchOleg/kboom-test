import { ImageProps as NextImageProps } from 'next/image';

export type TTeam = {
  id: number,
  name: string,
  img: string,
  level: number;
  experience: number;
  tokens: number,
  gems: number,
  rating: number
}

export type SrcType = NextImageProps['src'] | string;
