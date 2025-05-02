import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  Circle,
} from 'react-native-svg';
const InstagramImageLogoBordered = (props: any) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Defs>
      <LinearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor="#feda75" />
        <Stop offset="25%" stopColor="#fa7e1e" />
        <Stop offset="50%" stopColor="#d62976" />
        <Stop offset="75%" stopColor="#962fbf" />
        <Stop offset="100%" stopColor="#4f5bd5" />
      </LinearGradient>
    </Defs>
    <Path
      d="M349.33 69.33H162.67C110.16 69.33 69.33 110.16 69.33 162.67v186.66c0 52.51 40.83 93.34 93.34 93.34h186.66c52.51 0 93.34-40.83 93.34-93.34V162.67c0-52.51-40.83-93.34-93.34-93.34z"
      stroke="url(#instaGradient)"
      strokeWidth={20}
      fill="none"
    />
    <Circle
      cx={256}
      cy={256}
      r={96}
      stroke="url(#instaGradient)"
      strokeWidth={20}
      fill="none"
    />
    <Circle
      cx={360}
      cy={160}
      r={20}
      stroke="url(#instaGradient)"
      strokeWidth={10}
      fill="none"
    />
  </Svg>
);
export default InstagramImageLogoBordered;
