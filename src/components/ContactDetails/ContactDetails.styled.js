import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  /* height: 162px; */
  padding: 10px;
  border: 1px solid black;
`;

export const ContactTitle = styled.h3`
  /* text-align: center; */
`;

export const ContactCard = styled.div`
  padding: 10px;
  width: 100%;
  /* height: 100%; */
  background-color: wheat;
`;

export const ContactData = styled.p`
  margin-bottom: 5px;
`;

export const LastElement = styled(ContactData)`
  margin-bottom: 0;
`;
