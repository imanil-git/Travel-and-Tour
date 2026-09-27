import { TeamMemberCard } from "./TeamMemberCard";
import Team1 from "../../assets/Team Member/PotraitPhoto.webp";
import Team2 from "../../assets/Team Member/Potrait.webp";

const imageGrid = [
  {
    id: 1,
    name: "Timesh Bro",
    post: "Manager",
    img: Team1,
  },
  {
    id: 2,
    name: "Timesh Bro",
    post: "Manager",
    img: Team1,
  },
  {
    id: 3,
    name: "Timesh Bro",
    post: "Manager",
    img: Team1,
  },
  {
    id: 4,
    name: "Timesh Bro",
    post: "Manager",
    img: Team1,
  },
  {
    id: 5,
    name: "Timesh Bro",
    post: "Manager",
    img: Team2,
  },
  {
    id: 6,
    name: "Timesh Bro",
    post: "Manager",
    img: Team2,
  },
  {
    id: 7,
    name: "Timesh Bro",
    post: "Manager",
    img: Team2,
  },
  {
    id: 8,
    name: "Timesh Bro",
    post: "Manager",
    img: Team2,
  },
  {
    id: 9,
    name: "Timesh Bro",
    post: "Manager",
    img: Team2,
  },
];

export const TeamMember = () => {
  return (
    <section className="py-24">
      <div className="w-full px-4 sm:px-10 lg:px-16">
        <h2 className="font-heading text-2xl md:text-3xl mb-10">
          Team Members
        </h2>
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {imageGrid.slice(0, 4).map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {imageGrid.slice(4, 9).map((member) => (
              <TeamMemberCard key={member.id} member={member} className="md:h-96" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
