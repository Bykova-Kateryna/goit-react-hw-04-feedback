import styled from 'styled-components';

export const ButtonFeedbackSection = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  padding: 20px 5px;
`;

export const FeedbackButton = styled.button`
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #67ebf1;
  }
`;
