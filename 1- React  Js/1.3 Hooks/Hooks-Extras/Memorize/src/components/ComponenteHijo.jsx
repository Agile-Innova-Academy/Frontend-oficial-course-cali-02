import { memo } from "react"

// eslint-disable-next-line react/prop-types
const ComponenteHijo = ({text, count, increm}) => {
    console.log("Ingrese al Hijo", text)
  return (
    <div>
            <p>{text}</p>
            <h2>{count}</h2>
            <button onClick={increm}>+1</button>

    </div>
  )
}

export default memo(ComponenteHijo)