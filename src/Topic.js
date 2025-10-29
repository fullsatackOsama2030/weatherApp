// MATERIAL IMPORT
import { Button, Container, Typography } from "@mui/material";
import FilterDramaIcon from '@mui/icons-material/FilterDrama';

// REACT IMPORT
import {useEffect, useState} from 'react';


// EXTRNAL IMPORT
import axios from "axios";
import moment from "moment/moment";
import 'moment/min/locales';
import LiveClock from "./LiveClock.blade";
import './i18n';
import { useTranslation } from "react-i18next";

let CancleAxios=null;

export default function Topic() {
    const { t, i18n } = useTranslation();
    const chnage=JSON.parse(localStorage.getItem('language'));
    const [lang,setlang]=useState(chnage);
    
    // Date Clander Times
    moment.locale(chnage);
    
    const [Template,setTemp]=useState({
        temp:null,
        description:'',
        temp_min:null,
        icon:null,
        temp_max:null,
    });
    
    function changelanguage(){
        if(lang==='en'){
            setlang('ar')
        }else{
            setlang('en')
           }
           localStorage.setItem('language',JSON.stringify(lang));
           i18n.changeLanguage(lang)
       }
    useEffect(()=>{
        changelanguage();
        i18n.changeLanguage(chnage)
    },[]);

    useEffect(()=>{
        // Make a request for a user with a given ID
        axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.0178&lon=13.5776&appid=cca330f637353dda4c9686b7672b601f',
         {
             cancelToken:new axios.CancelToken((c)=>{
                 CancleAxios= c
                })
            }
        )
        .then(function (response) {
            // handle success
            const Temp=
             {  
                temp:Math.round(response.data.main.temp-272.15),
                description:response.data.weather[0].description,
                temp_min:Math.round(response.data.main.temp_min-272.15),
                icon:`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
                temp_max:Math.round(response.data.main.temp_max-272.15),
            }
       
            setTemp(Temp);
        })
        .catch(function (error) {
            // handle error
           setTemp('خطـــر');
        })
       return ()=>{
        CancleAxios();
       }
        },[]);
  return (
   <Container maxWidth="sm" sx={{ fontFamily:'myfont'}}>
        {/* CARD */}
        {/* contant continer */}
        <div dir={chnage==="ar"?"rtl":"ltr"} style={{ height:'100vh',alignItems:'center',display:'flex',justifyContent:'center',flexDirection:'column'}}>
     <div style={{ 
        backgroundColor:'rgb(28 52 91 /36%)',
        color:'white',
        width:'60vh',
        display:'flex',
        flexDirection:'column',
        padding:'20px',
        borderRadius:'0px 15px',
        boxShadow:'0px 11px 1px rgba(0,0,0,0.05)',
        }}>
            {/* CONTENT */}
<div>
    {/* CITY & TIME */}
<div  style={{ display:'flex',
    alignItems:'end',
    
        justifyContent:'start', }}>

<Typography variant="h2" sx={{ marginInline:'1rem', }}>
{t('Taiz')}
</Typography>
<Typography variant="h5" >
<LiveClock/>
</Typography>
</div>
 <hr/>
    
        {/* Des */}
<div  style={{ display:'flex',justifyContent:'space-between' }}>
        <div style={{ display:'flex',textAlign:'right',flexDirection:'column' }}>
            {/* Tamplatiaer */}
            <div style={{
                paddingInline:'10px',display:'flex'
                }} >
        <Typography variant="h2" style={{ 
            textAlign:'right',
            paddingInline:'5px'
         }}>

        {Template.temp}
        </Typography>
 
    {/* Todo Temp Image */}
    <img src={Template.icon} alt={t('weather')}/>
            </div>
    
  {/* == Tamplatiaer == */}
<div style={{ display:'flex',
     flexDirection:'column'
       }}>
  <div>
        <Typography  style={{ 
            textAlign:'right',
            paddingInline:'5px'
         }}>
            {Template.description}
        </Typography>
    </div>
    
 <div style={{ display:'flex', }}>
       <div style={{ paddingInline:'5px' }}>
           <Typography>
               {t('Minmam')} : {Template.temp_min}
           </Typography>
       </div>
       |
       <div style={{ paddingInline:'5px' }}>
           <Typography>
               {t('Maxmam')} : { Template.temp_max }
           </Typography>
       </div>
 </div>
    
    </div>
    
        </div>
    <div style={{ display:'flex', }}>
        <FilterDramaIcon sx={{ fontSize:'100px' }}/>
    </div>
</div>


      </div>
      </div>
    <div style={{ alignSelf:'start',marginTop:'15px' }}>
          <Button sx={{ color:'white',fontSize:'15px' }} variant="outlined" onClick={
            changelanguage
          }>{t('Arabic')}</Button>
    </div>
 </div>
      </Container>
  );
}