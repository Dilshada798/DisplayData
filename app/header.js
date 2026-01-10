const Header = ({ onAddMovieClick }) => (
  <div className="header">
    <div className="head1">
      <img src="/logo.svg" alt="Logo" />
      <div className="head2">
        <h1>Movie Hub</h1>
      </div>
    </div>
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <div className="head3">
        Watch
      </div>
      <div className="head4" onClick={onAddMovieClick} style={{ cursor: 'pointer' }}>
        Add Movie
      </div>
    </div>
  </div>
);

export default Header;

