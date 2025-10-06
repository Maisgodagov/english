import type { PropsWithChildren } from 'react';
import type { TextProps } from 'react-native';
import { css } from 'styled-components';
import styled from 'styled-components/native';

export type TypographyVariant = 'title' | 'subtitle' | 'body' | 'caption';

export type TypographyProps = PropsWithChildren<
  TextProps & {
    variant?: TypographyVariant;
    color?: string;
    align?: 'left' | 'center' | 'right';
  }
>;

const StyledText = styled.Text<{
  $variant: TypographyVariant;
  $color?: string;
  $align: 'left' | 'center' | 'right';
}>`
  color: ${({ theme, $color }) => $color ?? theme.colors.text};
  text-align: ${({ $align }) => $align};
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'title':
        return css`
          font-size: 28px;
          font-weight: 700;
        `;
      case 'subtitle':
        return css`
          font-size: 20px;
          font-weight: 600;
        `;
      case 'caption':
        return css`
          font-size: 14px;
          font-weight: 400;
          color: ${theme.colors.textSecondary};
        `;
      case 'body':
      default:
        return css`
          font-size: 16px;
          font-weight: 400;
        `;
    }
  }}
`;

export const Typography = ({
  children,
  variant = 'body',
  color,
  align = 'left',
  style,
  ...rest
}: TypographyProps) => (
  <StyledText $variant={variant} $color={color} $align={align} style={style} {...rest}>
    {children}
  </StyledText>
);
