import styled from 'styled-components';

import palette from 'style/palette';

const Container = styled.header`
  height: 4rem;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${palette.ghostgrey};
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
`;

export {Container};
