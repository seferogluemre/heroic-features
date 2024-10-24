function Card({ content, title, icon: Icon }) {
  return (
    <div className="col-lg-6 col-sm-12 col-md-6 col-xl-4 d-flex justify-content-center">
      <div className="card">
        <div className="icon-box">
          <Icon />
        </div>
        <div className="card-body">
          <div>
            <h5 className="my-3">{title}</h5>
          </div>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
