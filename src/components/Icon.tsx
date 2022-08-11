const Icon = (props: { src: string; alt: string; onClick: () => void }) => {
  return (
    <div
      onClick={props.onClick}
      className="shadow-md h-32 lg:h-100 w-32 lg:w-100 rounded-2xl lg:rounded-3xl overflow-hidden"
    >
      <a href={props.src} download>
        <img height={200} width={200} src={props.src} alt={props.alt} />
      </a>
    </div>
  );
};

export default Icon;
