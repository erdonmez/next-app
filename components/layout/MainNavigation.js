import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">React News</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">All News</Link>
          </li>
          <li>
            <Link href="/new-news">Add a News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
