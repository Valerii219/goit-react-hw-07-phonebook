import { useSelector } from "react-redux";

export const {item, isLoading, error} = useSelector(state => state.contacts)