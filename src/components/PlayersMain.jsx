// src/components/PlayersMain.jsx
import { useState } from "react";
import { motion } from "framer-motion";

// Player data 
const players = [
  {
    name: "Stephen Colgan",
    team: "1st XI",
    role: "Captain, Batsman, Professional Slip Fielder",
  },
  {
    name: "Michael Glass",
    team: "1st XI",
    role: "Vice Captain, Top Order Batsman, Off Spin Bowler",
  },
  {
    name: "Jamie Watt",
    team: "1st XI, 2nd XI",
    role: "Seam Bowler",
  },
  {
    name: "Jason Kennedy",
    team: "",
    role: "Seam Bowler",
  },
  {
    name: "Sam Henry",
    team: "",
    role: "",
  },
  {
    name: "Matthew Dick",
    team: "2nd XI",
    role: "Wicketkeeper",
  },
  {
    name: "William Montgomery",
    team: "",
    role: "",
  },
  {
    name: "Trevor McBurney",
    team: "",
    role: "",
  },
  {
    name: "Lee McConaghie",
    team: "",
    role: "Batsmen",
  },
  {
    name: "Peter Bristow",
    team: "1st XI",
    role: "Batsman",
  },
  {
    name: "Scott Willoughby",
    team: "1st XI",
    role: "Batsmen, Wicketkeeper",
  },
  {
    name: "Callum Crease",
    team: "",
    role: "",
  },
  {
    name: "Anthony ' The Ice Man' Frazer",
    team: "1st XI",
    role: "Seam Bowler",
  },
  {
    name: "Josh Scott",
    team: "1st XI",
    role: "Seam Bowler",
  },
  {
    name: "Matthew Mairs",
    team: "",
    role: "",
  },
  {
    name: "Neil Fullerton",
    team: "",
    role: "Wicket Keeping Batsmen",
  },
  {
    name: "Ben Gilmore",
    team: "Midweek XI",
    role: "Captain, Seam Bowler",
  },
  {
    name: "Moin Ahmed",
    team: "2nd XI",
    role: "Seam Bowler",
  },
  {
    name: "Matthew Bell",
    team: "",
    role: "",
  },
  {
    name: "Shiva Vaddepally",
    team: "",
    role: "Seam Bowler",
  },
  {
    name: "Jack McCrickard",
    team: "",
    role: "",
  },
  {
    name: "Michael Caithness",
    team: "1st XI",
    role: "Batsmen, Wicketkeeper",
  },
  {
    name: "Stevie Bristow",
    team: "1st XI",
    role: "Batsmen, Part-time Spin Bowler",
  },
];

const PlayersMain = () => {
  // State for filters
  const [selectedTeam, setSelectedTeam] = useState("All");
  const [selectedRole, setSelectedRole] = useState("All");

  // Animation variants for section fade-in
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Filter players based on selected team and role
  const filteredPlayers = players.filter((player) => {
    const teamMatch =
      selectedTeam === "All" ||
      player.team.toLowerCase().includes(selectedTeam.toLowerCase());
    const roleMatch =
      selectedRole === "All" ||
      player.role.toLowerCase().includes(selectedRole.toLowerCase());
    return teamMatch && roleMatch;
  });

  return (
    <section className="players-main">
      <div className="container players-main-content">
        <motion.h1
          className="players-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Player Directory
        </motion.h1>

        {/* Filter Controls */}
        <motion.div
          className="filter-controls"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="filter-group">
            <label htmlFor="team-filter" className="filter-label">
              Filter by Team:
            </label>
            <select
              id="team-filter"
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Teams</option>
              <option value="1st XI">1st XI</option>
              <option value="2nd XI">2nd XI</option>
              <option value="3rd XI">3rd XI</option>
              <option value="Midweek">Midweek Team</option>
              <option value="Women's Team">Women's Team</option>
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="role-filter" className="filter-label">
              Filter by Role:
            </label>
            <select
              id="role-filter"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Roles</option>
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
              <option value="Wicketkeeper">Wicketkeeper</option>
            </select>
          </div>
        </motion.div>

        {/* Player Grid */}
        {filteredPlayers.length > 0 ? (
          <div className="players-grid">
            {filteredPlayers.map((player, index) => (
              <motion.div
                key={index}
                className="player-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
              >
                <h2 className="player-name">{player.name}</h2>
                <p className="player-detail">
                  <strong>Team:</strong> {player.team}
                </p>
                <p className="player-detail">
                  <strong>Role:</strong> {player.role}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="no-players-message">No players match the selected filters.</p>
        )}
      </div>
    </section>
  );
};

export default PlayersMain;