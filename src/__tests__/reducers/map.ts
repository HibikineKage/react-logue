import reducer from '../../reducers/map';
import { SET_MAP } from '../../actionTypes';
import { CellType } from '../../actions/map';

describe('map reducer', () => {
  test('SET_MAP action', () => {
    expect(
      reducer(reducer(undefined, { type: null } as any), {
        type: SET_MAP,
        payload: {
          data: {
            width: 2,
            cells: new Array(4).fill({ type: CellType.Ground })
          }
        }
      })
    ).toEqual({
      current: {
        width: 2,
        cells: [
          { type: CellType.Ground },
          { type: CellType.Ground },
          { type: CellType.Ground },
          { type: CellType.Ground }
        ]
      }
    });
  });
});
