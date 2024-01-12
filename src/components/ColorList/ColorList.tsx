import { IColor } from "../../interfaces";
import './ColorList.scss';

type ColorListProps = {
  colors: IColor[],
  maxItemsVisible?: number,
  onChangeColor?: (colorItem: IColor) => void
}

const ColorList: React.FC<ColorListProps> = ({ colors, maxItemsVisible, onChangeColor }) => {
  const isMaxItem = colors.length > Number(maxItemsVisible);

  if (!colors.length) return null;

  return (
    <div>
      <span>Colors: <strong>{ colors.length }</strong></span>
      <ul className="color-list">
        {colors.slice(0,maxItemsVisible).map((item: IColor) => {
          return <li
            className="color-list__item"
            key={item.id}
            style={{'backgroundColor': item.colorCode}}
            onClick={() => onChangeColor && onChangeColor(item)}
          />;
        })}
        { isMaxItem && <li className="color-list__item last">+{ colors.length - Number(maxItemsVisible) }</li> }
      </ul>
    </div>
  );
};

export default ColorList