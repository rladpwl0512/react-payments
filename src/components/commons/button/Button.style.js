import styled from 'styled-components';

const Styled = {
  Button: styled.button((props) => ({
    color: '#04C09E',
    fontWeight: '700',
    fontSize: '14px',
    ...props,
  })),
};

export default Styled;
