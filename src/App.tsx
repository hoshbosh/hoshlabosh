import './index.css'
import Section from './section/Section'
import YoutubeEmbed from "./YoutubeEmbed";
function App() {
  return (
      <div className='primary-container'>
        <Section isHighlight={false} images={[]} title="Hi, my name is Joshua Labasbas" subtitle="">
          <div className='h-full text-center'>
            I am a second-year computer science major at the University of Florida. I come from Ocala, Florida and I went to the Villages Charter Highschool where 
            I graduated with my Associate's of Arts and as Salutatorian of my class. I enjoy being active, which for me means rock climbing.
             My interests in computer science mostly pretain to full-stack web development and computer graphics, but I am also passionate about robotics and machine learning.
          </div>
          <div className='place-content-center flex'>
            <img src='./me.jpeg' className="pt-5 rounded-lg w-3/4 slide-in fade-in from-right scale-25"/>
          </div>

        </Section>

        <Section isHighlight={true} title="Bl1nda" images={["shanks_bl1nda.jpeg", "bl1nda.jpeg"]} subtitle="Fall 2022">
          <div className="h-full max-w-prose slide-in fade-in from-left  align-middle content-center">
            The first project I worked on was a VEX robot in my senior year of high school. Prior I had taken a few Java classes but this was the first project that exposed me to 
            C++, robotics, and working in a team. It was here that I was most inspired to persue computer science, I worked with two other students on our robot, named "Bl1nda." 
            We competed in one competition with another robot from our high school. 

          </div>
          <div className='flex place-content-center'>
          <img className="scale-50 w-3/4 slide-in fade-in from-right rounded-lg" src='./bl1nda.jpeg'/>
          </div>

        </Section>
        <Section isHighlight={false} title="NHS Attendance" images={[]} subtitle="Spring 2022">
          <div className="p-10 h-full text-center slide-in fade-in from-left">
          Also in my senior year in high school, for a class we were asked to create a National Honor Society(NHS) attendance application. Our NHS sponsor teacher 
          came to our class asking for a faster way to log student attendance in meetings, our class devised using a barcode scanner to scan student ID cards to be saved to 
          a database. Each student was tasked to make their own full-stack application, using Microsoft SQL Server, Java, and Microsoft Access to allow the teacher to record student, delete/create students,
          and see which students have missed 2 or more meetings. The application we implemented sped up the attendance taking process by 85% percent over the traditional searching for names on a paper list of 
          names.
          </div>
        </Section>
        <Section isHighlight={true} title="Robodog" images={[]} subtitle="Spring 2022">
          <div className="p-10 h-full text-center slide-in fade-in from-left">
            In my final year of high school myself and my team created a Robotic Dog that is capable of 
            being given water, avoiding obstacles, and runs away towards dark places when scared by loud noises. 
            This dog was created using an Arduino board and a motor shield for controlling the motorized wheels. We used 
            the Arduino dialect for C++
          </div>
        </Section>

        <Section isHighlight={false} title="Music Recommender" images={[]} subtitle="Spring 2023">
          <div className="p-10 h-full text-center slide-in fade-in from-left">
            For my intro to computer networking class, for my final project I created a music recommendation server. This server was written in 
            Java, it used a TCP connection to communicate with the client CLI. The program used hard coded responses, but I look to hook this up to a more 
            robust music recommendation API in the future. This project was great for learning TCP and the fundamentals of networking. The server-client architecture 
            was testing using UF computer lab machines, meaning that they were run on Linux, specifically Ubuntu. The github repository is linked <a href="https://github.com/hoshbosh/PA3_Labasbas" target="_blank">here</a>
          </div>
        </Section>
        <Section isHighlight={true} title="Sentiment Stock Picker" images={[]} subtitle="Fall 2023">
          <div className="p-10 h-full text-center slide-in fade-in from-left">
            For my intro to machine learning class, my team of two other programmers and I created a collection of machine learning models to attempt to predict stock market trends
            while also taking into account the sentiment of popular financial news headlines. The company that was examined was the RTX corporation, we trained a linear regression, linear discriminant analysis,
            SGD classifier, K nearest neighbors classifiers, random forest classifier, and Gaussian process classifier. The models were extremely inaccurate, while in part this was due to overfitting, it is also 
            notoriously difficult to have a moderately accurate stock predictor. 
          </div>
        </Section>
        <Section isHighlight={false} title="Wikipedia Game Solver" images={[]} subtitle="Spring 2023">
          <div className="p-10 h-full text-center">
          {/* <div className="p-10 h-full text-center slide-in fade-in from-left"> */}
            The Wikipedia game involves having a source Wikipedia article to a target Wikipedia article by only using the links between articles. This project was done in a team with two other programmers, for our 
            data structures and algorithms class. We approached the problem like graph problem, with the potential graph having hundreds of thousands of nodes and millions of possible connections. We gathered the data using GoLang to 
            get all the article pages and their connections. We compared solutions using a breadth-first search and a iterative-deepening depth first algorithm, these were implemented using C++ and the UI was implemented using ImGui.
            <YoutubeEmbed embedId={"FKxYVZUkdeg"}/>
          </div>

        </Section>
        <Section isHighlight={true} title="ZenState" images={[]} subtitle="Spring 2024">
          <div className="p-10 h-full text-center slide-in fade-in from-left">
            <a href='https://intro-swe-project-hoshboshs-projects.vercel.app/' target="_blank">here</a>
          </div>
        </Section>

        <Section isHighlight={false} title="Raytracer" images={[]} subtitle="Spring 2024">
          <div className="p-10 h-full text-center slide-in fade-in from-left">
            <a href="https://youtube.com/shorts/wJNnKOjAEIQ?feature=share" target="_blank">here</a>
            <img src="./everything.png"/>
          </div>
        </Section>

        <Section isHighlight={true} title="Graphics Pipeline Model Viewer" images={[]} subtitle="Spring 2024">
          <div className="p-10 h-full text-center slide-in fade-in from-left">
            <img src="./pawn.png"/>
          </div>
        </Section>
    </div>
  )
}

export default App
