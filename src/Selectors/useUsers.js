import { useSelector } from "react-redux";

export default function useUsers() {
    return useSelector(({ application }) => application.users);
}