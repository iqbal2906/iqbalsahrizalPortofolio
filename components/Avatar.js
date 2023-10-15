import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image src={"/photo.png"} height={678} width={737} alt="" className="translate-z w-full h-full" />
    </div>
  );
};

export default Avatar;
