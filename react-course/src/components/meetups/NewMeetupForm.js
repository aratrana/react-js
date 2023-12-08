import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
function NewMeetupForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();
  function handleSubmitHandler(event) {
    event.preventDefault();
    const title = titleRef.current.value;
    const image = imageRef.current.value;
    const address = addressRef.current.value;
    const description = descriptionRef.current.value;
    const meetupData = {
      title: title,
      image: image,
      address: address,
      description: description,
    };

    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" ref={imageRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea required id="description" rows="5" ref={descriptionRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
