import "./TagList.scss";

type Props = {
  tags: string[];
};

const TagList = ({ tags }: Props) => {
  return (
    <ul className="tag-list">
      {tags.map((tag) => (
        <li key={tag} className="tag-list__item">
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
