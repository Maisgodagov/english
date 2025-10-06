import type { PropsWithChildren, ReactNode } from 'react';
import type { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

import { Typography } from './Typography';

export type PrimaryButtonProps = PropsWithChildren<
  TouchableOpacityProps & {
    label?: string;
    loading?: boolean;
    loadingLabel?: string;
  }
>;

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.md}px;
  padding: 14px 20px;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const ButtonLabel = styled(Typography)`
  color: #ffffff;
  font-weight: 600;
`;

export const PrimaryButton = ({
  children,
  label,
  loading = false,
  loadingLabel = 'Загрузка...',
  disabled,
  ...rest
}: PrimaryButtonProps) => {
  const isDisabled = disabled || loading;

  const content: ReactNode = (() => {
    if (loading) {
      return <ButtonLabel>{loadingLabel}</ButtonLabel>;
    }
    if (typeof children === 'string' || typeof children === 'number') {
      return <ButtonLabel>{children}</ButtonLabel>;
    }
    if (children) {
      return children;
    }
    if (label) {
      return <ButtonLabel>{label}</ButtonLabel>;
    }
    return null;
  })();

  return (
    <ButtonContainer activeOpacity={0.8} disabled={isDisabled} {...rest}>
      {content}
    </ButtonContainer>
  );
};
