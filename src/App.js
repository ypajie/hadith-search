import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';
import logo from './assets/img/logo.png';


const searchClient = algoliasearch('UY8QO2GZ9K', 'd686690b88d52b974b26d72febbd09be');

function App() {
  return (
    <div>
      <header className="header">
      <img src={logo} width='100'></img>
        <h1 className="header-title">
         Mesin Pencari Hadits
        </h1>
        
      </header>

      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="hadith">
          <div className="search-panel">
            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: 'Ketik topik atau penggalannya untuk mencari',
                }}
              />
              <Hits hitComponent={Hit} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

function Hit(props) {
  return (
    <article>
      <h5>{props.hit.author} - Kitab {props.hit.book}</h5>
       <p><b>Bab: {props.hit.chapter}</b></p>
       <h5>No. {props.hit.number}</h5>
       <p dangerouslySetInnerHTML={{__html: props.hit.content}} />
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
