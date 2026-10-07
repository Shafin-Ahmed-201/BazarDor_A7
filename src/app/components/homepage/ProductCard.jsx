const ProductCard = ({ product }) => {
  const banglaNumber = (value) =>
    Number(value).toLocaleString("bn-BD");

  return (
    <div className="w-full max-w-90 rounded-[18px] border border-[#dce3dc] bg-[#f8faf8] px-4 py-4">
      {/* Product */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f0f4f0] text-2xl">
          {product.image}
        </div>

        <div>
          <h2 className="text-[16px] font-semibold text-[#26302a]">
            {product.nameBn}
          </h2>

          <p className="text-[13px] text-[#4d554f]">
            প্রতি {product.unit}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-[12px] text-[#59605b]">
            আজকের দাম
          </p>

          <p className="mt-0.5 text-[#26302a]">
            <span className="text-[20px] font-bold">
              {banglaNumber(product.today)}
            </span>{" "}
            <span className="text-[13px]">
              টাকা
            </span>
          </p>
        </div>

        {/* Price Change */}
        <span
          className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
            product.change.dir === "up"
              ? "bg-[#fff0f0] text-[#e63946]"
              : "bg-[#effaf1] text-[#239b56]"
          }`}
        >
          {product.change.dir === "up" ? "▲" : "▼"}{" "}
          {banglaNumber(product.change.pct)}%
        </span>
      </div>
    </div>
  );
};

export default ProductCard;