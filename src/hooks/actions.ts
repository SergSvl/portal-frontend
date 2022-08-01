import { useDispatch } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { setIsAuth, unsetIsAuth } from "@/store/home/homeSlice"

const actions = {
  setIsAuth, 
  unsetIsAuth
}

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}