import React, { useState, useEffect, useCallback } from 'react';
import PageTitle from '../../Components/PageTitle';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import GridView from './GridView';
import ListView from './ListView';
import { fetchWork } from '../../store/Work/work-action';

const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

const images = importAll(
  require.context('../../img/work', false, /\.(gif|jpe?g|svg|png)$/)
);

let isInitial = true;

const Work = () => {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  const [view, setView] = useState(screen.width < 500 ? 'list' : 'grid');
  const works = useSelector((store) => store.work.works);
  const per = useSelector((store) => store.work.per);
  const page = useSelector((store) => store.work.page);
  const totalPages = useSelector((store) => store.work.totalPages);
  const filter = useSelector((store) => store.work.filter);

  const getDocumentHeight = () => {
    const html = document.documentElement;

    return Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
  };

  const getScrollTop = () => {
    return window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  };

  const handleScroll = () => {
    if (
      getScrollTop() < getDocumentHeight() - window.innerHeight ||
      loader === true
    )
      return;

    setLoader(true);
    window.removeEventListener('scroll', handleScroll);
  };
  window.addEventListener('scroll', handleScroll);

  const filetrWork = (e) => {
    const category = e.target.parentElement.getAttribute('value');

    dispatch(
      fetchWork({ category: category, page: page, per: per, total: totalPages })
    );
    setLoader(false);
  };

  const changeView = (e) => {
    setView(e.target.getAttribute('value'));
  };

  useEffect(() => {
    if (loader === false) return;

    dispatch(
      fetchWork({ category: filter, page: page, per: per, total: totalPages })
    );
    setLoader(false);
  }, [dispatch]);

  useEffect(() => {
    if (
      loader === false ||
      isInitial ||
      page > totalPages ||
      (filter !== '' && filter !== 'All')
    ) {
      isInitial = false;
      return;
    }

    dispatch(
      fetchWork({ category: filter, page: page, per: per, total: totalPages })
    ).then(() => {
      setLoader(false);
    });
  }, [loader]);

  // useEffect(() => {
  //   if (filter)
  //     dispatch(
  //       fetchWork({ category: filter, page: page, per: per, total: totalPages })
  //     );
  // }, [filter]);

  return (
    <div className="work-page">
      <PageTitle title="CHECK OUT WHAT I CAN DO" />

      <Container>
        <Row>
          <Col xs={12} sm={9}>
            <div className="filter-work">
              <div
                value="All"
                onClick={filetrWork}
                className={
                  filter == 'All' || filter == undefined || filter == ''
                    ? 'active'
                    : ''
                }
              >
                <h5>All</h5>
              </div>
              <div className="top-3">/</div>
              <div
                value="Print"
                onClick={filetrWork}
                className={filter == 'Print' ? 'active' : ''}
              >
                <h5>Print</h5>
              </div>
              <div className="top-3">/</div>
              <div
                value="Photography"
                onClick={filetrWork}
                className={filter == 'Photography' ? 'active' : ''}
              >
                <h5>Photography</h5>
              </div>
              <div className="top-3">/</div>
              <div
                value="Web"
                onClick={filetrWork}
                className={filter == 'Web' ? 'active' : ''}
              >
                <h5>Web</h5>
              </div>
              <div className="top-3">/</div>
              <div
                value="Applications"
                onClick={filetrWork}
                className={filter == 'Applications' ? 'active' : ''}
              >
                <h5>Applications</h5>
              </div>
            </div>
          </Col>
          <Col>
            <div className="view-work">
              <i
                className={
                  view === 'grid' ? 'fas fa-th-large active' : 'fas fa-th-large'
                }
                value="grid"
                onClick={changeView}
              ></i>
              <i
                className={
                  view === 'list' ? 'fas fa-bars active' : 'fas fa-bars'
                }
                value="list"
                onClick={changeView}
              ></i>
            </div>
          </Col>
        </Row>
        <Row className="wokr-images">
          {view === 'grid' && works && works.length > 0
            ? works.map((item, i) => {
                return (
                  <GridView
                    key={i}
                    item={item}
                    numCol={screen.width < 800 ? 6 : 4}
                  />
                );
              })
            : works.map((item, i) => <ListView key={i} item={item} />)}
          {works.length === 0 && loader === false && (
            <h3>Don't have resutls</h3>
          )}
        </Row>
        <Row>
          {loader &&
          (filter == 'All' || filter == undefined) &&
          page < totalPages ? (
            <h5>Loader...</h5>
          ) : (
            ''
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Work;
