import './index.css'
import Section from './section/Section'
function App() {

  return (
      <div className='primary-container'>
        <Section isHighlight={false} title="Hi, my name is Joshua Labasbas">
          <div className='h-full text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima adipisci amet nihil quaerat. Totam itaque cumque architecto ad, nisi impedit magni incidunt modi repellat eius porro tempore facere nobis sed!
          </div>
          <img className=" w-3/4" src='./pawn.png'/>
        </Section>
        <Section isHighlight={true} title="yuh ay">
          <div className="p-10 h-full max-w-prose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima adipisci amet nihil quaerat. Totam itaque cumque architecto ad, nisi impedit magni incidunt modi repellat eius porro tempore facere nobis sed!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus corrupti enim inventore quae mollitia doloremque sint aperiam dolor impedit, eum architecto excepturi assumenda rem dolores modi necessitatibus officiis ipsa.
          </div>
          <img className=" w-3/4 slide-in fade-in from-right" src='./pawn.png'/>
          <div className='lg:min-w-1/4'></div>
        </Section>
        <Section isHighlight={false} title="Hi, my name is Joshua Labasbas">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima adipisci amet nihil quaerat. Totam itaque cumque architecto ad, nisi impedit magni incidunt modi repellat eius porro tempore facere nobis sed!
        </Section>
    </div>
  )
}

export default App
