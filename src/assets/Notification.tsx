import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
const Notification = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}>
    <Circle cx={20} cy={20} r={20} fill="#E8FFD6" />
    <Path
      fill="#76BC3F"
      d="M23.334 28.123c0 .18-.07.352-.195.479a.661.661 0 0 1-.471.198h-5.335a.661.661 0 0 1-.471-.198.682.682 0 0 1 0-.957.662.662 0 0 1 .471-.199h5.335c.176 0 .346.072.471.199s.195.299.195.478Zm4.485-4.066c-.463-.81-1.15-3.098-1.15-6.088a6.822 6.822 0 0 0-1.954-4.786A6.618 6.618 0 0 0 20 11.2a6.617 6.617 0 0 0-4.714 1.983 6.821 6.821 0 0 0-1.953 4.786c0 2.99-.689 5.279-1.151 6.088a1.368 1.368 0 0 0 .483 1.853c.203.12.433.182.668.183h13.335c.235 0 .465-.064.668-.183a1.37 1.37 0 0 0 .483-1.853Z"
    />
    <Circle cx={25} cy={12} r={4.5} fill="#E23E3E" stroke="#E8FFD6" />
  </Svg>
);
export default Notification;
