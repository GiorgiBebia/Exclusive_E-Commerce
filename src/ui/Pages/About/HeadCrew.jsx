import { Crew } from "./Crew";

export function HeadCrew() {
  return (
    <div className="max-w-[1170px] w-full mx-auto mt-[140px] flex justify-between">
      <Crew
        img="img/tomCruise.png"
        alt="tomCruise"
        name="Tom Cruise"
        position="Founder & Chairman"
      />
      <Crew
        img="img/emmaWatson.png"
        alt="emmaWatson"
        name="Emma Watson"
        position="Managing Director"
      />
      <Crew
        img="img/willSmith.png"
        alt="willSmith"
        name="Will Smith"
        position="Product Designer"
      />
    </div>
  );
}
