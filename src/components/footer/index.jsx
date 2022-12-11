import { Link } from 'react-router-dom';
import payments from '../../assets/image/logos/payment.png';

const Footer = () => {
  return (
    <footer className="m-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md: gap-[50px]">
        <div className="flex flex-col gap-3 ">
          <h2 className="text-xl text-primary">Categories</h2>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="flex flex-col gap-3 ">
          <h2 className="text-xl text-primary">Links</h2>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="flex flex-col gap-3 ">
          <h2 className="text-xl text-primary">About</h2>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="flex flex-col gap-3 ">
          <h2 className="text-xl text-primary">Contact</h2>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-[50px]">
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
