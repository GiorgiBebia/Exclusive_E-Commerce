export function ViewAllProducts({ margintop, marginbottom }) {
  return (
    <div
      className="flex justify-center"
      style={{
        marginTop: margintop,
        marginBottom: marginbottom,
      }}
    >
      <button className="w-[234px] h-[56px] bg-red-500 border-none rounded-[4px] mx-auto cursor-pointer text-[16px] text-white">
        View All Products
      </button>
    </div>
  );
}
