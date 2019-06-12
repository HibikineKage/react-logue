import getRand from './getRand';
import { MapData, CellType } from '../actions/map';

const genMap = (seed: number[], width = 100, height = 100): MapData => {
  // const rand = getRand(seed, 0);
  return {
    width,
    cells: new Array(width * height).fill({ type: CellType.Ground })
  };
};
export default genMap;
