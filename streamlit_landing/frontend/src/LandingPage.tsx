import { FunctionComponent, useEffect, useState } from "react"
import { Streamlit, withStreamlitConnection } from "streamlit-component-lib"
import "./LandingPage.css"
import pageLogo from "./assets/aws-logo.png"

const ROLES = [
  "role1",
  "role2",
  "role3",
  "role4",
  "role5",
  "role6",
  "role7",
  "role8",
  "role9",
  "role10",
  "role11",
  "role12",
]
const LandingPage: FunctionComponent<{
  args: { title1: string; title2: string }
}> = ({ args }) => {
  const [activeRole, setActiveRole] = useState(ROLES[0])
  useEffect(() => Streamlit.setFrameHeight(1200))

  const { title1, title2 } = args

  return (
    <main>
      <div className="div-logo">
        <img height="30" src={pageLogo} alt="Page Logo" />
      </div>
      <div>
        <div className="title1">{title1}</div>
        <div className="title2">{title2}</div>
      </div>
      <div>Hi Welcome to this demo!</div>
      <div>
        <p style={{ textAlign: "center" }}>
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
          {ROLES.map((role, index) => (
            <button
              onClick={() => {
                setActiveRole(role)
              }}
              key={index.toString()}
              className={activeRole === role ? "active-role" : ""}
            >
              {role}
            </button>
          ))}
        </div>
        <button
          className="btn-start"
          onClick={() => {
            console.log("clicked")
            window.location.href += "abc"
          }}
        >
          Start
        </button>
      </div>
    </main>
  )
}

export default withStreamlitConnection(LandingPage)
