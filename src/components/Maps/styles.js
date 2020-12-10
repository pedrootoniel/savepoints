import styled from 'styled-components'
import banner from "../../assets/fundo.svg";
import {shade} from 'polished'

export const Container = styled.div`
  flex: 1;
  background:url(${banner}); 
  padding: 20px;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    i {
      border-radius: 50%;
      padding: 10px;
      background: var(--color-background);
      color: var(--color-black);
      object-fit: cover;
      cursor: pointer;
      transition: 0.2s;

      :hover {
        background: ${shade(0.2, '#fff')}
      }
  }
`

export const ImgLogo = styled.img`
  background: var(--color-background);
  padding: 3px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`
