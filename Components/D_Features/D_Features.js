import React from "react";

import s from "./D_Features.module.css";
import img from "../../public/svg/svgexport-12.svg";
import Image from "next/image";
import { useState } from "react";
import {adminfeatures , userfeatures} from './Details'



const D_Features = () => {
  const [checked, setchecked] = useState('user');
  const handleChange = (type) => {
    setchecked(type);
  };

  // const [items, setItems] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dispayedadmin = expanded ? adminfeatures : adminfeatures.slice(0, 8);
  const dispayeduser = expanded ? userfeatures : userfeatures.slice(0, 8);

  console.log(dispayedadmin);

  return (
    <section className={s.section}>
      <div className={`${s.container} container`}>
        <h2>Top Features</h2>
        <div className={`radio_inputs ${s.toggle}`}>
          <label className="radio" htmlFor="rad1">
            <input type="radio" name="radio" id="rad1" checked={checked === 'user'} onChange={() => handleChange('user')}/>
            <span className="name" >User</span>
          </label>
          <label className="radio" htmlFor="rad2">
            <input type="radio" name="radio" id="rad2" checked={checked === 'admin'} onChange={() => handleChange('admin')} />
            <span className="name" >Admin</span>
          </label>
        </div>

        <div className={s.card_container}>
          {checked === 'user'
            ? dispayeduser.map((item) => {
                return (
                  <Card
                    name={item.name}
                    ids={adminfeatures.findIndex((element) => element === item)}
                    img_link={item.link}
                  />
                );
              })
            : dispayedadmin.map((item) => (
                <Card
                  name={item.name}
                  ids={userfeatures.findIndex((element) => element === item)}
                  img_link={item.link}
                />
              ))}
        </div>
        <button onClick={handleExpandClick}>More Features</button>
      </div>
    </section>
  );
};

const Card = ({ name, ids , img_link }) => {
  console.log(img_link)
  return (
    <div className={`${s.card} ${ids}`} id={ids}>
      <Image className="card_image" src={img_link} width={60} height={60}></Image>
      <h4>{name}</h4>
    </div>
  );
};

export default D_Features;
