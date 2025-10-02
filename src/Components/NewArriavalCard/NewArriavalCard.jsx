import Button from "../Button/Button";

const NewArriavalCard = ({
  brandLogoSrc,
  discounText,
  buttonConfig,
  backgroundColor,
  productImgScr,
}) => {
  const cardBgColor = backgroundColor || "#115414";
  return (
    <div
      style={{ backgroundColor: cardBgColor }}
      className={`card card-side h-full p-8 flex items-center justify-between text-white rounded-2xl`}
    >
      <div className="flex flex-col gap-8">
        <img className="w-fit object-cover" src={brandLogoSrc} alt="" />
        <div className="card-actions justify-start">
          <Button style={buttonConfig?.style}>{buttonConfig.text}</Button>
        </div>

        <p className="text-4xl">{discounText}</p>
      </div>
      <figure>
        <img className="" src={productImgScr} alt="" />
      </figure>
    </div>
  );
};

export default NewArriavalCard;
