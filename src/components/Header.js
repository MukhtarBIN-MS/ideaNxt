import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { NavbarItems } from "./NavbarItems";
import logo from '../Images/logo.png'

const useStyles = makeStyles((theme) => ({
      navbarItems:{
          background:'none',
          height:'80px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          '@media screen and(max-width:767px)':{
            position:'relative'
          }
      },
      navmenu:{
        display:'grid',
        gridTemplateColumns:'repeat(5, auto)',
        gridGap:'10px',
        listStyle:'none',
        textAlign:'center',
        width:'70vw',
        justifyContent:'end',
        marginRight:'2 rem',
        '@media screen and (max-width:767px)':{
          display:'flex',
          flexDirection:'column',
          width:'100%',
          height:'500px',
          position:'absolute',
          top:'80px',
          left:'-100%',
          opacity:'1',
          transition:'all 0.5s ease'
        }

      },
     
      navlinks:{
        color:'white',
        textDecoration:'none',
        fontFamily:'nunito',
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        padding:'0.5rem 1rem',
        '&:hover':{
        background:'white',
        color:'black',
        transition:'all 0.2s ease-out'
      },
      '@media screen and (max-width:767px)':{
        textAlign:'center',
        padding:'1.5rem',
        width:'100%',
        display:'table',
       
      }
    },
    navbarlogo:{
 
       height:'150px',
       justifySelf:'start',
       marginLeft:'20px',
       cursor:'pointer',
      '@media screen and (max-width:767px)':{
        position:'absolute',
        top:'0',
        left:'0',
        transform: 'translate(25%, 50%)'
      }
    },
    fabars:{
      color:'white'
    },
    menuIcon:{
      display:'none',
      '@media screen and (max-width:767px)':{
        display:'block',
        color:'white',
        position:'absolute',
        top:'0',
        right:'0',
        transform:'translate(-100%, 60%)',
        fontSize:'1.8rem',
        cursor:'pointer'
      }
    },
    navmenuActive:{
      '@media screen and (max-width:767px)':{
        background:'linear-gradient(to right, #29467f, #101c32)',
        left:'0',
        opacity:'1',
        transition:'all 0.5s ease',
        zIndex:'1',
        display:'flex',
        flexDirection:'column',
        width:'50%',
        height:'280px',
        position:'absolute',
        top:'50px',
        listStyle:'none',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        marginRight:'0.5 rem',
        
      }
    }
  
}));

export default function Header() {
  const [ click, setClick ] = useState(false);
  const handleClick = ()=>{
          setClick( !click);
  }
  const classes = useStyles();
  return (
    <nav className={classes.navbarItems}>
      <h1 className={classes.logo}></h1>
      <div className={classes.menuIcon} onClick={handleClick}>
        <span className={click ? 'fas fa-times': 'fas fa-bars'}></span>
      </div>
      <ul className={click ? classes.navmenuActive : classes.navmenu}>
        {NavbarItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={classes.navlinks} href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
