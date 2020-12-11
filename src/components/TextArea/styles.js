import styled, { css } from 'styled-components'

export const TextArea = styled.textarea`
  width: 95%;
  height: 100px;
  margin: 10px 0;
  padding: 10px 5px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  outline: none;

  ${props => props.withError && css`
    border: 1px solid var(--color-error);
    margin-bottom: 2px;
  `};
`

export const Error = styled.p`
  align-self: flex-start;
  padding-left: 10px;
  font-size: 13px;
  color: var(--color-error);
`