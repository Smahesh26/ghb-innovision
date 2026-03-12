import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeadershipTabs from "../components/LeadershipTabs";
import LeadershipHero from "../components/LeadershipHero";

const boardOfDirectors = [
  {
    name: "Lt Col Randeep Hundal",
    role: "Promoter, Chairman & Managing Director",
    image: "/images/Randeepsir.jpeg",
    bio: "Lt Col Randeep Hundal is the Promoter, Chairman, and Managing Director of Innovision Limited. With a robust academic background, he holds a Bachelor's degree in Arts from Punjab University and a Postgraduate Diploma in International Trade from Symbiosis, Pune. Additionally, he has completed a certificate course in Business Administration for Armed Forces from Management Development Institute, Gurgaon, and holds a certificate in Industrial Security, Safety, and Fire Protection Management from the Institute of Fire Services and Industrial Security Management. Lt Col Hundal began his distinguished career as an officer in the Indian Army. His rich association with the armed forces provides him with a unique perspective, crucial for steering the manned private security services industry. With over 22 years of extensive experience in manpower services, including security training and integrated facility management, Lt Col Hundal has been instrumental in the growth and development of Innovision Limited. His leadership is marked by a strategic vision, driving revenue growth, and shaping the corporate strategy of the company. In addition to his corporate responsibilities, he is also a DGCA-certified remote pilot training instructor, further showcasing his versatile skill set. His military background and professional expertise continue to guide Innovision Limited towards sustained success.",
    linkedin: "https://www.linkedin.com/in/lt-col-randeep-hundal-1a83ab12/",
  },
  {
    name: "Mr. Uday Pal Singh",
    role: "Promoter, Chief Executive Officer & Director",
    image: "/images/uday.jpeg",
    bio: "Mr. Uday Pal Singh is the Promoter, Chief Executive Officer, and Director of Innovision Limited. He holds a Bachelor's degree in Arts from Punjab University and has completed a Postgraduate Diploma Programme in Communication from The Delhi School of Communication. With more than 22 years of experience in the manpower solutions industry, Mr. Singh has played a pivotal role in the company's growth and strategic direction. Before joining Innovision Limited, Mr. Singh gained extensive experience in the domains of advertising, media, and public relations. He was associated with prominent Organisations such as Group M, Publicis India Communications Private Limited, Triton Communications Private Limited, and ESPN Star Sports India Private Limited, where he held various key positions in media, ad sales, and corporate communications teams. At Innovision Limited, Mr. Singh is responsible for overseeing the company's operations, driving client development activities, and ensuring that the company remains at the forefront of the industry. His diverse experience and leadership in the media and communication sectors have been instrumental in shaping the company's vision and achieving sustained growth. His commitment to excellence and strategic insight continue to guide Innovision Limited as a leading provider of comprehensive business solutions.",
    linkedin: "https://www.linkedin.com/in/uday-pal-singh-b86648320/",
  },
  {
    name: "Col Gurpal Singh (Retd)",
    role: "Whole Time Director & KMP",
    image: "/images/gurpalsingh.jpg",
    bio: "Col Gurpal Singh (Retd) is a Whole Time Director and a Key Managerial Personnel at Innovision Limited. He holds a Bachelor's degree in Arts from Osmania University. With a rich career in the Indian Army, Lt Col Gurpal Singh brings a wealth of experience and discipline to his role. After a distinguished tenure in the military, Lt Col Singh transitioned to the manpower services industry, where he has accumulated over 15 years of experience. His expertise spans security training and integrated facility management services, making him a valuable asset to Innovision Limited. His leadership and experience have contributed significantly to the company's operational excellence and growth. Lt Col Gurpal Singh's dedication to service, both in the military and in his corporate role, underscores his commitment to excellence. His extensive experience and strategic insight continue to play a crucial role in driving the success of Innovision Limited.",
    linkedin: "/leadership",
  },
];

const independentDirectors = [
   {
    name: "Ms. Sudha Hooda",
    role: "Independent Director (Non-Executive)",
    image: "/images/sudhahooda.png",
    bio: "Ms. Sudha Hooda is an Independent Director (Non-Executive) at Innovision Limited. She holds a Bachelor's degree in Political Science from Delhi University and has extensive experience in the legal and corporate counsel sectors. Ms. Hooda has held significant positions in leading companies such as Tata Consultancy Services and Walmart, and she is currently associated with Nvidia Graphics Private Limited, where she oversees legal, compliance, and secretarial functions across multiple regions, including India, Singapore, Australia, New Zealand, and Southeast Asia. With over two decades of experience, Ms. Hooda is a strategic business enabler and a seasoned legal professional, known for her integrity, perseverance, and creative problem-solving abilities. Her expertise in legal affairs and corporate governance is a significant asset to Innovision Limited.",
    linkedin: "https://www.linkedin.com/in/sudha-hooda/",
  },
  {
    name: "Captain Pawan Kumar",
    role: "Independent Director (Non-Executive)",
    image: "/images/pawankumar.png",
    bio: "Captain Pawan Kumar (Retd) is an Independent Director (Non-Executive) at Innovision Limited. He holds a Bachelor's degree in Economics from Maharshi Dayanand University, Rohtak, and has received training in Disaster Management from the Management Development Institute (MDI). With a background in the Indian Army, Captain Kumar has developed a deep expertise in security services and disaster management across multiple sectors. His corporate career includes associations with renowned companies such as Netflix, Reliance Retail, and Amazon, where he applied his skills in various security and management roles. His military and corporate experience brings valuable insights to Innovision Limited.",
    linkedin: "https://www.linkedin.com/in/pawankalkal/",
  },
 
  {
    name: "Ms. Sulekha Sharma",
    role: "Independent Director (Non-Executive)",
    image: "/images/sulekhasharma.png",
    bio: "Ms. Sulekha Sharma is an Independent Director (Non-Executive) at Innovision Limited. She holds a Bachelor's degree in Science from Andhra University, Vishakhapatnam, and a Master's degree in Industrial Relations and Personnel Management from Symbiosis University, Pune. With over 15 years of experience in media and mass communication, Ms. Sharma has been associated with prominent media houses such as UTV Entertainment Television Ltd., New Delhi Television Limited (NDTV), Zee Unimedia Limited, and Bennett Coleman and Co. Ltd. (Times Group). Her extensive experience in the media industry and her strong background in industrial relations and personnel management provide Innovision Limited with strategic insights and expertise in communication and human resource management.",
    linkedin: "https://www.linkedin.com/in/sulekhas/",
  },
];

export const metadata: Metadata = {
  title: "Leadership | Innovision Limited",
  description:
    "Meet Innovision Limited's Board of Directors and Independent Directors guiding strategic growth, governance, and operational excellence.",
  alternates: {
    canonical: "https://innovision.co.in/leadership",
  },
};

export default function LeadershipPage() {
  return (
    <>
      <Header />

      <LeadershipHero />

      <LeadershipTabs boardOfDirectors={boardOfDirectors} independentDirectors={independentDirectors} />
      <Footer />
    </>
  );
}
