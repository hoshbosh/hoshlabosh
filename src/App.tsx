import './index.css'
import Section from './section/Section'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import Carousel from './Carousel/Carousel';
function App() {
                  {/* <Slider autoplay={true}>
            <img src={"./pawn.png"} className='rounded-xl fade-in'/>
            <img src={"./me.jpeg"} className='rounded-xl fade-in'/>
          </Slider> */}
  return (
      <div className='primary-container'>
        <Section isHighlight={false} images={[]} title="Hi, my name is Joshua Labasbas">
          <div className='h-full text-center'>
            I am a second-year computer science major at the University of Florida. I come from Ocala, Florida and I went to the Villages Charter Highschool where 
            I graduated with my Associate's of Arts and as Salutatorian of my class. I enjoy being active, which for me means rock climbing.
             My interests in computer science mostly pretain to full-stack web development and computer graphics, but I am also passionate about robotics and machine learning.
          </div>

          <img src='./me.jpeg'/>

        </Section>

        <Section isHighlight={true} title="Bl1nda" images={["shanks_bl1nda.jpeg", "bl1nda.jpeg"]}>
          <div className="p-10 h-full max-w-prose slide-in fade-in from-left">
            The first project I worked on was a VEX robot in my senior year of high school. Prior I had taken a few Java classes but this was the first project that exposed me to 
            C++, robotics, and working in a team. It was here that I was most inspired to persue computer science, I worked with two other students on our robot, named "Bl1nda." 
            We competed in one competition with another robot from our high school. 
          </div>
          <Slider dots={true} arrows={true}>
            <div className="bg-plat">
            <h1>balls</h1>
            </div>
            <div className="bg-plat">
            <h1>balls</h1>
            </div>
          </Slider>
          {/* <img className=" w-3/4 slide-in fade-in from-right" src='./pawn.png'/> */}
        </Section>
        <Section isHighlight={false} title="NHS Attendance" images={[]}>
          <div className="p-10 h-full text-center slide-in fade-in from-left">
          Also in my senior year in high school, for a class we were asked to create a National Honor Society(NHS) attendance application. Our NHS sponsor teacher 
          came to our class asking for a faster way to log student attendance in meetings, our class devised using a barcode scanner to scan student ID cards to be saved to 
          a database. Each student was tasked to make their own full-stack application, using Microsoft SQL Server, Java, and Microsoft Access to allow the teacher to record student, delete/create students,
          and see which students have missed 2 or more meetings. The application we implemented sped up the attendance taking process by 85% percent over the traditional searching for names on a paper list of 
          names.
          </div>
        </Section>
        <Section isHighlight={true} title="Attendance" images={[]}>
          <div className="p-10 h-full text-center slide-in fade-in from-left">
          Also in my senior year in high school, for a class we were asked to create a National Honor Society(NHS) attendance application. Our NHS sponsor teacher 
          came to our class asking for a faster way to log student attendance in meetings, our class devised using a barcode scanner to scan student ID cards to be saved to 
          a database. Each student was tasked to make their own full-stack application, using Microsoft SQL Server, Java, and Microsoft Access to allow the teacher to record student, delete/create students,
          and see which students have missed 2 or more meetings. The application we implemented sped up the attendance taking process by 85% percent over the traditional searching for names on a paper list of 
          names
          </div>
        </Section>
                <Slider>
                    <img className="max-h-full text-center justify-center m-auto slide-in from-right fade-in rounded-xl" src={'./bl1nda.jpeg'}/>
                    <img src={'./me.jpeg'}/>
                </Slider>
    </div>
  )
}

export default App
