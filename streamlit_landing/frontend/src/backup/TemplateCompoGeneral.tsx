import { FunctionComponent, useEffect } from "react"
import { Streamlit, withStreamlitConnection } from "streamlit-component-lib"

const CompName: FunctionComponent = (props) => {
  useEffect(() => Streamlit.setFrameHeight())

  return <div>CompName</div>
}

export default withStreamlitConnection(CompName)
