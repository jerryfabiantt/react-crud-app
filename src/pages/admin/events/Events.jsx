import { useState } from "react";
import { Container } from "reactstrap";
import EventsList from "./EventsList";
import CreateUpdateEvents from "./CreateUpdateEvents";

function Events() {
  const [currentComponent, setCurrentComponent] = useState("default");
  const [eventToEdit, setEventToEdit] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  const setComponent = (component) => {
    setIsEdit(false);
    setCurrentComponent(component);
  };

  const editEvent = (event) => {
    setEventToEdit(event);
    setIsEdit(true);
    setCurrentComponent("Edit");
  };

  return (
    <div>
      <div className="content mt-5">
        <section className="content">
          <Container>
            {currentComponent === "default" ? (
              <EventsList
                setComponent={setComponent}
                showEditForm={editEvent}
              />
            ) : (
              <CreateUpdateEvents
                setComponent={setComponent}
                event={eventToEdit}
                isEdit={isEdit}
              />
            )}
          </Container>
        </section>
      </div>
    </div>
  );
}
export default Events;
