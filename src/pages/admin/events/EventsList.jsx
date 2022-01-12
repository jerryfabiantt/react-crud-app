import React, { useEffect, useState } from "react";
import moment from "moment";
import request from "../../../utils/request";
import { Button, Card, CardBody, CardTitle, Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EventsList({ setComponent, showEditForm }) {
  const [eventList, setEventList] = useState([]);

  const deleteEvent = (id) => {
    request({
      url: `event/v1/${id}`,
      method: "delete",
      data: {},
    })
      .then((data) => {
        toast.success("Deleted Successfully");
        getEvents();
      })
      .catch((err) => console.log(err));
  };

  const setComponentClick = (component) => {
    setComponent(component);
  };

  useEffect(() => {
    getEvents();
  }, []);
  const getEvents = () => {
    request({
      url: "event/v1",
      method: "get",
      data: {},
    })
      .then((data) => {
        setEventList(data.list);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {" "}
      <Button
        color="primary"
        className="mt-5"
        onClick={() => setComponentClick("add")}
      >
        Add Event
      </Button>
      <Card>
        <CardBody>
          <CardTitle>Events</CardTitle>
        </CardBody>
        <CardBody>
          <Table bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {eventList.map((event, index) => (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{event.name}</td>
                  <td>{event.description}</td>
                  <td>
                    {event.date
                      ? moment(event.date).format("dddd, MMMM Do YYYY")
                      : ""}
                  </td>
                  <td>
                    <button onClick={() => showEditForm(event)}> Edit </button>
                    <button onClick={() => deleteEvent(event._id)}>
                      {" "}
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}

export default EventsList;
