import styled from 'styled-components/native';

export type SurfaceCardProps = {
  padded?: boolean;
};

export const SurfaceCard = styled.View<SurfaceCardProps>`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.lg}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  padding: ${({ padded }) => (padded ? '20px' : '16px')};
`;
