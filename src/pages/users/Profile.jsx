import { useKeycloak } from '@react-keycloak/web';

const Profile = () => {
  const { keycloak } = useKeycloak();
  const avatar =
    'https://lh3.googleusercontent.com/a-/AD5-WCkdkDL4dvJyuALcU_yxJHefwJfHHxbY7QcBSNQhrA5QbJ_I4V-lskqz3yH8QMW2k3h5FqGqzDAcdBdwCvfG0Xm5E3W2o3uWjFfvnCiW6Qjpvtua8ORT72qVIeojOZIFtmfXCMnF_RUBVSE-Pj44DvXnUJiZ4VIA4SYY4v_qFDWdNV06yN3NB5HBy8oi0ChGqvz31YK1KyTtFMVXD8E_S3-uK4oqN5UtyhDeXXvntBU5BFBzKLKudyPddceFO4i02AdkOGHSzFYjRhTw0uW_2cyfOPExXGtfxSRal595cAXjOFnyT1yZ2zK7Lnprx58cZKi4M21JObOtAACawU2G1kocMPo7euz4HU4AZ6XKgjyYmpXIzKTFIepSP0n4m3fl81hqu325qxaIzPzDPjCRD44dCKBlTt_Mi1l3yPv_xGuomlLefcxJ2Gz-qxMN6A9VJbn-k_sWr8RROb_x2MP8xvRBK2t4HF5AbSQQbrw224SdFUQH_mgFtmgVXe_nKajH_s2mZQPem8jNIE4rsQ_o7UUZmw7M-VwqslqceGshefaDIHE85sEl2qoBriRBWt29ZDBxlK6xOVXHPw3TgV2p4yuq_yiIvx2wPEOg8DGuZcaqtzAF5vX6wKavdCk2MGBPt23jx_rzYU_vhua2dgSqqmov1-nEytFrHgRcksRJmkLdaYMxYYoV1-nuDRkymxL7zOhxGGjcNOIZLt0_0I4uzPG7i6ohBQUOD2FyZOee7ui-kMcwXSNySzDBHnehJVJ_svs3eq__Ppp-VJpnRfCLm96u-bacYnzgf1SGGTE1QPLCfTJ2NSUSlTuxqSvSCkXAD_7JpGRukI_Iu5O-kc_TKN5W0GoZrjOxBX8OTPq2u1To6lOgVjr5JnQLUOWnoUPWNK9GBW_ByXwMSGzzoSIPdV1BZYy7LrIkxvT7v-PbwdH2w2VPmArqDVtYh11C=s96-c';

  // console.log(keycloak.tokenParsed);

  return (
    <section className="p-8 flex flex-col">
      <p>First Name: {keycloak.tokenParsed.given_name}</p>
      <p>Last Name: {keycloak.tokenParsed.family_name}</p>
      <p>Email: {keycloak.tokenParsed.email}</p>
      <p>Email: {keycloak.tokenParsed.picture}</p>
      <hr />
      <div className="flex space-x-2">
        <span className="font-bold"> Roles: </span>
        {keycloak.tokenParsed.realm_access.roles.map((rol, i) => {
          return <span key={i}>{rol}</span>;
        })}
      </div>
      <div>
        <img src={avatar} alt={keycloak.tokenParsed.given_name} />
      </div>
    </section>
  );
};

export default Profile;
