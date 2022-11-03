import { LearningResourceType, Facets } from "@mitodl/course-search-utils"
import departments from "../../../../base-theme/data/departments.json"
export const CONTENT_TYPE_PDF = "pdf"
export const CONTENT_TYPE_PAGE = "page"
export const CONTENT_TYPE_VIDEO = LearningResourceType.Video
export const CONTENT_TYPE_SEARCHABLE = [
  CONTENT_TYPE_PDF,
  CONTENT_TYPE_PAGE,
  CONTENT_TYPE_VIDEO
]

export type ContentType =
  | typeof CONTENT_TYPE_PDF
  | typeof CONTENT_TYPE_PAGE
  | typeof CONTENT_TYPE_VIDEO

export const OCW_PLATFORM = "OCW"

export const OPEN_CONTENT = "Open Content"
export const PROFESSIONAL = "Professional Offerings"
export const CERTIFICATE = "Certificates"

export const CAROUSEL_IMG_HEIGHT = 130
export const CAROUSEL_IMG_WIDTH = 306

export const COURSE_CURRENT = "Current"
export const COURSE_AVAILABLE_NOW = "Available Now"
export const COURSE_ARCHIVED = "Archived"
export const COURSE_PRIOR = "Prior"

export const DATE_FORMAT = "YYYY-MM-DD[T]HH:mm:ss[Z]"

const ocwPlatform = "ocw"

export const SEARCH_COMPACT_UI = "compact"
export const SEARCH_LIST_UI = "list"

export const LIST_UI_PAGE_SIZE = 10
export const COMPACT_UI_PAGE_SIZE = 50

export type UIState = {
  pageSize: number;
  layout: string;
}
export type UILayout = typeof SEARCH_COMPACT_UI | typeof SEARCH_LIST_UI


export const platforms = {
  OCW: ocwPlatform
}

export const readableLearningResources = {
  [LearningResourceType.Course]:         "Course",
  [LearningResourceType.Video]:          "Video",
  [LearningResourceType.Podcast]:        "Podcast",
  [LearningResourceType.PodcastEpisode]: "Podcast Episode",
  [LearningResourceType.ResourceFile]:   "Course Resource"
}

export enum RESOURCE_TYPE {
  Image = "Image",
  Video = "Video",
  Other = "Other",
  Document = "Document"
}

export const DISPLAY_DATE_FORMAT = "MMMM D, YYYY"

export const SEARCH_URL = "/search/"
export const CONTACT_URL = "/contact/"

export const PHONE = "PHONE"
export const TABLET = "TABLET"
export const DESKTOP = "DESKTOP"

// Based on material-mobile breakpoint
export const PHONE_WIDTH = 599
// Based on desktop-wide breakpoint
export const TABLET_WIDTH = 999

export const COURSENUM_SORT_FIELD = "department_course_numbers.sort_coursenum"

export const STATUS_CODES = {
  HTTP_200_OK:               200,
  HTTP_300_MULTIPLE_CHOICES: 300
}

const RESOURCE_TYPES = [
  "Activity Assignments",
  "Activity Assignments with Examples",
  "Assignments",
  "Competition Videos",
  "Course Introduction",
  "Demonstration Audio",
  "Demonstration Videos",
  "Design Assignments",
  "Design Assignments with Examples",
  "Exam Materials",
  "Exams",
  "Exams with Solutions",
  "Image Gallery",
  "Instructor Insights",
  "Labs",
  "Lecture Audio",
  "Lecture Notes",
  "Lecture Videos",
  "Media Assignments",
  "Media Assignments with Examples",
  "Multiple Assignment Types",
  "Multiple Assignment Types with Solutions",
  "Music",
  "Online Textbook",
  "Online Textbooks",
  "Other Audio",
  "Other Video",
  "Presentation Assignments",
  "Presentation Assignments with Examples",
  "Problem Sets",
  "Problem Sets with Solutions",
  "Programming Assignments",
  "Programming Assignments with Examples",
  "Projects",
  "Projects with Examples",
  "Readings",
  "Recitation Videos",
  "Recitations",
  "Simulation Videos",
  "Simulations",
  "Tools",
  "Tutorial Videos",
  "Tutorials",
  "Video Materials",
  "Videos",
  "Workshop Videos",
  "Written Assignments",
  "Written Assignments with Examples"
]

export const FACET_OPTIONS: Facets = {
  topics: [
    "Academic Writing",
    "Accounting",
    "Aerodynamics",
    "Aerospace Engineering",
    "African American Studies",
    "African History",
    "Algebra and Number Theory",
    "Algorithms and Data Structures",
    "American History",
    "American Literature",
    "American Politics",
    "Analytical Chemistry",
    "Anatomy and Physiology",
    "Ancient History",
    "Anthropology",
    "Applied Mathematics",
    "Aquatic Sciences and Water Quality Control",
    "Archaeology",
    "Architectural Design",
    "Architectural Engineering",
    "Architectural History and Criticism",
    "Architecture",
    "Art History",
    "Artificial Intelligence",
    "Asian History",
    "Asian Studies",
    "Astrodynamics",
    "Astrophysics",
    "Atmospheric Science",
    "Atomic, Molecular, Optical Physics",
    "Avionics",
    "Bioastronautics",
    "Biochemistry",
    "Biography",
    "Biological Anthropology",
    "Biological Engineering",
    "Biology",
    "Biomaterials",
    "Biomechanics",
    "Biomedical Enterprise",
    "Biomedical Instrumentation",
    "Biomedical Signal and Image Processing",
    "Biomedicine",
    "Biophysics",
    "Biostatistics",
    "Biotechnology",
    "Buildings",
    "Business",
    "Business Ethics",
    "Calculus",
    "Cancer",
    "Cell and Tissue Engineering",
    "Cell Biology",
    "Cellular and Molecular Medicine",
    "Chemical Engineering",
    "Chemistry",
    "Chinese",
    "Civil Engineering",
    "Classical Mechanics",
    "Classics",
    "Climate",
    "Climate Studies",
    "Cognitive Science",
    "Combustion",
    "Comedy",
    "Communication",
    "Community Development",
    "Comparative History",
    "Comparative Literature",
    "Comparative Politics",
    "Composite Materials",
    "Computation",
    "Computation and Systems Biology",
    "Computational Biology",
    "Computational Modeling and Simulation",
    "Computational Science and Engineering",
    "Computer Design and Engineering",
    "Computer Networks",
    "Computer Science",
    "Condensed Matter Physics",
    "Construction Management",
    "Creative Writing",
    "Criticism",
    "Cryptography",
    "Cultural Anthropology",
    "Curriculum and Teaching",
    "Dance",
    "Data Mining",
    "Developmental Biology",
    "Developmental Economics",
    "Differential Equations",
    "Digital Media",
    "Digital Systems",
    "Discrete Mathematics",
    "Drama",
    "Dynamics and Control",
    "Earth Science",
    "Ecology",
    "Econometrics",
    "Economics",
    "Education Policy",
    "Educational Technology",
    "Electric Power",
    "Electrical Engineering",
    "Electricity",
    "Electromagnetism",
    "Electronic Materials",
    "Electronics",
    "Energy",
    "Engineering",
    "English as a Second Language",
    "Entrepreneurship",
    "Environmental Design",
    "Environmental Engineering",
    "Environmental Management",
    "Environmental Policy",
    "Environmental Science",
    "Epidemiology",
    "Epistemology",
    "Ethics",
    "Ethnography",
    "European and Russian Studies",
    "European History",
    "Fiction",
    "Film and Video",
    "Finance",
    "Financial Economics",
    "Fine Arts",
    "Fluid Mechanics",
    "Fossil Fuels",
    "French",
    "Fuel Cells",
    "Functional Genomics",
    "Game Design",
    "Game Theory",
    "Gender Studies",
    "Genetics",
    "Geobiology",
    "Geochemistry",
    "Geography",
    "Geology",
    "Geophysics",
    "Geotechnical Engineering",
    "German",
    "Global Poverty",
    "Globalization",
    "Graphic Design",
    "Graphics and Visualization",
    "Guidance and Control Systems",
    "Health and Exercise Science",
    "Health and Medicine",
    "Health Care Management",
    "High Energy Physics",
    "Higher Education",
    "Historical Methods",
    "Historiography",
    "History",
    "History of Science and Technology",
    "Housing Development",
    "Human-Computer Interfaces",
    "Humanities",
    "Hydrodynamics",
    "Hydrodynamics and Coastal Engineering",
    "Hydrogen and Alternatives",
    "Hydrology and Water Resource Systems",
    "Immunology",
    "Indigenous Studies",
    "Industrial Organization",
    "Industrial Relations and Human Resource Management",
    "Information Technology",
    "Innovation",
    "Inorganic Chemistry",
    "Intellectual History",
    "International Development",
    "International Economics",
    "International Literature",
    "International Relations",
    "Italian",
    "Japanese",
    "Jewish History",
    "Labor Economics",
    "Language",
    "Latin American History",
    "Latin and Caribbean Studies",
    "Leadership",
    "Legal Studies",
    "Linear Algebra",
    "Linguistics",
    "Literature",
    "Logic",
    "Macroeconomics",
    "Management",
    "Marketing",
    "Materials Science and Engineering",
    "Materials Selection",
    "Mathematical Analysis",
    "Mathematical Logic",
    "Mathematics",
    "Mechanical Design",
    "Mechanical Engineering",
    "Media Studies",
    "Medical Imaging",
    "Medieval History",
    "Mental Health",
    "Metallurgical Engineering",
    "Metaphysics",
    "Microbiology",
    "Microeconomics",
    "Microtechnology",
    "Middle Eastern History",
    "Middle Eastern Studies",
    "Military History",
    "Military Studies",
    "Modern History",
    "Molecular Biology",
    "Molecular Engineering",
    "Music",
    "Music History",
    "Music Performance",
    "Music Theory",
    "Nanotechnology",
    "Neurobiology",
    "Neuroscience",
    "Nonfiction Prose",
    "Nuclear",
    "Nuclear Engineering",
    "Nuclear Materials",
    "Nuclear Physics",
    "Nuclear Systems, Policy, and Economics",
    "Numerical Simulation",
    "Ocean Engineering",
    "Ocean Exploration",
    "Ocean Structures",
    "Oceanic Pollution Control",
    "Oceanography",
    "Operating Systems",
    "Operations Management",
    "Organic Chemistry",
    "Organizational Behavior",
    "Particle Physics",
    "Pathology and Pathophysiology",
    "Performance Arts",
    "Periodic Literature",
    "Pharmacology and Toxicology",
    "Philosophy",
    "Philosophy of Language",
    "Phonology",
    "Photography",
    "Physical Chemistry",
    "Physical Education and Recreation",
    "Physics",
    "Planetary Science",
    "Poetry",
    "Political Economy",
    "Political Philosophy",
    "Political Science",
    "Polymeric Materials",
    "Polymers",
    "Portuguese",
    "Probability and Statistics",
    "Process Control Systems",
    "Programming Languages",
    "Project Management",
    "Propulsion Systems",
    "Proteomics",
    "Psychology",
    "Public Administration",
    "Public Economics",
    "Public Health",
    "Public Policy",
    "Quantum Mechanics",
    "Radiological Engineering",
    "Real Estate",
    "Regional Planning",
    "Regional Politics",
    "Relativity",
    "Religion",
    "Religious Architecture",
    "Renewables",
    "Rhetoric",
    "Robotics and Control Systems",
    "Science",
    "Science and Technology Policy",
    "Security Studies",
    "Semantics",
    "Sensory-Neural Systems",
    "Separation Processes",
    "Signal Processing",
    "Social Anthropology",
    "Social Justice",
    "Social Medicine",
    "Social Science",
    "Social Welfare",
    "Society",
    "Sociology",
    "Software Design and Engineering",
    "Solid Mechanics",
    "Spanish",
    "Spectroscopy",
    "Speech Pathology",
    "Stem Cells",
    "Structural Biology",
    "Structural Engineering",
    "Structural Mechanics",
    "Supply Chain Management",
    "Surveying",
    "Sustainability",
    "Syntax",
    "Synthetic Biology",
    "Systems Design",
    "Systems Engineering",
    "Systems Optimization",
    "Teaching and Education",
    "Technical Writing",
    "Technology",
    "Telecommunications",
    "The Developing World",
    "Theater",
    "Theatrical Design",
    "Theoretical Physics",
    "Theory of Computation",
    "Thermodynamics",
    "Topology and Geometry",
    "Transport Processes",
    "Transportation",
    "Transportation Engineering",
    "Transportation Planning",
    "Urban Planning",
    "Urban Studies",
    "Virology",
    "Visual Arts",
    "Women's Studies",
    "World History"
  ],
  type:            ["resourcefile", "course"],
  department_name: Object.values(departments).map(
    department => department.title
  ),
  level:               ["Undergraduate", "Graduate", "Non Credit"],
  course_feature_tags: RESOURCE_TYPES,
  resource_type:       RESOURCE_TYPES
}
