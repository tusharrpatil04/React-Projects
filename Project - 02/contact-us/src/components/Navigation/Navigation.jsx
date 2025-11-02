import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img
          src="https://images.unsplash.com/photo-1563694983011-6f4d90358083?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
          alt="do some coding logo"
        />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;
