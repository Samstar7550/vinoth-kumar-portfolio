import { link } from "fs";

export const qualifications = [
  {
    degree: "B.Tech.",
    institution: "Thiagarajar College of Engineering",
    yearOfPassing: 2004,
    class: "I",
    branch: "Information Technology",
  },
  {
    degree: "M.E.",
    institution: "Manonmaniam Sundaranar University, Tirunelveli",
    yearOfPassing: 2007,
    class: "I",
    branch: "Computer Science",
  },
  {
    degree: "M.B.A.",
    institution: "IGNOU, New Delhi",
    yearOfPassing: 2014,
    class: "II",
    branch: "Human Resources",
  },
  {
    degree: "Ph.D.",
    institution: "Anna University",
    yearOfPassing: 2017,
    class: "Highly Commendable",
    branch: "Information & Communication Engineering",
  },
];

export type Experience = {
  institution: string;
  designation: string;
  dateOfJoining: string;
  dateOfLeaving: string | "Till date";
  experience: string;
  icon?: string;
};

export const experiences: Experience[] = [
  {
    institution:
      "Sri Krishna College of Engineering and Technology, Coimbatore",
    designation: "Lecturer",
    dateOfJoining: "25.06.2007",
    dateOfLeaving: "01.09.2008",
    experience: "1 yr. 2 months 7 days",
    icon: "SKI-Coimbatore-Logo.webp",
  },
  {
    institution: "Anna University, Tiruchirappalli Ramanathapuram campus",
    designation: "Lecturer",
    dateOfJoining: "04.09.2008",
    dateOfLeaving: "24.11.2009",
    experience: "1 yr. 2 months 20 days",
    icon: "aa.png",
  },
  {
    institution: "Anna University, Tiruchirappalli Ramanathapuram campus",
    designation: "Assistant Professor",
    dateOfJoining: "25.11.2009",
    dateOfLeaving: "02.07.2014",
    experience: "4 yrs. 7 months 7 days",
    icon: "aa.png",
  },
  {
    institution: "University College of Engineering, Dindigul",
    designation: "Assistant Professor",
    dateOfJoining: "03.07.2014",
    dateOfLeaving: "04.07.2023",
    experience: "9 yrs. 1 day",
    icon: "clglogo.png",
  },
  {
    institution: "Anna University Regional Campus, Madurai",
    designation: "Assistant Professor",
    dateOfJoining: "05.07.2023",
    dateOfLeaving: "Till date",
    experience: "",
    icon: "clglogo.png",
  },
];

export const publications: string[] = [
  "Nagasuresh M and Vinoth Kumar M (2014), 'Defense against Illegal Use of Single Sign-on Mechanism for Distributed Network Services,' International Journal of Research in Computer Applications & Information Technology, Vol. 2, Iss. 2, pp. 36-44.",
  "Kesavamoorthy N and Vinoth Kumar M (2014), 'Rate limiting to mitigate flood attack in disruption tolerant network,' International Journal of Research in Computer Applications & Information Technology, Vol. 2, Iss. 2.",
  "Vinoth Kumar M and Balaji N (2015), 'Secure Delegation using Key Aggregate Cryptosystem,' International Journal of Applied Engineering Research, Vol. 10, Iss. 10, pp. 26521-26528.",
  "Vinoth Kumar M and Balaji N (2016), 'An Elliptic Curve Based Schnorr Cloud Security Model in Distributed Environment,' The Scientific World Journal, Hindawi Publishing Corporation, pp. 1-9.",
  "Vinoth Kumar M and Balaji N (2015), 'Privacy Preserving Data Integrity Verification in Cloud without Third Party Auditing,' International Journal of Applied Engineering Research, Vol. 10, Iss. 5, pp. 4249-4252.",
  "Vinoth Kumar M and Balaji N (2015), 'Controlled Patient Health Record Sharing using Key Aggregate Cryptosystem in Distributed Cloud,' International Journal of Applied Engineering Research, Vol. 10, Iss. 5, pp. 4264-4267.",
  "Vinoth Kumar M and Balaji N (2016), 'DKSM –DHT: Privacy preserving Dynamic key sharing model in Distributed Cloud Computing Environment,' Security and Communication Networks, Wiley publications, Vol. 9, Iss. 17, pp. 4319-4329.",
  "R. Saravana Ram, M. Vinoth Kumar, S. Ramamoorthy, B. Saravana Balaji & T. Rajesh Kumar (2020), 'An Efficient Hybrid Computing Environment to Develop a Confidential and Authenticated IoT Service Model,' Wireless Personal Communication, Vol. 117, Iss. 4, pp. 2903-2927.",
  "M. Vinoth Kumar, R. Saravana Ram, Saravana Balaji B, B. Amutha, M. Kowsigan (2020), 'An improved migration scheme to achieve the optimal service time for the active jobs in 5G cloud environment,' Computer Communications, Vol. 160, pp. 807-814.",
  "Saravana Ram R, Vinoth Kumar M, Balambigai Subramanian, Nebojsa Bacanin, Miodrag Zivkovic, Ivana Strumberger (2020), 'Speech enhancement through improvised conditional generative adversarial networks,' Microprocessors and Microsystems, Vol. 79, pp. 103281.",
  "Vinoth Kumar M, K. Venkatachalam, Prabu P, Abdulwahab Almutairi, Mohamed Abouhawwash (2021), 'Secure biometric authentication with deduplication on distributed cloud storage,' PeerJ Comput. Sci, July 2021, pp. 1-20.",
  "R. Saravana Ram, M. Vinoth Kumar, N. Krishnamoorthy, A. Baseera, D. Mansoor Hussain, N. Susila (2022), 'Industrial Centric Node Localization and Pollution Prediction Using Hybrid Swarm Techniques,' Computer System Science Engineering, Vol. 42, Iss. 2, pp. 545-560.",
  "S. Prakash, M. Vinoth Kumar, Saravana Ram R, Miodrag Zivkovic, Nebojsa Bacanin, Milos Antonijevic (2022), 'Hybrid GLFIL Enhancement and Encoder Animal Migration Classification for Breast Cancer Detection,' Computer System Science Engineering, Vol. 41, Iss. 2, pp. 735-749.",
  "K. Venkatachalam, Siuly Siuly, M. Vinoth Kumar, Praveen Lalwani, Manas Kumar Mishra, Enamul Kabir (2022), 'A Hybrid Approach for COVID-19 Detection Using Biogeography-Based Optimization and Deep Learning,' Computers, Materials & Continua, Vol. 70, Iss. 2, pp. 3717-3732.",
  "M. Vinoth Kumar, K. Venkatachalam, Mehedi Masud, Mohamed Abouhawwash (2022), 'Novel Dynamic Scaling Algorithm for Energy Efficient Cloud Computing,' IASC, Vol. 33, Iss. 3, pp. 1547-1559.",
  "R. Saravana Ram, M. Vinoth Kumar, Tareq M Al-shami, Mehedi Masud, Hanan Aljuaid, Mohamed Abouhawwash (2023), 'Deep Fake Detection Using Computer Vision-Based Deep Neural Network with Pairwise Learning,' Intelligent Automation and Soft Computing, Vol. 35, Iss. 2, pp. 2449-2462.",
];

export const workshops: string[] = [
  "DRDO Sponsored Two Day workshop on “How to set up a private cloud for IAAS application,” Sri Krishna College of Engg & Technology, Coimbatore, 27th - 28th Nov 2010.",
  "One day workshop on Research Methodology objectives and approaches, Anna University of Technology Madurai, 29th Dec 2010.",
  "AU Madurai Sponsored Two Day FDP on Grid Computing, Mohamed Sathak Engineering College, Kilakarai, 26th – 27th Mar 2011.",
  "AU Madurai Sponsored Two Days FDP on Discrete and Fuzzy Mathematics, AUT Madurai Ramanathapuram Campus, 07th – 08th Apr 2011.",
  "AICTE sponsored staff development programme on cloud computing, MAM College of Engineering and Technology, Trichy, 16th - 29th May 2011.",
  "Two days National level Workshop on Data Mining using SQL Server 2008 and Weka, Sri Krishna College of Engg & Technology, Coimbatore, 29th - 30th Sept 2011.",
  "Two days seminar on Research Issues in Cloud and Grid Computing, Mepco Schlenck Engineering College, Sivakasi, 14th - 15th Oct 2011.",
  "Two days workshop on cloud computing, TCE, Madurai, 4th - 5th Feb 2012.",
  "Two days FDP on Research Issues and Optimization in Cloud Computing, KLNCE, Madurai, 10th – 11th Feb 2012.",
  "DRDO Sponsored Two Days National Level Workshop on Cloud Computing, Sri Krishna College of Engg & Technology, Coimbatore, 24th – 25th Feb 2012.",
  "AICTE QIP Sponsored Short term course on Cloud Computing Technology, Anna University Chennai, 1st – 13th Apr 2013.",
  "TEQIP III sponsored Workshop on Mathematical Essentials for Cryptological Research, TCE, Madurai, 16th - 18th Oct 2014.",
  "TEQIP II sponsored Workshop on Cloud Computing Tools, TCE, Madurai, 15th - 18th Oct 2015.",
  "TEQIP II sponsored Workshop on Research Paper Writing, TCE, Madurai, 26th Aug 2016.",
  "Two days National level seminar on Deep Learning Models for Cyber Security and Remote Sensing, Karpagam College of Engineering, Coimbatore, 13th - 14th Jul 2017.",
  "AICTE Sponsored International Seminar on Big Data Analytics with State of Art Experimentation on E-Governance, Healthcare, and Educational System, KLNCE, Madurai, 05th – 11th Oct 2017.",
  "TEQIP II sponsored FDP in Entrepreneurship, AC TECH, Karaikudi, 04th - 17th Dec 2017.",
];

export const programs = [
  "Motivational program for students “Kindle the Candle,” Univ. College of Engineering (Anna University), Dindigul, Sep 23rd, 2016.",
  "Train the trainer - Faculty equipment programme, Univ. College of Engineering (Anna University), Dindigul, Sep 23rd, 2016.",
  "One day guest lecture on Java and Network programming, Univ. College of Engineering (Anna University), Dindigul, Mar 28th, 2017.",
  "AU Sponsored 7 Days FDTP on IP, Univ. College of Engineering (Anna University), Dindigul, May 22nd – 28th, 2017.",
  "One day workshop on Industry Expectations, Univ. College of Engineering (Anna University), Dindigul, Jul 12th, 2017.",
  "Orientation programme on value added courses, Univ. College of Engineering (Anna University), Dindigul, Jul 19th, 2017.",
  "Two-day soft skills training programme, Univ. College of Engineering (Anna University), Dindigul, Aug 7th and 8th, 2017.",
  "Two days technical training on C and Java programming, Univ. College of Engineering (Anna University), Dindigul, Aug 7th and 8th, 2017.",
  "Invited talk on Special Interest Group on Engineers Day, Univ. College of Engineering (Anna University), Dindigul, Sep 13th, 2017.",
  "Seminar on Internet programming, Univ. College of Engineering (Anna University), Dindigul, Sep 5th - 7th, 2017.",
  "Seminar on Internet programming, Univ. College of Engineering (Anna University), Dindigul, Sep 11th - 14th, 2017.",
  "Seminar on OOAD, Univ. College of Engineering (Anna University), Dindigul, Sep 25th, 2017.",
  "One day Hands-on training on IP LAB, Univ. College of Engineering (Anna University), Dindigul, Sep 26th, 2017.",
  "Invited talk: Introduction to Python, Univ. College of Engineering (Anna University), Dindigul, Sep 27th, 2017.",
  "One day Hands on training on CASE Tools Lab, Univ. College of Engineering (Anna University), Dindigul, Oct 14th, 2017.",
  "One day Hands on training on Web services & CG Animation, Univ. College of Engineering (Anna University), Dindigul, Oct 15th, 2017.",
  "Introduction to Data Structures and Algorithm – Industry Perspective, Univ. College of Engineering (Anna University), Dindigul, Feb 10th, 2018.",
  "Interview Tips and Preparation Strategies, Univ. College of Engineering (Anna University), Dindigul, Feb 15th, 2018.",
  "Cracking C Questions in Interview, Univ. College of Engineering (Anna University), Dindigul, Feb 16th, 2018.",
  "Invited talk on Recent Trends in IT, Univ. College of Engineering (Anna University), Dindigul, Feb 21st, 2018.",
  "Guest lecture: Problem Solving in Data Structures and Algorithms, Univ. College of Engineering (Anna University), Dindigul, Feb 25th, 2018.",
  "Guest lecture on Analysis of Algorithms, Univ. College of Engineering (Anna University), Dindigul, March 21st, 2018.",
  "Preplacement Initiatives - TCS Trainer’s Perspective, Univ. College of Engineering (Anna University), Dindigul, March 21st, 2018.",
  "One day workshop on Middleware Technologies, Anna University Ramanathapuram, 11th March 2011.",
  "One day training programme on Soft Skills and Personality Development, Anna University Ramanathapuram, 19th April 2011.",
  "One day National level technical symposium ELIXIR ’11, Anna University Ramanathapuram, 9th Sept 2011.",
  "One day training programme on Placement Awareness and Pre-placement Initiatives, Anna University Ramanathapuram, 5th Oct 2011.",
  "One day workshop on Open-Source Technologies and Applications, Anna University Ramanathapuram, 9th Nov 2011.",
];

export const contributions = {
  university: {
    HoD_Association_Chairperson: [
      "Established computer labs, installed Server and VOIP in lab, AUTRC.",
      "Arranged In-Plant training at Chennai Port Trust, BSNL Madurai, BSNL Karaikudi.",
      "Arranged company projects for students at Chennai Port Trust, Bellatrix Technologies.",
      "Coordinated various events at Anna University Ramanathapuram including: Middleware Technologies workshop, Soft Skills and Personality Development training, National level technical symposium ELIXIR ’11, Placement Awareness and Pre-placement initiatives, Open-source technologies and applications workshop.",
    ],
    Training_Placement_Officer: [
      "Organized training sessions, placement awareness programs, created Training and Placement cell.",
      "Coordinated TCS TAAP Programme III Modules, TITAN Employability Skill Building Programme.",
      "Arranged NIIT seminar on Employment opportunities, placement training programs for Wipro, Infosys, HCL.",
      "Organized pre-placement initiatives, CUIC TNSLPP drives, CUIC UCEK pooled drives, CUIC online exam.",
      "Facilitated placements in companies like TCS, CTS, WIPRO, HCL, Capegemini, Accenture, Infosys, etc.",
      "Received Appreciation certificate from TCS, NYUKTI ACHARYA award from Brainovison for BEST TPO and HoD.",
    ],
    Network_Coordinator: [
      "Arranged networking in ECE and CSE labs, installed server in CSE lab.",
    ],
    Website_Coordinator_Administrator: [
      "Collected database, designed, developed, and hosted the college website.",
    ],
    NPTEL_LC_SPOC: [
      "Coordinated course and exam registration for NPTEL online courses (2020-2023).",
      "Facilitated students to upskill through NPTEL, UDEMY platforms.",
    ],
    Membership_Professional_Bodies: [
      "LIFE MEMBER IN CSI",
      "LIFE MEMBER IN ISTE",
    ],
    Guest_Lecture: [
      "One day FDP on “Recent trends in Research” Research issues in cloud computing, Parks College of Arts and Science, 08.09.2012.",
    ],
    Reviewer_Journals: [
      "International Journal of Information and Management (Inder Science).",
      "International Journal of Information Technology and Decision Making (Scientific World).",
    ],
  },
};

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/vinoth-kumar-22760040/",
  },
];
