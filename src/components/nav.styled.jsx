import React from 'react'
import styled from 'styled-components'
import '@fontsource/rubik'

export const LogoStyled = styled.div`
    font-size: 36px;
    font-family: "Rubik", "sans-serif";
    color: black;
    padding: 8px;
`

export const NavWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 20px;
    background-color: rgb(200,200,200,1);
    margin: none;
    position: relative;
    z-index: 100;
    
    .trigger_element{
        position: absolute;
        top: 0;
        width: 100%;
        height: 15px;
        z-index: 101;
        background-color: rgb(0, 55, 220, 0.4);
    
        :hover{
            position: sticky;
            top: 0;
            background-color: black;
          }
    }
    .hover-target .trigger_element:hover {
        background-color: black;
      }

    .NavConsole{
        display: grid;
        grid-template-columns: repeat(3, auto);
        gap: 20px;
        align-items: center;
    }
    .nav_btn_a{
        text-decoration: none;
        padding: 8px;
        border-radius: 4px;
        font-size: 19px;
        font-family: 'Rubik', 'sans-serif';
        color: rgb(14, 14, 14, 0.9);
        border: solid black 3px;
        transition: 0.5s;
    }
    .nav_btn_a:hover{
        color: rgb(223, 123, 30);
        border: solid rgb(44, 44, 44, 0.8) 3px;

    }
    .link{
        text-decoration: none;
        :hover{
            // color: rgb(44, 44, 44);
            // box-shadow: 1px 1px 1px 2px;    
        }
    }
    .a_tag_shadow_div{
        border-radius: 12px;
        box-sizing: border-box;
        border: solid 2px rgb(33, 33, 33, 0);
        transition: 1.4s;
    }
    .a_tag_shadow_div:hover{
        box-shadow: 1px 1px 200px 1px rgb(22, 22, 22, 0.7);
        // border: solid 2px rgb(33, 33, 33, 0.6);
        border: solid 2px rgb(223, 123, 30, 0.8);
    }
`
// export const TriggerElement = styled.div`


// `

export const Logo = () =>{
    return <LogoStyled><b>&lt;H</b><span style={{color: 'rgb(223, 123, 30)'}}>old</span><b>TML/&gt;</b></LogoStyled>
}