import Link from 'next/link';
import { TAGS } from '@/types/tags';

import css from './SidebarNotes.module.css';

const SidebarNotes = () => {
  return (
    <ul className="css.menuList">
      <li className={css.menuItem}>
        <a href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </a>
      </li>
      {TAGS.map(tag => (
        <li className={css.menuItem} key={tag}>
          <Link
            href={`/app/notes/filter/${tag}`}
            className={css.menuLink}
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarNotes;
