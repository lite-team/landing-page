import Container from './Container';
import TeamMember from './TeamMember';

// Sample team data - replace with actual team members
const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'iOS Developer',
    photo: '/team/member1.jpg',
    twitter: 'https://twitter.com/alexjohnson',
    github: 'https://github.com/alexjohnson',
    linkedin: 'https://linkedin.com/in/alexjohnson'
  },
  {
    id: 2,
    name: 'Sarah Kim',
    role: 'UI/UX Designer',
    photo: '/team/member2.jpg',
    twitter: 'https://twitter.com/sarahkim',
    github: 'https://github.com/sarahkim',
    linkedin: 'https://linkedin.com/in/sarahkim'
  },
  {
    id: 3,
    name: 'Michael Zhang',
    role: 'Backend Developer',
    photo: '/team/member3.jpg',
    twitter: 'https://twitter.com/michaelzhang',
    github: 'https://github.com/michaelzhang',
    linkedin: 'https://linkedin.com/in/michaelzhang'
  },
];

export default function TeamSection() {
  return (
    <Container id="team" className="bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Team</h2>
      <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12">
        Meet the passionate professionals behind Lite's iOS applications.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
        {teamMembers.map(member => (
          <TeamMember
            key={member.id}
            name={member.name}
            role={member.role}
            photo={member.photo}
            twitter={member.twitter}
            github={member.github}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </Container>
  );
}