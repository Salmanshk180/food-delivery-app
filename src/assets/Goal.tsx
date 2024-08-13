import * as React from 'react';
import Svg, {ClipPath, Defs, G, Mask, Path} from 'react-native-svg';
const Goal = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Mask
        id="b"
        width={23}
        height={23}
        x={0}
        y={-1}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'luminance',
        }}>
        <Path fill="#fff" d="M.001-.01h22v22h-22v-22Z" />
      </Mask>
      <G
        stroke="#76BC3F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.375}
        mask="url(#b)">
        <Path d="M11.002 17.692a6.71 6.71 0 0 1-6.704-6.703 6.71 6.71 0 0 1 6.704-6.703 6.71 6.71 0 0 1 6.703 6.703 6.71 6.71 0 0 1-6.703 6.703Z" />
        <Path d="M11.002 13.825a2.84 2.84 0 0 1-2.836-2.836A2.84 2.84 0 0 1 11 8.153a2.84 2.84 0 0 1 2.836 2.836 2.84 2.84 0 0 1-2.835 2.836ZM11.002 10.99l4.74-4.74M20.997 3.73l-2.734 2.735-2.522-.213-.213-2.521L18.263.996l.212 2.522 2.522.213Z" />
        <Path d="m19.563 5.162-1.3 1.3-2.522-.213-.212-2.521 1.3-1.3A10.307 10.307 0 0 0 11 .634C5.282.634.646 5.27.646 10.989c0 5.72 4.636 10.356 10.355 10.356 5.72 0 10.356-4.637 10.356-10.356 0-2.16-.662-4.167-1.794-5.827Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Goal;
