import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Cards from '../utils/Cards';
import { LibraryContainer } from '../../styleComponents/home/LibraryStyle';
import Axios from '../../utils/httpClient';
import SimpleLoading from '../layout/SimpleLoading';

const Library = () => {
  const { t } = useTranslation();
  const [library, setLibrary] = useState([]);
  const [loading, setLoading] = useState([]);
  const getWorks = () => {
    Axios()
      .get('/works')
      .then(res => {
        setLibrary(res?.data ?? []);
      })
      .catch(r => {})
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getWorks();
  }, []);

  return (
    <LibraryContainer>
      <div className="library">
        <hr />
        <h2 className="library_title">{t('library.resourceLibrary')}</h2>
        {loading ? (
          <SimpleLoading />
        ) : (
          <>
            <Cards library={library} updateLibrary={l => setLibrary(l)} />
            <div className="show_target">
              <Link to="/library" className="show">
                {t('library.showMorePapers')} +50
              </Link>
            </div>
          </>
        )}
      </div>
    </LibraryContainer>
  );
};
export default Library;
