import React, { useEffect, useState } from "react";
import request from "../../../utils/request";
import { Button, Card, CardBody, CardTitle, Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CareersList({ setComponent, showEditForm }) {
  const [careerList, setCareerList] = useState([]);

  const setComponentClick = (component) => {
    setComponent(component);
  };

  const deleteCareer = (id) => {
    request({
      url: `career/v1/${id}`,
      method: "delete",
      data: {},
    })
      .then((data) => {
        toast.success("Deleted Successfully");
        getCareers();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCareers();
  }, []);
  const getCareers = () => {
    request({
      url: "career/v1",
      method: "get",
      data: {},
    })
      .then((data) => {
        setCareerList(data.list);
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
        Add Career
      </Button>
      <Card>
        <CardBody>
          <CardTitle>Careers</CardTitle>
        </CardBody>
        <CardBody>
          <Table bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Post</th>
                <th>Requirements</th>
                <th>Skill set</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {careerList.map((career, index) => (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{career.post}</td>
                  <td>{career.requirements}</td>
                  <td>{career.skillSet}</td>
                  <td>
                    <button onClick={() => showEditForm(career)}> Edit </button>
                    <button onClick={() => deleteCareer(career._id)}>
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

export default CareersList;
