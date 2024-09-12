import { NameTag } from "../NameTag";

export function NewArrival() {
  return (
    <div className="max-w-[1170px] w-full mx-auto mt-140px">
      <NameTag name="Featured" />
      <h2 className="text-[36px]">New Arrival</h2>
      <div className="flex mt-[60px] gap-[30px]">
        <div
          className="w-[570px] h-[600px] relative"
          style={{
            backgroundImage: `url("../img/playstation5.png")`,
          }}
        >
          <h3 className="absolute text-white top-[446px] left-[32px] text-[24px] mx-auto">
            Playstation 5
          </h3>
          <p className="absolute text-white top-[486px] left-[32px] w-[242px] text-[14px] mx-auto">
            Black and White version of the PS5 coming out on sale.
          </p>
          <span className="absolute text-white top-[544px] left-[32px] underline">
            Shop Now
          </span>
        </div>

        <div className="flex flex-col gap-[32px]">
          <div
            className="w-[570px] h-[284px] relative"
            style={{
              backgroundImage: `url("img/womensCollections.png")`,
            }}
          >
            <h3 className="absolute text-white top-[138px] left-[24px] text-[24px] mx-auto">
              Women's Collection
            </h3>
            <p className="absolute text-white top-[178px] left-[24px] w-[255px] text-[14px] mx-auto">
              Featured woman collections that give you another vibe.
            </p>
            <span className="absolute text-white top-[236px] left-[24px] underline">
              Shop Now
            </span>
          </div>

          <div className="flex gap-[30px]">
            <div
              className="w-[270px] h-[284px] relative"
              style={{
                backgroundImage: `url("img/speakers.png")`,
              }}
            >
              <h3 className="absolute text-white top-[175px] left-[24px] text-[24px] mx-auto">
                Speakers
              </h3>
              <p className="absolute text-white top-[215px] left-[24px] w-[191px] text-[14px]">
                Amazon wireless speakers
              </p>
              <span className="absolute text-white top-[240px] left-[24px] underline">
                Shop Now
              </span>
            </div>

            <div
              className="w-[270px] h-[284px] relative"
              style={{
                backgroundImage: `url("img/perfume.png")`,
              }}
            >
              <h3 className="absolute text-white top-[175px] left-[24px] text-[24px] mx-auto">
                Perfume
              </h3>
              <p className="absolute text-white top-[215px] left-[24px] w-[191px] text-[14px]">
                GUCCI INTENSE OUD EDP
              </p>
              <span className="absolute text-white top-[240px] left-[24px] underline">
                Shop Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
