// src/components/AboutMain.jsx
import { motion } from "framer-motion";

const AboutMain = () => {
  // Animation variants for section fade-in
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="about-main">
      <div className="container about-main-content">
        {/* History Section */}
        <motion.div
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="section-title">History</h2>
          <div className="section-underline"></div>
          <div className="section-content">
            <p>
              Ballymena Cricket Club was founded in 1878, establishing a rich legacy in cricket. Over the years, the club has celebrated numerous victories, including winning the LVS T20 Trophy in 2021 as well has having numerous league and cup titles in previous years.
              Currently, the club sits in Senior League 1 where we are established as one of the main players in the league. Finishing 2nd on multiple occasions in recent year. 
            </p>
          </div>
        </motion.div>

        {/* Teams Section */}
        <motion.div
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="section-title">Teams</h2>
          <div className="section-underline"></div>
          <div className="section-content">
            <h3 className="subheading">Men's Teams</h3>
            <p>
              We have three men's teams: 1st XI in Senior League 1, Second XI in Junior League 4, a 3rd XI in Junior League 9, and a midweek team in the Midweek North League.
            </p>

            <h3 className="subheading">Women's Team</h3>
            <p>
              Our women's team competes with passion and pride, representing Ballymena Cricket Club in Junior League Section 1.
            </p>

            <h3 className="subheading">Junior Teams</h3>
            <p>
              We offer junior cricket for ages ranging from under 15 to under 9, fostering the next generation of cricketers.
            </p>
          </div>
        </motion.div>

        {/* Training Section */}
        <motion.div
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="section-title">Training days</h2>
          <div className="section-underline"></div>
          <div className="section-content">
            <h3 className="subheading">Men's Teams</h3>
            <p>
              Mens 1st and 2nd XI - Wednesday 6:30pm-8:30pm @ Cricket Club
              <br></br>
              Mens 3rd XI + Midweek - Monday 6:30pm-8:30pm @ Cricket Club
            </p>

            <h3 className="subheading">Women's Team</h3>
            <p>
              Women's 1st XI - Thursday 6:30pm-8:30pm @ Cricket Club
            </p>

            <h3 className="subheading">Junior Teams</h3>
            <p>
              Under 15s - Thursday 6:30pm-8:30pm @ Cricket Club
              <br></br>
              Under 9s to Under 13s - Mondays 6:30-8:30 @ Ballymena Academy
            </p>
          </div>
        </motion.div>

        {/* Teams Section */}
        <motion.div
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="section-title">Kit</h2>
          <div className="section-underline"></div>
          <div className="section-content">
          <h3 className="subheading">Men's and Women's Senior Kit</h3>
          <a
            href="https://www.teamwearireland.com/seniors-section"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop
          </a>

          <h3 className="subheading">Boy's and Girl's Junior Kit</h3>
          <a
            href="https://www.teamwearireland.com/youth-section"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop
          </a>

          </div>
        </motion.div>

        {/* Club Contacts Section */}
        <motion.div
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="section-title">Club Contacts</h2>
          <div className="section-underline"></div>
          <div className="section-content">
            <p>
              <strong>Chairman:</strong> Paul Black
            </p>
            <p>
              <strong>1st XI Captain:</strong> Stephen Colgan
            </p>
            <p>
              <strong>Youth Head Coach:</strong> Peter Bristow
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMain;