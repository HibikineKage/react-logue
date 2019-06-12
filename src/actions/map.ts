import { Action } from 'redux';
import { SET_MAP } from '../actionTypes';

export const setMap = (data: MapData): SetMapAction => ({
  type: SET_MAP,
  payload: { data }
});
type SetMapAction = Action<typeof SET_MAP> & { payload: { data: MapData } };
export type MapData = { width: number; cells: Cell[] };
type Cell = { type: CellType };
export enum CellType {
  Wall,
  Ground
}
export type Actions = SetMapAction;
