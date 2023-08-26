import ImageLoading from "../components/ImageLazy";
import "../assets/css/blogitem.scss";
import { AiOutlineLink } from "react-icons/ai";
import clsx from "clsx";

interface IBlogProps {
  imgUrl: string;
  term: string;
  title: string;
  date: string;
}
const BlogItem = (props: IBlogProps) => {
  const { imgUrl, term, title, date } = props;
  return (
    <div className={clsx("container_blog")}>
      <div className="wrapper_term">
        <p>{term}</p>
      </div>
      <div className="img_container">
        <ImageLoading dataSrc={imgUrl} />
        <div className="filter_green">
          <AiOutlineLink size={40} color="white" />
        </div>
      </div>
      <div className="blog_content">
        <p>
          {date} <span className="line"></span>
        </p>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default BlogItem;
