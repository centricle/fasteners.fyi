# fasteners.fyi

Comprehensive, open-source fastener specifications database. Screws, bolts, anchors, and nuts - objective data only, no opinions.

## Principles

- **Objective data only** - Specifications from manufacturer datasheets, not recommendations
- **Comprehensive coverage** - All common fastener types with dimensional specs
- **Reliable sources** - Industry standards (ASME, ISO, DIN) and manufacturer data
- **Open source** - All data version-controlled and freely available

## Tech Stack

- **Astro 5** - Static site generation
- **Tailwind 4** - Utility-first CSS
- **TypeScript** - Type safety for data handling
- **JSON Database** - Version-controlled fastener specifications
- **Netlify** - Static hosting

## Development

```bash
npm install
npm run dev          # Local development on port 7010
npm run build        # Production build
npm run preview      # Preview production build
```

## Data Structure

```
/data/
├── screws/          # Wood screws, machine screws, self-tapping
├── bolts/           # Hex bolts, carriage bolts, structural
├── anchors/         # Wall anchors, concrete anchors, toggle bolts
└── nuts/            # Hex nuts, lock nuts, wing nuts
```

## Part of The Lookup Family

fasteners.fyi is part of [The Lookup](https://thelookup.fyi) family of objective reference databases:

- [batteries.fyi](https://batteries.fyi) - Battery specifications
- [cables.fyi](https://cables.fyi) - Cable and connector reference
- fasteners.fyi - Fastener specifications (this project)

## License

MIT License - see [LICENSE](LICENSE) for details.
