const Menu = () => {
  return (
    // Your menu here 👇🏻
    <div>
      <ul className="menu__container">
        <li>
          <a href="#Home">INICIO</a>
        </li>
        <span>|</span>
        <li>
          <a href="#Home">UBICACION</a>
        </li>
        <span>|</span>
        <li>
          <a href="#Home">REGALOS</a>
        </li>
        <span>|</span>
        <li>
          <a href="#Home">RSVP</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
