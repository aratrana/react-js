import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";
function NewMeetup() {
  const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-course-e662c-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  }
  return (
    <section>
      <h1>NewMeetup page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
