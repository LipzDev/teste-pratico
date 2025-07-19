import styled from "styled-components";

export const LayoutContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.backgroundAlt} 100%
  );
`;

export const HeaderBackground = styled.div`
  width: 100%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.accent} 100%
  );
  padding: ${({ theme }) => theme.spacing.xxxl} 0
    ${({ theme }) => theme.spacing.xl};
`;

export const HeaderContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize["4xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: -0.025em;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  opacity: 0.9;
  padding: 20px 0px;
  max-width: 600px;
  margin: 0 auto;
`;

export const MainContent = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  ${({ theme }) => theme.spacing.xxxl};
  transform: translateY(-${({ theme }) => theme.spacing.xl});

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
    ${({ theme }) => theme.spacing.xl};
    transform: translateY(-${({ theme }) => theme.spacing.lg});
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  padding: ${({ theme }) => theme.spacing.xxxl};
  ${({ theme }) => theme.spacing.xl};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.borderLight};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl};
    ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
  }
`;
