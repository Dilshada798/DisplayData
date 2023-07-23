function Footer() {
  const images = [
    { src: "Icon - Logo Navgurukul.png", alt: "no" },
    { src: "Class Project @React.png", alt: "no" }
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

