import { Link } from "react-router-dom";

interface PropTypes {
  description: string;
  link: string;
  text: string;
}

const LinkPages = ({ description, link, text }: PropTypes) => (
  <div className="flex mt-2 justify-center">
    <p className=" text-[14px] md:text-[16px]n text-white">{description}</p>
    <Link
      to={link}
      className="pl-2 underline font-medium text-small md:text-normal text-yellow-300"
    >
      {text}
    </Link>
  </div>
);

export default LinkPages;
