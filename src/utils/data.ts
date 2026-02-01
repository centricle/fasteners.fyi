import type { Screw, Bolt, Anchor, Nut, Fastener } from '../types/fastener';

import screwsData from '../../data/screws/index.json';
import boltsData from '../../data/bolts/index.json';
import anchorsData from '../../data/anchors/index.json';
import nutsData from '../../data/nuts/index.json';

export const screws = screwsData as Screw[];
export const bolts = boltsData as Bolt[];
export const anchors = anchorsData as Anchor[];
export const nuts = nutsData as Nut[];

export function getAllFasteners(): Fastener[] {
  return [...screws, ...bolts, ...anchors, ...nuts];
}

export function getFastenerBySlug(slug: string): Fastener | undefined {
  return getAllFasteners().find(f => f.slug === slug);
}

export function getFastenersByCategory(category: string): Fastener[] {
  switch (category) {
    case 'screws': return screws;
    case 'bolts': return bolts;
    case 'anchors': return anchors;
    case 'nuts': return nuts;
    default: return [];
  }
}
