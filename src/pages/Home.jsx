import { useEffect, useState } from 'react';

const Home = ({ getRecipe }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    onSearch()
  }, [search])

  const onSearch = () => {
    if (search.length >= 3) {
      getRecipe(search);
    };
  };

  return (
    <header className="home">
      <div className="searchBar">
        <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
    </header>
  );
};

export default Home;
