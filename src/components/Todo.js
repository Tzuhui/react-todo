export default function Todo(props) {
  return (
    <li class="list-group-item" key={props.id}>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id={props.id} />
        <label class="form-check-label" for={props.id}>
          {props.data.text}
        </label>
      </div>
    </li>
  );
}