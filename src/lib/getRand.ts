import { MersenneTwister19937 } from 'random-js';

const getRand = (seed: number[], step: number): MersenneTwister19937 =>
  MersenneTwister19937.seedWithArray([...seed, step]);
export default getRand;
