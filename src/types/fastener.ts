// Core fastener types for fasteners.fyi

export type FastenerCategory = 'screw' | 'bolt' | 'anchor' | 'nut' | 'washer';

export type WasherType = 'flat' | 'lock' | 'spring' | 'countersunk' | 'insulating' | 'sealing';

export interface Source {
  name: string;
  url?: string;
  accessDate?: string;
}

export type DriveType =
  | 'phillips'
  | 'slotted'
  | 'hex'
  | 'torx'
  | 'square'
  | 'robertson'
  | 'combo'
  | 'none';

export type HeadStyle =
  | 'flat'
  | 'pan'
  | 'round'
  | 'oval'
  | 'truss'
  | 'hex'
  | 'socket'
  | 'button'
  | 'carriage'
  | 'none';

export type Material =
  | 'steel'
  | 'stainless-steel'
  | 'brass'
  | 'aluminum'
  | 'zinc-plated'
  | 'galvanized'
  | 'nylon';

export type ThreadType = 'coarse' | 'fine' | 'self-tapping' | 'wood' | 'machine';

export type MeasurementSystem = 'imperial' | 'metric';

export interface DimensionRange {
  min: number;
  max: number;
  unit: 'in' | 'mm';
}

export interface Fastener {
  id: string;
  name: string;
  slug: string;
  category: FastenerCategory;
  description: string;

  // Physical characteristics
  headStyle?: HeadStyle;
  driveType?: DriveType;
  threadType?: ThreadType;
  materials: Material[];

  // Dimensions (common sizes available)
  diameterRange?: DimensionRange;
  lengthRange?: DimensionRange;
  measurementSystem: MeasurementSystem[];

  // Standards
  standards?: string[]; // e.g., "ASME B18.6.3", "ISO 7045", "DIN 965"

  // Usage
  applications: string[];
  notRecommendedFor?: string[];

  // Metadata
  aliases?: string[];
  relatedFasteners?: string[]; // slugs of related items

  // Source attribution
  sources?: Source[];
}

// Category-specific extensions
export interface Screw extends Fastener {
  category: 'screw';
  pointType?: 'sharp' | 'blunt' | 'self-drilling' | 'type-17' | 'gimlet';
}

export interface Bolt extends Fastener {
  category: 'bolt';
  nutRequired: boolean;
  washerRecommended?: boolean;
}

export interface Anchor extends Fastener {
  category: 'anchor';
  baseMaterial: ('drywall' | 'concrete' | 'masonry' | 'hollow-wall' | 'wood')[];
  loadCapacity?: {
    shear?: number;
    tension?: number;
    unit: 'lb' | 'kg';
  };
}

export interface Nut extends Fastener {
  category: 'nut';
  lockingMechanism?: 'nylon-insert' | 'prevailing-torque' | 'serrated' | 'none';
}

export interface Washer extends Fastener {
  category: 'washer';
  washerType: WasherType;
  innerDiameterRange?: DimensionRange;
  outerDiameterRange?: DimensionRange;
  thicknessRange?: DimensionRange;
}
