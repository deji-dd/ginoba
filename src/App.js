import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Do from "./pages/Do";
import Contact from "./pages/Contact";
import GetInvolved from "./pages/GetInvolved";
// import Project from "./pages/Project";
// import Event from "./pages/Event";
// import Blog from "./pages/Blog";
import Error from "./pages/Error";
import Team from "./pages/Team";
import EventPage from "./pages/EventPage";
import Event1Img1 from "./assets/event1-img1.png";
import Event1Img2 from "./assets/event1-img2.png";
import Event1Img3 from "./assets/event1-img3.png";
import Event1Img4 from "./assets/event1-img4.png";
import Event1Img5 from "./assets/event1-img5.png";
import Event1Img6 from "./assets/event1-img6.png";
import Event2Img1 from "./assets/event2-img1.png";
import Event2Img2 from "./assets/event2-img2.png";
import Event2Img3 from "./assets/event2-img3.png";
import Event2Img4 from "./assets/event2-img4.png";
import Event2Img5 from "./assets/event2-img5.png";
import Event2Img6 from "./assets/event2-img6.png";
import Event3Img1 from "./assets/event3-img1.png";
import Event3Img2 from "./assets/event3-img2.png";
import Event3Img3 from "./assets/event3-img3.png";
import Event3Img4 from "./assets/event3-img4.png";
import Event3Img5 from "./assets/event3-img5.png";
import Event3Img6 from "./assets/event3-img6.png";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import Project1Img1 from "./assets/project1_img1.png";
import Project1Img2 from "./assets/project1_img2.png";
import Project1Img3 from "./assets/project1_img3.png";
import Project1Img4 from "./assets/project1_img4.png";
import Events from "./pages/Events";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/what-we-do" element={<Do />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/event-2"
          element={
            <EventPage
              title={
                "Ginoba Foundation Spreads Festive Cheer, Donates 50 Bags of Rice to Widows, Widowers, and Less Privileged in  Emure, Ekiti"
              }
              location={"Emure, Ekiti state, Nigeria"}
              date={"December 06, 2023 9:00 AM"}
              desc1={
                "In a bid to embrace the spirit of giving and bring joy to the less privileged during this festive season, Ginoba Foundation, a non-profit organization based in Minnesota, USA, distributed 50 bags of rice to widows, widowers, and other less privileged families across the quarters of Emure. The event took place at the Event Center on the 6th of December, 2023, starting at 9:00 AM. This act of philanthropy followed the Foundation’s previous initiatives in 2021, where they made significant contributions to the community."
              }
              img1={Event1Img1}
              img2={Event1Img2}
              img3={Event1Img3}
              desc2={
                "They notably constructed one functioning borehole in a pivotal location at Emure demonstrating their commitment to improving living conditions and access to essential resources. \n\n Prince Ayo Joseph Ogunshina, Ginoba’s represntative as well as the crew from the governor office- Dr. Moyo Ekundayo, Special Adviser/Director General, Office of Transformation and Service Delivery (OTSD), Ekiti State; were among the dignitaries expected to grace the occasion. Representatives from all the 11 quarters were also present to witness the distribution of the much-needed supplies. \n\n “We aim to spread joy and put smiles on the faces of those who need it the most during this special season that celebrates the birth of our Savior, Lord Jesus Christ,” said a spokesperson from Ginoba Foundation. “Our mission has always been to uplift communities and create lasting positive impacts, and we’re honoured to have the support of esteemed individuals and community leaders in this endeavour.” \n\n The event provided essential sustenance but also fostered a sense of togetherness and hope among the recipients, reflecting the true essence of the festive season."
              }
              img4={Event1Img4}
              img5={Event1Img5}
              img6={Event1Img6}
              moreImages={
                "https://drive.google.com/drive/folders/1GoQw23AR8jUF8u9mutD5RVfN4-IXOCqi"
              }
            />
          }
        />
        <Route
          path="/event-3"
          element={
            <EventPage
              title={
                "Ginoba Foundation Spreads Festive Cheer, Donates 50 Bags of Rice to Widows, Widowers, and Less Privileged in Oye-Ekiti"
              }
              location={"Oye-Ekiti, Ekiti state, Nigeria"}
              date={"December 14, 2023 9:00 AM"}
              desc1={
                "In a bid to embrace the spirit of giving and bring joy to the less privileged during this festive season, Ginoba Foundation, a non-profit organization based in Minnesota, USA, distributed 50 bags of rice to widows, widowers, and other less privileged families across the 11 quarters of Oye-Ekiti. The event took place at the Oye Event Center on the 14th of December, 2023, starting at 9:00 AM. This act of philanthropy followed the Foundation’s previous initiatives in 2021, where they made significant contributions to the community."
              }
              img1={Event2Img1}
              img2={Event2Img2}
              img3={Event2Img3}
              desc2={
                "They notably constructed two functioning boreholes in different locations within Oye-Ekiti and modernized the toilets at SS Peter & Paul Catholic Church, demonstrating their commitment to improving living conditions and access to essential resources. \n\n Dr. Moyo Ekundayo, Special Adviser/Director General, Office of Transformation and Service Delivery (OTSD), Ekiti State; Mr. Ajimoko, the Oye Local Government Chairman, and Elder Bola Oniyelu, President of Oye Progressive Union (OPU), were among the dignitaries expected to grace the occasion. Representatives from all the 11 quarters were also present to witness the distribution of the much-needed supplies. \n\n “We aim to spread joy and put smiles on the faces of those who need it the most during this special season that celebrates the birth of our Savior, Lord Jesus Christ,” said a spokesperson from Ginoba Foundation. “Our mission has always been to uplift communities and create lasting positive impacts, and we’re honoured to have the support of esteemed individuals and community leaders in this endeavour.” \n\n The event provided essential sustenance but also fostered a sense of togetherness and hope among the recipients, reflecting the true essence of the festive season."
              }
              img4={Event2Img4}
              img5={Event2Img5}
              img6={Event2Img6}
              moreImages={
                "https://drive.google.com/drive/folders/1GoQw23AR8jUF8u9mutD5RVfN4-IXOCqi"
              }
            />
          }
        />
        <Route
          path="/event-1"
          element={
            <EventPage
              title={
                "Ginoba Foundation sponsors NGO to enroll 10 out-of-school children in Ibadan"
              }
              location={"Ibadan, Oyo state, Nigeria"}
              date={"December 05, 2023 9:00 AM"}
              desc1={
                "It was a huge relief for families of some out-of-school children in Ibadan as Treasure Builder Foundation, a non-profit organisation enrolled at least 10 street kids in school.\n\nThis comes three months after Tribune Online reported the living condition of out-of-school children in the State, with over 1,000 impressions on YouTube at the time of filing this report.\n\nInspired by the untold stories of these kids, the NGO in collaboration with Ginoba foundation (the donor) sponsored 10 out-of-school children in the State back to school."
              }
              img1={Event3Img1}
              img2={Event3Img2}
              img3={Event3Img3}
              desc2={
                "“Following the report of UNESCO about the out-of-school children in Nigeria that is running to (20 million) of which we have a lot of them in Oyo. Recently, Tribune Online did a documentary on out-of-school children where we were opportuned to be and we spoke at length about out-of-school children. This prompted human empathy in us and we felt we needed to do more.\n\n“We are so surprised that many of them were eager to go back to school. One of the reasons for this menace is parental failure. Many parents are not even able to take care of these children. Imagine a woman having about nine children, how will she take care of these children in this present economy?\n\n“The number of out-of-school children is skyrocketing and becoming unbecoming by the day. So, we need government and other well-meaning Nigerians to support this work. It’s a collective effort,” Mrs Christiana Daniel, Executive Director, Treasure Builder Foundation disclosed."
              }
              img4={Event3Img4}
              img5={Event3Img5}
              img6={Event3Img6}
              moreImages={
                "https://drive.google.com/drive/u/3/folders/1--h1gIPMWF22KGk8E3bCn_ZJ6G5OsbzM"
              }
              desc3={
                "One of the beneficiaries, Salim, 13, promised to convince some of his folks who are still in the street to join him in class while expressing his gratitude to the foundation.\n\nAnother beneficiary, Ahmad, 12, said he left school five years ago while he was in Primary One following the death of his father.\n\nIn his part, 12-year-old Abdulmalik was enthusiastic when our reporter visited his new school as he lauded the intervention of the foundation.\n\nThe caretaker in charge of street kids at Mokola Underbridge, Baba Awu also lauded the intervention while calling on other well-meaning Nigerians to do same."
              }
            />
          }
        />
        <Route
          path="/project-1"
          element={
            <ProjectPage
              title={"Back to Books: Reigniting Futures, One Child at a Time."}
              title2={
                "Ginoba Foundation sponsors NGO to enroll 10 out-of-school children in Ibadan"
              }
              location={"Ibadan, Oyo state, Nigeria"}
              date={"December 05, 2023"}
              desc1={
                "It was a huge relief for families of some out-of-school children in Ibadan as Treasure Builder Foundation, a non-profit organisation enrolled at least 10 street kids in school.\n\nThis comes three months after Tribune Online reported the living condition of out-of-school children in the State, with over 1,000 impressions on YouTube at the time of filing this report.\n\nInspired by the untold stories of these kids, the NGO in collaboration with Ginoba foundation (the donor) sponsored 10 out-of-school children in the State back to school."
              }
              img1={Project1Img1}
              img1desc={
                "Out-of-school kids spotted under Mokola overhead bridge"
              }
              desc2={
                "“Following the report of UNESCO about the out-of-school children in Nigeria that is running to (20 million) of which we have a lot of them in Oyo. Recently, Tribune Online did a documentary on out-of-school children where we were opportuned to be and we spoke at length about out-of-school children. This prompted human empathy in us and we felt we needed to do more.\n\n“We are so surprised that many of them were eager to go back to school. One of the reasons for this menace is parental failure. Many parents are not even able to take care of these children. Imagine a woman having about nine children, how will she take care of these children in this present economy?\n\n“The number of out-of-school children is skyrocketing and becoming unbecoming by the day. So, we need government and other well-meaning Nigerians to support this work. It’s a collective effort,” Mrs Christiana Daniel, Executive Director, Treasure Builder Foundation disclosed."
              }
              img2={Project1Img2}
              img2desc={"Mrs Christian Daniel"}
              desc3={
                "One of the beneficiaries, Salim, 13, promised to convince some of his folks who are still in the street to join him in class while expressing his gratitude to the foundation.\n\nAnother beneficiary, Ahmad, 12, said he left school five years ago while he was in Primary One following the death of his father.\n\nIn his part, 12-year-old Abdulmalik was enthusiastic when our reporter visited his new school as he lauded the intervention of the foundation."
              }
              img3={Project1Img3}
              img3desc={"Tribune reporter (left) during the advocacy visit"}
              desc4={
                "When asked about how she felt seeing his grandson going back to school, Mrs Safuratu Adebisi said; “Malik has been living with me since his mother separated from his dad. He has been roaming the street for some time now but I thank God that he is now finally back to school”.\n\nShe also appreciated the sponsor for taking the 13-year-old back to school saying there has been huge improvement in the grandson’s lifestyle since he was taken out of the street."
              }
              img4={Project1Img4}
              img4desc={"Abdulmalik’s grandma"}
              desc5={
                "For Mrs Saadatu Najim, the nurturing of Abdulmalik has been challenging, adding that the lad had been away from home for some months before his recent transformation. She also showered encomiums on the foundation for coming to her aid and giving her grandson hope for the future.\n\nThe caretaker in charge of street kids at Mokola Underbridge, Baba Awu also lauded the intervention while calling on other well-meaning Nigerians to do same."
              }
            />
          }
        />
        <Route
          path="/project-2"
          element={
            <ProjectPage
              title={
                "Sustainable Sanitation: Building Boreholes and  Modernising Toilets in Ekiti"
              }
              title2={
                "Ginoba Foundation builds multiple boreholes and toilets in churches within Oye-Ekiti"
              }
              location={"Oye-Ekiti, Ekiti state, Nigeria"}
              date={"–"}
              desc1={
                "The Ginoba foundation has notably constructed functioning boreholes in different locations within Oye-Ekiti and modernized the toilets at SS Peter & Paul Catholic Church, demonstrating their commitment to improving living conditions and access to essential resources."
              }
            />
          }
        />
        <Route path="/events" element={<Events />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
