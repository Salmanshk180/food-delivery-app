import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Add = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    {...props}>
    <Path
      fill={props.onFocus ? '#76BC3F' : '#838383'}
      d="M32.2 9a23 23 0 1 0 23 23 23.027 23.027 0 0 0-23-23Zm0 43.294A20.294 20.294 0 1 1 52.494 32 20.317 20.317 0 0 1 32.2 52.294ZM42.573 32a1.353 1.353 0 0 1-1.353 1.353h-7.667v7.667a1.353 1.353 0 0 1-2.706 0v-7.667h-7.666a1.353 1.353 0 1 1 0-2.706h7.666V22.98a1.353 1.353 0 1 1 2.706 0v7.667h7.667A1.353 1.353 0 0 1 42.573 32Z"
    />
  </Svg>
);
export default Add;
