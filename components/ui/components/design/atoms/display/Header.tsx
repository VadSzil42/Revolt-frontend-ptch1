import { styled } from "solid-styled-components";

export interface Props {
  readonly placement: "primary" | "secondary";

  readonly topBorder?: boolean;
  readonly bottomBorder?: boolean;
}

/**
 * Generic header component
 */
export const Header = styled("div", "Header")<Props>`
  gap: 10px;
  flex: 0 auto;
  display: flex;
  flex-shrink: 0;
  padding: 0 16px;
  align-items: center;

  font-weight: 600;
  user-select: none;

  margin: ${(props) =>
    props.placement === "primary"
      ? (props.theme!.gap.md + " ").repeat(3) + "0"
      : ""};
  overflow: hidden;
  height: ${(props) => props.theme!.layout.height.header};
  border-radius: ${(props) => props.theme!.borderRadius.lg};

  color: ${(props) => props.theme!.colours["sidebar-header-foreground"]};
  background-color: ${(props) =>
    props.theme!.colours["sidebar-header-background"]};

  svg {
    flex-shrink: 0;
  }

  background-size: cover !important;
  background-position: center !important;
`;

/**
 * Header with background transparency
 */
export const HeaderWithTransparency = styled(Header)`
  background-color: ${(props) =>
    props.theme!.colours["sidebar-header-transparent-background"]};
  backdrop-filter: ${(props) => props.theme!.effects.blur.md};

  width: calc(100% - ${(props) => props.theme!.gap.md});
  z-index: 20;
  position: absolute;
`;

/**
 * Header with background image
 */
export const HeaderWithImage = styled(Header)`
  padding: 0;
  align-items: flex-end;
  justify-content: stretch;
  text-shadow: 0px 0px 1px ${(props) => props.theme!.colours.foreground};
  height: ${(props) => props.theme!.layout.height["tall-header"]};
  margin: ${(props) => props.theme!.gap.md};

  > * {
    flex-grow: 1;
    padding: 6px 14px;
    color: white;
    background: linear-gradient(0deg, black, transparent);
  }
`;
