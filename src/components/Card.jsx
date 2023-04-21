export default function Card(props) {
  return (
    <div 
    class="bg-cyan-600 p-4 text-center"
    classList={{"rounded-md": props.rounded, "shadow-md": !props.flat}}
    >
    <h2>{props.title}</h2>
    <p>Lorem ipsum dolor sit amet consectur adipisicing elit. Ab ullam harum velit porro autem odio!</p>
    <button class="btn">Click me!</button>

      <div>
      {props.children}
      </div>
    </div>
  )
}