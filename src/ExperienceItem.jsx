import { Flex } from '@radix-ui/themes';
import React from 'react';

export default function ExperienceItem({ logo, title, role, location, date, technologies, coursework }) {
  return (
    <div>
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <img src={logo} alt={title} style={{...styles.logo}} />
        <div>
          <div style={styles.titleRow}>
            <span style={styles.title}>{title}</span>
            {technologies && technologies.length > 0 && ( 
                <div>
               {technologies.map((tech, index) => (
                <span style={styles.technologyBadge} key={index}>{tech}</span>
               ))} 
               </div>
            )}
          </div>
          <span style={styles.role}>{role}</span>
        </div>
      </div>
        <Flex direction="column" style={styles.rightSection}>
        <span style={styles.location}>{location}</span>
        <span style={styles.date}>{date}</span>
        </Flex>
        </div>
        {coursework && <span style={styles.coursework}>{coursework}</span> }
        </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '40px',
    height: '40px',
    borderRadius: '5px',
    marginRight: '10px',
    objectFit: 'contain',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1rem',
    marginRight: '8px',
  },
  technologyBadge: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '5px',
    padding: '2px 6px',
    fontSize: '0.75rem',
    margin: '0.1rem',
  },
  coursework: {
    fontSize: '0.9rem',
  },
  role: {
    fontSize: '0.9rem',
    color: '#aaa',
  },
  rightSection: {
    textAlign: 'right',
  },
  location: {
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  date: {
    fontSize: '0.9rem',
    color: '#aaa',
  },
  description: {
    marginTop: '8px', // Space above the description
    color: '#ddd', // Slightly lighter color for the description text
    fontSize: '0.85rem',
    lineHeight: '1.4', // Better readability
  },
};
