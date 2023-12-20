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
import Event from "./pages/Event";
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
        <Route
          path="/event-1"
          element={
            <Event
              title={
                "Ginoba Foundation Spreads Festive Cheer, Donates 50 Bags of Rice to Widows, Widowers, and Less Privileged in  Emure, Ekiti"
              }
              location={"Emure, Ekiti state, Nigeria"}
              date={"December 14, 2022 9:00 AM"}
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
            />
          }
        />
        <Route
          path="/event-2"
          element={
            <Event
              title={
                "Ginoba Foundation Spreads Festive Cheer, Donates 50 Bags of Rice to Widows, Widowers, and Less Privileged in Oye-Ekiti"
              }
              location={"Oye-Ekiti, Ekiti state, Nigeria"}
              date={"December 14, 2022 9:00 AM"}
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
            />
          }
        />
        {/* <Route path="/project" element={<Project />} />
        <Route path="/event" element={<Event />} />
        <Route path="/blog" element={<Blog />} /> */}
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
