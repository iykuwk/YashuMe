import './Skills.css'

const skillGroups = [
  {
    category: 'Languages',
    icon: '💻',
    color: 'green',
    skills: ['C', 'C++', 'Python', 'Solidity', 'Bash Scripting', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Frameworks & Tools',
    icon: '🔧',
    color: 'blue',
    skills: ['Truffle', 'Remix IDE', 'Metamask', 'Next.js', 'Docker', 'Nmap', 'SQLMap', 'FFUF'],
  },
  {
    category: 'Technologies',
    icon: '⚙️',
    color: 'purple',
    skills: ['Kali Linux', 'Git', 'MATLAB', 'PEStudio', 'ProcessHacker', 'Simulink', 'x64dbg', 'IPFS'],
  },
  {
    category: 'AI/ML Concepts',
    icon: '📦',
    color: 'green',
    skills: ['RAG', 'LLMs', 'Llama', 'CNN-LSTM', 'Reinforcement Learning', 'Transfer Learning', 'XAI'],
  },
  {
    category: 'OT/ICS Security',
    icon: '🛠️',
    color: 'blue',
    skills: ['Suricata', 'Malcolm', 'CALDERA', 'MITRE ATT&CK for ICS', 'ICS/OT Monitoring', 'Alert Triage'],
  },
  {
    category: 'Security Expertise',
    icon: '🔐',
    color: 'purple',
    skills: ['OWASP Top 10', 'Bug Bounty', 'CTF', 'Web App Pentesting', 'Malware Analysis', 'Reverse Engineering', 'Win32 API', 'RC4 Encryption'],
  },
]

const colorMap = {
  green: 'tag-green',
  blue: 'tag-blue',
  purple: 'tag-purple',
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner">
        <div className="skills-header reveal">
          <h2 className="section-title">Tech Arsenal</h2>
          <div className="divider" />
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className="skill-group card reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="sg-header">
                <span className="sg-icon">{group.icon}</span>
                <h3 className="sg-title">{group.category}</h3>
              </div>
              <div className="sg-tags">
                {group.skills.map(skill => (
                  <span key={skill} className={`tag ${colorMap[group.color]}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency highlights */}
        <div className="prof-section reveal">
          <h3 className="prof-title">Core Proficiencies /10</h3>
          <div className="prof-bars">
            {[
              { label: 'Cybersecurity & Pentesting', val: 8.2 },
              { label: 'Blockchain / Solidity', val: 7.8 },
              { label: 'C / C++ / Win32 API', val: 7.5 },
              { label: 'Python & Scripting', val: 8.0 },
              { label: 'Web Development', val: 7.0 },
            ].map(item => (
              <div key={item.label} className="prof-bar-item">
                <div className="prof-bar-label">
                  <span>{item.label}</span>
                  <span className="prof-val">{item.val}/10</span>
                </div>
                <div className="prof-bar-track">
                  <div
                    className="prof-bar-fill"
                    style={{ '--target': item.val }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
