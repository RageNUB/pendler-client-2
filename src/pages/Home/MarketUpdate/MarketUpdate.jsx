import Marquee from "react-fast-marquee";
import logo from "../../../assets/logoIcon.png"
import { Link } from "react-router-dom";

const MarketUpdate = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Marquee pauseOnHover={true} autoFill={true}>
        <div className="w-52 lg:w-72 mt-16 mb-10 bg-base-100 rounded-lg p-5 shadow-md hover:shadow-xl ml-4">
            <img className="w-36 -mt-14 -mb-12 -ml-14" src={logo} alt="" />
            <h1 className="text-xl">Hello Pendler</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos culpa fugiat minima id iusto inventore!</p>
            <Link><p className="text-primary mt-2">Read Full Article</p></Link>
        </div>
        <div className="w-52 lg:w-72 mt-16 mb-10 bg-base-100 rounded-lg p-5 shadow-md hover:shadow-xl ml-4">
            <img className="w-36 -mt-14 -mb-12 -ml-14" src={logo} alt="" />
            <h1 className="text-xl">Hello Pendler</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos culpa fugiat minima id iusto inventore!</p>
            <Link><p className="text-primary mt-2">Read Full Article</p></Link>
        </div>
        <div className="w-52 lg:w-72 mt-16 mb-10 bg-base-100 rounded-lg p-5 shadow-md hover:shadow-xl ml-4">
            <img className="w-36 -mt-14 -mb-12 -ml-14" src={logo} alt="" />
            <h1 className="text-xl">Hello Pendler</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos culpa fugiat minima id iusto inventore!</p>
            <Link><p className="text-primary mt-2">Read Full Article</p></Link>
        </div>
        <div className="w-52 lg:w-72 mt-16 mb-10 bg-base-100 rounded-lg p-5 shadow-md hover:shadow-xl ml-4">
            <img className="w-36 -mt-14 -mb-12 -ml-14" src={logo} alt="" />
            <h1 className="text-xl">Hello Pendler</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos culpa fugiat minima id iusto inventore!</p>
            <Link><p className="text-primary mt-2">Read Full Article</p></Link>
        </div>
      </Marquee>
    </div>
  );
};

export default MarketUpdate;
