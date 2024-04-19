import "./Gallery.css";

export function Gallery({ children }) {
  return (
    <div className="gallery">
      {children.map((img) => {
        return (
          <div className="gallery-img" key={img.props.id}>
            {img}
          </div>
        );
      })}
    </div>
  );
}
