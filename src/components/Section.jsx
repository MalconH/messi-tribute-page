import "./Section.css";

export function Section({ title, sectionId, icon, children, fullBleed = false }) {
  const punctuactionMarks = /[,.¡!¿?_`´'"]/g;
  const titleId = title.toLowerCase().replace(punctuactionMarks, "").replaceAll(" ", "-");
  const content = (
    <section className="section" id={`#${sectionId}`} aria-labelledby={titleId}>
      <h2 className="title" id={titleId}>
        {title}
      </h2>
      <div className="icon">{icon}</div>
      <div className="section-content">{children}</div>
    </section>
  );

  return fullBleed ? <div className="full-bleed">{content}</div> : content;
}
