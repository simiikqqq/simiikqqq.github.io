/* Central registry for the individually maintained subject modules. */
import MatematikaCategory from './matematika/category.js?v=19';
import MatematikaExpansions from './matematika/expansions.js';
import MatematikaSlideNotes from './matematika/slide-notes.js';
import CestinaCategory from './cestina/category.js';
import CestinaExpansions from './cestina/expansions.js';
import LiteraturaCategory from './literatura/category.js';
import LiteraturaExpansions from './literatura/expansions.js';
import SlohCategory from './sloh/category.js';
import SlohExpansions from './sloh/expansions.js';
import HwswCategory from './hwsw/category.js';
import HwswExpansions from './hwsw/expansions.js';
import ProgramovaniCategory from './programovani/category.js';
import ProgramovaniExpansions from './programovani/expansions.js';
import WebCategory from './web/category.js';
import WebExpansions from './web/expansions.js';
import DatabazeCategory from './databaze/category.js';
import DatabazeExpansions from './databaze/expansions.js';
import DokumentaceCategory from './dokumentace/category.js';
import DokumentaceExpansions from './dokumentace/expansions.js';
import UstniCategory from './ustni/category.js';
import LiteraturaUstniCategory from './literatura-ustni/category.js';
import RozboryKnihCategory from './rozbory-knih/category.js';

const content = [{ category: MatematikaCategory, expansions: MatematikaExpansions },
  { category: CestinaCategory, expansions: CestinaExpansions },
  { category: LiteraturaCategory, expansions: LiteraturaExpansions },
  { category: SlohCategory, expansions: SlohExpansions },
  { category: HwswCategory, expansions: HwswExpansions },
  { category: ProgramovaniCategory, expansions: ProgramovaniExpansions },
  { category: WebCategory, expansions: WebExpansions },
  { category: DatabazeCategory, expansions: DatabazeExpansions },
  { category: DokumentaceCategory, expansions: DokumentaceExpansions },
  { category: UstniCategory, expansions: null },
  { category: LiteraturaUstniCategory, expansions: null },
  { category: RozboryKnihCategory, expansions: null }];

export const CATEGORIES = content.map(item => item.category);
export const MATHEMATIKA_SLIDE_NOTES = MatematikaSlideNotes;
export const LESSON_EXPANSIONS = Object.fromEntries(
  content.filter(item => item.expansions).map(item => [item.category.id, item.expansions])
);
