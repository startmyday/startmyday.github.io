import style from './Theme.module.css'
import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

type Theme = {
  backgroundColor: string;
  backgroundImage: string;
};

const themes: Theme[] = [
  {
    'backgroundColor': '#4158D0',
    'backgroundImage': 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
  },

  {
    'backgroundColor': '#0093E9',
    'backgroundImage': 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
  },

  {
    'backgroundColor': '#8EC5FC',
    'backgroundImage': 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
  },

  {
    'backgroundColor': '#D9AFD9',
    'backgroundImage': 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
  },

  {
    'backgroundColor': '#FFFFFF',
    'backgroundImage': 'linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)',
  },

  {
    'backgroundColor': '#00DBDE',
    'backgroundImage': 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
  },

  {
    'backgroundColor': '#FBAB7E',
    'backgroundImage': 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
  },

  {
    'backgroundColor': '#85FFBD',
    'backgroundImage': 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
  },

  {
    'backgroundColor': '#8BC6EC',
    'backgroundImage': 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
  },

  {
    'backgroundColor': '#FFDEE9',
    'backgroundImage': 'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',
  },

  {
    'backgroundColor': '#08AEEA',
    'backgroundImage': 'linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)',
  },

  {
    'backgroundColor': '#52ACFF',
    'backgroundImage': 'linear-gradient(180deg, #52ACFF 25%, #FFE32C 100%)',
  },

  {
    'backgroundColor': '#FFE53B',
    'backgroundImage': 'linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)',
  },

  {
    'backgroundColor': '#21D4FD',
    'backgroundImage': 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
  },

  {
    'backgroundColor': '#3EECAC',
    'backgroundImage': 'linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%)',
  },

  {
    'backgroundColor': '#FA8BFF',
    'backgroundImage': 'linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)',
  },

  {
    'backgroundColor': '#FF9A8B',
    'backgroundImage': 'linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)',
  },

  {
    'backgroundColor': '#FBDA61',
    'backgroundImage': 'linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)',
  },

  {
    'backgroundColor': '#FAACA8',
    'backgroundImage': 'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)',
  },

  {
    'backgroundColor': '#FAD961',
    'backgroundImage': 'linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)',
  },

  {
    'backgroundColor': '#FF3CAC',
    'backgroundImage': 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
  },

  {
    'backgroundColor': '#FEE140',
    'backgroundImage': 'linear-gradient(90deg, #FEE140 0%, #FA709A 100%)',
  },

]

export function Theme({ theme, setTheme }: {
  theme: Theme,
  setTheme: Dispatch<SetStateAction<Theme>>
}) {

  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpanded = () => setExpanded(!expanded);


  return (
    <div className={style.theme} onClick={toggleExpanded}>
      {expanded ? (
        <div className={style.selector}>
          <div className={style.closeContainer}><span className={style.close}>+</span></div>
          {themes.map((theme) => (
            <span className={style.box} style={theme} onClick={() => setTheme(theme)}></span>
          ))}
        </div>
      ) : <span className={style.change}>theme ↗️</span>}
    </div>
  );
}