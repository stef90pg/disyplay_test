import { workActions } from './work-slice';

export const fetchWork = (obj) => {
  return async (dispatch) => {
    const featchData = async () => {
      let url =
        obj.category && obj.category != 'All'
          ? `http://localhost:3000/work?category=${obj.category}`
          : `http://localhost:3000/work?_page=${obj.page}&_limit=${obj.per}`;
      if (obj.category && obj.category != 'All') {
        obj.page = 1;
      } else if (obj.total >= obj.page) {
        obj.page++;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Could not fetch works data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const workData = await featchData();

      dispatch(
        workActions.replaceWokr({
          works: workData || [],
          page: obj.page,
          filter: obj.category,
        })
      );
    } catch (error) {}
  };
};
