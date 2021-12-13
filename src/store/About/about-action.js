import { aboutActions } from './about-slice';

export const fetchSliders = () => {
  return async (dispatch) => {
    const featchData = async () => {
      const url = `http://localhost:3000/service`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Could not fetch services data!');
      }
      const data = await response.json();

      return data;
    };

    try {
      const servicesData = await featchData();

      dispatch(
        aboutActions.replaceServices({
          services: servicesData || [],
        })
      );
    } catch (error) {}
  };
};
