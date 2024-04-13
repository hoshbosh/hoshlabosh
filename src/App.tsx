import './index.css'
import Section from './section/Section'
function App() {

  return (
      <div className='primary-container'>


        <Section isHighlight={false} title="Hi, my name is Joshua Labasbas">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima adipisci amet nihil quaerat. Totam itaque cumque architecto ad, nisi impedit magni incidunt modi repellat eius porro tempore facere nobis sed!
        </Section>
        <Section isHighlight={true} title="yuh ay">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima adipisci amet nihil quaerat. Totam itaque cumque architecto ad, nisi impedit magni incidunt modi repellat eius porro tempore facere nobis sed!
          <img className="p-10" src='./pawn.png'/>
        </Section>

    </div>
  )
}

export default App
