import * as React from 'react';
import * as PropTypes from 'prop-types';
import LayoutEvents from '../../lib/LayoutEvents';

// Note SpinnerType нужен для генерации правильного .d.ts файла
// @ts-ignore — Свойство "SpinnerType" объявлено, но его значение не было прочитано
import Spinner, { SpinnerType, SpinnerProps } from '../Spinner';

import styles from './Loader.module.less';
import { Nullable } from '../../typings/utility-types';
import { cx } from '../../lib/theming/Emotion';
import jsStyles from './Loader.styles';
import { ThemeConsumer } from '../ThemeConsumer';
import { ITheme } from '../../lib/theming/Theme';
import ZIndex from '../ZIndex';

export interface LoaderProps {
  children?: React.ReactNode;
  /**
   * Флаг переключения состояния лоадера
   * @default false
   */
  active: boolean;
  caption?: SpinnerProps['caption'];
  className?: string;
  type?: 'mini' | 'normal' | 'big';
}

export interface LoaderState {
  isStickySpinner: boolean;
  spinnerStyle?: object;
}

/**
 * DRAFT - лоадер-контейнер
 */
class Loader extends React.Component<LoaderProps, LoaderState> {
  public static defaultProps = {
    type: Spinner.Types.normal,
    active: false,
  };

  public static propTypes = {
    /**
     * показываем лоадер или нет
     */
    active: PropTypes.bool,

    /**
     * Текст рядом с лоадером.
     *
     * "Загрузка" - значение по-умолчанию
     */
    caption: Spinner.propTypes.caption,

    /**
     * Класс для обертки
     */
    className: PropTypes.string,

    /**
     * Тип спиннера: mini, normal, big
     *
     * Значение по-умолчанию - normal
     *
     * Spinner.types - все доступные типы
     */
    type: PropTypes.oneOf(Object.keys(Spinner.Types)),
  };

  private theme!: ITheme;
  private containerNode: Nullable<HTMLDivElement>;
  private spinnerNode: Nullable<HTMLSpanElement>;
  private spinnerHeight?: number;
  private layoutEvents: Nullable<{ remove: () => void }>;

  constructor(props: LoaderProps) {
    super(props);

    this.containerNode = null;
    this.spinnerNode = null;

    this.state = {
      isStickySpinner: false,
    };
  }

  public componentDidMount() {
    if (this.spinnerNode) {
      this.spinnerHeight = this.spinnerNode.children[0].getBoundingClientRect().height;
    }

    this.checkSpinnerPosition();
    this.layoutEvents = LayoutEvents.addListener(this.checkSpinnerPosition);
  }

  public componentWillUnmount() {
    if (this.layoutEvents) {
      this.layoutEvents.remove();
    }
  }

  public render() {
    return (
      <ThemeConsumer>
        {theme => {
          this.theme = theme;
          return this.renderMain();
        }}
      </ThemeConsumer>
    );
  }

  private renderMain() {
    const { active, type, caption, className } = this.props;
    const loaderClassName = cx(styles.loader, className, {
      [styles.active]: active,
      [jsStyles.active(this.theme)]: active,
    });

    return (
      <ZIndex
        className={loaderClassName}
        wrapperRef={this.wrapperRef}
        priority={'Loader'}
        applyZIndex={this.props.active}
        coverChildren={this.props.active}
        style={{ position: 'relative' }}
      >
        {this.props.children}

        {active && this.renderSpinner(type, caption)}
      </ZIndex>
    );
  }

  private wrapperRef = (element: HTMLDivElement | null) => {
    this.containerNode = element;
  };

  private renderSpinner(type?: 'mini' | 'normal' | 'big', caption?: React.ReactNode) {
    return (
      <span
        className={this.state.isStickySpinner ? styles.spinnerContainerSticky : styles.spinnerContainerCenter}
        style={this.state.spinnerStyle}
        ref={element => {
          this.spinnerNode = element;
        }}
      >
        <Spinner type={type} caption={caption} />
      </span>
    );
  }

  private checkSpinnerPosition = () => {
    if (!this.containerNode) {
      return;
    }

    const {
      top: containerTop,
      right: containerRight,
      bottom: containerBottom,
      left: containerLeft,
      height: containerHeight,
      width: containerWidth,
    } = this.containerNode.getBoundingClientRect();

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    // Если контейнер не больше высоты и не шире окна,
    // то просто выравниваем по центру
    if (windowHeight >= containerHeight && windowWidth >= containerWidth) {
      this.setState({
        isStickySpinner: false,
        spinnerStyle: {},
      });
      return;
    }

    const spinnerStyle = {
      top: 30,
      right: 0,
      bottom: 30,
      left: 0,
    };

    // ПО ВЕРТИКАЛИ
    // Если верхний край контейнера ниже верхнего края окна,
    // то сдвигаем и лоадер
    if (containerTop > 0) {
      spinnerStyle.top = containerTop + 30;
    }

    // Если нижний край контейнера выше нижнего края окна,
    // то сдвигаем и лоадер
    if (containerBottom < windowHeight) {
      spinnerStyle.bottom = Math.abs(windowHeight - containerBottom) + 30;
    }

    // Если знаем высоту спиннера и нижний край контейнера поднимается
    // выше отступа на высоту спиннера, то убираем верхнюю позицию лоадера
    if (this.spinnerHeight && spinnerStyle.bottom >= windowHeight - this.spinnerHeight) {
      delete spinnerStyle.top;
    }

    // ПО ГОРИЗОНТАЛИ
    // Если левый край контейнера правее левого края окна,
    // то сдвигаем и лоадер
    if (containerLeft > 0) {
      spinnerStyle.left = containerLeft;
    }

    // Если правый край контейнера левее правого края окна,
    // то сдвигаем и лоадер
    if (containerRight < windowWidth) {
      spinnerStyle.right = windowWidth - containerRight;
    }

    this.setState({
      isStickySpinner: true,
      spinnerStyle,
    });
  };
}

export default Loader;
