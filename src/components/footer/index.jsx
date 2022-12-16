import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logos/logo.png';

import payments from '../../assets/image/logos/payment.png';

const Footer = () => {
  return (
    <footer className="m-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[50px]">
        <div className="flex md:justify-start justify-center gap-3 ">
          <div className="w-[70px] text-center md:text-lert text-xl text-primary">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-sm ">
          <h2 className="text-xl text-primary">Links</h2>
          <Link to="/pendiente">
            <span className="text-sm ">Preguntas Frecuentes</span>
          </Link>
          <Link to="/pendiente">
            <span className="">Tarifas de Envío y Políticas</span>
          </Link>
          <Link to="/pendiente">
            <span className="">Términos y condiciones</span>
          </Link>
        </div>
        <div className="flex flex-col gap-3 ">
          <div className="h-full flex justify-center items-center">
            <div className="flex justify-center items-center text-2xl space-x-4">
              <a
                className="text-inherit transition duration-500 hover:text-primary scale-115"
                href="https://www.linkedin.com/in/youssef-sabbagh/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className="text-inherit transition duration-500 hover:text-primary scale-115"
                href="https://github.com/YoussefSabbagh"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="text-inherit transition duration-500 hover:text-primary scale-115"
                href="https://twitter.com/TaguaraDigital"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>{' '}
        </div>
      </div>

      <div className="mt-5 border-t-2 border-darkGray"></div>

      <div className="flex flex-col md:flex-row items-center justify-between ">
        <div className="flex items-center">
          <span className="logo">Youssef Sabbagh</span>
          <span className="text-sm">© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="h-[50px]">
          <img className="h-full" src={payments} alt="payments stipe logo" />;
        </div>
      </div>
    </footer>
  );
};

export default Footer;
