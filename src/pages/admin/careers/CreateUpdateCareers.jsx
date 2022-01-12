import { useEffect, useState } from "react";
import moment from "moment";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import request from "../../../utils/request";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateUpdateCareers({ setComponent, career, isEdit }) {
  const [fromData, setFormData] = useState([
    {
      _id: null,
      title: "",
      post: "",
      skillSet: "",
      jobDescription: "",
      responsibilities: "",
      requirements: "",
      vacancy: null,
      closingDate: null,
    },
  ]);

  const setComponentClick = (component) => {
    setComponent(component);
  };

  useEffect(() => {
    if (isEdit) {
      const values = [...fromData];
      values[0]["_id"] = career._id;
      values[0]["title"] = career.title;
      values[0]["post"] = career.post;
      values[0]["skillSet"] = career.skillSet;
      values[0]["jobDescription"] = career.jobDescription;
      values[0]["responsibilities"] = career.responsibilities;
      values[0]["requirements"] = career.requirements;
      values[0]["vacancy"] = career.vacancy;
      values[0]["closingDate"] = career.closingDate
        ? moment(career.closingDate).format("YYYY-MM-DD")
        : null;
      setFormData(values);
    }
  }, [isEdit]);

  const onClick = () => {
    if (isEdit) {
      request({
        url: `career/v1/${fromData[0]["_id"]}`,
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
        url: "career/v1",
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
    if (event.target.name === "vacancy") {
      values[0][event.target.name] = Number(event.target.value);
    } else {
      values[0][event.target.name] = event.target.value;
    }
    setFormData(values);
  };

  return (
    <Form>
      <FormGroup>
        <Label for="title" className="mt-5">
          Title
        </Label>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="Enter Title"
          value={fromData[0]["title"]}
          onChange={(event) => handleInputChange(event)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="post">Post</Label>
        <Input
          type="text"
          name="post"
          id="post"
          value={fromData[0]["post"]}
          placeholder="Enter Post"
          onChange={(event) => handleInputChange(event)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="skillSet">Skill Set</Label>
        <Input
          type="text"
          name="skillSet"
          id="skillSet"
          value={fromData[0]["skillSet"]}
          placeholder="Enter Required Skill Set"
          onChange={(event) => handleInputChange(event)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="jobDescription">Job Description</Label>
        <Input
          type="textarea"
          name="jobDescription"
          id="jobDescription"
          value={fromData[0]["jobDescription"]}
          onChange={(event) => handleInputChange(event)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="responsibilities">Responsibilities</Label>
        <Input
          type="textarea"
          name="responsibilities"
          id="responsibilities"
          value={fromData[0]["responsibilities"]}
          onChange={(event) => handleInputChange(event)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="requirements">Requirements</Label>
        <Input
          type="textarea"
          name="requirements"
          id="requirements"
          value={fromData[0]["requirements"]}
          onChange={(event) => handleInputChange(event)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="vacancy">Number Of Vacancy</Label>
        <Input
          type="number"
          name="vacancy"
          id="vacancy"
          value={fromData[0]["vacancy"]}
          placeholder="Enter Number Of Vacancy"
          onChange={(event) => handleInputChange(event)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="closingDate">Closing Date</Label>
        <Input
          type="date"
          name="closingDate"
          id="closingDate"
          value={fromData[0]["closingDate"]}
          placeholder="Enter closing Date"
          onChange={(event) => {
            console.log("event.target.value", event.target.value);
            handleInputChange(event);
          }}
        />
      </FormGroup>
      <Button onClick={() => onClick()}>Submit</Button>
    </Form>
  );
}
export default CreateUpdateCareers;
