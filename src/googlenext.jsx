import { useState } from 'react';
function Googlenext() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  // const API_KEY=`AIzaSyBq5jbpO8oy_oPwBDWWenlUqcZaBmcRhn0`
  const url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBPCv2EpIUCPlpwM8p_-ae9W4XZp8gmQEo&cx=948dbadda758243e3&q=${search}&limit=10`;

  const hc = async () => {
    const fet = await fetch(url);
    const res = await fet.json();
    console.log(res);
    setData(res.items);
  };

  return (
    <>
      <div>
        <nav className="flex ml-20 items-center">
          <img src="/glogos.png" alt="" className="w-36" />
          <div className="text-gray-500 inp flex">
            {/* <i className="bi bi-search"></i> */}
            <input
              type="text "
              placeholder="Search Google or type a URL"
              className="bg-white w-[500px] ml-5 border-none outline-none hol"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <img src="/miclogo.png" alt="" className="h-5 cursor-pointer" />
            <img
              src="/cmgoogle.png"
              alt=""
              className="h-5 ml-4 cursor-pointer"
            />
            <img
              src="/sbg.png"
              onClick={hc}
              alt=""
              className="h-5 cursor-pointer"
            />
            <div className="absolute top-14 right-[40px] flex w-[100px] font-semibold text-xl items-center justify-between">
              <i className="bi bi-gear"></i>
              <i className="bi bi-grid-3x3-gap-fill"></i>
              <div className="bg-purple-600 h-[30px] w-[30px] rounded-[50%] text-white font-semibold flex justify-center items-center">
                A
              </div>
            </div>
          </div>
        </nav>
        <nav className="flex items-center ml-20 gap-2">
          <button className="btn">News</button>
          <button className="btn">Images</button>
          <button className="btn">Videos</button>
          <button className="btn">Shopping</button>
          <button className="btn">Books</button>
          <button className="btn">Flights</button>
          <button className="btn">Finance</button>
          <div className="absolute top-[125px] gap-1 right-[40px] text-gray-500 flex items-center">
            <button className="blind">All filters</button>
            <i className="bi bi-caret-down-fill pt-1"></i>
            &nbsp;&nbsp;&nbsp;|
            <button className="blind">Tools</button>
            &nbsp;&nbsp;&nbsp;
            <button className="blind">Safe search</button>
            <i className="bi bi-caret-down-fill pt-1"></i>
          </div>
        </nav>
        <div className="w-full h-[1px] bg-gray-200 mt-4"></div>
      </div>

      {data.map((i) => {
        const { formattedUrl, displayLink, title, htmlSnippet, link } = i;
        return (
          <>
            <div className="ml-20 mt-10 h-[100%]">
              <div className="text-gray-400">{formattedUrl}</div>
              <div className="cursor-pointer">
                <a href={link}>{displayLink}</a>
              </div>
              <div className="text-blue-500 text-xl">{title}</div>
              <div className="w-[600px] text-[18px] text-gray-400 h-[100px] overflow-hidden">
                {htmlSnippet}
              </div>
            </div>
          </>
        );
      })}
      <div className="relative bottom-0 right-0 left-0">
        <div className="bg-gray-50 w-full text-gray-400 p-4">Pakistan</div>
        <div className="w-full h-[1px] bg-gray-400"></div>
        <div className="bg-gray-50 w-full text-gray-400 p-4 flex justify-between items-center">
          <ul className="list-unstyled  flex gap-3">
            <li>About</li>
            <li>Advertising</li>
            <li>Business</li>
            <li>How searchworks</li>
          </ul>
          <ul className="list-unstyled flex gap-3">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Settings</li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Googlenext;
