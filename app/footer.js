function Footer() {
  const images = [
    { src: "/Icon - Logo Navgurukul.png", alt: "Navgurukul Logo" },
    { src: "/Class Project @React.png", alt: "Class Project" }
  ];
  return (
    <div className="footer">
      <div className="footer1">
        {images.map((image, index) => (
          <img
            key={index}
            className="img"
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default Footer;

