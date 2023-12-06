import { useEffect, useState } from "react";
import Navbar from "./modules/Navbar";
import WhiteMember from "./modules/WhiteMember";
import Sahr from "../assets/sahr.jpeg";
import Lucas from "../assets/lucas.jpeg";
import Bukola from "../assets/bukola.jpeg";
import Victoria from "../assets/victoria.jpg";
import Andrew from "../assets/andrew.jpg";
import Samson from "../assets/samson.jpg";
import GreenMember from "./modules/GreenMember";
import Footer from "./modules/Footer";
import MobileNavbar from "./mobile_modules/MobileNavbar";
import MobileWhiteMember from "./mobile_modules/MobileWhiteMember";
import MobileGreenMember from "./mobile_modules/MobileGreenMember";
import MobileFooter from "./mobile_modules/MobileFooter";

export default function Team() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
      console.log(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return size > 481 ? (
    <div
      style={{
        background: "#EAF0E8",
        width: "90rem",
        display: "flex",
        flexDirection: "column",
        gap: "2.5rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5625rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            color: "var(--22495F, #22495F)",
            textAlign: "center",
            fontSize: "3.25rem",
            fontWeight: "600",
            lineHeight: "120%",
            fontFamily: "Clash Display",
          }}
        >
          Meet our team
        </h1>
        <p
          style={{
            color: "var(--text-color, #374151)",
            fontSize: "1.25rem",
            fontWeight: "500",
            lineHeight: "160%",
            opacity: "0.6",
            textAlign: "center",
            width: "37.625rem",
          }}
        >
          Our team is comprised of dedicated individuals who share a common
          passion for creating positive change in Africa.
        </p>
      </div>
      <WhiteMember
        img={Lucas}
        name={"Lucas Oribamise"}
        role={"Founder/President"}
        desc={
          "Lucas Oribamise is the founder of Ginoba Foundation, whose main objective is to help the less privileged across the continent of Africa with emphasis on quality healthcare, scholarship, capacity building, education and mentorship. He is a seasoned entrepreneur and has twenty years experience in business and investment across the globe. He is passionate about impacting this generation and adding value to their lives.He is married with children."
        }
      />
      <GreenMember
        img={Sahr}
        name={"Sahr Thomas"}
        role={"Board Member"}
        desc={
          "Sahr Thomas. I attended Mansfield University of Pennsylvania for my undergraduate and Eastern University for masters. I am currently the president at Blossom Services Group LLC. When I am not working, I like to spend time with my family. He is married with children "
        }
      />
      <WhiteMember
        img={Bukola}
        name={"Bukola Jennifer Daramola"}
        role={"Board Member"}
        desc={
          "I have over 15 years of experience as an educator, having worked in public, charter, and homeschool co-op settings, as well as in special education with adults and children with disabilities. I am an ambassador and longtime coach for the non-profit organization, Girls on the Run, an organization which serves to enhance the social, emotional, and physical skills of school-aged girls. I am passionate about my work and am looking forward to sharing my natural curiosity and love for learning with our students. During my free time, I enjoy going to the beach, listening to music, reading, and watching sports. I am an avid MN sports fan (except for football) and enjoy watching my home teams whenever I can."
        }
      />
      <GreenMember
        img={Victoria}
        name={"Victoria Olayinka"}
        role={"Board Member"}
        desc={
          "Originally hailing from Nigeria, Victoria Olayinka has spent several years in the United States. She secured her associate degree from Century College and went on to obtain her bachelor's in nursing from Capella University. Victoria is also a registered Public Health Nurse (PHN) in the state of Minnesota. With a rich history in the nursing field, Victoria has consistently showcased her aptitude in formulating and implementing strategies to support vulnerable populations. Her career has seen her serve as a registered nurse at various prominent Twin-Cities’ hospitals, including Hennepin County Medical Center, Regions Hospital, United Hospital, North Memorial Health Hospital, Nursing Homes, and as Home care Nurse. Victoria co-founded Metro Social Services Inc (MSSI) and serves as its Chief Executive Officer (CEO). MSSI is dedicated to empowering individuals, children, and families to achieve their maximum potential by enhancing their independent living skills. In her role as the executive director, Victoria is responsible for steering strategic direction, driving revenue growth, maintaining financial integrity, fostering organizational growth, and managing the team. In addition to her work at Metro Social Services Inc., Victoria co-initiated Mercy International Mission (MIM), encompassing two non-profit affiliates: Mercy International, Nigeria (Mercy Nigeria) and Mercy International Mission-USA (Mercy USA). These entities are dedicated to reducing disease and death rates in southwestern Nigeria, providing vital medical attention, preventive health measures, and health-related education. Moreover, they engage in initiatives to uplift local communities through self-enhancement programs, thereby elevating the residents' overall quality of life. Since its inception in 2009, the organization has launched various services, including a fixed clinic, mobile healthcare units, telehealth services, medical outreach missions, health awareness campaigns, and a leadership program to nurture upcoming community entrepreneurs. Beyond her professional commitments, Victoria has been a steadfast pillar of the community, actively participating in various voluntary capacities. She has made significant contributions to the community, serving as the African Christian Fellowship Children Coordinator, Program Coordinator, and Director of Missions."
        }
      />
      <WhiteMember
        img={Andrew}
        name={"Andrew Daramola"}
        role={"Board Member"}
        desc={
          "Andrew Daramola is a school administrator at the Da Vinci Schools in Los Angeles, California. He was born and grew up in the Twin Cities, Minnesota to parents from Ekiti State, Nigeria. Andrew received his B.A. in Geography and Urban Studies from Temple University, M.Ed from Marquette University, and administrative credential from the University of Southern California. He has worked in education for the past 15 years, working as a teacher in Milwaukee, Philadelphia, and Los Angeles, a director at an education nonprofit, and as a school administrator. Andrew currently lives in Los Angeles with his wife and two children."
        }
      />
      <GreenMember
        img={Samson}
        name={"Samson Oluwagbemiga Alayande"}
        role={"Board Member"}
        desc={
          "Samson Oluwagbemiga Alayande holds a PhD in Chemistry with a specialization in Materials Chemistry. He has four patents and over sixty scientific journal articles to his credit. He is a seasoned scholar, entrepreneur, and public speaker. He co-founded GSE Schools, Ibadan, Nigeria and Transnational Career Consultant LLC, US. He is currently the President, Glorious Eagles LLC, USA. He is a volunteer Pastor in Mountain of Fire and Miracles Ministries and currently pastoring Brooklyn Center branch, Minnesota, USA. He is happily married to Omolola and blessed with children."
        }
      />
      <Footer />
    </div>
  ) : (
    <div
      style={{
        background: "#EAF0E8",
        width: "30rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MobileNavbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5rem",
          padding: "2rem 0",
        }}
      >
        <h1
          style={{
            color: "var(--22495F, #22495F)",
            textAlign: "center",
            fontSize: "1.625rem",
            fontWeight: "600",
            lineHeight: "120%",
            fontFamily: "Clash Display",
          }}
        >
          Meet our team
        </h1>
        <p
          style={{
            color: "var(--text-color, #374151)",
            fontSize: "0.8125rem",
            fontWeight: "500",
            lineHeight: "160%",
            opacity: "0.6",
            textAlign: "center",
            width: "20rem",
          }}
        >
          Our team is comprised of dedicated individuals who share a common
          passion for creating positive change in Africa.
        </p>
      </div>
      <MobileWhiteMember
        img={Lucas}
        name={"Lucas Oribamise"}
        role={"Founder/President"}
        desc={
          "Lucas Oribamise is the founder of Ginoba Foundation, whose main objective is to help the less privileged across the continent of Africa with emphasis on quality healthcare, scholarship, capacity building, education and mentorship. He is a seasoned entrepreneur and has twenty years experience in business and investment across the globe. He is passionate about impacting this generation and adding value to their lives.He is married with children."
        }
      />
      <MobileGreenMember
        img={Sahr}
        name={"Sahr Thomas"}
        role={"Board Member"}
        desc={
          "Sahr Thomas. I attended Mansfield University of Pennsylvania for my undergraduate and Eastern University for masters. I am currently the president at Blossom Services Group LLC. When I am not working, I like to spend time with my family. He is married with children "
        }
      />
      <MobileWhiteMember
        img={Bukola}
        name={"Bukola Jennifer Daramola"}
        role={"Board Member"}
        desc={
          "I have over 15 years of experience as an educator, having worked in public, charter, and homeschool co-op settings, as well as in special education with adults and children with disabilities. I am an ambassador and longtime coach for the non-profit organization, Girls on the Run, an organization which serves to enhance the social, emotional, and physical skills of school-aged girls. I am passionate about my work and am looking forward to sharing my natural curiosity and love for learning with our students. During my free time, I enjoy going to the beach, listening to music, reading, and watching sports. I am an avid MN sports fan (except for football) and enjoy watching my home teams whenever I can."
        }
      />
      <MobileGreenMember
        img={Victoria}
        name={"Victoria Olayinka"}
        role={"Board Member"}
        desc={
          "Originally hailing from Nigeria, Victoria Olayinka has spent several years in the United States. She secured her associate degree from Century College and went on to obtain her bachelor's in nursing from Capella University. Victoria is also a registered Public Health Nurse (PHN) in the state of Minnesota. With a rich history in the nursing field, Victoria has consistently showcased her aptitude in formulating and implementing strategies to support vulnerable populations. Her career has seen her serve as a registered nurse at various prominent Twin-Cities’ hospitals, including Hennepin County Medical Center, Regions Hospital, United Hospital, North Memorial Health Hospital, Nursing Homes, and as Home care Nurse. Victoria co-founded Metro Social Services Inc (MSSI) and serves as its Chief Executive Officer (CEO). MSSI is dedicated to empowering individuals, children, and families to achieve their maximum potential by enhancing their independent living skills. In her role as the executive director, Victoria is responsible for steering strategic direction, driving revenue growth, maintaining financial integrity, fostering organizational growth, and managing the team. In addition to her work at Metro Social Services Inc., Victoria co-initiated Mercy International Mission (MIM), encompassing two non-profit affiliates: Mercy International, Nigeria (Mercy Nigeria) and Mercy International Mission-USA (Mercy USA). These entities are dedicated to reducing disease and death rates in southwestern Nigeria, providing vital medical attention, preventive health measures, and health-related education. Moreover, they engage in initiatives to uplift local communities through self-enhancement programs, thereby elevating the residents' overall quality of life. Since its inception in 2009, the organization has launched various services, including a fixed clinic, mobile healthcare units, telehealth services, medical outreach missions, health awareness campaigns, and a leadership program to nurture upcoming community entrepreneurs. Beyond her professional commitments, Victoria has been a steadfast pillar of the community, actively participating in various voluntary capacities. She has made significant contributions to the community, serving as the African Christian Fellowship Children Coordinator, Program Coordinator, and Director of Missions."
        }
      />
      <MobileWhiteMember
        img={Andrew}
        name={"Andrew Daramola"}
        role={"Board Member"}
        desc={
          "Andrew Daramola is a school administrator at the Da Vinci Schools in Los Angeles, California. He was born and grew up in the Twin Cities, Minnesota to parents from Ekiti State, Nigeria. Andrew received his B.A. in Geography and Urban Studies from Temple University, M.Ed from Marquette University, and administrative credential from the University of Southern California. He has worked in education for the past 15 years, working as a teacher in Milwaukee, Philadelphia, and Los Angeles, a director at an education nonprofit, and as a school administrator. Andrew currently lives in Los Angeles with his wife and two children."
        }
      />
      <MobileGreenMember
        img={Samson}
        name={"Samson Oluwagbemiga Alayande"}
        role={"Board Member"}
        desc={
          "Samson Oluwagbemiga Alayande holds a PhD in Chemistry with a specialization in Materials Chemistry. He has four patents and over sixty scientific journal articles to his credit. He is a seasoned scholar, entrepreneur, and public speaker. He co-founded GSE Schools, Ibadan, Nigeria and Transnational Career Consultant LLC, US. He is currently the President, Glorious Eagles LLC, USA. He is a volunteer Pastor in Mountain of Fire and Miracles Ministries and currently pastoring Brooklyn Center branch, Minnesota, USA. He is happily married to Omolola and blessed with children."
        }
      />
      <MobileFooter />
    </div>
  );
}
