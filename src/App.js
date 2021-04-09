import "./App.css";
import user from "./assets/images/user.png";
import shopbag from "./assets/images/shopbag.png";
import search from "./assets/images/search.png";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div class="wrapper">
          <h1 class="logo">Bookshop</h1>
          <nav>
            <ul>
              <li>
                <a href="#" data-text="Books" className="active">
                  Books
                </a>
              </li>
              <li>
                <a href="#" data-text="Audiobooks">
                  Audiobooks
                </a>
              </li>
              <li>
                <a href="#" data-text="Stationery & Gifts">
                  Stationery & Gifts
                </a>
              </li>
              <li>
                <a href="#" data-text="Blog">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <ul>
            <li>
              <a href="#">
                <img src={user} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={search} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={shopbag} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
