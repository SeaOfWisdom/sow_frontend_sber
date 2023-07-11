import { useEffect, useState } from "react";
import SettingsInput from "../../sections/settings/SettingsInput";
import SettingsSaveBtn from "../../sections/settings/SettingsSaveBtn";
import { MailCodeContainer, MailSettingsContainer } from "../../styleComponents/settings/MailSettingsStyle";
import Layout from "../Layout";
import SettingsBar from "./SettingsBar";
import Modal from "../../sections/layout/Modal";
import { HStack, PinInput, PinInputField } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../../utils/httpClient";
import { useTranslation } from 'react-i18next';

const MailSettings = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const {account, walletData} = useSelector(s=>s);
    const dispatch = useDispatch();
    const [obj, setObj] = useState({});
    useEffect(()=>{setObj({email_address: account?.email_address??''})}, [account])
    // useEffect(()=>{
    //     if(account?.user_role===4){
    //         getValidatorData();
    //     }else{
    //         if(account?.user_role===2){
    //             getAuthorData();
    //         }else{
    //             getBasicInfo();
    //         }
    //     }
    // }, [account?.user_role])
    const getBasicInfo = () => {
        dispatch({ type: "SET_LOADING", payload: true });
        Axios()
          .get(`/get_basic_info`)
          .then((res) => { 
            setObj({ email_address: res?.data?.email_address??''  });
          })
          .catch((r) => {}).finally(()=>{
            dispatch({ type: "SET_LOADING", payload: false });
          });
    };
    const getAuthorData = () => {
        dispatch({ type: "SET_LOADING", payload: true });
        Axios()
          .get(`/author_info/${walletData?.accountAddress}`)
          .then((res) => { 
            setObj({  email_address: res?.data?.author_info?.email_address??''  });
          }).finally(()=>{
            dispatch({ type: "SET_LOADING", payload: false });
          })
          .catch((r) => {});
    };
    const getValidatorData = () => {
        dispatch({ type: "SET_LOADING", payload: true });
        Axios()
          .get(`/validator_info/${walletData?.accountAddress}`)
          .then((res) => {     
            setObj({   email_address: res?.data?.validator_info?.email_address??''  });
          })
          .finally(() => {
            dispatch({ type: "SET_LOADING", payload: false });
          })
          .catch((r) => {});
    };

    const handleChange = (e) => {
        setObj({ ...obj, [e.target.name]: e.target.value });
        // setErr({ ...err, [e.target.name]: false });
      };
    return(<>
    <Layout>
        <SettingsBar>
            <MailSettingsContainer>
                <div className="title">{t('mail_settings.editEmail')}</div>
                <form>
                    <SettingsInput
                        label={t('mail_settings.email')}
                        placeholder="xxxx@mail.com"
                        value={obj?.email_address}
                        onChange={handleChange}
                        name="email_address"
                    />
                    <SettingsSaveBtn
                        onClick={()=>{setIsOpen(true)}}
                        text={t('mail_settings.saveChanges')}
                    />
                </form>
            </MailSettingsContainer>
        </SettingsBar>
    </Layout>
    <Modal isOpen={isOpen} onOpen={setIsOpen}> 
        <MailCodeContainer>
            <div className="mtitle">{t('mail_settings.confirmEmail')}</div>
            <div className="desc">
                {t('mail_settings.sentVerificationCode')}
                <br/>
                {t('mail_settings.enterCodeInFieldBelow')}
            </div>
            <div className="code">
                <HStack>
                    <PinInput placeholder="" focusBorderColor='transparent'>
                        <PinInputField   />
                        <PinInputField   />
                        <PinInputField   />
                        <PinInputField   />
                        <PinInputField   />
                    </PinInput>
                </HStack>
            </div>
            <div className="btns"> 
                <button onClick={()=>{setIsOpen(false)}} className="btn">{t('mail_settings.confirm')}</button>
            </div>
            <div className="footext">
                {t('mail_settings.noKey')}
                <span>{t('mail_settings.sendAgain')}</span>
            </div>
        </MailCodeContainer>
    </Modal>
    </>)
}
export default MailSettings;