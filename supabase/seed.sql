-- Seed Skill Categories
INSERT INTO public.skill_categories (title, icon_name, skills, featured, display_order) VALUES
('Frontend Technologies', 'Code', ARRAY['React', 'JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'Vite'], ARRAY['React', 'JavaScript', 'TypeScript'], 1),
('UI Engineering & Performance', 'Monitor', ARRAY['Component Architecture', 'State Management', 'Performance Optimization', 'Responsive Design', 'Web APIs', 'Browser Optimization'], ARRAY['Component Architecture', 'Performance Optimization', 'Responsive Design'], 2),
('Development Stack & APIs', 'Layers', ARRAY['Node.js', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'CI/CD'], ARRAY['REST APIs', 'Git', 'Node.js'], 3),
('Tools & Collaboration', 'Wrench', ARRAY['VS Code', 'Chrome DevTools', 'Figma', 'Webpack', 'ESLint', 'Jest', 'Agile/Scrum', 'Cross-functional Teams'], ARRAY['Chrome DevTools', 'Agile/Scrum', 'Cross-functional Teams'], 4);

-- Seed Education
INSERT INTO public.education (institution, degree, duration, location, cgpa, highlight) VALUES
('Vellore Institute of Technology (VIT-AP University)', 'B.Tech in Computer Science & Engineering (Data Analytics)', '2023-2027', 'Amaravati, AP', '9.15 / 10.0', true),
('Saharanpur Public School (ISC Board)', 'Class XII - Science Stream', '2022', 'Saharanpur, UP', '84.8%', false),
('Saharanpur Public School (ICSE Board)', 'Class X', '2020', 'Saharanpur, UP', '97% (1st Rank in District)', true);

-- Seed Achievements
INSERT INTO public.achievements (title, description, category, icon_name) VALUES
('Amazon HackOn (2025)', 'Secured position in top 4% of teams (top 2,000 out of 50,000+), advancing to Round 3', 'Hackathon', 'Trophy'),
('Smart India Hackathon (SIH 2024)', 'Developed a full-stack web application prototype for Ministry of Education problem statement, delivering working product in 36 hours', 'Hackathon', 'Award'),
('Microsoft Learn Student Ambassadors - VIT-AP', 'Technical Mentor & Event Coordinator (Aug 2023-2024) - Conducted Python and Data Science workshops for 100+ students', 'Leadership', 'Users');

-- Seed Projects (Product Engineer Focus - Outcome-Driven)
INSERT INTO public.projects (title, overview, problem, role, methodology, results, tech_stack, image, github_link, demo_link) VALUES
(
  'MediSafe – Hospital Management Platform',
  'Drove 40% improvement in user engagement by building a data-informed hospital management platform serving 10,000+ users. Took end-to-end ownership from feature conception to impact measurement, combining React.js frontend with analytics to optimize patient, doctor, and staff workflows.',
  'Healthcare platform needed measurable improvements in user engagement and workflow efficiency',
  'Product Engineer with full ownership of frontend features and user engagement metrics',
  'Built component library with React.js, implemented A/B testing for UI improvements, tracked user behavior analytics, collaborated cross-functionally to align features with business goals',
  'Achieved 40% increase in user engagement, reduced workflow completion time by 25%, delivered reusable component system adopted across 5+ features',
  ARRAY['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Component Architecture', 'Analytics', 'A/B Testing'],
  '/assets/project-medicare.webp',
  'https://github.com/singhuday26',
  null
),
(
  'EduSphere360 – EdTech Product Platform',
  'Improved platform performance by 20% and drove user retention through data-driven feature development. As Product Engineer and Co-Founder, owned the entire frontend stack while using analytics to inform product decisions and measure feature impact on key business metrics.',
  'Educational platform needed performance optimization and data-driven product development to improve retention',
  'Product Engineer & Co-Founder with end-to-end ownership of frontend and product analytics',
  'Implemented performance monitoring, analyzed user behavior data to prioritize features, built component library, used metrics to validate product decisions',
  'Delivered 20% performance improvement, increased user retention by 15%, built analytics dashboard tracking 10+ product metrics, validated feature impact through data',
  ARRAY['React', 'JavaScript ES6+', 'TypeScript', 'Performance Optimization', 'Product Analytics', 'Data-Driven Development'],
  '/assets/project-edusphere.webp',
  'https://github.com/singhuday26',
  null
),
(
  'Customer Analytics Dashboard – Data Product',
  'Built interactive analytics dashboard processing 5k+ customer records, achieving 85% user engagement and driving data-informed business decisions. Combined frontend engineering with data visualization to deliver actionable insights that reduced customer churn by 12%.',
  'Business needed data visualization tool to reduce churn and improve customer insights',
  'Product Engineer specializing in data visualization and business impact measurement',
  'Implemented data visualization libraries, optimized query performance, collaborated with data team to define key metrics, validated dashboard impact on business decisions',
  'Achieved 85% user engagement with dashboard, enabled data-driven decisions reducing churn by 12%, optimized data rendering for 3x faster load times',
  ARRAY['JavaScript', 'TypeScript', 'Data Visualization', 'Performance Optimization', 'Analytics', 'Business Intelligence'],
  '/assets/project-churn.webp',
  'https://github.com/singhuday26',
  null
),
(
  'Smart IoT Waste Management – Real-time Product',
  'Achieved 90% accuracy in real-time waste classification by building responsive IoT interface with data-driven optimization. Owned full product cycle from sensor data integration to user interface, measuring and improving classification accuracy through iterative development.',
  'IoT system needed accurate real-time interface to optimize waste management operations',
  'Product Engineer with ownership of real-time interface and accuracy metrics',
  'Implemented real-time data streaming, analyzed sensor data patterns to improve accuracy, built responsive UI, measured classification performance, iterated based on data insights',
  'Achieved 90% real-time classification accuracy (up from 75%), reduced system latency by 40%, delivered scalable architecture handling 1000+ concurrent sensor streams',
  ARRAY['JavaScript', 'TypeScript', 'Real-time Systems', 'IoT Integration', 'Data Analytics', 'Performance Optimization'],
  '/assets/project-waste_management.webp',
  'https://github.com/singhuday26',
  null
);
