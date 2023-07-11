import { useEffect, useState } from "react";
import SettingsInput from "../../sections/settings/SettingsInput";
import SettingsSaveBtn from "../../sections/settings/SettingsSaveBtn";
import { UserAccountContainer } from "../../styleComponents/settings/UserAccountStyle";
import Layout from "../Layout";
import SettingsBar from "./SettingsBar";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../../utils/httpClient";
import { Box, useToast } from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';

const UserAccount = () => {
  const { t, i18n } = useTranslation();
  const { account, walletData } = useSelector((s) => s);
  const toast = useToast();

  const dispatch = useDispatch();

  const [obj, setObj] = useState({});
  const [err, setErr] = useState({});

  const handleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
    setErr({ ...err, [e.target.name]: false });
  };
  useEffect(()=>{setObj({nickname: account?.nickname??''})}, [account])
  // useEffect(() => {
  //   getBasicInfo();
  // }, []);

  const getBasicInfo = () => {
    dispatch({ type: "SET_LOADING", payload: true });
    Axios()
      .get(`/get_basic_info`)
      .then((res) => { 
        setObj({
          nickname: res?.data?.nickname,
        });
      })
      .catch((r) => {}).finally(()=>{
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
  const Setting = (e) => {
    dispatch({ type: "SET_LOADING", payload: true });
    let t = true,
      error = {};

    if (obj?.nickname) {
      error = { ...error, nickname: true };
    }

    if (t) {
      Axios()
        .post("/update_basic_info", obj)
        .then((res) => {
          console.log(res);
          toast({
            // title: "Account created.",
            status: "success",
            duration: 1000,
            position: "top",
            isClosable: true,

            render: () => (
              <Box
                color="#2A2C35"
                p={3}
                bg="white.500"
                style={{
                  display: "flex",
                  fontFamily: "Lora",
                  fontSize: "16px",
                  background: "white",
                  fontWeight: "600",
                  lineHeight: "150%",
                  position: "absolute",
                  top: "60px",
                  padding: "24px 36px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
                }}
              >
                <img
                  style={{ marginRight: "14px" }}
                  src="/img/vector.svg"
                  alt=""
                />
                  {t('user_account.dataSaved')}
              </Box>
            ),
          });
        })
        .catch((e) => {})
        .finally(() => {
          dispatch({ type: "SET_LOADING", payload: false });
        });
    } else {
      dispatch({ type: "SET_LOADING", payload: false });
      setErr(error);
    }
  };
  return (
    <>
      <Layout>
        <SettingsBar> 
          <UserAccountContainer>
            <div className="title">{t('user_account.editAccount')}</div>
            <form>
              <SettingsInput
                label={t('user_account.nickname')}
                onChange={handleChange}
                name="nickname"
                value={obj?.nickname}
              />
              <SettingsSaveBtn text={t('user_account.saveChanges')} onClick={Setting} />
            </form>
          </UserAccountContainer>
        </SettingsBar>
      </Layout>
    </>
  );
};
export default UserAccount;
