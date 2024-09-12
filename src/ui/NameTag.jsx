export function NameTag({ name }) {
  return (
    <div className="flex gap-[16px] items-center">
      <div className="bg-red-500 w-[20px] h-[40px] rounded-[8px]"></div>
      <span className="text-red font-bold">{name}</span>
    </div>
  );
}
