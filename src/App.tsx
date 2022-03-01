import { useEffect } from "react";
// By using this Hook,
// you tell React that your component needs to do something after render.
// React will remember the function you passed
// (we’ll refer to it as our “effect”),
// and call it later after performing the DOM updates.
import { useDispatch, useSelector } from "react-redux";
// useDispatch hook is used to dispatch an action
// useSelector hook is used to get the state from the redux store
import Result from "components/Result";