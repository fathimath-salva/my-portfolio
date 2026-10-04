// portfolioData.js — Central data source for Fathimath Salva's portfolio

export const personal = {
  name: 'Fathimath Salva',
  nameShort: 'Salva',
  titles: [
    'AI & Machine Learning Engineering',
    'Frontend / Full Stack Development',
  ],
  tagline: 'Building thoughtful digital experiences at the intersection of AI, technology and design.',
  location: 'Mangaluru, Karnataka, India',
  email: 'salvahere12@gmail.com',
  phone: '9972582918',
  linkedin: 'https://linkedin.com/in/fathimath-salva-593666356',
  github: 'https://github.com/fathimath-salva',
  instagram: '', // Add your Instagram URL here when ready
  resumePath: '/Fathimath_Salva_Resume.pdf',
};

export const about = {
  paragraphs: [
    'I am a B.E. student specializing in Artificial Intelligence & Machine Learning, with practical experience in Python, web development, computer vision and machine learning projects.',
    'I am interested in AI/ML, frontend development and useful digital products that create user-focused experiences. I value teamwork, coordination and continuous learning.',
  ],
};

export const skills = [
  {
    category: 'Programming',
    items: ['Python', 'C'],
  },
  {
    category: 'Web Development',
    items: ['HTML', 'CSS', 'React', 'Next.js', 'Node.js'],
  },
  {
    category: 'AI / Machine Learning',
    items: ['Machine Learning', 'Computer Vision', 'OpenCV', 'TinyML', 'TensorFlow', 'PyTorch', 'Transformers'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Excel', 'Tableau'],
  },
];

export const experience = [
  {
    id: 'codsoft-intern',
    role: 'Artificial Intelligence Virtual Intern',
    company: 'CodSoft',
    type: 'Virtual Internship',
    duration: '25 August 2026 – 25 September 2026',
    highlights: [
      'Project: Image Captioning.',
      'Project: Movie Recommendation System.',
      'Project: Real-Time Face Detection / Recognition.',
    ],
    technologies: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision'],
    entryNumber: '01',
    focus: 'AI / ML INTERNSHIP',
  },
  {
    id: 'iic-coordinator',
    role: 'IIC Coordinator',
    company: 'IIC',
    type: 'AIML Department · Srinivas Institute of Technology',
    duration: 'September 2025 – September 2026',
    highlights: [],
    technologies: [],
    entryNumber: '02',
    focus: 'LEADERSHIP',
  },
  {
    id: 'altius-coordinator',
    role: 'Altius Coordinator',
    company: 'Altius',
    type: 'AIML Department · Srinivas Institute of Technology',
    duration: '2025 – September 2026',
    highlights: [],
    technologies: [],
    entryNumber: '03',
    focus: 'LEADERSHIP',
  },
];

export const projects = [
  {
    id: 'roadguard',
    number: '01',
    title: 'Road Guard',
    subtitle: 'AI-Based Pothole Detection',
    year: '2025–2026',
    description: 'A computer vision road-safety project focused on pothole detection using YOLO and OpenCV.',
    technologies: ['Python', 'YOLO', 'OpenCV', 'Computer Vision', 'Raspberry Pi'],
    role: 'Lead developer — model training, detection pipeline and evaluation.',
    caseStudy: {
      category: 'AI / COMPUTER VISION',
      overview: 'Road Guard is a computer vision project focused on pothole detection and road safety.',
      sections: [
        { title: 'Project Overview', body: 'Road Guard is an AI-based pothole detection project using computer vision to support road-safety monitoring.' },
        { title: 'Problem', body: 'Potholes can create hazards for road users. Automated detection can help flag road imagery for further review.' },
        { title: 'Objective', body: 'Detect potholes in road images or video with a YOLO-based computer-vision workflow.' },
        { title: 'Technologies Used', technologyList: true },
        { title: 'Detection Process', steps: ['Input', 'Image / video', 'YOLO detection model', 'Pothole detection', 'Result for review'] },
        { title: 'My Contribution', body: 'Lead developer — model training, detection pipeline and evaluation.' },
        { title: 'Why It Is Useful', body: 'Pothole detections can support road-safety monitoring when reviewed alongside on-the-ground assessment.' },
        { title: 'Project Outcome', body: 'A pothole-detection project using Python, YOLO and OpenCV. No performance metrics or deployment results are claimed here.' },
      ],
      goal: 'Identify potholes in road imagery to support road-safety awareness.',
      built: 'A pothole detection system using YOLO and OpenCV.',
      flow: ['Camera / input', 'Image processing', 'YOLO detection', 'Pothole identification', 'Road-safety output'],
      contribution: 'Project work focused on the pothole detection system and its computer-vision pipeline.',
      learning: ['Computer vision', 'Object detection', 'Model integration', 'Real-world deployment concepts'],
    },
    githubUrl: null,   // Add your GitHub repository URL here
    liveUrl: null,
    visual: 'roadguard',
  },
  {
    id: 'tinyml-health',
    number: '02',
    title: 'TinyML Machine Health Monitor',
    subtitle: 'Industrial Machine Health Monitoring System',
    year: '2025–Present',
    description: 'An industrial machine health monitoring system exploring sensor-based machine-condition classification with TinyML.',
    technologies: ['Python', 'Machine Learning', 'TinyML', 'ESP32', 'Streamlit', 'Federated Learning'],
    role: 'Core ML pipeline, model compression for edge deployment, and dashboard development.',
    caseStudy: {
      category: 'TINYML / INDUSTRIAL MONITORING',
      overview: 'A machine health monitoring project using sensor data and machine learning.',
      goal: 'Explore machine-condition monitoring with TinyML and edge hardware.',
      built: 'A system concept combining sensor inputs, an ESP32 edge device and a Streamlit monitoring dashboard.',
      flow: ['Temperature / vibration / sound sensors', 'Machine-learning analysis', 'ESP32 edge device', 'Streamlit monitoring dashboard'],
      contribution: 'The project combines the listed machine-learning, TinyML, sensor and dashboard technologies.',
      learning: ['TinyML', 'Edge inference concepts', 'Sensor-based monitoring', 'Federated learning concepts'],
    },
    githubUrl: null,   // Add your GitHub repository URL here
    liveUrl: null,
    visual: 'tinyml',
  },
  {
    id: 'daily-dine',
    number: '03',
    title: 'Daily Dine',
    subtitle: 'Restaurant Application',
    year: '2026–Present',
    description: 'A restaurant application designed in Figma and developed with Next.js.',
    technologies: ['Figma', 'Next.js', 'Responsive'],
    role: 'Front-end developer within a team project.',
    caseStudy: {
      category: 'WEB / PRODUCT DESIGN',
      overview: 'Daily Dine is a restaurant application project designed in Figma and developed with Next.js.',
      sections: [
        { title: 'Overview', body: 'A restaurant application designed in Figma and developed with Next.js.' },
        { title: 'Project Objective', body: 'Create a responsive digital restaurant application experience.' },
        { title: 'Problem / Need', body: 'The current project notes identify a restaurant application; a more specific user problem is not documented.' },
        { title: 'Solution', body: 'A restaurant-application design and web project using Figma and Next.js.' },
        { title: 'Key Features', items: ['Restaurant application', 'Responsive layout'] },
        { title: 'User Experience', body: 'Responsive presentation is part of the documented project scope.' },
        { title: 'Technologies Used', technologyList: true },
        { title: 'Design / Figma', body: 'Figma is used for the design work.' },
        { title: 'Development', body: 'Next.js is used for the web application.' },
        { title: 'My Contribution', body: 'Front-end developer within a team project.' },
        { title: 'Challenges / Implementation', body: 'Specific challenges and implementation details are not documented in the current project information.' },
        { title: 'Result / Outcome', body: 'A restaurant application project designed in Figma and developed with Next.js. No live URL or usage metrics are listed.' },
      ],
      goal: 'Create a digital restaurant application experience.',
      built: 'A restaurant application interface and web project.',
      flow: ['Figma interface design', 'Next.js development', 'Responsive presentation'],
      contribution: 'The listed project work covers Figma design and Next.js development.',
      learning: ['Interface design', 'Frontend development', 'Responsive layout concepts'],
    },
    githubUrl: null,   // Add your GitHub repository URL here
    liveUrl: null,
    visual: 'dailydine',
  },
];

export const internshipProjects = [
  {
    id: 'image-captioning',
    title: 'Image Captioning',
    description: 'A CodSoft Artificial Intelligence Virtual Internship project.',
    technologies: ['Python', 'Transformers', 'PyTorch', 'PIL'],
    objective: 'Generate a text description for an input image.',
    functionality: ['Accept an image input', 'Produce an image caption'],
    outcome: 'An image-captioning project completed during the CodSoft internship.',
    caseStudy: {
      category: 'AI / COMPUTER VISION',
      overview: 'An image-captioning project that produces a text description for an input image.',
      goal: 'Connect image input with a language-based caption output.',
      built: 'An image-captioning project using Python, Transformers, PyTorch and PIL.',
      flow: ['Image input', 'PIL image handling', 'Transformer model', 'Generated caption'],
      contribution: 'Project work focused on producing image captions with the listed Python, Transformers, PyTorch and PIL tools.',
      learning: ['Image and text model workflows', 'Transformers', 'PyTorch'],
    },
    githubUrl: null,   // Add your GitHub repository URL here
  },
  {
    id: 'movie-rec',
    title: 'Movie Recommendation System',
    description: 'A CodSoft Artificial Intelligence Virtual Internship project.',
    technologies: ['Python', 'Machine Learning'],
    objective: 'Explore machine-learning-based movie recommendations.',
    approach: 'Content-based filtering, as recorded in the existing project information.',
    functionality: ['Recommend movies using a content-based approach'],
    outcome: 'A movie recommendation project completed during the CodSoft internship.',
    caseStudy: {
      category: 'AI / MACHINE LEARNING',
      overview: 'A movie recommendation system project completed during the CodSoft internship.',
      goal: 'Explore movie recommendations using machine-learning techniques.',
      built: 'A movie recommendation project using Python and machine learning.',
      flow: ['Movie data', 'Machine-learning recommendation logic', 'Suggested titles'],
      contribution: 'Project work focused on Python-based movie recommendations using the documented content-based filtering approach.',
      learning: ['Recommendation-system concepts', 'Python', 'Machine learning'],
    },
    githubUrl: null,   // Add your GitHub repository URL here
  },
  {
    id: 'face-detection',
    title: 'Face Detection & Recognition',
    description: 'A CodSoft Artificial Intelligence Virtual Internship project.',
    technologies: ['Python', 'OpenCV', 'Computer Vision'],
    objective: 'Explore real-time face detection and recognition.',
    functionality: ['Real-time face detection', 'Face recognition'],
    outcome: 'A face detection and recognition project completed during the CodSoft internship.',
    caseStudy: {
      category: 'AI / COMPUTER VISION',
      overview: 'A real-time face detection and recognition project completed during the CodSoft internship.',
      goal: 'Explore face detection and recognition with computer-vision tools.',
      built: 'A face detection and recognition project using Python and OpenCV.',
      flow: ['Camera / image input', 'OpenCV processing', 'Face detection', 'Recognition output'],
      contribution: 'Project work focused on real-time face detection and recognition using Python, OpenCV and computer vision.',
      learning: ['Computer vision', 'OpenCV', 'Face-detection workflows'],
    },
    githubUrl: null,   // Add your GitHub repository URL here
  },
];

export const codsoftCaseStudy = {
  id: 'codsoft-internship-case-study',
  number: '01',
  title: 'CodSoft',
  subtitle: 'Artificial Intelligence Virtual Internship',
  year: '2026',
  description: 'A virtual AI internship completed from 25 August to 25 September 2026, with three project assignments.',
  technologies: ['Python', 'Transformers', 'PyTorch', 'PIL', 'Machine Learning', 'OpenCV', 'Computer Vision'],
  caseStudy: { category: 'AI / ML INTERNSHIP', overview: 'The CodSoft Artificial Intelligence Virtual Internship included three projects: Image Captioning, Movie Recommendation System and Real-Time Face Detection / Recognition.' },
  subprojects: internshipProjects,
};

export const certifications = [
  {
    id: 'codsoft-ai-internship',
    title: 'Artificial Intelligence Virtual Internship',
    issuer: 'CodSoft',
    date: 'September 26, 2026',
    duration: null,
    certificateUrl: '/certificates/codsoft-ai-internship.pdf',
  },
  {
    id: 'aws-generative-ai',
    title: 'AWS Academy Graduate – Generative AI Foundations',
    issuer: 'AWS',
    date: 'August 29, 2026',
    duration: '12 hours',
    certificateUrl: '/certificates/aws-generative-ai-foundations.pdf',
  },
  {
    id: 'aws-nlp',
    title: 'AWS Academy Graduate – Machine Learning for Natural Language Processing',
    issuer: 'Amazon Web Services (AWS)',
    date: 'September 2026',
    duration: '20 hours',
    certificateUrl: '/certificates/aws-nlp.pdf',
  },
  {
    id: 'aws-cloud-arch',
    title: 'AWS Academy Graduate – Cloud Architecting',
    issuer: 'Amazon Web Services (AWS)',
    date: 'August 2026',
    duration: '60 hours',
    // Place PDF as: public/certificates/aws-cloud-arch.pdf
    certificateUrl: '/certificates/aws-cloud-architecting.pdf',
  },
  {
    id: 'aws-ml-foundations',
    title: 'AWS Academy Graduate – Machine Learning Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: 'August 2026',
    duration: '20 hours',
    // Place PDF as: public/certificates/aws-ml-foundations.pdf
    certificateUrl: '/certificates/aws-ml-foundations.pdf',
  },
  {
    id: 'aws-cloud-foundations',
    title: 'AWS Academy Graduate – Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: 'February 2026',
    duration: '20 hours',
    // Place PDF as: public/certificates/aws-cloud-foundations.pdf
    certificateUrl: '/certificates/aws-cloud-foundations.pdf',
  },
  {
    id: 'infosys-research',
    title: 'Market Research: Research Methodology',
    issuer: 'Infosys',
    date: 'December 4, 2025',
    duration: null,
    // Place PDF as: public/certificates/infosys-research.pdf
    certificateUrl: null, // Add the verified Infosys certificate URL or public PDF path here.
  },
];

export const education = [
  {
    id: 'be-aiml',
    degree: 'B.E. Artificial Intelligence & Machine Learning',
    institution: 'Srinivas Institute of Technology',
    location: 'Mangaluru',
    university: 'Visvesvaraya Technological University (VTU)',
    duration: '2023 – 2027',
    grade: '7.88 / 10',
    gradeLabel: 'CGPA',
    current: true,
  },
  {
    id: 'puc',
    degree: 'Pre-University Course (PUC)',
    institution: 'St. Philomena PU College',
    location: 'Puttur',
    university: null,
    duration: '2023',
    grade: '86%',
    gradeLabel: 'Score',
    current: false,
  },
  {
    id: 'sslc',
    degree: 'SSLC — Secondary School',
    institution: 'Bushra Primary & High School',
    location: 'Kavu',
    university: null,
    duration: '2021',
    grade: '85%',
    gradeLabel: 'Score',
    current: false,
  },
];

export const achievements = [
  {
    id: 'fee-concession',
    icon: 'academic',
    label: 'Academic Recognition',
    title: 'Academic Fee Concession',
    description:
      'Awarded a fee concession based on academic performance and entrance examination ranking.',
  },
  {
    id: 'error-fixing',
    icon: 'trophy',
    label: 'Technical Achievement',
    title: '2nd Place — Error Fixing',
    description:
      'Secured second place in a college-level technical event focused on identifying and resolving programming errors.',
  },
];

export const leadership = [
  {
    id: 'altius',
    role: 'Altius Coordinator',
    organization: 'AIML Department, Srinivas Institute of Technology',
    duration: '2025 – September 2026',
    responsibilities: [],
  },
  {
    id: 'iic',
    role: 'IIC Coordinator',
    organization: 'AIML Department, Srinivas Institute of Technology',
    duration: 'September 2025 – September 2026',
    responsibilities: [],
  },
];
