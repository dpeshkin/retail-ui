import { css } from '../../lib/theming/Emotion';
import ColorFunctions from '../../lib/styles/ColorFunctions';
import styles from './Tab.module.less';
import { ITheme } from '../../lib/theming/Theme';

const jsStyles = {
  root(t: ITheme) {
    return css`
      color: inherit;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${t.tabColorHover};
      }
    `;
  },

  vertical(t: ITheme) {
    return css`
      border-bottom: none;
      border-left: 3px solid transparent;

      .${styles.root}&:hover {
        border-left: 3px solid ${t.tabColorHover};
      }
    `;
  },

  focus(t: ITheme) {
    return css`
      border: 2px solid ${t.tabColorFocus};
    `;
  },

  disabled(t: ITheme) {
    return css`
      color: rgba(
        ${ColorFunctions.red(t.textColorDefault)},
        ${ColorFunctions.green(t.textColorDefault)},
        ${ColorFunctions.blue(t.textColorDefault)},
        0.5
      );
    `;
  },

  primary(t: ITheme) {
    return css`
      &:hover {
        border-bottom-color: ${t.tabColorHoverPrimary};
      }
      &.${styles.vertical}:hover {
        border-left-color: ${t.tabColorHoverPrimary};
      }
    `;
  },

  success(t: ITheme) {
    return css`
      &:hover {
        border-bottom-color: ${t.tabColorHoverSuccess};
      }
      &.${styles.vertical}:hover {
        border-left-color: ${t.tabColorHoverSuccess};
      }
    `;
  },

  warning(t: ITheme) {
    return css`
      &:hover {
        border-bottom-color: ${t.tabColorHoverWarning};
      }
      &.${styles.vertical}:hover {
        border-left-color: ${t.tabColorHoverWarning};
      }
    `;
  },

  error(t: ITheme) {
    return css`
      &:hover {
        border-bottom-color: ${t.tabColorHoverError};
      }
      &.${styles.vertical}:hover {
        border-left-color: ${t.tabColorHoverError};
      }
    `;
  },
};

export default jsStyles;
