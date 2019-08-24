import React from "react"
import { storiesOf } from "@storybook/react"

storiesOf(`Dashboard/Header`, module).add(`default`, () => (
  <div>
    <h1 className="font-sans text-blue-100">Hello from Storybook and Gatsby!</h1>
  </div>
))
