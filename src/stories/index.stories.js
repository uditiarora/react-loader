import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import Loader from "../index";


storiesOf("Loader", module)
  .addDecorator(centered)
  .add("BallTriangle", () => <Loader width={200} height={200} type="BallTriangle" />)
  .add("Bars", () => <Loader width={200} height={200} type="Bars" />)
  .add("Clock", () => <Loader width={200} height={200} type="Clock" />)
  .add("Compass", () => <Loader width={200} height={200} type="Compass" />)
  .add("DancingSquares", () => <Loader width={200} height={200} type="DancingSquares" />)
  .add("FallingBars", () => <Loader width={200} height={200} type="FallingBars" />)
  .add("Flower", () => <Loader width={200} height={200} type="Flower" />)
  .add("HexagonRipple", () => <Loader width={200} height={200} type="HexagonRipple" />)
  .add("InfinitePlug", () => <Loader width={200} height={200} type="InfinitePlug" />)
  .add("Loading", () => <Loader width={200} height={200} type="Loading" />)
  .add("MultipleRings", () => <Loader width={200} height={200} type="MultipleRings" />)
  .add("Rectangles", () => <Loader width={200} height={200} type="Rectangles" />)
  .add("Ring", () => <Loader width={200} height={200} type="Ring" />)
  .add("Ripples", () => <Loader width={200} height={200} type="Ripples" />)
  .add("Simple", () => <Loader width={200} height={200} type="Simple" />)
  .add("Square", () => <Loader width={200} height={200} type="Square" />)
  .add("ThreeDots", () => <Loader width={200} height={200} type="ThreeDots" />)
  .add("ThreeJumpingDots", () => <Loader width={200} height={200} type="ThreeJumpingDots" />)
  .add("ThreeRings", () => <Loader width={200} height={200} type="ThreeRings" />)
  .add("Wheel", () => <Loader width={200} height={200} type="Wheel" />)
  