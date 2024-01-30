import {
  Link,
} from "react-router-dom";
function Google() {
  return (
    <>
      <div className="container flex justify-center items-center flex-col h-[100vh] cursor-pointer">
        <nav className="flex justify-end items-end h-10 top-4 p-2 gap-3 text-[18px] mt-4 absolute right-4">
          <h2 className="hover:underline cursor-pointer">Gmail</h2>
          <h2 className="hover:underline cursor-pointer">Images</h2>
          <i className="bi bi-grid-3x3-gap-fill"></i>
          <div className="bg-purple-600 h-[30px] w-[30px] rounded-[50%] text-white font-semibold flex justify-center items-center">
            A
          </div>
        </nav>
        <img src="public/glogos.png" alt="" className="w-72 mt-[-50px]" />
       
        <div className="text-gray-500 inputste flex">
          <i className="bi bi-search"></i>
          <Link to='/search'>
              <input
            type="text"
            placeholder="Search Google or type a URL"
            className="bg-white w-[500px] ml-5"
          />
          </Link>
          <img src="public/miclogo.png" alt=""  className="h-5"/>
          <img src="public/cmgoogle.png" alt="" className="h-5 ml-4"/>
        </div>

        <button className="rounded-[20px] cursor-pointer text-blue-500 p-2 lolo"><i className="bi bi-pencil"></i> Customize Chrome</button>
      </div>
    </>
  );
}

export default Google;
