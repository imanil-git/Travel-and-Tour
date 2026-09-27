export function TeamMemberCard({ member, className = "" }) {
  return (
    <article className={`relative w-full h-72 rounded-3xl overflow-hidden ${className}`}>
      <img loading="lazy" decoding="async" src={member.img} alt={member.name}
        className="w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent text-white">
        <div className="absolute left-4 bottom-2">
          <h3>{member.name}</h3>
          <p>{member.post}</p>
        </div>
      </div>
    </article>
  );
}
