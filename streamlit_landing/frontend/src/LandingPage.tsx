import { FunctionComponent, useEffect } from "react"
import { Streamlit, withStreamlitConnection } from "streamlit-component-lib"
import "./LandingPage.css"

const LandingPage: FunctionComponent<{
  args: { title1: string; title2: string }
}> = ({ args }) => {
  useEffect(() => Streamlit.setFrameHeight(800))

  const { title1, title2 } = args

  return (
    <main>
      <div>
        <div className="title1">{title1}</div>
        <div className="title2">{title2}</div>
      </div>
      <div>Hi Welcome to this demo!</div>
      <div>
        <p>
          Based on the experience of Amazon e-commerce Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatu Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id es
        </p>
      </div>
      <div className="div-submit">
        <div className="div-roles">
          <span>role1</span>
          <span>role1</span>
          <span>role1</span>
          <span>role1</span>
          <span>role1</span>
          <span>role1</span>
          <span>role1</span>
          <span>role1</span>
          <span>role1</span>
          <span>role1</span>
        </div>
        <button
          className="btn-start"
          onClick={() => {
            console.log("clicked")
          }}
        >
          Start
        </button>
      </div>
    </main>
  )
}

export default withStreamlitConnection(LandingPage)
