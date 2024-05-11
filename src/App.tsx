import React, { useState } from 'react';
import './App.css'; // 스타일 파일 불러오기

enum Page {
  One = '페이지#01',
  Two = '페이지#02',
  Three = '페이지#03'
}

const PageOne: React.FC = () => {
  return ( 
    <div>
      <h2>업무 하나를 위한 페이지입니다</h2>
    </div>
  );
};

const PageTwo: React.FC = () => {
  return (
    <div>
      <h2>업무 둘을 위한 페이지입니다</h2>
      <h2>업무 둘을 위한 페이지입니다</h2>
    </div>
  );
};

const PageThree: React.FC = () => {
  return (
    <div>
      <h2>업무 셋을 위한 페이지입니다</h2>
      <h2>업무 셋을 위한 페이지입니다</h2>
      <h2>업무 셋을 위한 페이지입니다</h2>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© 2024 SmartSpace KDM Consulting Co,.</p>
    </footer>
  );
};


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Two);
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" onClick={() => setCurrentPage(Page.One)}>{Page.One}</a>
            </li>
            <li className="nav-item">
              <a href="#" onClick={() => setCurrentPage(Page.Two)}>{Page.Two}</a>
            </li>
            <li className="nav-item">
              <a href="#" onClick={() => setCurrentPage(Page.Three)}>{Page.Three}</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {currentPage === Page.One ? <PageOne /> : currentPage === Page.Two ? <PageTwo /> : <PageThree />}
      </main>
      <Footer/>
    </div>
  );
};

export default App;
