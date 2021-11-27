import '@testing-library/jest-dom/extend-expect';
import { loopFetchSixCities } from '../Redux/homepage/homepage';

describe('Test fetching data', () => {
  it('Test fetching temperature and time', async () => {
    await loopFetchSixCities().then((data) => expect(data).toBe());
  });
});
