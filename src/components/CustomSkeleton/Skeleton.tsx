interface Props {
  width: number | string;
  height: number | string;
  fullRounded?: boolean;
}

const Skeleton: React.FC<Props> = ({ width, height, fullRounded }) => {
  return (
    <p
      className="h-4 w-full bg-gray-400"
      style={{ width: width, height: height, borderRadius: fullRounded ? "100%" : "12px" }}
    ></p>
  );
}

export default Skeleton;