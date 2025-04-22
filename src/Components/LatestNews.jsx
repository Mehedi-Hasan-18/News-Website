import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-2 bg-gray-100 px-3 py-2">
            <p className="bg-[#D72050] text-white px-3 py-2">Latest</p>
            <Marquee pauseOnHover={true} className=" space-x-10">
                <Link to={'/news'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ipsam earum autem recusandae enim?</Link>
                <Link to={'/news'}> Similique aspernatur maiores sunt. Placeat molestiae maiores natus culpa iste.</Link>
                <Link to={'/news'}>Lorem ipsum, dolor sit amet aspernatur maiores sunt. Placeat molestiae maiores natus culpa iste.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;