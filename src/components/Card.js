export default function Card(props) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="card mt-4">
        <div className="card-body">
          <img src={props.data.picture.thumbnail} alt={props.data.name.last} className="rounded-circle mb-3"/>
          <h5 className="card-title">{props.data.name.last} {props.data.name.first}</h5>
          <p className="mb-1 text-muted"><small>{props.data.email}</small></p>
          <p className="mb-2 text-muted"><small>{props.data.phone}</small></p>
          <p>Registered: {props.data.registered.date.split('T')[0]}</p>
        </div>
      </div>
    </div>
  );
}