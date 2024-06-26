import React, { useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
`

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
color: ${(props) => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.text};
width: fit-content;

@media (max-width: 40em){
  font-size: ${props => props.theme.fontxl};;
}

`

const Container = styled.div`
  width: 70%;
  min-height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem; /* Añadido un pequeño relleno */
  
  @media (max-width: 64em) {
    width: 80%;
  }
  
  @media (max-width: 48em) {
    width: 90%;
  }
`;

const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Items = styled.ul`
list-style: none;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${(props) => props.theme.body};

@media (max-width: 48em){
  width: 90%;
}

&>*:nth-of-type(2n +1){
  justify-content: start;
  @media (max-width: 48em){
  justify-content: center;
}

  div{
    border-radius:   50px 0 50px 0;
    text-align: right;
  
    @media (max-width: 48em){
      border-radius:  0 50px 0 50px;
      text-align: left;
  p{
    border-radius:  0 40px 0 40px;
  }
  
  }
}
p{
  border-radius: 40px 0 40px 0;
}
}
&>*:nth-of-type(2n){
  justify-content: end;
  @media (max-width: 48em){
  justify-content: center;
}

  div{
    border-radius: 0 50px 0 50px ;
    text-align: left;
}

  p{
    border-radius: 0 40px 0 40px;
  }
}
`


const Item = styled.li`
width: 100%;
height: 100%;
display: flex;

@media (max-width: 48em) {
  justify-content: flex-end !important;
}
`

const ItemContainer =styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
border: 3px solid ${props => props.theme.text};

@media (max-width: 48em){
  width: 70%;
}
`

const Box = styled.p`
height: fit-content;
background-color: ${props => props.theme.text};;
color: ${props => props.theme.text};
padding: 1rem;
position: relative;
border: 1px solid ${props => props.theme.text};
`

const SubTitle = styled.span`
display: block;
font-size: ${props =>props.theme.fontxl};
text-transform: capitalize;
color: ${props => props.theme.body};

@media (max-width: 40em){
  font-size: ${props => props.theme.fontlg};
  font-weight: 600;
}
`
const Text = styled.span`
display: block;
font-size: ${props =>props.theme.fontsm};
text-transform: capitalize;
color: ${props => props.theme.body};

font-weight: 400;
margin: 0.5rem 0;

@media (max-width: 40em){
  font-size: ${props => props.theme.fontxs};
  font-weight: 600;
}
`

const RoadMapItem = ({title, subtext, addToRefs}) => {

  return(
    <Item ref={addToRefs}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  )
}


const Roadmap = () => {

  const revealRefs = useRef([]);
  revealRefs.current = [];

  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el))  {
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(() => {
    
    let t1 = gsap.timeline();
  revealRefs.current.forEach( (el, index) => {

    t1.fromTo(
      el.childNodes[0],
      {
          y: '0'
      },{
        y:'-30%',

        ScrollTrigger:{
          id: `section-${index + 1}`,
          trigger: el,
          start: 'top center+=200px',
          end:'bottom center',
          scrub:true,
          markers:true,
        }
      }
    )




  }   )

    return () => {
      
    };
  }, [])

  return (
    <Section id='roadmap'>
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem  addToRefs={addToRefs}  title='Launch' subtext='Contract Deployed, Token launch, Fairest airdrop on the Stellar network, Listing on Lumenswap-StellarTerm-StellarX' />
          <RoadMapItem  addToRefs={addToRefs}  title='Growth' subtext='Website launch, Listing Coingecko / CoinMarketCap, Innovative Reward System, Listing in AQUA, Token Burning System, 1.000 holders' />
          <RoadMapItem  addToRefs={addToRefs}  title='Expansion' subtext='5.000 Holders, Marketing Campaign, Website Redesign, First Marketing campaign ' />
          <RoadMapItem  addToRefs={addToRefs}  title='Utility' subtext='Influencer Awareness Partnerships, $XSHIB pool (LP farming & staking), Cross-chain' />
          <RoadMapItem  addToRefs={addToRefs}  title='Prosperity' subtext='Astro Shiba Foundation, Shibavax Merch store, More to be announced!' />
          <RoadMapItem  addToRefs={addToRefs}  title='NFT' subtext='373 unique NFTs at the cost of 150 XLM each, XLM will be used to add liquidity to the XLM/XSHIB pair' />
          
        </Items>
      </Container>
    </Section>
  )
}

export default Roadmap