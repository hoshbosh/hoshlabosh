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
          <div className="h-full slide-in fade-in from-left  align-middle content-center">
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
            notoriously difficult to have a moderately accurate stock predictor. Github repository linked <a href="https://github.com/KWagnerCS/StockPredictor" target="_blank">here</a> 
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
          <div className=" h-full text-center">
            <div>
              For my Intro to Software Engineering course, my team's semester long project was a productivity web application. Zenstate allows users to add friends 
              and then compete for the longest time spent focusing on their work. This app included user authentication, and full MongoDB CRUD functionality. The app used 
              Next.js and TailwindCSS. For this project, my team followed a SCRUM style workflow, having regular SCRUMs. I predominantly worked on the backend, interfacing with the 
              Next.js actions functionality, alongside MongoDB, for this project I also held the product manager role.
            </div>

            <a href='https://intro-swe-project-hoshboshs-projects.vercel.app/' target="_blank" className='flex place-content-center pt-10 pb-5'>
              <img className="scale-25 w-3/4 slide-in fade-in from-right rounded-lg" src='./zen.png'/>
            </a>
          </div>
        </Section>

        <Section isHighlight={false} title="Raytracer" images={[]} subtitle="Spring 2024">
          <div className=" h-full text-center slide-in fade-in from-left ">
            <div>
              For my data structures in computer graphics class, we were tasked to create a raytracer. Using OpenGL and C++, 
              we implemented diffuse shading, Phong shading, and ambient shading; additionally, we added in reflections by having the 
              rays bounce off. I implemented ray-circle intersection algorithms, we rendered the image by having a ray project from each pixel 
              on the screen. A video demonstration of the raytracer with a moving camera can be found by clicking on the image to a Youtube video.
            </div>
            <a className='pt-10 flex place-content-center' href="https://youtube.com/shorts/wJNnKOjAEIQ?feature=share" target="_blank">
              <img className='scale-25 w-3/4 slide-in fade-in from-right rounded-lg' src="./everything.png"/>
            </a>
          </div>
        </Section>

        <Section isHighlight={true} title="Graphics Pipeline Model Viewer" images={[]} subtitle="Spring 2024">
          <div className="p-5 h-full text-center slide-in fade-in from-left ">
            <div>
              For the same Data Structures in Computer Graphics course, we were later tasked to create a model renderer using the 
              modern OpenGL graphics pipeline. I was given .obj files and was required to create a program that is capable of reading in 
              a particular .obj file, then break it into triangles to be rendered by the graphics pipeline. We also wrote shaders to compare 
              doing matrix calculations in the shader vs on the CPU in the C++ code. Additionally, we implemented being able to control the scale, 
              translation, and rotation on all axises of the model. 
            </div>
            <div className="pt-10 flex place-content-center">
              <img src="./pawn.png" className='scale-25 w-3/4 slide-in fade-in from-right rounded-lg'/>
            </div>
          </div>
        </Section>
    </div>
  )
}

export default App
