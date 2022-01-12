import { useEffect, useState } from "react";
import moment from "moment";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import request from "../../../utils/request";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateUpdateEvents({ setComponent, event, isEdit }) {
  const [fromData, setFormData] = useState([
    {
      _id: null,
      name: "",
      description: "",
      date: "",
    },
  ]);

  const setComponentClick = (component) => {
    setComponent(component);
  };

  useEffect(() => {
    if (isEdit) {
      const values = [...fromData];
      values[0]["_id"] = event._id;
      values[0]["name"] = event.name;
      values[0]["description"] = event.description;
      values[0]["date"] = event.date
        ? moment(event.date).format("YYYY-MM-DD")
        : null;
      setFormData(values);
    }
  }, [isEdit]);

  const onClick = () => {
    const _id = fromData[0]["_id"];
    delete fromData[0]["_id"];
    if (isEdit) {
      request({
        url: `event/v1/${_id}`,
        method: "put",
        data: fromData[0],
      })
        .then((data) => {
          if (data.error) {
          }
          setComponentClick("default");
        })
        .catch((err) => {
          const { message } = err.data;
          if (message.length) {
            message.forEach((msg) => {
              toast.error("Error : " + msg);
            });
          } else {
            toast.error("Error : " + err.message);
          }
        });
    } else {
      request({
        url: "event/v1",
        method: "post",
        data: fromData[0],
      })
        .then((data) => {
          if (data.error) {
          }
          setComponentClick("default");
        })
        .catch((err) => {
          const { message } = err.data;
          if (message.length) {
            message.forEach((msg) => {
              toast.error("Error : " + msg);
            });
          } else {
            toast.error("Error : " + err.message);
          }
        });
    }
  };

  const handleInputChange = (event) => {
    const values = [...fromData];
    values[0][event.target.name] = event.target.value;
    setFormData(values);
  };

  return (
    <Form>
      <FormGroup>
        <Label for="name" className="mt-5">
          Title
        </Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
          value={fromData[0]["name"]}
          onChange={(event) => handleInputChange(event)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="textarea"
          name="description"
          id="description"
          value={fromData[0]["description"]}
          onChange={(event) => handleInputChange(event)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="date">Date</Label>
        <Input
          type="date"
          name="date"
          id="date"
          value={fromData[0]["date"]}
          placeholder="Enter Date"
          onChange={(event) => {
            handleInputChange(event);
          }}
        />
      </FormGroup>
      <Button onClick={() => onClick()}>Submit</Button>
    </Form>
  );
}
export default CreateUpdateEvents;
