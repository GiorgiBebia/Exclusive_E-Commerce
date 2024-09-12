export function Coupon() {
  return (
    <div className="flex gap-[16px]">
      <input
        className="w-[300px] h-[52px] border border-gray-200 rounded-[4px]"
        type="text"
        name="ApplyCoupon"
        id="ApplyCoupon"
        placeholder="Coupon Code"
      />
      <button className="w-[211px] h-[56px] bg-red-500 border-none rounded-[4px] text-white text-[16px]">
        Apply Coupon
      </button>
    </div>
  );
}
