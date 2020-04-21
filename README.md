# react-loader

To see a demo of all the components, go to: [https://uditiarora.github.io/react-loader/](https://uditiarora.github.io/react-loader/)

### Installation

##### Using NPM:
#
```sh
$ npm install react-loader-web --save
```

### Example
```js
 import Loader from 'react-loader-web'
 export default class App extends React.Component {
    render() {
	 return(
	  <Loader
	     type="Simple"
	     color="#00BFFF"
	     height={100}
	     width={100}
	     timeout={3000}

	  />
	 );
    }
 }
```
### Types of Loaders
react-loader-web component has the following types of spinners.

| Spinner Type | Implementation |
| ------ | ------ |
| BallTriangle|``` <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} />``` |
| Bars|``` <Loader type="Bars" color="#00BFFF" height={100} width={100} />``` |
| Clock|``` <Loader type="Clock" color="#00BFFF" height={100} width={100} />``` |
| Compass|``` <Loader type="Compass" color="#00BFFF" height={100} width={100} />``` |
| DancingSquares|``` <Loader type="DancingSquares" color="#00BFFF" height={100} width={100} />``` |
| FallingBars|``` <Loader type="FallingBars" color="#00BFFF" height={100} width={100} />``` |
| Flower|``` <Loader type="Flower" color="#00BFFF" height={100} width={100} />``` |
| HexagonRipple|``` <Loader type="HexagonRipple" color="#00BFFF" height={100} width={100} />``` |
| InfinitePlug|``` <Loader type="InfinitePlug" color="#00BFFF" height={100} width={100} />``` |
| Loading|``` <Loader type="Loading" color="#00BFFF" height={100} width={100} />``` |
| MultipleRings|``` <Loader type="MultipleRings" color="#00BFFF" height={100} width={100} />``` |
| Rectangles|``` <Loader type="Rectangles" color="#00BFFF" height={100} width={100} />``` |
| Ring|``` <Loader type="Ring" color="#00BFFF" height={100} width={100} />``` |
| Ripples|``` <Loader type="Ripples" color="#00BFFF" height={100} width={100} />``` |
| Simple|``` <Loader type="Simple" color="#00BFFF" height={100} width={100} />``` |
| Square|``` <Loader type="Square" color="#00BFFF" height={100} width={100} />``` |
| ThreeDots|``` <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />``` |
| ThreeJumpingDots|``` <Loader type="ThreeJumpingDots" color="#00BFFF" height={100} width={100} />``` |
| ThreeRings|``` <Loader type="ThreeRings" color="#00BFFF" height={100} width={100} />``` |
| Wheel|``` <Loader type="Wheel" color="#00BFFF" height={100} width={100} />``` |
