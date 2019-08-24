import React from "react"
import { storiesOf } from "@storybook/react";
import NotFound from '../404'

storiesOf(`Pages/404`, module).add(`default`, () => (
  <NotFound />
))
