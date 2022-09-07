import Link from 'next/link';

import styles from './../styles//Navbar.module.scss';

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <div>
        {/* <Link href='/'><a>Начальная</a></Link> */}
        {/* <Link href='/page-1'><a>Page1</a></Link> */}
      </div>
    </nav>
  )
}

export default Navbar;
