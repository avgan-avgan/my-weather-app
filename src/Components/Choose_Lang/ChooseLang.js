import React from "react";

const style_lang = {
    background: `#11b1e2`,
    color: `white`,
    padding: `7px`
}
export const ChooseLang = ({onClick, my_lang})=>
    <div className={`lang_option`}>
        <span style={my_lang === 'en' ? style_lang : null} onClick={()=>onClick('en')}>EN</span>
        <span style={my_lang === 'de' ? style_lang : null} onClick={()=>onClick('de')}>DE</span>
        <span style={my_lang === 'ru' ? style_lang : null} onClick={()=>onClick('ru')}>RU</span>
    </div>