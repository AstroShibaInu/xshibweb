import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'

import Twitter from '../../src/Icons/Twitter'



const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
color: ${props => props.theme.text};

display: flex;
//justify-content: center;
//align-items: center;
flex-direction: column;
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid ${(props) => props.theme.text};
`

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

&>*{
  padding-right: 0pc.5rem;
  transition: all 0.2s ease;

  &:hover{
    transform: scale(1.2);
  }
}
`

const MenuItems = styled.ul`
list-style: none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;

`

const Item = styled.li`
width: fit-content;
cursor: pointer;

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease; 
}
&:hover::after{
  width: 100%;
}
`

const Bottom =styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

a{
  text-decoration: underline;
}

`

const Footer = () => {

  const scrollTo = (id) => {

    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }
  return (
    <Section>
      <Banner />
      <Container>
      <Left>
        
        <IconList>
          <a href='https://twitter.com/astroshibainu' target='_blank' rel='noopener noreferrer'>
            <Twitter />
          </a>
        
          
        </IconList>
      </Left>
      <MenuItems>
          <Item  onClick={() => scrollTo('home')}   >Home</Item>
          <Item  onClick={() => scrollTo('about')}  >About</Item>
          <Item  onClick={() => scrollTo('roadmap')}  >Roadmap</Item>
          <Item  onClick={() => scrollTo('tokeninfo')}  >Token Info</Item>
          <Item  onClick={() => scrollTo('showcase')} >NFT</Item>
          <Item  onClick={() => scrollTo('team')} >Our Strengths</Item>
          <Item  onClick={() => scrollTo('faq')}  >Faq</Item>
      </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date ().getFullYear()} Astro Shiba! Funny Meme, Big Dreams. Enjoy Crypto!
        </span>
        <span>
          Made with &#10084; by <a href='https://nunaproject.art/' target='_blank' rel='noopener noreferrer'>NUNA</a>
        </span>
      </Bottom>

    </Section>
  )
}

export default Footer