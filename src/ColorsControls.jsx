// ColorControls.jsx
export default function ColorControls({ setDialColor, setStrapColor }) {
    return (
      <div className="ui">
        <div>
          <h3>Dial Color</h3>
          <button onClick={() => setDialColor('#ff0000')}>Red</button>
          <button onClick={() => setDialColor('#00ff00')}>Green</button>
          <button onClick={() => setDialColor('#0000ff')}>Blue</button>
          <button onClick={() => setDialColor('#ffff00')}>Yellow</button>
        </div>
  
        <div>
          <h3>Strap Color</h3>
          <button onClick={() => setStrapColor('#ffffff')}>White</button>
          <button onClick={() => setStrapColor('#222222')}>Dark</button>
          <button onClick={() => setStrapColor('#8b4513')}>Brown</button>
          <button onClick={() => setStrapColor('#808080')}>Gray</button>
        </div>
      </div>
    )
  }
  