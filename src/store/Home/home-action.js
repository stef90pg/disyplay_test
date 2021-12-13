import { homeActions } from './home-slice';

export const fetchSliders = () => {
  return async (dispatch) => {
    const featchData = async () => {
      const url = `http://localhost:3000/slider`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Could not fetch slider data!');
      }
      const data = await response.json();

      return data;
    };

    try {
      const slidersData = await featchData();

      dispatch(
        homeActions.replaceSliders({
          sliders: slidersData || [],
        })
      );
    } catch (error) {}
  };
};
