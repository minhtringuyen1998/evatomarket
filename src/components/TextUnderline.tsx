import "../assets/css/textunderline.scss";

const TextUnderline = (props: { children: any }) => {
  return <span className="text_underline">{props.children}</span>;
};

export default TextUnderline;
