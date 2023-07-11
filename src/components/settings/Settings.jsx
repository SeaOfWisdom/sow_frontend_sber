import { useSelector } from "react-redux"
import UserAccount from "./UserAccount";
import ValidatorAccount from "./ValidatorAccount";
import TeacherAccount from "./TeacherAccount"; 
import SimpleLoading from "../../sections/layout/SimpleLoading";
import Layout from "../Layout";

const Settings = () => {
    const {account} =  useSelector(s=>s);
    return(<>  
        {account?.role===4?<ValidatorAccount/>
        :account?.role===2?<TeacherAccount/>
        :account?.role===1?<UserAccount/>
        :<Layout><div style={{minHeight: '50vh'}}><SimpleLoading/></div></Layout>}
    </>)
}
export default Settings