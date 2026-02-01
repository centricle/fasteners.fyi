import type { Screw, Bolt, Anchor, Nut, Washer, Fastener } from '../types/fastener';

import screwsData from '../../data/screws/index.json';
import boltsData from '../../data/bolts/index.json';
import anchorsData from '../../data/anchors/index.json';
import nutsData from '../../data/nuts/index.json';
import washersData from '../../data/washers/index.json';

export const screws = screwsData as Screw[];
export const bolts = boltsData as Bolt[];
export const anchors = anchorsData as Anchor[];
export const nuts = nutsData as Nut[];
export const washers = washersData as Washer[];

export function getAllFasteners(): Fastener[] {
  return [...screws, ...bolts, ...anchors, ...nuts, ...washers];
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
    case 'washers': return washers;
    default: return [];
  }
}

export function searchFasteners(query: string): Fastener[] {
  if (!query) return [];

  const searchTerm = query.toLowerCase();

  return getAllFasteners().filter(fastener => {
    return (
      fastener.name.toLowerCase().includes(searchTerm) ||
      fastener.description.toLowerCase().includes(searchTerm) ||
      fastener.category.toLowerCase().includes(searchTerm) ||
      fastener.applications.some(app => app.toLowerCase().includes(searchTerm)) ||
      (fastener.aliases && fastener.aliases.some(alias => alias.toLowerCase().includes(searchTerm))) ||
      fastener.materials.some(mat => mat.toLowerCase().includes(searchTerm)) ||
      (fastener.standards && fastener.standards.some(std => std.toLowerCase().includes(searchTerm)))
    );
  });
}
