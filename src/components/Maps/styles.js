import styled from 'styled-components'
import {shade} from 'polished'

export const Container = styled.div`
  flex: 1;
  background: var(--color-text);
  position: relative;
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px 60px;
    position: absolute;
    z-index: 10;
    justify-content: space-between;

    i {
      border-radius: 50%;
      padding: 10px;
      background: var(--color-background);
      color: var(--color-text);
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
