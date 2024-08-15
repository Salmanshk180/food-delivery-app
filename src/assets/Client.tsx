import * as React from "react"
import Svg, { Circle } from "react-native-svg"
const Client = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <Circle cx={25} cy={25} r={25} fill="#E8FFD6" />
  </Svg>
)
export default Client
