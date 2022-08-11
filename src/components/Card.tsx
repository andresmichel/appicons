const Card = (props: {
  name: string;
  src: string;
  alt: string;
  onClick: () => void;
}) => (
  <div className="flex w-1/4" onClick={props.onClick}>
    <div className="flex justify-center items-center m-2 w-full h-20 hover:bg-gray-100 rounded border border-gray-200 cursor-pointer">
      <span className="material-symbols-rounded">
        {props.name.replace("-fill", "")}
      </span>
    </div>
  </div>
);

export default Card;
