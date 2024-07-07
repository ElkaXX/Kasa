import classNames from "classnames";
import "./TagList.scss";

type Props = {
  tags: string[];
  className?: string;
};

const TagList = ({ tags, className }: Props) => {
  return (
    <ul className={classNames("tag-list", className)}>
      {tags.map((tag) => (
        <li key={tag} className="tag-list__item">
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
